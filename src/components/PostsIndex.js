import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  // renderPosts() {
  //   return _.map(this.props.posts, post => {
  //     return (
  //       <li className="list-group-item" key={post.id}>
  //         <Link to={`/posts/${post.id}`}>{post.title}</Link>
  //       </li>
  //     );
  //   });
  // }
  render() {
    return (
      <div>
        <h1>Posts Index</h1>
        <Link className="btn btn-primary" to="/posts/new">
          Add Post
        </Link>
        <ul>
          <li>
            <Link to="/posts/id">Blog Post Title</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default PostsIndex;
