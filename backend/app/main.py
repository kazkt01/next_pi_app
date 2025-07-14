

class Student:
    def __init__(self, id, name, score1, score2, score3, age):
        self.id = id
        self.name = name
        self.score1 = score1
        self.score2 = score2
        self.score3 = score3
        self.age = age

    def avg(self):
        avg = (self.score1 + self.score2 + self.score3) / 3
        return avg

student_1 = Student(1,"tanaka",60,20,40.17, 18)
print(f'{student_1.avg()}点です')






