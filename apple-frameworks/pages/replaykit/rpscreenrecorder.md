> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorder](https://developer.apple.com/documentation/replaykit/rpscreenrecorder)

# RPScreenRecorder (Swift)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The shared recorder object that provides the ability to record audio and video of your app.

> Use ScreenCaptureKit instead

## Declaration

```swift
class RPScreenRecorder
```

<a id="overview"></a>

## Overview

Apps on a user’s device can share the recording function, with each app having its own instance of  `RPScreenRecorder`. Your app can record the audio and video inside of the app, along with user commentary through the microphone. You get a reference to the recorder through the [shared()](rpscreenrecorder/shared%28%29.md) function and use it to implement start-and-stop recording functionality. You can present a user interface (view controller) where a user can trim and preview recordings, and share them with other users. Only one app at a time can use the recorder on the user’s device. Your app can’t record video from [AVPlayer](../avfoundation/avplayer.md).

## Topics

### Accessing the Shared Recorder

- [shared()](rpscreenrecorder/shared%28%29.md): Deprecated. Returns an app’s instance of the shared screen recorder.

### Inspecting a Screen Recorder

- [isAvailable](rpscreenrecorder/isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [isRecording](rpscreenrecorder/isrecording.md): Deprecated. A Boolean value that indicates whether the app is currently recording.
- [isMicrophoneEnabled](rpscreenrecorder/ismicrophoneenabled.md): Deprecated. A Boolean value that indicates whether the microphone is currently enabled.
- [isCameraEnabled](rpscreenrecorder/iscameraenabled.md): Deprecated. A Boolean value that indicates whether the camera is currently enabled.
- [cameraPreviewView](rpscreenrecorder/camerapreviewview.md): Deprecated. A view containing the contents of the front-facing camera.
- [cameraPosition](rpscreenrecorder/cameraposition.md): Deprecated. The camera position to use.
- [RPCameraPosition](rpcameraposition.md): Deprecated. The position of the camera being accessed.
- [delegate](rpscreenrecorder/delegate.md): Deprecated. The delegate for the screen recorder.
- [RPScreenRecorderDelegate](rpscreenrecorderdelegate.md): Deprecated. The protocol you implement to receive notifications from the screen recorder.

### Controlling App Recording

- [startRecording(handler:)](rpscreenrecorder/startrecording%28handler_%29.md): Deprecated. Starts recording the app display.
- [stopRecording(handler:)](rpscreenrecorder/stoprecording%28handler_%29.md): Deprecated. Stops the current recording.
- [stopRecording(withOutput:completionHandler:)](rpscreenrecorder/stoprecording%28withoutput_completionhandler_%29.md): Deprecated. Stops the current recording and writes the movie to the specified output URL.
- [startCapture(handler:completionHandler:)](rpscreenrecorder/startcapture%28handler_completionhandler_%29.md): Deprecated. Starts screen and audio capture.
- [RPSampleBufferType](rpsamplebuffertype.md): Deprecated. The type of media clip sample being buffered.
- [stopCapture(handler:)](rpscreenrecorder/stopcapture%28handler_%29.md): Deprecated. Stops screen capture
- [discardRecording(handler:)](rpscreenrecorder/discardrecording%28handler_%29.md): Deprecated. Discards the current recording.
- [startRecording(withMicrophoneEnabled:handler:)](rpscreenrecorder/startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.

### Performing Clip Recording

- [startClipBuffering(completionHandler:)](rpscreenrecorder/startclipbuffering%28completionhandler_%29.md): Deprecated. Starts buffering a clip recording.
- [stopClipBuffering(completionHandler:)](rpscreenrecorder/stopclipbuffering%28completionhandler_%29.md): Deprecated. Stops buffering a clip recording.
- [exportClip(to:duration:completionHandler:)](rpscreenrecorder/exportclip%28to_duration_completionhandler_%29.md): Deprecated. Exports a clip recording to a file.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Replay Sharing

- [Recording and Streaming Your macOS App](recording-and-streaming-your-macos-app.md): Share screen recordings, or broadcast live audio and video of your app, by adding ReplayKit to your macOS apps and games.
- [RPPreviewViewController](rppreviewviewcontroller.md): Deprecated. An object that displays a user interface where users preview and edit a screen recording that you create with ReplayKit.

# RPScreenRecorder (Objective-C)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The shared recorder object that provides the ability to record audio and video of your app.

> Use ScreenCaptureKit instead

## Declaration

```objectivec
@interface RPScreenRecorder : NSObject
```

<a id="overview"></a>

## Overview

Apps on a user’s device can share the recording function, with each app having its own instance of  `RPScreenRecorder`. Your app can record the audio and video inside of the app, along with user commentary through the microphone. You get a reference to the recorder through the [sharedRecorder](rpscreenrecorder/shared%28%29.md) function and use it to implement start-and-stop recording functionality. You can present a user interface (view controller) where a user can trim and preview recordings, and share them with other users. Only one app at a time can use the recorder on the user’s device. Your app can’t record video from [AVPlayer](../avfoundation/avplayer.md).

## Topics

### Accessing the Shared Recorder

- [sharedRecorder](rpscreenrecorder/shared%28%29.md): Deprecated. Returns an app’s instance of the shared screen recorder.

### Inspecting a Screen Recorder

- [available](rpscreenrecorder/isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [recording](rpscreenrecorder/isrecording.md): Deprecated. A Boolean value that indicates whether the app is currently recording.
- [microphoneEnabled](rpscreenrecorder/ismicrophoneenabled.md): Deprecated. A Boolean value that indicates whether the microphone is currently enabled.
- [cameraEnabled](rpscreenrecorder/iscameraenabled.md): Deprecated. A Boolean value that indicates whether the camera is currently enabled.
- [cameraPreviewView](rpscreenrecorder/camerapreviewview.md): Deprecated. A view containing the contents of the front-facing camera.
- [cameraPosition](rpscreenrecorder/cameraposition.md): Deprecated. The camera position to use.
- [RPCameraPosition](rpcameraposition.md): Deprecated. The position of the camera being accessed.
- [delegate](rpscreenrecorder/delegate.md): Deprecated. The delegate for the screen recorder.
- [RPScreenRecorderDelegate](rpscreenrecorderdelegate.md): Deprecated. The protocol you implement to receive notifications from the screen recorder.

### Controlling App Recording

- [startRecordingWithHandler:](rpscreenrecorder/startrecording%28handler_%29.md): Deprecated. Starts recording the app display.
- [stopRecordingWithHandler:](rpscreenrecorder/stoprecording%28handler_%29.md): Deprecated. Stops the current recording.
- [stopRecordingWithOutputURL:completionHandler:](rpscreenrecorder/stoprecording%28withoutput_completionhandler_%29.md): Deprecated. Stops the current recording and writes the movie to the specified output URL.
- [startCaptureWithHandler:completionHandler:](rpscreenrecorder/startcapture%28handler_completionhandler_%29.md): Deprecated. Starts screen and audio capture.
- [RPSampleBufferType](rpsamplebuffertype.md): Deprecated. The type of media clip sample being buffered.
- [stopCaptureWithHandler:](rpscreenrecorder/stopcapture%28handler_%29.md): Deprecated. Stops screen capture
- [discardRecordingWithHandler:](rpscreenrecorder/discardrecording%28handler_%29.md): Deprecated. Discards the current recording.
- [startRecordingWithMicrophoneEnabled:handler:](rpscreenrecorder/startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.

### Performing Clip Recording

- [startClipBufferingWithCompletionHandler:](rpscreenrecorder/startclipbuffering%28completionhandler_%29.md): Deprecated. Starts buffering a clip recording.
- [stopClipBufferingWithCompletionHandler:](rpscreenrecorder/stopclipbuffering%28completionhandler_%29.md): Deprecated. Stops buffering a clip recording.
- [exportClipToURL:duration:completionHandler:](rpscreenrecorder/exportclip%28to_duration_completionhandler_%29.md): Deprecated. Exports a clip recording to a file.

### Instance Methods

- [init](rpscreenrecorder/init.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Replay Sharing

- [Recording and Streaming Your macOS App](recording-and-streaming-your-macos-app.md): Share screen recordings, or broadcast live audio and video of your app, by adding ReplayKit to your macOS apps and games.
- [RPPreviewViewController](rppreviewviewcontroller.md): Deprecated. An object that displays a user interface where users preview and edit a screen recording that you create with ReplayKit.
