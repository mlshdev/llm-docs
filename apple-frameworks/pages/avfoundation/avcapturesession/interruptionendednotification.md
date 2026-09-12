> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/interruptionendednotification](https://developer.apple.com/documentation/avfoundation/avcapturesession/interruptionendednotification)

# interruptionEndedNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 17.0+ · visionOS 1.0+

A notification the system posts when an interruption to a capture session finishes.

## Declaration

```swift
class let interruptionEndedNotification: NSNotification.Name
```

## See Also

### Observing session state

- [isRunning](isrunning.md): A Boolean value that indicates whether the capture session is in a running state.
- [isInterrupted](isinterrupted.md): A Boolean value that indicates whether the capture session is in an interrupted state.
- [didStartRunningNotification](didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [didStopRunningNotification](didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [wasInterruptedNotification](wasinterruptednotification.md): A notification the system posts when it interrupts a capture session.
- [runtimeErrorNotification](runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.

# AVCaptureSessionInterruptionEndedNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 17.0+ · visionOS 1.0+

A notification the system posts when an interruption to a capture session finishes.

## Declaration

```objectivec
extern NSNotificationName const AVCaptureSessionInterruptionEndedNotification;
```

## See Also

### Observing session state

- [running](isrunning.md): A Boolean value that indicates whether the capture session is in a running state.
- [interrupted](isinterrupted.md): A Boolean value that indicates whether the capture session is in an interrupted state.
- [AVCaptureSessionDidStartRunningNotification](didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [AVCaptureSessionDidStopRunningNotification](didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [AVCaptureSessionWasInterruptedNotification](wasinterruptednotification.md): A notification the system posts when it interrupts a capture session.
- [AVCaptureSessionRuntimeErrorNotification](runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.
