#!/bin/bash

sudo tshark -I -i wlan0 | grep -o -E '([[:xdigit:]]{1,2}:){5}[[:xdigit:]]{1,2}' | sort | uniq 

