const addElem = function ( tagName, container ) {
    return ( container || document.body ).appendChild (
        document.createElement ( tagName )
    )
}

const createPage = function ( header, text ) {
    let main = document.getElementsByTagName ( "main" )[0]
    main ? null : addElem ( "main" )
    main.innerHTML = `
        <style>
            * { font-family: Arial; }
            body { background: #000; color: #dde; }
            h3 { color: #f50; }
            p { color: #09b; }
        </style>
        <h3>${header}</h3>
        <p>${text}</p>
    `
}

const createHomePage  = () => createPage ( "Home", "This is the home page of application" )
const createAdminPage = () => createPage ( "ADMIN panel", "Welcome to Admin Page" )
const createUserPage  = () => createPage ( "User info", "There may be your personal info" )
const createDebugPage = () => createPage ( "Debug page", "There may be some info about the application process" )

window.onpopstate = function ( event ) {
    console.log ( `location: ${document.location}\nstate: ${JSON.stringify(event.state)}` )
    event.state[ callback ]()
}

createHomePage()

history.pushState ( { callback: "createHomePage" }, "admin", "/admin" )
history.pushState ( { callback: "createAdminPage" }, "admin", "/admin" )
history.pushState ( { callback: "createUserPage" }, "user", "/user" )
history.pushState ( { callback: "createDebugPage" }, "debug", "/debug" )

[ "home", "admin", "user", "debug" ].forEach (
    item => {
        let button = addElem ( "button" )
        button.innerText = item
        button.onclick = function ( event ) {
            history.go ( `/${item}` )
        }
    }
)

// history.back()
// history.back()
// history.go(2)
