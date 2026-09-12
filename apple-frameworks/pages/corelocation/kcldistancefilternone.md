> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/kcldistancefilternone](https://developer.apple.com/documentation/corelocation/kcldistancefilternone)

# kCLDistanceFilterNone (Swift)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant indicating that all movement should be reported.

## Declaration

```swift
let kCLDistanceFilterNone: CLLocationDistance
```

<a id="Discussion"></a>

## Discussion

Use this constant to specify that any change in location should trigger a new location update.

## See Also

### Specifying distance and accuracy

- [distanceFilter](cllocationmanager/distancefilter.md): The minimum distance in meters the device must move horizontally before an update event is generated.
- [CLLocationDistanceMax](cllocationdistancemax.md): A constant indicating the maximum distance.
- [CLLocationDistance](cllocationdistance.md): A distance in meters from an existing location.
- [desiredAccuracy](cllocationmanager/desiredaccuracy.md): The accuracy of the location data that your app wants to receive.
- [CLLocationAccuracy](cllocationaccuracy.md): The accuracy of a geographical coordinate.

# kCLDistanceFilterNone (Objective-C)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant indicating that all movement should be reported.

## Declaration

```objectivec
extern const CLLocationDistance kCLDistanceFilterNone;
```

<a id="Discussion"></a>

## Discussion

Use this constant to specify that any change in location should trigger a new location update.

## See Also

### Specifying distance and accuracy

- [distanceFilter](cllocationmanager/distancefilter.md): The minimum distance in meters the device must move horizontally before an update event is generated.
- [CLLocationDistanceMax](cllocationdistancemax.md): A constant indicating the maximum distance.
- [CLLocationDistance](cllocationdistance.md): A distance in meters from an existing location.
- [desiredAccuracy](cllocationmanager/desiredaccuracy.md): The accuracy of the location data that your app wants to receive.
- [CLLocationAccuracy](cllocationaccuracy.md): The accuracy of a geographical coordinate.
