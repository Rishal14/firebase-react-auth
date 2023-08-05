import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Logout</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Rishal D"}</h2>
    </div>
  );
}

export default Home;