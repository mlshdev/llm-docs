> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zvmags](https://developer.apple.com/documentation/accelerate/vdsp_zvmags)

# vDSP_zvmags

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Computes the squared magnitude value of each element in the supplied complex single-precision vector.

## Declaration

```objectivec
extern void vDSP_zvmags(const DSPSplitComplex *__A, vDSP_Stride __IA, float *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision complex input vector.
- `__IA`: Address stride for `A`.
- `__C`: Single-precision real output vector.
- `__IC`: Address stride for `C`.
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

Calculates the squared magnitudes of complex vector `A`, leaving the result in `C`:

![mathematical formula](https://developer.apple.com/images/com.apple.accelerate/media-2557727@2x.png)

where *Re* are the real parts of `A`, and *Im* are the imaginary parts.

## See Also

### Single-Vector Squaring

- [vDSP_vsq](vdsp_vsq.md): Computes the squared value of each element in the supplied single-precision vector.
- [vDSP_vsqD](vdsp_vsqd.md): Computes the squared value of each element in the supplied double-precision vector.
- [vDSP_vssq](vdsp_vssq.md): Computes the signed squared value of each element in the supplied single-precision vector.
- [vDSP_vssqD](vdsp_vssqd.md): Computes the signed squared value of each element in the supplied double-precision vector.
- [vDSP_zvmagsD](vdsp_zvmagsd.md): Computes the squared magnitude value of each element in the supplied complex double-precision vector.
- [vDSP_zvmgsa](vdsp_zvmgsa.md): Complex vector magnitudes square and add; single precision.
- [vDSP_zvmgsaD](vdsp_zvmgsad.md): Complex vector magnitudes square and add; double precision.
