

function customRender(element , container){

const DOMele = document.createElement(element.type);
DOMele.innerHTML = element.Children;
// DOMele.setAttribute('href', elemeproppropprops);

for (const prop in element.props) {
    if (prop === 'Children') continue 
        
    DOMele.setAttribute(prop , ReactEle.props[prop])
}

container.appendChild(DOMele)
}
const ReactEle = {
    type : 'a',
    props:{ 
    href : 'https://google.com',
      target : '_blank'
    },
    Children:'Click me to visit Google.com'
    }


const mainContainer  = document.querySelector('#root');

customRender(ReactEle , mainContainer)