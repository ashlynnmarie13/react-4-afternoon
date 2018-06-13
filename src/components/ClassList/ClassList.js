import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then(results => {
        this.setState({
          students: results.data
        });
      });
  }

  render() {
    /*Now that we have our students coming in from our json-server, let's use a map 
    in the render method to render each student's first and last name in a h3 element.
     Remember the react requires mapped elements to have a unique key property. 
     In this case, we'll just use the index of the map.*/

    const students = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={i}>
        <h3>
          {student.first_name} {student.last_name}
        </h3>
      </Link>
    ));

    /*In this map, we have access to all the student's properties. Therefore, if we need 
  the id, we can access it by student.id. Let's set the to prop of the Link component 
  to be /student/${ student.id }. We'll also need to move 
  the key prop onto the Link component since it'll now be the most parent item.*/

    return (
      <div className="box">
        {/*Lastly, we just need to update the h1 element to display the current class. Just like how we accessed the route 
      parameter for our axios request, we can do the same thing here using { } in our JSX.*/}
        <h1> {this.props.match.params.class} </h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    );
  }
}
