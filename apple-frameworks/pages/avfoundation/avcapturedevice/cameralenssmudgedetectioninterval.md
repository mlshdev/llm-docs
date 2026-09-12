> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/cameralenssmudgedetectioninterval](https://developer.apple.com/documentation/avfoundation/avcapturedevice/cameralenssmudgedetectioninterval)

# cameraLensSmudgeDetectionInterval (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The camera lens smudge detection interval.

## Declaration

```swift
var cameraLensSmudgeDetectionInterval: CMTime { get }
```

<a id="discussion"></a>

## Discussion

[cameraLensSmudgeDetectionInterval](cameralenssmudgedetectioninterval.md) is set by calling [setCameraLensSmudgeDetectionEnabled(\_:detectionInterval:)](setcameralenssmudgedetectionenabled%28__detectioninterval_%29.md). By default, this property returns `kCMTimeInvalid`.

## See Also

### Configuring lens smudge detection

- [isCameraLensSmudgeDetectionEnabled](iscameralenssmudgedetectionenabled.md): Whether camera lens smudge detection is enabled.
- [setCameraLensSmudgeDetectionEnabled(\_:detectionInterval:)](setcameralenssmudgedetectionenabled%28__detectioninterval_%29.md): Specify whether to enable camera lens smudge detection, and the interval time between each run of detections.
- [cameraLensSmudgeDetectionStatus](cameralenssmudgedetectionstatus.md): A value specifying the status of camera lens smudge detection.
- [AVCaptureCameraLensSmudgeDetectionStatus](../avcapturecameralenssmudgedetectionstatus.md): Constants indicating the current camera lens smudge detection status.

# cameraLensSmudgeDetectionInterval (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The camera lens smudge detection interval.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime cameraLensSmudgeDetectionInterval;
```

<a id="discussion"></a>

## Discussion

[cameraLensSmudgeDetectionInterval](cameralenssmudgedetectioninterval.md) is set by calling [setCameraLensSmudgeDetectionEnabled:detectionInterval:](setcameralenssmudgedetectionenabled%28__detectioninterval_%29.md). By default, this property returns `kCMTimeInvalid`.

## See Also

### Configuring lens smudge detection

- [cameraLensSmudgeDetectionEnabled](iscameralenssmudgedetectionenabled.md): Whether camera lens smudge detection is enabled.
- [setCameraLensSmudgeDetectionEnabled:detectionInterval:](setcameralenssmudgedetectionenabled%28__detectioninterval_%29.md): Specify whether to enable camera lens smudge detection, and the interval time between each run of detections.
- [cameraLensSmudgeDetectionStatus](cameralenssmudgedetectionstatus.md): A value specifying the status of camera lens smudge detection.
- [AVCaptureCameraLensSmudgeDetectionStatus](../avcapturecameralenssmudgedetectionstatus.md): Constants indicating the current camera lens smudge detection status.
