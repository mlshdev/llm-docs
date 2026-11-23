> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplanestatus

# CPLaneStatus (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Values that describe the status or preferability of a lane.

## Declaration

```swift
enum CPLaneStatus
```

## Topics

### Getting the lane status

- [CPLaneStatus.notGood](cplanestatus/notgood.md): The lane status is not good.
- [CPLaneStatus.good](cplanestatus/good.md): The lane status is good.
- [CPLaneStatus.preferred](cplanestatus/preferred.md): The lane status is preferred.

### Creating a lane status

- [init(rawValue:)](cplanestatus/init%28rawvalue_%29.md): Creates a lane status with the provided value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Lanes and junctions

- [CPLane](cplane.md): A class that describes characteristics of a lane on a roadway.
- [CPLaneGuidance](cplaneguidance.md): A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.
- [CPJunctionType](cpjunctiontype.md): Values that represent types of roadway junctions.
- [CPTrafficSide](cptrafficside.md): Values that represent which side of the road the traffic drives on.
- [NSStringFromCPJunctionType(\_:)](nsstringfromcpjunctiontype%28__%29.md)
- [NSStringFromCPLaneStatus(\_:)](nsstringfromcplanestatus%28__%29.md)
- [NSStringFromCPTrafficSide(\_:)](nsstringfromcptrafficside%28__%29.md)

# CPLaneStatus (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Values that describe the status or preferability of a lane.

## Declaration

```objectivec
enum CPLaneStatus : NSInteger;
```

## Topics

### Getting the lane status

- [CPLaneStatusNotGood](cplanestatus/notgood.md): The lane status is not good.
- [CPLaneStatusGood](cplanestatus/good.md): The lane status is good.
- [CPLaneStatusPreferred](cplanestatus/preferred.md): The lane status is preferred.

## See Also

### Lanes and junctions

- [CPLane](cplane.md): A class that describes characteristics of a lane on a roadway.
- [CPLaneGuidance](cplaneguidance.md): A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.
- [CPJunctionType](cpjunctiontype.md): Values that represent types of roadway junctions.
- [CPTrafficSide](cptrafficside.md): Values that represent which side of the road the traffic drives on.
- [NSStringFromCPJunctionType](nsstringfromcpjunctiontype%28__%29.md)
- [NSStringFromCPLaneStatus](nsstringfromcplanestatus%28__%29.md)
- [NSStringFromCPTrafficSide](nsstringfromcptrafficside%28__%29.md)
