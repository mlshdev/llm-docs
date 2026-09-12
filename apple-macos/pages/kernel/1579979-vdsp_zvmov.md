> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1579979-vdsp_zvmov](https://developer.apple.com/documentation/kernel/1579979-vdsp_zvmov)

# vDSP_zvmov

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Complex vector copy; single precision.

## Declaration

```objectivec
void vDSP_zvmov(const DSPSplitComplex *__A, vDSP_Stride __IA, const DSPSplitComplex *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision complex input vector.
- `__IA`: Address stride for `A`.
- `__C`: Single-precision complex output vector.
- `__IC`: Address stride for `C`.
- `__N`: The number of elements to process.

<a id="discussion"></a>

## Discussion

Copies complex vector `A` to complex vector `C`.

![mathematical formula](https://docs-assets.developer.apple.com/published/097ccd4f03/vdsp_106_2x_226bf0dd-aec4-4fa3-a26c-4a9df225033b.png)
