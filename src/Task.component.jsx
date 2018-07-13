import React from 'react';
import TaskType from './Task.type.js';

import PropTypes from 'prop-types';
import './Task.component.css';

class Task extends React.Component {
    static propTypes = {
        data: TaskType,
        onHandleMarkAsCompleted: PropTypes.func.isRequired,
        onHandleRemoveTask: PropTypes.func.isRequired
    }

    handleRemoveTask = () => {
        this.props.onHandleRemoveTask(this.props.data.taskId);
    }
    render () {
        return (
            <div className={`taskItem ${this.props.data.completed ? 'completed': ''}` } id={this.props.data.taskId}>
                <button onClick={this.props.handleRemoveTask}>X</button>
                <input 
                    type="checkbox" 
                    onChange={(e)=> 
                        this.props.onHandleMarkAsCompleted(
                            this.props.data.taskId, 
                            this.props.data.listId,
                            e.target.checked
                        )}
                    checked={this.props.data.completed}/>
                <div className="taskText">
                    {this.props.data.text}
                  </div>
            </div>
        );
    }
}
export default Task;