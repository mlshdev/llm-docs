> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/kclheadingfilternone](https://developer.apple.com/documentation/corelocation/kclheadingfilternone)

# kCLHeadingFilterNone (Swift)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant indicating that all header values should be reported.

## Declaration

```swift
let kCLHeadingFilterNone: CLLocationDegrees
```

<a id="Discussion"></a>

## Discussion

Use this constant to indicate that any change to the heading, regardless of how small, should be reported.

## See Also

### Running the heading service

- [startUpdatingHeading()](cllocationmanager/startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [stopUpdatingHeading()](cllocationmanager/stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [dismissHeadingCalibrationDisplay()](cllocationmanager/dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [headingFilter](cllocationmanager/headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [CLLocationDegrees](cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](cllocationmanager/headingorientation.md): Deprecated. The device orientation to use when computing heading values.
- [CLDeviceOrientation](cldeviceorientation.md): Constants indicating the physical orientation of the device.

# kCLHeadingFilterNone (Objective-C)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant indicating that all header values should be reported.

## Declaration

```objectivec
extern const CLLocationDegrees kCLHeadingFilterNone;
```

<a id="Discussion"></a>

## Discussion

Use this constant to indicate that any change to the heading, regardless of how small, should be reported.

## See Also

### Running the heading service

- [startUpdatingHeading](cllocationmanager/startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [stopUpdatingHeading](cllocationmanager/stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [dismissHeadingCalibrationDisplay](cllocationmanager/dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [headingFilter](cllocationmanager/headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [CLLocationDegrees](cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](cllocationmanager/headingorientation.md): Deprecated. The device orientation to use when computing heading values.
- [CLDeviceOrientation](cldeviceorientation.md): Constants indicating the physical orientation of the device.
