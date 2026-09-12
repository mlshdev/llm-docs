> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/normalize(_:)-29n8k](https://developer.apple.com/documentation/simd/normalize(_:)-29n8k)

# normalize(\_:)

**Framework:** simd  
**Kind:** Function

Returns a vector pointing in the same direction of the supplied vector with a length of 1.

## Declaration

```swift
func normalize(_ x: SIMD3<Double>) -> SIMD3<Double>
```

## Parameters

- `x`: The vector to normalize.

<a id="return-value"></a>

## Return Value

The normalized vector.

<a id="Discussion"></a>

## Discussion

This function returns an undefined value if the supplied vector has zero length or is poorly scaled such that an intermediate computation overflows or underflows.

## See Also

### Geometry Functions

- [cross(\_:\_:)](cross%28____%29-7sd7t.md): Returns the cross product of two vectors.
- [dot(\_:\_:)](dot%28____%29-2sdb.md): Returns the dot product of two vectors.
- [project(\_:\_:)](project%28____%29-9jlig.md): Returns the first vector projected onto the second vector.
- [reflect(\_:n:)](reflect%28__n_%29-1vw0n.md): Returns the reflection direction of an incident vector and a unit normal vector.
- [refract(\_:n:eta:)](refract%28__n_eta_%29-13wsy.md): Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.
