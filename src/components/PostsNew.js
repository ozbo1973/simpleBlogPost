import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div>
        <label>{field.label}:</label>
        <input type="text" {...field.input} />
      </div>
    );
  }

  onFormSubmit(values) {
    console.log(values);
    this.props.history.push('/');
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

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
