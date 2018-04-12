import * as React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.Text = "abc";
    }

    onClick() {
        fetch("/api/test", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'secondValue',
            })
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((json) => {
            alert(JSON.stringify(json));
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        return (
            <div>
                <input type="button" value="按钮" onClick={this.onClick.bind(this)} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root2'));
ReactDOM.render(<App />, document.getElementById('root3'));
ReactDOM.render(<App />, document.getElementById('root4'));
ReactDOM.render(<App />, document.getElementById('root5'));