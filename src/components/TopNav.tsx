import * as React from "react";
import { Link } from "react-router-dom";

export interface TopNavProps { clickHandler: any }
export interface TopNavState { }

export default class TopNav extends React.Component<TopNavProps, TopNavState> {

    componentWillMount() {
        this.setState({});
    }

    componentDidMount() {
    }

    onButtonClicked(event: any) {
        this.props.clickHandler(event);
    }

    render() {
        return (
            <div className="topNav" onClick={this.onButtonClicked.bind(this)} >
                <Link to={`/`}>Home</Link>
                <Link to={`/topic1`}>Topic1</Link>
                <Link to={`/topic2`}>Topic2</Link>
                <Link to={`/topic3/subtopic1`}>Topic3: Subtopic1</Link>
            </div>
        );
    }
}
