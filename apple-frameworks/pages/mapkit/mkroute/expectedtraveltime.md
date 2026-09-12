> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkroute/expectedtraveltime](https://developer.apple.com/documentation/mapkit/mkroute/expectedtraveltime)

# expectedTravelTime (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The expected travel time, in seconds.

## Declaration

```swift
var expectedTravelTime: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This expected travel time reflects the time it takes to traverse the route under ideal conditions. The actual amount of time may vary based on conditions.

## See Also

### Getting additional route details

- [name](name.md): The assigned name for the route.
- [hasHighways](hashighways.md): A Boolean value that indicates whether the route contains highways.
- [hasTolls](hastolls.md): A Boolean value that indicates whether the route has tolls.
- [advisoryNotices](advisorynotices.md): An array of advisory notice strings for the route.
- [distance](distance.md): The route distance, in meters.
- [transportType](transporttype.md): The overall route transport type.

# expectedTravelTime (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The expected travel time, in seconds.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval expectedTravelTime;
```

<a id="Discussion"></a>

## Discussion

This expected travel time reflects the time it takes to traverse the route under ideal conditions. The actual amount of time may vary based on conditions.

## See Also

### Getting additional route details

- [name](name.md): The assigned name for the route.
- [hasHighways](hashighways.md): A Boolean value that indicates whether the route contains highways.
- [hasTolls](hastolls.md): A Boolean value that indicates whether the route has tolls.
- [advisoryNotices](advisorynotices.md): An array of advisory notice strings for the route.
- [distance](distance.md): The route distance, in meters.
- [transportType](transporttype.md): The overall route transport type.
