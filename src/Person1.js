import React from 'react';

class Person1 extends React.Component {
   state = {
      name: "sunrise",
      age: 23,
      friends: [
          "victoria",
          "daniel",
          "hanna"
      ]
  }

  changeName = () => { 
    alert(this.state);
}
  
  render() {    
    return (
    	<>
            <button onClick={this.changeName}>신상정보 확인하기</button>
           
            
        </>
    )
  }
}

export default Person1;