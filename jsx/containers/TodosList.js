import React from 'react';
import TodosList from '../components/TodosList';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        todos: state
    }
};

export default connect(mapStateToProps)(TodosList)