> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skregion](https://developer.apple.com/documentation/spritekit/skregion)

# SKRegion (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The definition of an arbitrary area.

## Declaration

```swift
class SKRegion
```

<a id="overview"></a>

## Overview

An [SKRegion](skregion.md) object defines a mathematical shape and is typically used to determine whether a particular point lies inside this area. For example, regions are used to define the area that a physics field can affect. Regions are defined using paths and mathematical shapes and can also be combined using constructive solid geometry.

## Topics

### Creating and Initializing Region Objects

- [infinite()](skregion/infinite%28%29.md): Returns a region that defines a region that includes all points.
- [init(size:)](skregion/init%28size_%29.md): Initializes a new region with a rectangular area.
- [init(radius:)](skregion/init%28radius_%29.md): Initializes a new region with a circular area.
- [init(path:)](skregion/init%28path_%29.md): Initializes a new region using a Core Graphics path.
- [inverse()](skregion/inverse%28%29.md): Returns a new region that is the mathematical inverse of an existing region.
- [byDifference(from:)](skregion/bydifference%28from_%29.md): Returns a new region created by subtracting the contents of another region from this region.
- [byIntersection(with:)](skregion/byintersection%28with_%29.md): Returns a new region created by intersecting the contents of this region with another region.
- [byUnion(with:)](skregion/byunion%28with_%29.md): Returns a new region created by combining the contents of this region with another region.

### Interacting with a Region

- [path](skregion/path.md): Returns a Core Graphics path that defines the region.
- [contains(\_:)](skregion/contains%28__%29.md): Returns a Boolean value that indicates whether a particular point is contained in the region.

### Initializers

- [init(coder:)](skregion/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Mathematical Tools

- [SKKeyframeSequence](skkeyframesequence.md): An object that performs interpolation between values specified at different times (keyframes).
- [SKRange](skrange.md): A definition of a range of floating-point values.

# SKRegion (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The definition of an arbitrary area.

## Declaration

```objectivec
@interface SKRegion : NSObject
```

<a id="overview"></a>

## Overview

An [SKRegion](skregion.md) object defines a mathematical shape and is typically used to determine whether a particular point lies inside this area. For example, regions are used to define the area that a physics field can affect. Regions are defined using paths and mathematical shapes and can also be combined using constructive solid geometry.

## Topics

### Creating and Initializing Region Objects

- [infiniteRegion](skregion/infinite%28%29.md): Returns a region that defines a region that includes all points.
- [initWithSize:](skregion/init%28size_%29.md): Initializes a new region with a rectangular area.
- [initWithRadius:](skregion/init%28radius_%29.md): Initializes a new region with a circular area.
- [initWithPath:](skregion/init%28path_%29.md): Initializes a new region using a Core Graphics path.
- [inverseRegion](skregion/inverse%28%29.md): Returns a new region that is the mathematical inverse of an existing region.
- [regionByDifferenceFromRegion:](skregion/bydifference%28from_%29.md): Returns a new region created by subtracting the contents of another region from this region.
- [regionByIntersectionWithRegion:](skregion/byintersection%28with_%29.md): Returns a new region created by intersecting the contents of this region with another region.
- [regionByUnionWithRegion:](skregion/byunion%28with_%29.md): Returns a new region created by combining the contents of this region with another region.

### Interacting with a Region

- [path](skregion/path.md): Returns a Core Graphics path that defines the region.
- [containsPoint:](skregion/contains%28__%29.md): Returns a Boolean value that indicates whether a particular point is contained in the region.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Mathematical Tools

- [SKKeyframeSequence](skkeyframesequence.md): An object that performs interpolation between values specified at different times (keyframes).
- [SKRange](skrange.md): A definition of a range of floating-point values.
