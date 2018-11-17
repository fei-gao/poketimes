import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";
import { getPost } from "../actions/postActions"

class Home extends Component {
  componentWillMount() {
    this.props.getPost();
    console.log("component will mount")
  }
  // render() {
  //   console.log("render", this.props);
  //   const { posts } = this.props;
  //   const postList = posts.length ? (
  //     posts.data.map(post => {
  //       return (
  //         <div className="post card" key={post.id}>
  //           <img src={Pokeball} alt="A pokeball" />
  //           <div className="card-content">
  //             <Link to={"/" + post.id}>
  //               <span className="card-title red-text">{post.title}</span>
  //             </Link>
  //             <p>{post.body}</p>
  //           </div>
  //         </div>
  //       );
  //     })
  //   ) : (
  //       <div className="center"> No posts yet </div>
  //     );
  //   return (
  //     <div className="container home">
  //       <h4 className="center">Home</h4>
  //       {postList}
  //     </div>
  //   );
  // }
  render() {
    console.log(this.props.posts)
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {this.props.posts && this.props.posts.map(post =>
            <li key={post.id}>{post.title} {post.body}</li>
          )}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  posts: state.posts
})

const dispatchToProps = (dispatch) => ({
  getPost: () => dispatch(getPost())
})

export default connect(mapStateToProps, dispatchToProps)(Home);