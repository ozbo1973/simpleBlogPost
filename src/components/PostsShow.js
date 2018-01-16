import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back to Posts</Link>
        <h3>Blog Title</h3>
        <h4>Blog Categories</h4>
        <p>Blog content</p>
      </div>
    );
  }
}

export default PostsShow;
