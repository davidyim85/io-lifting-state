

const ChildTwo = (props) => {
  

    return (
      <div style={{ backgroundColor: 'yellow',}}>
         <h2>ChildTwo</h2>
         <button onClick={() => {props.setCount(props.count + 1)}}>Click</button>
      </div>
    )
  }
  
  export default ChildTwo