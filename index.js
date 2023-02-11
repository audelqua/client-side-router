import Router from './router.js'
import routes from './routes.js'

const router = new Router(routes);
window.router = router

document.getElementById('some-element-using-event-listener').addEventListener('click', customCallbackFunction)

function customCallbackFunction() {
    console.log('hi there!');
}