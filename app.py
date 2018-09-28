from boggle import Boggle
from flask import Flask, json, request, session, render_template, redirect, flash, jsonify, make_response
from flask_debugtoolbar import DebugToolbarExtension

boggle_game = Boggle()

app = Flask(__name__)
app.secret_key = "SECRET"

debug = DebugToolbarExtension(app)

@app.route('/')
def home():
    """Generate gameboard on homepage and store in session"""

    # If user is in a game just use their gameboard if they refresh
    if "game_board" in session:
        game_board = session["game_board"]
    else:
        game_board = boggle_game.make_board()

    session["game_board"] = game_board
    
    return render_template('gameboard.html', board=game_board)

@app.route('/check-word')
def check_word():
    """Backend API to check that a word is correct"""

    word = request.args.get("guess")
    game_board = session["game_board"]

    result = boggle_game.check_valid_word(game_board, word)

    return jsonify({"result": result})