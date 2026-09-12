> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/iscameralenssmudgedetectionenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/iscameralenssmudgedetectionenabled)

# isCameraLensSmudgeDetectionEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether camera lens smudge detection is enabled.

## Declaration

```swift
var isCameraLensSmudgeDetectionEnabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

You enable lens smudge detection by calling [setCameraLensSmudgeDetectionEnabled(\_:detectionInterval:)](setcameralenssmudgedetectionenabled%28__detectioninterval_%29.md). By default, this property is returns `false`.

## See Also

### Configuring lens smudge detection

- [setCameraLensSmudgeDetectionEnabled(\_:detectionInterval:)](setcameralenssmudgedetectionenabled%28__detectioninterval_%29.md): Specify whether to enable camera lens smudge detection, and the interval time between each run of detections.
- [cameraLensSmudgeDetectionInterval](cameralenssmudgedetectioninterval.md): The camera lens smudge detection interval.
- [cameraLensSmudgeDetectionStatus](cameralenssmudgedetectionstatus.md): A value specifying the status of camera lens smudge detection.
- [AVCaptureCameraLensSmudgeDetectionStatus](../avcapturecameralenssmudgedetectionstatus.md): Constants indicating the current camera lens smudge detection status.

# cameraLensSmudgeDetectionEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether camera lens smudge detection is enabled.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCameraLensSmudgeDetectionEnabled) BOOL cameraLensSmudgeDetectionEnabled;
```

<a id="discussion"></a>

## Discussion

You enable lens smudge detection by calling [setCameraLensSmudgeDetectionEnabled:detectionInterval:](setcameralenssmudgedetectionenabled%28__detectioninterval_%29.md). By default, this property is returns `false`.

## See Also

### Configuring lens smudge detection

- [setCameraLensSmudgeDetectionEnabled:detectionInterval:](setcameralenssmudgedetectionenabled%28__detectioninterval_%29.md): Specify whether to enable camera lens smudge detection, and the interval time between each run of detections.
- [cameraLensSmudgeDetectionInterval](cameralenssmudgedetectioninterval.md): The camera lens smudge detection interval.
- [cameraLensSmudgeDetectionStatus](cameralenssmudgedetectionstatus.md): A value specifying the status of camera lens smudge detection.
- [AVCaptureCameraLensSmudgeDetectionStatus](../avcapturecameralenssmudgedetectionstatus.md): Constants indicating the current camera lens smudge detection status.
