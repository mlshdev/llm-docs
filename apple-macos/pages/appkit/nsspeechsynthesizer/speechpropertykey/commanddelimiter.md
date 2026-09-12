> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/commanddelimiter](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/commanddelimiter)

# commandDelimiter (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Set the embedded speech command delimiter characters to be used for the synthesizer.

## Declaration

```swift
static let commandDelimiter: NSSpeechSynthesizer.SpeechPropertyKey
```

<a id="Discussion"></a>

## Discussion

A dictionary object that contains the delimiter information. By default, the opening delimiter is “\[\[” and the closing delimiter is “\]\]”. Your application might need to change these delimiters temporarily if those character sequences occur naturally in a text buffer that is to be spoken. Your application can also disable embedded command processing by passing empty delimiters (as empty strings). See [NSSpeechSynthesizer.SpeechPropertyKey.CommandDelimiterKey](commanddelimiterkey.md) for the keys you can use to specify values in this dictionary.

This property works with [setObject(\_:forProperty:)](../setobject%28__forproperty_%29.md).

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
- [synthesizerInfo](synthesizerinfo.md): Get information about the speech synthesizer being used on the specified synthesizer.
- [recentSync](recentsync.md): Get the message code for the most recently encountered synchronization command.
- [phonemeSymbols](phonemesymbols.md): Get a list of phoneme symbols and example words defined for the synthesizer.
- [currentVoice](currentvoice.md): Set the current voice on the synthesizer to the specified voice.
- [reset](reset.md): Set a synthesizer back to its default state.
- [outputToFileURL](outputtofileurl.md): Set the speech output destination to a file or to the computer’s speakers.

# NSSpeechCommandDelimiterProperty (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the embedded speech command delimiter characters to be used for the synthesizer.

## Declaration

```objectivec
extern NSSpeechPropertyKey const NSSpeechCommandDelimiterProperty;
```

<a id="Discussion"></a>

## Discussion

A dictionary object that contains the delimiter information. By default, the opening delimiter is “\[\[” and the closing delimiter is “\]\]”. Your application might need to change these delimiters temporarily if those character sequences occur naturally in a text buffer that is to be spoken. Your application can also disable embedded command processing by passing empty delimiters (as empty strings). See [NSSpeechCommandDelimiterKey](commanddelimiterkey.md) for the keys you can use to specify values in this dictionary.

This property works with [setObject:forProperty:error:](../setobject%28__forproperty_%29.md).

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
- [NSSpeechSynthesizerInfoProperty](synthesizerinfo.md): Get information about the speech synthesizer being used on the specified synthesizer.
- [NSSpeechRecentSyncProperty](recentsync.md): Get the message code for the most recently encountered synchronization command.
- [NSSpeechPhonemeSymbolsProperty](phonemesymbols.md): Get a list of phoneme symbols and example words defined for the synthesizer.
- [NSSpeechCurrentVoiceProperty](currentvoice.md): Set the current voice on the synthesizer to the specified voice.
- [NSSpeechResetProperty](reset.md): Set a synthesizer back to its default state.
- [NSSpeechOutputToFileURLProperty](outputtofileurl.md): Set the speech output destination to a file or to the computer’s speakers.
