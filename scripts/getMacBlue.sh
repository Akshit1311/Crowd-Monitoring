#!/bin/bash

hcitool scan | grep -o -E '([[:xdigit:]]{1,2}:){5}[[:xdigit:]]{1,2}' > output.txt

cat output.txt
