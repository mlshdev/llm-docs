> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorderdelegate](https://developer.apple.com/documentation/replaykit/rpscreenrecorderdelegate)

# RPScreenRecorderDelegate (Swift)

**Framework:** ReplayKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The protocol you implement to receive notifications from the screen recorder.

> Use ScreenCaptureKit instead

## Declaration

```swift
protocol RPScreenRecorderDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use this class to respond to changes to the screen recorder, represented by an [RPScreenRecorder](rpscreenrecorder.md) object.

## Topics

### Responding to Recording Changes

- [screenRecorder(\_:didStopRecordingWith:error:)](rpscreenrecorderdelegate/screenrecorder%28__didstoprecordingwith_error_%29.md): Deprecated. Indicates that the screen recording has stopped.
- [screenRecorderDidChangeAvailability(\_:)](rpscreenrecorderdelegate/screenrecorderdidchangeavailability%28__%29.md): Deprecated. Indicates that the recorder has changed states between disabled and enabled.
- [screenRecorder(\_:didStopRecordingWithError:previewViewController:)](rpscreenrecorderdelegate/screenrecorder%28__didstoprecordingwitherror_previewviewcontroller_%29.md): Deprecated. Indicates that the screen recording has stopped.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Inspecting a Screen Recorder

- [isAvailable](rpscreenrecorder/isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [isRecording](rpscreenrecorder/isrecording.md): Deprecated. A Boolean value that indicates whether the app is currently recording.
- [isMicrophoneEnabled](rpscreenrecorder/ismicrophoneenabled.md): Deprecated. A Boolean value that indicates whether the microphone is currently enabled.
- [isCameraEnabled](rpscreenrecorder/iscameraenabled.md): Deprecated. A Boolean value that indicates whether the camera is currently enabled.
- [cameraPreviewView](rpscreenrecorder/camerapreviewview.md): Deprecated. A view containing the contents of the front-facing camera.
- [cameraPosition](rpscreenrecorder/cameraposition.md): Deprecated. The camera position to use.
- [RPCameraPosition](rpcameraposition.md): Deprecated. The position of the camera being accessed.
- [delegate](rpscreenrecorder/delegate.md): Deprecated. The delegate for the screen recorder.

# RPScreenRecorderDelegate (Objective-C)

**Framework:** ReplayKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The protocol you implement to receive notifications from the screen recorder.

> Use ScreenCaptureKit instead

## Declaration

```objectivec
@protocol RPScreenRecorderDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Use this class to respond to changes to the screen recorder, represented by an [RPScreenRecorder](rpscreenrecorder.md) object.

## Topics

### Responding to Recording Changes

- [screenRecorder:didStopRecordingWithPreviewViewController:error:](rpscreenrecorderdelegate/screenrecorder%28__didstoprecordingwith_error_%29.md): Deprecated. Indicates that the screen recording has stopped.
- [screenRecorderDidChangeAvailability:](rpscreenrecorderdelegate/screenrecorderdidchangeavailability%28__%29.md): Deprecated. Indicates that the recorder has changed states between disabled and enabled.
- [screenRecorder:didStopRecordingWithError:previewViewController:](rpscreenrecorderdelegate/screenrecorder%28__didstoprecordingwitherror_previewviewcontroller_%29.md): Deprecated. Indicates that the screen recording has stopped.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Inspecting a Screen Recorder

- [available](rpscreenrecorder/isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [recording](rpscreenrecorder/isrecording.md): Deprecated. A Boolean value that indicates whether the app is currently recording.
- [microphoneEnabled](rpscreenrecorder/ismicrophoneenabled.md): Deprecated. A Boolean value that indicates whether the microphone is currently enabled.
- [cameraEnabled](rpscreenrecorder/iscameraenabled.md): Deprecated. A Boolean value that indicates whether the camera is currently enabled.
- [cameraPreviewView](rpscreenrecorder/camerapreviewview.md): Deprecated. A view containing the contents of the front-facing camera.
- [cameraPosition](rpscreenrecorder/cameraposition.md): Deprecated. The camera position to use.
- [RPCameraPosition](rpcameraposition.md): Deprecated. The position of the camera being accessed.
- [delegate](rpscreenrecorder/delegate.md): Deprecated. The delegate for the screen recorder.
