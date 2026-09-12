> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_fft3_zop](https://developer.apple.com/documentation/accelerate/vdsp_fft3_zop)

# vDSP_fft3_zop

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 9.0) · iPadOS 4.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.11) · tvOS  (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Computes a single-precision out-of-place radix-3 complex FFT, either forward or inverse.

## Declaration

```objectivec
extern void vDSP_fft3_zop(FFTSetup __Setup, const DSPSplitComplex *__A, vDSP_Stride __IA, const DSPSplitComplex *__C, vDSP_Stride __IC, vDSP_Length __Log2N, FFTDirection __Direction);
```

## Parameters

- `__Setup`: A setup object as returned by a call to [vDSP_create_fftsetup](https://developer.apple.com/documentation/kernel/1580009-vdsp_create_fftsetup). [kFFTRadix3](https://developer.apple.com/documentation/kernel/1645051-anonymous/kfftradix3) must be specified in the call to `vDSP_create_fftsetup`. `Setup` is preserved for reuse.
- `__A`: Complex input vector.

  > **Note**

  >  The input data may be modified.
- `__IA`: Stride between elements in `A`. The value of `IA` should be 1 for best performance.
- `__C`: Complex output vector.
- `__IC`: Stride between elements in `C`. The value of `IC` should be 1 for best performance.
- `__Log2N`: The base 2 exponent of the number of elements to process in a single input signal. `Log2N` must be between 3 and 15, inclusive.
- `__Direction`: A forward/inverse directional flag, which must specify [kFFTDirection_Forward](https://developer.apple.com/documentation/kernel/1645049-anonymous/kfftdirection_forward) (+1) or [kFFTDirection_Inverse](https://developer.apple.com/documentation/kernel/1645049-anonymous/kfftdirection_inverse) (-1)for an inverse transform.

<a id="Discussion"></a>

## Discussion

The number of input and output values processed equals 3 times the power of 2 specified by parameter `Log2N`.

This performs the following operation:

![mathematical formula](https://developer.apple.com/images/com.apple.accelerate/media-2557819@2x.png)

where F is `Direction`, C is `A`, j is the square root of `-1`, and N is two raised to the power of `Log2N`.

See also functions [vDSP_create_fftsetup](https://developer.apple.com/documentation/kernel/1580009-vdsp_create_fftsetup), [vDSP_destroy_fftsetup](https://developer.apple.com/documentation/kernel/1579978-vdsp_destroy_fftsetup), and [vDSP Programming Guide](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/vDSP_Programming_Guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40005147).

## See Also

### Radix 3 and Radix 5 FFT Functions

- [vDSP_fft3_zopD](vdsp_fft3_zopd.md): Deprecated. Computes a double-precision out-of-place radix-3 complex FFT, either forward or inverse.
- [vDSP_fft5_zop](vdsp_fft5_zop.md): Deprecated. Computes a single-precision out-of-place radix-5 complex FFT, either forward or inverse.
- [vDSP_fft5_zopD](vdsp_fft5_zopd.md): Deprecated. Computes a double-precision out-of-place radix-5 complex FFT, either forward or inverse.
