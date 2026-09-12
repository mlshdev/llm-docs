> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_fft_zropd](https://developer.apple.com/documentation/accelerate/vdsp_fft_zropd)

# vDSP_fft_zropD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Computes a forward or inverse out-of-place, double-precision real FFT.

## Declaration

```objectivec
extern void vDSP_fft_zropD(FFTSetupD __Setup, const DSPDoubleSplitComplex *__A, vDSP_Stride __IA, const DSPDoubleSplitComplex *__C, vDSP_Stride __IC, vDSP_Length __Log2N, FFTDirection __Direction);
```

## Parameters

- `__Setup`: The FFT setup structure for this transform. The setup’s structure `Log2N` must be greater than or equal to this function’s `Log2N`.
- `__A`: A pointer to the input data.
- `__IA`: The stride between the elements in `A`, set to 1 for best performance.
- `__C`: A pointer to the output data.
- `__IC`: The stride between the elements in `C`, set to 1 for best performance.
- `__Log2N`: The base 2 exponent of the number of elements to process. For example, to process 1024 elements, specify 10 for parameter `Log2N`.
- `__Direction`: A flag that specifies the transform direction. Pass [kFFTDirection_Forward](https://developer.apple.com/documentation/kernel/1645049-anonymous/kfftdirection_forward) to transform from the time domain to the frequency domain. Pass [kFFTDirection_Inverse](https://developer.apple.com/documentation/kernel/1645049-anonymous/kfftdirection_inverse) to transform from the frequency domain to the time domain.

<a id="Discussion"></a>

## Discussion

> **Tip**

>  To learn how the vDSP library scales and arranges the FFT output, see [Understanding data packing for Fourier transforms](understanding-data-packing-for-fourier-transforms.md).

## See Also

### Out-of-Place FFT Functions

- [vDSP_fft_zrop](vdsp_fft_zrop.md): Computes a forward or inverse out-of-place, single-precision real FFT.
