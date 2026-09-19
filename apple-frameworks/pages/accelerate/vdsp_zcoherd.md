> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vdsp_zcoherd

# vDSP_zcoherD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Computes the coherence function of two double-precision vectors.

## Declaration

```objectivec
extern void vDSP_zcoherD(const double *__A, const double *__B, const DSPDoubleSplitComplex *__C, double *__D, vDSP_Length __N);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_zcoher](vdsp_zcoher.md), except for the types of vectors `A`, `B`, `C`, and `D`.

## See Also

### Vector-to-Vector Coherence Function Computation

- [vDSP_zcoher](vdsp_zcoher.md): Computes the coherence function of two single-precision vectors.
