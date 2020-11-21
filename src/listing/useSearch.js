import page2 from "../data/page2.json";
import page3 from "../data/page3.json";
function UseSearch(query)
{
    if(query==='page2')
    {
        return page2;
    }
    else{
        return page3;
    }
    

    
}
export default UseSearch;