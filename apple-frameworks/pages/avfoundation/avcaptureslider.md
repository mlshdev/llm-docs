> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureslider](https://developer.apple.com/documentation/avfoundation/avcaptureslider)

# AVCaptureSlider (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A slider control that selects a value from a bounded range.

## Declaration

```swift
class AVCaptureSlider
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)

<a id="overview"></a>

## Overview

Sliders are appropriate for controls that provide a single float value.

## Topics

### Creating a slider

- [init(\_:symbolName:in:)](avcaptureslider/init%28__symbolname_in_%29.md): Creates a continuous slider control that selects a value from a bounded range.
- [init(\_:symbolName:in:step:)](avcaptureslider/init%28__symbolname_in_step_%29.md): Creates a discrete slider control that selects a stepped value from a bounded range.
- [init(\_:symbolName:values:)](avcaptureslider/init%28__symbolname_values_%29.md): Creates a discrete slider control that selects a value from a list.

### Handling interaction

- [setActionQueue(\_:action:)](avcaptureslider/setactionqueue%28__action_%29.md): Sets the action to perform on the specified dispatch queue when the control’s value changes.

### Accessing the control value

- [value](avcaptureslider/value.md): The current value of the slider.
- [prominentValues](avcaptureslider/prominentvalues-199dz.md): Values in this array may receive unique visual representations or behaviors.
- [localizedValueFormat](avcaptureslider/localizedvalueformat.md): A localized string that defines the presentation of the slider’s value.

### Setting an accessibility identifier

- [accessibilityIdentifier](avcaptureslider/accessibilityidentifier.md): A string identifier for the slider.

### Inspecting presentation attributes

- [symbolName](avcaptureslider/symbolname.md): The name of the SF Symbol that represents this control.
- [localizedTitle](avcaptureslider/localizedtitle.md): A localized title that describes the control’s action.

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
- [AVCaptureSystemExposureBiasSlider](avcapturesystemexposurebiasslider.md): A control that adjusts the exposure bias of a capture device within the system-recommended range.
- [AVCaptureIndexPicker](avcaptureindexpicker.md): A control for selecting from a set of mutually exclusive values by index.

# AVCaptureSlider (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A slider control that selects a value from a bounded range.

## Declaration

```objectivec
@interface AVCaptureSlider : AVCaptureControl
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)

<a id="overview"></a>

## Overview

Sliders are appropriate for controls that provide a single float value.

## Topics

### Creating a slider

- [initWithLocalizedTitle:symbolName:minValue:maxValue:](avcaptureslider/initwithlocalizedtitle_symbolname_minvalue_maxvalue_.md): Creates a continuous slider control that selects a value from a bounded range.
- [initWithLocalizedTitle:symbolName:minValue:maxValue:step:](avcaptureslider/initwithlocalizedtitle_symbolname_minvalue_maxvalue_step_.md): Creates a discrete slider control that selects a stepped value from a bounded range.
- [initWithLocalizedTitle:symbolName:values:](avcaptureslider/initwithlocalizedtitle_symbolname_values_.md): Creates a discrete slider control that selects a value from a list.

### Handling interaction

- [setActionQueue:action:](avcaptureslider/setactionqueue_action_.md): Sets the action to perform on the specified dispatch queue when the slider’s value changes.

### Accessing the control value

- [value](avcaptureslider/value.md): The current value of the slider.
- [prominentValues](avcaptureslider/prominentvalues-7usgc.md): Values in this array may receive unique visual representations or behaviors.
- [localizedValueFormat](avcaptureslider/localizedvalueformat.md): A localized string that defines the presentation of the slider’s value.

### Setting an accessibility identifier

- [accessibilityIdentifier](avcaptureslider/accessibilityidentifier.md): A string identifier for the slider.

### Inspecting presentation attributes

- [symbolName](avcaptureslider/symbolname.md): The name of the SF Symbol that represents this control.
- [localizedTitle](avcaptureslider/localizedtitle.md): A localized title that describes the control’s action.

## Relationships

### Inherits From

- [AVCaptureControl](avcapturecontrol.md)

## See Also

### Capture controls

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md): Provide direct access to your camera app’s features to help people quickly capture the perfect shot.
- [AVCaptureControl](avcapturecontrol.md): An abstract base class for controls that interact with the camera system.
- [AVCaptureSystemZoomSlider](avcapturesystemzoomslider.md): A control that adjusts the video zoom factor of a capture device within the system-recommended range.
- [AVCaptureSystemExposureBiasSlider](avcapturesystemexposurebiasslider.md): A control that adjusts the exposure bias of a capture device within the system-recommended range.
- [AVCaptureIndexPicker](avcaptureindexpicker.md): A control for selecting from a set of mutually exclusive values by index.
