class OperationBox extends React.Component {
    render() {
        return <button>{this.props.count}</button>
    }
}

class Counter extends React.Component {
    render() {
        return <p>{this.props.count}回</p>
    }
}

class Description extends React.Component {
    render() {
        return <p>説明ヘッダー</p>
    }
}

class InmuButtonBox extends React.Component {
    render() {
        return (
            <div>
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