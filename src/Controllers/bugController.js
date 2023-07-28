import bugModel from '../Models/bugModel'

export function retriveBugs(){
    let data = [];
    data.push(new bugModel({
      _id: 2345678,
      name : "Crash on Load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version:"V2.0",
      assigned: "KAPIL",
      creator:"Ray",
      priority:1,
      time:"23:48",
    }))
    data.push(new bugModel({
        _id: 2345678,
        name : "won't Load",
        details: "Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version:"V2.0",
        assigned: "KAPIL",
        creator:"Ray",
        priority:3,
        time:"23:48",
      }))
  

    let sorted = data.sort((a,b)=>{return a.priority- b.priority})
     return sorted;
}
