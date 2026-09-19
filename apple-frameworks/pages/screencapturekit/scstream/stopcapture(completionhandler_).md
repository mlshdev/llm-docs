> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scstream/stopcapture(completionhandler:)

# stopCapture(completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Stops the stream.

## Declaration

```swift
func stopCapture(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func stopCapture() async throws
```

## Parameters

- `completionHandler`: A completion handler that provides an error if the stream fails to stop.

## See Also

### Starting and stopping a stream

- [startCapture(completionHandler:)](startcapture%28completionhandler_%29.md): Starts the stream with a callback to indicate whether it successfully starts.

# stopCaptureWithCompletionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Stops the stream.

## Declaration

```objectivec
- (void) stopCaptureWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler that provides an error if the stream fails to stop.

## See Also

### Starting and stopping a stream

- [startCaptureWithCompletionHandler:](startcapture%28completionhandler_%29.md): Starts the stream with a callback to indicate whether it successfully starts.
