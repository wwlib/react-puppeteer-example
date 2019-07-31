import * as React from "react";

export interface BottomNavProps { clickHandler: any }
export interface BottomNavState { }

export default class BottomNav extends React.Component<BottomNavProps, BottomNavState> {

    componentWillMount() {
        this.setState({});
    }

    componentDidMount() {
    }

    onButtonClicked(event: any) {
        this.props.clickHandler(event);
    }

    onLogoClicked(): void {
        var win: any = window.open('http://wwlib.github.io', '_blank');
        if (win) {
            win.focus();
        }
    }

    render() {
        return (
            <div className="bottomNav" onClick={this.onButtonClicked.bind(this)} >
                Project repo: <a href="https://github.com/wwlib/react-puppeteer-example">github.com/wwlib/react-puppeteer-example</a>
            </div>
        );
    }
}
