> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vmin](https://developer.apple.com/documentation/accelerate/vdsp_vmin)

# vDSP_vmin

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the single-precision minimum of the corresponding values of two vectors using specified strides.

## Declaration

```objectivec
extern void vDSP_vmin(const float *__A, vDSP_Stride __IA, const float *__B, vDSP_Stride __IB, float *__C, vDSP_Stride __IC, vDSP_Length __N);
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

This function compares the first `N` elements of `A` with corresponding elements of `B`, leaving the lesser (or equal) values as corresponding elements of `C`:

```c
for (n = 0; n < N; ++n)
    C[n] = A[n] <= B[n] ? A[n] : B[n];
```

## See Also

### Vector-to-Vector Minima

- [vDSP_vminD](vdsp_vmind.md): Calculates the double-precision minimum of the corresponding values of two vectors using specified strides.
- [vDSP_vminmg](vdsp_vminmg.md): Calculates the single-precision minimum magnitude of the corresponding values of two vectors using specified strides.
- [vDSP_vminmgD](vdsp_vminmgd.md): Calculates the double-precision minimum magnitude of the corresponding values of two vectors using specified strides.
