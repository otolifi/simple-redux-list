import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CourseList() {
    const courses = useSelector(state => state.courses.data);
    const assessments = useSelector(state => state.assessments.data);
    const dispatch = useDispatch();
    function addCourse() {
        dispatch({ type: 'ADD_COURSE', title: 'Estática II' });
        addAssessment();
    }
    function addAssessment() {
        dispatch({ type: 'ADD_ASSESSMENT', title: 'Exame' });
    }
    return (
        <>
            <button type="button" onClick={addCourse}>Add Course</button>
            <ul>
                {courses.map(course => <li key={course}>{course} - {assessments}</li>)}
            </ul>
            <ul>

            </ul>
        </>
    )
}