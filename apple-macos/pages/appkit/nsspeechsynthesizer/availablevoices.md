> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/availablevoices](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/availablevoices)

# availableVoices (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Provides the identifiers of the voices available on the system.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
class var availableVoices: [NSSpeechSynthesizer.VoiceName] { get }
```

<a id="return-value"></a>

## Return Value

Array of strings representing the identifiers of each voice available on the system.

## See Also

### Related Documentation

- [setVoice(\_:)](setvoice%28__%29.md): Deprecated. Sets the receiver’s current voice.

### Getting Speech Synthesizer Information

- [attributes(forVoice:)](attributes%28forvoice_%29.md): Deprecated. Provides the attribute dictionary of a voice.
- [defaultVoice](defaultvoice.md): Deprecated. Provides the identifier of the default voice.
- [NSSpeechSynthesizer.VoiceName](voicename.md): Deprecated.
- [NSSpeechSynthesizer.VoiceAttributeKey](voiceattributekey.md): Deprecated. The following constants are keys for the dictionary returned by [attributes(forVoice:)](attributes%28forvoice_%29.md).

# availableVoices (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Provides the identifiers of the voices available on the system.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * availableVoices;
```

<a id="return-value"></a>

## Return Value

Array of strings representing the identifiers of each voice available on the system.

## See Also

### Related Documentation

- [setVoice:](setvoice%28__%29.md): Deprecated. Sets the receiver’s current voice.

### Getting Speech Synthesizer Information

- [attributesForVoice:](attributes%28forvoice_%29.md): Deprecated. Provides the attribute dictionary of a voice.
- [defaultVoice](defaultvoice.md): Deprecated. Provides the identifier of the default voice.
- [NSSpeechSynthesizerVoiceName](voicename.md): Deprecated.
- [NSVoiceAttributeKey](voiceattributekey.md): Deprecated. The following constants are keys for the dictionary returned by [attributesForVoice:](attributes%28forvoice_%29.md).
