import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8090/api/gitrepo/java")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((response) => {
        console.log("Error happened");
      });
  }
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            {this.state.posts.map((post) => (
              <td>{post.repoName}</td>
            ))}
          </tr>
          <tr>
            <td>User</td>
            {this.state.posts.map((post) => (
              <td>{post.repoUser}</td>
            ))}
          </tr>
          <tr>
            <td>Link</td>
            {this.state.posts.map((post) => (
              <td>{post.repoLink}</td>
            ))}
          </tr>
          <tr>
            <td>Language</td>
            {this.state.posts.map((post) => (
              <td>{post.language}</td>
            ))}
          </tr>
          <tr>
            <td>Bookmark</td>
            <input type="checkbox"></input>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Search;
