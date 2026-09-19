> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vdsp_zvconjd

# vDSP_zvconjD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the complex conjugate of the values in a double-precision vector using the specified stride.

## Declaration

```objectivec
extern void vDSP_zvconjD(const DSPDoubleSplitComplex *__A, vDSP_Stride __IA, const DSPDoubleSplitComplex *__C, vDSP_Stride __IC, vDSP_Length __N);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_zvconj](vdsp_zvconj.md), except for the types of vectors `A` and `C`.

## See Also

### Single-Vector Complex Conjugation

- [vDSP_zvconj](vdsp_zvconj.md): Calculates the complex conjugate of the values in a single-precision vector using the specified stride.
