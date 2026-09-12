> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/twopoletwozerofilter(_:coefficients:result:)-fe5l](https://developer.apple.com/documentation/accelerate/vdsp/twopoletwozerofilter(_:coefficients:result:)-fe5l)

# twoPoleTwoZeroFilter(\_:coefficients:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Performs double-precision, two-pole, two-zero recursive filtering.

## Declaration

```swift
static func twoPoleTwoZeroFilter<U, V>(_ source: U, coefficients: (Double, Double, Double, Double, Double), result: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Double, V.Element == Double
```

## See Also

### Vector-to-Vector Recursive Filtering on Real Vectors

- [twoPoleTwoZeroFilter(\_:coefficients:)](twopoletwozerofilter%28__coefficients_%29-8oaux.md): Returns the result of double-precision, two-pole, two-zero recursive filtering.
- [twoPoleTwoZeroFilter(\_:coefficients:)](twopoletwozerofilter%28__coefficients_%29-3jbcg.md): Returns the result of single-precision, two-pole, two-zero recursive filtering.
- [twoPoleTwoZeroFilter(\_:coefficients:result:)](twopoletwozerofilter%28__coefficients_result_%29-gq5l.md): Performs single-precision, two-pole, two-zero recursive filtering.
