import * as React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
            <div>
                wangg
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root2'));
ReactDOM.render(<App />, document.getElementById('root3'));
ReactDOM.render(<App />, document.getElementById('root4'));
ReactDOM.render(<App />, document.getElementById('root5'));