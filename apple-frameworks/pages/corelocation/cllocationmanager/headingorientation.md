> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/headingorientation](https://developer.apple.com/documentation/corelocation/cllocationmanager/headingorientation)

# headingOrientation (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 27.0) · iPadOS 4.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The device orientation to use when computing heading values.

## Declaration

```swift
var headingOrientation: CLDeviceOrientation { get set }
```

## Mentioned In

- [Getting heading and course information](../getting-heading-and-course-information.md)

<a id="Discussion"></a>

## Discussion

When computing heading values, the location manager assumes that the top of the device in portrait mode represents due north (0 degrees) by default. For apps that run in other orientations, this may not always be the most convenient orientation. This property allows you to specify which device orientation you want the location manager to use as the reference point for due north.

Although you can set the value of this property to [CLDeviceOrientation.unknown](../cldeviceorientation/unknown.md), [CLDeviceOrientation.faceUp](../cldeviceorientation/faceup.md), or [CLDeviceOrientation.faceDown](../cldeviceorientation/facedown.md), doing so has no effect on the orientation reference point. The original reference point is retained instead.

Changing the value in this property affects only those heading values reported after the change is made.

## See Also

### Running the heading service

- [startUpdatingHeading()](startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [stopUpdatingHeading()](stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [dismissHeadingCalibrationDisplay()](dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [headingFilter](headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [kCLHeadingFilterNone](../kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](../cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [CLDeviceOrientation](../cldeviceorientation.md): Constants indicating the physical orientation of the device.

# headingOrientation (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 27.0) · iPadOS 4.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The device orientation to use when computing heading values.

## Declaration

```objectivec
@property (nonatomic, assign) CLDeviceOrientation headingOrientation;
```

## Mentioned In

- [Getting heading and course information](../getting-heading-and-course-information.md)

<a id="Discussion"></a>

## Discussion

When computing heading values, the location manager assumes that the top of the device in portrait mode represents due north (0 degrees) by default. For apps that run in other orientations, this may not always be the most convenient orientation. This property allows you to specify which device orientation you want the location manager to use as the reference point for due north.

Although you can set the value of this property to [CLDeviceOrientationUnknown](../cldeviceorientation/unknown.md), [CLDeviceOrientationFaceUp](../cldeviceorientation/faceup.md), or [CLDeviceOrientationFaceDown](../cldeviceorientation/facedown.md), doing so has no effect on the orientation reference point. The original reference point is retained instead.

Changing the value in this property affects only those heading values reported after the change is made.

## See Also

### Running the heading service

- [startUpdatingHeading](startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [stopUpdatingHeading](stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [dismissHeadingCalibrationDisplay](dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [headingFilter](headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [kCLHeadingFilterNone](../kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](../cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [CLDeviceOrientation](../cldeviceorientation.md): Constants indicating the physical orientation of the device.
