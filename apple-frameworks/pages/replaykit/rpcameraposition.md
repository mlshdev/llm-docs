> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpcameraposition](https://developer.apple.com/documentation/replaykit/rpcameraposition)

# RPCameraPosition (Swift)

**Framework:** ReplayKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The position of the camera being accessed.

> Use SCVideoEffectOutput cameraDevice instead

## Declaration

```swift
enum RPCameraPosition
```

## Topics

### Enumeration Cases

- [RPCameraPosition.back](rpcameraposition/back.md): Deprecated. The back camera is used.
- [RPCameraPosition.front](rpcameraposition/front.md): Deprecated. The front camera is used.

### Initializers

- [init(rawValue:)](rpcameraposition/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a Screen Recorder

- [isAvailable](rpscreenrecorder/isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [isRecording](rpscreenrecorder/isrecording.md): Deprecated. A Boolean value that indicates whether the app is currently recording.
- [isMicrophoneEnabled](rpscreenrecorder/ismicrophoneenabled.md): Deprecated. A Boolean value that indicates whether the microphone is currently enabled.
- [isCameraEnabled](rpscreenrecorder/iscameraenabled.md): Deprecated. A Boolean value that indicates whether the camera is currently enabled.
- [cameraPreviewView](rpscreenrecorder/camerapreviewview.md): Deprecated. A view containing the contents of the front-facing camera.
- [cameraPosition](rpscreenrecorder/cameraposition.md): Deprecated. The camera position to use.
- [delegate](rpscreenrecorder/delegate.md): Deprecated. The delegate for the screen recorder.
- [RPScreenRecorderDelegate](rpscreenrecorderdelegate.md): Deprecated. The protocol you implement to receive notifications from the screen recorder.

# RPCameraPosition (Objective-C)

**Framework:** ReplayKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The position of the camera being accessed.

## Declaration

```objectivec
enum RPCameraPosition : NSInteger;
```

## Topics

### Enumeration Cases

- [RPCameraPositionBack](rpcameraposition/back.md): Deprecated. The back camera is used.
- [RPCameraPositionFront](rpcameraposition/front.md): Deprecated. The front camera is used.

## See Also

### Inspecting a Screen Recorder

- [available](rpscreenrecorder/isavailable.md): Deprecated. A Boolean value that indicates whether the screen recorder is available for recording.
- [recording](rpscreenrecorder/isrecording.md): Deprecated. A Boolean value that indicates whether the app is currently recording.
- [microphoneEnabled](rpscreenrecorder/ismicrophoneenabled.md): Deprecated. A Boolean value that indicates whether the microphone is currently enabled.
- [cameraEnabled](rpscreenrecorder/iscameraenabled.md): Deprecated. A Boolean value that indicates whether the camera is currently enabled.
- [cameraPreviewView](rpscreenrecorder/camerapreviewview.md): Deprecated. A view containing the contents of the front-facing camera.
- [cameraPosition](rpscreenrecorder/cameraposition.md): Deprecated. The camera position to use.
- [delegate](rpscreenrecorder/delegate.md): Deprecated. The delegate for the screen recorder.
- [RPScreenRecorderDelegate](rpscreenrecorderdelegate.md): Deprecated. The protocol you implement to receive notifications from the screen recorder.
