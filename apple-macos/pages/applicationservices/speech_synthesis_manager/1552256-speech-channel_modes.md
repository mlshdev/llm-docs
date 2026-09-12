> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/speech_synthesis_manager/1552256-speech-channel_modes](https://developer.apple.com/documentation/applicationservices/speech_synthesis_manager/1552256-speech-channel_modes)

# Speech-Channel Modes

**Framework:** Application Services

The available text-processing and number-processing modes for a speech channel.

## Topics

### Constants

- [modeText](../modetext.md): Used with [soInputMode](../soinputmode.md) to indicate that the speech channel is in text-processing mode.
- [modePhonemes](../modephonemes.md): Used with [soInputMode](../soinputmode.md) to indicate that the speech channel is in phoneme-processing mode. When in phoneme-processing mode, a text buffer is interpreted to be a series of characters representing various phonemes and prosodic controls.
- [modeNormal](../modenormal.md): When the speech channel is in text-processing mode, indicates that the synthesizer should process characters as expected and assemble digits into numbers. Use this value with [soCharacterMode](../socharactermode.md) and [soNumberMode](../sonumbermode.md).
- [modeLiteral](../modeliteral.md): When the speech channel is in text-processing mode, indicates that characters and digits are spoken literally (for example, “cat” is spoken as “C-A-T” and “12” is spoken as "one, two"). Use this value with [soCharacterMode](../socharactermode.md) and [soNumberMode](../sonumbermode.md).
- [modeTune](../modetune.md)
