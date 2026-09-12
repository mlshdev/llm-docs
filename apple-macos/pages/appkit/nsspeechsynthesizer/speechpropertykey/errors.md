> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/errors](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/errors)

# errors (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Get speech-error information for the synthesizer.

## Declaration

```swift
static let errors: NSSpeechSynthesizer.SpeechPropertyKey
```

<a id="Discussion"></a>

## Discussion

A dictionary object that contains speech-error information. See [NSSpeechSynthesizer.SpeechPropertyKey.ErrorKey](errorkey.md) for a description of the keys present in the dictionary.

This property lets you get information about various run-time errors that occur during speaking, such as the detection of badly formed embedded commands. Errors returned directly by the Speech Synthesis Manager are not reported here.

If your application implements the [speechSynthesizer(\_:didEncounterErrorAt:of:message:)](../../nsspeechsynthesizerdelegate/speechsynthesizer%28__didencountererrorat_of_message_%29.md) delegate message, the delegate message can use this property to get error information.

This property is used with [setObject(\_:forProperty:)](../setobject%28__forproperty_%29.md).

## See Also

### Speech Property Keys

- [status](status.md): Get speech-status information for the synthesizer.
- [inputMode](inputmode.md): Get or set the synthesizer’s current text-processing mode.
- [characterMode](charactermode.md): Get or set the synthesizer’s current text-processing mode.
- [numberMode](numbermode.md): Get or set the synthesizer’s current number-processing mode.
- [rate](rate.md): Get or set a synthesizer’s speech rate.
- [pitchBase](pitchbase.md): Get or set a synthesizer’s baseline speech pitch.
- [pitchMod](pitchmod.md): Get or set a synthesizer’s pitch modulation.
- [volume](volume.md): Get or set the speech volume for a synthesizer.
- [synthesizerInfo](synthesizerinfo.md): Get information about the speech synthesizer being used on the specified synthesizer.
- [recentSync](recentsync.md): Get the message code for the most recently encountered synchronization command.
- [phonemeSymbols](phonemesymbols.md): Get a list of phoneme symbols and example words defined for the synthesizer.
- [currentVoice](currentvoice.md): Set the current voice on the synthesizer to the specified voice.
- [commandDelimiter](commanddelimiter.md): Set the embedded speech command delimiter characters to be used for the synthesizer.
- [reset](reset.md): Set a synthesizer back to its default state.
- [outputToFileURL](outputtofileurl.md): Set the speech output destination to a file or to the computer’s speakers.

# NSSpeechErrorsProperty (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get speech-error information for the synthesizer.

## Declaration

```objectivec
extern NSSpeechPropertyKey const NSSpeechErrorsProperty;
```

<a id="Discussion"></a>

## Discussion

A dictionary object that contains speech-error information. See [NSSpeechErrorKey](errorkey.md) for a description of the keys present in the dictionary.

This property lets you get information about various run-time errors that occur during speaking, such as the detection of badly formed embedded commands. Errors returned directly by the Speech Synthesis Manager are not reported here.

If your application implements the [speechSynthesizer:didEncounterErrorAtIndex:ofString:message:](../../nsspeechsynthesizerdelegate/speechsynthesizer%28__didencountererrorat_of_message_%29.md) delegate message, the delegate message can use this property to get error information.

This property is used with [setObject:forProperty:error:](../setobject%28__forproperty_%29.md).

## See Also

### Speech Property Keys

- [NSSpeechStatusProperty](status.md): Get speech-status information for the synthesizer.
- [NSSpeechInputModeProperty](inputmode.md): Get or set the synthesizer’s current text-processing mode.
- [NSSpeechCharacterModeProperty](charactermode.md): Get or set the synthesizer’s current text-processing mode.
- [NSSpeechNumberModeProperty](numbermode.md): Get or set the synthesizer’s current number-processing mode.
- [NSSpeechRateProperty](rate.md): Get or set a synthesizer’s speech rate.
- [NSSpeechPitchBaseProperty](pitchbase.md): Get or set a synthesizer’s baseline speech pitch.
- [NSSpeechPitchModProperty](pitchmod.md): Get or set a synthesizer’s pitch modulation.
- [NSSpeechVolumeProperty](volume.md): Get or set the speech volume for a synthesizer.
- [NSSpeechSynthesizerInfoProperty](synthesizerinfo.md): Get information about the speech synthesizer being used on the specified synthesizer.
- [NSSpeechRecentSyncProperty](recentsync.md): Get the message code for the most recently encountered synchronization command.
- [NSSpeechPhonemeSymbolsProperty](phonemesymbols.md): Get a list of phoneme symbols and example words defined for the synthesizer.
- [NSSpeechCurrentVoiceProperty](currentvoice.md): Set the current voice on the synthesizer to the specified voice.
- [NSSpeechCommandDelimiterProperty](commanddelimiter.md): Set the embedded speech command delimiter characters to be used for the synthesizer.
- [NSSpeechResetProperty](reset.md): Set a synthesizer back to its default state.
- [NSSpeechOutputToFileURLProperty](outputtofileurl.md): Set the speech output destination to a file or to the computer’s speakers.
