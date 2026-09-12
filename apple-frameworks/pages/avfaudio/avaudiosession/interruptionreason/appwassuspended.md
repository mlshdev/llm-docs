> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/interruptionreason/appwassuspended](https://developer.apple.com/documentation/avfaudio/avaudiosession/interruptionreason/appwassuspended)

# AVAudioSession.InterruptionReason.appWasSuspended (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 14.5+ (deprecated in 16.0) · iPadOS 14.5+ (deprecated in 16.0) · Mac Catalyst 14.5+ (deprecated in 16.0) · tvOS 14.5+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 7.4+ (deprecated in 9.0)

The system suspends the app and interrupts the audio session.

> wasSuspended reason no longer present

## Declaration

```swift
case appWasSuspended
```

<a id="Discussion"></a>

## Discussion

Starting in iOS 10, the system deactivates the audio session of most apps when it suspends the app process. The next time the app runs, it receives a notification that the system deactivated its audio session. This notification is necessarily delayed in time, because the system can’t send it until the app restarts.

## See Also

### Interruption Reasons

- [AVAudioSession.InterruptionReason.default](default.md): The system interrupts this audio session when it activates another.
- [AVAudioSession.InterruptionReason.builtInMicMuted](builtinmicmuted.md): The system interrupts the audio session when the device mutes the built-in microphone.
- [AVAudioSession.InterruptionReason.routeDisconnected](routedisconnected.md): The system interrupts the audio session due to a disconnection of an audio route.
- [AVAudioSession.InterruptionReason.sceneWasBackgrounded](scenewasbackgrounded.md): The system backgrounds the scene and interrupts the audio session.

# AVAudioSessionInterruptionReasonAppWasSuspended (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 14.5+ (deprecated in 16.0) · iPadOS 14.5+ (deprecated in 16.0) · Mac Catalyst 14.5+ (deprecated in 16.0) · macOS · tvOS 14.5+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 7.4+ (deprecated in 9.0)

The system suspends the app and interrupts the audio session.

> wasSuspended reason no longer present

## Declaration

```objectivec
AVAudioSessionInterruptionReasonAppWasSuspended
```

<a id="Discussion"></a>

## Discussion

Starting in iOS 10, the system deactivates the audio session of most apps when it suspends the app process. The next time the app runs, it receives a notification that the system deactivated its audio session. This notification is necessarily delayed in time, because the system can’t send it until the app restarts.

## See Also

### Interruption Reasons

- [AVAudioSessionInterruptionReasonDefault](default.md): The system interrupts this audio session when it activates another.
- [AVAudioSessionInterruptionReasonBuiltInMicMuted](builtinmicmuted.md): The system interrupts the audio session when the device mutes the built-in microphone.
- [AVAudioSessionInterruptionReasonRouteDisconnected](routedisconnected.md): The system interrupts the audio session due to a disconnection of an audio route.
- [AVAudioSessionInterruptionReasonSceneWasBackgrounded](scenewasbackgrounded.md): The system backgrounds the scene and interrupts the audio session.
- [AVAudioSessionInterruptionReasonDeviceUnauthenticated](../../avaudiosessioninterruptionreason/avaudiosessioninterruptionreasondeviceunauthenticated.md)
