> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/sincos(_:)-go67](https://developer.apple.com/documentation/simd/sincos(_:)-go67)

# sincos(\_:)

**Framework:** simd  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Returns the sine and cosine of each element in a vector.

## Declaration

```swift
func sincos(_ x: simd_float16) -> (sin: simd_float16, cos: simd_float16)
```

## Parameters

- `x`: The source vector.

<a id="return-value"></a>

## Return Value

A two-element tuple. The first element contains the sines, and the second element contains the cosines.

## See Also

### Trigonometric Functions

- [acos(\_:)](acos%28__%29-9k95t.md): Returns the arccosine of each element in a vector.
- [asin(\_:)](asin%28__%29-52bly.md): Returns the arcsine of each element in a vector.
- [atan(\_:)](atan%28__%29-7y100.md): Returns the arctangent of each element in a vector.
- [atan2(\_:\_:)](atan2%28____%29-5dweo.md): Returns the arctangent of each pair of corresponding elements in two vectors.
- [cos(\_:)](cos%28__%29-40gvn.md): Returns the cosine of each element in a vector.
- [cospi(\_:)](cospi%28__%29-7kfdh.md): Returns the cosine of each element in a vector multiplied by pi.
- [sin(\_:)](sin%28__%29-7e17y.md): Returns the sine of each element in a vector.
- [sinpi(\_:)](sinpi%28__%29-6d2hq.md): Returns the sine of each element in a vector multiplied by pi.
- [sincospi(\_:)](sincospi%28__%29-h3av.md): Returns the sine and cosine of each element in a vector multiplied by pi.
- [tan(\_:)](tan%28__%29-5q9ad.md): Returns the tangent of each element in a vector.
- [tanpi(\_:)](tanpi%28__%29-2vht8.md): Returns the tangent of each element in a vector multiplied by pi.
