> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorder/isrecording](https://developer.apple.com/documentation/replaykit/rpscreenrecorder/isrecording)

# isRecording (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether the app is currently recording.

> Use SCStream isCapturing instead

## Declaration

```swift
var isRecording: Bool { get }
```

## See Also

### Inspecting a Screen Recorder

- [isAvailable](isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [isMicrophoneEnabled](ismicrophoneenabled.md): Deprecated. A Boolean value that indicates whether the microphone is currently enabled.
- [isCameraEnabled](iscameraenabled.md): Deprecated. A Boolean value that indicates whether the camera is currently enabled.
- [cameraPreviewView](camerapreviewview.md): Deprecated. A view containing the contents of the front-facing camera.
- [cameraPosition](cameraposition.md): Deprecated. The camera position to use.
- [RPCameraPosition](../rpcameraposition.md): Deprecated. The position of the camera being accessed.
- [delegate](delegate.md): Deprecated. The delegate for the screen recorder.
- [RPScreenRecorderDelegate](../rpscreenrecorderdelegate.md): Deprecated. The protocol you implement to receive notifications from the screen recorder.

# recording (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether the app is currently recording.

> Use SCStream isCapturing instead

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRecording) BOOL recording;
```

## See Also

### Inspecting a Screen Recorder

- [available](isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [microphoneEnabled](ismicrophoneenabled.md): Deprecated. A Boolean value that indicates whether the microphone is currently enabled.
- [cameraEnabled](iscameraenabled.md): Deprecated. A Boolean value that indicates whether the camera is currently enabled.
- [cameraPreviewView](camerapreviewview.md): Deprecated. A view containing the contents of the front-facing camera.
- [cameraPosition](cameraposition.md): Deprecated. The camera position to use.
- [RPCameraPosition](../rpcameraposition.md): Deprecated. The position of the camera being accessed.
- [delegate](delegate.md): Deprecated. The delegate for the screen recorder.
- [RPScreenRecorderDelegate](../rpscreenrecorderdelegate.md): Deprecated. The protocol you implement to receive notifications from the screen recorder.
