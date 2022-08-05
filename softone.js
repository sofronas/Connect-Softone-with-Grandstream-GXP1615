function EXECCOMMAND(cmd){
	if(cmd == 123456789){
		test(CUSTOMER.PHONE01);
		return;
	}
	if(cmd == 987654321){
		test(CUSTOMER.PHONE02);
		return;
	}
}

function test(phone){
	if((phone == "") || (phone.length == 0)){
			X.WARNING('ΔΕΝ ΥΠΑΡΧΕΙ ΤΗΛΕΦΩΝΟ!!!');
			return;
	}
	if(phone.length < 10){
			X.WARNING('ΤΗΛΕΦΩΝΟ ΜΕ ΛΙΓΟΤΕΡΑ ΨΗΦΙΑ!!!');
			return;
	}
	if(phone.length > 10){
			X.WARNING('ΤΗΛΕΦΩΝΟ ΜΕ ΠΕΡΙΣΣΟΤΕΡΑ ΨΗΦΙΑ!!!');
			return;
	}
	var vUSER = X.SYS.USER;
	var username = X.SYS.USERNAME;
	
	var ip;
	switch(vUSER){
        case 1:         ip = '192.168.1.12';        break;  //user 1
        case 101:  	    ip = '192.168.1.13'; 		break;  //user 2
        case 102:  	    ip = '192.168.1.14'; 		break; 	//user 3
        case 103:		ip = '192.168.1.15'; 		break; 	//user 4
        default: 		ip = '';				    break; 	//default ip
	}
	if(ip == ''){
		X.WARNING('Δεν έχει οριστεί IP για τον χρήστη: ' + vUSER);
		return;
	}
	var pass;
	switch(vUSER){
        case 1:     pass = 'pass1'; break; //user 1
        case 101:   pass = 'pass2'; break;  //user 2
        case 102:   pass = 'pass3'; break; 	//user 3
        case 103:   pass = 'pass4'; break; 	//user 4
        default:    pass = '';  break;	//default pass
	}
	if(pass == ''){
		X.WARNING('Δεν έχει δηλωθεί σωστά ο κωδικός της τηλεφωνικής συσκευής του χρήστη:' + vUSER  + '!!!');
		return;
	}
	var shellObj = new ActiveXObject("WSCript.Shell");
	var url1 = 'http://' + ip + '/cgi-bin/api-make_call?phonenumber=' + phone + '&account=0&password=' + pass;
	var aCommand = 'entoli "' + url1 + '"';
	shellObj.Run(aCommand,true);
	return;
}
