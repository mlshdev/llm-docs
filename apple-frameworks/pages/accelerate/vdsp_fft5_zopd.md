> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_fft5_zopd](https://developer.apple.com/documentation/accelerate/vdsp_fft5_zopd)

# vDSP_fft5_zopD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 9.0) · iPadOS 4.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.11) · tvOS  (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Computes a double-precision out-of-place radix-5 complex FFT, either forward or inverse.

## Declaration

```objectivec
extern void vDSP_fft5_zopD(FFTSetupD __Setup, const DSPDoubleSplitComplex *__A, vDSP_Stride __IA, const DSPDoubleSplitComplex *__C, vDSP_Stride __IC, vDSP_Length __Log2N, FFTDirection __Direction);
```

<a id="Discussion"></a>

## Discussion

The number of input and output values processed equals 5 times the power of 2 specified by parameter `Log2N`.

This is the same as [vDSP_fft5_zop](vdsp_fft5_zop.md), except for the types of the `Setup` object and the `A` and `C` vectors.

See also functions  [vDSP_create_fftsetupD](vdsp_create_fftsetupd.md), [vDSP_destroy_fftsetupD](vdsp_destroy_fftsetupd.md), and [vDSP Programming Guide](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/vDSP_Programming_Guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40005147).

## See Also

### Radix 3 and Radix 5 FFT Functions

- [vDSP_fft3_zop](vdsp_fft3_zop.md): Deprecated. Computes a single-precision out-of-place radix-3 complex FFT, either forward or inverse.
- [vDSP_fft3_zopD](vdsp_fft3_zopd.md): Deprecated. Computes a double-precision out-of-place radix-3 complex FFT, either forward or inverse.
- [vDSP_fft5_zop](vdsp_fft5_zop.md): Deprecated. Computes a single-precision out-of-place radix-5 complex FFT, either forward or inverse.
