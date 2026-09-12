> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvector/unitvector(for:)](https://developer.apple.com/documentation/vision/vnvector/unitvector(for:))

# unitVector(for:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates a vector that’s normalized by preserving its direction, so that the vector length equals 1.0.

## Declaration

```swift
class func unitVector(for vector: VNVector) -> VNVector
```

## Parameters

- `vector`: The vector whose unit vector you want to calculate.

<a id="return-value"></a>

## Return Value

The unit vector.

## See Also

### Inspecting a Vector

- [length](length.md): The length, or absolute value, of the vector.
- [r](r.md): The radius, absolute value, or length of the vector.
- [theta](theta.md): The angle between the vector direction and the positive direction of the x-axis.
- [squaredLength](squaredlength.md): The squared length of the vector.
- [x](x.md): A signed projection that indicates the vector’s direction on the x-axis.
- [y](y.md): A signed projection that indicates the vector’s direction on the y-axis.
- [dotProduct(of:vector:)](dotproduct%28of_vector_%29.md): Caclulates the dot product of two vectors.

# unitVectorForVector: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates a vector that’s normalized by preserving its direction, so that the vector length equals 1.0.

## Declaration

```objectivec
+ (VNVector *) unitVectorForVector:(VNVector *) vector;
```

## Parameters

- `vector`: The vector whose unit vector you want to calculate.

<a id="return-value"></a>

## Return Value

The unit vector.

## See Also

### Inspecting a Vector

- [length](length.md): The length, or absolute value, of the vector.
- [r](r.md): The radius, absolute value, or length of the vector.
- [theta](theta.md): The angle between the vector direction and the positive direction of the x-axis.
- [squaredLength](squaredlength.md): The squared length of the vector.
- [x](x.md): A signed projection that indicates the vector’s direction on the x-axis.
- [y](y.md): A signed projection that indicates the vector’s direction on the y-axis.
- [dotProductOfVector:vector:](dotproduct%28of_vector_%29.md): Caclulates the dot product of two vectors.
