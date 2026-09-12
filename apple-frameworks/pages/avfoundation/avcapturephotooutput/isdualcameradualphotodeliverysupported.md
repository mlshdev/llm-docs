> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isdualcameradualphotodeliverysupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isdualcameradualphotodeliverysupported)

# isDualCameraDualPhotoDeliverySupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value indicating whether the capture output currently supports simultaneous photo capture with both cameras on a dual-camera device.

## Declaration

```swift
var isDualCameraDualPhotoDeliverySupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Not all devices and capture formats support dual camera capture. This property’s value can change if the [sessionPreset](../avcapturesession/sessionpreset.md) property of the current capture session or the [activeFormat](../avcapturedevice/activeformat.md) property of the underlying capture device changes. If a camera or format change causes this property’s value to become [false](https://developer.apple.com/documentation/swift/false), the [isDualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md) property’s value also becomes [false](https://developer.apple.com/documentation/swift/false).

This property is key-value observable.

## See Also

### Configuring dual camera capture

- [isDualCameraFusionSupported](isdualcamerafusionsupported.md): Deprecated. A Boolean value indicating whether the capture output currently supports automatically combining image data on a dual camera device.
- [isDualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that specifies whether to configure the capture pipeline for simultaneous photo capture with both cameras on a dual-camera device.

# dualCameraDualPhotoDeliverySupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value indicating whether the capture output currently supports simultaneous photo capture with both cameras on a dual-camera device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDualCameraDualPhotoDeliverySupported) BOOL dualCameraDualPhotoDeliverySupported;
```

<a id="Discussion"></a>

## Discussion

Not all devices and capture formats support dual camera capture. This property’s value can change if the [sessionPreset](../avcapturesession/sessionpreset.md) property of the current capture session or the [activeFormat](../avcapturedevice/activeformat.md) property of the underlying capture device changes. If a camera or format change causes this property’s value to become [false](https://developer.apple.com/documentation/swift/false), the [dualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md) property’s value also becomes [false](https://developer.apple.com/documentation/swift/false).

This property is key-value observable.

## See Also

### Configuring dual camera capture

- [dualCameraFusionSupported](isdualcamerafusionsupported.md): Deprecated. A Boolean value indicating whether the capture output currently supports automatically combining image data on a dual camera device.
- [dualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that specifies whether to configure the capture pipeline for simultaneous photo capture with both cameras on a dual-camera device.
