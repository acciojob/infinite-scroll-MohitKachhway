//your code here!
let list = document.getElementById("infi-list");
let count =11;
list.addEventListener("scroll",(event)=>{
	let currentScrollTop = list.scrollTop;
	let scrollableHeight = list.scrollHeight - list.clientHeight;
	
	if(currentScrollTop===scrollableHeight){
		let item1 = document.createElement("li");
        let item2 = document.createElement("li");
        item1.innerHTML = `Item ${count++}`;
        item2.innerHTML = `Item ${count++}`;
        list.append(item1, item2);
	}
	
})
