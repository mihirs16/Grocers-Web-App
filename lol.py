#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'rodOffcut' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY lengths as parameter.
#

def rodOffcut(lengths):
    # Write your code here
    allLengths = []
    x = 1
    while x > 0:
        newLengths = []
        shortest = min(lengths)
        for l in lengths:
            if l != shortest:
                newLengths.append(l - shortest)
        x = len(newLengths)
        allLengths.append(x)
    return allLengths



if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    lengths_count = int(input().strip())

    lengths = []

    for _ in range(lengths_count):
        lengths_item = int(input().strip())
        lengths.append(lengths_item)

    result = rodOffcut(lengths)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
