import Child from './child';

const Parent = () => {
    return <div style={{border: '1px solid black'}}>
        <p>Parent</p>
        <Child/>
    </div>
}

export default Parent;