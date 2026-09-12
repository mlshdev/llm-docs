> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/sincos(_:)-9pa2l](https://developer.apple.com/documentation/simd/sincos(_:)-9pa2l)

# sincos(\_:)

**Framework:** simd  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Returns the sine and cosine of each element in a vector.

## Declaration

```swift
func sincos(_ x: simd_double2) -> (sin: simd_double2, cos: simd_double2)
```

## Parameters

- `x`: The source vector.

<a id="return-value"></a>

## Return Value

A two-element tuple. The first element contains the sines, and the second element contains the cosines.

## See Also

### Trigonometric Functions

- [acos(\_:)](acos%28__%29-1hgv5.md): Returns the arccosine of each element in a vector.
- [asin(\_:)](asin%28__%29-72orw.md): Returns the arcsine of each element in a vector.
- [atan(\_:)](atan%28__%29-9onaa.md): Returns the arctangent of each element in a vector.
- [atan2(\_:\_:)](atan2%28____%29-6ogu4.md): Returns the arctangent of each pair of corresponding elements in two vectors.
- [cos(\_:)](cos%28__%29-3p9ym.md): Returns the cosine of each element in a vector.
- [cospi(\_:)](cospi%28__%29-57353.md): Returns the cosine of each element in a vector multiplied by pi.
- [sin(\_:)](sin%28__%29-3p88b.md): Returns the sine of each element in a vector.
- [sinpi(\_:)](sinpi%28__%29-4lgpo.md): Returns the sine of each element in a vector multiplied by pi.
- [sincospi(\_:)](sincospi%28__%29-3fwbj.md): Returns the sine and cosine of each element in a vector multiplied by pi.
- [tan(\_:)](tan%28__%29-5czlf.md): Returns the tangent of each element in a vector.
- [tanpi(\_:)](tanpi%28__%29-9z76.md): Returns the tangent of each element in a vector multiplied by pi.
