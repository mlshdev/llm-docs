> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvector/zero](https://developer.apple.com/documentation/vision/vnvector/zero)

# zero (Swift)

**Framework:** Vision  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A vector object with zero length.

## Declaration

```swift
class var zero: VNVector { get }
```

## See Also

### Creating a Vector

- [init(byAdding:to:)](init%28byadding_to_%29.md): Creates a new vector by adding the specified vectors.
- [init(byAddingVector:toVector:)](init%28byaddingvector_tovector_%29.md)
- [init(bySubtracting:from:)](init%28bysubtracting_from_%29.md): Creates a new vector by subtracting the first vector from the second vector.
- [init(bySubtractingVector:fromVector:)](init%28bysubtractingvector_fromvector_%29.md)
- [init(byMultiplying:byScalar:)](init%28bymultiplying_byscalar_%29.md): Creates a new vector by multiplying the specified vector’s x-axis and y-axis projections by the scalar value.
- [init(byMultiplyingVector:byScalar:)](init%28bymultiplyingvector_byscalar_%29.md)
- [init(r:theta:)](init%28r_theta_%29.md): Creates a new vector in polar coordinate space.
- [init(vectorHead:tail:)](init%28vectorhead_tail_%29.md): Creates a new vector in Cartesian coordinate space.
- [init(XComponent:yComponent:)](init%28xcomponent_ycomponent_%29-231pv.md)
- [init(xComponent:yComponent:)](init%28xcomponent_ycomponent_%29-3p5k3.md): Creates a new vector in Cartesian coordinate space, based on its x-axis and y-axis projections.
- [init(coder:)](init%28coder_%29.md)

# zeroVector (Objective-C)

**Framework:** Vision  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A vector object with zero length.

## Declaration

```objectivec
@property (class, strong, readonly) VNVector * zeroVector;
```

## See Also

### Creating a Vector

- [vectorByAddingVector:toVector:](init%28byadding_to_%29.md): Creates a new vector by adding the specified vectors.
- [vectorBySubtractingVector:fromVector:](init%28bysubtracting_from_%29.md): Creates a new vector by subtracting the first vector from the second vector.
- [vectorByMultiplyingVector:byScalar:](init%28bymultiplying_byscalar_%29.md): Creates a new vector by multiplying the specified vector’s x-axis and y-axis projections by the scalar value.
- [initWithR:theta:](init%28r_theta_%29.md): Creates a new vector in polar coordinate space.
- [initWithVectorHead:tail:](init%28vectorhead_tail_%29.md): Creates a new vector in Cartesian coordinate space.
- [initWithXComponent:yComponent:](init%28xcomponent_ycomponent_%29-3p5k3.md): Creates a new vector in Cartesian coordinate space, based on its x-axis and y-axis projections.
