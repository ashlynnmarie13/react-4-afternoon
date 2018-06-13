import React, { Component } from "react";
import axios from "axios";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {}
    };
  }
  /* Similarly to ClassList, we can access the id for the given student on the match 
object that react-router-dom passes into our routeable components. Therefore, our 
API url would look like: http://localhost:3005/students/${this.props.match.params.id}. 
Let's capture the result
of this GET request and use the data to update the value of studentInfo on state.*/
  componentDidMount() {
    return axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(results => {
        console.log(results.data);
        this.setState({
          studentInfo: results.data
        });
      });
  }

  /*Now that we have the student data coming in, we can go into the render method 
  and display the pieces of the student's information. Let's put the student's first_name and 
last_name within a h1 tag and let's put the grade and email in their own h3 tags.*/

  render() {
    return (
      <div className="box">
        <h1>Student:</h1>
        <h1>
          {this.state.studentInfo.first_name}
          {this.state.studentInfo.last_name}
        </h1>
        <h3> Grade: {this.state.studentInfo.grade}</h3>
        <h3> Email: {this.state.studentInfo.email}</h3>
      </div>
    );
  }
}
