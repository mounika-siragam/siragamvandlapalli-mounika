import React from 'react';
import ReactDom from 'react-dom';
class employee extends React.component{
Constructor( ){ //React framework calls this constructor
super( );
console.log("creating employee component...");
this.state={visitorcount :"0"};
}
render( ){
                this.state.visitorcount++;
              return <h1><B><i>First component</i><B></h1><BR><B>visitor# </B>
this.state.visitorcount;
}
}
