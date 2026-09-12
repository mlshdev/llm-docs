> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkroute/step](https://developer.apple.com/documentation/mapkit/mkroute/step)

# MKRoute.Step (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

One portion of an overall route.

## Declaration

```swift
class Step
```

<a id="overview"></a>

## Overview

Each `MKRoute.Step` object corresponds to a single instruction that the person needs to follow when navigating between two points. For example, a step might involve following a single road until continuing along the route requires a turn.

You don’t create instances of this class directly. An [MKRoute](../mkroute.md) object contains the `MKRoute.Step` objects associated with a route. For more information about requesting directions, see [MKDirections](../mkdirections.md).

## Topics

### Getting the step geometry

- [polyline](step/polyline.md): The detailed step geometry.

### Getting additional step details

- [instructions](step/instructions.md): The written instructions for following the path that the step represents.
- [notice](step/notice.md): Additional notices that apply to the step.
- [distance](step/distance.md): The step distance, in meters.
- [transportType](step/transporttype.md): The transport type of the step.

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
- [MKDirections.Request](../mkdirections/request.md): The start and end points of a route, along with the planned mode of transportation.
- [MKDirections.Response](../mkdirections/response.md): The route information that Apple servers return in response to your request for directions.
- [MKDirections.ETAResponse](../mkdirections/etaresponse.md): The travel-time information that Apple servers return.
- [MKRoute](../mkroute.md): A single route between a requested start and end point.

# MKRouteStep (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

One portion of an overall route.

## Declaration

```objectivec
@interface MKRouteStep : NSObject
```

<a id="overview"></a>

## Overview

Each `MKRoute.Step` object corresponds to a single instruction that the person needs to follow when navigating between two points. For example, a step might involve following a single road until continuing along the route requires a turn.

You don’t create instances of this class directly. An [MKRoute](../mkroute.md) object contains the `MKRoute.Step` objects associated with a route. For more information about requesting directions, see [MKDirections](../mkdirections.md).

## Topics

### Getting the step geometry

- [polyline](step/polyline.md): The detailed step geometry.

### Getting additional step details

- [instructions](step/instructions.md): The written instructions for following the path that the step represents.
- [notice](step/notice.md): Additional notices that apply to the step.
- [distance](step/distance.md): The step distance, in meters.
- [transportType](step/transporttype.md): The transport type of the step.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Directions

- [MKDirections](../mkdirections.md): A utility object that computes directions and travel-time information based on the route information you provide.
- [MKDirectionsRequest](../mkdirections/request.md): The start and end points of a route, along with the planned mode of transportation.
- [MKDirectionsResponse](../mkdirections/response.md): The route information that Apple servers return in response to your request for directions.
- [MKETAResponse](../mkdirections/etaresponse.md): The travel-time information that Apple servers return.
- [MKRoute](../mkroute.md): A single route between a requested start and end point.
