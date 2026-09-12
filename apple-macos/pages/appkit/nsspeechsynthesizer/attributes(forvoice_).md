> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/attributes(forvoice:)](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/attributes(forvoice:))

# attributes(forVoice:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Provides the attribute dictionary of a voice.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
class func attributes(forVoice voice: NSSpeechSynthesizer.VoiceName) -> [NSSpeechSynthesizer.VoiceAttributeKey : Any]
```

## Parameters

- `voice`: Identifier of the voice whose attributes you want to obtain.

<a id="return-value"></a>

## Return Value

Attribute dictionary of the voice identified by `voiceIdentifier`. The attributes keys and value types are listed in `Voice Attributes Keys`

## See Also

### Getting Speech Synthesizer Information

- [availableVoices](availablevoices.md): Deprecated. Provides the identifiers of the voices available on the system.
- [defaultVoice](defaultvoice.md): Deprecated. Provides the identifier of the default voice.
- [NSSpeechSynthesizer.VoiceName](voicename.md): Deprecated.
- [NSSpeechSynthesizer.VoiceAttributeKey](voiceattributekey.md): Deprecated. The following constants are keys for the dictionary returned by [attributes(forVoice:)](attributes%28forvoice_%29.md).

# attributesForVoice: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Provides the attribute dictionary of a voice.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
+ (NSDictionary<NSString *,id> *) attributesForVoice:(NSSpeechSynthesizerVoiceName) voice;
```

## Parameters

- `voice`: Identifier of the voice whose attributes you want to obtain.

<a id="return-value"></a>

## Return Value

Attribute dictionary of the voice identified by `voiceIdentifier`. The attributes keys and value types are listed in `Voice Attributes Keys`

## See Also

### Getting Speech Synthesizer Information

- [availableVoices](availablevoices.md): Deprecated. Provides the identifiers of the voices available on the system.
- [defaultVoice](defaultvoice.md): Deprecated. Provides the identifier of the default voice.
- [NSSpeechSynthesizerVoiceName](voicename.md): Deprecated.
- [NSVoiceAttributeKey](voiceattributekey.md): Deprecated. The following constants are keys for the dictionary returned by [attributesForVoice:](attributes%28forvoice_%29.md).
