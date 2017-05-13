#inf1 = open('2016.csv','r')
inf1 = open('file.txt','r')

with open('file1.txt','w') as inf:
  for line in inf1:
    print(line)
    parts = line.split(",") # split line into parts
    
    monthyear = parts[0]
    print(monthyear[3:5]," ",monthyear[6:])
    
    inf.write(monthyear[6:10] + "," + monthyear[3:5] + "," + parts[1] + "\n")

inf1.close()