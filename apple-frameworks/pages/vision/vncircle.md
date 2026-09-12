> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncircle](https://developer.apple.com/documentation/vision/vncircle)

# VNCircle (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An immutable 2D circle represented by its center point and radius.

## Declaration

```swift
class VNCircle
```

## Topics

### Creating a Circle

- [init(center:radius:)](vncircle/init%28center_radius_%29.md): Creates a circle with the specified center and radius.
- [init(center:diameter:)](vncircle/init%28center_diameter_%29.md): Creates a circle with the specified center and diameter.
- [init(coder:)](vncircle/init%28coder_%29.md)
- [zero](vncircle/zero.md): A circle object centered at the origin, with a radius of zero.

### Inspecting a Circle

- [center](vncircle/center.md): The circle’s center point.
- [diameter](vncircle/diameter.md): The circle’s diameter.
- [radius](vncircle/radius.md): The circle’s radius.
- [contains(\_:)](vncircle/contains%28__%29.md): Determines if this circle, including its boundary, contains the specified point.
- [contains(\_:inCircumferentialRingOfWidth:)](vncircle/contains%28__incircumferentialringofwidth_%29.md): Determines if a ring around this circle’s circumference contains the specified point.

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

### Common data types

- [VNVector](vnvector.md): An immutable 2D vector represented by its x-axis and y-axis projections.

# VNCircle (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An immutable 2D circle represented by its center point and radius.

## Declaration

```objectivec
@interface VNCircle : NSObject
```

## Topics

### Creating a Circle

- [initWithCenter:radius:](vncircle/init%28center_radius_%29.md): Creates a circle with the specified center and radius.
- [initWithCenter:diameter:](vncircle/init%28center_diameter_%29.md): Creates a circle with the specified center and diameter.
- [zeroCircle](vncircle/zero.md): A circle object centered at the origin, with a radius of zero.

### Inspecting a Circle

- [center](vncircle/center.md): The circle’s center point.
- [diameter](vncircle/diameter.md): The circle’s diameter.
- [radius](vncircle/radius.md): The circle’s radius.
- [containsPoint:](vncircle/contains%28__%29.md): Determines if this circle, including its boundary, contains the specified point.
- [containsPoint:inCircumferentialRingOfWidth:](vncircle/contains%28__incircumferentialringofwidth_%29.md): Determines if a ring around this circle’s circumference contains the specified point.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Common data types

- [VNVector](vnvector.md): An immutable 2D vector represented by its x-axis and y-axis projections.
