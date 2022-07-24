import * as  React from 'react';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';


const projectID = '1fc4fe42-2e45-4f64-8d03-2f61f1ab1ba2';



const App=()=>{
    if (!localStorage.getItem('username')) return <LoginForm />;
 
    return(
    <ChatEngine 
    height= "100vh"
    projectID={projectID}
   // projectID="1fc4fe42-2e45-4f64-8d03-2f61f1ab1ba2"
    userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=> <ChatFeed  { ...chatAppProps } />}
   
    />
 )

}
export default App;
