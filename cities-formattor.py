import csv

filename = 'worldcities_clean.csv'
output = '20_cities.csv'
num_cities = 20



cities = []

for line in open(filename).readlines():
    items = line.strip().split(',')
    cities.append(items)

indecies = {}
grouped_cities = []

for item in cities:

    added = False
    idx = 0

    for key in indecies:
        if item[3] == key:
            grouped_cities.insert(indecies[key], item)
            idx = indecies[key]
            added = True
    
    if not added:
        grouped_cities.insert(0, item)
        indecies[item[3]] = 0

    
    for key in indecies:
        if indecies[key] >= idx:
            indecies[key] += 1

counter = {}
to_remove = []

for i in range(len(grouped_cities)):
    item = grouped_cities[i]
    country = item[3]

    try:
        if counter[country] >= num_cities:
            to_remove.append(i)
        else:
            counter[country] += 1
    except:
        counter[country] = 1

final_list = []
for i in range(len(grouped_cities)):
    if i not in to_remove:
        final_list.append(grouped_cities[i])

with open(output, "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(final_list)