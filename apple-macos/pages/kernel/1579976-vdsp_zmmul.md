> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1579976-vdsp_zmmul](https://developer.apple.com/documentation/kernel/1579976-vdsp_zmmul)

# vDSP_zmmul

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.2+

Multiplies two matrices of single-precision complex numbers out-of-place.

## Declaration

```objectivec
void vDSP_zmmul(const DSPSplitComplex *__A, vDSP_Stride __IA, const DSPSplitComplex *__B, vDSP_Stride __IB, const DSPSplitComplex *__C, vDSP_Stride __IC, vDSP_Length __M, vDSP_Length __N, vDSP_Length __P);
```

## Parameters

- `__A`: Single-precision complex `M`-by-`P` input matrix.
- `__IA`: Stride for `A`.
- `__B`: Single-precision complex `P`-by-`N`input matrix.
- `__IB`: Stride for `B`.
- `__C`: Single-precision complex `M`-by-`N` result matrix.
- `__IC`: Stride for `C`.
- `__M`: The number of rows in matrices `A` and `C`.
- `__N`: The number of columns in matrices `B` and `C`.
- `__P`: The number of columns in matrix `A` and the number of rows in matrix `B`.

<a id="discussion"></a>

## Discussion

This function performs an out-of-place complex multiplication of an `M`-by-`P` matrix `A` by a `P`-by-`N` matrix `B` and stores the results in an `M`-by-`N` matrix `C`.

This performs the following operation:

![mathematical formula](https://docs-assets.developer.apple.com/published/097ccd4f03/vdsp_49_2x_fd4ec7e6-5014-43b5-83b1-c606e770ded6.png)
