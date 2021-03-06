import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, addMessage, updateNewMessageText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let renderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          appState={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addMessage={addMessage}
          updateNewMessageText={updateNewMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};
