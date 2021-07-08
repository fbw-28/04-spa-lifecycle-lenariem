import React, { Component } from "react";
import "./SearchResults.css";
import User from "./User";

export default class SearchResults extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users:[]
        }  
    }

  /*  fetchdata=async()=>{
        let response= await fetch("https://jsonplaceholder.typicode.com/users")
        let finalData= await response.json()
        this.setState({
            users:finalData
        })
    } */

    
    componentDidMount(){
        //best place to fetch data from server
      /*   this.fetchdata() */

      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=> this.setState({
            users:data
        },()=>console.log(this.state.users)))
    }

  render() {
    return (
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map(item=>{
        return (
          <User id = {item.id} name = {item.name} email = {item.email} key = {item.id}/>
        )})}
        </tbody>
      </table>
    );
  }
}