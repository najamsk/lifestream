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
			$(this).css("left",(cleft + 100) + "px")
			return flag;
			
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
