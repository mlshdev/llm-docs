> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uideviceorientation](https://developer.apple.com/documentation/uikit/uideviceorientation)

# UIDeviceOrientation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that describe the physical orientation of the device.

## Declaration

```swift
enum UIDeviceOrientation
```

<a id="overview"></a>

## Overview

The [orientation](uidevice/orientation.md) property uses these constants to identify the device orientation. These constants identify the physical orientation of the device and aren’t tied to the orientation of your app’s user interface.

## Topics

### Device orientations

- [UIDeviceOrientation.unknown](uideviceorientation/unknown.md): The orientation of the device can’t be determined.
- [UIDeviceOrientation.portrait](uideviceorientation/portrait.md): The device is in portrait mode, with the device held upright and the front-facing camera at the top.
- [UIDeviceOrientation.portraitUpsideDown](uideviceorientation/portraitupsidedown.md): The device is in portrait mode but upside down, with the device held upright and the front-facing camera at the bottom.
- [UIDeviceOrientation.landscapeLeft](uideviceorientation/landscapeleft.md): The device is in landscape mode, with the device held upright and the front-facing camera on the left side.
- [UIDeviceOrientation.landscapeRight](uideviceorientation/landscaperight.md): The device is in landscape mode, with the device held upright and the front-facing camera on the right side.
- [UIDeviceOrientation.faceUp](uideviceorientation/faceup.md): The device is held parallel to the ground with the screen facing upwards.
- [UIDeviceOrientation.faceDown](uideviceorientation/facedown.md): The device is held parallel to the ground with the screen facing downwards.

### Orientation testing

- [isPortrait](uideviceorientation/isportrait.md): A Boolean value that indicates whether the device is in a portrait orientation.
- [isLandscape](uideviceorientation/islandscape.md): A Boolean value that indicates whether the device is in a landscape orientation.
- [isFlat](uideviceorientation/isflat.md): A Boolean value that indicates whether the specified orientation is face up or face down.
- [isValidInterfaceOrientation](uideviceorientation/isvalidinterfaceorientation.md): A Boolean value that indicates whether the specified orientation is one of the portrait or landscape orientations.

### Initializers

- [init(rawValue:)](uideviceorientation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tracking the device orientation

- [orientation](uidevice/orientation.md): The physical orientation of the device.
- [isGeneratingDeviceOrientationNotifications](uidevice/isgeneratingdeviceorientationnotifications.md): A Boolean value that indicates whether the device generates orientation notifications.
- [beginGeneratingDeviceOrientationNotifications()](uidevice/begingeneratingdeviceorientationnotifications%28%29.md): Begins the generation of notifications of device orientation changes.
- [endGeneratingDeviceOrientationNotifications()](uidevice/endgeneratingdeviceorientationnotifications%28%29.md): Ends the generation of notifications of device orientation changes.

# UIDeviceOrientation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that describe the physical orientation of the device.

## Declaration

```objectivec
enum UIDeviceOrientation : NSInteger;
```

<a id="overview"></a>

## Overview

The [orientation](uidevice/orientation.md) property uses these constants to identify the device orientation. These constants identify the physical orientation of the device and aren’t tied to the orientation of your app’s user interface.

## Topics

### Device orientations

- [UIDeviceOrientationUnknown](uideviceorientation/unknown.md): The orientation of the device can’t be determined.
- [UIDeviceOrientationPortrait](uideviceorientation/portrait.md): The device is in portrait mode, with the device held upright and the front-facing camera at the top.
- [UIDeviceOrientationPortraitUpsideDown](uideviceorientation/portraitupsidedown.md): The device is in portrait mode but upside down, with the device held upright and the front-facing camera at the bottom.
- [UIDeviceOrientationLandscapeLeft](uideviceorientation/landscapeleft.md): The device is in landscape mode, with the device held upright and the front-facing camera on the left side.
- [UIDeviceOrientationLandscapeRight](uideviceorientation/landscaperight.md): The device is in landscape mode, with the device held upright and the front-facing camera on the right side.
- [UIDeviceOrientationFaceUp](uideviceorientation/faceup.md): The device is held parallel to the ground with the screen facing upwards.
- [UIDeviceOrientationFaceDown](uideviceorientation/facedown.md): The device is held parallel to the ground with the screen facing downwards.

### Orientation testing

- [UIDeviceOrientationIsPortrait](uideviceorientation/isportrait.md): A Boolean value that indicates whether the device is in a portrait orientation.
- [UIDeviceOrientationIsLandscape](uideviceorientation/islandscape.md): A Boolean value that indicates whether the device is in a landscape orientation.
- [UIDeviceOrientationIsFlat](uideviceorientation/isflat.md): A Boolean value that indicates whether the specified orientation is face up or face down.
- [UIDeviceOrientationIsValidInterfaceOrientation](uideviceorientation/isvalidinterfaceorientation.md): A Boolean value that indicates whether the specified orientation is one of the portrait or landscape orientations.

## See Also

### Tracking the device orientation

- [orientation](uidevice/orientation.md): The physical orientation of the device.
- [generatesDeviceOrientationNotifications](uidevice/isgeneratingdeviceorientationnotifications.md): A Boolean value that indicates whether the device generates orientation notifications.
- [beginGeneratingDeviceOrientationNotifications](uidevice/begingeneratingdeviceorientationnotifications%28%29.md): Begins the generation of notifications of device orientation changes.
- [endGeneratingDeviceOrientationNotifications](uidevice/endgeneratingdeviceorientationnotifications%28%29.md): Ends the generation of notifications of device orientation changes.
