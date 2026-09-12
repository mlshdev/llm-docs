> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vqintd](https://developer.apple.com/documentation/accelerate/vdsp_vqintd)

# vDSP_vqintD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates double-precision vector quadratic interpolation.

## Declaration

```objectivec
extern void vDSP_vqintD(const double *__A, const double *__B, vDSP_Stride __IB, double *__C, vDSP_Stride __IC, vDSP_Length __N, vDSP_Length __M);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_vqint](vdsp_vqint.md), except for the types of vectors `A`, `B`, and `C`.

## See Also

### Vector-to-Vector Quadratic Interpolation

- [vDSP_vqint](vdsp_vqint.md): Calculates single-precision vector quadratic interpolation.
