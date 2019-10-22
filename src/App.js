import React from 'react';
import './App.css';
import MessengerCustomerChat from './component/FacebookChat'; // Importation from the Facebook Chat component.

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MessengerCustomerChat/>{/* Calling the component for the Facebook Chat. */}
      </header>
    </div>
  );
}
export default App;

// Explain: We need a url for the use of this and config the facebook page, 
// in configuration -> messenger platform -> Customer Chat Plugin and configure the plugin,
// the most important is add the domain where use the chat.
