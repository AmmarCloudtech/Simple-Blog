import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    const { fields: {title, categories, content }, handleSubmit } = this.props; // same as const handleSubmit = this.props.handleSubmit;
                                                                               // Just in the exact same way { connect } helper injects props into our component
                                                                               // { reduxForm } does the exact same thing, so { reduxForm } is injecting some helpers for us
                                                                               // onto this.props inside of the component below
    return (
      <form onSubmit={handleSubmit}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
        </div>
        <input type="text" className="form-control" {...title} />

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);
