(this["webpackJsonpget-goal-money"]=this["webpackJsonpget-goal-money"]||[]).push([[0],{160:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),c=n.n(r),i=(n(59),n(48)),l=n(49),s=n(50),u=n(54),d=n(53),b=n(7),p=n(8),h=Object(p.b)({name:"calculator",initialState:{yearlyIncreasedMoneyList:[]},reducers:{calculate:function(e,t){console.log("calculate / payload:",t.payload);var n=t.payload,a=n.currentMoney,o=n.depositIncreaseRate,r=n.investingGainRate,c=n.goalMoney,i=[],l=[],s=a,u=a;for(i.push(a),l.push(a);u<c;)u=u*(1+.01*r)+(s*=1+.01*o),l.push(s),i.push(u);i.push(u),e.yearlyIncreasedMoneyList=i}}}),j=h.actions.calculate,y=h.reducer,g=n(6),x=n.n(g),v=n(1),m=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(i.a)({},e.target.name,Number(e.target.value)),a.updateEnableButton)},a.updateEnableButton=function(e){var t=a.state,n=t.currentMoney,o=t.depositIncreaseRate,r=t.investingGainRate,c=t.goalMoney;"number"!==typeof n||n<0||"number"!==typeof o||o<0||"number"!==typeof r||r<0||"number"!==typeof c||c<0?a.setState({enableButton:!1}):a.setState({enableButton:!0})},a.handleClick=function(){var e=a.state,t=e.currentMoney,n=e.depositIncreaseRate,o=e.investingGainRate,r=e.goalMoney;"number"!==typeof t||t<0||"number"!==typeof n||n<0||"number"!==typeof o||o<0||"number"!==typeof r||r<0||a.props.calculate({currentMoney:a.state.currentMoney*a.state.currentMoneyMultiplier,depositIncreaseRate:a.state.depositIncreaseRate,investingGainRate:a.state.investingGainRate,goalMoney:a.state.goalMoney*a.state.goalMoneyMultiplier})},a.state={currentMoney:"",depositIncreaseRate:"",goalMoney:"",investingGainRate:"",goalMoneyMultiplier:1e4,currentMoneyMultiplier:1e4,enableButton:!1},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:x.a.row,children:Object(v.jsxs)("div",{className:x.a.inputArea,children:[Object(v.jsxs)("div",{className:x.a.inputBox,children:[Object(v.jsx)("span",{className:"title",children:"\uccab \uc5f0\ub3c4 \uc800\ucd95\uc561: "}),Object(v.jsx)("input",{name:"currentMoney",onChange:this.handleChange,type:"text",placeholder:"(\uc22b\uc790 \uc785\ub825)"}),Object(v.jsxs)("select",{name:"currentMoneyMultiplier",value:this.state.currentMoneyMultiplier,onChange:this.handleChange,children:[Object(v.jsx)("option",{value:"100000000",children:"\uc5b5\uc6d0"}),Object(v.jsx)("option",{value:"10000",children:"\ub9cc\uc6d0"}),Object(v.jsx)("option",{value:"1",children:"\uc6d0"})]})]}),Object(v.jsxs)("div",{className:x.a.inputBox,children:[Object(v.jsx)("span",{className:"title",children:"\ub9e4\ub144 \uc800\ucd95 \uc99d\uac00\uc728: "}),Object(v.jsx)("input",{name:"depositIncreaseRate",onChange:this.handleChange,type:"text",placeholder:"(\uc22b\uc790 \uc785\ub825)"}),"%"]}),Object(v.jsxs)("div",{className:x.a.inputBox,children:[Object(v.jsx)("span",{className:"title",children:"\ub9e4\ub144 \ud22c\uc790 \uc218\uc775\ub960: "}),Object(v.jsx)("input",{name:"investingGainRate",onChange:this.handleChange,type:"text",placeholder:"(\uc22b\uc790 \uc785\ub825)"}),"%"]}),Object(v.jsxs)("div",{className:x.a.inputBox,children:[Object(v.jsx)("span",{className:"title",children:"\ubaa9\ud45c \uae08\uc561: "}),Object(v.jsx)("input",{name:"goalMoney",onChange:this.handleChange,type:"text",placeholder:"(\uc22b\uc790 \uc785\ub825)"}),Object(v.jsxs)("select",{name:"goalMoneyMultiplier",value:this.state.goalMoneyMultiplier,onChange:this.handleChange,children:[Object(v.jsx)("option",{value:"100000000",children:"\uc5b5\uc6d0"}),Object(v.jsx)("option",{value:"10000",children:"\ub9cc\uc6d0"}),Object(v.jsx)("option",{value:"1",children:"\uc6d0"})]})]}),Object(v.jsx)("button",{disabled:!this.state.enableButton,onClick:this.handleClick,children:"\uacc4\uc0b0"})]})})})}}]),n}(a.Component),O=Object(b.b)((function(e){return{result:e.calculator.result}}),(function(e){return{calculate:function(t){return e(j(t))}}}))(m),f=n(52);function M(){var e=Object(b.c)((function(e){return e.calculator})).yearlyIncreasedMoneyList,t=e.map((function(e,t){return Math.floor(e/1e4)})),n={labels:e.map((function(e,t){return t+"\ub144 \ud6c4"})),datasets:[{label:"\uacbd\uc81c\uc801 \uc790\uc720\ub97c \uc704\ud558\uc5ec!",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t}]};return console.log(n),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:Object(v.jsxs)("h2",{children:["\ub2f9\uc2e0\uc758 \ubaa9\ud45c \uae08\uc561\uc744 \ubaa8\uc73c\uae30 \uc704\ud574\uc11c\ub294 ",e.length," ","\ub144 \uac78\ub9bd\ub2c8\ub2e4"]})}),Object(v.jsx)(f.Line,{data:n})]})}n(160);var C=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("header",{className:"App-header",children:[Object(v.jsx)(O,{}),Object(v.jsx)(M,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=n(2),B=Object(p.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),R=B.actions,N=(R.increment,R.decrement,R.incrementByAmount,B.reducer),k=Object(_.c)({counter:N,calculator:y}),I=Object(p.a)({reducer:k});I.subscribe((function(){var e=I.getState();console.log("I dispatched successfully: ",e)})),c.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(b.a,{store:I,children:Object(v.jsx)(C,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,t,n){},6:function(e,t,n){e.exports={row:"Calculator_row__iPYgU",inputArea:"Calculator_inputArea__1kMN1",inputBox:"Calculator_inputBox__1Xua_",value:"Calculator_value__1e5js",button:"Calculator_button__23xFb",textbox:"Calculator_textbox__3tlzq",asyncButton:"Calculator_asyncButton__1PrgG Calculator_button__23xFb"}}},[[161,1,2]]]);
//# sourceMappingURL=main.022c539e.chunk.js.map