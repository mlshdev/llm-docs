> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/dictionarykey](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/dictionarykey)

# NSSpeechSynthesizer.DictionaryKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.3+ (deprecated in 14.0)

These constants identify key-value pairs used to add vocabulary to the dictionary using [addSpeechDictionary(\_:)](addspeechdictionary%28__%29.md).

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
struct DictionaryKey
```

## Topics

### Type Properties

- [abbreviations](dictionarykey/abbreviations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.
- [entryPhonemes](dictionarykey/entryphonemes.md): The phonemic representation of an entry. An `NSString`.
- [entrySpelling](dictionarykey/entryspelling.md): The spelling of an entry. An `NSString`.
- [localeIdentifier](dictionarykey/localeidentifier.md): The canonical locale identifier string describing the dictionary’s locale.
- [modificationDate](dictionarykey/modificationdate.md): A string representation of the dictionary’s last modification date in the international format (YYYY-MM-DD HH:MM:SS ±HHMM). If the same word appears across multiple dictionaries, the one from the dictionary with the most recent date will be used.
- [pronunciations](dictionarykey/pronunciations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.

### Initializers

- [init(rawValue:)](dictionarykey/init%28rawvalue_%29.md): Deprecated.

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
- [object(forProperty:)](object%28forproperty_%29.md): Deprecated. Provides the value of a receiver’s property.
- [setObject(\_:forProperty:)](setobject%28__forproperty_%29.md): Deprecated. Specifies the value of a receiver’s property.
- [NSSpeechSynthesizer.SpeechPropertyKey](speechpropertykey.md): Deprecated. These constants are used with [setObject(\_:forProperty:)](setobject%28__forproperty_%29.md) and [object(forProperty:)](object%28forproperty_%29.md) to get or set the characteristics of a synthesizer.
- [NSSpeechSynthesizer.SpeechPropertyKey.CommandDelimiterKey](speechpropertykey/commanddelimiterkey.md): Deprecated. Keys for the command delimiters.
- [NSSpeechSynthesizer.SpeechPropertyKey.ErrorKey](speechpropertykey/errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechSynthesizer.SpeechPropertyKey.Mode](speechpropertykey/mode.md): Deprecated. Keys for the speaking mode.
- [NSSpeechSynthesizer.SpeechPropertyKey.PhonemeInfoKey](speechpropertykey/phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechSynthesizer.SpeechPropertyKey.StatusKey](speechpropertykey/statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizer.SpeechPropertyKey.SynthesizerInfoKey](speechpropertykey/synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.
- [NSSpeechSynthesizer.VoiceGender](voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [gender](voiceattributekey/gender.md) key returned by [attributes(forVoice:)](attributes%28forvoice_%29.md).

# NSSpeechDictionaryKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.3+ (deprecated in 14.0)

These constants identify key-value pairs used to add vocabulary to the dictionary using [addSpeechDictionary:](addspeechdictionary%28__%29.md).

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
typedef NSString * NSSpeechDictionaryKey;
```

## Topics

### Type Properties

- [NSSpeechDictionaryAbbreviations](dictionarykey/abbreviations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.
- [NSSpeechDictionaryEntryPhonemes](dictionarykey/entryphonemes.md): The phonemic representation of an entry. An `NSString`.
- [NSSpeechDictionaryEntrySpelling](dictionarykey/entryspelling.md): The spelling of an entry. An `NSString`.
- [NSSpeechDictionaryLocaleIdentifier](dictionarykey/localeidentifier.md): The canonical locale identifier string describing the dictionary’s locale.
- [NSSpeechDictionaryModificationDate](dictionarykey/modificationdate.md): A string representation of the dictionary’s last modification date in the international format (YYYY-MM-DD HH:MM:SS ±HHMM). If the same word appears across multiple dictionaries, the one from the dictionary with the most recent date will be used.
- [NSSpeechDictionaryPronunciations](dictionarykey/pronunciations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.

## See Also

### Configuring Speech Attributes

- [addSpeechDictionary:](addspeechdictionary%28__%29.md): Deprecated. Registers the given speech dictionary with the receiver.
- [objectForProperty:error:](object%28forproperty_%29.md): Deprecated. Provides the value of a receiver’s property.
- [setObject:forProperty:error:](setobject%28__forproperty_%29.md): Deprecated. Specifies the value of a receiver’s property.
- [NSSpeechPropertyKey](speechpropertykey.md): Deprecated. These constants are used with [setObject:forProperty:error:](setobject%28__forproperty_%29.md) and [objectForProperty:error:](object%28forproperty_%29.md) to get or set the characteristics of a synthesizer.
- [NSSpeechCommandDelimiterKey](speechpropertykey/commanddelimiterkey.md): Deprecated. Keys for the command delimiters.
- [NSSpeechErrorKey](speechpropertykey/errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechMode](speechpropertykey/mode.md): Deprecated. Keys for the speaking mode.
- [NSSpeechPhonemeInfoKey](speechpropertykey/phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechStatusKey](speechpropertykey/statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizerInfoKey](speechpropertykey/synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.
- [NSVoiceGenderName](voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [NSVoiceGender](voiceattributekey/gender.md) key returned by [attributesForVoice:](attributes%28forvoice_%29.md).
