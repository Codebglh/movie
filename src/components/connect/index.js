import React, { PureComponent } from "react";
import axios from "axios";
export default class index extends PureComponent {
  state = {
    getdata: {
      list: [],
    },
  };
  render() {
    // const { list } = this.state.getdata;

    return (
      <div className="c-box">
df1
      </div>
    );
  }
  componentDidMount() {
    console.log(123)
    this.getcontent();
  }
  
  getcontent = () => {
    console.log(1231)
    axios({
      url: "/api1/api.php/provide/vod",
      method: "post",
      data: {
        ac:"videolist",
        wd:"狂飙"
       
      },
    }).then((res) => {
      console.log(res.data);
      this.setState({
        getdata: res.data,
      });
    });
    // axios({
    //   url: "/api2/v1/filter/list",
    //   method: "get",
    //   data: {
       
    //   },
    // }).then((res) => {
    //   console.log(res.data);
    //   this.setState({
    //     getdata: res.data,
    //   });
    // });
  };
}
