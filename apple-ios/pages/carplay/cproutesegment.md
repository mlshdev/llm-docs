> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutesegment](https://developer.apple.com/documentation/carplay/cproutesegment)

# CPRouteSegment (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

CPRouteSegment describes information pertaining to a segment of a route.

## Declaration

```swift
class CPRouteSegment
```

## Topics

### Initializers

- [init(origin:destination:maneuvers:laneGuidances:currentManeuvers:currentLaneGuidance:tripTravelEstimates:maneuverTravelEstimates:coordinates:)](cproutesegment/init%28origin_destination_maneuvers_laneguidances_currentmaneuvers_currentlaneguidance_triptravelestimates_maneuvertravelestimates_coordinates_%29.md)

### Instance Properties

- [coordinates](cproutesegment/coordinates-8o5b.md)
- [currentLaneGuidance](cproutesegment/currentlaneguidance.md): currentLaneGuidance is a CPLaneGuidance object, describing the current lane guidance.
- [currentManeuvers](cproutesegment/currentmaneuvers.md): currentManeuvers is an array of CPManeuver objects, describing the current maneuvers.
- [destination](cproutesegment/destination.md): destination is a CPNavigationWaypoint, describing the destination of the segment.
- [identifier](cproutesegment/identifier.md): identifier is a NSUUID that uniquely identifies this route segment.
- [laneGuidances](cproutesegment/laneguidances.md): laneGuidances is an array of CPLaneGuidance objects, each describes a single lane guidance.
- [maneuverTravelEstimates](cproutesegment/maneuvertravelestimates.md): maneuverTravelEstimates is a CPTravelEstimates object, describing the travel estimates for the first maneuver in the list of current maneuvers.
- [maneuvers](cproutesegment/maneuvers.md): maneuvers is an array of CPManeuver objects, each describes a single maneuver.
- [origin](cproutesegment/origin.md): origin is a CPNavigationWaypoint, describing the origin of the segment.
- [tripTravelEstimates](cproutesegment/triptravelestimates.md): tripTravelEstimates is a CPTravelEstimates object, describing the travel estimates for the current trip.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CPRouteSegment (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

CPRouteSegment describes information pertaining to a segment of a route.

## Declaration

```objectivec
@interface CPRouteSegment : NSObject
```

## Topics

### Instance Properties

- [coordinates](cproutesegment/coordinates-9mw42.md): coordinates is an array of CPLocationCoordinate3D, describing coordinates along the segment.
- [coordinatesCount](cproutesegment/coordinatescount.md): coordinatesCount is an integer, describing the number of coordinates along the segment.
- [currentLaneGuidance](cproutesegment/currentlaneguidance.md): currentLaneGuidance is a CPLaneGuidance object, describing the current lane guidance.
- [currentManeuvers](cproutesegment/currentmaneuvers.md): currentManeuvers is an array of CPManeuver objects, describing the current maneuvers.
- [destination](cproutesegment/destination.md): destination is a CPNavigationWaypoint, describing the destination of the segment.
- [identifier](cproutesegment/identifier.md): identifier is a NSUUID that uniquely identifies this route segment.
- [laneGuidances](cproutesegment/laneguidances.md): laneGuidances is an array of CPLaneGuidance objects, each describes a single lane guidance.
- [maneuverTravelEstimates](cproutesegment/maneuvertravelestimates.md): maneuverTravelEstimates is a CPTravelEstimates object, describing the travel estimates for the first maneuver in the list of current maneuvers.
- [maneuvers](cproutesegment/maneuvers.md): maneuvers is an array of CPManeuver objects, each describes a single maneuver.
- [origin](cproutesegment/origin.md): origin is a CPNavigationWaypoint, describing the origin of the segment.
- [tripTravelEstimates](cproutesegment/triptravelestimates.md): tripTravelEstimates is a CPTravelEstimates object, describing the travel estimates for the current trip.

### Instance Methods

- [initWithOrigin:destination:maneuvers:laneGuidances:currentManeuvers:currentLaneGuidance:tripTravelEstimates:maneuverTravelEstimates:coordinates:coordinatesCount:](cproutesegment/initwithorigin_destination_maneuvers_laneguidances_currentmaneuvers_currentlaneguidance_triptravelestimates_maneuvertravelestimates_coordinates_coordinatescount_.md): Initialize a CPRouteSegment object with maneuvers, lane guidances, the current maneuvers, the current lane guidance, trip travel estimates, the current maneuver travel estimates, the origin and the destination. If the current trip supports route sharing, also provide coordinates along the current segment.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
