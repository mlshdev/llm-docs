> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1579934-vdsp_ztoc](https://developer.apple.com/documentation/kernel/1579934-vdsp_ztoc)

# vDSP_ztoc

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

Copies the contents of a split complex vector `Z` to an interleaved complex vector `C`; single precision.

## Declaration

```objectivec
void vDSP_ztoc(const DSPSplitComplex *__Z, vDSP_Stride __IZ, DSPComplex *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__Z`: Single-precision split-complex input vector.
- `__IZ`: Stride for `Z`.
- `__C`: Single-precision interleaved complex output vector.
- `__IC`: Stride for `C`. Must be an even number.
- `__N`: The number of elements to process.

<a id="discussion"></a>

## Discussion

For best performance, `C`, `Z.realp`, and `Z.imagp` should be 16-byte aligned. 

This performs the following operations:

<a id="3921194"></a>

**Listing 1**

```occ
for (n = 0; n < N; ++n)
{
  C[n*IC/2].real = Z->realp[n*IZ];
  C[n*IC/2].imag = Z->imagp[n*IZ];
}
```

See also [vDSP_ctoz](1579975-vdsp_ctoz.md) and [vDSP_ctozD](https://developer.apple.com/documentation/accelerate/vdsp_ctozd).
