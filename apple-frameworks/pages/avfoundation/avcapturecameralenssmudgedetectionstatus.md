> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturecameralenssmudgedetectionstatus](https://developer.apple.com/documentation/avfoundation/avcapturecameralenssmudgedetectionstatus)

# AVCaptureCameraLensSmudgeDetectionStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Constants indicating the current camera lens smudge detection status.

## Declaration

```swift
enum AVCaptureCameraLensSmudgeDetectionStatus
```

## Topics

### Status values

- [AVCaptureCameraLensSmudgeDetectionStatus.disabled](avcapturecameralenssmudgedetectionstatus/disabled.md): Indicates that the detection is not enabled.
- [AVCaptureCameraLensSmudgeDetectionStatus.smudgeNotDetected](avcapturecameralenssmudgedetectionstatus/smudgenotdetected.md): Indicates that the most recent detection found no smudge on the camera lens.
- [AVCaptureCameraLensSmudgeDetectionStatus.smudged](avcapturecameralenssmudgedetectionstatus/smudged.md): Indicates that the most recent detection found the camera lens to be smudged.
- [AVCaptureCameraLensSmudgeDetectionStatus.unknown](avcapturecameralenssmudgedetectionstatus/unknown.md): Indicates that the detection result has not settled, commonly caused by excessive camera movement or the content of the scene.

### Initializers

- [init(rawValue:)](avcapturecameralenssmudgedetectionstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring lens smudge detection

- [isCameraLensSmudgeDetectionEnabled](avcapturedevice/iscameralenssmudgedetectionenabled.md): Whether camera lens smudge detection is enabled.
- [setCameraLensSmudgeDetectionEnabled(\_:detectionInterval:)](avcapturedevice/setcameralenssmudgedetectionenabled%28__detectioninterval_%29.md): Specify whether to enable camera lens smudge detection, and the interval time between each run of detections.
- [cameraLensSmudgeDetectionInterval](avcapturedevice/cameralenssmudgedetectioninterval.md): The camera lens smudge detection interval.
- [cameraLensSmudgeDetectionStatus](avcapturedevice/cameralenssmudgedetectionstatus.md): A value specifying the status of camera lens smudge detection.

# AVCaptureCameraLensSmudgeDetectionStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Constants indicating the current camera lens smudge detection status.

## Declaration

```objectivec
enum AVCaptureCameraLensSmudgeDetectionStatus : NSInteger;
```

## Topics

### Status values

- [AVCaptureCameraLensSmudgeDetectionStatusDisabled](avcapturecameralenssmudgedetectionstatus/disabled.md): Indicates that the detection is not enabled.
- [AVCaptureCameraLensSmudgeDetectionStatusSmudgeNotDetected](avcapturecameralenssmudgedetectionstatus/smudgenotdetected.md): Indicates that the most recent detection found no smudge on the camera lens.
- [AVCaptureCameraLensSmudgeDetectionStatusSmudged](avcapturecameralenssmudgedetectionstatus/smudged.md): Indicates that the most recent detection found the camera lens to be smudged.
- [AVCaptureCameraLensSmudgeDetectionStatusUnknown](avcapturecameralenssmudgedetectionstatus/unknown.md): Indicates that the detection result has not settled, commonly caused by excessive camera movement or the content of the scene.

## See Also

### Configuring lens smudge detection

- [cameraLensSmudgeDetectionEnabled](avcapturedevice/iscameralenssmudgedetectionenabled.md): Whether camera lens smudge detection is enabled.
- [setCameraLensSmudgeDetectionEnabled:detectionInterval:](avcapturedevice/setcameralenssmudgedetectionenabled%28__detectioninterval_%29.md): Specify whether to enable camera lens smudge detection, and the interval time between each run of detections.
- [cameraLensSmudgeDetectionInterval](avcapturedevice/cameralenssmudgedetectioninterval.md): The camera lens smudge detection interval.
- [cameraLensSmudgeDetectionStatus](avcapturedevice/cameralenssmudgedetectionstatus.md): A value specifying the status of camera lens smudge detection.
