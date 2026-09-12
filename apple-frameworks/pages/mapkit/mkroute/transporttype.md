> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkroute/transporttype](https://developer.apple.com/documentation/mapkit/mkroute/transporttype)

# transportType (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The overall route transport type.

## Declaration

```swift
var transportType: MKDirectionsTransportType { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects the primary transport type used for the route. Individual steps of the route might use different transport types.

## See Also

### Getting additional route details

- [name](name.md): The assigned name for the route.
- [hasHighways](hashighways.md): A Boolean value that indicates whether the route contains highways.
- [hasTolls](hastolls.md): A Boolean value that indicates whether the route has tolls.
- [advisoryNotices](advisorynotices.md): An array of advisory notice strings for the route.
- [distance](distance.md): The route distance, in meters.
- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.

# transportType (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The overall route transport type.

## Declaration

```objectivec
@property (nonatomic, readonly) MKDirectionsTransportType transportType;
```

<a id="Discussion"></a>

## Discussion

This property reflects the primary transport type used for the route. Individual steps of the route might use different transport types.

## See Also

### Getting additional route details

- [name](name.md): The assigned name for the route.
- [hasHighways](hashighways.md): A Boolean value that indicates whether the route contains highways.
- [hasTolls](hastolls.md): A Boolean value that indicates whether the route has tolls.
- [advisoryNotices](advisorynotices.md): An array of advisory notice strings for the route.
- [distance](distance.md): The route distance, in meters.
- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
