> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/isrunning](https://developer.apple.com/documentation/avfoundation/avcapturesession/isrunning)

# isRunning (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the capture session is in a running state.

## Declaration

```swift
var isRunning: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Observing session state

- [isInterrupted](isinterrupted.md): A Boolean value that indicates whether the capture session is in an interrupted state.
- [didStartRunningNotification](didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [didStopRunningNotification](didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [wasInterruptedNotification](wasinterruptednotification.md): A notification the system posts when it interrupts a capture session.
- [interruptionEndedNotification](interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.
- [runtimeErrorNotification](runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.

# running (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the capture session is in a running state.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRunning) BOOL running;
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Observing session state

- [interrupted](isinterrupted.md): A Boolean value that indicates whether the capture session is in an interrupted state.
- [AVCaptureSessionDidStartRunningNotification](didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [AVCaptureSessionDidStopRunningNotification](didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [AVCaptureSessionWasInterruptedNotification](wasinterruptednotification.md): A notification the system posts when it interrupts a capture session.
- [AVCaptureSessionInterruptionEndedNotification](interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.
- [AVCaptureSessionRuntimeErrorNotification](runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.
