> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/divide(_:by:result:)-66qch](https://developer.apple.com/documentation/accelerate/vdsp/divide(_:by:result:)-66qch)

# divide(\_:by:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the single-precision element-wise division of a complex vector by a real vector.

## Declaration

```swift
static func divide<U>(_ splitComplex: DSPSplitComplex, by vector: U, result: inout DSPSplitComplex) where U : AccelerateBuffer, U.Element == Float
```

## See Also

### Division

- [divide(\_:\_:)](divide%28____%29-73m8v.md): Returns the double-precision element-wise division of a scalar value and a vector.
- [divide(\_:\_:)](divide%28____%29-9nb4j.md): Calculates the double-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:)](divide%28____%29-8swnm.md): Returns the double-precision element-wise division of two vectors.
- [divide(\_:\_:)](divide%28____%29-70npt.md): Returns the single-precision element-wise division of a scalar value and a vector.
- [divide(\_:\_:)](divide%28____%29-1uqmz.md): Calculates the single-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:)](divide%28____%29-6nfsi.md): Returns the single-precision element-wise division of two vectors.
- [divide(\_:\_:result:)](divide%28____result_%29-18qa3.md): Calculates the double-precision element-wise division of a scalar value and a vector.
- [divide(\_:\_:result:)](divide%28____result_%29-3emlk.md): Calculates the single-precision element-wise division of a scalar value and a vector.
- [divide(\_:\_:result:)](divide%28____result_%29-44mff.md): Calculates the double-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:result:)](divide%28____result_%29-5hwb2.md): Calculates the single-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:result:)](divide%28____result_%29-6gtmm.md): Calculates the double-precision element-wise division of two vectors.
- [divide(\_:\_:result:)](divide%28____result_%29-7ejy9.md): Calculates the single-precision element-wise division of two vectors.
- [divide(\_:by:count:result:)](divide%28__by_count_result_%29-9chz5.md): Calculates the single-precision element-wise division of a complex vector by a complex vector.
- [divide(\_:by:count:result:)](divide%28__by_count_result_%29-57jlj.md): Calculates the double-precision element-wise division of a complex vector by a complex vector.
- [divide(\_:by:result:)](divide%28__by_result_%29-402v9.md): Calculates the double-precision element-wise division of a complex vector by a complex vector.
