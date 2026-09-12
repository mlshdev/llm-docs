> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/twopoletwozerofilter(_:coefficients:)-8oaux](https://developer.apple.com/documentation/accelerate/vdsp/twopoletwozerofilter(_:coefficients:)-8oaux)

# twoPoleTwoZeroFilter(\_:coefficients:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the result of double-precision, two-pole, two-zero recursive filtering.

## Declaration

```swift
static func twoPoleTwoZeroFilter<U>(_ source: U, coefficients: (Double, Double, Double, Double, Double)) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

## See Also

### Vector-to-Vector Recursive Filtering on Real Vectors

- [twoPoleTwoZeroFilter(\_:coefficients:)](twopoletwozerofilter%28__coefficients_%29-3jbcg.md): Returns the result of single-precision, two-pole, two-zero recursive filtering.
- [twoPoleTwoZeroFilter(\_:coefficients:result:)](twopoletwozerofilter%28__coefficients_result_%29-fe5l.md): Performs double-precision, two-pole, two-zero recursive filtering.
- [twoPoleTwoZeroFilter(\_:coefficients:result:)](twopoletwozerofilter%28__coefficients_result_%29-gq5l.md): Performs single-precision, two-pole, two-zero recursive filtering.
