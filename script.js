let homeDOM = document.getElementsByTagName('a')[0];
let aboutDOM = document.getElementsByTagName('a')[1];
let contactDOM = document.getElementsByTagName('a')[2];

window.onload = fetchPage('home.html');

window.addEventListener('popstate', () => {
    switch(history.state.page) {
        case 0:
            fetchPage('home.html')
            break;
        case 1:
            fetchPage('about.html')
            break;
        case 2:
            fetchPage('contact.html')
            break;
        default:
            fetchPage('home.html')
    }
    
})

homeDOM.addEventListener('click', event => {
    history.pushState({page: 0}, "", "/home");
    fetchPage('home.html');
    // alert(history.state.page);
})

aboutDOM.addEventListener('click', event => {
    history.pushState({page: 1}, "", "/about");
    fetchPage('about.html');
    // alert(history.state.page);
})

contactDOM.addEventListener('click', event => {
    history.pushState({page: 2}, "", "/contact");
    fetchPage('contact.html');
    // alert(history.state.page);
})

let contentDOM = document.getElementById('content');

function fetchPage(filename) {
    if(typeof filename != 'string') return; //guard clause
// sätt in progressbar animation
    fetch(filename)
        .then((result) => {
            return result.text();
        }).then((data) => {contentDOM.innerHTML = data})
}