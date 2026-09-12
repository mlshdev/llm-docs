> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_fouriertransformfunctions](https://developer.apple.com/documentation/accelerate/vdsp_fouriertransformfunctions)

# vDSP_FourierTransformFunctions

**Framework:** Accelerate  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A protocol that defines functions for fast Fourier transform operations.

## Declaration

```swift
protocol vDSP_FourierTransformFunctions
```

## Topics

### Associated Types

- [SplitComplex](vdsp_fouriertransformfunctions/splitcomplex.md)

### Type Methods

- [destroySetup(\_:)](vdsp_fouriertransformfunctions/destroysetup%28__%29.md)
- [makeFFTSetup(log2n:radix:)](vdsp_fouriertransformfunctions/makefftsetup%28log2n_radix_%29.md)
- [transform(fftSetup:log2n:source:destination:direction:)](vdsp_fouriertransformfunctions/transform%28fftsetup_log2n_source_destination_direction_%29.md)
- [transform2D(fftSetup:width:height:source:destination:direction:)](vdsp_fouriertransformfunctions/transform2d%28fftsetup_width_height_source_destination_direction_%29.md)

## Relationships

### Conforming Types

- [vDSP_SplitComplexDouble](vdsp_splitcomplexdouble.md)
- [vDSP_SplitComplexFloat](vdsp_splitcomplexfloat.md)

## See Also

### Fourier Transform

- [vDSP_DFTFunctions](vdsp_dftfunctions.md): Deprecated. A protocol that defines functions for discrete Fourier transform operations.
- [vDSP_FloatingPointDiscreteFourierTransformable](vdsp_floatingpointdiscretefouriertransformable.md): Deprecated. Types that support discrete Fourier transform operations.
- [vDSP_FourierTransformable](vdsp_fouriertransformable.md): Types that support fast Fourier transform operations.
- [vDSP_DiscreteFourierTransformable](vdsp_discretefouriertransformable.md)
- [vDSP_DiscreteTransformLifecycleFunctions](vdsp_discretetransformlifecyclefunctions.md)
