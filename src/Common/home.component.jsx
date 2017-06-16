import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Request from 'superagent';
import _ from 'lodash';
class Home extends Component {

	 constructor(){
    super();
    this.state = {};
    }
    
    componentWillMount() {
      var url = "https://www.kenta.cn/moldapp/WP/wp-json/kentaosd/v1/developmentDept/";
      Request.get(url).then((response) => {
        console.log(response);
        this.setState({
        data: response.body,
        total: response.body.totalResults
        });
 		console.log( response.body);
      });
    }
  


       render() {


       var data = _.map(this.state.data, (item) =>{
     
      return 
      // <tr><td> {item.wxno} </td><td> {item.machineno} </td><td> {item.moldno} </td><td> {item.sydt} </td><td> {item.userField10} </td></tr>;
              });
	  	if (this.state.data) {
        return(

        	<BootstrapTable data={this.state.data} striped={true} hover={true}>
		      <TableHeaderColumn dataField="wxno" isKey={true} dataAlign="center" dataSort={true}>wxno</TableHeaderColumn>
		      <TableHeaderColumn dataField="machineno" dataSort={true}>machineno</TableHeaderColumn>
		      <TableHeaderColumn dataField="moldno" dataSort={true}>moldno</TableHeaderColumn>
		      <TableHeaderColumn dataField="sydt" dataSort={true}>sydt</TableHeaderColumn>
		      <TableHeaderColumn dataField="userField10" dataSort={true}>userField10</TableHeaderColumn>
		  </BootstrapTable>
              // <table className="table table-striped">
              // 	<thead>
              // 		<tr><th>wxno</th>
              // 		<th>machineno</th>
              // 		<th>moldno</th>
              // 		<th>sydt</th>
              // 		<th>userField10</th>
              // 		</tr>
              // 	</thead>
              // <tbody>
              // 	{data}
              // </tbody>
              // </table>
         );

        }
        else{
          return(<div>loading</div>);
       }
    }
}

export default Home