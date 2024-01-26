from fastapi import FastAPI
from solaru.test import hello_world

app = FastAPI()

@app.get("/hello")
def hello():
    return hello_world()
