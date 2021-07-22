import React, { Component } from 'react';
import Student from './Student';
import PropTypes from 'prop-types';
import './Class.css';

class Class extends Component {
    render() {
        return this.props.students.map((student) => (
            <Student className="col-13" key={student.id} student={student} studentPresent={this.props.studentPresent} />
        ));
    }
}
    
// Prop types
Class.propTypes = {
    students: PropTypes.array.isRequired
}

export default Class;