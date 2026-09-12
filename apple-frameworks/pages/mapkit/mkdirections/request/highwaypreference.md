> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/request/highwaypreference](https://developer.apple.com/documentation/mapkit/mkdirections/request/highwaypreference)

# highwayPreference (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The value that indicates whether the framework uses or avoids highways when providing directions.

## Declaration

```swift
var highwayPreference: MKDirections.RoutePreference { get set }
```

## See Also

### Specifying transportation options

- [transportType](transporttype.md): The type of conveyance that the directions apply to.
- [tollPreference](tollpreference.md): The value that indicates whether the framework avoids routes that have tolls when providing directions.
- [MKDirections.RoutePreference](../routepreference.md): Options that modify how the framework selects routes when calculating directions.
- [requestsAlternateRoutes](requestsalternateroutes.md): A Boolean value that indicates whether your app requests multiple routes when they’re available.
- [departureDate](departuredate.md): The departure date for the trip.
- [arrivalDate](arrivaldate.md): The arrival date for the trip.

# highwayPreference (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The value that indicates whether the framework uses or avoids highways when providing directions.

## Declaration

```objectivec
@property (nonatomic) MKDirectionsRoutePreference highwayPreference;
```

## See Also

### Specifying transportation options

- [transportType](transporttype.md): The type of conveyance that the directions apply to.
- [tollPreference](tollpreference.md): The value that indicates whether the framework avoids routes that have tolls when providing directions.
- [MKDirectionsRoutePreference](../routepreference.md): Options that modify how the framework selects routes when calculating directions.
- [requestsAlternateRoutes](requestsalternateroutes.md): A Boolean value that indicates whether your app requests multiple routes when they’re available.
- [departureDate](departuredate.md): The departure date for the trip.
- [arrivalDate](arrivaldate.md): The arrival date for the trip.
