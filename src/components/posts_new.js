import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
      // blig post has been created, navigate the user to the index
      // we navigate by calling this.context.router.push with the new path to navigate to.
      this.context.router.push('/'); 
      });
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    // const handleSubmit = this.props.handleSubmit
    // OR
    // const { handleSubmit } = this.props;
    // SIMILARLY
    // const title = this.props.fields.title
    // const title = this.props.fields.content
    // const title = this.props.fields.categories
    // all of this is assigned in one line above using ES6 syntax, isnt is the same object we provided to redux-form helper method in form of an array?????
    // Yeep infact we were registering it with redux-form component. Because we knew about the behaviour of the redux-form component, we knew that after registering
    // our components with redux-form helper, it will allow us to access these properties onto form element using this.props.                                                                                  // Just in the exact same way { connect } helper injects props into our component

    console.log(title); // console will show title object with a lot of interesting properties on it.
    // NOW WE WANT TO PASS ENTIRE CONFIGURATOIN OBJECT WHICH IS TITLE TO INPUT ELEMENT AS PROPERTY, LIKE {...title }. ITS CALLED DESTRUCTURING OF THE OBJECT
    // (into its separate keys and values). IT SAYS I WANT TO PASS THIS OBJECT I.E. TITLE TO INPUT BUT NOT AS THE FORM, NOT LIKE FORMPROPS = {TITLE}
    // ( IN THIS CASE IT WOULD BE ACCESSED AS THIS.PROPS.FORMPROPS ) inside input, INSTEAD I WANT TO MAKE SURE EVERY PROPERTY OF THE TITLE OBJECT
    // (after DESTRUCTURING(breaking it into its separate keys and values) AND THEN PASS IT TO THE INPUT TAG). now onput can use its properties like title
    // object has a property onChange it can be accessed inside <input like onChange={ title.onChange }> etc all ither properties are accessible to input now. AND
    // redux helper has been wired up html form. updates will now be reflected on our state where we like on component level and on application level.

    // { reduxForm } helper  does the exact same thing as { connect } helper()inject props into our component, so { reduxForm } is injecting some helpers for us
    // onto this.props inside of the component below also deals with mapStateToProps and mapDispatchToProps // and convert component into container

    // handleSubmit function which we got from redux requires an action creator(optional) from us before we can call it with the final form properties.
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
        <div className={ `form-group ${title.touched && title.invalid ? 'has-danger' : ''}` }>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>


        <div className={ `form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}` }>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={ `form-group ${content.touched && content.invalid ? 'has-danger' : ''}` }>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to= "/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
  errors.title = 'Enter a UserName';
}

if (!values.categories) {
errors.categories = 'Enter a UserName';
}

if (!values.content) {
errors.content = 'Enter a UserName';
}
  return errors;
}

// ...title is destructuring of the object title it means evry property on the title object should be available to input element above as title properties not as form properties

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// redux-form: first argument is form config, 2nd is mapStateToProps and 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  validate // we are getting 3 properties injected into our props object. fields.title, fields.categories, fields.content
}, null, { createPost } )(PostsNew);
