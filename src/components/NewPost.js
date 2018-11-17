import React, { Component } from 'react';

class NewPost extends Component {
  state = {
    title: '',
    body: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.onAddPost(this.state);
      this.handleReset();
      this.props.history.push('/')
    }
  };

  handleReset = () => {
    this.setState({
      title: '',
      body: '',
    });
  };

  render() {
    return (
      <div className="section container">
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="input-field">
              <i className="material-icons prefix">message</i>
              <input type="text" name="title" onChange={this.handleInputChange} value={this.state.title} />
              <label>Title</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">mode_edit</i>
              <textarea name="body" onChange={this.handleInputChange} value={this.state.body} className="materialize-textarea" cols="20" rows="20"></textarea>
              <label>Body</label>
            </div>
            <div className="input-field center">
              <button className="btn red darken-4">Submit</button>
              <button className="btn red darken-5" onClick={this.handleReset}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPost;