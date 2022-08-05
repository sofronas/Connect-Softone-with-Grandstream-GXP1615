# Softone make phone call via Grandstream device (GXP1615)
Call from Softone tab with one click

## Before we start
We need to add command at our system. <br/>
1. Download the file (entoli.exe) <br/>
2. Add the file path at your command system.
	- Store file at specific path you desire. For example, C:\Softone\.
	- Right click at your computer, or open **SETTINGS** and **SYSTEM**, **INFORMATION**, **SYSTEM PROTECTION**.
	- A new window will open and we choose **For Advanced Users** tab.
	- Click on **System Enviroments**.
	- Edit Path enviroments.
	- Click on new button and add path of program.
	- After all close all windows and do a log off/log in.

## Softone
- Open the desired view you want to add. **(Customers or Suppliers)**
- Design view.
- Add buttons near phone fields.
- Get id from the buttons you added.
- Replace your id:
```sh
function EXECCOMMAND(cmd){
	if(cmd == **here add your id of button 1**){
		test(CUSTOMER.PHONE01);
		return;
	}
	if(cmd == **here add your id of button 2**){
		test(CUSTOMER.PHONE02);
		return;
	}
}
```
- Open the **configuration tab**, then select **script tab** and paste the **code**.
- Code supports mutliple devices and users. If you want to use it on one user do this change: <br/>
Replace this code:
```sh
var ip;
switch (vUSER) {
	case 1:
		ip = '192.168.1.11';
		break; //user 1
	case 101:
		ip = '192.168.1.12';
		break; //user 2
	case 102:
		ip = '192.168.1.13';
		break; //user 3
	case 103:
		ip = '192.168.1.14';
		break; //user 4
	default:
		ip = '';
		break; //default ip
}
```
with this code:
```sh
	var ip = '192.168.1.xxx';
```
- After this change, you should also the change and password section as same.
- If you did all this changes then you are ready to call from Softone with one click.
	
