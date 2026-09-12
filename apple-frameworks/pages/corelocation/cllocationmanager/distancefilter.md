> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/distancefilter](https://developer.apple.com/documentation/corelocation/cllocationmanager/distancefilter)

# distanceFilter (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The minimum distance in meters the device must move horizontally before an update event is generated.

## Declaration

```swift
var distanceFilter: CLLocationDistance { get set }
```

## Mentioned In

- [Getting the current location of a device](../getting-the-current-location-of-a-device.md)

<a id="Discussion"></a>

## Discussion

This location manager measures this relative to the previously delivered location. Specify the value [kCLDistanceFilterNone](../kcldistancefilternone.md) to receive notifications for all movements. The default value of this property is [kCLDistanceFilterNone](../kcldistancefilternone.md).

Use this property only in conjunction with the Standard location services and not with the Significant-change or Visits services.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Specifying distance and accuracy

- [CLLocationDistanceMax](../cllocationdistancemax.md): A constant indicating the maximum distance.
- [kCLDistanceFilterNone](../kcldistancefilternone.md): A constant indicating that all movement should be reported.
- [CLLocationDistance](../cllocationdistance.md): A distance in meters from an existing location.
- [desiredAccuracy](desiredaccuracy.md): The accuracy of the location data that your app wants to receive.
- [CLLocationAccuracy](../cllocationaccuracy.md): The accuracy of a geographical coordinate.

# distanceFilter (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The minimum distance in meters the device must move horizontally before an update event is generated.

## Declaration

```objectivec
@property (nonatomic, assign) CLLocationDistance distanceFilter;
```

## Mentioned In

- [Getting the current location of a device](../getting-the-current-location-of-a-device.md)

<a id="Discussion"></a>

## Discussion

This location manager measures this relative to the previously delivered location. Specify the value [kCLDistanceFilterNone](../kcldistancefilternone.md) to receive notifications for all movements. The default value of this property is [kCLDistanceFilterNone](../kcldistancefilternone.md).

Use this property only in conjunction with the Standard location services and not with the Significant-change or Visits services.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Specifying distance and accuracy

- [CLLocationDistanceMax](../cllocationdistancemax.md): A constant indicating the maximum distance.
- [kCLDistanceFilterNone](../kcldistancefilternone.md): A constant indicating that all movement should be reported.
- [CLLocationDistance](../cllocationdistance.md): A distance in meters from an existing location.
- [desiredAccuracy](desiredaccuracy.md): The accuracy of the location data that your app wants to receive.
- [CLLocationAccuracy](../cllocationaccuracy.md): The accuracy of a geographical coordinate.
