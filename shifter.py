book = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
word = []
dictCount = len(book)
userInput = input("Enter Text: ");
shift = int(input("Shift count: "))

for letter in userInput:
	letter = letter.lower()
	indexOfLetter = book.index(letter)
	newCharacter = book[(indexOfLetter + shift) % dictCount]
	word.append(newCharacter)


ans = "".join(word)
print(ans)
