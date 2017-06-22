import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary" >
            Add a post
          </Link>
        </div>
        List of Blog POSTS
      </div>
    );
  }
}

export default connect(null, {fetchPosts})(PostsIndex);

// SAME CONTAINER CONFIGURATOIN AS OLD TIMES WITH NEW ES6 REFACTORING METHODS PLEASE CONSIDER FOR A DETAILED VIEW

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchPosts } from '../actions/index';
//
//
// class PostsIndex extends Component {
//   componentWillMount() {
//     this.props.fetchPosts();
//   }
//   render() {
//     return (
//       <div>List of Blog POSTS</div>
//     );
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(PostsIndex);

// Note: export default connect (null, {fetchPosts: fetchPosts } OR { fetchPosts })(PostsIndex); can be used in that case we dont need to write mapDispatchToProps function.
// And also we dont need bindActionCreators on the top in that case
