> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/synthesizerinfokey](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/synthesizerinfokey)

# NSSpeechSynthesizer.SpeechPropertyKey.SynthesizerInfoKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Keys for the speech synthesizier information.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
struct SynthesizerInfoKey
```

<a id="Discussion"></a>

## Discussion

Use constants as keys for the [synthesizerInfo](synthesizerinfo.md) dictionary.

## Topics

### Synthesizer Info Keys

- [identifier](synthesizerinfokey/identifier.md): The identifier of the speech synthesizer.
- [version](synthesizerinfokey/version.md): The version of the speech synthesizer.

### Initializers

- [init(rawValue:)](synthesizerinfokey/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Speech Attributes

- [addSpeechDictionary(\_:)](../addspeechdictionary%28__%29.md): Deprecated. Registers the given speech dictionary with the receiver.
- [NSSpeechSynthesizer.DictionaryKey](../dictionarykey.md): Deprecated. These constants identify key-value pairs used to add vocabulary to the dictionary using [addSpeechDictionary(\_:)](../addspeechdictionary%28__%29.md).
- [object(forProperty:)](../object%28forproperty_%29.md): Deprecated. Provides the value of a receiver’s property.
- [setObject(\_:forProperty:)](../setobject%28__forproperty_%29.md): Deprecated. Specifies the value of a receiver’s property.
- [NSSpeechSynthesizer.SpeechPropertyKey](../speechpropertykey.md): Deprecated. These constants are used with [setObject(\_:forProperty:)](../setobject%28__forproperty_%29.md) and [object(forProperty:)](../object%28forproperty_%29.md) to get or set the characteristics of a synthesizer.
- [NSSpeechSynthesizer.SpeechPropertyKey.CommandDelimiterKey](commanddelimiterkey.md): Deprecated. Keys for the command delimiters.
- [NSSpeechSynthesizer.SpeechPropertyKey.ErrorKey](errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechSynthesizer.SpeechPropertyKey.Mode](mode.md): Deprecated. Keys for the speaking mode.
- [NSSpeechSynthesizer.SpeechPropertyKey.PhonemeInfoKey](phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechSynthesizer.SpeechPropertyKey.StatusKey](statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizer.VoiceGender](../voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [gender](../voiceattributekey/gender.md) key returned by [attributes(forVoice:)](../attributes%28forvoice_%29.md).

# NSSpeechSynthesizerInfoKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Keys for the speech synthesizier information.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
typedef NSString * NSSpeechSynthesizerInfoKey;
```

<a id="Discussion"></a>

## Discussion

Use constants as keys for the [NSSpeechSynthesizerInfoProperty](synthesizerinfo.md) dictionary.

## Topics

### Synthesizer Info Keys

- [NSSpeechSynthesizerInfoIdentifier](synthesizerinfokey/identifier.md): The identifier of the speech synthesizer.
- [NSSpeechSynthesizerInfoVersion](synthesizerinfokey/version.md): The version of the speech synthesizer.

## See Also

### Configuring Speech Attributes

- [addSpeechDictionary:](../addspeechdictionary%28__%29.md): Deprecated. Registers the given speech dictionary with the receiver.
- [NSSpeechDictionaryKey](../dictionarykey.md): Deprecated. These constants identify key-value pairs used to add vocabulary to the dictionary using [addSpeechDictionary:](../addspeechdictionary%28__%29.md).
- [objectForProperty:error:](../object%28forproperty_%29.md): Deprecated. Provides the value of a receiver’s property.
- [setObject:forProperty:error:](../setobject%28__forproperty_%29.md): Deprecated. Specifies the value of a receiver’s property.
- [NSSpeechPropertyKey](../speechpropertykey.md): Deprecated. These constants are used with [setObject:forProperty:error:](../setobject%28__forproperty_%29.md) and [objectForProperty:error:](../object%28forproperty_%29.md) to get or set the characteristics of a synthesizer.
- [NSSpeechCommandDelimiterKey](commanddelimiterkey.md): Deprecated. Keys for the command delimiters.
- [NSSpeechErrorKey](errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechMode](mode.md): Deprecated. Keys for the speaking mode.
- [NSSpeechPhonemeInfoKey](phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechStatusKey](statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSVoiceGenderName](../voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [NSVoiceGender](../voiceattributekey/gender.md) key returned by [attributesForVoice:](../attributes%28forvoice_%29.md).
