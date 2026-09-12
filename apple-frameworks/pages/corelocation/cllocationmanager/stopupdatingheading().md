> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/stopupdatingheading()](https://developer.apple.com/documentation/corelocation/cllocationmanager/stopupdatingheading())

# stopUpdatingHeading() (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Stops the generation of heading updates.

## Declaration

```swift
func stopUpdatingHeading()
```

<a id="Discussion"></a>

## Discussion

Call this method whenever your code no longer needs to receive heading-related events. Disabling event delivery gives the receiver the option of disabling the appropriate hardware (and thereby saving power) when no clients need location data. You can always restart the generation of heading updates by calling the [startUpdatingHeading()](startupdatingheading%28%29.md) method again.

If a compatible iPad or iPhone app calls this method when running in visionOS, the method does nothing.

## See Also

### Running the heading service

- [startUpdatingHeading()](startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [dismissHeadingCalibrationDisplay()](dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [headingFilter](headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [kCLHeadingFilterNone](../kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](../cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](headingorientation.md): Deprecated. The device orientation to use when computing heading values.
- [CLDeviceOrientation](../cldeviceorientation.md): Constants indicating the physical orientation of the device.

# stopUpdatingHeading (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Stops the generation of heading updates.

## Declaration

```objectivec
- (void) stopUpdatingHeading;
```

<a id="Discussion"></a>

## Discussion

Call this method whenever your code no longer needs to receive heading-related events. Disabling event delivery gives the receiver the option of disabling the appropriate hardware (and thereby saving power) when no clients need location data. You can always restart the generation of heading updates by calling the [startUpdatingHeading](startupdatingheading%28%29.md) method again.

If a compatible iPad or iPhone app calls this method when running in visionOS, the method does nothing.

## See Also

### Running the heading service

- [startUpdatingHeading](startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [dismissHeadingCalibrationDisplay](dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [headingFilter](headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [kCLHeadingFilterNone](../kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](../cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](headingorientation.md): Deprecated. The device orientation to use when computing heading values.
- [CLDeviceOrientation](../cldeviceorientation.md): Constants indicating the physical orientation of the device.
