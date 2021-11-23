from flask import Flask, render_template, request, session, redirect
import os

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route("/", methods=['GET', 'POST'])
return render_template("main.html", pic="123")
