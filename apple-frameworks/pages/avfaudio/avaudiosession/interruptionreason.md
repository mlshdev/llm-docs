> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/interruptionreason](https://developer.apple.com/documentation/avfaudio/avaudiosession/interruptionreason)

# AVAudioSession.InterruptionReason (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Constants that define the reasons for an audio session interruption.

## Declaration

```swift
enum InterruptionReason
```

## Topics

### Interruption Reasons

- [AVAudioSession.InterruptionReason.default](interruptionreason/default.md): The system interrupts this audio session when it activates another.
- [AVAudioSession.InterruptionReason.builtInMicMuted](interruptionreason/builtinmicmuted.md): The system interrupts the audio session when the device mutes the built-in microphone.
- [AVAudioSession.InterruptionReason.routeDisconnected](interruptionreason/routedisconnected.md): The system interrupts the audio session due to a disconnection of an audio route.
- [AVAudioSession.InterruptionReason.sceneWasBackgrounded](interruptionreason/scenewasbackgrounded.md): The system backgrounds the scene and interrupts the audio session.
- [AVAudioSession.InterruptionReason.appWasSuspended](interruptionreason/appwassuspended.md): Deprecated. The system suspends the app and interrupts the audio session.

### Initializers

- [init(rawValue:)](interruptionreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### User Info Values

- [AVAudioSession.InterruptionType](interruptiontype.md): Deprecated. Constants that describe the type of an audio interruption.
- [AVAudioSession.InterruptionOptions](interruptionoptions.md): Deprecated. Constants that indicate the state of an audio session after an interruption.

# AVAudioSessionInterruptionReason (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define the reasons for an audio session interruption.

## Declaration

```objectivec
enum AVAudioSessionInterruptionReason : NSUInteger;
```

## Topics

### Interruption Reasons

- [AVAudioSessionInterruptionReasonDefault](interruptionreason/default.md): The system interrupts this audio session when it activates another.
- [AVAudioSessionInterruptionReasonBuiltInMicMuted](interruptionreason/builtinmicmuted.md): The system interrupts the audio session when the device mutes the built-in microphone.
- [AVAudioSessionInterruptionReasonRouteDisconnected](interruptionreason/routedisconnected.md): The system interrupts the audio session due to a disconnection of an audio route.
- [AVAudioSessionInterruptionReasonSceneWasBackgrounded](interruptionreason/scenewasbackgrounded.md): The system backgrounds the scene and interrupts the audio session.
- [AVAudioSessionInterruptionReasonDeviceUnauthenticated](../avaudiosessioninterruptionreason/avaudiosessioninterruptionreasondeviceunauthenticated.md)
- [AVAudioSessionInterruptionReasonAppWasSuspended](interruptionreason/appwassuspended.md): Deprecated. The system suspends the app and interrupts the audio session.

## See Also

### User Info Values

- [AVAudioSessionInterruptionType](interruptiontype.md): Deprecated. Constants that describe the type of an audio interruption.
- [AVAudioSessionInterruptionOptions](interruptionoptions.md): Deprecated. Constants that indicate the state of an audio session after an interruption.
