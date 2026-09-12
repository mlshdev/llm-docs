> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorder/ismicrophoneenabled](https://developer.apple.com/documentation/replaykit/rpscreenrecorder/ismicrophoneenabled)

# isMicrophoneEnabled (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether the microphone is currently enabled.

> Use SCContentSharingPickerConfiguration showsMicrophoneControl instead

## Declaration

```swift
var isMicrophoneEnabled: Bool { get set }
```

## See Also

### Inspecting a Screen Recorder

- [isAvailable](isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [isRecording](isrecording.md): Deprecated. A Boolean value that indicates whether the app is currently recording.
- [isCameraEnabled](iscameraenabled.md): Deprecated. A Boolean value that indicates whether the camera is currently enabled.
- [cameraPreviewView](camerapreviewview.md): Deprecated. A view containing the contents of the front-facing camera.
- [cameraPosition](cameraposition.md): Deprecated. The camera position to use.
- [RPCameraPosition](../rpcameraposition.md): Deprecated. The position of the camera being accessed.
- [delegate](delegate.md): Deprecated. The delegate for the screen recorder.
- [RPScreenRecorderDelegate](../rpscreenrecorderdelegate.md): Deprecated. The protocol you implement to receive notifications from the screen recorder.

# microphoneEnabled (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether the microphone is currently enabled.

> Use SCContentSharingPickerConfiguration showsMicrophoneControl instead

## Declaration

```objectivec
@property (nonatomic, getter=isMicrophoneEnabled) BOOL microphoneEnabled;
```

## See Also

### Inspecting a Screen Recorder

- [available](isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [recording](isrecording.md): Deprecated. A Boolean value that indicates whether the app is currently recording.
- [cameraEnabled](iscameraenabled.md): Deprecated. A Boolean value that indicates whether the camera is currently enabled.
- [cameraPreviewView](camerapreviewview.md): Deprecated. A view containing the contents of the front-facing camera.
- [cameraPosition](cameraposition.md): Deprecated. The camera position to use.
- [RPCameraPosition](../rpcameraposition.md): Deprecated. The position of the camera being accessed.
- [delegate](delegate.md): Deprecated. The delegate for the screen recorder.
- [RPScreenRecorderDelegate](../rpscreenrecorderdelegate.md): Deprecated. The protocol you implement to receive notifications from the screen recorder.
