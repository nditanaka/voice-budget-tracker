import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import App from './App';
import { Provider } from './context/context';
// import reportWebVitals from './reportWebVitals';
import './index.css'

ReactDOM.render(
    <SpeechProvider appId='6c09163f-1a87-4708-9bac-9c95cb3f5ca7' language='en-US'>
        <Provider>
            <App /> 
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
