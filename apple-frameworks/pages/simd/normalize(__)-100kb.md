> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/normalize(_:)-100kb](https://developer.apple.com/documentation/simd/normalize(_:)-100kb)

# normalize(\_:)

**Framework:** simd  
**Kind:** Function

Returns a vector pointing in the same direction of the supplied vector with a length of 1.

## Declaration

```swift
func normalize(_ x: SIMD2<Float>) -> SIMD2<Float>
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

- [cross(\_:\_:)](cross%28____%29-53xk2.md): Returns the cross product of two vectors.
- [dot(\_:\_:)](dot%28____%29-1vb5g.md): Returns the dot product of two vectors.
- [project(\_:\_:)](project%28____%29-9wt83.md): Returns the first vector projected onto the second vector.
- [reflect(\_:n:)](reflect%28__n_%29-6w80i.md): Returns the reflection direction of an incident vector and a unit normal vector.
- [refract(\_:n:eta:)](refract%28__n_eta_%29-5bv79.md): Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.
