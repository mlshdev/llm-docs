> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auvoiceiospeechactivityevent](https://developer.apple.com/documentation/audiotoolbox/auvoiceiospeechactivityevent)

# AUVoiceIOSpeechActivityEvent (Swift)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Constants that indicate the state of muted speech.

## Declaration

```swift
enum AUVoiceIOSpeechActivityEvent
```

## Topics

### Determining when muted speech starts and stops

- [AUVoiceIOSpeechActivityEvent.hasStarted](auvoiceiospeechactivityevent/hasstarted.md): A state that indicates speech started.
- [AUVoiceIOSpeechActivityEvent.hasEnded](auvoiceiospeechactivityevent/hasended.md): A state that indicates speech ended.

### Initializers

- [init(rawValue:)](auvoiceiospeechactivityevent/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing muted speech

- [kAUVoiceIOProperty_MutedSpeechActivityEventListener](kauvoiceioproperty_mutedspeechactivityeventlistener.md): A property to register a listener that the system calls when it detects speech while the user has the microphone muted.
- [AUVoiceIOMutedSpeechActivityEventListener](auvoiceiomutedspeechactivityeventlistener.md): A block that the system calls to indicate speech activity while the user has the microphone muted.

# AUVoiceIOSpeechActivityEvent (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Constants that indicate the state of muted speech.

## Declaration

```objectivec
enum AUVoiceIOSpeechActivityEvent : UInt32;
```

## Topics

### Determining when muted speech starts and stops

- [kAUVoiceIOSpeechActivityHasStarted](auvoiceiospeechactivityevent/hasstarted.md): A state that indicates speech started.
- [kAUVoiceIOSpeechActivityHasEnded](auvoiceiospeechactivityevent/hasended.md): A state that indicates speech ended.

## See Also

### Observing muted speech

- [kAUVoiceIOProperty_MutedSpeechActivityEventListener](kauvoiceioproperty_mutedspeechactivityeventlistener.md): A property to register a listener that the system calls when it detects speech while the user has the microphone muted.
- [AUVoiceIOMutedSpeechActivityEventListener](auvoiceiomutedspeechactivityeventlistener.md): A block that the system calls to indicate speech activity while the user has the microphone muted.
