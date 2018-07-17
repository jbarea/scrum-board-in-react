import React from 'react';
import TaskType from './Task.type.js';

import PropTypes from 'prop-types';
import './Task.component.css';
import ColorPicker from './ColorPicker.component.jsx';

class Task extends React.Component {
    static propTypes = {
        data: TaskType,
        onHandleMarkAsCompleted: PropTypes.func.isRequired,
        onHandleRemoveTask: PropTypes.func.isRequired,
    }

    handleInputChange = (e) => {
        this.setState({ newTaskName: e.target.value })
    }

    render () {
        return (
            <div className={`taskItem ${this.props.data.completed ? 'completed': ''}` } id={this.props.data.taskId}>
                <button onClick={(e) => this.props.onHandleRemoveTask(this.props.data.taskId,this.props.data.listId)}>X</button>
                <input 
                    type="checkbox" 
                    onChange={(e)=> 
                        this.props.onHandleMarkAsCompleted(
                            this.props.data.taskId, 
                            this.props.data.listId,
                            e.target.checked
                        )}
                    checked={this.props.data.completed}/>
                {/* <button onClick={this.handleClick}>Color</button> */}
                
                <ColorPicker />
                <textarea className="taskText editable" onChange={(e)=>this.props.data.text = this.newTaskName}>
                    {this.props.data.text}
                  </textarea>
            </div>
        );
    }
}
export default Task;