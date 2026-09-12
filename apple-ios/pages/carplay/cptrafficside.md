> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptrafficside](https://developer.apple.com/documentation/carplay/cptrafficside)

# CPTrafficSide (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Values that represent which side of the road the traffic drives on.

## Declaration

```swift
enum CPTrafficSide
```

## Topics

### Initializers

- [init(rawValue:)](cptrafficside/init%28rawvalue_%29.md): Creates a traffic side-of-the-road enumeration item with the provided value.

### Lane statuses

- [CPTrafficSide.right](cptrafficside/right.md): Indicates the traffic drives on the right side of the roadway.
- [CPTrafficSide.left](cptrafficside/left.md): Indicates the traffic drives on the left side of the roadway.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [CPInstrumentClusterSetting](cpinstrumentclustersetting.md)
- [CPJunctionType](cpjunctiontype.md): Values that represent types of roadway junctions.
- [CPManeuverState](cpmaneuverstate.md): Values that describe the state of a maneuver.
- [CPManeuverType](cpmaneuvertype.md): Values that describe types of navigation maneuvers.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.

# CPTrafficSide (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Values that represent which side of the road the traffic drives on.

## Declaration

```objectivec
enum CPTrafficSide : NSUInteger;
```

## Topics

### Lane statuses

- [CPTrafficSideRight](cptrafficside/right.md): Indicates the traffic drives on the right side of the roadway.
- [CPTrafficSideLeft](cptrafficside/left.md): Indicates the traffic drives on the left side of the roadway.

## See Also

### Enumerations

- [CPInstrumentClusterSetting](cpinstrumentclustersetting.md)
- [CPJunctionType](cpjunctiontype.md): Values that represent types of roadway junctions.
- [CPManeuverState](cpmaneuverstate.md): Values that describe the state of a maneuver.
- [CPManeuverType](cpmaneuvertype.md): Values that describe types of navigation maneuvers.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.
