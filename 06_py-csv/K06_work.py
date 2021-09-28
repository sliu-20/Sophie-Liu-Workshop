f = open("occupations.csv")
lines = f.read().split("\n")
split = []
for i in lines:
    comma = i.rsplit(",", 1)
    split.append(comma)

del split[0]
split.pop()
split.pop()

print (split)
