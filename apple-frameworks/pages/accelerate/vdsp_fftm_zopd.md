> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_fftm_zopd](https://developer.apple.com/documentation/accelerate/vdsp_fftm_zopd)

# vDSP_fftm_zopD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Computes a forward or inverse out-of-place, double-precision complex FFT on multiple signals.

## Declaration

```objectivec
extern void vDSP_fftm_zopD(FFTSetupD __Setup, const DSPDoubleSplitComplex *__A, vDSP_Stride __IA, vDSP_Stride __IMA, const DSPDoubleSplitComplex *__C, vDSP_Stride __IC, vDSP_Stride __IMC, vDSP_Length __Log2N, vDSP_Length __M, FFTDirection __Direction);
```

## Parameters

- `__Setup`: The FFT setup structure for this transform. The setup’s structure `Log2N` must be greater than or equal to this function’s `Log2N`.
- `__A`: A pointer to the input data.
- `__IA`: The stride between the elements in `A`, set to 1 for best performance.
- `__IMA`: The increment, in elements, between input signals. This parameter also specifies the length of each input signal.
- `__C`: A pointer to the output data.
- `__IC`: The stride between the elements in `C`, set to 1 for best performance.
- `__IMC`: The increment, in elements, between output signals. This parameter also specifies the length of each input signal.
- `__Log2N`: The base 2 exponent of the number of elements to process in a single input signal. For example, to process 512 elements, specify 9 for parameter `Log2N`.
- `__M`: The number of input signals.
- `__Direction`: A flag that specifies the transform direction. Pass [kFFTDirection_Forward](https://developer.apple.com/documentation/kernel/1645049-anonymous/kfftdirection_forward) to transform from the time domain to the frequency domain. Pass [kFFTDirection_Inverse](https://developer.apple.com/documentation/kernel/1645049-anonymous/kfftdirection_inverse) to transform from the frequency domain to the time domain.

<a id="Discussion"></a>

## Discussion

> **Tip**

>  To learn how the vDSP library scales and arranges the FFT output, see [Understanding data packing for Fourier transforms](understanding-data-packing-for-fourier-transforms.md).

## See Also

### Out-of-Place FFT Functions

- [vDSP_fftm_zop](vdsp_fftm_zop.md): Computes a forward or inverse out-of-place, single-precision complex FFT on multiple signals.
