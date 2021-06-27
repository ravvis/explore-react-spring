const Wrapper = ({ title, children}) => {
    return <div style={{ minHeight: '100vh' }}>
        <h1>{ title }</h1>
        { children }
    </div>
}

export default Wrapper