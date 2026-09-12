> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/fft](https://developer.apple.com/documentation/accelerate/vdsp/fft)

# vDSP.FFT

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A 1D single- and double-precision fast Fourier transform.

## Declaration

```swift
class FFT<T> where T : vDSP_FourierTransformable
```

## Topics

### Initializers

- [init(log2n:radix:ofType:)](fft/init%28log2n_radix_oftype_%29.md): Initializes a new fast Fourier transform instance.

### Instance Methods

- [forward(input:output:)](fft/forward%28input_output_%29.md): Computes an out-of-place forward fast Fourier transform.
- [inverse(input:output:)](fft/inverse%28input_output_%29.md): Computes an out-of-place inverse fast Fourier transform.
- [transform(input:output:direction:)](fft/transform%28input_output_direction_%29.md): Computes an out-of-place fast Fourier transform.

### Variables

- [FFT_FORWARD](../fft_forward.md): Forward FFT.
- [FFT_INVERSE](../fft_inverse.md): Inverse FFT.
- [FFT_RADIX2](../fft_radix2.md)
- [FFT_RADIX3](../fft_radix3.md)
- [FFT_RADIX5](../fft_radix5.md)
- [kFFTDirection_Forward](../kfftdirection_forward.md)
- [kFFTDirection_Inverse](../kfftdirection_inverse.md)
- [kFFTRadix2](../kfftradix2.md)
- [kFFTRadix3](../kfftradix3.md)
- [kFFTRadix5](../kfftradix5.md)

## Relationships

### Inherited By

- [vDSP.FFT2D](fft2d.md)

## See Also

### Objects that Simplify FFTs

- [vDSP.FFT2D](fft2d.md): A 2D single- and double-precision fast Fourier transform.
- [vDSP.FourierTransformDirection](fouriertransformdirection.md): Fast Fourier transform directions.
- [vDSP.Radix](radix.md): Fast Fourier transform radices.
