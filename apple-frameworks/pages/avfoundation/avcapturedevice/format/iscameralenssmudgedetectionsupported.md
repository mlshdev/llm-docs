> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/iscameralenssmudgedetectionsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/iscameralenssmudgedetectionsupported)

# isCameraLensSmudgeDetectionSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether camera lens smudge detection is supported.

## Declaration

```swift
var isCameraLensSmudgeDetectionSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property returns `true` if the session’s current configuration supports lens smudge detection. When switching cameras or formats, this property may change. When this property changes from `true` to `false`, [isCameraLensSmudgeDetectionEnabled](../iscameralenssmudgedetectionenabled.md) also reverts to `false`. If you opt in for lens smudge detection and then change configurations, you should set [isCameraLensSmudgeDetectionEnabled](../iscameralenssmudgedetectionenabled.md) to `true` again.

# cameraLensSmudgeDetectionSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether camera lens smudge detection is supported.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCameraLensSmudgeDetectionSupported) BOOL cameraLensSmudgeDetectionSupported;
```

<a id="discussion"></a>

## Discussion

This property returns `true` if the session’s current configuration supports lens smudge detection. When switching cameras or formats, this property may change. When this property changes from `true` to `false`, [cameraLensSmudgeDetectionEnabled](../iscameralenssmudgedetectionenabled.md) also reverts to `false`. If you opt in for lens smudge detection and then change configurations, you should set [cameraLensSmudgeDetectionEnabled](../iscameralenssmudgedetectionenabled.md) to `true` again.
