> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdepthdata/cameracalibrationdata](https://developer.apple.com/documentation/avfoundation/avdepthdata/cameracalibrationdata)

# cameraCalibrationData (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The imaging parameters with which this depth data was captured.

## Declaration

```swift
var cameraCalibrationData: AVCameraCalibrationData? { get }
```

<a id="Discussion"></a>

## Discussion

Using depth or disparity map data to render effects into a corresponding image or to perform computer vision tasks requires knowledge of the camera parameters that generated the depth data. Depth data captured by an [AVCaptureDevice](../avcapturedevice.md) object contains camera calibration data that includes such information.

> **Note**

>  Depth data read from a file (see the [init(fromDictionaryRepresentation:)](init%28fromdictionaryrepresentation_%29.md) initializer) or transformed through arbitrary editing of its data map might not contain calibration data.

# cameraCalibrationData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The imaging parameters with which this depth data was captured.

## Declaration

```objectivec
@property (readonly, nullable) AVCameraCalibrationData * cameraCalibrationData;
```

<a id="Discussion"></a>

## Discussion

Using depth or disparity map data to render effects into a corresponding image or to perform computer vision tasks requires knowledge of the camera parameters that generated the depth data. Depth data captured by an [AVCaptureDevice](../avcapturedevice.md) object contains camera calibration data that includes such information.

> **Note**

>  Depth data read from a file (see the [depthDataFromDictionaryRepresentation:error:](init%28fromdictionaryrepresentation_%29.md) initializer) or transformed through arbitrary editing of its data map might not contain calibration data.
