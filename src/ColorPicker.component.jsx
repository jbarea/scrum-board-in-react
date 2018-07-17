import React from 'react';
import {TwitterPicker} from 'react-color';

class ColorPicker extends React.Component {
    // constructor(props){
    //     super(props);
    // }
        
    state = {
        background: "#fff"
    };
    
    handleChangeComplete = (color) => {
        console.log(color.hex);
        this.setState({ background: color.hex });
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false });
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    }
    render(){
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
        return (
            <div>
                <button onClick={this.handleClick} style={{background: this.state.background,height:'20px'}}>     </button>
                {this.state.displayColorPicker ? <div style={popover}>
                    <div style={cover} onClick={this.handleClose} />
                    <TwitterPicker color={this.state.background}
                        onChangeComplete={this.handleChangeComplete}
                        onHandleClose={this.handleClose}
                        onHandleClick={this.handleClick} />
                </div> : null}
            </div>
        );
    }
}

export default ColorPicker;