import React, {Component} from 'react' //라이브러리 호출

const Person = ( {name, age}) => {

  return (
  	<>
    	  <h3>{name}</h3>
          <h4>{age}</h4>
       </>
  )
}


//HTML 템플릿

export default Person