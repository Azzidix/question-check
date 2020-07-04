// let changeColor = document.getElementById('changeColor');
let btnSingle = document.getElementById('btnSingle');
let btnRandom = document.getElementById('btnRandom');

// chrome.storage.sync.get('color', function(data) {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value', data.color);
// });

btnSingle.onclick = function(element) {
	let val = document.getElementById('single').value;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
   		    tabs[0].id,
        	{
        		file: "main.js"
        	}
        );
	    chrome.tabs.executeScript(
   		    tabs[0].id,
        	{
        		code: `
        			check(${val})
        		`
        	}
        );
    });
}

btnRandom.onclick = function(element) {
	let valOne = document.getElementById('randomOne').value;
	let valTwo = document.getElementById('randomTwo').value;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
   		    tabs[0].id,
        	{
        		file: "main.js"
        	}
        );
	    chrome.tabs.executeScript(
   		    tabs[0].id,
        	{
        		code: `
        			checkRandom(${valOne},${valTwo})
        		`
        	}
        );
    });
}