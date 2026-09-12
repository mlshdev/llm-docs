> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/etaresponse/expecteddeparturedate](https://developer.apple.com/documentation/mapkit/mkdirections/etaresponse/expecteddeparturedate)

# expectedDepartureDate (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The expected departure time.

## Declaration

```swift
var expectedDepartureDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is dependent on whether you specify a departure date or arrival date in your [MKDirections.Request](../request.md) object. If you specify a departure date, the framework copies that date to this property. If you specify an arrival date, but not a departure date, the framework computes the departure date by subtracting the expected travel time from your arrival date. If you don’t specify an arrival date or departure date, the framework sets this property to the current time.

## See Also

### Getting the travel information

- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
- [expectedArrivalDate](expectedarrivaldate.md): The expected arrival time.
- [distance](distance.md): The expected travel distance, in meters.
- [transportType](transporttype.md): The type of conveyance to use for determining the travel time.

# expectedDepartureDate (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The expected departure time.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDate * expectedDepartureDate;
```

<a id="Discussion"></a>

## Discussion

The value of this property is dependent on whether you specify a departure date or arrival date in your [MKDirectionsRequest](../request.md) object. If you specify a departure date, the framework copies that date to this property. If you specify an arrival date, but not a departure date, the framework computes the departure date by subtracting the expected travel time from your arrival date. If you don’t specify an arrival date or departure date, the framework sets this property to the current time.

## See Also

### Getting the travel information

- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
- [expectedArrivalDate](expectedarrivaldate.md): The expected arrival time.
- [distance](distance.md): The expected travel distance, in meters.
- [transportType](transporttype.md): The type of conveyance to use for determining the travel time.
