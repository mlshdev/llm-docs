> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/didstoprunningnotification](https://developer.apple.com/documentation/avfoundation/avcapturesession/didstoprunningnotification)

# didStopRunningNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

A notification the system posts when a capture session stops.

## Declaration

```swift
class let didStopRunningNotification: NSNotification.Name
```

## See Also

### Observing session state

- [isRunning](isrunning.md): A Boolean value that indicates whether the capture session is in a running state.
- [isInterrupted](isinterrupted.md): A Boolean value that indicates whether the capture session is in an interrupted state.
- [didStartRunningNotification](didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [wasInterruptedNotification](wasinterruptednotification.md): A notification the system posts when it interrupts a capture session.
- [interruptionEndedNotification](interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.
- [runtimeErrorNotification](runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.

# AVCaptureSessionDidStopRunningNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

A notification the system posts when a capture session stops.

## Declaration

```objectivec
extern NSNotificationName const AVCaptureSessionDidStopRunningNotification;
```

## See Also

### Observing session state

- [running](isrunning.md): A Boolean value that indicates whether the capture session is in a running state.
- [interrupted](isinterrupted.md): A Boolean value that indicates whether the capture session is in an interrupted state.
- [AVCaptureSessionDidStartRunningNotification](didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [AVCaptureSessionWasInterruptedNotification](wasinterruptednotification.md): A notification the system posts when it interrupts a capture session.
- [AVCaptureSessionInterruptionEndedNotification](interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.
- [AVCaptureSessionRuntimeErrorNotification](runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.
