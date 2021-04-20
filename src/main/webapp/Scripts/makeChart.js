var arr;
var sleepTime;

var visualizer;

function reload(){
	location.reload();
}

function drawMaterial(len) {
	document.getElementById("bodyContainer").innerHTML = "";
	if(len === -1)
	len = document.getElementById("changeSize").value;
	arr = new Array(parseInt(len))
	sleepTimer = (106092800 - -23.9877)/(1+Math.pow(arr.length/0.00001042917, 0.9375706))
	var width = -2.494404 + (40784360 - -2.494404)/(1 + Math.pow(arr.length/0.0000106484, 0.9375706))
	console.log(sleepTimer)
	for (var itr = 0; itr < arr.length; itr++) {
		arr[itr] = (Math.random() * 500)^0;
		document.getElementById("bodyContainer").innerHTML += '<div id="'+itr+'" style="height: '+arr[itr]+'px; width: '+width+'px; margin-left: auto; margin-right: auto; background-color: rgba(66, 134, 244, 0.8); color: transparent; font-size: 8px;"/>';
	}
}
drawMaterial(150);

function shuffle(x, y){
	var l = document.getElementById(x).style.height;
	var r = document.getElementById(y).style.height;
	var lColor = document.getElementById(x).style.backgroundColor;
	var rColor = document.getElementById(y).style.backgroundColor;
	
	document.getElementById(x).style.height = r;
	document.getElementById(y).style.height = l;
	
	document.getElementById(x).style.backgroundColor = rColor;
	document.getElementById(y).style.backgroundColor = lColor;
}

function changeValue(idx, value){
	document.getElementById(idx).style.height = value+"px";
}

function changeColor(idx, color){
	try {
		document.getElementById(idx).style.backgroundColor = color;
	}
	catch(err) {
	  console.log(idx+" "+color);
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function insertionSort(){
	document.getElementById("sortTitle").innerHTML = "Insertion Sort"
	var n = arr.length;
    for (var i = 1; i < n; ++i) {
		var key = arr[i];
		document.getElementById(i).style.backgroundColor = "rgba(252, 219, 3, 0.8)"; // Yellow Color
        var j = i - 1;
 
        /* Move elements of arr[0..i-1], that are
			greater than key, to one position ahead
            of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            shuffle(j+1, j);
            await sleep(sleepTime);
            j = j - 1;
        }
        arr[j + 1] = key;
        document.getElementById(j+1).style.backgroundColor = "rgba(66, 134, 244, 0.8)"; //Blue Color
    }
}

async function selectionSort(){
	document.getElementById("sortTitle").innerHTML = "Selection Sort"
	var n = arr.length;
    
	for (var i = 0; i < n; i++) 
        { 
        // Find the minimum element in unsorted array 
        var min_idx = i; 
        changeColor(min_idx, "rgba(66, 245, 167, 0.8)")
        for (var j = i+1; j < n; j++) {
        	changeColor(j, "rgba(252, 219, 3, 0.8)")
        	if (arr[j] < arr[min_idx]) {
	        	changeColor(min_idx, "rgba(66, 134, 244, 0.8)")
    		    min_idx = j; 
    		    changeColor(min_idx, "rgba(66, 245, 167, 0.8)")
    		    await sleep(sleepTime);
        	} else{
        		await sleep(sleepTime);
        		changeColor(j, "rgba(66, 134, 244, 0.8)")
        	}
        	
        }
            
        // Swap the found minimum element with the first 
        // element 
        shuffle(min_idx, i)
        var temp = arr[min_idx]; 
        arr[min_idx] = arr[i]; 
        arr[i] = temp; 
    }
}

async function bubbleSort() {
	document.getElementById("sortTitle").innerHTML = "Bubble Sort" 
    var n = arr.length; 
    for (var i = 0; i < n; i++) {
    	changeColor(0, "rgba(66, 245, 167, 0.8)")
    	
        for (var j = 0; j < n-i-1; j++) 
            if (arr[j] > arr[j+1]) 
            { 
            	shuffle(j, j+1)
                // swap arr[j+1] and arr[j] 
                var temp = arr[j]; 
                arr[j] = arr[j+1]; 
                arr[j+1] = temp; 
                await sleep(sleepTime);
            } else{
            	changeColor(j+1, "rgba(66, 245, 167, 0.8)") // green
            	changeColor(j, "rgba(66, 134, 244, 0.8)") // blue
            }
	}
}

async function merge(start, mid, end) {

	// create a temp array
	var temp = new Array(end - start + 1);
	
	// crawlers for both intervals and for temp
	var i = start, j = mid+1, k = 0;
	changeColor(i, "rgba(252, 219, 3, 0.8)")
	changeColor(j, "rgba(252, 219, 3, 0.8)")
	// traverse both arrays and in each iteration add smaller of both elements in temp 
	while(i <= mid && j <= end) {
		if(arr[i] <= arr[j]) {
			temp[k] = arr[i];
			changeColor(i, "rgba(66, 134, 244, 0.8)")
			k += 1; i += 1;
			if(i <= mid)	changeColor(i, "rgba(252, 219, 3, 0.8)")
		}
		else {
			temp[k] = arr[j];
			changeColor(j, "rgba(66, 134, 244, 0.8)")
			k += 1; j += 1;
			if(j <= end)	changeColor(j, "rgba(252, 219, 3, 0.8)")
		}
		await sleep(sleepTime);
	}

	// add elements left in the first interval 
	while(i <= mid) {
		temp[k] = arr[i];
		changeColor(i, "rgba(66, 134, 244, 0.8)")
		k += 1; i += 1;
		if(i <= mid) changeColor(i, "rgba(252, 219, 3, 0.8)")
		await sleep(sleepTime);
	}

	// add elements left in the second interval 
	while(j <= end) {
		temp[k] = arr[j];
		changeColor(j, "rgba(66, 134, 244, 0.8)")
		k += 1; j += 1;
		if(j <= end) changeColor(j, "rgba(252, 219, 3, 0.8)")
		await sleep(sleepTime);
	}
	// copy temp to original interval
	for(i = start; i <= end; i += 1) {
		arr[i] = temp[i - start]
		changeColor(i, "rgba(66, 245, 167, 0.8)")
		changeValue(i, arr[i])
		await sleep(sleepTime);
	}
}


// Arr is an array of integer type
// start and end are the starting and ending index of current interval of Arr

async function divide(start, end) {

	if(start < end) {
		var mid = (start + end) >> 1;
		await divide(start, mid);
		await divide(mid+1, end);
		await merge(start, mid, end);
	}
}

async function mergeSort(){
	document.getElementById("sortTitle").innerHTML = "Merge Sort"
	await divide(0, arr.length-1)
}

async function partition(low, high){
	if(low === high){
		changeColor(low, "rgba(252, 219, 3, 0.8)")
		await sleep(sleepTime)
		changeColor(high, "rgba(66, 134, 244, 0.8)")
	}
	var pivot = arr[high]; // pivot 
    var i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far
 	for (var j = low; j <= high - 1; j++) 
    { 
    	await changeColor(j, "rgba(252, 219, 3, 0.8)")
    	// If current element is smaller than the pivot 
        if (arr[j] <= pivot) 
        { 
            i++; // increment index of smaller element 
            var temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp 
            shuffle(i, j)
            await sleep(sleepTime)
	        await changeColor(i, "rgba(66, 134, 244, 0.8)")
        }else{
        	await sleep(sleepTime)
        	await changeColor(j, "rgba(66, 134, 244, 0.8)")
        }	 
        
    } 
    var temp = arr[i+1]
    arr[i+1] = arr[high]
    arr[high] = temp
    shuffle(i+1, high)
    return (i + 1); 
}

async function quick(low, high){
	if (low <= high) 
    { 
        /* pi is partitioning index, arr[p] is now 
        at right place */
        var pi = await partition(low, high); 
 		changeColor(pi, "rgba(66, 245, 167, 0.8)")
    
        // Separately sort elements before 
        // partition and after partition 
        await quick(low, pi - 1); 
        await quick(pi + 1, high); 
    }
}

async function quickSort(){
	document.getElementById("sortTitle").innerHTML = "Quick Sort"
	await quick(0, arr.length-1)
}