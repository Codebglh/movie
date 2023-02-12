
import React from 'react';
import axios from 'axios';

export default function index() {
    return <div>index {getcontent()
    }</div>;
}


     function getcontent(){
        console.log(1231)
        
        axios({
          url: "/api2/toplist",
          method: "get",
          data: {},
        }).then((res) => {
          console.log(res.data);
        //   this.setState({
        //     getdata: res.data,
        //   });

    })
}




