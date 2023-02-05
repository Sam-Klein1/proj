from flask import Flask, render_template, request
import gtts

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/tts", methods=["POST"])
def tts():
    string_data = request.json['string']
    # do something with string_data
    tts = gtts.gTTS(string_data)
    tts.save("w2l/tts.mp3")
    return "Success"

# @app.route("/process_data", methods=["POST"])
# def process_data():
#     data = request.form["data"]
#     # Process the data and return a response
#     response = gtts.gTTS(data)
#     response.save("tts.mp3")
#     return response

if __name__ == '__main__':
    app.run()