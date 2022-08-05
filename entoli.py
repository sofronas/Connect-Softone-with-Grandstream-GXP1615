try:
    # for Python2
    import Tkinter as tk
    import tkMessageBox
except ImportError:
    # for Python3
    import tkinter as tk
    from tkinter import messagebox

import sys
import requests
from sys import exit

def main():
    if(len(sys.argv) < 2):
	    root = tk.Tk()
	    root.withdraw()
	    try:
		    tkMessageBox.showinfo("Error", "Error receiving string from SoftOne")
		    exit()
	    except:
		    messagebox.showinfo("Error", "Error receiving string from SoftOne")
		    exit()
    print("Name:",sys.argv[0])
    requests.get(sys.argv[1])
    return
    

if __name__ == '__main__':
    main()
