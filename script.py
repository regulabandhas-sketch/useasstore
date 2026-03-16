from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

ADMIN_PASSWORD = "useas"


@app.route("/")
def home():
    with open("apps.json") as f:
        data = json.load(f)
    return jsonify(data)


@app.route("/admin", methods=["POST"])
def admin():
    password = request.json.get("password")

    if password == ADMIN_PASSWORD:
        return {"status": "success"}
    else:
        return {"status": "wrong password"}


@app.route("/add_app", methods=["POST"])
def add_app():
    name = request.json.get("name")
    image = request.json.get("image")
    download = request.json.get("download")
    qr = request.json.get("qr")

    new_app = {
        "name": name,
        "image": image,
        "download": download,
        "qr": qr
    }

    with open("apps.json") as f:
        data = json.load(f)

    data["apps"].append(new_app)

    with open("apps.json", "w") as f:
        json.dump(data, f, indent=4)

    return {"status": "app added"}


if __name__ == "__main__":
    app.run(debug=True)
