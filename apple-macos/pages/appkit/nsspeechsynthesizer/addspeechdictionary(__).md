> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/addspeechdictionary(_:)](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/addspeechdictionary(_:))

# addSpeechDictionary(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 14.0)

Registers the given speech dictionary with the receiver.

## Declaration

```swift
func addSpeechDictionary(_ speechDictionary: [NSSpeechSynthesizer.DictionaryKey : Any])
```

## Parameters

- `speechDictionary`: Speech dictionary to add to the receiver’s dictionaries. The key-value pairs are listed in `Speech Dictionary Properties Keys`.

<a id="Discussion"></a>

## Discussion

See the discussion of [UseSpeechDictionary(\_:\_:)](../../applicationservices/1463688-usespeechdictionary.md) in [Speech Synthesis Manager](../../applicationservices/speech_synthesis_manager.md) for more information.

## See Also

### Configuring Speech Attributes

- [NSSpeechSynthesizer.DictionaryKey](dictionarykey.md): Deprecated. These constants identify key-value pairs used to add vocabulary to the dictionary using [addSpeechDictionary(\_:)](addspeechdictionary%28__%29.md).
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

# addSpeechDictionary: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 14.0)

Registers the given speech dictionary with the receiver.

## Declaration

```objectivec
- (void) addSpeechDictionary:(NSDictionary<NSString *,id> *) speechDictionary;
```

## Parameters

- `speechDictionary`: Speech dictionary to add to the receiver’s dictionaries. The key-value pairs are listed in `Speech Dictionary Properties Keys`.

<a id="Discussion"></a>

## Discussion

See the discussion of [UseSpeechDictionary](../../applicationservices/1463688-usespeechdictionary.md) in [Speech Synthesis Manager](../../applicationservices/speech_synthesis_manager.md) for more information.

## See Also

### Configuring Speech Attributes

- [NSSpeechDictionaryKey](dictionarykey.md): Deprecated. These constants identify key-value pairs used to add vocabulary to the dictionary using [addSpeechDictionary:](addspeechdictionary%28__%29.md).
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
