import React,{useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import {getBugs} from '../../../Controllers/Redux/bugSlice'
import Card from '../../Components/Dashboard/card'


export default ()=>{
    const dispatch = useDispatch();
    const bugs = useSelector(state=>state.bugs);
    // const browserHistory =useHistory();
    // const navigate = useNavigate();
const browserHistory = useNavigate(); // Change the variable name



    let highCount = 0;
    let midCount = 0;
    let lowCount = 0;

    if(bugs !== undefined){
        highCount = filterBugs(1);
        midCount = filterBugs(2);
        lowCount = filterBugs(3);
    }
    function redirect() {
        browserHistory('/viewbug'); // Change the function to use browserHistory
      }
      

    // function redirect() {
    //     navigate('/viewbug')
    //     // browserHistory.push('/viewbug')
    // }

    function filterBugs(priority){
        return bugs.filter(bug => bug.priority === priority);
    }

    useEffect(()=>{
        dispatch(getBugs());
    },[bugs === undefined])

    return(
        <div className="page-container">
        <Card priority="1" count={highCount.length} clicked={redirect} />
        <Card priority="2" count={midCount.length} clicked={redirect} />
        <Card priority="3" count={lowCount.length}  clicked={redirect} />

        </div>
    )
}