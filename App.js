const heading = React.createElement('h1', {}, 'namaste react')
const heading1 = React.createElement('h1', {}, 'heading 1')
const heading2 = React.createElement('h2', {}, 'heading 2')
const container = React.createElement('div', {
    id: 'container',
    class:'ravi'
}, [heading1, heading1])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)