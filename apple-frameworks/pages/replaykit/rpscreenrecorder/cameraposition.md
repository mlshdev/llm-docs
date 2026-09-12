> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorder/cameraposition](https://developer.apple.com/documentation/replaykit/rpscreenrecorder/cameraposition)

# cameraPosition (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The camera position to use.

> Use SCVideoEffectOutput cameraDevice instead

## Declaration

```swift
var cameraPosition: RPCameraPosition { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [AVCaptureDevice.Position.front](../../avfoundation/avcapturedevice/position-swift.enum/front.md). You can use this property for key-value observing.

## See Also

### Inspecting a Screen Recorder

- [isAvailable](isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [isRecording](isrecording.md): Deprecated. A Boolean value that indicates whether the app is currently recording.
- [isMicrophoneEnabled](ismicrophoneenabled.md): Deprecated. A Boolean value that indicates whether the microphone is currently enabled.
- [isCameraEnabled](iscameraenabled.md): Deprecated. A Boolean value that indicates whether the camera is currently enabled.
- [cameraPreviewView](camerapreviewview.md): Deprecated. A view containing the contents of the front-facing camera.
- [RPCameraPosition](../rpcameraposition.md): Deprecated. The position of the camera being accessed.
- [delegate](delegate.md): Deprecated. The delegate for the screen recorder.
- [RPScreenRecorderDelegate](../rpscreenrecorderdelegate.md): Deprecated. The protocol you implement to receive notifications from the screen recorder.

# cameraPosition (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The camera position to use.

> Use SCVideoEffectOutput cameraDevice instead

## Declaration

```objectivec
@property (nonatomic) RPCameraPosition cameraPosition;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [AVCaptureDevicePositionFront](../../avfoundation/avcapturedevice/position-swift.enum/front.md). You can use this property for key-value observing.

## See Also

### Inspecting a Screen Recorder

- [available](isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [recording](isrecording.md): Deprecated. A Boolean value that indicates whether the app is currently recording.
- [microphoneEnabled](ismicrophoneenabled.md): Deprecated. A Boolean value that indicates whether the microphone is currently enabled.
- [cameraEnabled](iscameraenabled.md): Deprecated. A Boolean value that indicates whether the camera is currently enabled.
- [cameraPreviewView](camerapreviewview.md): Deprecated. A view containing the contents of the front-facing camera.
- [RPCameraPosition](../rpcameraposition.md): Deprecated. The position of the camera being accessed.
- [delegate](delegate.md): Deprecated. The delegate for the screen recorder.
- [RPScreenRecorderDelegate](../rpscreenrecorderdelegate.md): Deprecated. The protocol you implement to receive notifications from the screen recorder.
