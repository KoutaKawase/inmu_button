function OperationBox(props) {

}

function Counter(props) {

}

function Description(props) {

}

function InmuButtonBox(props) {
    return (
        <Description />
        <Counter />
        <OperationBox />
    );
}

//カウントモック
const count = 30;

ReactDOM.render(
    <InmuButtonBox count={count} />,
    document.getElementById('root')
);