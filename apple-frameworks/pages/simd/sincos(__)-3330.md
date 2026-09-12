> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/sincos(_:)-3330](https://developer.apple.com/documentation/simd/sincos(_:)-3330)

# sincos(\_:)

**Framework:** simd  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Returns the sine and cosine of each element in a vector.

## Declaration

```swift
func sincos(_ x: simd_float3) -> (sin: simd_float3, cos: simd_float3)
```

## Parameters

- `x`: The source vector.

<a id="return-value"></a>

## Return Value

A two-element tuple. The first element contains the sines, and the second element contains the cosines.

## See Also

### Trigonometric Functions

- [acos(\_:)](acos%28__%29-8bwml.md): Returns the arccosine of each element in a vector.
- [asin(\_:)](asin%28__%29-5t22r.md): Returns the arcsine of each element in a vector.
- [atan(\_:)](atan%28__%29-3otbw.md): Returns the arctangent of each element in a vector.
- [atan2(\_:\_:)](atan2%28____%29-40z9.md): Returns the arctangent of each pair of corresponding elements in two vectors.
- [cos(\_:)](cos%28__%29-2d0cu.md): Returns the cosine of each element in a vector.
- [cospi(\_:)](cospi%28__%29-1ceix.md): Returns the cosine of each element in a vector multiplied by pi.
- [sin(\_:)](sin%28__%29-78r0i.md): Returns the sine of each element in a vector.
- [sinpi(\_:)](sinpi%28__%29-99o27.md): Returns the sine of each element in a vector multiplied by pi.
- [sincospi(\_:)](sincospi%28__%29-98kdl.md): Returns the sine and cosine of each element in a vector multiplied by pi.
- [tan(\_:)](tan%28__%29-yv9u.md): Returns the tangent of each element in a vector.
- [tanpi(\_:)](tanpi%28__%29-3lzzx.md): Returns the tangent of each element in a vector multiplied by pi.
