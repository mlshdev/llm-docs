> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/wasinterruptednotification](https://developer.apple.com/documentation/avfoundation/avcapturesession/wasinterruptednotification)

# wasInterruptedNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 17.0+ · visionOS 1.0+

A notification the system posts when it interrupts a capture session.

## Declaration

```swift
class let wasInterruptedNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Retrieve the underlying error from the notification’s user information dictionary using the key [AVCaptureSessionInterruptionReasonKey](../avcapturesessioninterruptionreasonkey.md).

## Topics

### User-infomation keys

- [AVCaptureSessionInterruptionSystemPressureStateKey](../avcapturesessioninterruptionsystempressurestatekey.md): A key to retrieve a state value that indicates the system pressure level and contributing factors that caused the interruption.
- [AVCaptureSessionInterruptionReasonKey](../avcapturesessioninterruptionreasonkey.md): Key to retrieve information about a capture interruption from a [wasInterruptedNotification](wasinterruptednotification.md) user info dictionary.
- [AVCaptureSession.InterruptionReason](interruptionreason.md): Constants identifying the reason a capture session was interrupted, found in an [wasInterruptedNotification](wasinterruptednotification.md) user info dictionary.

## See Also

### Observing session state

- [isRunning](isrunning.md): A Boolean value that indicates whether the capture session is in a running state.
- [isInterrupted](isinterrupted.md): A Boolean value that indicates whether the capture session is in an interrupted state.
- [didStartRunningNotification](didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [didStopRunningNotification](didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [interruptionEndedNotification](interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.
- [runtimeErrorNotification](runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.

# AVCaptureSessionWasInterruptedNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 17.0+ · visionOS 1.0+

A notification the system posts when it interrupts a capture session.

## Declaration

```objectivec
extern NSNotificationName const AVCaptureSessionWasInterruptedNotification;
```

<a id="Discussion"></a>

## Discussion

Retrieve the underlying error from the notification’s user information dictionary using the key [AVCaptureSessionInterruptionReasonKey](../avcapturesessioninterruptionreasonkey.md).

## Topics

### User-infomation keys

- [AVCaptureSessionInterruptionSystemPressureStateKey](../avcapturesessioninterruptionsystempressurestatekey.md): A key to retrieve a state value that indicates the system pressure level and contributing factors that caused the interruption.
- [AVCaptureSessionInterruptionReasonKey](../avcapturesessioninterruptionreasonkey.md): Key to retrieve information about a capture interruption from a [AVCaptureSessionWasInterruptedNotification](wasinterruptednotification.md) user info dictionary.
- [AVCaptureSessionInterruptionReason](interruptionreason.md): Constants identifying the reason a capture session was interrupted, found in an [AVCaptureSessionWasInterruptedNotification](wasinterruptednotification.md) user info dictionary.

## See Also

### Observing session state

- [running](isrunning.md): A Boolean value that indicates whether the capture session is in a running state.
- [interrupted](isinterrupted.md): A Boolean value that indicates whether the capture session is in an interrupted state.
- [AVCaptureSessionDidStartRunningNotification](didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [AVCaptureSessionDidStopRunningNotification](didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [AVCaptureSessionInterruptionEndedNotification](interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.
- [AVCaptureSessionRuntimeErrorNotification](runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.
