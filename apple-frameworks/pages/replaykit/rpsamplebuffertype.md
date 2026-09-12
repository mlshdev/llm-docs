> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpsamplebuffertype](https://developer.apple.com/documentation/replaykit/rpsamplebuffertype)

# RPSampleBufferType (Swift)

**Framework:** ReplayKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The type of media clip sample being buffered.

> Use SCStreamOutputType instead

## Declaration

```swift
enum RPSampleBufferType
```

## Topics

### Sample Buffer Types

- [RPSampleBufferType.audioApp](rpsamplebuffertype/audioapp.md): Deprecated. The sample audio that originates from the app.
- [RPSampleBufferType.audioMic](rpsamplebuffertype/audiomic.md): Deprecated. The sample audio that originates from the microphone.
- [RPSampleBufferType.video](rpsamplebuffertype/video.md): Deprecated. The sample that contains a video clip.

### Initializers

- [init(rawValue:)](rpsamplebuffertype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling App Recording

- [startRecording(handler:)](rpscreenrecorder/startrecording%28handler_%29.md): Deprecated. Starts recording the app display.
- [stopRecording(handler:)](rpscreenrecorder/stoprecording%28handler_%29.md): Deprecated. Stops the current recording.
- [stopRecording(withOutput:completionHandler:)](rpscreenrecorder/stoprecording%28withoutput_completionhandler_%29.md): Deprecated. Stops the current recording and writes the movie to the specified output URL.
- [startCapture(handler:completionHandler:)](rpscreenrecorder/startcapture%28handler_completionhandler_%29.md): Deprecated. Starts screen and audio capture.
- [stopCapture(handler:)](rpscreenrecorder/stopcapture%28handler_%29.md): Deprecated. Stops screen capture
- [discardRecording(handler:)](rpscreenrecorder/discardrecording%28handler_%29.md): Deprecated. Discards the current recording.
- [startRecording(withMicrophoneEnabled:handler:)](rpscreenrecorder/startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.

# RPSampleBufferType (Objective-C)

**Framework:** ReplayKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The type of media clip sample being buffered.

## Declaration

```objectivec
enum RPSampleBufferType : NSInteger;
```

## Topics

### Sample Buffer Types

- [RPSampleBufferTypeAudioApp](rpsamplebuffertype/audioapp.md): Deprecated. The sample audio that originates from the app.
- [RPSampleBufferTypeAudioMic](rpsamplebuffertype/audiomic.md): Deprecated. The sample audio that originates from the microphone.
- [RPSampleBufferTypeVideo](rpsamplebuffertype/video.md): Deprecated. The sample that contains a video clip.

## See Also

### Controlling App Recording

- [startRecordingWithHandler:](rpscreenrecorder/startrecording%28handler_%29.md): Deprecated. Starts recording the app display.
- [stopRecordingWithHandler:](rpscreenrecorder/stoprecording%28handler_%29.md): Deprecated. Stops the current recording.
- [stopRecordingWithOutputURL:completionHandler:](rpscreenrecorder/stoprecording%28withoutput_completionhandler_%29.md): Deprecated. Stops the current recording and writes the movie to the specified output URL.
- [startCaptureWithHandler:completionHandler:](rpscreenrecorder/startcapture%28handler_completionhandler_%29.md): Deprecated. Starts screen and audio capture.
- [stopCaptureWithHandler:](rpscreenrecorder/stopcapture%28handler_%29.md): Deprecated. Stops screen capture
- [discardRecordingWithHandler:](rpscreenrecorder/discardrecording%28handler_%29.md): Deprecated. Discards the current recording.
- [startRecordingWithMicrophoneEnabled:handler:](rpscreenrecorder/startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.
