import speech_recognition as sr
import os
import subprocess as sp
import requests
from bs4 import BeautifulSoup
size = 3

def run_Simon():
    
    searchResults = [None] * size
    while True:
        r = sr.Recognizer()
        with sr.Microphone() as source:
            print("Testing")
            audio=r.listen(source)
        
            try:
                text=r.recognize_google(audio) 
                print('You said: {}'.format(text))
                if text=="stop":
                    break
                else:
                    if text=="open Youtube Folder":
                        os.startfile('Youtube_launch.bat')
                    
                    elif text=="open Google Chrome":
                    
                        sp.call(['C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'])
                        print("Opening Google Chrome.")
                    elif text=="hey Simon":
                        print("Yes?")
                        audio=r.listen(source)
                        text=r.recognize_google(audio)
                        if text=="search":
                            print("What would you like to search?")
                            audio=r.listen(source)
                            text=r.recognize_google(audio)
                            print('Searching for: {}'.format(text))
                            searchResults = run_Search(text)
            except:
                print("Sorry could you repeat that?")

class Site:
    def __init__(self, _url):
        self.url = _url
        self.html = requests.get(self.url).text
        self.soup = BeautifulSoup(self.html, "html.parser")
        self.p = self.soup.findAll('p')

    def GetUrl(self):
        return self.url
    def PrintSite(self):
        print("URL: \t", self.url)
        print("\nP Tag: \t", self)

def run_Search(query):
    sites = [None] * sizes #list = []

    try: 
        from googlesearch import search 
    except ImportError:  
        print("No module named 'google' found") 
    i = 0
    for j in search(query, tld="co.in", num=size, stop=size, pause=2): 
        str = j
        temp_site = Site(str)
        sites[i] = temp_site
        sites[i].PrintSite() 
        i = i + 1
    return sites



#run_Simon()
run_Search("Pizza")