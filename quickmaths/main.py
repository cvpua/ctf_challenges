import random


print("GENERAL QUIZBEE!!!")
print("===================")
correctAnswer = 0
questions = [
    ["Convert '1011' to decimal: ","7"],
    ["Convert 'AF' to binary: ","10101111"],
    ["What character does 89(decimal) represents in ASCII? ","Y"],
    ["5 + 4 = ","9"],
    ["12 % 4 = ", "0"],
    ["Convert 100001010 to octal: ", "412"],
    ["Convert 322(octal) to binary: ", "011010010"],
    ["T or F, is === a valid operator in javascript? ", "T"],
    ["T or F, is '5 * a' a valid statement in python? ","F"],
    ["T or F, is '5 * \"a\"' a valid statement in python? ","T"]
    ]

random.shuffle(questions)

while True:
    question = questions.pop()
    ans = input(question[0])
    if(ans == question[1]):
        print("Correct!")
        correctAnswer = correctAnswer + 1
    else:
        print("Wrong answer, reconnect to try again.")
        break
    
    if (correctAnswer == 5):
        print("You\'re a genius! Here\'s your flag: flag\{big_br4in\}")
        break