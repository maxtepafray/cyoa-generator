	var app = angular.module('myApp', []);

	var jsonlint=function(){var a=!0,b=!1,c={},d=function(){var a={trace:function(){},yy:{},symbols_:{error:2,JSONString:3,STRING:4,JSONNumber:5,NUMBER:6,JSONNullLiteral:7,NULL:8,JSONBooleanLiteral:9,TRUE:10,FALSE:11,JSONText:12,JSONValue:13,EOF:14,JSONObject:15,JSONArray:16,"{":17,"}":18,JSONMemberList:19,JSONMember:20,":":21,",":22,"[":23,"]":24,JSONElementList:25,$accept:0,$end:1},terminals_:{2:"error",4:"STRING",6:"NUMBER",8:"NULL",10:"TRUE",11:"FALSE",14:"EOF",17:"{",18:"}",21:":",22:",",23:"[",24:"]"},productions_:[0,[3,1],[5,1],[7,1],[9,1],[9,1],[12,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[15,2],[15,3],[20,3],[19,1],[19,3],[16,2],[16,3],[25,1],[25,3]],performAction:function(b,c,d,e,f,g,h){var i=g.length-1;switch(f){case 1:this.$=b.replace(/\\(\\|")/g,"$1").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\t/g,"	").replace(/\\v/g,"").replace(/\\f/g,"\f").replace(/\\b/g,"\b");break;case 2:this.$=Number(b);break;case 3:this.$=null;break;case 4:this.$=!0;break;case 5:this.$=!1;break;case 6:return this.$=g[i-1];case 13:this.$={};break;case 14:this.$=g[i-1];break;case 15:this.$=[g[i-2],g[i]];break;case 16:this.$={},this.$[g[i][0]]=g[i][1];break;case 17:this.$=g[i-2],g[i-2][g[i][0]]=g[i][1];break;case 18:this.$=[];break;case 19:this.$=g[i-1];break;case 20:this.$=[g[i]];break;case 21:this.$=g[i-2],g[i-2].push(g[i])}},table:[{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],12:1,13:2,15:7,16:8,17:[1,14],23:[1,15]},{1:[3]},{14:[1,16]},{14:[2,7],18:[2,7],22:[2,7],24:[2,7]},{14:[2,8],18:[2,8],22:[2,8],24:[2,8]},{14:[2,9],18:[2,9],22:[2,9],24:[2,9]},{14:[2,10],18:[2,10],22:[2,10],24:[2,10]},{14:[2,11],18:[2,11],22:[2,11],24:[2,11]},{14:[2,12],18:[2,12],22:[2,12],24:[2,12]},{14:[2,3],18:[2,3],22:[2,3],24:[2,3]},{14:[2,4],18:[2,4],22:[2,4],24:[2,4]},{14:[2,5],18:[2,5],22:[2,5],24:[2,5]},{14:[2,1],18:[2,1],21:[2,1],22:[2,1],24:[2,1]},{14:[2,2],18:[2,2],22:[2,2],24:[2,2]},{3:20,4:[1,12],18:[1,17],19:18,20:19},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:23,15:7,16:8,17:[1,14],23:[1,15],24:[1,21],25:22},{1:[2,6]},{14:[2,13],18:[2,13],22:[2,13],24:[2,13]},{18:[1,24],22:[1,25]},{18:[2,16],22:[2,16]},{21:[1,26]},{14:[2,18],18:[2,18],22:[2,18],24:[2,18]},{22:[1,28],24:[1,27]},{22:[2,20],24:[2,20]},{14:[2,14],18:[2,14],22:[2,14],24:[2,14]},{3:20,4:[1,12],20:29},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:30,15:7,16:8,17:[1,14],23:[1,15]},{14:[2,19],18:[2,19],22:[2,19],24:[2,19]},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:31,15:7,16:8,17:[1,14],23:[1,15]},{18:[2,17],22:[2,17]},{18:[2,15],22:[2,15]},{22:[2,21],24:[2,21]}],defaultActions:{16:[2,6]},parseError:function(b,c){throw new Error(b)},parse:function(b){function o(a){d.length=d.length-2*a,e.length=e.length-a,f.length=f.length-a}function p(){var a;return a=c.lexer.lex()||1,typeof a!="number"&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0,l=2,m=1;this.lexer.setInput(b),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var n=this.lexer.yylloc;f.push(n),typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);var q,r,s,t,u,v,w={},x,y,z,A;for(;;){s=d[d.length-1],this.defaultActions[s]?t=this.defaultActions[s]:(q==null&&(q=p()),t=g[s]&&g[s][q]);if(typeof t=="undefined"||!t.length||!t[0]){if(!k){A=[];for(x in g[s])this.terminals_[x]&&x>2&&A.push("'"+this.terminals_[x]+"'");var B="";this.lexer.showPosition?B="Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+A.join(", ")+", got '"+this.terminals_[q]+"'":B="Parse error on line "+(i+1)+": Unexpected "+(q==1?"end of input":"'"+(this.terminals_[q]||q)+"'"),this.parseError(B,{text:this.lexer.match,token:this.terminals_[q]||q,line:this.lexer.yylineno,loc:n,expected:A})}if(k==3){if(q==m)throw new Error(B||"Parsing halted.");j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,n=this.lexer.yylloc,q=p()}for(;;){if(l.toString()in g[s])break;if(s==0)throw new Error(B||"Parsing halted.");o(1),s=d[d.length-1]}r=q,q=l,s=d[d.length-1],t=g[s]&&g[s][l],k=3}if(t[0]instanceof Array&&t.length>1)throw new Error("Parse Error: multiple actions possible at state: "+s+", token: "+q);switch(t[0]){case 1:d.push(q),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(t[1]),q=null,r?(q=r,r=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,n=this.lexer.yylloc,k>0&&k--);break;case 2:y=this.productions_[t[1]][1],w.$=e[e.length-y],w._$={first_line:f[f.length-(y||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(y||1)].first_column,last_column:f[f.length-1].last_column},v=this.performAction.call(w,h,j,i,this.yy,t[1],e,f);if(typeof v!="undefined")return v;y&&(d=d.slice(0,-1*y*2),e=e.slice(0,-1*y),f=f.slice(0,-1*y)),d.push(this.productions_[t[1]][0]),e.push(w.$),f.push(w._$),z=g[d[d.length-2]][d[d.length-1]],d.push(z);break;case 3:return!0}}return!0}},b=function(){var a={EOF:1,parseError:function(b,c){if(!this.yy.parseError)throw new Error(b);this.yy.parseError(b,c)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.match+=a,this.matched+=a;var b=a.match(/\n/);return b&&this.yylineno++,this._input=this._input.slice(1),a},unput:function(a){return this._input=a+this._input,this},more:function(){return this._more=!0,this},less:function(a){this._input=this.match.slice(a)+this._input},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=(new Array(a.length+1)).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d,e,f;this._more||(this.yytext="",this.match="");var g=this._currentRules();for(var h=0;h<g.length;h++){c=this._input.match(this.rules[g[h]]);if(c&&(!b||c[0].length>b[0].length)){b=c,d=h;if(!this.options.flex)break}}if(b){f=b[0].match(/\n.*/g),f&&(this.yylineno+=f.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:f?f[f.length-1].length-1:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.yyleng=this.yytext.length,this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,g[d],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1);if(a)return a;return}if(this._input==="")return this.EOF;this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var b=this.next();return typeof b!="undefined"?b:this.lex()},begin:function(b){this.conditionStack.push(b)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(b){this.begin(b)}};return a.options={},a.performAction=function(b,c,d,e){var f=e;switch(d){case 0:break;case 1:return 6;case 2:return c.yytext=c.yytext.substr(1,c.yyleng-2),4;case 3:return 17;case 4:return 18;case 5:return 23;case 6:return 24;case 7:return 22;case 8:return 21;case 9:return 10;case 10:return 11;case 11:return 8;case 12:return 14;case 13:return"INVALID"}},a.rules=[/^(?:\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,/^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?::)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:.)/],a.conditions={INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],inclusive:!0}},a}();return a.lexer=b,a}();return typeof a!="undefined"&&typeof c!="undefined"&&(c.parser=d,c.parse=function(){return d.parse.apply(d,arguments)},c.main=function(d){if(!d[1])throw new Error("Usage: "+d[0]+" FILE");if(typeof process!="undefined")var e=a("fs").readFileSync(a("path").join(process.cwd(),d[1]),"utf8");else var f=a("file").path(a("file").cwd()),e=f.join(d[1]).read({charset:"utf-8"});return c.parser.parse(e)},typeof b!="undefined"&&a.main===b&&c.main(typeof process!="undefined"?process.argv.slice(1):a("system").args)),c}();
	
	app.config(function($sceProvider) {
	  $sceProvider.enabled(false);
	});
	
	app.controller('formcontroler', function($scope, $http) {
	  
	$scope.selected = [];
	$scope.selectarr = [];
	$scope.selectids = {};
	$scope.points = 0;
	$scope.author = "";
	$scope.version = "";
	$scope.title = "Loading...";
	$scope.fulltitle = "Loading...";
	$http.get("data.json").then(function (response) {
		if (! response.data.title){
			try {
				jsonlint.parse(response.data);
			} catch(e) {
				alert(e);
			}
		}
		$scope.jsondata = response.data;
		$scope.points = response.data.points;
		$scope.author = response.data.author;
		$scope.version = response.data.version;
		$scope.title = response.data.title;
		$scope.fulltitle = $scope.title+" "+$scope.version+" by "+$scope.author;
	},function (data) {
		alert("Unable to fetch json");
		console.log(data)
	});
	  
	  $scope.getgroupcount = function getgroupcount(group){
		var groupidx = $scope.selected.findIndex(o => o.name === group);
		if ((groupidx == -1)||(groupidx == undefined)){
			return 0
		}else{
			return $scope.selected[groupidx]["items"].length
		}
		
	  }
          // Toggle selection for a given option
	  $scope.checkconflict = function checkconflictcheckconflict(id,conflict,require){
		if (id == null){
			return false;
		}
		if (conflict != null){
			for(let i = 0; i < conflict.length; i++){
				if ($scope.selectids[conflict[i]] == 1){
					return true;
				}
			}
		}
		
		if (require != null){
			for(let i = 0; i < require.length; i++){
				if ($scope.selectids[require[i]] != 1){
					return true;
				}
			}
		}
		
		return false
		
	  }
	  
	  
	  // Toggle selection for a given fruit by name
	  $scope.toggleSelection = function toggleSelection(element,itemname, value, group, id) {
		if (element.hasAttribute("disabled")&&(!element.hasAttribute("checked"))){
			return false;
		}
		if (!isNaN(value)){
			var groupidx = $scope.selected.findIndex(o => o.name === group);
			if ((groupidx == -1)||(groupidx == undefined)){
				$scope.selected.push({
					"name":group,
					"items":[],
					"order": $scope.jsondata.parts.findIndex(o => o.group === group)
				})
				
				var idx = -1;
				groupidx = $scope.selected.findIndex(o => o.name === group);
			}else{
				var idx = $scope.selected[groupidx]["items"].findIndex(o => o.item === itemname);
			}
			

			// Is currently selected
			if (idx > -1) {
				$scope.selected[groupidx]["items"].splice(idx, 1);
				$scope.points+=Number(value);
				if ($scope.selected[groupidx]["items"].length == 0){
					$scope.selected.splice(groupidx, 1);
				}
				if (id != null ){
					$scope.selectids[id] = 0;
				}
			}

			// Is newly selected
			else {

				$scope.selected[groupidx]["items"].push({"item":itemname,"points":value});
				$scope.points-=Number(value);
				if (id != null ){
					$scope.selectids[id] = 1;
				}
			}
			setTimeout(function(){
				if (document.getElementById("select-list-wrapper").style.height > `10px`){
					slideDown(document.getElementById("select-list-wrapper"));
				}
			},50);
			$scope.selectarr=[].concat.apply([],$scope.selected.map(function(obj){return obj.items})).map(function(obj){return obj.item})
		}
	  };
	});

const slideDown = element => element.style.height = `${element.scrollHeight}px`;
const slideUp = element => element.style.height = `0px`;


document.getElementById("button").addEventListener("click", function () {
	if (document.getElementById("select-list-wrapper").style.height < `10px`){
		slideDown(document.getElementById("select-list-wrapper"));
    }else{
		slideUp(document.getElementById("select-list-wrapper"));
	}
});	
