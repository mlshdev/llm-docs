> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpjunctiontype](https://developer.apple.com/documentation/carplay/cpjunctiontype)

# CPJunctionType (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Values that represent types of roadway junctions.

## Declaration

```swift
enum CPJunctionType
```

## Topics

### Initializers

- [init(rawValue:)](cpjunctiontype/init%28rawvalue_%29.md): Creates a junction type with the provided integer value.

### Junction types

- [CPJunctionType.intersection](cpjunctiontype/intersection.md): A single intersection with roads coming to a common point.
- [CPJunctionType.roundabout](cpjunctiontype/roundabout.md): Junction elements that represent roads exiting the roundabout.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Routes, lanes and junctions

- [CPRouteInformation](cprouteinformation.md): A class that describes the characteristic elements of a route.
- [CPLane](cplane.md): A class that describes characteristics of a lane on a roadway.
- [CPLaneGuidance](cplaneguidance.md): A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.

# CPJunctionType (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Values that represent types of roadway junctions.

## Declaration

```objectivec
enum CPJunctionType : NSUInteger;
```

## Topics

### Junction types

- [CPJunctionTypeIntersection](cpjunctiontype/intersection.md): A single intersection with roads coming to a common point.
- [CPJunctionTypeRoundabout](cpjunctiontype/roundabout.md): Junction elements that represent roads exiting the roundabout.

## See Also

### Routes, lanes and junctions

- [CPRouteInformation](cprouteinformation.md): A class that describes the characteristic elements of a route.
- [CPLane](cplane.md): A class that describes characteristics of a lane on a roadway.
- [CPLaneGuidance](cplaneguidance.md): A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.
