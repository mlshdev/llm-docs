> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552256-speech-channel_modes](https://developer.apple.com/documentation/applicationservices/1552256-speech-channel_modes)

# Speech-Channel Modes

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The available text-processing and number-processing modes for a speech channel.

## Declaration

```objectivec
enum : OSType {
    ...
};
```

## Topics

### Constants

- [modeText](1552256-speech-channel_modes/modetext.md): Used with [soInputMode](1552228-speech-channel_information_constants/soinputmode.md) to indicate that the speech channel is in text-processing mode.
- [modePhonemes](1552256-speech-channel_modes/modephonemes.md): Used with [soInputMode](1552228-speech-channel_information_constants/soinputmode.md) to indicate that the speech channel is in phoneme-processing mode. When in phoneme-processing mode, a text buffer is interpreted to be a series of characters representing various phonemes and prosodic controls.
- [modeNormal](1552256-speech-channel_modes/modenormal.md): When the speech channel is in text-processing mode, indicates that the synthesizer should process characters as expected and assemble digits into numbers. Use this value with [soCharacterMode](1552228-speech-channel_information_constants/socharactermode.md) and [soNumberMode](1552228-speech-channel_information_constants/sonumbermode.md).
- [modeLiteral](1552256-speech-channel_modes/modeliteral.md): When the speech channel is in text-processing mode, indicates that characters and digits are spoken literally (for example, “cat” is spoken as “C-A-T” and “12” is spoken as "one, two"). Use this value with [soCharacterMode](1552228-speech-channel_information_constants/socharactermode.md) and [soNumberMode](1552228-speech-channel_information_constants/sonumbermode.md).
- [modeTune](1552256-speech-channel_modes/modetune.md)
