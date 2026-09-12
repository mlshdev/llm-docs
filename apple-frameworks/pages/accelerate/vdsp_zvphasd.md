> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zvphasd](https://developer.apple.com/documentation/accelerate/vdsp_zvphasd)

# vDSP_zvphasD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the double-precision element-wise phase values, in radians, of the supplied complex vector using the specified stride.

## Declaration

```objectivec
extern void vDSP_zvphasD(const DSPDoubleSplitComplex *__A, vDSP_Stride __IA, double *__C, vDSP_Stride __IC, vDSP_Length __N);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_zvphas](vdsp_zvphas.md), except for the types of vectors `A` and `C`.

## See Also

### Single-Vector Phase Computation

- [vDSP_zvphas](vdsp_zvphas.md): Calculates the single-precision element-wise phase values, in radians, of the supplied complex vector using the specified stride.
