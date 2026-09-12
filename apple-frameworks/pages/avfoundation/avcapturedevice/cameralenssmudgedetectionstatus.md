> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/cameralenssmudgedetectionstatus](https://developer.apple.com/documentation/avfoundation/avcapturedevice/cameralenssmudgedetectionstatus)

# cameraLensSmudgeDetectionStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A value specifying the status of camera lens smudge detection.

## Declaration

```swift
var cameraLensSmudgeDetectionStatus: AVCaptureCameraLensSmudgeDetectionStatus { get }
```

<a id="discussion"></a>

## Discussion

During initial detection execution, [cameraLensSmudgeDetectionStatus](cameralenssmudgedetectionstatus.md) returns `AVCaptureCameraLensSmudgeDetectionStatusUnknown` until the detection result settles. Once a detection result is produced, [cameraLensSmudgeDetectionStatus](cameralenssmudgedetectionstatus.md) returns the most recent detection result. This property can be key-value observed.

## See Also

### Configuring lens smudge detection

- [isCameraLensSmudgeDetectionEnabled](iscameralenssmudgedetectionenabled.md): Whether camera lens smudge detection is enabled.
- [setCameraLensSmudgeDetectionEnabled(\_:detectionInterval:)](setcameralenssmudgedetectionenabled%28__detectioninterval_%29.md): Specify whether to enable camera lens smudge detection, and the interval time between each run of detections.
- [cameraLensSmudgeDetectionInterval](cameralenssmudgedetectioninterval.md): The camera lens smudge detection interval.
- [AVCaptureCameraLensSmudgeDetectionStatus](../avcapturecameralenssmudgedetectionstatus.md): Constants indicating the current camera lens smudge detection status.

# cameraLensSmudgeDetectionStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A value specifying the status of camera lens smudge detection.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureCameraLensSmudgeDetectionStatus cameraLensSmudgeDetectionStatus;
```

<a id="discussion"></a>

## Discussion

During initial detection execution, [cameraLensSmudgeDetectionStatus](cameralenssmudgedetectionstatus.md) returns `AVCaptureCameraLensSmudgeDetectionStatusUnknown` until the detection result settles. Once a detection result is produced, [cameraLensSmudgeDetectionStatus](cameralenssmudgedetectionstatus.md) returns the most recent detection result. This property can be key-value observed.

## See Also

### Configuring lens smudge detection

- [cameraLensSmudgeDetectionEnabled](iscameralenssmudgedetectionenabled.md): Whether camera lens smudge detection is enabled.
- [setCameraLensSmudgeDetectionEnabled:detectionInterval:](setcameralenssmudgedetectionenabled%28__detectioninterval_%29.md): Specify whether to enable camera lens smudge detection, and the interval time between each run of detections.
- [cameraLensSmudgeDetectionInterval](cameralenssmudgedetectioninterval.md): The camera lens smudge detection interval.
- [AVCaptureCameraLensSmudgeDetectionStatus](../avcapturecameralenssmudgedetectionstatus.md): Constants indicating the current camera lens smudge detection status.
