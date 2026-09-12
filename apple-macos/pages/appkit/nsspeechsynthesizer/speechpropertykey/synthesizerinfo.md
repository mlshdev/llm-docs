> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/synthesizerinfo](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/synthesizerinfo)

# synthesizerInfo (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Get information about the speech synthesizer being used on the specified synthesizer.

## Declaration

```swift
static let synthesizerInfo: NSSpeechSynthesizer.SpeechPropertyKey
```

<a id="Discussion"></a>

## Discussion

A dictionary object that contains information about the speech synthesizer being used on the specified synthesizer. See [NSSpeechSynthesizer.SpeechPropertyKey.SynthesizerInfoKey](synthesizerinfokey.md) for a description of the keys present in the dictionary.

## See Also

### Speech Property Keys

- [status](status.md): Get speech-status information for the synthesizer.
- [errors](errors.md): Get speech-error information for the synthesizer.
- [inputMode](inputmode.md): Get or set the synthesizer’s current text-processing mode.
- [characterMode](charactermode.md): Get or set the synthesizer’s current text-processing mode.
- [numberMode](numbermode.md): Get or set the synthesizer’s current number-processing mode.
- [rate](rate.md): Get or set a synthesizer’s speech rate.
- [pitchBase](pitchbase.md): Get or set a synthesizer’s baseline speech pitch.
- [pitchMod](pitchmod.md): Get or set a synthesizer’s pitch modulation.
- [volume](volume.md): Get or set the speech volume for a synthesizer.
- [recentSync](recentsync.md): Get the message code for the most recently encountered synchronization command.
- [phonemeSymbols](phonemesymbols.md): Get a list of phoneme symbols and example words defined for the synthesizer.
- [currentVoice](currentvoice.md): Set the current voice on the synthesizer to the specified voice.
- [commandDelimiter](commanddelimiter.md): Set the embedded speech command delimiter characters to be used for the synthesizer.
- [reset](reset.md): Set a synthesizer back to its default state.
- [outputToFileURL](outputtofileurl.md): Set the speech output destination to a file or to the computer’s speakers.

# NSSpeechSynthesizerInfoProperty (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get information about the speech synthesizer being used on the specified synthesizer.

## Declaration

```objectivec
extern NSSpeechPropertyKey const NSSpeechSynthesizerInfoProperty;
```

<a id="Discussion"></a>

## Discussion

A dictionary object that contains information about the speech synthesizer being used on the specified synthesizer. See [NSSpeechSynthesizerInfoKey](synthesizerinfokey.md) for a description of the keys present in the dictionary.

## See Also

### Speech Property Keys

- [NSSpeechStatusProperty](status.md): Get speech-status information for the synthesizer.
- [NSSpeechErrorsProperty](errors.md): Get speech-error information for the synthesizer.
- [NSSpeechInputModeProperty](inputmode.md): Get or set the synthesizer’s current text-processing mode.
- [NSSpeechCharacterModeProperty](charactermode.md): Get or set the synthesizer’s current text-processing mode.
- [NSSpeechNumberModeProperty](numbermode.md): Get or set the synthesizer’s current number-processing mode.
- [NSSpeechRateProperty](rate.md): Get or set a synthesizer’s speech rate.
- [NSSpeechPitchBaseProperty](pitchbase.md): Get or set a synthesizer’s baseline speech pitch.
- [NSSpeechPitchModProperty](pitchmod.md): Get or set a synthesizer’s pitch modulation.
- [NSSpeechVolumeProperty](volume.md): Get or set the speech volume for a synthesizer.
- [NSSpeechRecentSyncProperty](recentsync.md): Get the message code for the most recently encountered synchronization command.
- [NSSpeechPhonemeSymbolsProperty](phonemesymbols.md): Get a list of phoneme symbols and example words defined for the synthesizer.
- [NSSpeechCurrentVoiceProperty](currentvoice.md): Set the current voice on the synthesizer to the specified voice.
- [NSSpeechCommandDelimiterProperty](commanddelimiter.md): Set the embedded speech command delimiter characters to be used for the synthesizer.
- [NSSpeechResetProperty](reset.md): Set a synthesizer back to its default state.
- [NSSpeechOutputToFileURLProperty](outputtofileurl.md): Set the speech output destination to a file or to the computer’s speakers.
