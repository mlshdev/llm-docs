> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorder/startcapture(handler:completionhandler:)](https://developer.apple.com/documentation/replaykit/rpscreenrecorder/startcapture(handler:completionhandler:))

# startCapture(handler:completionHandler:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts screen and audio capture.

> Use ScreenCaptureKit SCStream with SCStreamOutput instead

## Declaration

```swift
func startCapture(handler captureHandler: ((CMSampleBuffer, RPSampleBufferType, (any Error)?) -> Void)?, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func startCapture(handler captureHandler: ((CMSampleBuffer, RPSampleBufferType, (any Error)?) -> Void)?) async throws
```

## Parameters

- `captureHandler`: A block that is called continuously during screen capture.

  - **sampleBuffer**: A [CMSampleBuffer](../../coremedia/cmsamplebuffer-api.md) object containing either audio or video data.
  - **bufferType**: An [RPSampleBufferType](../rpsamplebuffertype.md) identifying the media type of the recorded sample.
  - **error**: Contains an error code if screen capture failed to start. Otherwise, the value of this parameter is `nil`.
- `completionHandler`: A block that is called when screen capture has started.

  - **error**: If an error occurred, this parameter holds an object that explains the error. Otherwise, the value of this parameter is `nil`. See [RPRecordingErrorCode](../rprecordingerrorcode.md) for a list of error codes to ReplayKit.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func startCapture(handler captureHandler: ((CMSampleBuffer, RPSampleBufferType, Error?) -> Void)?) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Controlling App Recording

- [startRecording(handler:)](startrecording%28handler_%29.md): Deprecated. Starts recording the app display.
- [stopRecording(handler:)](stoprecording%28handler_%29.md): Deprecated. Stops the current recording.
- [stopRecording(withOutput:completionHandler:)](stoprecording%28withoutput_completionhandler_%29.md): Deprecated. Stops the current recording and writes the movie to the specified output URL.
- [RPSampleBufferType](../rpsamplebuffertype.md): Deprecated. The type of media clip sample being buffered.
- [stopCapture(handler:)](stopcapture%28handler_%29.md): Deprecated. Stops screen capture
- [discardRecording(handler:)](discardrecording%28handler_%29.md): Deprecated. Discards the current recording.
- [startRecording(withMicrophoneEnabled:handler:)](startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.

# startCaptureWithHandler:completionHandler: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts screen and audio capture.

> Use ScreenCaptureKit SCStream with SCStreamOutput instead

## Declaration

```objectivec
- (void) startCaptureWithHandler:(void (^)(CMSampleBufferRef sampleBuffer, RPSampleBufferType bufferType, NSError *error)) captureHandler completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `captureHandler`: A block that is called continuously during screen capture.

  - **sampleBuffer**: A [CMSampleBuffer](../../coremedia/cmsamplebuffer-api.md) object containing either audio or video data.
  - **bufferType**: An [RPSampleBufferType](../rpsamplebuffertype.md) identifying the media type of the recorded sample.
  - **error**: Contains an error code if screen capture failed to start. Otherwise, the value of this parameter is `nil`.
- `completionHandler`: A block that is called when screen capture has started.

  - **error**: If an error occurred, this parameter holds an object that explains the error. Otherwise, the value of this parameter is `nil`. See [RPRecordingErrorCode](../rprecordingerrorcode.md) for a list of error codes to ReplayKit.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func startCapture(handler captureHandler: ((CMSampleBuffer, RPSampleBufferType, Error?) -> Void)?) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Controlling App Recording

- [startRecordingWithHandler:](startrecording%28handler_%29.md): Deprecated. Starts recording the app display.
- [stopRecordingWithHandler:](stoprecording%28handler_%29.md): Deprecated. Stops the current recording.
- [stopRecordingWithOutputURL:completionHandler:](stoprecording%28withoutput_completionhandler_%29.md): Deprecated. Stops the current recording and writes the movie to the specified output URL.
- [RPSampleBufferType](../rpsamplebuffertype.md): Deprecated. The type of media clip sample being buffered.
- [stopCaptureWithHandler:](stopcapture%28handler_%29.md): Deprecated. Stops screen capture
- [discardRecordingWithHandler:](discardrecording%28handler_%29.md): Deprecated. Discards the current recording.
- [startRecordingWithMicrophoneEnabled:handler:](startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.
