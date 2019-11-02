class TwitterButton extends React.Component {
    render() {
        return (
            <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                className="twitter-share-button"
                data-show-count="false"
                data-lang="ja"
                data-size="large"
                data-text={"現在のやりますねえは" + this.props.count + "回"}
            >
                Twitter
            </a >
        );
    }
}

class SnsShareBox extends React.Component {
    render() {
        return (
            <div id="twitter-button">
                <TwitterButton count={this.props.count} />
            </div>
        );
    }
}

class InmuButton extends React.Component {
    render() {
        return (
            <div id="inmu-button">
                <button>やりますねえ！</button>
            </div>
        );
    }
}

class OperationBox extends React.Component {
    render() {
        return (
            <div>
                <InmuButton />
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
const count = 30000;

ReactDOM.render(
    <InmuButtonBox count={count} />,
    document.getElementById('root')
);