#inf1 = open('2016.csv','r')
inf1 = open('file.txt','r')

zones = ["ez","cz","nz","sz","sez","swz","wz"]
zones1 = ["ez","cz","nz","sz","lz","az","wz"]
zones2 = ["east zone","central zone","north zone","south zone","south east zone","south west zone","west zone"]
zones3 = ["varachha","","katargam","udhana","limbayat","athwa","rander"]

with open('file1.txt','w') as inf:
  for line in inf1:
    print(line)
    parts = line.split(",") # split line into parts
    zone = parts[0].lower()
    
    if zone in zones:
      k = zones.index(zone)
    elif zone in zones1:
      k = zones1.index(zone)
    elif zone in zones2:
      k = zones2.index(zone)
    elif zone in zones3:
      k = zones3.index(zone)
    
    print(k,"\n")
    inf.write(str(k) + "\n")

inf1.close()