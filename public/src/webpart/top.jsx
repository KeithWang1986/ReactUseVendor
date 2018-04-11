import * as React from 'react';
import ReactDOM from 'react-dom';
import "../ext.js";

class Top extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                登陆
            </div>
        );
    }
}

ReactDOM.render(<Top />, document.getElementById('g_top_r'));