//your JS code here. If required.
document.addEventListener('DOMContentLoaded',function(){
	const inputs=document.querySelectorAll('.code');
	for(let index=0;index<inputs.length;index++){
		const input=inputs[index];
		input.addEventListener('input',function(){
			if(this.value===1 && index<inputs.length-1){
				inputs[index+1].focus();
			}
		});
		inputs.addEventListener('keydown',function(event){
										if(event.key==='Backspace'){
											if(this.value===0 && index>0){
												inputs[index-1].focus();
											}
										}});
	}
	
	});




	
})