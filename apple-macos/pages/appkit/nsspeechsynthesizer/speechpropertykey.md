> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey)

# NSSpeechSynthesizer.SpeechPropertyKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.3+ (deprecated in 14.0)

These constants are used with [setObject(\_:forProperty:)](setobject%28__forproperty_%29.md) and [object(forProperty:)](object%28forproperty_%29.md) to get or set the characteristics of a synthesizer.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
struct SpeechPropertyKey
```

## Topics

### Speech Property Keys

- [status](speechpropertykey/status.md): Get speech-status information for the synthesizer.
- [errors](speechpropertykey/errors.md): Get speech-error information for the synthesizer.
- [inputMode](speechpropertykey/inputmode.md): Get or set the synthesizer’s current text-processing mode.
- [characterMode](speechpropertykey/charactermode.md): Get or set the synthesizer’s current text-processing mode.
- [numberMode](speechpropertykey/numbermode.md): Get or set the synthesizer’s current number-processing mode.
- [rate](speechpropertykey/rate.md): Get or set a synthesizer’s speech rate.
- [pitchBase](speechpropertykey/pitchbase.md): Get or set a synthesizer’s baseline speech pitch.
- [pitchMod](speechpropertykey/pitchmod.md): Get or set a synthesizer’s pitch modulation.
- [volume](speechpropertykey/volume.md): Get or set the speech volume for a synthesizer.
- [synthesizerInfo](speechpropertykey/synthesizerinfo.md): Get information about the speech synthesizer being used on the specified synthesizer.
- [recentSync](speechpropertykey/recentsync.md): Get the message code for the most recently encountered synchronization command.
- [phonemeSymbols](speechpropertykey/phonemesymbols.md): Get a list of phoneme symbols and example words defined for the synthesizer.
- [currentVoice](speechpropertykey/currentvoice.md): Set the current voice on the synthesizer to the specified voice.
- [commandDelimiter](speechpropertykey/commanddelimiter.md): Set the embedded speech command delimiter characters to be used for the synthesizer.
- [reset](speechpropertykey/reset.md): Set a synthesizer back to its default state.
- [outputToFileURL](speechpropertykey/outputtofileurl.md): Set the speech output destination to a file or to the computer’s speakers.

### Type Aliases

- [NSSpeechSynthesizer.SpeechPropertyKey.CommandDelimiterKey](speechpropertykey/commanddelimiterkey.md): Deprecated. Keys for the command delimiters.
- [NSSpeechSynthesizer.SpeechPropertyKey.ErrorKey](speechpropertykey/errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechSynthesizer.SpeechPropertyKey.Mode](speechpropertykey/mode.md): Deprecated. Keys for the speaking mode.
- [NSSpeechSynthesizer.SpeechPropertyKey.PhonemeInfoKey](speechpropertykey/phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechSynthesizer.SpeechPropertyKey.StatusKey](speechpropertykey/statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizer.SpeechPropertyKey.SynthesizerInfoKey](speechpropertykey/synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.

### Initializers

- [init(rawValue:)](speechpropertykey/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Speech Attributes

- [addSpeechDictionary(\_:)](addspeechdictionary%28__%29.md): Deprecated. Registers the given speech dictionary with the receiver.
- [NSSpeechSynthesizer.DictionaryKey](dictionarykey.md): Deprecated. These constants identify key-value pairs used to add vocabulary to the dictionary using [addSpeechDictionary(\_:)](addspeechdictionary%28__%29.md).
- [object(forProperty:)](object%28forproperty_%29.md): Deprecated. Provides the value of a receiver’s property.
- [setObject(\_:forProperty:)](setobject%28__forproperty_%29.md): Deprecated. Specifies the value of a receiver’s property.
- [NSSpeechSynthesizer.SpeechPropertyKey.CommandDelimiterKey](speechpropertykey/commanddelimiterkey.md): Deprecated. Keys for the command delimiters.
- [NSSpeechSynthesizer.SpeechPropertyKey.ErrorKey](speechpropertykey/errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechSynthesizer.SpeechPropertyKey.Mode](speechpropertykey/mode.md): Deprecated. Keys for the speaking mode.
- [NSSpeechSynthesizer.SpeechPropertyKey.PhonemeInfoKey](speechpropertykey/phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechSynthesizer.SpeechPropertyKey.StatusKey](speechpropertykey/statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizer.SpeechPropertyKey.SynthesizerInfoKey](speechpropertykey/synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.
- [NSSpeechSynthesizer.VoiceGender](voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [gender](voiceattributekey/gender.md) key returned by [attributes(forVoice:)](attributes%28forvoice_%29.md).

# NSSpeechPropertyKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.3+ (deprecated in 14.0)

These constants are used with [setObject:forProperty:error:](setobject%28__forproperty_%29.md) and [objectForProperty:error:](object%28forproperty_%29.md) to get or set the characteristics of a synthesizer.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
typedef NSString * NSSpeechPropertyKey;
```

## Topics

### Speech Property Keys

- [NSSpeechStatusProperty](speechpropertykey/status.md): Get speech-status information for the synthesizer.
- [NSSpeechErrorsProperty](speechpropertykey/errors.md): Get speech-error information for the synthesizer.
- [NSSpeechInputModeProperty](speechpropertykey/inputmode.md): Get or set the synthesizer’s current text-processing mode.
- [NSSpeechCharacterModeProperty](speechpropertykey/charactermode.md): Get or set the synthesizer’s current text-processing mode.
- [NSSpeechNumberModeProperty](speechpropertykey/numbermode.md): Get or set the synthesizer’s current number-processing mode.
- [NSSpeechRateProperty](speechpropertykey/rate.md): Get or set a synthesizer’s speech rate.
- [NSSpeechPitchBaseProperty](speechpropertykey/pitchbase.md): Get or set a synthesizer’s baseline speech pitch.
- [NSSpeechPitchModProperty](speechpropertykey/pitchmod.md): Get or set a synthesizer’s pitch modulation.
- [NSSpeechVolumeProperty](speechpropertykey/volume.md): Get or set the speech volume for a synthesizer.
- [NSSpeechSynthesizerInfoProperty](speechpropertykey/synthesizerinfo.md): Get information about the speech synthesizer being used on the specified synthesizer.
- [NSSpeechRecentSyncProperty](speechpropertykey/recentsync.md): Get the message code for the most recently encountered synchronization command.
- [NSSpeechPhonemeSymbolsProperty](speechpropertykey/phonemesymbols.md): Get a list of phoneme symbols and example words defined for the synthesizer.
- [NSSpeechCurrentVoiceProperty](speechpropertykey/currentvoice.md): Set the current voice on the synthesizer to the specified voice.
- [NSSpeechCommandDelimiterProperty](speechpropertykey/commanddelimiter.md): Set the embedded speech command delimiter characters to be used for the synthesizer.
- [NSSpeechResetProperty](speechpropertykey/reset.md): Set a synthesizer back to its default state.
- [NSSpeechOutputToFileURLProperty](speechpropertykey/outputtofileurl.md): Set the speech output destination to a file or to the computer’s speakers.

### Type Aliases

- [NSSpeechCommandDelimiterKey](speechpropertykey/commanddelimiterkey.md): Deprecated. Keys for the command delimiters.
- [NSSpeechErrorKey](speechpropertykey/errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechMode](speechpropertykey/mode.md): Deprecated. Keys for the speaking mode.
- [NSSpeechPhonemeInfoKey](speechpropertykey/phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechStatusKey](speechpropertykey/statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizerInfoKey](speechpropertykey/synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.

## See Also

### Configuring Speech Attributes

- [addSpeechDictionary:](addspeechdictionary%28__%29.md): Deprecated. Registers the given speech dictionary with the receiver.
- [NSSpeechDictionaryKey](dictionarykey.md): Deprecated. These constants identify key-value pairs used to add vocabulary to the dictionary using [addSpeechDictionary:](addspeechdictionary%28__%29.md).
- [objectForProperty:error:](object%28forproperty_%29.md): Deprecated. Provides the value of a receiver’s property.
- [setObject:forProperty:error:](setobject%28__forproperty_%29.md): Deprecated. Specifies the value of a receiver’s property.
- [NSSpeechCommandDelimiterKey](speechpropertykey/commanddelimiterkey.md): Deprecated. Keys for the command delimiters.
- [NSSpeechErrorKey](speechpropertykey/errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechMode](speechpropertykey/mode.md): Deprecated. Keys for the speaking mode.
- [NSSpeechPhonemeInfoKey](speechpropertykey/phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechStatusKey](speechpropertykey/statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizerInfoKey](speechpropertykey/synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.
- [NSVoiceGenderName](voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [NSVoiceGender](voiceattributekey/gender.md) key returned by [attributesForVoice:](attributes%28forvoice_%29.md).
