## Sophie Liu
## SoftDev
## K06 -- StI/O: Divine your Destiny!
## 2021-09-28

import random

f = open("occupations.csv")
lines = f.read().split("\n")

split = []
for i in lines:
    comma = i.rsplit(",",1)
    split.append(comma)

# This removes the first and last lines, since "Percentage" isn't a number and
# the 99.8 "Total" would completely skew the results. pop() needs to be run twice
# because there also an empty array in there, probably due to an extra enter
# in the csv file. 

del split[0]
split.pop()
split.pop()

dictionary = dict(split)

# Another array is needed because the numbers are currently being stored as strings. 
numbers = []

for i in dictionary:
    numbers.append(float(dictionary.get(i)))

print(random.choices(list(dictionary), weights=numbers))

