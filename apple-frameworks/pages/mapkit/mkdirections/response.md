> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/response](https://developer.apple.com/documentation/mapkit/mkdirections/response)

# MKDirections.Response (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The route information that Apple servers return in response to your request for directions.

## Declaration

```swift
class Response
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. Instead, you initiate a request for directions by calling the [calculate(completionHandler:)](calculate%28completionhandler_%29.md) method of an [MKDirections](../mkdirections.md) object. The completion handler you pass to that method receives an `MKDirections.Response` object with the results.

## Topics

### Getting the end points

- [source](response/source.md): The start point of the route.
- [destination](response/destination.md): The end point of the route.

### Getting the route information

- [routes](response/routes.md): An array of route objects representing the directions between the start and end points.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Directions

- [MKDirections](../mkdirections.md): A utility object that computes directions and travel-time information based on the route information you provide.
- [MKDirections.Request](request.md): The start and end points of a route, along with the planned mode of transportation.
- [MKDirections.ETAResponse](etaresponse.md): The travel-time information that Apple servers return.
- [MKRoute](../mkroute.md): A single route between a requested start and end point.
- [MKRoute.Step](../mkroute/step.md): One portion of an overall route.

# MKDirectionsResponse (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The route information that Apple servers return in response to your request for directions.

## Declaration

```objectivec
@interface MKDirectionsResponse : NSObject
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. Instead, you initiate a request for directions by calling the [calculateDirectionsWithCompletionHandler:](calculate%28completionhandler_%29.md) method of an [MKDirections](../mkdirections.md) object. The completion handler you pass to that method receives an `MKDirections.Response` object with the results.

## Topics

### Getting the end points

- [source](response/source.md): The start point of the route.
- [destination](response/destination.md): The end point of the route.

### Getting the route information

- [routes](response/routes.md): An array of route objects representing the directions between the start and end points.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Directions

- [MKDirections](../mkdirections.md): A utility object that computes directions and travel-time information based on the route information you provide.
- [MKDirectionsRequest](request.md): The start and end points of a route, along with the planned mode of transportation.
- [MKETAResponse](etaresponse.md): The travel-time information that Apple servers return.
- [MKRoute](../mkroute.md): A single route between a requested start and end point.
- [MKRouteStep](../mkroute/step.md): One portion of an overall route.
