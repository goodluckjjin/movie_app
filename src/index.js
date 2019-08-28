import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('potato'));

//react application은 한번에 하나의 component만 rendering 할 수 있다.
//따라서 모든것은 app안에 들어가 있어야 한다. (여기서 app은 App.js)


