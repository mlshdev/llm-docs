> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/commanddelimiterkey](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/commanddelimiterkey)

# NSSpeechSynthesizer.SpeechPropertyKey.CommandDelimiterKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Keys for the command delimiters.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
struct CommandDelimiterKey
```

<a id="Discussion"></a>

## Discussion

Use these keys in the [commandDelimiter](commanddelimiter.md) dictionary.

## Topics

### Delimiter Keys

- [prefix](commanddelimiterkey/prefix.md): The command delimiter string that prefixes a command, by default, this is `[[`.
- [suffix](commanddelimiterkey/suffix.md): The command delimiter string that suffixes a command,by default, this is `]]`.

### Initializers

- [init(rawValue:)](commanddelimiterkey/init%28rawvalue_%29.md): Deprecated.

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
- [NSSpeechSynthesizer.SpeechPropertyKey.ErrorKey](errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechSynthesizer.SpeechPropertyKey.Mode](mode.md): Deprecated. Keys for the speaking mode.
- [NSSpeechSynthesizer.SpeechPropertyKey.PhonemeInfoKey](phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechSynthesizer.SpeechPropertyKey.StatusKey](statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizer.SpeechPropertyKey.SynthesizerInfoKey](synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.
- [NSSpeechSynthesizer.VoiceGender](../voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [gender](../voiceattributekey/gender.md) key returned by [attributes(forVoice:)](../attributes%28forvoice_%29.md).

# NSSpeechCommandDelimiterKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Keys for the command delimiters.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
typedef NSString * NSSpeechCommandDelimiterKey;
```

<a id="Discussion"></a>

## Discussion

Use these keys in the [NSSpeechCommandDelimiterProperty](commanddelimiter.md) dictionary.

## Topics

### Delimiter Keys

- [NSSpeechCommandPrefix](commanddelimiterkey/prefix.md): The command delimiter string that prefixes a command, by default, this is `[[`.
- [NSSpeechCommandSuffix](commanddelimiterkey/suffix.md): The command delimiter string that suffixes a command,by default, this is `]]`.

## See Also

### Configuring Speech Attributes

- [addSpeechDictionary:](../addspeechdictionary%28__%29.md): Deprecated. Registers the given speech dictionary with the receiver.
- [NSSpeechDictionaryKey](../dictionarykey.md): Deprecated. These constants identify key-value pairs used to add vocabulary to the dictionary using [addSpeechDictionary:](../addspeechdictionary%28__%29.md).
- [objectForProperty:error:](../object%28forproperty_%29.md): Deprecated. Provides the value of a receiver’s property.
- [setObject:forProperty:error:](../setobject%28__forproperty_%29.md): Deprecated. Specifies the value of a receiver’s property.
- [NSSpeechPropertyKey](../speechpropertykey.md): Deprecated. These constants are used with [setObject:forProperty:error:](../setobject%28__forproperty_%29.md) and [objectForProperty:error:](../object%28forproperty_%29.md) to get or set the characteristics of a synthesizer.
- [NSSpeechErrorKey](errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechMode](mode.md): Deprecated. Keys for the speaking mode.
- [NSSpeechPhonemeInfoKey](phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechStatusKey](statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizerInfoKey](synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.
- [NSVoiceGenderName](../voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [NSVoiceGender](../voiceattributekey/gender.md) key returned by [attributesForVoice:](../attributes%28forvoice_%29.md).
