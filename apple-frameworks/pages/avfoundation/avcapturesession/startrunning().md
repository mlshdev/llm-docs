> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/startrunning()](https://developer.apple.com/documentation/avfoundation/avcapturesession/startrunning())

# startRunning() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Starts the flow of data through the capture pipeline.

## Declaration

```swift
func startRunning()
```

## Mentioned In

- [Setting up a capture session](../setting-up-a-capture-session.md)

<a id="Discussion"></a>

## Discussion

Call this method to start the flow of data from the capture session’s inputs to its outputs. This method is synchronous and blocks until the session starts running or it fails, which it reports by posting an [runtimeErrorNotification](runtimeerrornotification.md) notification.

## See Also

### Managing the session life cycle

- [stopRunning()](stoprunning%28%29.md): Stops the flow of data through the capture pipeline.

# startRunning (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Starts the flow of data through the capture pipeline.

## Declaration

```objectivec
- (void) startRunning;
```

## Mentioned In

- [Setting up a capture session](../setting-up-a-capture-session.md)

<a id="Discussion"></a>

## Discussion

Call this method to start the flow of data from the capture session’s inputs to its outputs. This method is synchronous and blocks until the session starts running or it fails, which it reports by posting an [AVCaptureSessionRuntimeErrorNotification](runtimeerrornotification.md) notification.

## See Also

### Managing the session life cycle

- [stopRunning](stoprunning%28%29.md): Stops the flow of data through the capture pipeline.
