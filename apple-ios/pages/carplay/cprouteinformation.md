> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cprouteinformation](https://developer.apple.com/documentation/carplay/cprouteinformation)

# CPRouteInformation (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A class that describes the characteristic elements of a route.

## Declaration

```swift
class CPRouteInformation
```

## Topics

### Initializers

- [init(maneuvers:laneGuidances:currentManeuvers:currentLaneGuidance:trip:maneuverTravelEstimates:)](cprouteinformation/init%28maneuvers_laneguidances_currentmaneuvers_currentlaneguidance_trip_maneuvertravelestimates_%29.md): Initializes a new route information object with maneuvers, lane guidances, the current maneuvers, the current lane guidance, and trip and current maneuver travel estimates.
- [init(maneuvers:laneGuidances:currentManeuvers:currentLaneGuidance:tripTravelEstimates:maneuverTravelEstimates:)](cprouteinformation/init%28maneuvers_laneguidances_currentmaneuvers_currentlaneguidance_triptravelestimates_maneuvertravelestimates_%29.md)

### Properties

- [currentLaneGuidance](cprouteinformation/currentlaneguidance.md): A lane guidance object that describes the current lane guidance.
- [currentManeuvers](cprouteinformation/currentmaneuvers.md): An array of maneuver objects that describes the current maneuvers.
- [laneGuidances](cprouteinformation/laneguidances.md): An array of lane guidance objects.
- [maneuverTravelEstimates](cprouteinformation/maneuvertravelestimates.md): An object that describes the time and distance estimates for a maneuver.
- [maneuvers](cprouteinformation/maneuvers.md): An array of maneuver objects.
- [tripTravelEstimates](cprouteinformation/triptravelestimates.md): A travel estimates object that describes the estimated time and distance for the current trip.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Routes, lanes and junctions

- [CPLane](cplane.md): A class that describes characteristics of a lane on a roadway.
- [CPLaneGuidance](cplaneguidance.md): A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.
- [CPJunctionType](cpjunctiontype.md): Values that represent types of roadway junctions.

# CPRouteInformation (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A class that describes the characteristic elements of a route.

## Declaration

```objectivec
@interface CPRouteInformation : NSObject
```

## Topics

### Initializers

- [initWithManeuvers:laneGuidances:currentManeuvers:currentLaneGuidance:tripTravelEstimates:maneuverTravelEstimates:](cprouteinformation/init%28maneuvers_laneguidances_currentmaneuvers_currentlaneguidance_trip_maneuvertravelestimates_%29.md): Initializes a new route information object with maneuvers, lane guidances, the current maneuvers, the current lane guidance, and trip and current maneuver travel estimates.

### Properties

- [currentLaneGuidance](cprouteinformation/currentlaneguidance.md): A lane guidance object that describes the current lane guidance.
- [currentManeuvers](cprouteinformation/currentmaneuvers.md): An array of maneuver objects that describes the current maneuvers.
- [laneGuidances](cprouteinformation/laneguidances.md): An array of lane guidance objects.
- [maneuverTravelEstimates](cprouteinformation/maneuvertravelestimates.md): An object that describes the time and distance estimates for a maneuver.
- [maneuvers](cprouteinformation/maneuvers.md): An array of maneuver objects.
- [tripTravelEstimates](cprouteinformation/triptravelestimates.md): A travel estimates object that describes the estimated time and distance for the current trip.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Routes, lanes and junctions

- [CPLane](cplane.md): A class that describes characteristics of a lane on a roadway.
- [CPLaneGuidance](cplaneguidance.md): A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.
- [CPJunctionType](cpjunctiontype.md): Values that represent types of roadway junctions.
