import * as React from 'react';
import { matchPath } from 'react-router';
// import {db} from './config';
const list = []
const dict1 = {}
var cnt = 0
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {canvas: null,ctx:null,list:[],dict : {},cnt :0,todos : {}};
    }    
    componentDidMount() {
        // db.ref('/users').push({
        //     name : "Dhruv"
        //   });
        // db.ref('/users').on('value', querySnapShot => {
        //     let data = querySnapShot.val() ? querySnapShot.val() : {};
        //     let todoItems = data;
        //     console.log(data);   
        // });
        console.log(this.todos)
        // console.log(this.refs)
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        ctx.strokeRect(5,5,100,100)
        for(var k=0;k<3;k++){
            var x = 250;
            var y = 290*k + 60;
            var size = 100
            var start_x = x;
            var start_y = y;   
            for(var j=0;j<2;j++){
                for(var i=0;i<4;i++){
                    var final_x = start_x + size;
                    var final_y = start_y + size;
                    ctx.strokeRect(start_x,start_y,size,size);
                    start_x = start_x + size;
                }
                start_x = x;
                start_y = start_y + size;
            }
        }
        var x = 150
        var y = 30
        var n = 4
        var length = 580
        var gap = 280     
        for(var i=0;i<n;i++){
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x+length,y);
            y = y + gap;
            ctx.strokeStyle = "#FF0000";
            ctx.stroke();
        }        
        ctx.beginPath();
        ctx.moveTo(150,30);
        ctx.lineTo(150,30+280*3);
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(150+580,30);
        ctx.lineTo(150+580,30+280*3);
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
        ctx.strokeStyle = "#000000";
        //next set of paths
        for(var k=0;k<3;k++){
            var x = 810;
            var y = 290*k + 60;
            var size = 100
            var start_x = x;
            var start_y = y;   
            for(var j=0;j<2;j++){
                for(var i=0;i<4;i++){
                    var final_x = start_x + size;
                    var final_y = start_y + size;
                    ctx.strokeRect(start_x,start_y,size,size);
                    start_x = start_x + size;
                }
                start_x = x;
                start_y = start_y + size;
            }
        }
        var x = 730
        var y = 30
        var n = 4
        var length = 580
        var gap = 280     
        for(var i=0;i<n;i++){
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x+length,y);
            y = y + gap;
            ctx.strokeStyle = "#FF0000";
            ctx.stroke();
        }        
        ctx.beginPath();
        ctx.moveTo(730,30);
        ctx.lineTo(730,30+280*3);
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(730+580,30);
        ctx.lineTo(730+580,30+280*3);
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
        x = 0
        y = 170
        size = 100
        for(var i=0;i<3;i++){
            ctx.moveTo(x,y);
            ctx.strokeRect(x,y,size+20,size);
            y = y + 200;
        }
        ctx.strokeStyle = "#000000"
        ctx.strokeRect(5,750,100,100)
    }
    addNewTodo() {
        // db.ref('/users').push({
        //   done: false,
        //   todoItem: this.state.presentToDo,
        // });
        alert('Action!', 'A new To-do item was created');
        this.setState({
          presentToDo: '',
        });
      }
    addToList(x,y){
        list.push([x,y]);
        this.setState({
            list : list
        })
        console.log(list);
    }
    addToDict(x,x1,y1){
        dict1["shelf" + x] = [x1,y1]
        this.setState({
            dict : dict1
        })
        console.log(dict1);
        // const cnt1 = x + 1
        // this.setState({
        //     cnt : cnt1
        // })
        cnt += 1
    }
    render() {
        return(
          <div >
            <canvas ref="canvas" width = {window.innerWidth} height={window.innerHeight} style={{
            marginTop: 10,
            }} onClick={e => {
                alert(e.clientX + "," + e.clientY)
                {this.addToList(e.clientX,e.clientY)}
                {this.addToDict(cnt,e.clientX,e.clientY)}
              }}/>
            <img ref="image" src={matchPath.jpg} className="hidden" />
          </div>
        )
      }
    }


export default Map;