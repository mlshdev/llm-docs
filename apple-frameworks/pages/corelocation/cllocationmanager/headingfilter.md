> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/headingfilter](https://developer.apple.com/documentation/corelocation/cllocationmanager/headingfilter)

# headingFilter (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

The minimum angular change in degrees required to generate new heading events.

## Declaration

```swift
var headingFilter: CLLocationDegrees { get set }
```

<a id="Discussion"></a>

## Discussion

The angular distance is measured relative to the last delivered heading event. Use the value [kCLHeadingFilterNone](../kclheadingfilternone.md) to be notified of all movements. The default value of this property is `1` degree.

## See Also

### Running the heading service

- [startUpdatingHeading()](startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [stopUpdatingHeading()](stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [dismissHeadingCalibrationDisplay()](dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [kCLHeadingFilterNone](../kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](../cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](headingorientation.md): Deprecated. The device orientation to use when computing heading values.
- [CLDeviceOrientation](../cldeviceorientation.md): Constants indicating the physical orientation of the device.

# headingFilter (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

The minimum angular change in degrees required to generate new heading events.

## Declaration

```objectivec
@property (nonatomic, assign) CLLocationDegrees headingFilter;
```

<a id="Discussion"></a>

## Discussion

The angular distance is measured relative to the last delivered heading event. Use the value [kCLHeadingFilterNone](../kclheadingfilternone.md) to be notified of all movements. The default value of this property is `1` degree.

## See Also

### Running the heading service

- [startUpdatingHeading](startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [stopUpdatingHeading](stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [dismissHeadingCalibrationDisplay](dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [kCLHeadingFilterNone](../kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](../cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](headingorientation.md): Deprecated. The device orientation to use when computing heading values.
- [CLDeviceOrientation](../cldeviceorientation.md): Constants indicating the physical orientation of the device.
