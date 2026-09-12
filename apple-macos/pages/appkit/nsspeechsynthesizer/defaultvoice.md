> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/defaultvoice](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/defaultvoice)

# defaultVoice (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Provides the identifier of the default voice.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
class var defaultVoice: NSSpeechSynthesizer.VoiceName { get }
```

<a id="return-value"></a>

## Return Value

Identifier of the default voice.

## See Also

### Getting Speech Synthesizer Information

- [availableVoices](availablevoices.md): Deprecated. Provides the identifiers of the voices available on the system.
- [attributes(forVoice:)](attributes%28forvoice_%29.md): Deprecated. Provides the attribute dictionary of a voice.
- [NSSpeechSynthesizer.VoiceName](voicename.md): Deprecated.
- [NSSpeechSynthesizer.VoiceAttributeKey](voiceattributekey.md): Deprecated. The following constants are keys for the dictionary returned by [attributes(forVoice:)](attributes%28forvoice_%29.md).

# defaultVoice (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Provides the identifier of the default voice.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
@property (class, copy, readonly) NSSpeechSynthesizerVoiceName defaultVoice;
```

<a id="return-value"></a>

## Return Value

Identifier of the default voice.

## See Also

### Getting Speech Synthesizer Information

- [availableVoices](availablevoices.md): Deprecated. Provides the identifiers of the voices available on the system.
- [attributesForVoice:](attributes%28forvoice_%29.md): Deprecated. Provides the attribute dictionary of a voice.
- [NSSpeechSynthesizerVoiceName](voicename.md): Deprecated.
- [NSVoiceAttributeKey](voiceattributekey.md): Deprecated. The following constants are keys for the dictionary returned by [attributesForVoice:](attributes%28forvoice_%29.md).
