> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/mode](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/mode)

# NSSpeechSynthesizer.SpeechPropertyKey.Mode (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Keys for the speaking mode.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
struct Mode
```

<a id="Discussion"></a>

## Discussion

Use these keys in the [inputMode](inputmode.md), [characterMode](charactermode.md), and [numberMode](numbermode.md) dictionaries.

## Topics

### Type Properties

- [literal](mode/literal.md): Indicates that each digit or character is spoken literally (so that 12 is spoken as “one, two”, or the word “cat” is spoken as “C A T”).
- [normal](mode/normal.md): Indicates that the synthesizer assembles digits into numbers (so that 12 is spoken as “twelve”) and text into words.
- [phoneme](mode/phoneme.md): Indicates that the synthesizer is in phoneme-processing mode. When in phoneme-processing mode, a text buffer is interpreted to be a series of characters representing various phonemes and prosodic controls.
- [text](mode/text.md): Indicates that the synthesizer is in text-processing mode.

### Initializers

- [init(rawValue:)](mode/init%28rawvalue_%29.md): Deprecated.

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
- [NSSpeechSynthesizer.SpeechPropertyKey.PhonemeInfoKey](phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechSynthesizer.SpeechPropertyKey.StatusKey](statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizer.SpeechPropertyKey.SynthesizerInfoKey](synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.
- [NSSpeechSynthesizer.VoiceGender](../voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [gender](../voiceattributekey/gender.md) key returned by [attributes(forVoice:)](../attributes%28forvoice_%29.md).

# NSSpeechMode (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Keys for the speaking mode.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
typedef NSString * NSSpeechMode;
```

<a id="Discussion"></a>

## Discussion

Use these keys in the [NSSpeechInputModeProperty](inputmode.md), [NSSpeechCharacterModeProperty](charactermode.md), and [NSSpeechNumberModeProperty](numbermode.md) dictionaries.

## Topics

### Type Properties

- [NSSpeechModeLiteral](mode/literal.md): Indicates that each digit or character is spoken literally (so that 12 is spoken as “one, two”, or the word “cat” is spoken as “C A T”).
- [NSSpeechModeNormal](mode/normal.md): Indicates that the synthesizer assembles digits into numbers (so that 12 is spoken as “twelve”) and text into words.
- [NSSpeechModePhoneme](mode/phoneme.md): Indicates that the synthesizer is in phoneme-processing mode. When in phoneme-processing mode, a text buffer is interpreted to be a series of characters representing various phonemes and prosodic controls.
- [NSSpeechModeText](mode/text.md): Indicates that the synthesizer is in text-processing mode.

## See Also

### Configuring Speech Attributes

- [addSpeechDictionary:](../addspeechdictionary%28__%29.md): Deprecated. Registers the given speech dictionary with the receiver.
- [NSSpeechDictionaryKey](../dictionarykey.md): Deprecated. These constants identify key-value pairs used to add vocabulary to the dictionary using [addSpeechDictionary:](../addspeechdictionary%28__%29.md).
- [objectForProperty:error:](../object%28forproperty_%29.md): Deprecated. Provides the value of a receiver’s property.
- [setObject:forProperty:error:](../setobject%28__forproperty_%29.md): Deprecated. Specifies the value of a receiver’s property.
- [NSSpeechPropertyKey](../speechpropertykey.md): Deprecated. These constants are used with [setObject:forProperty:error:](../setobject%28__forproperty_%29.md) and [objectForProperty:error:](../object%28forproperty_%29.md) to get or set the characteristics of a synthesizer.
- [NSSpeechCommandDelimiterKey](commanddelimiterkey.md): Deprecated. Keys for the command delimiters.
- [NSSpeechErrorKey](errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechPhonemeInfoKey](phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechStatusKey](statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizerInfoKey](synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.
- [NSVoiceGenderName](../voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [NSVoiceGender](../voiceattributekey/gender.md) key returned by [attributesForVoice:](../attributes%28forvoice_%29.md).
