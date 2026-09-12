> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureindexpicker](https://developer.apple.com/documentation/avfoundation/avcaptureindexpicker)

# AVCaptureIndexPicker (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A control for selecting from a set of mutually exclusive values by index.

## Declaration

```swift
class AVCaptureIndexPicker
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)

<a id="overview"></a>

## Overview

Index pickers are appropriate for controls that provide an indexed container of values.

## Topics

### Creating an index picker

- [init(\_:symbolName:numberOfIndexes:)](avcaptureindexpicker/init%28__symbolname_numberofindexes_%29.md): Creates a control to pick a value from the specified number of indexes.
- [init(\_:symbolName:numberOfIndexes:localizedTitleTransform:)](avcaptureindexpicker/init%28__symbolname_numberofindexes_localizedtitletransform_%29.md): Creates a control to pick a value from the specified number of indices.
- [init(\_:symbolName:localizedIndexTitles:)](avcaptureindexpicker/init%28__symbolname_localizedindextitles_%29.md): Creates an object to select an index from a set of values.

### Handling interaction

- [setActionQueue(\_:action:)](avcaptureindexpicker/setactionqueue%28__action_%29.md): Sets the action to perform on the specified dispatch queue when the control’s value changes.

### Accessing the control value

- [selectedIndex](avcaptureindexpicker/selectedindex.md): The currently selected index.
- [numberOfIndexes](avcaptureindexpicker/numberofindexes.md): The number of index values the control provides.

### Setting an accessibility identifier

- [accessibilityIdentifier](avcaptureindexpicker/accessibilityidentifier.md): A string identifier for this control.

### Inspecting presentation attributes

- [symbolName](avcaptureindexpicker/symbolname.md): The name of the SF Symbol that represents this control.
- [localizedTitle](avcaptureindexpicker/localizedtitle.md): A localized title that describes the control’s action.
- [localizedIndexTitles](avcaptureindexpicker/localizedindextitles.md): The titles to present for each index.

### Initializers

- [init(localizedTitle:symbolName:localizedIndexTitles:)](avcaptureindexpicker/init%28localizedtitle_symbolname_localizedindextitles_%29.md)
- [init(localizedTitle:symbolName:numberOfIndexes:)](avcaptureindexpicker/init%28localizedtitle_symbolname_numberofindexes_%29.md)
- [init(localizedTitle:symbolName:numberOfIndexes:localizedTitleTransform:)](avcaptureindexpicker/init%28localizedtitle_symbolname_numberofindexes_localizedtitletransform_%29.md)

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
- [AVCaptureSlider](avcaptureslider.md): A slider control that selects a value from a bounded range.

# AVCaptureIndexPicker (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A control for selecting from a set of mutually exclusive values by index.

## Declaration

```objectivec
@interface AVCaptureIndexPicker : AVCaptureControl
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)

<a id="overview"></a>

## Overview

Index pickers are appropriate for controls that provide an indexed container of values.

## Topics

### Creating an index picker

- [initWithLocalizedTitle:symbolName:numberOfIndexes:](avcaptureindexpicker/init%28__symbolname_numberofindexes_%29.md): Creates a control to pick a value from the specified number of indexes.
- [initWithLocalizedTitle:symbolName:numberOfIndexes:localizedTitleTransform:](avcaptureindexpicker/init%28__symbolname_numberofindexes_localizedtitletransform_%29.md): Creates a control to pick a value from the specified number of indices.
- [initWithLocalizedTitle:symbolName:localizedIndexTitles:](avcaptureindexpicker/init%28__symbolname_localizedindextitles_%29.md): Creates an object to select an index from a set of values.

### Handling interaction

- [setActionQueue:action:](avcaptureindexpicker/setactionqueue_action_.md): Sets the action to perform on the specified dispatch queue when the control’s value changes.

### Accessing the control value

- [selectedIndex](avcaptureindexpicker/selectedindex.md): The currently selected index.
- [numberOfIndexes](avcaptureindexpicker/numberofindexes.md): The number of index values the control provides.

### Setting an accessibility identifier

- [accessibilityIdentifier](avcaptureindexpicker/accessibilityidentifier.md): A string identifier for this control.

### Inspecting presentation attributes

- [symbolName](avcaptureindexpicker/symbolname.md): The name of the SF Symbol that represents this control.
- [localizedTitle](avcaptureindexpicker/localizedtitle.md): A localized title that describes the control’s action.
- [localizedIndexTitles](avcaptureindexpicker/localizedindextitles.md): The titles to present for each index.

## Relationships

### Inherits From

- [AVCaptureControl](avcapturecontrol.md)

## See Also

### Capture controls

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md): Provide direct access to your camera app’s features to help people quickly capture the perfect shot.
- [AVCaptureControl](avcapturecontrol.md): An abstract base class for controls that interact with the camera system.
- [AVCaptureSystemZoomSlider](avcapturesystemzoomslider.md): A control that adjusts the video zoom factor of a capture device within the system-recommended range.
- [AVCaptureSystemExposureBiasSlider](avcapturesystemexposurebiasslider.md): A control that adjusts the exposure bias of a capture device within the system-recommended range.
- [AVCaptureSlider](avcaptureslider.md): A slider control that selects a value from a bounded range.
