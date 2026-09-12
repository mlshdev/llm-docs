> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vforce/tanpi(_:result:)-9d72p](https://developer.apple.com/documentation/accelerate/vforce/tanpi(_:result:)-9d72p)

# tanPi(\_:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the tangent of pi, multiplied by each element in a vector of double-precision values.

## Declaration

```swift
static func tanPi<U, V>(_ vector: U, result: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Double, V.Element == Double
```

## See Also

### Array-Oriented Trigonometric Functions

- [acos(\_:)](acos%28__%29-8srk.md): Returns the arccosine of each element in a vector of double-precision values.
- [acos(\_:)](acos%28__%29-3hl5t.md): Returns the arccosine of each element in a vector of single-precision values.
- [acos(\_:result:)](acos%28__result_%29-3c9qz.md): Calculates the arccosine of each element in a vector of double-precision values.
- [acos(\_:result:)](acos%28__result_%29-6rc2f.md): Calculates the arccosine of each element in a vector of single-precision values.
- [asin(\_:)](asin%28__%29-454ds.md): Returns the arcsine of each element in a vector of double-precision values.
- [asin(\_:)](asin%28__%29-8vvt1.md): Returns the arcsine of each element in a vector of single-precision values.
- [asin(\_:result:)](asin%28__result_%29-94jmy.md): Calculates the arcsine of each element in a vector of double-precision values.
- [asin(\_:result:)](asin%28__result_%29-ooti.md): Calculates the arcsine of each element in a vector of single-precision values.
- [atan(\_:)](atan%28__%29-1ghr3.md): Returns the arctangent of each element in a vector of double-precision values.
- [atan(\_:)](atan%28__%29-5ejvk.md): Returns the arctangent of each element in a vector of single-precision values.
- [atan(\_:result:)](atan%28__result_%29-691jp.md): Calculates the arctangent of each element in a vector of double-precision values.
- [atan(\_:result:)](atan%28__result_%29-6bb8n.md): Calculates the arctangent of each element in a vector of single-precision values.
- [atan2(x:y:)](atan2%28x_y_%29-h54u.md): Returns the arctangent of each pair of elements in two vectors of double-precision values.
- [atan2(x:y:)](atan2%28x_y_%29-3lku3.md): Returns the arctangent of each pair of elements in two vectors of single-precision values.
- [atan2(x:y:result:)](atan2%28x_y_result_%29-184b6.md): Calculates the arctangent of each pair of elements in two vectors of double-precision values.
