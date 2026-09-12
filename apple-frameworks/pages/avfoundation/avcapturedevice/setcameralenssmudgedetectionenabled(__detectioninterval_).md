> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/setcameralenssmudgedetectionenabled(_:detectioninterval:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/setcameralenssmudgedetectionenabled(_:detectioninterval:))

# setCameraLensSmudgeDetectionEnabled(\_:detectionInterval:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Specify whether to enable camera lens smudge detection, and the interval time between each run of detections.

## Declaration

```swift
func setCameraLensSmudgeDetectionEnabled(_ cameraLensSmudgeDetectionEnabled: Bool, detectionInterval: CMTime)
```

## Parameters

- `cameraLensSmudgeDetectionEnabled`: Specify whether camera lens smudge detection should be enabled.
- `detectionInterval`: The detection running interval if detection is enabled.

<a id="discussion"></a>

## Discussion

Each run of detection processes frames over a short period, and produces one detection result. Use `detectionInterval` to specify the interval time between each run of detections. For example, when [isCameraLensSmudgeDetectionEnabled](iscameralenssmudgedetectionenabled.md) is set to `true` and `detectionInterval` is set to 1 minute, detection runs once per minute, and updates [AVCaptureCameraLensSmudgeDetectionStatus](../avcapturecameralenssmudgedetectionstatus.md). If `detectionInterval` is set to `kCMTimeInvalid`, detection runs only once after the session starts. If `detectionInterval` is set to `kCMTimeZero`, detection runs continuously.

[AVCaptureDevice](../avcapturedevice.md) throws an `NSInvalidArgumentException` if the [isCameraLensSmudgeDetectionSupported](format/iscameralenssmudgedetectionsupported.md) property on the current active format returns `false`. Enabling detection requires a lengthy reconfiguration of the capture render pipeline, so you should enable detection before calling [startRunning()](../avcapturesession/startrunning%28%29.md) or within [beginConfiguration()](../avcapturesession/beginconfiguration%28%29.md) and [commitConfiguration()](../avcapturesession/commitconfiguration%28%29.md) while running.

## See Also

### Configuring lens smudge detection

- [isCameraLensSmudgeDetectionEnabled](iscameralenssmudgedetectionenabled.md): Whether camera lens smudge detection is enabled.
- [cameraLensSmudgeDetectionInterval](cameralenssmudgedetectioninterval.md): The camera lens smudge detection interval.
- [cameraLensSmudgeDetectionStatus](cameralenssmudgedetectionstatus.md): A value specifying the status of camera lens smudge detection.
- [AVCaptureCameraLensSmudgeDetectionStatus](../avcapturecameralenssmudgedetectionstatus.md): Constants indicating the current camera lens smudge detection status.

# setCameraLensSmudgeDetectionEnabled:detectionInterval: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Specify whether to enable camera lens smudge detection, and the interval time between each run of detections.

## Declaration

```objectivec
- (void) setCameraLensSmudgeDetectionEnabled:(BOOL) cameraLensSmudgeDetectionEnabled detectionInterval:(CMTime) detectionInterval;
```

## Parameters

- `cameraLensSmudgeDetectionEnabled`: Specify whether camera lens smudge detection should be enabled.
- `detectionInterval`: The detection running interval if detection is enabled.

<a id="discussion"></a>

## Discussion

Each run of detection processes frames over a short period, and produces one detection result. Use `detectionInterval` to specify the interval time between each run of detections. For example, when [cameraLensSmudgeDetectionEnabled](iscameralenssmudgedetectionenabled.md) is set to `true` and `detectionInterval` is set to 1 minute, detection runs once per minute, and updates [AVCaptureCameraLensSmudgeDetectionStatus](../avcapturecameralenssmudgedetectionstatus.md). If `detectionInterval` is set to `kCMTimeInvalid`, detection runs only once after the session starts. If `detectionInterval` is set to `kCMTimeZero`, detection runs continuously.

[AVCaptureDevice](../avcapturedevice.md) throws an `NSInvalidArgumentException` if the [cameraLensSmudgeDetectionSupported](format/iscameralenssmudgedetectionsupported.md) property on the current active format returns `false`. Enabling detection requires a lengthy reconfiguration of the capture render pipeline, so you should enable detection before calling [startRunning](../avcapturesession/startrunning%28%29.md) or within [beginConfiguration](../avcapturesession/beginconfiguration%28%29.md) and [commitConfiguration](../avcapturesession/commitconfiguration%28%29.md) while running.

## See Also

### Configuring lens smudge detection

- [cameraLensSmudgeDetectionEnabled](iscameralenssmudgedetectionenabled.md): Whether camera lens smudge detection is enabled.
- [cameraLensSmudgeDetectionInterval](cameralenssmudgedetectioninterval.md): The camera lens smudge detection interval.
- [cameraLensSmudgeDetectionStatus](cameralenssmudgedetectionstatus.md): A value specifying the status of camera lens smudge detection.
- [AVCaptureCameraLensSmudgeDetectionStatus](../avcapturecameralenssmudgedetectionstatus.md): Constants indicating the current camera lens smudge detection status.
