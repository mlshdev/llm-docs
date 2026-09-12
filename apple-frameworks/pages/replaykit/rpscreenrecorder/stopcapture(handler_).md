> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorder/stopcapture(handler:)](https://developer.apple.com/documentation/replaykit/rpscreenrecorder/stopcapture(handler:))

# stopCapture(handler:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Stops screen capture

> Use ScreenCaptureKit SCStream stopCaptureWithCompletionHandler: instead

## Declaration

```swift
func stopCapture(handler: (((any Error)?) -> Void)? = nil)
```

## Parameters

- `handler`: A block that is called when screen capture has stopped.

  - **error**: If an error occurred, this parameter holds an object that explains the error. Otherwise, the value of this parameter is `nil`. See [RPRecordingErrorCode](../rprecordingerrorcode.md) for a list of error codes to ReplayKit.

## See Also

### Controlling App Recording

- [startRecording(handler:)](startrecording%28handler_%29.md): Deprecated. Starts recording the app display.
- [stopRecording(handler:)](stoprecording%28handler_%29.md): Deprecated. Stops the current recording.
- [stopRecording(withOutput:completionHandler:)](stoprecording%28withoutput_completionhandler_%29.md): Deprecated. Stops the current recording and writes the movie to the specified output URL.
- [startCapture(handler:completionHandler:)](startcapture%28handler_completionhandler_%29.md): Deprecated. Starts screen and audio capture.
- [RPSampleBufferType](../rpsamplebuffertype.md): Deprecated. The type of media clip sample being buffered.
- [discardRecording(handler:)](discardrecording%28handler_%29.md): Deprecated. Discards the current recording.
- [startRecording(withMicrophoneEnabled:handler:)](startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.

# stopCaptureWithHandler: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Stops screen capture

> Use ScreenCaptureKit SCStream stopCaptureWithCompletionHandler: instead

## Declaration

```objectivec
- (void) stopCaptureWithHandler:(void (^)(NSError *error)) handler;
```

## Parameters

- `handler`: A block that is called when screen capture has stopped.

  - **error**: If an error occurred, this parameter holds an object that explains the error. Otherwise, the value of this parameter is `nil`. See [RPRecordingErrorCode](../rprecordingerrorcode.md) for a list of error codes to ReplayKit.

## See Also

### Controlling App Recording

- [startRecordingWithHandler:](startrecording%28handler_%29.md): Deprecated. Starts recording the app display.
- [stopRecordingWithHandler:](stoprecording%28handler_%29.md): Deprecated. Stops the current recording.
- [stopRecordingWithOutputURL:completionHandler:](stoprecording%28withoutput_completionhandler_%29.md): Deprecated. Stops the current recording and writes the movie to the specified output URL.
- [startCaptureWithHandler:completionHandler:](startcapture%28handler_completionhandler_%29.md): Deprecated. Starts screen and audio capture.
- [RPSampleBufferType](../rpsamplebuffertype.md): Deprecated. The type of media clip sample being buffered.
- [discardRecordingWithHandler:](discardrecording%28handler_%29.md): Deprecated. Discards the current recording.
- [startRecordingWithMicrophoneEnabled:handler:](startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.
