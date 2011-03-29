var lnaa = lifenotesAPP  = function(tlW)
{
    var author_name = "najam sikander awan", 
    	author_email = "najamsk@gmail.com",
		tl_nodes_w = tlW.find("#tl_nodes_w"),
		tl_node = tlW.find(".tl_node");

		var pobj = {
		version : function(){ return "0.1";},
		dev: function(){return author_name + " : " + author_email;},
		timeline : {width : function(){ return tl_node.outerWidth() * tl_node.size();}}
		}

		var loader = (function(){
			tl_nodes_w.width(pobj.timeline.width());
		})();
		return pobj;
	
}


var LIFEJS = LIFEJS || {};

LIFEJS.namespace = function(ns_string){
var parts = ns_string.split('.'),
parent = LIFEJS, i;

    if(parts[0] === "LIFEJS"){
        parts = parts.slice(1);
        
    }
    for(i=0; i<parts.length; i+=1)
    {
        if(typeof parent[parts[i]] === "undefined")
        {
            parent[parts[i]] = {};        
        }
        
        parent = parent[parts[i]];
		var thekey = parts[i];
    }
    return parent; //returning last element from ns_string
};
LIFEJS.namespace("data.user.timeline");

//Author module
LIFEJS.author = (function(){
    //private vars
	
	//private functions
	
	//public parts - closures 
	return 	{
			name:"najam sikander awan", 
			email:"najamsk@gmail.com"
			};
}.apply(LIFEJS)); //binding this to LIFEJs object

jQuery(function($){
	myobj = new lnaa($("#tlW"));
	$("#tl_nodes_w").draggable({
		cursor: 'move',
		axis: 'x',
		//containment: [0,$("#tl_nodes_w").offset().top,100,$("#tl_nodes_w").offset().top],
		start:function(){
			var cleft = (myobj.timeline.width() - 200) * (-1);
			var flag = (cleft <= parseFloat($(this).css("left")));
			console.log("cleft:" + cleft + ", left=" + $(this).css("left"));
			//$(this).css("left",(cleft + 100) + "px")
			//return flag;
			
		},
		stop:function(){
			 //console.log("stop");
		},
		drag:function(){
			//var cleft = (myobj.timeline.width() - 100) * (-1);
			//cleft <= $(this).css("left")
		},
	});
	console.log(myobj.dev());
});