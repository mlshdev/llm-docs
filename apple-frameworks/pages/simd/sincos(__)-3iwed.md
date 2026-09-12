> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/sincos(_:)-3iwed](https://developer.apple.com/documentation/simd/sincos(_:)-3iwed)

# sincos(\_:)

**Framework:** simd  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Returns the sine and cosine of each element in a vector.

## Declaration

```swift
func sincos(_ x: simd_double8) -> (sin: simd_double8, cos: simd_double8)
```

## Parameters

- `x`: The source vector.

<a id="return-value"></a>

## Return Value

A two-element tuple. The first element contains the sines, and the second element contains the cosines.

## See Also

### Trigonometric Functions

- [acos(\_:)](acos%28__%29-2141m.md): Returns the arccosine of each element in a vector.
- [asin(\_:)](asin%28__%29-78d03.md): Returns the arcsine of each element in a vector.
- [atan(\_:)](atan%28__%29-7b52p.md): Returns the arctangent of each element in a vector.
- [atan2(\_:\_:)](atan2%28____%29-8pfg9.md): Returns the arctangent of each pair of corresponding elements in two vectors.
- [cos(\_:)](cos%28__%29-7bqey.md): Returns the cosine of each element in a vector.
- [cospi(\_:)](cospi%28__%29-8d55q.md): Returns the cosine of each element in a vector multiplied by pi.
- [sin(\_:)](sin%28__%29-1joh9.md): Returns the sine of each element in a vector.
- [sinpi(\_:)](sinpi%28__%29-9tdix.md): Returns the sine of each element in a vector multiplied by pi.
- [sincospi(\_:)](sincospi%28__%29-5yfry.md): Returns the sine and cosine of each element in a vector multiplied by pi.
- [tan(\_:)](tan%28__%29-7a2xj.md): Returns the tangent of each element in a vector.
- [tanpi(\_:)](tanpi%28__%29-3lobh.md): Returns the tangent of each element in a vector multiplied by pi.
