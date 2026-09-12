> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/refract(_:n:eta:)-2macj](https://developer.apple.com/documentation/simd/refract(_:n:eta:)-2macj)

# refract(\_:n:eta:)

**Framework:** simd  
**Kind:** Function

Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.

## Declaration

```swift
func refract(_ x: SIMD4<Double>, n: SIMD4<Double>, eta: Double) -> SIMD4<Double>
```

## See Also

### Geometry Functions

- [dot(\_:\_:)](dot%28____%29-5ifd.md): Returns the dot product of two vectors.
- [normalize(\_:)](normalize%28__%29-3lhrd.md): Returns a vector pointing in the same direction of the supplied vector with a length of 1.
- [project(\_:\_:)](project%28____%29-1uuxo.md): Returns the first vector projected onto the second vector.
- [reflect(\_:n:)](reflect%28__n_%29-1nabs.md): Returns the reflection direction of an incident vector and a unit normal vector.
