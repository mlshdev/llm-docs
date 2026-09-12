> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/interruptionreason/routedisconnected](https://developer.apple.com/documentation/avfaudio/avaudiosession/interruptionreason/routedisconnected)

# AVAudioSession.InterruptionReason.routeDisconnected (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The system interrupts the audio session due to a disconnection of an audio route.

## Declaration

```swift
case routeDisconnected
```

## See Also

### Interruption Reasons

- [AVAudioSession.InterruptionReason.default](default.md): The system interrupts this audio session when it activates another.
- [AVAudioSession.InterruptionReason.builtInMicMuted](builtinmicmuted.md): The system interrupts the audio session when the device mutes the built-in microphone.
- [AVAudioSession.InterruptionReason.sceneWasBackgrounded](scenewasbackgrounded.md): The system backgrounds the scene and interrupts the audio session.
- [AVAudioSession.InterruptionReason.appWasSuspended](appwassuspended.md): Deprecated. The system suspends the app and interrupts the audio session.

# AVAudioSessionInterruptionReasonRouteDisconnected (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The system interrupts the audio session due to a disconnection of an audio route.

## Declaration

```objectivec
AVAudioSessionInterruptionReasonRouteDisconnected
```

## See Also

### Interruption Reasons

- [AVAudioSessionInterruptionReasonDefault](default.md): The system interrupts this audio session when it activates another.
- [AVAudioSessionInterruptionReasonBuiltInMicMuted](builtinmicmuted.md): The system interrupts the audio session when the device mutes the built-in microphone.
- [AVAudioSessionInterruptionReasonSceneWasBackgrounded](scenewasbackgrounded.md): The system backgrounds the scene and interrupts the audio session.
- [AVAudioSessionInterruptionReasonDeviceUnauthenticated](../../avaudiosessioninterruptionreason/avaudiosessioninterruptionreasondeviceunauthenticated.md)
- [AVAudioSessionInterruptionReasonAppWasSuspended](appwassuspended.md): Deprecated. The system suspends the app and interrupts the audio session.
