input.onButtonPressed(Button.A, function () {
    if (true) {
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Silly)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.Fabulous)
    } else {
        basic.showIcon(IconNames.Cow)
        basic.showIcon(IconNames.Skull)
        basic.showIcon(IconNames.Pitchfork)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.Asleep)
    }
})
