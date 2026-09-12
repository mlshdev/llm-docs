> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/request/departuredate](https://developer.apple.com/documentation/mapkit/mkdirections/request/departuredate)

# departureDate (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The departure date for the trip.

## Declaration

```swift
var departureDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

Specifying a departure date provides the server with extra information that it can use to optimize the returned routes. For example, for a trip that takes place during commute hours, the server might consider alternatives to routes that are typically congested at that time.

The use of this property is optional.

## See Also

### Specifying transportation options

- [transportType](transporttype.md): The type of conveyance that the directions apply to.
- [highwayPreference](highwaypreference.md): The value that indicates whether the framework uses or avoids highways when providing directions.
- [tollPreference](tollpreference.md): The value that indicates whether the framework avoids routes that have tolls when providing directions.
- [MKDirections.RoutePreference](../routepreference.md): Options that modify how the framework selects routes when calculating directions.
- [requestsAlternateRoutes](requestsalternateroutes.md): A Boolean value that indicates whether your app requests multiple routes when they’re available.
- [arrivalDate](arrivaldate.md): The arrival date for the trip.

# departureDate (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The departure date for the trip.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDate * departureDate;
```

<a id="Discussion"></a>

## Discussion

Specifying a departure date provides the server with extra information that it can use to optimize the returned routes. For example, for a trip that takes place during commute hours, the server might consider alternatives to routes that are typically congested at that time.

The use of this property is optional.

## See Also

### Specifying transportation options

- [transportType](transporttype.md): The type of conveyance that the directions apply to.
- [highwayPreference](highwaypreference.md): The value that indicates whether the framework uses or avoids highways when providing directions.
- [tollPreference](tollpreference.md): The value that indicates whether the framework avoids routes that have tolls when providing directions.
- [MKDirectionsRoutePreference](../routepreference.md): Options that modify how the framework selects routes when calculating directions.
- [requestsAlternateRoutes](requestsalternateroutes.md): A Boolean value that indicates whether your app requests multiple routes when they’re available.
- [arrivalDate](arrivaldate.md): The arrival date for the trip.
