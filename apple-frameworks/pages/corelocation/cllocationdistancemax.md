> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationdistancemax](https://developer.apple.com/documentation/corelocation/cllocationdistancemax)

# CLLocationDistanceMax (Swift)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant indicating the maximum distance.

## Declaration

```swift
let CLLocationDistanceMax: CLLocationDistance
```

<a id="Discussion"></a>

## Discussion

When scheduling deferred updates, you can use this constant to indicate that a new update should be triggered only after the device moves a significantly large distance.

## See Also

### Specifying distance and accuracy

- [distanceFilter](cllocationmanager/distancefilter.md): The minimum distance in meters the device must move horizontally before an update event is generated.
- [kCLDistanceFilterNone](kcldistancefilternone.md): A constant indicating that all movement should be reported.
- [CLLocationDistance](cllocationdistance.md): A distance in meters from an existing location.
- [desiredAccuracy](cllocationmanager/desiredaccuracy.md): The accuracy of the location data that your app wants to receive.
- [CLLocationAccuracy](cllocationaccuracy.md): The accuracy of a geographical coordinate.

# CLLocationDistanceMax (Objective-C)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant indicating the maximum distance.

## Declaration

```objectivec
extern const CLLocationDistance CLLocationDistanceMax;
```

<a id="Discussion"></a>

## Discussion

When scheduling deferred updates, you can use this constant to indicate that a new update should be triggered only after the device moves a significantly large distance.

## See Also

### Specifying distance and accuracy

- [distanceFilter](cllocationmanager/distancefilter.md): The minimum distance in meters the device must move horizontally before an update event is generated.
- [kCLDistanceFilterNone](kcldistancefilternone.md): A constant indicating that all movement should be reported.
- [CLLocationDistance](cllocationdistance.md): A distance in meters from an existing location.
- [desiredAccuracy](cllocationmanager/desiredaccuracy.md): The accuracy of the location data that your app wants to receive.
- [CLLocationAccuracy](cllocationaccuracy.md): The accuracy of a geographical coordinate.
