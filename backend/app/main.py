from fastapi import FastAPI

app = FastAPI()

class Student:
    def __init__(self, id, name, score1, score2, score3, age):
        self.id = id
        self.name = name
        self.score1 = score1
        self.score2 = score2
        self.score3 = score3
        self.age = age

    def avg(self):
        return (self.score1 + self.score2 + self.score3) / 3

@app.get("/")
def get_student():
    student_1 = Student(1, "tanaka", 60, 20, 40.17, 18)
    return {
        "id": student_1.id,
        "name": student_1.name,
        "average": student_1.avg(),
        "age": student_1.age
    }

