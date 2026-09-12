> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/request/transporttype](https://developer.apple.com/documentation/mapkit/mkdirections/request/transporttype)

# transportType (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The type of conveyance that the directions apply to.

## Declaration

```swift
var transportType: MKDirectionsTransportType { get set }
```

<a id="Discussion"></a>

## Discussion

You can use this property to specify whether you want directions suited to a particular type of transportation. For example, you can use this to specify that you want walking directions or driving directions.

The default value of this property is [any](../../mkdirectionstransporttype/any.md).

## See Also

### Specifying transportation options

- [highwayPreference](highwaypreference.md): The value that indicates whether the framework uses or avoids highways when providing directions.
- [tollPreference](tollpreference.md): The value that indicates whether the framework avoids routes that have tolls when providing directions.
- [MKDirections.RoutePreference](../routepreference.md): Options that modify how the framework selects routes when calculating directions.
- [requestsAlternateRoutes](requestsalternateroutes.md): A Boolean value that indicates whether your app requests multiple routes when they’re available.
- [departureDate](departuredate.md): The departure date for the trip.
- [arrivalDate](arrivaldate.md): The arrival date for the trip.

# transportType (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The type of conveyance that the directions apply to.

## Declaration

```objectivec
@property (nonatomic) MKDirectionsTransportType transportType;
```

<a id="Discussion"></a>

## Discussion

You can use this property to specify whether you want directions suited to a particular type of transportation. For example, you can use this to specify that you want walking directions or driving directions.

The default value of this property is [MKDirectionsTransportTypeAny](../../mkdirectionstransporttype/any.md).

## See Also

### Specifying transportation options

- [highwayPreference](highwaypreference.md): The value that indicates whether the framework uses or avoids highways when providing directions.
- [tollPreference](tollpreference.md): The value that indicates whether the framework avoids routes that have tolls when providing directions.
- [MKDirectionsRoutePreference](../routepreference.md): Options that modify how the framework selects routes when calculating directions.
- [requestsAlternateRoutes](requestsalternateroutes.md): A Boolean value that indicates whether your app requests multiple routes when they’re available.
- [departureDate](departuredate.md): The departure date for the trip.
- [arrivalDate](arrivaldate.md): The arrival date for the trip.
