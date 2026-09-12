> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_fftm_zrip](https://developer.apple.com/documentation/accelerate/vdsp_fftm_zrip)

# vDSP_fftm_zrip

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Computes a forward or inverse in-place, single-precision real FFT on multiple signals.

## Declaration

```objectivec
extern void vDSP_fftm_zrip(FFTSetup __Setup, const DSPSplitComplex *__C, vDSP_Stride __IC, vDSP_Stride __IM, vDSP_Length __Log2N, vDSP_Length __M, FFTDirection __Direction);
```

## Parameters

- `__Setup`: The FFT setup structure for this transform. The setup’s structure `Log2N` must be greater than or equal to this function’s `Log2N`.
- `__C`: A pointer to the input-output data.
- `__IC`: The stride between the elements in `C`, set to 1 for best performance.
- `__IM`: The increment, in complex elements, between input signals. This parameter also specifies the length of each input signal in split-complex format.
- `__Log2N`: The base 2 exponent of the number of elements to process in a single input signal. For example, to process 512 elements, specify 9 for parameter `Log2N`.
- `__M`: The number of input signals.
- `__Direction`: A flag that specifies the transform direction. Pass [kFFTDirection_Forward](https://developer.apple.com/documentation/kernel/1645049-anonymous/kfftdirection_forward) to transform from the time domain to the frequency domain. Pass [kFFTDirection_Inverse](https://developer.apple.com/documentation/kernel/1645049-anonymous/kfftdirection_inverse) to transform from the frequency domain to the time domain.

## Mentioned In

- [Performing Fourier Transforms on Multiple Signals](performing-fourier-transforms-on-multiple-signals.md)

<a id="Discussion"></a>

## Discussion

The function performs discrete Fourier transforms on multiple signals using a single call. They will work for input signals of 4 points or greater. Each of the input signals processed by a given call must have the same length and address stride.

The functions compute in-place real discrete Fourier transforms of the input signals, either from the time domain to the frequency domain (forward) or from the frequency domain to the time domain (inverse).

> **Tip**

>  To learn how the vDSP library scales and arranges the FFT output, see [Understanding data packing for Fourier transforms](understanding-data-packing-for-fourier-transforms.md).

## See Also

### In-Place FFT Functions

- [vDSP_fftm_zripD](vdsp_fftm_zripd.md): Computes a forward or inverse in-place, double-precision real FFT on multiple signals.
