(this["webpackJsonpget-goal-money"]=this["webpackJsonpget-goal-money"]||[]).push([[0],{160:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(16),r=n.n(i),l=(n(59),n(48)),c=n(49),s=n(50),u=n(54),d=n(53),h=n(7),p=n(17),b=Object(p.b)({name:"calculator",initialState:{yearlyIncreasedMoneyList:[]},reducers:{calculate:function(e,t){console.log("calculate / payload:",t.payload);var n=t.payload,a=n.currentMoney,o=n.depositIncreaseRate,i=n.investingGainRate,r=n.goalMoney,l=[],c=[],s=a,u=a+n.initialMoney;for(l.push(u),c.push(u);u<r;)u=u*(1+.01*i)+(s*=1+.01*o),c.push(s),l.push(u);e.yearlyIncreasedMoneyList=l}}}),j=b.actions.calculate,y=b.reducer,g=n(5),x=n.n(g),O=n(1),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(l.a)({},e.target.name,Number(e.target.value)),a.updateEnableButton)},a.updateEnableButton=function(e){var t=a.state,n=t.currentMoney,o=t.depositIncreaseRate,i=t.investingGainRate,r=t.goalMoney,l=t.initialMoney;"number"!==typeof n||n<0||"number"!==typeof o||o<0||"number"!==typeof i||i<0||"number"!==typeof r||r<0||"number"!==typeof l||l<0?a.setState({enableButton:!1}):a.setState({enableButton:!0})},a.handleClick=function(){var e=a.state,t=e.currentMoney,n=e.depositIncreaseRate,o=e.investingGainRate,i=e.goalMoney,r=e.initialMoney;"number"!==typeof t||t<0||"number"!==typeof n||n<0||"number"!==typeof o||o<0||"number"!==typeof i||i<0||"number"!==typeof r||r<0||a.props.calculate({currentMoney:a.state.currentMoney*a.state.currentMoneyMultiplier,depositIncreaseRate:a.state.depositIncreaseRate,investingGainRate:a.state.investingGainRate,goalMoney:a.state.goalMoney*a.state.goalMoneyMultiplier,initialMoney:1e4*a.state.initialMoney})},a.state={currentMoney:"",depositIncreaseRate:"",goalMoney:"",investingGainRate:"",goalMoneyMultiplier:1e4,currentMoneyMultiplier:1e4,enableButton:!1},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:x.a.row,children:Object(O.jsxs)("div",{className:x.a.inputArea,children:[Object(O.jsxs)("div",{className:x.a.inputBox,children:[Object(O.jsx)("span",{className:"title",children:"\ucd08\uae30 \uae08\uc561: "}),Object(O.jsx)("input",{name:"initialMoney",onChange:this.handleChange,type:"text",placeholder:"(\uc22b\uc790 \uc785\ub825)"}),"\ub9cc\uc6d0"]}),Object(O.jsxs)("div",{className:x.a.inputBox,children:[Object(O.jsx)("span",{className:"title",children:"\uccab \uc5f0\ub3c4 \uc800\ucd95\uc561: "}),Object(O.jsx)("input",{name:"currentMoney",onChange:this.handleChange,type:"text",placeholder:"(\uc22b\uc790 \uc785\ub825)"}),Object(O.jsxs)("select",{name:"currentMoneyMultiplier",value:this.state.currentMoneyMultiplier,onChange:this.handleChange,children:[Object(O.jsx)("option",{value:"100000000",children:"\uc5b5\uc6d0"}),Object(O.jsx)("option",{value:"10000",children:"\ub9cc\uc6d0"}),Object(O.jsx)("option",{value:"1",children:"\uc6d0"})]})]}),Object(O.jsxs)("div",{className:x.a.inputBox,children:[Object(O.jsx)("span",{className:"title",children:"\ub9e4\ub144 \uc800\ucd95 \uc99d\uac00\uc728: "}),Object(O.jsx)("input",{name:"depositIncreaseRate",onChange:this.handleChange,type:"text",placeholder:"(\uc22b\uc790 \uc785\ub825)"}),"%"]}),Object(O.jsxs)("div",{className:x.a.inputBox,children:[Object(O.jsx)("span",{className:"title",children:"\ub9e4\ub144 \ud22c\uc790 \uc218\uc775\ub960: "}),Object(O.jsx)("input",{name:"investingGainRate",onChange:this.handleChange,type:"text",placeholder:"(\uc22b\uc790 \uc785\ub825)"}),"%"]}),Object(O.jsxs)("div",{className:x.a.inputBox,children:[Object(O.jsx)("span",{className:"title",children:"\ubaa9\ud45c \uae08\uc561: "}),Object(O.jsx)("input",{name:"goalMoney",onChange:this.handleChange,type:"text",placeholder:"(\uc22b\uc790 \uc785\ub825)"}),Object(O.jsxs)("select",{name:"goalMoneyMultiplier",value:this.state.goalMoneyMultiplier,onChange:this.handleChange,children:[Object(O.jsx)("option",{value:"100000000",children:"\uc5b5\uc6d0"}),Object(O.jsx)("option",{value:"10000",children:"\ub9cc\uc6d0"}),Object(O.jsx)("option",{value:"1",children:"\uc6d0"})]})]}),Object(O.jsx)("button",{disabled:!this.state.enableButton,onClick:this.handleClick,children:"\uacc4\uc0b0"})]})})})}}]),n}(a.Component),m=Object(h.b)((function(e){return{result:e.calculator.result}}),(function(e){return{calculate:function(t){return e(j(t))}}}))(v),M=n(52);function f(){var e=Object(h.c)((function(e){return e.calculator})).yearlyIncreasedMoneyList,t=e.map((function(e,t){return Math.floor(e/1e4)})),n={labels:e.map((function(e,t){return t+"\ub144 \ub4a4"})),datasets:[{label:"\ucd1d \uc790\uc0b0",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t}]};return console.log(n),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:Object(O.jsxs)("h3",{children:["\ub2f9\uc2e0\uc758 \ubaa9\ud45c \uae08\uc561\uc744 \ubaa8\uc73c\uae30 \uc704\ud574\uc11c\ub294"," ",0===e.length?"?":e.length-1,"\ub144 \uac78\ub9bd\ub2c8\ub2e4"]})}),Object(O.jsx)(M.Line,{data:n})]})}n(160);var C=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("h2",{children:"\uacbd\uc81c\uc801 \uc790\uc720\ub97c \uc704\ud558\uc5ec!"}),Object(O.jsx)(m,{}),Object(O.jsx)(f,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=n(2),B=Object(_.c)({calculator:y}),R=Object(p.a)({reducer:B});R.subscribe((function(){var e=R.getState();console.log("I dispatched successfully: ",e)})),r.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(h.a,{store:R,children:Object(O.jsx)(C,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,n){e.exports={row:"Calculator_row__iPYgU",inputArea:"Calculator_inputArea__1kMN1",inputBox:"Calculator_inputBox__1Xua_",value:"Calculator_value__1e5js",button:"Calculator_button__23xFb",textbox:"Calculator_textbox__3tlzq",asyncButton:"Calculator_asyncButton__1PrgG Calculator_button__23xFb"}},59:function(e,t,n){}},[[161,1,2]]]);
//# sourceMappingURL=main.3ebdc890.chunk.js.map