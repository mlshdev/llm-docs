> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_dftfunctions](https://developer.apple.com/documentation/accelerate/vdsp_dftfunctions)

# vDSP_DFTFunctions

**Framework:** Accelerate  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A protocol that defines functions for discrete Fourier transform operations.

> Use `vDSP.DiscreteFourierTransform`.

## Declaration

```swift
protocol vDSP_DFTFunctions
```

## Topics

### Associated Types

- [Scalar](vdsp_dftfunctions/scalar.md): Deprecated.

### Type Methods

- [destroySetup(\_:)](vdsp_dftfunctions/destroysetup%28__%29.md): Deprecated.
- [makeDFTSetup(previous:count:direction:transformType:)](vdsp_dftfunctions/makedftsetup%28previous_count_direction_transformtype_%29.md): Deprecated.
- [transform(dftSetup:inputReal:inputImaginary:outputReal:outputImaginary:)](vdsp_dftfunctions/transform%28dftsetup_inputreal_inputimaginary_outputreal_outputimaginary_%29.md): Deprecated.

## Relationships

### Conforming Types

- [vDSP.VectorizableDouble](vdsp/vectorizabledouble.md)
- [vDSP.VectorizableFloat](vdsp/vectorizablefloat.md)

## See Also

### Fourier Transform

- [vDSP_FloatingPointDiscreteFourierTransformable](vdsp_floatingpointdiscretefouriertransformable.md): Deprecated. Types that support discrete Fourier transform operations.
- [vDSP_FourierTransformFunctions](vdsp_fouriertransformfunctions.md): A protocol that defines functions for fast Fourier transform operations.
- [vDSP_FourierTransformable](vdsp_fouriertransformable.md): Types that support fast Fourier transform operations.
- [vDSP_DiscreteFourierTransformable](vdsp_discretefouriertransformable.md)
- [vDSP_DiscreteTransformLifecycleFunctions](vdsp_discretetransformlifecyclefunctions.md)
