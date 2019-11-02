const BUTTON_SOUND_FILE = "../assets/pushSound.mp3";

const playPushShound = () => {
    const audio = new Audio(BUTTON_SOUND_FILE);
    audio.play();
};

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
    constructor(props) {
        super(props);
    }

    handleChangeCount = (event) => {
        playPushShound();
        this.props.onClick();
    };

    render() {
        return (
            <div id="inmu-button" >
                <button onClick={this.handleChangeCount}>やりますねえ！</button>
            </div>
        );
    }
}

class OperationBox extends React.Component {
    render() {
        return (
            <div>
                <InmuButton onClick={this.props.onClick} />
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
                <h1>やりますねえ！を押せる画期的なアプリ。</h1>
            </header>
        );
    }
}

class InmuButtonBox extends React.Component {
    constructor(props) {
        super(props);
        const count = localStorage.getItem('count');
        this.state = {
            count: count
        };
    }

    handleChangeCount = () => {
        let count = localStorage.getItem('count');
        count = parseInt(count) + 1;
        localStorage.setItem('count', count);
        this.setState({
            count: localStorage.getItem('count')
        });
    }

    render() {
        return (
            <div id="inmu-button-box">
                <Description />
                <Counter count={this.state.count} />
                <OperationBox count={this.state.count} onClick={this.handleChangeCount} />
            </div>
        );
    }
}

if (localStorage.getItem('count') === null) {
    localStorage.setItem('count', 0);
}

ReactDOM.render(
    <InmuButtonBox />,
    document.getElementById('root')
);