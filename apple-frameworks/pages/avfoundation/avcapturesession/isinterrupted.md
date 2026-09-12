> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/isinterrupted](https://developer.apple.com/documentation/avfoundation/avcapturesession/isinterrupted)

# isInterrupted (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the capture session is in an interrupted state.

## Declaration

```swift
var isInterrupted: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Observing session state

- [isRunning](isrunning.md): A Boolean value that indicates whether the capture session is in a running state.
- [didStartRunningNotification](didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [didStopRunningNotification](didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [wasInterruptedNotification](wasinterruptednotification.md): A notification the system posts when it interrupts a capture session.
- [interruptionEndedNotification](interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.
- [runtimeErrorNotification](runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.

# interrupted (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the capture session is in an interrupted state.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isInterrupted) BOOL interrupted;
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Observing session state

- [running](isrunning.md): A Boolean value that indicates whether the capture session is in a running state.
- [AVCaptureSessionDidStartRunningNotification](didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [AVCaptureSessionDidStopRunningNotification](didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [AVCaptureSessionWasInterruptedNotification](wasinterruptednotification.md): A notification the system posts when it interrupts a capture session.
- [AVCaptureSessionInterruptionEndedNotification](interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.
- [AVCaptureSessionRuntimeErrorNotification](runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.
