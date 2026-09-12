> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vmaxmgd](https://developer.apple.com/documentation/accelerate/vdsp_vmaxmgd)

# vDSP_vmaxmgD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the double-precision maximum magnitude of the corresponding values of two vectors using specified strides.

## Declaration

```objectivec
extern void vDSP_vmaxmgD(const double *__A, vDSP_Stride __IA, const double *__B, vDSP_Stride __IB, double *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: Double-precision real input vector.
- `__IA`: Stride for `A`.
- `__B`: Double-precision real input vector.
- `__IB`: Stride for `B`.
- `__C`: Double-precision real output vector.
- `__IC`: Stride for `C`.
- `__N`: The number of elements to process

<a id="Discussion"></a>

## Discussion

This function compares the magnitudes (absolute values) of the first `N` elements of `A` with corresponding elements of `B`, leaving the greater (or equal) values as corresponding elements of `C`:

```c
for (n = 0; n < N; ++n)
    C[n] = |B[n]| <= |A[n]| ? |A[n]| : |B[n]|;
```

## See Also

### Vector-to-Vector Maxima

- [vDSP_vmax](vdsp_vmax.md): Calculates the single-precision maximum of the corresponding values of two vectors using specified strides.
- [vDSP_vmaxD](vdsp_vmaxd.md): Calculates the double-precision maximum of the corresponding values of two vectors using specified strides.
- [vDSP_vmaxmg](vdsp_vmaxmg.md): Calculates the single-precision maximum magnitude of the corresponding values of two vectors using specified strides.
