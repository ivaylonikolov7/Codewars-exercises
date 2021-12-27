function queueTime(customers, n) {
		let minutesPassed = 0;
		let queues = initializeQueues(n);
		checkForFreeQueues(customers, queues);
		
		while(!(areQueuesEmpty(queues) && customers.length==0)){
			reduceTimeForQueues(queues)
			minutesPassed++;
			checkForFreeQueues(customers, queues);
			
			
		}

		return minutesPassed;
	}

	function areQueuesEmpty(queues){
		let empty = true;
		queues.map((queue)=>{
			if( parseInt(queue) > 0){
				empty = false;
			}
		})
		return empty;
	}
	function checkForFreeQueues(customers,queues){
		queues.forEach((queue,index, arr)=>{
			if(queue == 0 && customers.length>0){
				arr[index]+=customers.shift();
			}
		})
	}
	function reduceTimeForQueues(queues){
		queues.forEach((queue, index,arr) => {
			if(queue > 0){
				arr[index]--;
			}
		});
		return queues;
	}
	function initializeQueues(n){
		let queues = []
		for(let i=0; i<n; i++){
			queues[i] = 0;
		}
		return queues;
	}

	console.log(queueTime([2,3,5], 2));










	function queueTime2(customers, n) {
		var w = new Array(n).fill(0);
		for (let t of customers) {
		  let idx = w.indexOf(Math.min(...w));
		  w[idx] += t;
		}
		return Math.max(...w);
	  }

	  console.log(queueTime2([2,3,5],2));
	