import * as React from "react";

export interface HeaderProps { clickHandler: any }
export interface HeaderState { }

export default class Header extends React.Component<HeaderProps, HeaderState> {

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
            <div className="header" onClick={this.onButtonClicked.bind(this)} >
                <div className="headerTitle">
                    <img className="headerLogo" alt="Ww Logo" src={'./assets/ww-logo-40.png'} style={{width: 40}} onClick={this.onLogoClicked.bind(this)}/>
                    <h4>React Puppeteer Example</h4>
                </div>
            </div>
        );
    }
}
