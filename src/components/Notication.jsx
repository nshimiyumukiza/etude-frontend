import { notification } from "antd";
import { useEffect } from "react";


const Notification = () => {

// use useEffect anable to see notiffiaction when page load and and use setTimeout to controll time to see notification

  useEffect(()=>{
   setTimeout(()=>{
    notification.success({
        message: "Erneste Web Site",
        description: "Welcome to my webpage!",
      });

   },3000)
  },[])

  return (
    <div>
   
    </div>
  );
};

export default Notification;
