// import { performAction } from './js/app'
import { handleSubmit } from './js/formHandler'
import './styles/body.scss'

console.log(handleSubmit)

// add eventlistener with callback action
// document.getElementById('generate').addEventListener('click', performAction);

// moved to index.js as suggested in https://knowledge.udacity.com/questions/435694

    // Check that service workers are supported
    // if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
    //     window.addEventListener('load', () => {
    //         console.log('Installing service workers')
    //         navigator.serviceWorker.register('/service-worker.js');
    //     });
    // }

    export {
        // performAction,
        handleSubmit
    }