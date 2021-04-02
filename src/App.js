import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { useState, useEffect } from 'react';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';



function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: "karan", text: "Hiiiii"}, {username: "sinha", text: "Hello"}]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timeStamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your username'))
  }, [] );

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    // setMessages([...messages, {username: username, message: input}]);
    setInput('');
  }

  // console.log(messages);
  return (
    <div className="App">
      <h1>Hello programmers</h1>
      <h2>{username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a msg</InputLabel>
          <Input value={input} onChange={event => { setInput(event.target.value) }} />
          <Button disabled={!input} variant="contained" color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
        
      </form>

      {
        messages.map(message => (
          <Message username={username} message={message} />
          // <p>{message}</p>
        ))
      }


    </div>
  );
}

export default App;
