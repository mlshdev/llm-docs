> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioinputnode/setmutedspeechactivityeventlistener(_:)

# setMutedSpeechActivityEventListener(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
func setMutedSpeechActivityEventListener(_ listenerBlock: (@Sendable (AVAudioVoiceProcessingSpeechActivityEvent) -> Void)?) -> Bool
```

## See Also

### Handling Muted Speech Events

- [AVAudioVoiceProcessingSpeechActivityEvent](../avaudiovoiceprocessingspeechactivityevent.md): Types of speech activity events.

# setMutedSpeechActivityEventListener: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
- (BOOL) setMutedSpeechActivityEventListener:(void (^)(AVAudioVoiceProcessingSpeechActivityEvent event)) listenerBlock;
```

## See Also

### Handling Muted Speech Events

- [AVAudioVoiceProcessingSpeechActivityEvent](../avaudiovoiceprocessingspeechactivityevent.md): Types of speech activity events.
