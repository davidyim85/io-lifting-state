

const ChildOne = (props) => {
  

  return (
    <div style={{ backgroundColor: 'red',}}>
       <h2>ChildOne</h2>
        <p>Count: {props.count}</p>
       </div>
  )
}

export default ChildOne
