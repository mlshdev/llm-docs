> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vmax](https://developer.apple.com/documentation/accelerate/vdsp_vmax)

# vDSP_vmax

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the single-precision maximum of the corresponding values of two vectors using specified strides.

## Declaration

```objectivec
extern void vDSP_vmax(const float *__A, vDSP_Stride __IA, const float *__B, vDSP_Stride __IB, float *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision real input vector.
- `__IA`: Stride for `A`.
- `__B`: Single-precision real input vector.
- `__IB`: Stride for `B`.
- `__C`: Single-precision real output vector.
- `__IC`: Stride for `C`.
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

This function compares the first `N` elements of `A` with corresponding elements of `B`, leaving the greater (or equal) values as corresponding elements of `C`:

```c
for (n = 0; n < N; ++n)
    C[n] = B[n] <= A[n] ? A[n] : B[n];
```

## See Also

### Vector-to-Vector Maxima

- [vDSP_vmaxD](vdsp_vmaxd.md): Calculates the double-precision maximum of the corresponding values of two vectors using specified strides.
- [vDSP_vmaxmg](vdsp_vmaxmg.md): Calculates the single-precision maximum magnitude of the corresponding values of two vectors using specified strides.
- [vDSP_vmaxmgD](vdsp_vmaxmgd.md): Calculates the double-precision maximum magnitude of the corresponding values of two vectors using specified strides.
