> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1579975-vdsp_ctoz](https://developer.apple.com/documentation/kernel/1579975-vdsp_ctoz)

# vDSP_ctoz

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

Copies the contents of an interleaved complex vector `C` to a split complex vector `Z`; single precision.

## Declaration

```objectivec
void vDSP_ctoz(const DSPComplex *__C, vDSP_Stride __IC, const DSPSplitComplex *__Z, vDSP_Stride __IZ, vDSP_Length __N);
```

## Parameters

- `__C`: Single-precision interleaved complex input vector.
- `__IC`: Stride for `C`; must be an even number.
- `__Z`: Single-precision split-complex output vector.
- `__IZ`: Stride for `Z`.
- `__N`: The number of elements to process.

<a id="discussion"></a>

## Discussion

For best performance, `C`, `Z.realp`, and `Z.imagp` should be 16-byte aligned.

This function performs the following operations:

<a id="3921186"></a>

**Listing 1**

```occ
for (n = 0; n < N; ++n)
{
  Z->realp[n*IZ] = C[n*IC/2].real;
  Z->imagp[n*IZ] = C[n*IC/2].imag;
}
```

 See also functions[vDSP_ztoc](1579934-vdsp_ztoc.md) and [vDSP_ztocD](https://developer.apple.com/documentation/accelerate/vdsp_ztocd).
