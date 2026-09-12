> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvector/dotproduct(of:vector:)](https://developer.apple.com/documentation/vision/vnvector/dotproduct(of:vector:))

# dotProduct(of:vector:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Caclulates the dot product of two vectors.

## Declaration

```swift
class func dotProduct(of v1: VNVector, vector v2: VNVector) -> Double
```

## Parameters

- `v1`: The first vector.
- `v2`: The second vector.

<a id="return-value"></a>

## Return Value

The dot product value.

## See Also

### Inspecting a Vector

- [length](length.md): The length, or absolute value, of the vector.
- [r](r.md): The radius, absolute value, or length of the vector.
- [theta](theta.md): The angle between the vector direction and the positive direction of the x-axis.
- [squaredLength](squaredlength.md): The squared length of the vector.
- [x](x.md): A signed projection that indicates the vector’s direction on the x-axis.
- [y](y.md): A signed projection that indicates the vector’s direction on the y-axis.
- [unitVector(for:)](unitvector%28for_%29.md): Calculates a vector that’s normalized by preserving its direction, so that the vector length equals 1.0.

# dotProductOfVector:vector: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Caclulates the dot product of two vectors.

## Declaration

```objectivec
+ (double) dotProductOfVector:(VNVector *) v1 vector:(VNVector *) v2;
```

## Parameters

- `v1`: The first vector.
- `v2`: The second vector.

<a id="return-value"></a>

## Return Value

The dot product value.

## See Also

### Inspecting a Vector

- [length](length.md): The length, or absolute value, of the vector.
- [r](r.md): The radius, absolute value, or length of the vector.
- [theta](theta.md): The angle between the vector direction and the positive direction of the x-axis.
- [squaredLength](squaredlength.md): The squared length of the vector.
- [x](x.md): A signed projection that indicates the vector’s direction on the x-axis.
- [y](y.md): A signed projection that indicates the vector’s direction on the y-axis.
- [unitVectorForVector:](unitvector%28for_%29.md): Calculates a vector that’s normalized by preserving its direction, so that the vector length equals 1.0.
