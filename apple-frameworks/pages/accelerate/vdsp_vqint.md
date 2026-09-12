> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vqint](https://developer.apple.com/documentation/accelerate/vdsp_vqint)

# vDSP_vqint

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates single-precision vector quadratic interpolation.

## Declaration

```objectivec
extern void vDSP_vqint(const float *__A, const float *__B, vDSP_Stride __IB, float *__C, vDSP_Stride __IC, vDSP_Length __N, vDSP_Length __M);
```

## Parameters

- `__A`: Single-precision real input vector with a stride of 1.
- `__B`: Single-precision real input vector. Integer parts are indices into `A` and fractional parts are interpolation constants
- `__IB`: Stride for `B`.
- `__C`: Single-precision real output vector.
- `__IC`: Stride for `C`.
- `__N`: Count for `C`.
- `__M`: Length of `A`. Must be greater than or equal to 3.

<a id="Discussion"></a>

## Discussion

Generates `C` by interpolating between neighboring values of `A` as controlled by values in `B`. The integer portion of each element in `B` is the zero-based index of the second element of a triple of adjacent values in vector `A`.

The value of the corresponding element of `C` is derived from these three values by quadratic interpolation, using the fractional part of the value in `B`. The calculation is equivalent to the following pseudocode:

```objc
for (n = 0; n < N; ++n)
{
    b = max(trunc(B[n]), 1);
    a = B[n] - b;
    C[n] = (A[b-1]*(a**2-a)
           + A[b]*(2-2*a**2)
           + A[b+1]*(a**2+a))
           / 2;
}
```

Argument `M` is not used in the calculation. However, the integer parts of the values in `B` must be less than or equal to `M` \- 2.

## See Also

### Vector-to-Vector Quadratic Interpolation

- [vDSP_vqintD](vdsp_vqintd.md): Calculates double-precision vector quadratic interpolation.
