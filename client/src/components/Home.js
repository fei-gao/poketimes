import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";
import { getPost } from "../actions/postActions"

class Home extends Component {
  componentDidMount() {
    this.props.getPost();
  }
  render() {
    const posts = this.props.posts.data;
    const postList = posts && posts.map(post => {
      return (
        <div className="post card" key={post.id}>
          <img src={Pokeball} alt="A pokeball" />
          <div className="card-content">
            <Link to={"/" + post.id}>
              <span className="card-title red-text">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      );
    })
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

const mapDispatchToProps = (dispatch) => ({
  getPost: () => dispatch(getPost())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);