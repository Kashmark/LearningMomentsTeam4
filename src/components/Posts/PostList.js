import { useState, useEffect } from "react";
import { getAllPosts } from "../../services/PostServices.js";
import { Post } from "./Post.js";

export const PostList = () => {
  const [posts, setAllPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((postsArray) => {
      setAllPosts(postsArray);
      console.log("state set");
    });
  }, []);

  return (
    <section>
      <div className="posts">
        {posts.map((postObj) => {
          return <Post key={postObj.id} post={postObj} />;
        })}
      </div>
    </section>
  );
};

// posts = tickets
// user = user
// likes?
//
