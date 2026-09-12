> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/object(forproperty:)](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/object(forproperty:))

# object(forProperty:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 14.0)

Provides the value of a receiver’s property.

## Declaration

```swift
func object(forProperty property: NSSpeechSynthesizer.SpeechPropertyKey) throws -> Any
```

## Parameters

- `property`: Property to get.

<a id="return-value"></a>

## Return Value

The value of `speechProperty`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Configuring Speech Attributes

- [addSpeechDictionary(\_:)](addspeechdictionary%28__%29.md): Deprecated. Registers the given speech dictionary with the receiver.
- [NSSpeechSynthesizer.DictionaryKey](dictionarykey.md): Deprecated. These constants identify key-value pairs used to add vocabulary to the dictionary using [addSpeechDictionary(\_:)](addspeechdictionary%28__%29.md).
- [setObject(\_:forProperty:)](setobject%28__forproperty_%29.md): Deprecated. Specifies the value of a receiver’s property.
- [NSSpeechSynthesizer.SpeechPropertyKey](speechpropertykey.md): Deprecated. These constants are used with [setObject(\_:forProperty:)](setobject%28__forproperty_%29.md) and [object(forProperty:)](object%28forproperty_%29.md) to get or set the characteristics of a synthesizer.
- [NSSpeechSynthesizer.SpeechPropertyKey.CommandDelimiterKey](speechpropertykey/commanddelimiterkey.md): Deprecated. Keys for the command delimiters.
- [NSSpeechSynthesizer.SpeechPropertyKey.ErrorKey](speechpropertykey/errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechSynthesizer.SpeechPropertyKey.Mode](speechpropertykey/mode.md): Deprecated. Keys for the speaking mode.
- [NSSpeechSynthesizer.SpeechPropertyKey.PhonemeInfoKey](speechpropertykey/phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechSynthesizer.SpeechPropertyKey.StatusKey](speechpropertykey/statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizer.SpeechPropertyKey.SynthesizerInfoKey](speechpropertykey/synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.
- [NSSpeechSynthesizer.VoiceGender](voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [gender](voiceattributekey/gender.md) key returned by [attributes(forVoice:)](attributes%28forvoice_%29.md).

# objectForProperty:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 14.0)

Provides the value of a receiver’s property.

## Declaration

```objectivec
- (id) objectForProperty:(NSSpeechPropertyKey) property error:(NSError **) outError;
```

## Parameters

- `property`: Property to get.
- `outError`: On output, error that occurred while obtaining the value of `speechProperty`.

<a id="return-value"></a>

## Return Value

The value of `speechProperty`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Configuring Speech Attributes

- [addSpeechDictionary:](addspeechdictionary%28__%29.md): Deprecated. Registers the given speech dictionary with the receiver.
- [NSSpeechDictionaryKey](dictionarykey.md): Deprecated. These constants identify key-value pairs used to add vocabulary to the dictionary using [addSpeechDictionary:](addspeechdictionary%28__%29.md).
- [setObject:forProperty:error:](setobject%28__forproperty_%29.md): Deprecated. Specifies the value of a receiver’s property.
- [NSSpeechPropertyKey](speechpropertykey.md): Deprecated. These constants are used with [setObject:forProperty:error:](setobject%28__forproperty_%29.md) and [objectForProperty:error:](object%28forproperty_%29.md) to get or set the characteristics of a synthesizer.
- [NSSpeechCommandDelimiterKey](speechpropertykey/commanddelimiterkey.md): Deprecated. Keys for the command delimiters.
- [NSSpeechErrorKey](speechpropertykey/errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechMode](speechpropertykey/mode.md): Deprecated. Keys for the speaking mode.
- [NSSpeechPhonemeInfoKey](speechpropertykey/phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechStatusKey](speechpropertykey/statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizerInfoKey](speechpropertykey/synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.
- [NSVoiceGenderName](voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [NSVoiceGender](voiceattributekey/gender.md) key returned by [attributesForVoice:](attributes%28forvoice_%29.md).
