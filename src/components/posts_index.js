import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary" >
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);

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
