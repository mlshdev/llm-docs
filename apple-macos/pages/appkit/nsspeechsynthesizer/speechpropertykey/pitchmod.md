> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/pitchmod](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/pitchmod)

# pitchMod (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Get or set a synthesizer’s pitch modulation.

## Declaration

```swift
static let pitchMod: NSSpeechSynthesizer.SpeechPropertyKey
```

<a id="Discussion"></a>

## Discussion

An [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object that specifies the synthesizer’s pitch modulation.

Pitch modulation is also expressed as a floating-point value in the range of 0.000 to 127.000. These values correspond to MIDI note values, where 60.000 is equal to middle C on a piano scale. The most useful speech pitches fall in the range of 40.000 to 55.000. A pitch modulation value of 0.000 corresponds to a monotone in which all speech is generated at the frequency corresponding to the speech pitch. Given a speech pitch value of 46.000, a pitch modulation of 2.000 would mean that the widest possible range of pitches corresponding to the actual frequency of generated text would be 44.000 to 48.000.

This property is used with [setObject(\_:forProperty:)](../setobject%28__forproperty_%29.md) and [object(forProperty:)](../object%28forproperty_%29.md).

> **Note**

>  The change in pitch modulation may not be noticeable until the next sentence or paragraph is spoken.

## See Also

### Speech Property Keys

- [status](status.md): Get speech-status information for the synthesizer.
- [errors](errors.md): Get speech-error information for the synthesizer.
- [inputMode](inputmode.md): Get or set the synthesizer’s current text-processing mode.
- [characterMode](charactermode.md): Get or set the synthesizer’s current text-processing mode.
- [numberMode](numbermode.md): Get or set the synthesizer’s current number-processing mode.
- [rate](rate.md): Get or set a synthesizer’s speech rate.
- [pitchBase](pitchbase.md): Get or set a synthesizer’s baseline speech pitch.
- [volume](volume.md): Get or set the speech volume for a synthesizer.
- [synthesizerInfo](synthesizerinfo.md): Get information about the speech synthesizer being used on the specified synthesizer.
- [recentSync](recentsync.md): Get the message code for the most recently encountered synchronization command.
- [phonemeSymbols](phonemesymbols.md): Get a list of phoneme symbols and example words defined for the synthesizer.
- [currentVoice](currentvoice.md): Set the current voice on the synthesizer to the specified voice.
- [commandDelimiter](commanddelimiter.md): Set the embedded speech command delimiter characters to be used for the synthesizer.
- [reset](reset.md): Set a synthesizer back to its default state.
- [outputToFileURL](outputtofileurl.md): Set the speech output destination to a file or to the computer’s speakers.

# NSSpeechPitchModProperty (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get or set a synthesizer’s pitch modulation.

## Declaration

```objectivec
extern NSSpeechPropertyKey const NSSpeechPitchModProperty;
```

<a id="Discussion"></a>

## Discussion

An [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object that specifies the synthesizer’s pitch modulation.

Pitch modulation is also expressed as a floating-point value in the range of 0.000 to 127.000. These values correspond to MIDI note values, where 60.000 is equal to middle C on a piano scale. The most useful speech pitches fall in the range of 40.000 to 55.000. A pitch modulation value of 0.000 corresponds to a monotone in which all speech is generated at the frequency corresponding to the speech pitch. Given a speech pitch value of 46.000, a pitch modulation of 2.000 would mean that the widest possible range of pitches corresponding to the actual frequency of generated text would be 44.000 to 48.000.

This property is used with [setObject:forProperty:error:](../setobject%28__forproperty_%29.md) and [objectForProperty:error:](../object%28forproperty_%29.md).

> **Note**

>  The change in pitch modulation may not be noticeable until the next sentence or paragraph is spoken.

## See Also

### Speech Property Keys

- [NSSpeechStatusProperty](status.md): Get speech-status information for the synthesizer.
- [NSSpeechErrorsProperty](errors.md): Get speech-error information for the synthesizer.
- [NSSpeechInputModeProperty](inputmode.md): Get or set the synthesizer’s current text-processing mode.
- [NSSpeechCharacterModeProperty](charactermode.md): Get or set the synthesizer’s current text-processing mode.
- [NSSpeechNumberModeProperty](numbermode.md): Get or set the synthesizer’s current number-processing mode.
- [NSSpeechRateProperty](rate.md): Get or set a synthesizer’s speech rate.
- [NSSpeechPitchBaseProperty](pitchbase.md): Get or set a synthesizer’s baseline speech pitch.
- [NSSpeechVolumeProperty](volume.md): Get or set the speech volume for a synthesizer.
- [NSSpeechSynthesizerInfoProperty](synthesizerinfo.md): Get information about the speech synthesizer being used on the specified synthesizer.
- [NSSpeechRecentSyncProperty](recentsync.md): Get the message code for the most recently encountered synchronization command.
- [NSSpeechPhonemeSymbolsProperty](phonemesymbols.md): Get a list of phoneme symbols and example words defined for the synthesizer.
- [NSSpeechCurrentVoiceProperty](currentvoice.md): Set the current voice on the synthesizer to the specified voice.
- [NSSpeechCommandDelimiterProperty](commanddelimiter.md): Set the embedded speech command delimiter characters to be used for the synthesizer.
- [NSSpeechResetProperty](reset.md): Set a synthesizer back to its default state.
- [NSSpeechOutputToFileURLProperty](outputtofileurl.md): Set the speech output destination to a file or to the computer’s speakers.
