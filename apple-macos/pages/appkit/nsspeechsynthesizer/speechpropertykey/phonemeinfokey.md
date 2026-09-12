> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/phonemeinfokey](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/phonemeinfokey)

# NSSpeechSynthesizer.SpeechPropertyKey.PhonemeInfoKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Keys for the speech phoneme information.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
struct PhonemeInfoKey
```

<a id="Discussion"></a>

## Discussion

Use these keys in the [phonemeSymbols](phonemesymbols.md) dictionary.

## Topics

### Phoneme Info Keys

- [example](phonemeinfokey/example.md): An example word that illustrates the use of the phoneme.
- [hiliteEnd](phonemeinfokey/hiliteend.md): The character offset into the example word that identifies the location of the end of the phoneme.
- [hiliteStart](phonemeinfokey/hilitestart.md): The character offset into the example word that identifies the location of the beginning of the phoneme.
- [opcode](phonemeinfokey/opcode.md): NSNumber
- [symbol](phonemeinfokey/symbol.md): The symbol used to represent the phoneme.

### Initializers

- [init(rawValue:)](phonemeinfokey/init%28rawvalue_%29.md): Deprecated.

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
- [NSSpeechSynthesizer.SpeechPropertyKey.StatusKey](statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizer.SpeechPropertyKey.SynthesizerInfoKey](synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.
- [NSSpeechSynthesizer.VoiceGender](../voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [gender](../voiceattributekey/gender.md) key returned by [attributes(forVoice:)](../attributes%28forvoice_%29.md).

# NSSpeechPhonemeInfoKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Keys for the speech phoneme information.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
typedef NSString * NSSpeechPhonemeInfoKey;
```

<a id="Discussion"></a>

## Discussion

Use these keys in the [NSSpeechPhonemeSymbolsProperty](phonemesymbols.md) dictionary.

## Topics

### Phoneme Info Keys

- [NSSpeechPhonemeInfoExample](phonemeinfokey/example.md): An example word that illustrates the use of the phoneme.
- [NSSpeechPhonemeInfoHiliteEnd](phonemeinfokey/hiliteend.md): The character offset into the example word that identifies the location of the end of the phoneme.
- [NSSpeechPhonemeInfoHiliteStart](phonemeinfokey/hilitestart.md): The character offset into the example word that identifies the location of the beginning of the phoneme.
- [NSSpeechPhonemeInfoOpcode](phonemeinfokey/opcode.md): NSNumber
- [NSSpeechPhonemeInfoSymbol](phonemeinfokey/symbol.md): The symbol used to represent the phoneme.

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
- [NSSpeechStatusKey](statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizerInfoKey](synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.
- [NSVoiceGenderName](../voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [NSVoiceGender](../voiceattributekey/gender.md) key returned by [attributesForVoice:](../attributes%28forvoice_%29.md).
