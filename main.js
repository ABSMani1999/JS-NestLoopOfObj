 const person={
	first_name:'monica',
	last_name:'Geller',
	Phone:'915-996-9739',
	email:'monica37@gmail.com',
	address:{
		street:{
			street_num:'495',
			street_name:'grove street',
		},
	city:'new york',
	country:'USA',
	}
};

for (let val in person){
	if(person[val] instanceof Object){
		for(let address in person[val]){
			if(person[val][address] instanceof Object){
				for (let street in person[val][address]){
				document.write(`${street} ==> ${person[val][address][street]}<br>`);
				}
				
				
			}
			else{
				document.write(`${address} ==> ${person[val][address]}<br>`);
			}
		}
	}
	
	else { 
	document.write(`${val} ==> ${person[val]} <br>`);
		}
}

