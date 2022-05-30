import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import App from './App';
import { Provider } from './context/context';

import './index.css'

ReactDOM.render(
    <SpeechProvider appId='6c09163f-1a87-4708-9bac-9c95cb3f5ca7' language='en-US'>
        <Provider>
            <App /> 
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);