> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isdualcamerafusionsupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isdualcamerafusionsupported)

# isDualCameraFusionSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ (deprecated in 13.0) · iPadOS 10.2+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value indicating whether the capture output currently supports automatically combining image data on a dual camera device.

## Declaration

```swift
var isDualCameraFusionSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

On devices equipped with a dual camera, image fusion combines samples from both cameras to produce a higher quality image.

To capture a photo with image fusion, set the [isAutoDualCameraFusionEnabled](../avcapturephotosettings/isautodualcamerafusionenabled.md) property of your photo settings object. If a device does not support image fusion, setting the [isAutoDualCameraFusionEnabled](../avcapturephotosettings/isautodualcamerafusionenabled.md) property has no effect (that is, the resolved [isDualCameraFusionEnabled](../avcaptureresolvedphotosettings/isdualcamerafusionenabled.md) setting will always be false).

> **Note**

>  This property’s value can change if the [sessionPreset](../avcapturesession/sessionpreset.md) property of the current capture session or the [activeFormat](../avcapturedevice/activeformat.md) property of the underlying capture device changes.

This property supports key-value observing.

## See Also

### Configuring dual camera capture

- [isDualCameraDualPhotoDeliverySupported](isdualcameradualphotodeliverysupported.md): Deprecated. A Boolean value indicating whether the capture output currently supports simultaneous photo capture with both cameras on a dual-camera device.
- [isDualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that specifies whether to configure the capture pipeline for simultaneous photo capture with both cameras on a dual-camera device.

# dualCameraFusionSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ (deprecated in 13.0) · iPadOS 10.2+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value indicating whether the capture output currently supports automatically combining image data on a dual camera device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDualCameraFusionSupported) BOOL dualCameraFusionSupported;
```

<a id="Discussion"></a>

## Discussion

On devices equipped with a dual camera, image fusion combines samples from both cameras to produce a higher quality image.

To capture a photo with image fusion, set the [autoDualCameraFusionEnabled](../avcapturephotosettings/isautodualcamerafusionenabled.md) property of your photo settings object. If a device does not support image fusion, setting the [autoDualCameraFusionEnabled](../avcapturephotosettings/isautodualcamerafusionenabled.md) property has no effect (that is, the resolved [dualCameraFusionEnabled](../avcaptureresolvedphotosettings/isdualcamerafusionenabled.md) setting will always be false).

> **Note**

>  This property’s value can change if the [sessionPreset](../avcapturesession/sessionpreset.md) property of the current capture session or the [activeFormat](../avcapturedevice/activeformat.md) property of the underlying capture device changes.

This property supports key-value observing.

## See Also

### Configuring dual camera capture

- [dualCameraDualPhotoDeliverySupported](isdualcameradualphotodeliverysupported.md): Deprecated. A Boolean value indicating whether the capture output currently supports simultaneous photo capture with both cameras on a dual-camera device.
- [dualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that specifies whether to configure the capture pipeline for simultaneous photo capture with both cameras on a dual-camera device.
