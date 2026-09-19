> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkdirections/etaresponse/expectedtraveltime

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

The expected travel time reflects the time it takes to traverse the route, taking expected traffic into account. The actual amount of time may vary based on changes in traffic and other travel conditions.

## See Also

### Getting the travel information

- [expectedDepartureDate](expecteddeparturedate.md): The expected departure time.
- [expectedArrivalDate](expectedarrivaldate.md): The expected arrival time.
- [distance](distance.md): The expected travel distance, in meters.
- [transportType](transporttype.md): The type of conveyance to use for determining the travel time.

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

The expected travel time reflects the time it takes to traverse the route, taking expected traffic into account. The actual amount of time may vary based on changes in traffic and other travel conditions.

## See Also

### Getting the travel information

- [expectedDepartureDate](expecteddeparturedate.md): The expected departure time.
- [expectedArrivalDate](expectedarrivaldate.md): The expected arrival time.
- [distance](distance.md): The expected travel distance, in meters.
- [transportType](transporttype.md): The type of conveyance to use for determining the travel time.
