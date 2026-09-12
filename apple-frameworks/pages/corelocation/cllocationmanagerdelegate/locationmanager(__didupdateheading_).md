> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didupdateheading:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didupdateheading:))

# locationManager(\_:didUpdateHeading:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Tells the delegate that the location manager received updated heading information.

## Declaration

```swift
optional func locationManager(_ manager: CLLocationManager, didUpdateHeading newHeading: CLHeading)
```

## Parameters

- `manager`: The location manager object that generated the update event.
- `newHeading`: The new heading data.

## Mentioned In

- [Getting heading and course information](../getting-heading-and-course-information.md)

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional but expected if you start heading updates using the [startUpdatingHeading()](../cllocationmanager/startupdatingheading%28%29.md) method.

The location manager object calls this method after you initially start the heading service. Subsequent events are delivered when the previously reported value changes by more than the value specified in the [headingFilter](../cllocationmanager/headingfilter.md) property of the location manager object.

## See Also

### Receiving heading updates

- [locationManagerShouldDisplayHeadingCalibration(\_:)](locationmanagershoulddisplayheadingcalibration%28__%29.md): Asks the delegate whether the heading calibration alert should be displayed.

# locationManager:didUpdateHeading: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Tells the delegate that the location manager received updated heading information.

## Declaration

```objectivec
- (void) locationManager:(CLLocationManager *) manager didUpdateHeading:(CLHeading *) newHeading;
```

## Parameters

- `manager`: The location manager object that generated the update event.
- `newHeading`: The new heading data.

## Mentioned In

- [Getting heading and course information](../getting-heading-and-course-information.md)

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional but expected if you start heading updates using the [startUpdatingHeading](../cllocationmanager/startupdatingheading%28%29.md) method.

The location manager object calls this method after you initially start the heading service. Subsequent events are delivered when the previously reported value changes by more than the value specified in the [headingFilter](../cllocationmanager/headingfilter.md) property of the location manager object.

## See Also

### Receiving heading updates

- [locationManagerShouldDisplayHeadingCalibration:](locationmanagershoulddisplayheadingcalibration%28__%29.md): Asks the delegate whether the heading calibration alert should be displayed.
