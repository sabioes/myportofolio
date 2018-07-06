import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = { name: 'Dummy' };
    }
    handleChange(e) {
        this.setState({ name: e.target.value });
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Welcome</h1>
                <p>Hello {this.state.name}</p>
                <input onChange={this.handleChange} defaultValue={this.state.name} />
            </div>
        );
    }
}

class About extends React.Component{
    render(){
        return (
            <div className="shopping-list">
              <h1>Shopping List for {this.props.name}</h1>
              <ul>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Oculus</li>
              </ul>
            </div>
          );
    }
}

class Expirience extends React.Component{
    render(){
        return (
            <div className="shopping-list">
              <h1>Shopping List for {this.props.name}</h1>
              <ul>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Oculus</li>
              </ul>
            </div>
        );
    }
}

ReactDOM.render(<Welcome/>, document.getElementById('root'));
ReactDOM.render(<About/>, document.getElementById('root'));
