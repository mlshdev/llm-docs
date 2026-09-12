> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/runtimeerrornotification](https://developer.apple.com/documentation/avfoundation/avcapturesession/runtimeerrornotification)

# runtimeErrorNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

A notification the system posts when an error occurs during a capture session.

## Declaration

```swift
class let runtimeErrorNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Retrieve the underlying error from the notification’s user information dictionary using the key [AVCaptureSessionErrorKey](../avcapturesessionerrorkey.md).

## Topics

### User info keys

- [AVCaptureSessionErrorKey](../avcapturesessionerrorkey.md): Key to retrieve the error object from a [runtimeErrorNotification](runtimeerrornotification.md) user info dictionary.

## See Also

### Observing session state

- [isRunning](isrunning.md): A Boolean value that indicates whether the capture session is in a running state.
- [isInterrupted](isinterrupted.md): A Boolean value that indicates whether the capture session is in an interrupted state.
- [didStartRunningNotification](didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [didStopRunningNotification](didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [wasInterruptedNotification](wasinterruptednotification.md): A notification the system posts when it interrupts a capture session.
- [interruptionEndedNotification](interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.

# AVCaptureSessionRuntimeErrorNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

A notification the system posts when an error occurs during a capture session.

## Declaration

```objectivec
extern NSNotificationName const AVCaptureSessionRuntimeErrorNotification;
```

<a id="Discussion"></a>

## Discussion

Retrieve the underlying error from the notification’s user information dictionary using the key [AVCaptureSessionErrorKey](../avcapturesessionerrorkey.md).

## Topics

### User info keys

- [AVCaptureSessionErrorKey](../avcapturesessionerrorkey.md): Key to retrieve the error object from a [AVCaptureSessionRuntimeErrorNotification](runtimeerrornotification.md) user info dictionary.

## See Also

### Observing session state

- [running](isrunning.md): A Boolean value that indicates whether the capture session is in a running state.
- [interrupted](isinterrupted.md): A Boolean value that indicates whether the capture session is in an interrupted state.
- [AVCaptureSessionDidStartRunningNotification](didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [AVCaptureSessionDidStopRunningNotification](didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [AVCaptureSessionWasInterruptedNotification](wasinterruptednotification.md): A notification the system posts when it interrupts a capture session.
- [AVCaptureSessionInterruptionEndedNotification](interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.
