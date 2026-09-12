> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1579954-vdsp_zvmul](https://developer.apple.com/documentation/kernel/1579954-vdsp_zvmul)

# vDSP_zvmul

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

Multiplies two complex vectors, optionally conjugating one of them; single precision.

## Declaration

```objectivec
void vDSP_zvmul(const DSPSplitComplex *__A, vDSP_Stride __IA, const DSPSplitComplex *__B, vDSP_Stride __IB, const DSPSplitComplex *__C, vDSP_Stride __IC, vDSP_Length __N, int __Conjugate);
```

## Parameters

- `__A`: Single-precision complex input vector.
- `__IA`: Stride for `A`.
- `__B`: Single-precision complex input vector.
- `__IB`: Stride for `B`.
- `__C`: Single-precision complex output vector.
- `__IC`: Stride for `C`.
- `__N`: The number of elements to process.
- `__Conjugate`: Set this parameter to `1` for normal or `-1` for conjugate multiplication, respectively. Results are undefined for other values; represented by `F` in the discussion

<a id="discussion"></a>

## Discussion

If `Conjugate` = 1, this function multiplies the first `N` complex elements of `A` by corresponding complex elements of `B`. If `Conjugate` = -1, it multiplies the complex conjugates of the first `N` complex elements of `A` by corresponding complex elements of `B`. In either case, the complex results are left in `C`:

![](https://docs-assets.developer.apple.com/published/097ccd4f03/vdsp_41_2x_1a0245af-fbfc-40df-bf55-f015b974c78e.png)

where *F* stands for `Conjugate`.
