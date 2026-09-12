> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/request/requestsalternateroutes](https://developer.apple.com/documentation/mapkit/mkdirections/request/requestsalternateroutes)

# requestsAlternateRoutes (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether your app requests multiple routes when they’re available.

## Declaration

```swift
var requestsAlternateRoutes: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is [false](https://developer.apple.com/documentation/swift/false), the server returns a single route between the start and end points. When this property is [true](https://developer.apple.com/documentation/swift/true), the server may return additional routes for the user to follow. The server returns additional routes only if they’re available and represent a reasonable path that the user might take.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Specifying transportation options

- [transportType](transporttype.md): The type of conveyance that the directions apply to.
- [highwayPreference](highwaypreference.md): The value that indicates whether the framework uses or avoids highways when providing directions.
- [tollPreference](tollpreference.md): The value that indicates whether the framework avoids routes that have tolls when providing directions.
- [MKDirections.RoutePreference](../routepreference.md): Options that modify how the framework selects routes when calculating directions.
- [departureDate](departuredate.md): The departure date for the trip.
- [arrivalDate](arrivaldate.md): The arrival date for the trip.

# requestsAlternateRoutes (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether your app requests multiple routes when they’re available.

## Declaration

```objectivec
@property (nonatomic) BOOL requestsAlternateRoutes;
```

<a id="Discussion"></a>

## Discussion

When this property is [false](https://developer.apple.com/documentation/swift/false), the server returns a single route between the start and end points. When this property is [true](https://developer.apple.com/documentation/swift/true), the server may return additional routes for the user to follow. The server returns additional routes only if they’re available and represent a reasonable path that the user might take.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Specifying transportation options

- [transportType](transporttype.md): The type of conveyance that the directions apply to.
- [highwayPreference](highwaypreference.md): The value that indicates whether the framework uses or avoids highways when providing directions.
- [tollPreference](tollpreference.md): The value that indicates whether the framework avoids routes that have tolls when providing directions.
- [MKDirectionsRoutePreference](../routepreference.md): Options that modify how the framework selects routes when calculating directions.
- [departureDate](departuredate.md): The departure date for the trip.
- [arrivalDate](arrivaldate.md): The arrival date for the trip.
