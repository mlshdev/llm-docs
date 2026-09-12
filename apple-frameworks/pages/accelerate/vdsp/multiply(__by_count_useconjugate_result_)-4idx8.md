> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/multiply(_:by:count:useconjugate:result:)-4idx8](https://developer.apple.com/documentation/accelerate/vdsp/multiply(_:by:count:useconjugate:result:)-4idx8)

# multiply(\_:by:count:useConjugate:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the product of two complex single-precision vectors, optionally conjugating one of them.

## Declaration

```swift
static func multiply(_ splitComplexA: DSPSplitComplex, by splitComplexB: DSPSplitComplex, count: Int, useConjugate: Bool, result: inout DSPSplitComplex)
```

## See Also

### Multiplication

- [multiply(\_:\_:)](multiply%28____%29-9dxnc.md): Returns the double-precision element-wise product of a vector and a scalar value.
- [multiply(\_:\_:)](multiply%28____%29-1ckqt.md): Returns the double-precision element-wise product of two vectors.
- [multiply(\_:\_:)](multiply%28____%29-993yp.md): Returns the single-precision element-wise product of a vector and a scalar value.
- [multiply(\_:\_:)](multiply%28____%29-9zgw.md): Returns the single-precision element-wise product of two vectors.
- [multiply(\_:\_:result:)](multiply%28____result_%29-4xorc.md): Calculates the double-precision element-wise product of a vector and a scalar value.
- [multiply(\_:\_:result:)](multiply%28____result_%29-358cn.md): Calculates the single-precision element-wise product of a vector and a scalar value.
- [multiply(\_:\_:result:)](multiply%28____result_%29-3ptjl.md): Calculates the double-precision element-wise product of two vectors.
- [multiply(\_:\_:result:)](multiply%28____result_%29-155f3.md): Calculates the single-precision element-wise product of two vectors.
- [multiply(\_:by:count:useConjugate:result:)](multiply%28__by_count_useconjugate_result_%29-79r8u.md): Calculates the element-wise product of two complex double-precision vectors, optionally conjugating one of them.
- [multiply(\_:by:result:)](multiply%28__by_result_%29-8b9eq.md): Calculates the double-precision element-wise product of a complex vector and a real vector.
- [multiply(\_:by:result:)](multiply%28__by_result_%29-8jyhd.md): Calculates the single-precision element-wise product of a complex vector and a real vector.
- [multiply(addition:\_:)](multiply%28addition___%29-4c9in.md): Returns the double-precision element-wise product of the sum of two vectors and a scalar value.
- [multiply(addition:\_:)](multiply%28addition___%29-1wt61.md): Returns the double-precision element-wise product of a vector and the sum of two vectors.
- [multiply(addition:\_:)](multiply%28addition___%29-4fnbx.md): Returns the single-precision element-wise product of the sum of two vectors and a scalar value.
- [multiply(addition:\_:)](multiply%28addition___%29-7t59.md): Returns the single-precision element-wise product of a vector and the sum of two vectors.
