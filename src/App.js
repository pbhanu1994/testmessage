import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    text: {
      recepient: "",
      message: ""
    }
  };
  styles = {
    forms: {
      marginTop: 200,
      marginLeft: 400
    },
    message: {
      marginTop: 20
      // maxWidth: 500
    }
  };

  sendMessage = () => {
    const { text } = this.state;
    console.log("Phone: ", text.recepient, "Message: ", text.message);

    //Pass the variables within the query string
    fetch(
      `http://127.0.0.1:4000/send-text?recepient=${
        text.recepient
      }&textMessage=${text.message}`
    ).catch(err => console.error(err));
  };

  render() {
    const { text } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <center>
            <h3 style={{ paddingTop: 50 }}>
              Hello there, send the MMS here..!! :)
            </h3>
          </center>
          <div className="form" style={this.styles.forms}>
            <div className="row">
              <input
                className="form-control form-control-lg col-2"
                type="text"
                placeholder="+61"
                disabled
              />
              <input
                value={text.recepient}
                onChange={e =>
                  this.setState({
                    text: { ...text, recepient: e.target.value }
                  })
                }
                className="form-control form-control-lg col-4"
                type="text"
                placeholder="444 444 444"
                required
              />
            </div>
            <div className="row">
              <input
                value={text.message}
                onChange={e =>
                  this.setState({
                    text: { ...text, message: e.target.value }
                  })
                }
                style={this.styles.message}
                className="form-control form-control-lg col-6 form"
                type="text"
                placeholder="Type your Message here..."
                required
              />
            </div>
            <div className="row">
              <button
                onClick={this.sendMessage}
                style={this.styles.message}
                type="submit"
                className="form-control btn btn-primary btn-lg btn-block col-6"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
