> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zcspecd](https://developer.apple.com/documentation/accelerate/vdsp_zcspecd)

# vDSP_zcspecD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Computes the cross-spectrum of two complex double-precision vectors.

## Declaration

```objectivec
extern void vDSP_zcspecD(const DSPDoubleSplitComplex *__A, const DSPDoubleSplitComplex *__B, const DSPDoubleSplitComplex *__C, vDSP_Length __N);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_zcspec](vdsp_zcspec.md), except for the types of vectors `A`, `B`, and `C`.

## See Also

### Vector-to-Vector Spectra Computation

- [vDSP_zcspec](vdsp_zcspec.md): Computes the cross-spectrum of two complex single-precision vectors.
