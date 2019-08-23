Notification.requestPermission(
    permission => permission === "granted" ? 
        showNotification ( `Что вам следует знать о JS` ) : null
)

function showNotification ( message ) {
    let options = {
        icon: 'https://www.dofactory.com/Images/Box/javascript-transparent.png',
        body: message
    }
    const notification = new Notification( 'garevna', options )
    notification.onclick = function ( event ) {
        window.open( 'https://github.com/garevna/js-course/wiki' )
    }
}


