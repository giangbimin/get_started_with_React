import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
class HelloReact extends React.Component{
  render() {
    return(
      <div id="hello"> hello</div>
    )
  }
}
ReactDOM.render(<HelloReact/>, document.getElementById('root'));

