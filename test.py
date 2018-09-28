from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle


class FlaskTests(TestCase):

    def test_home(self):
        """Testing to see if card is rendered on gameboard"""
        client = app.test_client()
        result = client.get('/')
        self.assertIn(b'<div class="card-body">', result.data)

