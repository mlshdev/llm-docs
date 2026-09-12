> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorder/camerapreviewview](https://developer.apple.com/documentation/replaykit/rpscreenrecorder/camerapreviewview)

# cameraPreviewView (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A view containing the contents of the front-facing camera.

> Use ScreenCaptureKit SCVideoEffectOutput instead

## Declaration

```swift
var cameraPreviewView: UIView? { get }
```

```swift
var cameraPreviewView: NSView? { get }
```

<a id="Discussion"></a>

## Discussion

When the value in the [isCameraEnabled](iscameraenabled.md) property is [true](https://developer.apple.com/documentation/swift/true), this property contains a view with the live camera view. If the camera isn’t enabled, the value in this property is `nil`. When the app runs in visionOS, the value in this property is `nil`.

## See Also

### Inspecting a Screen Recorder

- [isAvailable](isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [isRecording](isrecording.md): Deprecated. A Boolean value that indicates whether the app is currently recording.
- [isMicrophoneEnabled](ismicrophoneenabled.md): Deprecated. A Boolean value that indicates whether the microphone is currently enabled.
- [isCameraEnabled](iscameraenabled.md): Deprecated. A Boolean value that indicates whether the camera is currently enabled.
- [cameraPosition](cameraposition.md): Deprecated. The camera position to use.
- [RPCameraPosition](../rpcameraposition.md): Deprecated. The position of the camera being accessed.
- [delegate](delegate.md): Deprecated. The delegate for the screen recorder.
- [RPScreenRecorderDelegate](../rpscreenrecorderdelegate.md): Deprecated. The protocol you implement to receive notifications from the screen recorder.

# cameraPreviewView (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A view containing the contents of the front-facing camera.

> Use ScreenCaptureKit SCVideoEffectOutput instead

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIView * cameraPreviewView;
```

```objectivec
@property (nonatomic, readonly, nullable) NSView * cameraPreviewView;
```

<a id="Discussion"></a>

## Discussion

When the value in the [cameraEnabled](iscameraenabled.md) property is [true](https://developer.apple.com/documentation/swift/true), this property contains a view with the live camera view. If the camera isn’t enabled, the value in this property is `nil`. When the app runs in visionOS, the value in this property is `nil`.

## See Also

### Inspecting a Screen Recorder

- [available](isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [recording](isrecording.md): Deprecated. A Boolean value that indicates whether the app is currently recording.
- [microphoneEnabled](ismicrophoneenabled.md): Deprecated. A Boolean value that indicates whether the microphone is currently enabled.
- [cameraEnabled](iscameraenabled.md): Deprecated. A Boolean value that indicates whether the camera is currently enabled.
- [cameraPosition](cameraposition.md): Deprecated. The camera position to use.
- [RPCameraPosition](../rpcameraposition.md): Deprecated. The position of the camera being accessed.
- [delegate](delegate.md): Deprecated. The delegate for the screen recorder.
- [RPScreenRecorderDelegate](../rpscreenrecorderdelegate.md): Deprecated. The protocol you implement to receive notifications from the screen recorder.
