# How To Used

## Script 
```
var tabel = document.getElementsByClassName('table')
var tabelSource = tabel[0].children[0].children

function check(num = 0) {
	let numCheck = 0;
	if (num == 1) {
		numCheck = 2
	} else if (num == 2) {
		numCheck = 3
	} else if (num == 3) {
		numCheck = 4
	} else if (num == 4) {
		numCheck = 5
	} else if (num == 5) {
		numCheck = 6
	} else if (num == 6) {
		numCheck = 7
	}
	for (var i = 0; i < tabelSource.length - 1; i++) {
	    if (i >= 2) {
	        tabelSource[i].children[numCheck].children[0].checked = true
	    }
	}
}

function checkRandom(first, end) {
	for (var i = 0; i < tabelSource.length - 1; i++) {
		let numCheck = 0
		let num = Math.floor(Math.random() * (end - first + 1) + first);
		if (num == 1) {
			numCheck = 2
		} else if (num == 2) {
			numCheck = 3
		} else if (num == 3) {
			numCheck = 4
		} else if (num == 4) {
			numCheck = 5
		} else if (num == 5) {
			numCheck = 6
		} else if (num == 6) {
			numCheck = 7
		}
		if (i >= 2) {
			tabelSource[i].children[numCheck].children[0].checked = true
		}
	}
}
```

## Step
1. Open console developer tools or ctrl+shift+i (chrome)
2. Paste the script on the console
3. Run command

## Command
### Check Normal
number of range 1 to 6
```
check(4) // 4 is the number you want to check
```

### Check Random
number of range 1 to 6
```
checkRandom(4, 6) // 4 starts and 6 is the final range of numbers to be checked
```
