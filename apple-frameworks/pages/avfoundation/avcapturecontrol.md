> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturecontrol](https://developer.apple.com/documentation/avfoundation/avcapturecontrol)

# AVCaptureControl (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

An abstract base class for controls that interact with the camera system.

## Declaration

```swift
class AVCaptureControl
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)

<a id="overview"></a>

## Overview

Capture controls provide the interface for interacting with the camera system from the Camera Control button on iPhone 16 devices. The framework provides several concrete subclasses of this class that allow apps to access built-in functionality and define custom controls.

## Topics

### Setting the enabled state

- [isEnabled](avcapturecontrol/isenabled.md): A Boolean value that indicates whether this control supports user interaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVCaptureIndexPicker](avcaptureindexpicker.md)
- [AVCaptureSlider](avcaptureslider.md)
- [AVCaptureSystemExposureBiasSlider](avcapturesystemexposurebiasslider.md)
- [AVCaptureSystemZoomSlider](avcapturesystemzoomslider.md)

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
- [AVCaptureSystemZoomSlider](avcapturesystemzoomslider.md): A control that adjusts the video zoom factor of a capture device within the system-recommended range.
- [AVCaptureSystemExposureBiasSlider](avcapturesystemexposurebiasslider.md): A control that adjusts the exposure bias of a capture device within the system-recommended range.
- [AVCaptureSlider](avcaptureslider.md): A slider control that selects a value from a bounded range.
- [AVCaptureIndexPicker](avcaptureindexpicker.md): A control for selecting from a set of mutually exclusive values by index.

# AVCaptureControl (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

An abstract base class for controls that interact with the camera system.

## Declaration

```objectivec
@interface AVCaptureControl : NSObject
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)

<a id="overview"></a>

## Overview

Capture controls provide the interface for interacting with the camera system from the Camera Control button on iPhone 16 devices. The framework provides several concrete subclasses of this class that allow apps to access built-in functionality and define custom controls.

## Topics

### Setting the enabled state

- [enabled](avcapturecontrol/isenabled.md): A Boolean value that indicates whether this control supports user interaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVCaptureIndexPicker](avcaptureindexpicker.md)
- [AVCaptureSlider](avcaptureslider.md)
- [AVCaptureSystemExposureBiasSlider](avcapturesystemexposurebiasslider.md)
- [AVCaptureSystemZoomSlider](avcapturesystemzoomslider.md)

## See Also

### Capture controls

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md): Provide direct access to your camera app’s features to help people quickly capture the perfect shot.
- [AVCaptureSystemZoomSlider](avcapturesystemzoomslider.md): A control that adjusts the video zoom factor of a capture device within the system-recommended range.
- [AVCaptureSystemExposureBiasSlider](avcapturesystemexposurebiasslider.md): A control that adjusts the exposure bias of a capture device within the system-recommended range.
- [AVCaptureSlider](avcaptureslider.md): A slider control that selects a value from a bounded range.
- [AVCaptureIndexPicker](avcaptureindexpicker.md): A control for selecting from a set of mutually exclusive values by index.
