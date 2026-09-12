> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isdualcameradualphotodeliveryenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isdualcameradualphotodeliveryenabled)

# isDualCameraDualPhotoDeliveryEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that specifies whether to configure the capture pipeline for simultaneous photo capture with both cameras on a dual-camera device.

## Declaration

```swift
var isDualCameraDualPhotoDeliveryEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Enabling this property (on a supported device) allows the capture output to deliver separate images from both the wide-angle and telephoto cameras in a single capture.

Dual photo delivery requires that a capture session set up its internal rendering pipeline differently. If you intend to capture with dual photo delivery at all, set this property to [true](https://developer.apple.com/documentation/swift/true) before calling the [AVCaptureSession](../avcapturesession.md) [startRunning()](../avcapturesession/startrunning%28%29.md) method. Changing this property while the session is running requires a lengthy reconfiguration of the capture render pipeline: Live Photo captures in progress will end immediately, unfulfilled photo requests will abort, and video preview will temporarily freeze.

You must enable this option before initiating a photo capture with the [isDualCameraDualPhotoDeliveryEnabled](../avcapturephotosettings/isdualcameradualphotodeliveryenabled.md) property of your photo settings object set to [true](https://developer.apple.com/documentation/swift/true). However, after you’ve enabled this option, you are free to issue photo capture requests both with and without dual photo delivery.

## See Also

### Configuring dual camera capture

- [isDualCameraFusionSupported](isdualcamerafusionsupported.md): Deprecated. A Boolean value indicating whether the capture output currently supports automatically combining image data on a dual camera device.
- [isDualCameraDualPhotoDeliverySupported](isdualcameradualphotodeliverysupported.md): Deprecated. A Boolean value indicating whether the capture output currently supports simultaneous photo capture with both cameras on a dual-camera device.

# dualCameraDualPhotoDeliveryEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value that specifies whether to configure the capture pipeline for simultaneous photo capture with both cameras on a dual-camera device.

## Declaration

```objectivec
@property (nonatomic, getter=isDualCameraDualPhotoDeliveryEnabled) BOOL dualCameraDualPhotoDeliveryEnabled;
```

<a id="Discussion"></a>

## Discussion

Enabling this property (on a supported device) allows the capture output to deliver separate images from both the wide-angle and telephoto cameras in a single capture.

Dual photo delivery requires that a capture session set up its internal rendering pipeline differently. If you intend to capture with dual photo delivery at all, set this property to [true](https://developer.apple.com/documentation/swift/true) before calling the [AVCaptureSession](../avcapturesession.md) [startRunning](../avcapturesession/startrunning%28%29.md) method. Changing this property while the session is running requires a lengthy reconfiguration of the capture render pipeline: Live Photo captures in progress will end immediately, unfulfilled photo requests will abort, and video preview will temporarily freeze.

You must enable this option before initiating a photo capture with the [dualCameraDualPhotoDeliveryEnabled](../avcapturephotosettings/isdualcameradualphotodeliveryenabled.md) property of your photo settings object set to [true](https://developer.apple.com/documentation/swift/true). However, after you’ve enabled this option, you are free to issue photo capture requests both with and without dual photo delivery.

## See Also

### Configuring dual camera capture

- [dualCameraFusionSupported](isdualcamerafusionsupported.md): Deprecated. A Boolean value indicating whether the capture output currently supports automatically combining image data on a dual camera device.
- [dualCameraDualPhotoDeliverySupported](isdualcameradualphotodeliverysupported.md): Deprecated. A Boolean value indicating whether the capture output currently supports simultaneous photo capture with both cameras on a dual-camera device.
