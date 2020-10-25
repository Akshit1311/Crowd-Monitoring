#!/usr/bin/env python
# encoding: utf-8
import json
from flask_cors import CORS
from flask import Flask


app = Flask(__name__)
CORS(app)
@app.route('/')
def index():
    return json.dumps({'name': 'alice',
                       'email': 'alice@outlook.com'})

app.run(debug=True)
