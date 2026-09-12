> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/interruptionreason/builtinmicmuted](https://developer.apple.com/documentation/avfaudio/avaudiosession/interruptionreason/builtinmicmuted)

# AVAudioSession.InterruptionReason.builtInMicMuted (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The system interrupts the audio session when the device mutes the built-in microphone.

## Declaration

```swift
case builtInMicMuted
```

<a id="Discussion"></a>

## Discussion

This interruption reason typically occurs when a user closes an iPad’s Smart Folio cover.

## See Also

### Interruption Reasons

- [AVAudioSession.InterruptionReason.default](default.md): The system interrupts this audio session when it activates another.
- [AVAudioSession.InterruptionReason.routeDisconnected](routedisconnected.md): The system interrupts the audio session due to a disconnection of an audio route.
- [AVAudioSession.InterruptionReason.sceneWasBackgrounded](scenewasbackgrounded.md): The system backgrounds the scene and interrupts the audio session.
- [AVAudioSession.InterruptionReason.appWasSuspended](appwassuspended.md): Deprecated. The system suspends the app and interrupts the audio session.

# AVAudioSessionInterruptionReasonBuiltInMicMuted (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The system interrupts the audio session when the device mutes the built-in microphone.

## Declaration

```objectivec
AVAudioSessionInterruptionReasonBuiltInMicMuted
```

<a id="Discussion"></a>

## Discussion

This interruption reason typically occurs when a user closes an iPad’s Smart Folio cover.

## See Also

### Interruption Reasons

- [AVAudioSessionInterruptionReasonDefault](default.md): The system interrupts this audio session when it activates another.
- [AVAudioSessionInterruptionReasonRouteDisconnected](routedisconnected.md): The system interrupts the audio session due to a disconnection of an audio route.
- [AVAudioSessionInterruptionReasonSceneWasBackgrounded](scenewasbackgrounded.md): The system backgrounds the scene and interrupts the audio session.
- [AVAudioSessionInterruptionReasonDeviceUnauthenticated](../../avaudiosessioninterruptionreason/avaudiosessioninterruptionreasondeviceunauthenticated.md)
- [AVAudioSessionInterruptionReasonAppWasSuspended](appwassuspended.md): Deprecated. The system suspends the app and interrupts the audio session.
