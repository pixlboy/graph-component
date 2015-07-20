"use strict";

var BarChart = function(data, container){		

	var _container = document.getElementById(container),
		_width = _container.offsetWidth,
		_height = _container.offsetHeight,
	    _config = data || {},
		_innerContainers = {
			xaxis : document.createElement("ul"),
	 		yaxis : document.createElement("ul"),
	 		canvas : document.createElement("div")
		};
	_innerContainers.xaxis.className = "x-axis";
	_innerContainers.yaxis.className = "y-axis";
	_innerContainers.canvas.className = "chart-canvas";
	
	var _clearGraph = function(){
		_container.innerHTML = "";
	}
	var _generateCanvas = function(axisdata){
		var length = axisdata.length,
			childarray = ["<dl>"];
		for(var i = 0; i < length; i++){
			var item = "<dt>"+axisdata[i]+"</dt>";
			childarray.push(item);
		}
		childarray.push("</dl>");
		var axis = childarray.join("");
		_innerContainers.canvas.innerHTML = axis;
		_container.appendChild(_innerContainers.canvas);
		_applyHeights(_config.data);
	}
	var _applyHeights = function(axisdata){
		var length = axisdata.length,
			items = document.getElementsByTagName("dt");
		for(var i = 0; i < length; i++){
			items[i].style.height = axisdata[i]+"px";
		}
	}
	var _generateYAxis = function(axisdata){
		var length = axisdata.length,
			childarray = [],
			maxVal = _height;
		for(var i = length; i > 0; i--){
			var item = "<li>"+(Math.round(maxVal/length * i))+"</li>";
			childarray.push(item);
		}
		var axis = childarray.join("");
		_innerContainers.yaxis.innerHTML = axis;
		_container.appendChild(_innerContainers.yaxis);
	}
	var _generateXAxis = function(axisdata){
		var length = axisdata.length,
			childarray = [];
		for(var i = 0; i < length; i++){
			var item = "<li>"+axisdata[i]+"</li>";
			childarray.push(item);
		}
		var axis = childarray.join("");
		_innerContainers.xaxis.innerHTML = axis;
		_container.appendChild(_innerContainers.xaxis);
	}
	this.init = function(){
		_clearGraph();
		_generateYAxis(_config.data);
		_generateCanvas(_config.data);
		_generateXAxis(_config.name);
	}
};