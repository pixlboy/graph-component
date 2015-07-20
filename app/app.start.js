//Initializing the charts

(function(){
	var data1 = { 
		name: ['Peach','Orange', 'Apple', 'Mango', 'Banana', 'Watermelon'],
		data: [100, 200, 500, 50, 70, 123] 
	},
	data2 = { 
		name: ['Peach','Orange', 'Apple', 'Mango', 'Banana', 'Watermelon'],
		data: [10, 70, 200, 29, 304, 348] 
	},
	data3 = { 
		name: ['Peach','Orange', 'Apple', 'Mango', 'Banana', 'Watermelon'],
		data: [103, 23, 303, 193, 46, 420] 
	};

	loadData1();

	var element1 = document.getElementById('loadData2015'),
		element2 = document.getElementById('loadData2014'),
		element3 = document.getElementById('loadData2013');

	element1.addEventListener('click', loadData1);
	element2.addEventListener('click', loadData2);
	element3.addEventListener('click', loadData3);

	function loadData1(){
		var FruitChart1 = new BarChart(data1, "fruitChart");
		FruitChart1.init();
		return false;
	}
	function loadData2(){
		var FruitChart2 = new BarChart(data2, "fruitChart");
		FruitChart2.init();
		return false;
	}
	function loadData3(){
		var FruitChart3 = new BarChart(data3, "fruitChart");
		FruitChart3.init();
		return false;
	}
})();