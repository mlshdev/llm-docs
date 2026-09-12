> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/sincospi(_:)-3cme4](https://developer.apple.com/documentation/simd/sincospi(_:)-3cme4)

# sincospi(\_:)

**Framework:** simd  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Returns the sine and cosine of each element in a vector multiplied by pi.

## Declaration

```swift
func sincospi(_ x: simd_float8) -> (sin: simd_float8, cos: simd_float8)
```

## Parameters

- `x`: The source vector.

<a id="return-value"></a>

## Return Value

A two-element tuple. The first element contains the sines, and the second element contains the cosines.

## See Also

### Trigonometric Functions

- [acos(\_:)](acos%28__%29-7zw9c.md): Returns the arccosine of each element in a vector.
- [asin(\_:)](asin%28__%29-476k0.md): Returns the arcsine of each element in a vector.
- [atan(\_:)](atan%28__%29-al43.md): Returns the arctangent of each element in a vector.
- [atan2(\_:\_:)](atan2%28____%29-52zvp.md): Returns the arctangent of each pair of corresponding elements in two vectors.
- [cos(\_:)](cos%28__%29-6spt8.md): Returns the cosine of each element in a vector.
- [cospi(\_:)](cospi%28__%29-mwoe.md): Returns the cosine of each element in a vector multiplied by pi.
- [sin(\_:)](sin%28__%29-8n720.md): Returns the sine of each element in a vector.
- [sinpi(\_:)](sinpi%28__%29-5sfds.md): Returns the sine of each element in a vector multiplied by pi.
- [sincos(\_:)](sincos%28__%29-26uzx.md): Returns the sine and cosine of each element in a vector.
- [tan(\_:)](tan%28__%29-6t9p5.md): Returns the tangent of each element in a vector.
- [tanpi(\_:)](tanpi%28__%29-5w53i.md): Returns the tangent of each element in a vector multiplied by pi.
