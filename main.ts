basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.showIcon(IconNames.Happy)
    while (input.temperature() < 26) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Yes)
        music.playMelody("C5 - - - - - - - ", 120)
    }
    while (input.temperature() < 32) {
        basic.showIcon(IconNames.No)
        music.playMelody("C5 C5 - - - - - - ", 120)
    }
})
