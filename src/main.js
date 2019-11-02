class TwitterButton extends React.Component {
    render() {
        return <button>{this.props.count}</button>
    }
}

class SnsShareBox extends React.Component {
    render() {
        return (
            <div>
                <TwitterButton count={this.props.count} />
            </div>
        );
    }
}

class OperationBox extends React.Component {
    render() {
        return (
            <div>
                <SnsShareBox count={this.props.count} />
            </div>
        );
    }
}

class Counter extends React.Component {
    render() {
        return (
            <div id="count">
                <span>{this.props.count}</span>
            </div>
        )
    }
}

class Description extends React.Component {
    render() {
        return (
            <header id="inmu-button-header">
                <h1>やりますねえ！を押せる画期的なWEBアプリですねえ！😃</h1>
            </header>
        );
    }
}

class InmuButtonBox extends React.Component {
    render() {
        return (
            <div id="inmu-button-box">
                <Description />
                <Counter count={this.props.count} />
                <OperationBox count={this.props.count} />
            </div>
        )
    }
}

//カウントモック
const count = 30;

ReactDOM.render(
    <InmuButtonBox count={count} />,
    document.getElementById('root')
);