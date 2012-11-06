import inspect, os, errno, markup, sys

templates = 'app/views/'
index = 'app/index2.html'

final = open('final.html','w')

for i in os.listdir(templates):
	filename = 'app/views/'+i
	f = open(filename, "r").read()
	final.write(f)

final.close()
	


	