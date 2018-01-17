import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return (
      <div className="post-index component-top">
        <h1>My Posts List</h1>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add Post
          </Link>
        </div>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
