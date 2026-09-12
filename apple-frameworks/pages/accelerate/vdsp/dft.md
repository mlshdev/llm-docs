> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/dft](https://developer.apple.com/documentation/accelerate/vdsp/dft)

# vDSP.DFT

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A single- and double-precision discrete Fourier transform.

> Use [vDSP.DiscreteFourierTransform](discretefouriertransform.md) instead.

## Declaration

```swift
class DFT<T> where T : vDSP_FloatingPointDiscreteFourierTransformable
```

## Topics

### Initializers

- [init(previous:count:direction:transformType:ofType:)](dft/init%28previous_count_direction_transformtype_oftype_%29.md): Deprecated. Initializes a new discrete Fourier transform instance.

### Instance Methods

- [transform(inputReal:inputImaginary:)](dft/transform%28inputreal_inputimaginary_%29.md): Deprecated. Returns a discrete Fourier transform.
- [transform(inputReal:inputImaginary:outputReal:outputImaginary:)](dft/transform%28inputreal_inputimaginary_outputreal_outputimaginary_%29.md): Deprecated. Computes an out-of-place discrete Fourier transform.

## See Also

### Objects that simplify discrete Fourier transforms

- [vDSP.DiscreteFourierTransform](discretefouriertransform.md): An object that provides forward and inverse discrete Fourier transforms on single- or double-precision collections of interleaved or split-complex data.
- [vDSP.DFTTransformType](dfttransformtype.md): Discrete Fourier transform types.
