> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkroute/distance](https://developer.apple.com/documentation/mapkit/mkroute/distance)

# distance (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The route distance, in meters.

## Declaration

```swift
var distance: CLLocationDistance { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects the distance that the user covers while traversing the path of the route. It’s not a linear distance between the start and end points of the route.

## See Also

### Getting additional route details

- [name](name.md): The assigned name for the route.
- [hasHighways](hashighways.md): A Boolean value that indicates whether the route contains highways.
- [hasTolls](hastolls.md): A Boolean value that indicates whether the route has tolls.
- [advisoryNotices](advisorynotices.md): An array of advisory notice strings for the route.
- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
- [transportType](transporttype.md): The overall route transport type.

# distance (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The route distance, in meters.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationDistance distance;
```

<a id="Discussion"></a>

## Discussion

This property reflects the distance that the user covers while traversing the path of the route. It’s not a linear distance between the start and end points of the route.

## See Also

### Getting additional route details

- [name](name.md): The assigned name for the route.
- [hasHighways](hashighways.md): A Boolean value that indicates whether the route contains highways.
- [hasTolls](hastolls.md): A Boolean value that indicates whether the route has tolls.
- [advisoryNotices](advisorynotices.md): An array of advisory notice strings for the route.
- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
- [transportType](transporttype.md): The overall route transport type.
