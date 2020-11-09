import os
from flask import Flask, jsonify
from api.submodule.submodule import submodule

app = Flask(__name__)

@app.route("/api/secret")
def hello_whale():
    secret = os.getenv("SECRET_KEY")
    return secret


@app.route("/api/submodule")
def hello_submodule():
    text = submodule()
    return text

@app.route("/api/v1")
def api_1():
    return "API version 1"


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=80)
