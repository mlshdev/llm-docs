> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiovoiceprocessingspeechactivityevent](https://developer.apple.com/documentation/avfaudio/avaudiovoiceprocessingspeechactivityevent)

# AVAudioVoiceProcessingSpeechActivityEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Types of speech activity events.

## Declaration

```swift
enum AVAudioVoiceProcessingSpeechActivityEvent
```

## Topics

### Events

- [AVAudioVoiceProcessingSpeechActivityEvent.started](avaudiovoiceprocessingspeechactivityevent/started.md): Indicates the start of speech activity.
- [AVAudioVoiceProcessingSpeechActivityEvent.ended](avaudiovoiceprocessingspeechactivityevent/ended.md): Indicates the end of speech activity.

### Initializers

- [init(rawValue:)](avaudiovoiceprocessingspeechactivityevent/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Muted Speech Events

- [setMutedSpeechActivityEventListener(\_:)](avaudioinputnode/setmutedspeechactivityeventlistener%28__%29.md)

# AVAudioVoiceProcessingSpeechActivityEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Types of speech activity events.

## Declaration

```objectivec
enum AVAudioVoiceProcessingSpeechActivityEvent : NSInteger;
```

## Topics

### Events

- [AVAudioVoiceProcessingSpeechActivityStarted](avaudiovoiceprocessingspeechactivityevent/started.md): Indicates the start of speech activity.
- [AVAudioVoiceProcessingSpeechActivityEnded](avaudiovoiceprocessingspeechactivityevent/ended.md): Indicates the end of speech activity.

## See Also

### Handling Muted Speech Events

- [setMutedSpeechActivityEventListener:](avaudioinputnode/setmutedspeechactivityeventlistener%28__%29.md)
