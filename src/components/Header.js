import React from "react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <SearchForm />

      <Link to="/">
        <Button color="primary" size="lg" block>
          Home
        </Button>
      </Link>
      {/* <Link to="/" className="home-button">
        Home
      </Link> */}
    </header>
  );
}
