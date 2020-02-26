from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/api/")
def hello_whale():
    return "hello"


@app.route("/api/v1")
def api_1():
    return "API version 1"


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=80)
