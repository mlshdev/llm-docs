> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/startupdatingheading()](https://developer.apple.com/documentation/corelocation/cllocationmanager/startupdatingheading())

# startUpdatingHeading() (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Starts the generation of updates that report the user’s current heading.

## Declaration

```swift
func startUpdatingHeading()
```

## Mentioned In

- [Getting heading and course information](../getting-heading-and-course-information.md)

<a id="Discussion"></a>

## Discussion

This method returns immediately. Calling this method when the receiver is stopped causes it to obtain an initial heading and notify your delegate. After that, the receiver generates update events when the value in the [headingFilter](headingfilter.md) property is exceeded.

Before calling this method, you should always check the [headingAvailable](headingavailable-swift.property.md) property to see whether heading information is supported on the current device. If heading information is not supported, calling this method has no effect and does not result in the delivery of events to your delegate.

Calling this method several times in succession does not automatically result in new events being generated. Calling [stopUpdatingHeading()](stopupdatingheading%28%29.md) in between, however, does cause a new initial event to be sent the next time you call this method.

If you start this service and your app is suspended, the system stops the delivery of events until your app starts running again (either in the foreground or background). If your app is terminated, the delivery of new heading events stops altogether and must be restarted by your code when the app is relaunched.

Heading events are delivered to the [locationManager(\_:didUpdateHeading:)](../cllocationmanagerdelegate/locationmanager%28__didupdateheading_%29.md) method of your delegate. If there is an error, the location manager calls the [locationManager(\_:didFailWithError:)](../cllocationmanagerdelegate/locationmanager%28__didfailwitherror_%29.md) method of your delegate instead.

If a compatible iPad or iPhone app calls this method when running in visionOS, the method does nothing.

## Topics

### Related Documentation

- [headingAvailable](headingavailable-swift.property.md): Deprecated. A Boolean value indicating whether the location manager is able to generate heading-related events.

## See Also

### Running the heading service

- [stopUpdatingHeading()](stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [dismissHeadingCalibrationDisplay()](dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [headingFilter](headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [kCLHeadingFilterNone](../kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](../cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](headingorientation.md): Deprecated. The device orientation to use when computing heading values.
- [CLDeviceOrientation](../cldeviceorientation.md): Constants indicating the physical orientation of the device.

# startUpdatingHeading (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Starts the generation of updates that report the user’s current heading.

## Declaration

```objectivec
- (void) startUpdatingHeading;
```

## Mentioned In

- [Getting heading and course information](../getting-heading-and-course-information.md)

<a id="Discussion"></a>

## Discussion

This method returns immediately. Calling this method when the receiver is stopped causes it to obtain an initial heading and notify your delegate. After that, the receiver generates update events when the value in the [headingFilter](headingfilter.md) property is exceeded.

Before calling this method, you should always check the [headingAvailable](headingavailable-swift.property.md) property to see whether heading information is supported on the current device. If heading information is not supported, calling this method has no effect and does not result in the delivery of events to your delegate.

Calling this method several times in succession does not automatically result in new events being generated. Calling [stopUpdatingHeading](stopupdatingheading%28%29.md) in between, however, does cause a new initial event to be sent the next time you call this method.

If you start this service and your app is suspended, the system stops the delivery of events until your app starts running again (either in the foreground or background). If your app is terminated, the delivery of new heading events stops altogether and must be restarted by your code when the app is relaunched.

Heading events are delivered to the [locationManager:didUpdateHeading:](../cllocationmanagerdelegate/locationmanager%28__didupdateheading_%29.md) method of your delegate. If there is an error, the location manager calls the [locationManager:didFailWithError:](../cllocationmanagerdelegate/locationmanager%28__didfailwitherror_%29.md) method of your delegate instead.

If a compatible iPad or iPhone app calls this method when running in visionOS, the method does nothing.

## Topics

### Related Documentation

- [headingAvailable](headingavailable-swift.property.md): Deprecated. A Boolean value indicating whether the location manager is able to generate heading-related events.

## See Also

### Running the heading service

- [stopUpdatingHeading](stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [dismissHeadingCalibrationDisplay](dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [headingFilter](headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [kCLHeadingFilterNone](../kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](../cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](headingorientation.md): Deprecated. The device orientation to use when computing heading values.
- [CLDeviceOrientation](../cldeviceorientation.md): Constants indicating the physical orientation of the device.
