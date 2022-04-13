const page = (
    <div>
        <h1>A sample page</h1>
        <h3>What else you thought it was gonna be!</h3>
        <h4>- Created by @Shubh Johri</h4>
        <p>Don't contact for more information</p>
    </div>
)

//below line will output -> [object Object]
// document.getElementById('root').append(page)

//if you stringify the page the output will be a JSON
// document.getElementById('root').append(JSON.stringify(page))

ReactDOM.render(page, document.getElementById('root'))