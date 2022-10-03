input.onButtonPressed(Button.A, function () {
    basic.showNumber(Number2)
    Number2 += 1
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Number2)
    Number2 += -1
})
input.onGesture(Gesture.Shake, function () {
    let Guess = 0
    if (Guess == Number2) {
        basic.showString("CORRECT")
        basic.showIcon(IconNames.Yes)
    } else if (Guess == Number2) {
        basic.showString("INCORRECT")
        basic.showIcon(IconNames.No)
    }
})
let Number2 = 0
basic.showString("GTSP")
Number2 = randint(0, 20)
