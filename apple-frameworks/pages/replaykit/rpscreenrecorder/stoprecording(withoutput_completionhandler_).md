> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorder/stoprecording(withoutput:completionhandler:)](https://developer.apple.com/documentation/replaykit/rpscreenrecorder/stoprecording(withoutput:completionhandler:))

# stopRecording(withOutput:completionHandler:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Stops the current recording and writes the movie to the specified output URL.

> Use ScreenCaptureKit SCStream with SCRecordingOutput instead

## Declaration

```swift
func stopRecording(withOutput url: URL, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func stopRecording(withOutput url: URL) async throws
```

## Parameters

- `url`: The output URL.
- `completionHandler`: The completion handler the system calls when the movie is written to the specified output URL. If an error occured, the system passes the completion handler an [NSError](../../foundation/nserror.md) that indicates the reason the operation failed.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func stopRecording(withOutput url: URL) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Controlling App Recording

- [startRecording(handler:)](startrecording%28handler_%29.md): Deprecated. Starts recording the app display.
- [stopRecording(handler:)](stoprecording%28handler_%29.md): Deprecated. Stops the current recording.
- [startCapture(handler:completionHandler:)](startcapture%28handler_completionhandler_%29.md): Deprecated. Starts screen and audio capture.
- [RPSampleBufferType](../rpsamplebuffertype.md): Deprecated. The type of media clip sample being buffered.
- [stopCapture(handler:)](stopcapture%28handler_%29.md): Deprecated. Stops screen capture
- [discardRecording(handler:)](discardrecording%28handler_%29.md): Deprecated. Discards the current recording.
- [startRecording(withMicrophoneEnabled:handler:)](startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.

# stopRecordingWithOutputURL:completionHandler: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Stops the current recording and writes the movie to the specified output URL.

> Use ScreenCaptureKit SCStream with SCRecordingOutput instead

## Declaration

```objectivec
- (void) stopRecordingWithOutputURL:(NSURL *) url completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `url`: The output URL.
- `completionHandler`: The completion handler the system calls when the movie is written to the specified output URL. If an error occured, the system passes the completion handler an [NSError](../../foundation/nserror.md) that indicates the reason the operation failed.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func stopRecording(withOutput url: URL) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Controlling App Recording

- [startRecordingWithHandler:](startrecording%28handler_%29.md): Deprecated. Starts recording the app display.
- [stopRecordingWithHandler:](stoprecording%28handler_%29.md): Deprecated. Stops the current recording.
- [startCaptureWithHandler:completionHandler:](startcapture%28handler_completionhandler_%29.md): Deprecated. Starts screen and audio capture.
- [RPSampleBufferType](../rpsamplebuffertype.md): Deprecated. The type of media clip sample being buffered.
- [stopCaptureWithHandler:](stopcapture%28handler_%29.md): Deprecated. Stops screen capture
- [discardRecordingWithHandler:](discardrecording%28handler_%29.md): Deprecated. Discards the current recording.
- [startRecordingWithMicrophoneEnabled:handler:](startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.
