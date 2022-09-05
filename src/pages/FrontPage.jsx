import React, { useEffect, useState } from "react";
import "../App.css";
import profilepicture from "../profilepicture.jpg";
// import logo from "../logo.svg";

const FrontPage = () => {
  const [posts, setPosts] = useState([]);

  //Get JSON from wordpress with posts etc.

  const fetchData = () => {
    fetch("http://localhost/wp-json/wp/v2/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div>
          <img className="profilepicture" src={profilepicture} alt="Profile" />
        </div>
        <div>
          <p>
            I'm a junior web developer with great interest in becoming a part of
            a team to make static web sites come to life.
          </p>
        </div>
      </div>
      <h1>SKILL SET</h1>
      <div className="Skills">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <h3>Frontend</h3>
              <p>
                Started with basic Javascript and HTML/CSS and some JQuery
                before advancing to React as a frontend framework and working
                with API's
              </p>
            </div>
            <div class="col-sm">
              <h3>Backend</h3>
              <p>
                Wokring with different databases such as MySQL and MongoDB and
                learning the MERN stack.
              </p>
            </div>
            <div class="col-sm">
              <h3>ALM</h3>
              <p>
                Worked lot in groups where we all used the same project using
                GitLab in an agile environment. With that I learned to code
                tests and pipelines using Husky, Eslint and YAML.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container" className="Portfolio">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
            <h2>PORTFOLIO</h2>
            <p>
              To illustrate what I've learned we had individual projects where
              we implemented our newly found tools to create different products
              such as Twitter clones and to-do applications.
            </p>
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
      <div class="container" className="Portfolio">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
            <h2>Blog</h2>
            {posts.length > 0 && (
              <>
                {posts.map((post) => (
                  <div className="post" key={post.id}>
                    <h1>{post.title.rendered}</h1>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered,
                      }}
                    ></div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
