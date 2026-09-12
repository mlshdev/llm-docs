> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstream/startcapture(completionhandler:)](https://developer.apple.com/documentation/screencapturekit/scstream/startcapture(completionhandler:))

# startCapture(completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Starts the stream with a callback to indicate whether it successfully starts.

## Declaration

```swift
func startCapture(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func startCapture() async throws
```

## Parameters

- `completionHandler`: A completion handler that provides an error if the stream fails to start.

## See Also

### Starting and stopping a stream

- [stopCapture(completionHandler:)](stopcapture%28completionhandler_%29.md): Stops the stream.

# startCaptureWithCompletionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Starts the stream with a callback to indicate whether it successfully starts.

## Declaration

```objectivec
- (void) startCaptureWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler that provides an error if the stream fails to start.

## See Also

### Starting and stopping a stream

- [stopCaptureWithCompletionHandler:](stopcapture%28completionhandler_%29.md): Stops the stream.
