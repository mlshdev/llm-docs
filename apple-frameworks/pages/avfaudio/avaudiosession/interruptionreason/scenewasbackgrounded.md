> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/interruptionreason/scenewasbackgrounded](https://developer.apple.com/documentation/avfaudio/avaudiosession/interruptionreason/scenewasbackgrounded)

# AVAudioSession.InterruptionReason.sceneWasBackgrounded (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** visionOS

The system backgrounds the scene and interrupts the audio session.

## Declaration

```swift
case sceneWasBackgrounded
```

## See Also

### Interruption Reasons

- [AVAudioSession.InterruptionReason.default](default.md): The system interrupts this audio session when it activates another.
- [AVAudioSession.InterruptionReason.builtInMicMuted](builtinmicmuted.md): The system interrupts the audio session when the device mutes the built-in microphone.
- [AVAudioSession.InterruptionReason.routeDisconnected](routedisconnected.md): The system interrupts the audio session due to a disconnection of an audio route.
- [AVAudioSession.InterruptionReason.appWasSuspended](appwassuspended.md): Deprecated. The system suspends the app and interrupts the audio session.

# AVAudioSessionInterruptionReasonSceneWasBackgrounded (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** visionOS

The system backgrounds the scene and interrupts the audio session.

## Declaration

```objectivec
AVAudioSessionInterruptionReasonSceneWasBackgrounded
```

## See Also

### Interruption Reasons

- [AVAudioSessionInterruptionReasonDefault](default.md): The system interrupts this audio session when it activates another.
- [AVAudioSessionInterruptionReasonBuiltInMicMuted](builtinmicmuted.md): The system interrupts the audio session when the device mutes the built-in microphone.
- [AVAudioSessionInterruptionReasonRouteDisconnected](routedisconnected.md): The system interrupts the audio session due to a disconnection of an audio route.
- [AVAudioSessionInterruptionReasonDeviceUnauthenticated](../../avaudiosessioninterruptionreason/avaudiosessioninterruptionreasondeviceunauthenticated.md)
- [AVAudioSessionInterruptionReasonAppWasSuspended](appwassuspended.md): Deprecated. The system suspends the app and interrupts the audio session.
