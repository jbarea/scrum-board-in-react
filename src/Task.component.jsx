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
        onHandleUpdateTaskName: PropTypes.func.isRequired,
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
                                
                <ColorPicker 
                    // color={this.state.background}
                    // onChangeComplete={this.handleChangeComplete}
                    // onHandleClose={this.handleClose}
                    // onHandleClick={this.handleClick}
                    />
                <textarea className="taskText editable" onChange={(e)=>this.props.onHandleUpdateTaskName(
                    this.props.data.taskId,
                    this.props.data.listId,
                    this.props.data.taskText = e.target.value
                )}>
                    {this.props.data.text}
                  </textarea>
            </div>
        );
    }
}
export default Task;