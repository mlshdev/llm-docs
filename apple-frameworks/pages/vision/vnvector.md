> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvector](https://developer.apple.com/documentation/vision/vnvector)

# VNVector (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An immutable 2D vector represented by its x-axis and y-axis projections.

## Declaration

```swift
class VNVector
```

## Topics

### Creating a Vector

- [init(byAdding:to:)](vnvector/init%28byadding_to_%29.md): Creates a new vector by adding the specified vectors.
- [init(byAddingVector:toVector:)](vnvector/init%28byaddingvector_tovector_%29.md)
- [init(bySubtracting:from:)](vnvector/init%28bysubtracting_from_%29.md): Creates a new vector by subtracting the first vector from the second vector.
- [init(bySubtractingVector:fromVector:)](vnvector/init%28bysubtractingvector_fromvector_%29.md)
- [init(byMultiplying:byScalar:)](vnvector/init%28bymultiplying_byscalar_%29.md): Creates a new vector by multiplying the specified vector’s x-axis and y-axis projections by the scalar value.
- [init(byMultiplyingVector:byScalar:)](vnvector/init%28bymultiplyingvector_byscalar_%29.md)
- [init(r:theta:)](vnvector/init%28r_theta_%29.md): Creates a new vector in polar coordinate space.
- [init(vectorHead:tail:)](vnvector/init%28vectorhead_tail_%29.md): Creates a new vector in Cartesian coordinate space.
- [init(XComponent:yComponent:)](vnvector/init%28xcomponent_ycomponent_%29-231pv.md)
- [init(xComponent:yComponent:)](vnvector/init%28xcomponent_ycomponent_%29-3p5k3.md): Creates a new vector in Cartesian coordinate space, based on its x-axis and y-axis projections.
- [init(coder:)](vnvector/init%28coder_%29.md)
- [zero](vnvector/zero.md): A vector object with zero length.

### Inspecting a Vector

- [length](vnvector/length.md): The length, or absolute value, of the vector.
- [r](vnvector/r.md): The radius, absolute value, or length of the vector.
- [theta](vnvector/theta.md): The angle between the vector direction and the positive direction of the x-axis.
- [squaredLength](vnvector/squaredlength.md): The squared length of the vector.
- [x](vnvector/x.md): A signed projection that indicates the vector’s direction on the x-axis.
- [y](vnvector/y.md): A signed projection that indicates the vector’s direction on the y-axis.
- [dotProduct(of:vector:)](vnvector/dotproduct%28of_vector_%29.md): Caclulates the dot product of two vectors.
- [unitVector(for:)](vnvector/unitvector%28for_%29.md): Calculates a vector that’s normalized by preserving its direction, so that the vector length equals 1.0.

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

- [VNCircle](vncircle.md): An immutable 2D circle represented by its center point and radius.

# VNVector (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An immutable 2D vector represented by its x-axis and y-axis projections.

## Declaration

```objectivec
@interface VNVector : NSObject
```

## Topics

### Creating a Vector

- [vectorByAddingVector:toVector:](vnvector/init%28byadding_to_%29.md): Creates a new vector by adding the specified vectors.
- [vectorBySubtractingVector:fromVector:](vnvector/init%28bysubtracting_from_%29.md): Creates a new vector by subtracting the first vector from the second vector.
- [vectorByMultiplyingVector:byScalar:](vnvector/init%28bymultiplying_byscalar_%29.md): Creates a new vector by multiplying the specified vector’s x-axis and y-axis projections by the scalar value.
- [initWithR:theta:](vnvector/init%28r_theta_%29.md): Creates a new vector in polar coordinate space.
- [initWithVectorHead:tail:](vnvector/init%28vectorhead_tail_%29.md): Creates a new vector in Cartesian coordinate space.
- [initWithXComponent:yComponent:](vnvector/init%28xcomponent_ycomponent_%29-3p5k3.md): Creates a new vector in Cartesian coordinate space, based on its x-axis and y-axis projections.
- [zeroVector](vnvector/zero.md): A vector object with zero length.

### Inspecting a Vector

- [length](vnvector/length.md): The length, or absolute value, of the vector.
- [r](vnvector/r.md): The radius, absolute value, or length of the vector.
- [theta](vnvector/theta.md): The angle between the vector direction and the positive direction of the x-axis.
- [squaredLength](vnvector/squaredlength.md): The squared length of the vector.
- [x](vnvector/x.md): A signed projection that indicates the vector’s direction on the x-axis.
- [y](vnvector/y.md): A signed projection that indicates the vector’s direction on the y-axis.
- [dotProductOfVector:vector:](vnvector/dotproduct%28of_vector_%29.md): Caclulates the dot product of two vectors.
- [unitVectorForVector:](vnvector/unitvector%28for_%29.md): Calculates a vector that’s normalized by preserving its direction, so that the vector length equals 1.0.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Common data types

- [VNCircle](vncircle.md): An immutable 2D circle represented by its center point and radius.
