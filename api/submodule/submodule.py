import os
from api.sibling.sibling import sibling

secret = os.getenv("SECRET_KEY")

def submodule():
    text = sibling()
    return f"This is a submodule! {text} and here is a env file var {secret}"
