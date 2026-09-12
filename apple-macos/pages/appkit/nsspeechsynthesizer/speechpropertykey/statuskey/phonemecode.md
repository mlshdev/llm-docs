> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/statuskey/phonemecode](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/statuskey/phonemecode)

# phonemeCode (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Indicates that the synthesizer is in phoneme-processing mode. When in phoneme-processing mode, a text buffer is interpreted to be a series of characters representing various phonemes and prosodic controls.

## Declaration

```swift
static let phonemeCode: NSSpeechSynthesizer.SpeechPropertyKey.StatusKey
```

## See Also

### Status Keys

- [numberOfCharactersLeft](numberofcharactersleft.md): The number of characters left in the input string of text.
- [outputBusy](outputbusy.md): Indicates whether the synthesizer is currently producing speech.
- [outputPaused](outputpaused.md): Indicates whether speech output in the synthesizer has been paused by sending the message [pauseSpeaking(at:)](../../pausespeaking%28at_%29.md).

# NSSpeechStatusPhonemeCode (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Indicates that the synthesizer is in phoneme-processing mode. When in phoneme-processing mode, a text buffer is interpreted to be a series of characters representing various phonemes and prosodic controls.

## Declaration

```objectivec
extern NSSpeechStatusKey const NSSpeechStatusPhonemeCode;
```

## See Also

### Status Keys

- [NSSpeechStatusNumberOfCharactersLeft](numberofcharactersleft.md): The number of characters left in the input string of text.
- [NSSpeechStatusOutputBusy](outputbusy.md): Indicates whether the synthesizer is currently producing speech.
- [NSSpeechStatusOutputPaused](outputpaused.md): Indicates whether speech output in the synthesizer has been paused by sending the message [pauseSpeakingAtBoundary:](../../pausespeaking%28at_%29.md).
