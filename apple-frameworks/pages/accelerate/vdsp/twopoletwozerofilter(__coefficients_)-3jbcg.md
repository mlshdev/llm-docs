> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/twopoletwozerofilter(_:coefficients:)-3jbcg](https://developer.apple.com/documentation/accelerate/vdsp/twopoletwozerofilter(_:coefficients:)-3jbcg)

# twoPoleTwoZeroFilter(\_:coefficients:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the result of single-precision, two-pole, two-zero recursive filtering.

## Declaration

```swift
static func twoPoleTwoZeroFilter<U>(_ source: U, coefficients: (Float, Float, Float, Float, Float)) -> [Float] where U : AccelerateBuffer, U.Element == Float
```

## See Also

### Vector-to-Vector Recursive Filtering on Real Vectors

- [twoPoleTwoZeroFilter(\_:coefficients:)](twopoletwozerofilter%28__coefficients_%29-8oaux.md): Returns the result of double-precision, two-pole, two-zero recursive filtering.
- [twoPoleTwoZeroFilter(\_:coefficients:result:)](twopoletwozerofilter%28__coefficients_result_%29-fe5l.md): Performs double-precision, two-pole, two-zero recursive filtering.
- [twoPoleTwoZeroFilter(\_:coefficients:result:)](twopoletwozerofilter%28__coefficients_result_%29-gq5l.md): Performs single-precision, two-pole, two-zero recursive filtering.
