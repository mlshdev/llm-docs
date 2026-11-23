> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptrafficside

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

### Getting the traffic side

- [CPTrafficSide.right](cptrafficside/right.md): Indicates the traffic drives on the right side of the roadway.
- [CPTrafficSide.left](cptrafficside/left.md): Indicates the traffic drives on the left side of the roadway.

### Creating a traffic side

- [init(rawValue:)](cptrafficside/init%28rawvalue_%29.md): Creates a traffic side-of-the-road enumeration item with the provided value.

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
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.
- [CPJunctionType](cpjunctiontype.md): Values that represent types of roadway junctions.
- [NSStringFromCPJunctionType(\_:)](nsstringfromcpjunctiontype%28__%29.md)
- [NSStringFromCPLaneStatus(\_:)](nsstringfromcplanestatus%28__%29.md)
- [NSStringFromCPTrafficSide(\_:)](nsstringfromcptrafficside%28__%29.md)

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

### Getting the traffic side

- [CPTrafficSideRight](cptrafficside/right.md): Indicates the traffic drives on the right side of the roadway.
- [CPTrafficSideLeft](cptrafficside/left.md): Indicates the traffic drives on the left side of the roadway.

## See Also

### Lanes and junctions

- [CPLane](cplane.md): A class that describes characteristics of a lane on a roadway.
- [CPLaneGuidance](cplaneguidance.md): A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.
- [CPJunctionType](cpjunctiontype.md): Values that represent types of roadway junctions.
- [NSStringFromCPJunctionType](nsstringfromcpjunctiontype%28__%29.md)
- [NSStringFromCPLaneStatus](nsstringfromcplanestatus%28__%29.md)
- [NSStringFromCPTrafficSide](nsstringfromcptrafficside%28__%29.md)
