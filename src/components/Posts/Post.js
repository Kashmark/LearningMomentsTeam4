import { getAllPosts } from "../../services/PostServices.js";
import "./AllPosts.css";

export const Post = ({ post }) => {
  return (
    <section className="post">
      <div className="posts">
        <div className="post-info"></div>
        <div>{post.title}</div>
      </div>
      <div>
        <div className="post-info"></div>
        <div>{post.topic.name}</div>
      </div>
      <div>
        <div className="post-info"></div>
        <div>Author : {post.user.name}</div>
      </div>
      <div>
        <div className="post-info"></div>
        <div>{post.body}</div>
      </div>
      <div>
        <div className="post-info"></div>
        <div>Likes : {post.likes.length}</div>
      </div>
    </section>
  );
};
