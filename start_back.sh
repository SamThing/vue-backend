#!/bin/bash

sleep 10

cd /node_js && node create-table.js &

cd /node_js && node main.js &