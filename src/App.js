import React from 'react';
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import "./App.css";


export default function App() {
  return (
    <div>
      <Header/>
      <form>
        <input type="text" className="inputField"/>
        {/*    <input type="submit" value="seach"/> */}
        <button type="submit">Search</button>
      </form>
      <SearchResults/>
    </div>
  );
}

