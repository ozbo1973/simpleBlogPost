import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div>
        <label>{field.label}:</label>
        <input type="text" {...field.input} />
        <p>{field.meta.error}</p>
      </div>
    );
  }

  onFormSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
        <h1>New Blog Post</h1>
        <Field
          name="title"
          label="Title For Post"
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Blog Content"
          component={this.renderField}
        />
        <button className="btn" type="submit">
          Save
        </button>
        <Link className="btn" to="/">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Must Enter a Title!';
  }

  if (!values.categories) {
    errors.categories = 'Must Enter Categories!';
  }

  if (!values.content) {
    errors.content = 'Must Enter blog content!';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(connect(null, { createPost })(PostsNew));
