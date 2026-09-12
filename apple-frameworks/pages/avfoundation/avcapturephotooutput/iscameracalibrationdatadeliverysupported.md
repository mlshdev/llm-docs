> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/iscameracalibrationdatadeliverysupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/iscameracalibrationdatadeliverysupported)

# isCameraCalibrationDataDeliverySupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the photo output currently supports the delivery of camera calibration data.

## Declaration

```swift
var isCameraCalibrationDataDeliverySupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

A photo output can deliver camera calibration data only when it’s [isVirtualDeviceConstituentPhotoDeliveryEnabled](isvirtualdeviceconstituentphotodeliveryenabled.md) property is `true` and its [isContentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md) property is `false`. Additionally, the source capture device’s [isGeometricDistortionCorrectionEnabled](../avcapturedevice/isgeometricdistortioncorrectionenabled.md) property must be `false`.

This property is key-value observable.

# cameraCalibrationDataDeliverySupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the photo output currently supports the delivery of camera calibration data.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCameraCalibrationDataDeliverySupported) BOOL cameraCalibrationDataDeliverySupported;
```

<a id="discussion"></a>

## Discussion

A photo output can deliver camera calibration data only when it’s [virtualDeviceConstituentPhotoDeliveryEnabled](isvirtualdeviceconstituentphotodeliveryenabled.md) property is `true` and its [contentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md) property is `false`. Additionally, the source capture device’s [geometricDistortionCorrectionEnabled](../avcapturedevice/isgeometricdistortioncorrectionenabled.md) property must be `false`.

This property is key-value observable.
