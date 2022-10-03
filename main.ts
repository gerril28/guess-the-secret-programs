input.onButtonPressed(Button.A, function () {
    basic.showNumber(Number2)
    Number2 += 1
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Number2)
    Number2 += -1
})
input.onGesture(Gesture.Shake, function () {
    if (Guess == Number2) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.showString("CORRECT")
    } else if (Guess != Number2) {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.showString("INCORRECT")
    }
})
let Guess = 0
let Number2 = 0
basic.showString("GTSP")
Number2 = randint(0, 20)
Guess = 0
