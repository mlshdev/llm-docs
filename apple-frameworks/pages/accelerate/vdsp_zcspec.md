> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zcspec](https://developer.apple.com/documentation/accelerate/vdsp_zcspec)

# vDSP_zcspec

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Computes the cross-spectrum of two complex single-precision vectors.

## Declaration

```objectivec
extern void vDSP_zcspec(const DSPSplitComplex *__A, const DSPSplitComplex *__B, const DSPSplitComplex *__C, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision complex input vector with a stride of 1.
- `__B`: Single-precision complex input vector with a stride of 1.
- `__C`: Single-precision complex input-output vector, with a stride of 1.
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

This function computes the cross-spectrum of complex input vectors `A` and `B`: it multiplies elements of `B` by the complex conjugates of elements of `A`. The results are added to complex input-output vector `C`. `C` should contain valid  data from previous processing or should be initialized according to your needs before calling this function.

![mathematical formula](https://developer.apple.com/images/com.apple.accelerate/media-2557786@2x.png)

## See Also

### Vector-to-Vector Spectra Computation

- [vDSP_zcspecD](vdsp_zcspecd.md): Computes the cross-spectrum of two complex double-precision vectors.
