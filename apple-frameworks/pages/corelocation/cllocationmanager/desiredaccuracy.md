> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/desiredaccuracy](https://developer.apple.com/documentation/corelocation/cllocationmanager/desiredaccuracy)

# desiredAccuracy (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The accuracy of the location data that your app wants to receive.

## Declaration

```swift
var desiredAccuracy: CLLocationAccuracy { get set }
```

## Mentioned In

- [Getting the current location of a device](../getting-the-current-location-of-a-device.md)

<a id="Discussion"></a>

## Discussion

The location service does its best to achieve the requested accuracy; however, apps must be prepared to use less accurate data. If your app isn’t authorized to access precise location information (`isAuthorizedForPreciseLocation` is [false](https://developer.apple.com/documentation/swift/false)), changes to this property’s value have no effect; the accuracy is always [kCLLocationAccuracyReduced](../kcllocationaccuracyreduced.md).

To reduce your app’s impact on battery life, assign a value to this property that’s appropriate for your usage. For example, if you need the current location only within a kilometer, specify [kCLLocationAccuracyKilometer](../kcllocationaccuracykilometer.md). More accurate location data also takes more time to become available.

After you request high-accuracy location data, your app might still get data with a lower accuracy for a period of time. During the time it takes to determine the location within the requested accuracy, the location service keeps providing the data that’s available, even though that data isn’t as accurate as your app requested. Your app receives more accurate location data as that data becomes available.

For iOS, the default value of this property is [kCLLocationAccuracyBest](../kcllocationaccuracybest.md). For macOS, watchOS, and tvOS, the default value is [kCLLocationAccuracyHundredMeters](../kcllocationaccuracyhundredmeters.md).

This property effects only the standard location services, not for monitoring significant location changes.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Specifying distance and accuracy

- [distanceFilter](distancefilter.md): The minimum distance in meters the device must move horizontally before an update event is generated.
- [CLLocationDistanceMax](../cllocationdistancemax.md): A constant indicating the maximum distance.
- [kCLDistanceFilterNone](../kcldistancefilternone.md): A constant indicating that all movement should be reported.
- [CLLocationDistance](../cllocationdistance.md): A distance in meters from an existing location.
- [CLLocationAccuracy](../cllocationaccuracy.md): The accuracy of a geographical coordinate.

# desiredAccuracy (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The accuracy of the location data that your app wants to receive.

## Declaration

```objectivec
@property (nonatomic, assign) CLLocationAccuracy desiredAccuracy;
```

## Mentioned In

- [Getting the current location of a device](../getting-the-current-location-of-a-device.md)

<a id="Discussion"></a>

## Discussion

The location service does its best to achieve the requested accuracy; however, apps must be prepared to use less accurate data. If your app isn’t authorized to access precise location information (`isAuthorizedForPreciseLocation` is [false](https://developer.apple.com/documentation/swift/false)), changes to this property’s value have no effect; the accuracy is always [kCLLocationAccuracyReduced](../kcllocationaccuracyreduced.md).

To reduce your app’s impact on battery life, assign a value to this property that’s appropriate for your usage. For example, if you need the current location only within a kilometer, specify [kCLLocationAccuracyKilometer](../kcllocationaccuracykilometer.md). More accurate location data also takes more time to become available.

After you request high-accuracy location data, your app might still get data with a lower accuracy for a period of time. During the time it takes to determine the location within the requested accuracy, the location service keeps providing the data that’s available, even though that data isn’t as accurate as your app requested. Your app receives more accurate location data as that data becomes available.

For iOS, the default value of this property is [kCLLocationAccuracyBest](../kcllocationaccuracybest.md). For macOS, watchOS, and tvOS, the default value is [kCLLocationAccuracyHundredMeters](../kcllocationaccuracyhundredmeters.md).

This property effects only the standard location services, not for monitoring significant location changes.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Specifying distance and accuracy

- [distanceFilter](distancefilter.md): The minimum distance in meters the device must move horizontally before an update event is generated.
- [CLLocationDistanceMax](../cllocationdistancemax.md): A constant indicating the maximum distance.
- [kCLDistanceFilterNone](../kcldistancefilternone.md): A constant indicating that all movement should be reported.
- [CLLocationDistance](../cllocationdistance.md): A distance in meters from an existing location.
- [CLLocationAccuracy](../cllocationaccuracy.md): The accuracy of a geographical coordinate.
