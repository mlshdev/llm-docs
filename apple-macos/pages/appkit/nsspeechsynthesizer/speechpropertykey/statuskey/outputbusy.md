> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/statuskey/outputbusy](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/statuskey/outputbusy)

# outputBusy (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Indicates whether the synthesizer is currently producing speech.

## Declaration

```swift
static let outputBusy: NSSpeechSynthesizer.SpeechPropertyKey.StatusKey
```

<a id="Discussion"></a>

## Discussion

A synthesizer is considered to be producing speech even at some times when no audio data is being produced through the computer’s speaker. This occurs, for example, when the synthesizer is processing input, but has not yet initiated speech or when speech output is paused.

## See Also

### Status Keys

- [numberOfCharactersLeft](numberofcharactersleft.md): The number of characters left in the input string of text.
- [outputPaused](outputpaused.md): Indicates whether speech output in the synthesizer has been paused by sending the message [pauseSpeaking(at:)](../../pausespeaking%28at_%29.md).
- [phonemeCode](phonemecode.md): Indicates that the synthesizer is in phoneme-processing mode. When in phoneme-processing mode, a text buffer is interpreted to be a series of characters representing various phonemes and prosodic controls.

# NSSpeechStatusOutputBusy (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Indicates whether the synthesizer is currently producing speech.

## Declaration

```objectivec
extern NSSpeechStatusKey const NSSpeechStatusOutputBusy;
```

<a id="Discussion"></a>

## Discussion

A synthesizer is considered to be producing speech even at some times when no audio data is being produced through the computer’s speaker. This occurs, for example, when the synthesizer is processing input, but has not yet initiated speech or when speech output is paused.

## See Also

### Status Keys

- [NSSpeechStatusNumberOfCharactersLeft](numberofcharactersleft.md): The number of characters left in the input string of text.
- [NSSpeechStatusOutputPaused](outputpaused.md): Indicates whether speech output in the synthesizer has been paused by sending the message [pauseSpeakingAtBoundary:](../../pausespeaking%28at_%29.md).
- [NSSpeechStatusPhonemeCode](phonemecode.md): Indicates that the synthesizer is in phoneme-processing mode. When in phoneme-processing mode, a text buffer is interpreted to be a series of characters representing various phonemes and prosodic controls.
