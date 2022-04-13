function Content () {
    return (
        <div> 
            <p>Hello, World!</p>
            <ul>
                <li>Water-Bottle</li>
                <li>Mobile</li>
                <li>Smartphone</li>
            </ul>
        </div>
    )
}

function Main(){
    return (
        <p>Hello from the Main</p>
    )
}

ReactDOM.render(<div>
    <Main />
    <Content />
</div>, document.getElementById('root'))