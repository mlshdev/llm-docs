> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesystemexposurebiasslider](https://developer.apple.com/documentation/avfoundation/avcapturesystemexposurebiasslider)

# AVCaptureSystemExposureBiasSlider (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A control that adjusts the exposure bias of a capture device within the system-recommended range.

## Declaration

```swift
class AVCaptureSystemExposureBiasSlider
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)

<a id="overview"></a>

## Overview

This control defines its range by querying the [systemRecommendedExposureBiasRange](avcapturedevice/format/systemrecommendedexposurebiasrange.md) property of the device’s active format. If a device’s [activeFormat](avcapturedevice/activeformat.md) value changes, the slider updates its range with the new format’s system-recommended value.

To use this control, add it to the capture session by calling the session’s [addControl(\_:)](avcapturesession/addcontrol%28__%29.md) method.

## Topics

### Creating an exposure bias slider

- [init(device:)](avcapturesystemexposurebiasslider/init%28device_%29.md): Creates a slider to control the exposure bias of the specified capture device.
- [init(device:action:)](avcapturesystemexposurebiasslider/init%28device_action_%29.md): Creates a slider to control the exposure bias of the specified capture device with an action to respond to exposure bias changes.

## Relationships

### Inherits From

- [AVCaptureControl](avcapturecontrol.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Capture controls

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md): Provide direct access to your camera app’s features to help people quickly capture the perfect shot.
- [AVCaptureControl](avcapturecontrol.md): An abstract base class for controls that interact with the camera system.
- [AVCaptureSystemZoomSlider](avcapturesystemzoomslider.md): A control that adjusts the video zoom factor of a capture device within the system-recommended range.
- [AVCaptureSlider](avcaptureslider.md): A slider control that selects a value from a bounded range.
- [AVCaptureIndexPicker](avcaptureindexpicker.md): A control for selecting from a set of mutually exclusive values by index.

# AVCaptureSystemExposureBiasSlider (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A control that adjusts the exposure bias of a capture device within the system-recommended range.

## Declaration

```objectivec
@interface AVCaptureSystemExposureBiasSlider : AVCaptureControl
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)

<a id="overview"></a>

## Overview

This control defines its range by querying the [systemRecommendedExposureBiasRange](avcapturedevice/format/systemrecommendedexposurebiasrange.md) property of the device’s active format. If a device’s [activeFormat](avcapturedevice/activeformat.md) value changes, the slider updates its range with the new format’s system-recommended value.

To use this control, add it to the capture session by calling the session’s [addControl:](avcapturesession/addcontrol%28__%29.md) method.

## Topics

### Creating an exposure bias slider

- [initWithDevice:](avcapturesystemexposurebiasslider/init%28device_%29.md): Creates a slider to control the exposure bias of the specified capture device.
- [initWithDevice:action:](avcapturesystemexposurebiasslider/init%28device_action_%29.md): Creates a slider to control the exposure bias of the specified capture device with an action to respond to exposure bias changes.

## Relationships

### Inherits From

- [AVCaptureControl](avcapturecontrol.md)

## See Also

### Capture controls

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md): Provide direct access to your camera app’s features to help people quickly capture the perfect shot.
- [AVCaptureControl](avcapturecontrol.md): An abstract base class for controls that interact with the camera system.
- [AVCaptureSystemZoomSlider](avcapturesystemzoomslider.md): A control that adjusts the video zoom factor of a capture device within the system-recommended range.
- [AVCaptureSlider](avcaptureslider.md): A slider control that selects a value from a bounded range.
- [AVCaptureIndexPicker](avcaptureindexpicker.md): A control for selecting from a set of mutually exclusive values by index.
