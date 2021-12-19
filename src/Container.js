import Title from './Title'
import Description from './Description'
import Range from './Range'
import Text from './Text1'
let Container = (props) =>{
   return (
         <div  style ={{border: '1px green solid' ,width: '500px' ,height:'300px' ,textAlign:'left', padding:'10px'}}>
            <Title/>
            <Description Desc="How Much You love Front End?"/>
            <Range/>
            <Description Desc="What is your favorite front end feature/topic?"/>
            <Text/>
            {props.children}
         </div>
    )
}

export default Container;