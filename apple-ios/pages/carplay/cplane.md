> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplane

# CPLane (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A class that describes characteristics of a lane on a roadway.

## Declaration

```swift
class CPLane
```

## Topics

### Getting the lane angles

- [primaryAngle](cplane/primaryangle.md): Deprecated. A value that represents the angle the framework highlights if this lane is preferred or good.
- [secondaryAngles](cplane/secondaryangles.md): Deprecated. A list of the remaining angles of this lane guidance.

### Getting the lane status

- [status](cplane/status.md): A value that describes the lane’s status.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.

### Initializers

- [init()](cplane/init%28%29.md): Deprecated.
- [init(angles:)](cplane/init%28angles_%29.md)
- [init(angles:highlightedAngle:isPreferred:)](cplane/init%28angles_highlightedangle_ispreferred_%29.md)
- [init(coder:)](cplane/init%28coder_%29.md)

### Instance Properties

- [angles](cplane/angles.md)
- [highlightedAngle](cplane/highlightedangle.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Lanes and junctions

- [CPLaneGuidance](cplaneguidance.md): A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.
- [CPJunctionType](cpjunctiontype.md): Values that represent types of roadway junctions.
- [CPTrafficSide](cptrafficside.md): Values that represent which side of the road the traffic drives on.
- [NSStringFromCPJunctionType(\_:)](nsstringfromcpjunctiontype%28__%29.md)
- [NSStringFromCPLaneStatus(\_:)](nsstringfromcplanestatus%28__%29.md)
- [NSStringFromCPTrafficSide(\_:)](nsstringfromcptrafficside%28__%29.md)

# CPLane (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A class that describes characteristics of a lane on a roadway.

## Declaration

```objectivec
@interface CPLane : NSObject
```

## Topics

### Getting the lane angles

- [primaryAngle](cplane/primaryangle.md): Deprecated. A value that represents the angle the framework highlights if this lane is preferred or good.
- [secondaryAngles](cplane/secondaryangles.md): Deprecated. A list of the remaining angles of this lane guidance.

### Getting the lane status

- [status](cplane/status.md): A value that describes the lane’s status.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.

### Instance Properties

- [angles](cplane/angles.md)
- [highlightedAngle](cplane/highlightedangle.md)

### Instance Methods

- [init](cplane/init%28%29.md): Deprecated.
- [initWithAngles:](cplane/init%28angles_%29.md)
- [initWithAngles:highlightedAngle:isPreferred:](cplane/init%28angles_highlightedangle_ispreferred_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Lanes and junctions

- [CPLaneGuidance](cplaneguidance.md): A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.
- [CPJunctionType](cpjunctiontype.md): Values that represent types of roadway junctions.
- [CPTrafficSide](cptrafficside.md): Values that represent which side of the road the traffic drives on.
- [NSStringFromCPJunctionType](nsstringfromcpjunctiontype%28__%29.md)
- [NSStringFromCPLaneStatus](nsstringfromcplanestatus%28__%29.md)
- [NSStringFromCPTrafficSide](nsstringfromcptrafficside%28__%29.md)
