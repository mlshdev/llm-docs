> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/dismissheadingcalibrationdisplay()](https://developer.apple.com/documentation/corelocation/cllocationmanager/dismissheadingcalibrationdisplay())

# dismissHeadingCalibrationDisplay() (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Dismisses the heading calibration view from the screen immediately.

## Declaration

```swift
func dismissHeadingCalibrationDisplay()
```

<a id="Discussion"></a>

## Discussion

Core Location uses the heading calibration alert to calibrate the available heading hardware as needed. The display of this view is automatic, assuming your delegate supports displaying the view at all. If the view is displayed, you can use this method to dismiss it after an appropriate amount of time to ensure that your app’s user interface is not unduly disrupted.

## See Also

### Running the heading service

- [startUpdatingHeading()](startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [stopUpdatingHeading()](stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [headingFilter](headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [kCLHeadingFilterNone](../kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](../cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](headingorientation.md): Deprecated. The device orientation to use when computing heading values.
- [CLDeviceOrientation](../cldeviceorientation.md): Constants indicating the physical orientation of the device.

# dismissHeadingCalibrationDisplay (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Dismisses the heading calibration view from the screen immediately.

## Declaration

```objectivec
- (void) dismissHeadingCalibrationDisplay;
```

<a id="Discussion"></a>

## Discussion

Core Location uses the heading calibration alert to calibrate the available heading hardware as needed. The display of this view is automatic, assuming your delegate supports displaying the view at all. If the view is displayed, you can use this method to dismiss it after an appropriate amount of time to ensure that your app’s user interface is not unduly disrupted.

## See Also

### Running the heading service

- [startUpdatingHeading](startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [stopUpdatingHeading](stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [headingFilter](headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [kCLHeadingFilterNone](../kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](../cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](headingorientation.md): Deprecated. The device orientation to use when computing heading values.
- [CLDeviceOrientation](../cldeviceorientation.md): Constants indicating the physical orientation of the device.
