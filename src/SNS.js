import React from "react";

class SNS  extends React.Component {
    render() {
    const friends = [
        {name: 'victoria', age: 13, city: 'seoul'},
        {name: 'sun', age: 34, city: 'busan'},
        {name: 'johseb', age: 25, city: 'busan'},
        {name: 'syleemomo', age: 9, city: 'seoul'},
        {name: 'hannah', age: 41, city: 'daegu'},
        {name: 'shara', age: 37, city: 'seoul'},
        {name: 'martin', age: 28, city: 'daegu'},
        {name: 'gorgia', age: 39, city: 'seoul'},
        {name: 'nana', age: 24, city: 'busan'},
        {name: 'dannel', age: 19, city: 'seoul'},
    ]
    return (
    	<>
            <h3>{friends[0].name }</h3>
            <h3>{friends[1].name }</h3>
            <h4> </h4>
       
        </>
    )
    }
}
export default SNS