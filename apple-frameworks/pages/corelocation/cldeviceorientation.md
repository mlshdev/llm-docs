> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cldeviceorientation](https://developer.apple.com/documentation/corelocation/cldeviceorientation)

# CLDeviceOrientation (Swift)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants indicating the physical orientation of the device.

## Declaration

```swift
enum CLDeviceOrientation
```

## Topics

### Device Orientations

- [CLDeviceOrientation.unknown](cldeviceorientation/unknown.md): The orientation is currently not known.
- [CLDeviceOrientation.portrait](cldeviceorientation/portrait.md): The device is in portrait mode, with the device held upright and the home button at the bottom.
- [CLDeviceOrientation.portraitUpsideDown](cldeviceorientation/portraitupsidedown.md): The device is in portrait mode but upside down, with the device held upright and the home button at the top.
- [CLDeviceOrientation.landscapeLeft](cldeviceorientation/landscapeleft.md): The device is in landscape mode, with the device held upright and the home button on the right side.
- [CLDeviceOrientation.landscapeRight](cldeviceorientation/landscaperight.md): The device is in landscape mode, with the device held upright and the home button on the left side.
- [CLDeviceOrientation.faceUp](cldeviceorientation/faceup.md): The device is held parallel to the ground with the screen facing upwards.
- [CLDeviceOrientation.faceDown](cldeviceorientation/facedown.md): The device is held parallel to the ground with the screen facing downwards.

### Initializers

- [init(rawValue:)](cldeviceorientation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Running the heading service

- [startUpdatingHeading()](cllocationmanager/startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [stopUpdatingHeading()](cllocationmanager/stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [dismissHeadingCalibrationDisplay()](cllocationmanager/dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [headingFilter](cllocationmanager/headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [kCLHeadingFilterNone](kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](cllocationmanager/headingorientation.md): Deprecated. The device orientation to use when computing heading values.

# CLDeviceOrientation (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants indicating the physical orientation of the device.

## Declaration

```objectivec
enum CLDeviceOrientation : int;
```

## Topics

### Device Orientations

- [CLDeviceOrientationUnknown](cldeviceorientation/unknown.md): The orientation is currently not known.
- [CLDeviceOrientationPortrait](cldeviceorientation/portrait.md): The device is in portrait mode, with the device held upright and the home button at the bottom.
- [CLDeviceOrientationPortraitUpsideDown](cldeviceorientation/portraitupsidedown.md): The device is in portrait mode but upside down, with the device held upright and the home button at the top.
- [CLDeviceOrientationLandscapeLeft](cldeviceorientation/landscapeleft.md): The device is in landscape mode, with the device held upright and the home button on the right side.
- [CLDeviceOrientationLandscapeRight](cldeviceorientation/landscaperight.md): The device is in landscape mode, with the device held upright and the home button on the left side.
- [CLDeviceOrientationFaceUp](cldeviceorientation/faceup.md): The device is held parallel to the ground with the screen facing upwards.
- [CLDeviceOrientationFaceDown](cldeviceorientation/facedown.md): The device is held parallel to the ground with the screen facing downwards.

## See Also

### Running the heading service

- [startUpdatingHeading](cllocationmanager/startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [stopUpdatingHeading](cllocationmanager/stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [dismissHeadingCalibrationDisplay](cllocationmanager/dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [headingFilter](cllocationmanager/headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [kCLHeadingFilterNone](kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](cllocationmanager/headingorientation.md): Deprecated. The device orientation to use when computing heading values.
