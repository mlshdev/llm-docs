> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesystemzoomslider](https://developer.apple.com/documentation/avfoundation/avcapturesystemzoomslider)

# AVCaptureSystemZoomSlider (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A control that adjusts the video zoom factor of a capture device within the system-recommended range.

## Declaration

```swift
class AVCaptureSystemZoomSlider
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)

<a id="overview"></a>

## Overview

The system sets the slider’s range to the value of the [systemRecommendedVideoZoomRange](avcapturedevice/format/systemrecommendedvideozoomrange.md) property of the device’s active format. If a device’s [activeFormat](avcapturedevice/activeformat.md) value changes, the slider updates its range to the new format’s recommendation.

To use this control, add it to the capture session by calling the session’s [addControl(\_:)](avcapturesession/addcontrol%28__%29.md) method.

## Topics

### Creating a zoom slider

- [init(device:)](avcapturesystemzoomslider/init%28device_%29.md): Creates a slider to control the video zoom factor of a capture device.
- [init(device:action:)](avcapturesystemzoomslider/init%28device_action_%29.md): Creates a slider to control the zoom level of the specified capture device with an action to respond to zoom changes.

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
- [AVCaptureSystemExposureBiasSlider](avcapturesystemexposurebiasslider.md): A control that adjusts the exposure bias of a capture device within the system-recommended range.
- [AVCaptureSlider](avcaptureslider.md): A slider control that selects a value from a bounded range.
- [AVCaptureIndexPicker](avcaptureindexpicker.md): A control for selecting from a set of mutually exclusive values by index.

# AVCaptureSystemZoomSlider (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A control that adjusts the video zoom factor of a capture device within the system-recommended range.

## Declaration

```objectivec
@interface AVCaptureSystemZoomSlider : AVCaptureControl
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)

<a id="overview"></a>

## Overview

The system sets the slider’s range to the value of the [systemRecommendedVideoZoomRange](avcapturedevice/format/systemrecommendedvideozoomrange.md) property of the device’s active format. If a device’s [activeFormat](avcapturedevice/activeformat.md) value changes, the slider updates its range to the new format’s recommendation.

To use this control, add it to the capture session by calling the session’s [addControl:](avcapturesession/addcontrol%28__%29.md) method.

## Topics

### Creating a zoom slider

- [initWithDevice:](avcapturesystemzoomslider/init%28device_%29.md): Creates a slider to control the video zoom factor of a capture device.
- [initWithDevice:action:](avcapturesystemzoomslider/init%28device_action_%29.md): Creates a slider to control the zoom level of the specified capture device with an action to respond to zoom changes.

## Relationships

### Inherits From

- [AVCaptureControl](avcapturecontrol.md)

## See Also

### Capture controls

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md): Provide direct access to your camera app’s features to help people quickly capture the perfect shot.
- [AVCaptureControl](avcapturecontrol.md): An abstract base class for controls that interact with the camera system.
- [AVCaptureSystemExposureBiasSlider](avcapturesystemexposurebiasslider.md): A control that adjusts the exposure bias of a capture device within the system-recommended range.
- [AVCaptureSlider](avcaptureslider.md): A slider control that selects a value from a bounded range.
- [AVCaptureIndexPicker](avcaptureindexpicker.md): A control for selecting from a set of mutually exclusive values by index.
