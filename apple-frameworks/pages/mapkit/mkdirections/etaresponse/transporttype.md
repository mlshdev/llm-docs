> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/etaresponse/transporttype](https://developer.apple.com/documentation/mapkit/mkdirections/etaresponse/transporttype)

# transportType (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The type of conveyance to use for determining the travel time.

## Declaration

```swift
var transportType: MKDirectionsTransportType { get }
```

<a id="Discussion"></a>

## Discussion

You specify the desired transportation type in your [MKDirections.Request](../request.md) object. If you specified [any](../../mkdirectionstransporttype/any.md), this property contains the transportation type used to generate the estimated information.

## See Also

### Getting the travel information

- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
- [expectedDepartureDate](expecteddeparturedate.md): The expected departure time.
- [expectedArrivalDate](expectedarrivaldate.md): The expected arrival time.
- [distance](distance.md): The expected travel distance, in meters.

# transportType (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The type of conveyance to use for determining the travel time.

## Declaration

```objectivec
@property (nonatomic, readonly) MKDirectionsTransportType transportType;
```

<a id="Discussion"></a>

## Discussion

You specify the desired transportation type in your [MKDirectionsRequest](../request.md) object. If you specified [MKDirectionsTransportTypeAny](../../mkdirectionstransporttype/any.md), this property contains the transportation type used to generate the estimated information.

## See Also

### Getting the travel information

- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
- [expectedDepartureDate](expecteddeparturedate.md): The expected departure time.
- [expectedArrivalDate](expectedarrivaldate.md): The expected arrival time.
- [distance](distance.md): The expected travel distance, in meters.
