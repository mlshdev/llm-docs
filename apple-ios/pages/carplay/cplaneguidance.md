> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplaneguidance](https://developer.apple.com/documentation/carplay/cplaneguidance)

# CPLaneGuidance (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.

## Declaration

```swift
class CPLaneGuidance
```

## Topics

### Properties

- [instructionVariants](cplaneguidance/instructionvariants.md): An array of strings that represent the instruction for this lane guidance, arranged from most- to least-preferred.
- [lanes](cplaneguidance/lanes.md): An array of lane objects, each describing a single lane.

### Initializers

- [init(coder:)](cplaneguidance/init%28coder_%29.md)

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

### Routes, lanes and junctions

- [CPRouteInformation](cprouteinformation.md): A class that describes the characteristic elements of a route.
- [CPLane](cplane.md): A class that describes characteristics of a lane on a roadway.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.
- [CPJunctionType](cpjunctiontype.md): Values that represent types of roadway junctions.

# CPLaneGuidance (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.

## Declaration

```objectivec
@interface CPLaneGuidance : NSObject
```

## Topics

### Properties

- [instructionVariants](cplaneguidance/instructionvariants.md): An array of strings that represent the instruction for this lane guidance, arranged from most- to least-preferred.
- [lanes](cplaneguidance/lanes.md): An array of lane objects, each describing a single lane.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Routes, lanes and junctions

- [CPRouteInformation](cprouteinformation.md): A class that describes the characteristic elements of a route.
- [CPLane](cplane.md): A class that describes characteristics of a lane on a roadway.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.
- [CPJunctionType](cpjunctiontype.md): Values that represent types of roadway junctions.
