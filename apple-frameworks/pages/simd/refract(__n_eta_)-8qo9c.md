> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/refract(_:n:eta:)-8qo9c](https://developer.apple.com/documentation/simd/refract(_:n:eta:)-8qo9c)

# refract(\_:n:eta:)

**Framework:** simd  
**Kind:** Function

Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.

## Declaration

```swift
func refract(_ x: SIMD4<Float>, n: SIMD4<Float>, eta: Float) -> SIMD4<Float>
```

## See Also

### Geometry Functions

- [dot(\_:\_:)](dot%28____%29-47df.md): Returns the dot product of two vectors.
- [normalize(\_:)](normalize%28__%29-6g9xc.md): Returns a vector pointing in the same direction of the supplied vector with a length of 1.
- [project(\_:\_:)](project%28____%29-pdsh.md): Returns the first vector projected onto the second vector.
- [reflect(\_:n:)](reflect%28__n_%29-8i5cc.md): Returns the reflection direction of an incident vector and a unit normal vector.
