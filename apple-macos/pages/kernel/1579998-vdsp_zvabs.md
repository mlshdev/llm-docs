> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1579998-vdsp_zvabs](https://developer.apple.com/documentation/kernel/1579998-vdsp_zvabs)

# vDSP_zvabs

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Complex vector absolute values; single precision.

## Declaration

```objectivec
void vDSP_zvabs(const DSPSplitComplex *__A, vDSP_Stride __IA, float *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision complex input vector.
- `__IA`: Address stride for `A`.
- `__C`: Single-precision real output vector.
- `__IC`: Address stride for `C`.
- `__N`: The number of elements to process.

<a id="discussion"></a>

## Discussion

This performs the following operation:

![](https://docs-assets.developer.apple.com/published/097ccd4f03/vdsp_98_2x_a8979de2-a708-420c-a093-3b2570865b5e.png)
