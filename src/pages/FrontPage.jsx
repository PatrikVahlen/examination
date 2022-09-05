import React, { useEffect, useState } from "react";
import "../App.css";
import profilepicture from "../profilepicture.jpg";
import logo from "../logo.svg";

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
      <div class="container">
        <div class="row">
          <div id="profilepicture">
            <img src={profilepicture} alt="Profile Picture" />
          </div>
          <div>ABOUT ME</div>
        </div>
      </div>
      <h1>EDUCATION</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h3>Frontend</h3>
            <p>
              Worked with React as frontend framework and started exploring
              JavaScript as a language, focusing mostly on rendering information
              from API’s
            </p>
          </div>
          <div class="col-sm">
            <h3>Backend</h3>
            <p>
              A lot of information about different databases such as MySQL and
              MongoDB. Set up our own databases, collected information from
              databases using Express and how to work with SQL.
            </p>
          </div>
          <div class="col-sm">
            <h3>ALM</h3>
            <p>
              Worked lot in groups where we all used the same project using
              GitLab. We got a taste of planning using trello and deconstructing
              bigger tickets into smaller objectives
            </p>
          </div>
        </div>
      </div>
      <div class="container" className="Portfolio">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
            <h2>Portfolio</h2>
            <p>
              To illustrate what we’ve learned we had individual projects where
              we implemented our newly found tools to create different products
              such as Twitter clones and to-do applications.
            </p>
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
