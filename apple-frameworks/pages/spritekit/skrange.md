> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skrange](https://developer.apple.com/documentation/spritekit/skrange)

# SKRange (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A definition of a range of floating-point values.

## Declaration

```swift
class SKRange
```

<a id="overview"></a>

## Overview

You typically use a [SKRange](skrange.md) to clamp a value so that it is within the specified range.

## Topics

### Creating a Range Object

- [init(value:variance:)](skrange/init%28value_variance_%29.md): Creates and initializes a new range object using a value and a maximum distance from that value.
- [withNoLimits()](skrange/withnolimits%28%29.md): Creates and initializes a new range object that encompasses all possible values.
- [init(lowerLimit:)](skrange/init%28lowerlimit_%29.md): Creates and initializes a new range object that specifies only a minimum value.
- [init(upperLimit:)](skrange/init%28upperlimit_%29.md): Creates and initializes a new range object that specifies only a maximum value.
- [init(constantValue:)](skrange/init%28constantvalue_%29.md): Creates and initializes a new range object that specifies a constant value.
- [init(lowerLimit:upperLimit:)](skrange/init%28lowerlimit_upperlimit_%29.md): Initializes a new range object.

### Inspecting a Range Object’s Limits

- [lowerLimit](skrange/lowerlimit.md): The minimum possible value.
- [upperLimit](skrange/upperlimit.md): The maximum possible value.

### Initializers

- [init(coder:)](skrange/init%28coder_%29.md)

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
- [SKRegion](skregion.md): The definition of an arbitrary area.

# SKRange (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A definition of a range of floating-point values.

## Declaration

```objectivec
@interface SKRange : NSObject
```

<a id="overview"></a>

## Overview

You typically use a [SKRange](skrange.md) to clamp a value so that it is within the specified range.

## Topics

### Creating a Range Object

- [rangeWithLowerLimit:upperLimit:](skrange/rangewithlowerlimit_upperlimit_.md): Creates and initializes a new range object.
- [rangeWithValue:variance:](skrange/init%28value_variance_%29.md): Creates and initializes a new range object using a value and a maximum distance from that value.
- [rangeWithNoLimits](skrange/withnolimits%28%29.md): Creates and initializes a new range object that encompasses all possible values.
- [rangeWithLowerLimit:](skrange/init%28lowerlimit_%29.md): Creates and initializes a new range object that specifies only a minimum value.
- [rangeWithUpperLimit:](skrange/init%28upperlimit_%29.md): Creates and initializes a new range object that specifies only a maximum value.
- [rangeWithConstantValue:](skrange/init%28constantvalue_%29.md): Creates and initializes a new range object that specifies a constant value.
- [initWithLowerLimit:upperLimit:](skrange/init%28lowerlimit_upperlimit_%29.md): Initializes a new range object.

### Inspecting a Range Object’s Limits

- [lowerLimit](skrange/lowerlimit.md): The minimum possible value.
- [upperLimit](skrange/upperlimit.md): The maximum possible value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Mathematical Tools

- [SKKeyframeSequence](skkeyframesequence.md): An object that performs interpolation between values specified at different times (keyframes).
- [SKRegion](skregion.md): The definition of an arbitrary area.
