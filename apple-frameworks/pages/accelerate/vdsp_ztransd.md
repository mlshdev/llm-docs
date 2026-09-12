> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_ztransd](https://developer.apple.com/documentation/accelerate/vdsp_ztransd)

# vDSP_ztransD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Divides a complex double-precision vector by a real double-precision vector.

## Declaration

```objectivec
extern void vDSP_ztransD(const double *__A, const DSPDoubleSplitComplex *__B, const DSPDoubleSplitComplex *__C, vDSP_Length __N);
```

## Parameters

- `__A`: Double-precision real input vector.
- `__B`: Double-precision complex input vector.
- `__C`: Double-precision complex output vector.
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_ztrans](vdsp_ztrans.md), except for the types of vectors `A`, `B`, and `C`.

## See Also

### Binary Transfer Operations

- [vDSP_ztrans](vdsp_ztrans.md): Divides a complex single-precision vector by a real single-precision vector.
