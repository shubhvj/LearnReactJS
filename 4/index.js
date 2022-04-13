const page = (
    <div class="content">
        <img src="./assets/logo.svg" />
        <h1>Fun facts about React!</h1>
        <ul>
            <li>Was first released in 2013.</li>
            <li>Created by @Jordan Walke</li>
            <li>Over 100K stars on Github</li>
            <li>Maintained by Facebook(Meta)</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

//below line will output -> [object Object]
// document.getElementById('root').append(page)

//if you stringify the page the output will be a JSON
// document.getElementById('root').append(JSON.stringify(page))

ReactDOM.render(page, document.getElementById('root'))