> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections](https://developer.apple.com/documentation/mapkit/mkdirections)

# MKDirections (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A utility object that computes directions and travel-time information based on the route information you provide.

## Declaration

```swift
class MKDirections
```

## Mentioned In

- [Enabling Maps capability in Xcode](enabling-maps-capability-in-xcode.md)

<a id="overview"></a>

## Overview

You use an `MKDirections` object to ask the Apple servers to provide walking or driving directions for a route, which you specify using an [MKDirections.Request](mkdirections/request.md) object. After making a request, MapKit delivers the results asynchronously to the completion handler that you provide. You can also get the estimated travel time for the route.

Each `MKDirections` object handles a single request for directions, although you can cancel and restart that request as needed. You can create multiple instances of this class and process different route requests at the same time, but make requests only when you plan to present the corresponding route information to the user. Apps may receive an [MKError.Code.loadingThrottled](mkerror/code/loadingthrottled.md) error if the device makes too many requests in too short a time period.

## Topics

### Creating a directions object

- [init(request:)](mkdirections/init%28request_%29.md): Creates and returns a directions object using the specified request.
- [MKDirections.Request](mkdirections/request.md): The start and end points of a route, along with the planned mode of transportation.
- [MKDirections.RoutePreference](mkdirections/routepreference.md): Options that modify how the framework selects routes when calculating directions.

### Getting the directions

- [calculate(completionHandler:)](mkdirections/calculate%28completionhandler_%29.md): Begins calculating the requested route information asynchronously.
- [MKDirections.DirectionsHandler](mkdirections/directionshandler.md): The block to use for processing the requested route information.
- [MKDirections.Response](mkdirections/response.md): The route information that Apple servers return in response to your request for directions.

### Getting the ETA

- [calculateETA(completionHandler:)](mkdirections/calculateeta%28completionhandler_%29.md): Begins calculating the requested travel-time information asynchronously.
- [MKDirections.ETAHandler](mkdirections/etahandler.md): The block to use for processing travel-time information.
- [MKDirections.ETAResponse](mkdirections/etaresponse.md): The travel-time information that Apple servers return.

### Managing the request

- [cancel()](mkdirections/cancel%28%29.md): Cancels a pending request.
- [isCalculating](mkdirections/iscalculating.md): A Boolean value that indicates whether a request is in process.

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

- [MKDirections.Request](mkdirections/request.md): The start and end points of a route, along with the planned mode of transportation.
- [MKDirections.Response](mkdirections/response.md): The route information that Apple servers return in response to your request for directions.
- [MKDirections.ETAResponse](mkdirections/etaresponse.md): The travel-time information that Apple servers return.
- [MKRoute](mkroute.md): A single route between a requested start and end point.
- [MKRoute.Step](mkroute/step.md): One portion of an overall route.

# MKDirections (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A utility object that computes directions and travel-time information based on the route information you provide.

## Declaration

```objectivec
@interface MKDirections : NSObject
```

## Mentioned In

- [Enabling Maps capability in Xcode](enabling-maps-capability-in-xcode.md)

<a id="overview"></a>

## Overview

You use an `MKDirections` object to ask the Apple servers to provide walking or driving directions for a route, which you specify using an [MKDirectionsRequest](mkdirections/request.md) object. After making a request, MapKit delivers the results asynchronously to the completion handler that you provide. You can also get the estimated travel time for the route.

Each `MKDirections` object handles a single request for directions, although you can cancel and restart that request as needed. You can create multiple instances of this class and process different route requests at the same time, but make requests only when you plan to present the corresponding route information to the user. Apps may receive an [MKErrorLoadingThrottled](mkerror/code/loadingthrottled.md) error if the device makes too many requests in too short a time period.

## Topics

### Creating a directions object

- [initWithRequest:](mkdirections/init%28request_%29.md): Creates and returns a directions object using the specified request.
- [MKDirectionsRequest](mkdirections/request.md): The start and end points of a route, along with the planned mode of transportation.
- [MKDirectionsRoutePreference](mkdirections/routepreference.md): Options that modify how the framework selects routes when calculating directions.

### Getting the directions

- [calculateDirectionsWithCompletionHandler:](mkdirections/calculate%28completionhandler_%29.md): Begins calculating the requested route information asynchronously.
- [MKDirectionsHandler](mkdirections/directionshandler.md): The block to use for processing the requested route information.
- [MKDirectionsResponse](mkdirections/response.md): The route information that Apple servers return in response to your request for directions.

### Getting the ETA

- [calculateETAWithCompletionHandler:](mkdirections/calculateeta%28completionhandler_%29.md): Begins calculating the requested travel-time information asynchronously.
- [MKETAHandler](mkdirections/etahandler.md): The block to use for processing travel-time information.
- [MKETAResponse](mkdirections/etaresponse.md): The travel-time information that Apple servers return.

### Managing the request

- [cancel](mkdirections/cancel%28%29.md): Cancels a pending request.
- [calculating](mkdirections/iscalculating.md): A Boolean value that indicates whether a request is in process.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Directions

- [MKDirectionsRequest](mkdirections/request.md): The start and end points of a route, along with the planned mode of transportation.
- [MKDirectionsResponse](mkdirections/response.md): The route information that Apple servers return in response to your request for directions.
- [MKETAResponse](mkdirections/etaresponse.md): The travel-time information that Apple servers return.
- [MKRoute](mkroute.md): A single route between a requested start and end point.
- [MKRouteStep](mkroute/step.md): One portion of an overall route.
