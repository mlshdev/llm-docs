> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorder/discardrecording(handler:)](https://developer.apple.com/documentation/replaykit/rpscreenrecorder/discardrecording(handler:))

# discardRecording(handler:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Discards the current recording.

> Use ScreenCaptureKit SCStream with SCRecordingOutput instead

## Declaration

```swift
func discardRecording(handler: @escaping () -> Void)
```

## Parameters

- `handler`: A block that is called when the request is completed.

<a id="Discussion"></a>

## Discussion

[discardRecording(handler:)](discardrecording%28handler_%29.md) can only be called after the handler block in [stopRecording(handler:)](stoprecording%28handler_%29.md) has been called. Use the `handler` block to do any required cleanup, including setting any `RPPreviewScreenController` references to `nil`.

## See Also

### Controlling App Recording

- [startRecording(handler:)](startrecording%28handler_%29.md): Deprecated. Starts recording the app display.
- [stopRecording(handler:)](stoprecording%28handler_%29.md): Deprecated. Stops the current recording.
- [stopRecording(withOutput:completionHandler:)](stoprecording%28withoutput_completionhandler_%29.md): Deprecated. Stops the current recording and writes the movie to the specified output URL.
- [startCapture(handler:completionHandler:)](startcapture%28handler_completionhandler_%29.md): Deprecated. Starts screen and audio capture.
- [RPSampleBufferType](../rpsamplebuffertype.md): Deprecated. The type of media clip sample being buffered.
- [stopCapture(handler:)](stopcapture%28handler_%29.md): Deprecated. Stops screen capture
- [startRecording(withMicrophoneEnabled:handler:)](startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.

# discardRecordingWithHandler: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Discards the current recording.

> Use ScreenCaptureKit SCStream with SCRecordingOutput instead

## Declaration

```objectivec
- (void) discardRecordingWithHandler:(void (^)()) handler;
```

## Parameters

- `handler`: A block that is called when the request is completed.

<a id="Discussion"></a>

## Discussion

[discardRecordingWithHandler:](discardrecording%28handler_%29.md) can only be called after the handler block in [stopRecordingWithHandler:](stoprecording%28handler_%29.md) has been called. Use the `handler` block to do any required cleanup, including setting any `RPPreviewScreenController` references to `nil`.

## See Also

### Controlling App Recording

- [startRecordingWithHandler:](startrecording%28handler_%29.md): Deprecated. Starts recording the app display.
- [stopRecordingWithHandler:](stoprecording%28handler_%29.md): Deprecated. Stops the current recording.
- [stopRecordingWithOutputURL:completionHandler:](stoprecording%28withoutput_completionhandler_%29.md): Deprecated. Stops the current recording and writes the movie to the specified output URL.
- [startCaptureWithHandler:completionHandler:](startcapture%28handler_completionhandler_%29.md): Deprecated. Starts screen and audio capture.
- [RPSampleBufferType](../rpsamplebuffertype.md): Deprecated. The type of media clip sample being buffered.
- [stopCaptureWithHandler:](stopcapture%28handler_%29.md): Deprecated. Stops screen capture
- [startRecordingWithMicrophoneEnabled:handler:](startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.
