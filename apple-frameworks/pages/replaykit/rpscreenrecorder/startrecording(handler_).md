> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorder/startrecording(handler:)](https://developer.apple.com/documentation/replaykit/rpscreenrecorder/startrecording(handler:))

# startRecording(handler:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts recording the app display.

> Use ScreenCaptureKit SCStream with SCRecordingOutput instead

## Declaration

```swift
func startRecording(handler: (((any Error)?) -> Void)? = nil)
```

## Parameters

- `handler`: A block that is called when the request completes.

  - **`error`**: If an error occurred, this parameter holds an object that explains the error. Otherwise, the value of this parameter is `nil`. See [RPRecordingErrorCode](../rprecordingerrorcode.md) for a list of error codes specific to ReplayKit.

<a id="Discussion"></a>

## Discussion

Call [startRecording(handler:)](startrecording%28handler_%29.md) on an instance of the recorder to begin recording. When [startRecording(handler:)](startrecording%28handler_%29.md) is first called, an alert window appears asking the user to confirm recording. This alert window is also presented if it has been longer than 8 minutes since the last time [startRecording(handler:)](startrecording%28handler_%29.md) was called.

## See Also

### Controlling App Recording

- [stopRecording(handler:)](stoprecording%28handler_%29.md): Deprecated. Stops the current recording.
- [stopRecording(withOutput:completionHandler:)](stoprecording%28withoutput_completionhandler_%29.md): Deprecated. Stops the current recording and writes the movie to the specified output URL.
- [startCapture(handler:completionHandler:)](startcapture%28handler_completionhandler_%29.md): Deprecated. Starts screen and audio capture.
- [RPSampleBufferType](../rpsamplebuffertype.md): Deprecated. The type of media clip sample being buffered.
- [stopCapture(handler:)](stopcapture%28handler_%29.md): Deprecated. Stops screen capture
- [discardRecording(handler:)](discardrecording%28handler_%29.md): Deprecated. Discards the current recording.
- [startRecording(withMicrophoneEnabled:handler:)](startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.

# startRecordingWithHandler: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts recording the app display.

> Use ScreenCaptureKit SCStream with SCRecordingOutput instead

## Declaration

```objectivec
- (void) startRecordingWithHandler:(void (^)(NSError *error)) handler;
```

## Parameters

- `handler`: A block that is called when the request completes.

  - **`error`**: If an error occurred, this parameter holds an object that explains the error. Otherwise, the value of this parameter is `nil`. See [RPRecordingErrorCode](../rprecordingerrorcode.md) for a list of error codes specific to ReplayKit.

<a id="Discussion"></a>

## Discussion

Call [startRecordingWithHandler:](startrecording%28handler_%29.md) on an instance of the recorder to begin recording. When [startRecordingWithHandler:](startrecording%28handler_%29.md) is first called, an alert window appears asking the user to confirm recording. This alert window is also presented if it has been longer than 8 minutes since the last time [startRecordingWithHandler:](startrecording%28handler_%29.md) was called.

## See Also

### Controlling App Recording

- [stopRecordingWithHandler:](stoprecording%28handler_%29.md): Deprecated. Stops the current recording.
- [stopRecordingWithOutputURL:completionHandler:](stoprecording%28withoutput_completionhandler_%29.md): Deprecated. Stops the current recording and writes the movie to the specified output URL.
- [startCaptureWithHandler:completionHandler:](startcapture%28handler_completionhandler_%29.md): Deprecated. Starts screen and audio capture.
- [RPSampleBufferType](../rpsamplebuffertype.md): Deprecated. The type of media clip sample being buffered.
- [stopCaptureWithHandler:](stopcapture%28handler_%29.md): Deprecated. Stops screen capture
- [discardRecordingWithHandler:](discardrecording%28handler_%29.md): Deprecated. Discards the current recording.
- [startRecordingWithMicrophoneEnabled:handler:](startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.
