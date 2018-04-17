import * as React from 'react';
import ReactDOM from 'react-dom';

import './ext.js';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.Text = "abc";
        this.state = {
            count: 1
        }
        __array.push(this);
    }

    ChanageSate() {
        var a = this.state.count;
        this.setState({
            count: ++a
        });
    }

    onClick() {
        //this.ChanageSate();
        for (let i = 0; i < __array.length; i++) {
            __array[i].ChanageSate();
        }
        // fetch("/api/test", {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         firstParam: 'yourValue',
        //         secondParam: 'secondValue',
        //     })
        // }).then((response) => {
        //     if (response.ok) {
        //         return response.json();
        //     }
        // }).then((json) => {
        //     //alert(JSON.stringify(json));
        //     for(let i=0;i<__array.length;i++){
        //         __array[i].ChanageSate();
        //     }
        // }).catch((error) => {
        //     console.error(error);
        // });
    }

    render() {
        var list = () => {
            var res = [];
            for (var i = 1; i <= 1000; i++) {
                res.push(
                    <div>
                        <input type="button" value={"按钮" + i + "[" + this.state.count + "]"} onClick={this.onClick.bind(this)} />
                    </div>
                );
            }
            return res
        }

        return (
            list()
        );
    }

    // render() {
    //     return (
    //         <div>
    //             <input type="button" value={"按钮" + this.props.index + "[" + this.state.count + "]"} onClick={this.onClick.bind(this)} />
    //         </div>
    //     );
    // }
}


var __array = [];

// for (var i = 1; i <= 1000; i++) {
//     ReactDOM.render(<App index={i} />, document.getElementById('root' + i));
// }
ReactDOM.render(<App index={1} />, document.getElementById('root1'));