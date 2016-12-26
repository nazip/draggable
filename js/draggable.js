const { bind } = _;

class Draggable extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {left: 0, top: 0, drag: false};
        this.mouseDown = bind(this.mouseDown, this);
        this.mouseUp = bind(this.mouseUp, this);
        this.mouseMove = bind(this.mouseMove, this);
    }
    
    mouseDown(e) {
        this.setState({drag: true});
    }
    
    mouseUp(e) {
        this.setState({drag: false});
    }
    
    mouseMove(e) {
        if(this.state.drag) {
            this.setState({left: e.pageX - (this.props.width/2), top: e.pageY - (this.props.height/2)});
        }
    }
    
    render() {
        const top = String(this.state.top) + 'px';
        const left = String(this.state.left) + 'px';
        const divStyle = {
                position: "absolute",
                width: this.props.width + 'px',
                height: this.props.height + 'px',
                top: top,
                left: left
        }
        //console.log(top, left);
        return <div onMouseDown={this.mouseDown} onMouseMove={this.mouseMove} onMouseUp={this.mouseUp} style={divStyle}>{ this.props.children }</div>;
    }
}

ReactDOM.render( 
    <Draggable width="220" height="80"><h1>Flying, string</h1></Draggable> ,
    document.getElementById("app")
);