import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";
import { getPost } from "../actions/postActions"

class Home extends Component {
  componentWillMount() {
    this.props.getPost();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.props.customers.data && this.props.customers.data.map(customer =>
            <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers
})

const dispatchToProps = (dispatch) => ({
  getPost: () => dispatch(getPost())
})

export default connect(mapStateToProps, dispatchToProps)(Home);



//   render() {
//     console.log(this.props);
//     const { posts } = this.props;
//     const postList = posts.length ? (
//       posts.map(post => {
//         return (
//           <div className="post card" key={post.id}>
//             <img src={Pokeball} alt="A pokeball" />
//             <div className="card-content">
//               <Link to={"/" + post.id}>
//                 <span className="card-title red-text">{post.title}</span>
//               </Link>
//               <p>{post.body}</p>
//             </div>
//           </div>
//         );
//       })
//     ) : (
//         <div className="center"> No posts yet </div>
//       );
//     return (
//       <div className="container home">
//         <h4 className="center">Home</h4>
//         {postList}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     posts: state.posts
//   };
// };

// export default connect(mapStateToProps)(Home);
