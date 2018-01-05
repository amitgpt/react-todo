import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
var tasksList = ["Task 1", "Task 2", "Task 3"];
ReactDOM.render(<App tasks={tasksList} />,
        document.getElementById('root')
      );
registerServiceWorker();
