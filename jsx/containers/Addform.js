import React from 'react';
import AddForm from '../components/AddForm';
import {addTodo} from '../actions'
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => {
            dispatch(addTodo(text))
        }
    }
};

export default connect(null,mapDispatchToProps)(AddForm)