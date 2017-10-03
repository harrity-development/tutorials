export default (text = 'hello worldsss') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    return element;
};