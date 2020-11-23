import React, { useEffect,useState } from 'react';
import {Card} from "react-bootstrap";
import page1 from "../data/page1.json";
import poster1 from "../images/poster1.jpg";
import poster2 from "../images/poster2.jpg";
import poster3 from "../images/poster3.jpg";
import poster4 from "../images/poster4.jpg";
import poster5 from "../images/poster5.jpg";
import poster6 from "../images/poster6.jpg";
import poster7 from "../images/poster7.jpg";
import poster8 from "../images/poster8.jpg";
import poster9 from "../images/poster9.jpg";
import posterthatismissing from "../images/posterthatismissing.png";
import listaction from '../store/listactions';
import Search from "../images/search.png";
import Back from "../images/Back.png";
import {connect} from 'react-redux';
import UseSearch from "./useSearch";


function MovieList(props){
const [result,setResult]=useState([]);
const [data,setData]=useState([page1]);
const [val,setVal]=useState(false);


const {add}=props;
useEffect(()=>{
         
            add([page1]);
},[add])

function handleSearch(e){

    let result=[]
     result=props.data.map((pages)=>pages.page['content-items']?.content?.filter(page=>page.name.toLowerCase().search(e.target.value.toLowerCase())>=0));
        result.length!==0 && setResult(result)

    if(e.target.value==='')
    {
        setResult([])

    }

}


function handleClick(e){
   
    setVal(true)
   
}


function poster(posterimage)
{

    switch(posterimage)
    {
            case "poster1.jpg":
             return poster1;
            case "poster2.jpg":
               return poster2;
            case "poster3.jpg":
               return poster3;
            case "poster4.jpg":
                return poster4;
            case "poster5.jpg":
                return poster5;
            case "poster6.jpg":
                return poster6;
            case "poster7.jpg":
                    return poster7;
            case "poster8.jpg":
                    return poster8;
            case "poster9.jpg":
                 return poster9;
              case "posterthatismissing.jpg":
                return posterthatismissing;

             default:
                       break;
    }
}

function Cards(img)
{

        return <Card>
       <Card.Body> 
            <Card.Img variant="top" src={img} />
        
        </Card.Body> 
           </Card>
           
}

function handleData(query)
{
    let resultantArr=[];

    const result=UseSearch(query);
    resultantArr=[...data,result]
    
    setData(resultantArr);
    props.add(resultantArr)
}

const handleScroll =(e)=>{
    const bottom = Math.ceil(((e.target.scrollTop + e.target.clientHeight)/e.target.scrollHeight)*100) 
       if (bottom>=50 && bottom<=60) {
        const a=data.find((pages)=>(pages?.page['page-num-requested']==='2'))
        !a&& handleData('page2');
  
    
        }
       

        if (bottom>=90) {
            const a=data.find((pages)=>(pages?.page['page-num-requested']==='3'))
            !a &&handleData('page3');

         }


}
 return( 
     <div className="movielistcontainer">
     <div className="movielist_search" > 
            <div className="movielist_searchBar"> 
               <div className="searchBar" >
                   <img src={Back} alt="back-arrow"></img> 
                    {val?  <input onChange={handleSearch} type="text" placeholder="Search.."></input> :
                    <p>Romantic Comedy</p>}
               </div>
              
               <img className="searchImg" alt="search" src={Search} onClick={handleClick}></img> 
            
              </div>
            
       </div>   
       <div className="navbar">

        </div>
       <div className="row cardStyle"  onScroll={handleScroll}> 
           {result.length===0 ? data.map((pages)=>pages.page['content-items']?.content?.map((page1,index)=>{

               let img=poster(page1['poster-image']);
                return <div className="col-4 col-Item" key={index}>

                     {Cards(img)}

              <p >{page1?.name}</p>
            </div> 
       
                   
    
      })):
    result.map((res)=>res.map((page1,index)=>{

        let img=poster(page1['poster-image']);
        return <div className="col-4 col-Item" key={index}>

               {Cards(img)}

        <p>{page1?.name}</p>
      </div> 
 
             

    }))


    } 
     </div> 
      </div>
 );

}
const mapStateToProps = state => {
    const {data}=state.Details
    return {data};
};

// const mapDispatchToProps = dispatch => ({
//     add: () =>dispatch(addAction())
   
// });
const mapDispatchToProps ={
    add: listaction.addAction
   
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);