import React, {Component} from 'react';
import Axios from 'axios';
import Post from '../../components/Post/Post';

import './Posts.css';

class Posts extends Component {

  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.slice(0, 8);
            const updatedPost = posts.map(post => (
                {
                    ...post, author: 'Tom'
                }
            ));
            this.setState({ posts: updatedPost });
        });
}

postSelectedHandler = (id) => {
  this.setState({ selectedPostId: id });
}

  render() {
    const posts = this.state.posts.map(post => (
      <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)} />
  ));
    return (
      <section className="Posts">
        {posts}
      </section>
     )
  }
}

export default Posts;