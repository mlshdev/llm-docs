> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorder/iscameraenabled](https://developer.apple.com/documentation/replaykit/rpscreenrecorder/iscameraenabled)

# isCameraEnabled (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether the camera is currently enabled.

> Use SCContentSharingPickerConfiguration showsCameraControl instead

## Declaration

```swift
var isCameraEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Set this property to [true](https://developer.apple.com/documentation/swift/true) to enable the camera. When the app runs in visionOS, the value in this property is [false](https://developer.apple.com/documentation/swift/false) and assigning a new value has no effect.

You can use this property for key-value observing.

> **Note**

>  In your app’s `Info.plist` file, you must set the `Privacy - Camera Usage Description` key with a string that describes how your app uses the camera footage.

## See Also

### Inspecting a Screen Recorder

- [isAvailable](isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [isRecording](isrecording.md): Deprecated. A Boolean value that indicates whether the app is currently recording.
- [isMicrophoneEnabled](ismicrophoneenabled.md): Deprecated. A Boolean value that indicates whether the microphone is currently enabled.
- [cameraPreviewView](camerapreviewview.md): Deprecated. A view containing the contents of the front-facing camera.
- [cameraPosition](cameraposition.md): Deprecated. The camera position to use.
- [RPCameraPosition](../rpcameraposition.md): Deprecated. The position of the camera being accessed.
- [delegate](delegate.md): Deprecated. The delegate for the screen recorder.
- [RPScreenRecorderDelegate](../rpscreenrecorderdelegate.md): Deprecated. The protocol you implement to receive notifications from the screen recorder.

# cameraEnabled (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether the camera is currently enabled.

> Use SCContentSharingPickerConfiguration showsCameraControl instead

## Declaration

```objectivec
@property (nonatomic, getter=isCameraEnabled) BOOL cameraEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Set this property to [true](https://developer.apple.com/documentation/swift/true) to enable the camera. When the app runs in visionOS, the value in this property is [false](https://developer.apple.com/documentation/swift/false) and assigning a new value has no effect.

You can use this property for key-value observing.

> **Note**

>  In your app’s `Info.plist` file, you must set the `Privacy - Camera Usage Description` key with a string that describes how your app uses the camera footage.

## See Also

### Inspecting a Screen Recorder

- [available](isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [recording](isrecording.md): Deprecated. A Boolean value that indicates whether the app is currently recording.
- [microphoneEnabled](ismicrophoneenabled.md): Deprecated. A Boolean value that indicates whether the microphone is currently enabled.
- [cameraPreviewView](camerapreviewview.md): Deprecated. A view containing the contents of the front-facing camera.
- [cameraPosition](cameraposition.md): Deprecated. The camera position to use.
- [RPCameraPosition](../rpcameraposition.md): Deprecated. The position of the camera being accessed.
- [delegate](delegate.md): Deprecated. The delegate for the screen recorder.
- [RPScreenRecorderDelegate](../rpscreenrecorderdelegate.md): Deprecated. The protocol you implement to receive notifications from the screen recorder.
