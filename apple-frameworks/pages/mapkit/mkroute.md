> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkroute](https://developer.apple.com/documentation/mapkit/mkroute)

# MKRoute (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A single route between a requested start and end point.

## Declaration

```swift
class MKRoute
```

<a id="overview"></a>

## Overview

An `MKRoute` object defines the geometry for the route — that is, it contains line segments associated with specific map coordinates. A route object may also include other information, such as the name of the route, its distance, and the expected travel time.

You don’t create instances of this class directly. When you use an [MKDirections](mkdirections.md) object to request directions from Apple, the returned [MKDirections.Response](mkdirections/response.md) object contains the possible routes.

## Topics

### Getting the route geometry

- [polyline](mkroute/polyline.md): The detailed route geometry.
- [steps](mkroute/steps.md): The array of steps that create the overall route.
- [MKRoute.Step](mkroute/step.md): One portion of an overall route.

### Getting additional route details

- [name](mkroute/name.md): The assigned name for the route.
- [hasHighways](mkroute/hashighways.md): A Boolean value that indicates whether the route contains highways.
- [hasTolls](mkroute/hastolls.md): A Boolean value that indicates whether the route has tolls.
- [advisoryNotices](mkroute/advisorynotices.md): An array of advisory notice strings for the route.
- [distance](mkroute/distance.md): The route distance, in meters.
- [expectedTravelTime](mkroute/expectedtraveltime.md): The expected travel time, in seconds.
- [transportType](mkroute/transporttype.md): The overall route transport type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Directions

- [MKDirections](mkdirections.md): A utility object that computes directions and travel-time information based on the route information you provide.
- [MKDirections.Request](mkdirections/request.md): The start and end points of a route, along with the planned mode of transportation.
- [MKDirections.Response](mkdirections/response.md): The route information that Apple servers return in response to your request for directions.
- [MKDirections.ETAResponse](mkdirections/etaresponse.md): The travel-time information that Apple servers return.
- [MKRoute.Step](mkroute/step.md): One portion of an overall route.

# MKRoute (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A single route between a requested start and end point.

## Declaration

```objectivec
@interface MKRoute : NSObject
```

<a id="overview"></a>

## Overview

An `MKRoute` object defines the geometry for the route — that is, it contains line segments associated with specific map coordinates. A route object may also include other information, such as the name of the route, its distance, and the expected travel time.

You don’t create instances of this class directly. When you use an [MKDirections](mkdirections.md) object to request directions from Apple, the returned [MKDirectionsResponse](mkdirections/response.md) object contains the possible routes.

## Topics

### Getting the route geometry

- [polyline](mkroute/polyline.md): The detailed route geometry.
- [steps](mkroute/steps.md): The array of steps that create the overall route.
- [MKRouteStep](mkroute/step.md): One portion of an overall route.

### Getting additional route details

- [name](mkroute/name.md): The assigned name for the route.
- [hasHighways](mkroute/hashighways.md): A Boolean value that indicates whether the route contains highways.
- [hasTolls](mkroute/hastolls.md): A Boolean value that indicates whether the route has tolls.
- [advisoryNotices](mkroute/advisorynotices.md): An array of advisory notice strings for the route.
- [distance](mkroute/distance.md): The route distance, in meters.
- [expectedTravelTime](mkroute/expectedtraveltime.md): The expected travel time, in seconds.
- [transportType](mkroute/transporttype.md): The overall route transport type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Directions

- [MKDirections](mkdirections.md): A utility object that computes directions and travel-time information based on the route information you provide.
- [MKDirectionsRequest](mkdirections/request.md): The start and end points of a route, along with the planned mode of transportation.
- [MKDirectionsResponse](mkdirections/response.md): The route information that Apple servers return in response to your request for directions.
- [MKETAResponse](mkdirections/etaresponse.md): The travel-time information that Apple servers return.
- [MKRouteStep](mkroute/step.md): One portion of an overall route.
