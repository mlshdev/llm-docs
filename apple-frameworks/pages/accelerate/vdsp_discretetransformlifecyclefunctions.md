> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_discretetransformlifecyclefunctions](https://developer.apple.com/documentation/accelerate/vdsp_discretetransformlifecyclefunctions)

# vDSP_DiscreteTransformLifecycleFunctions

**Framework:** Accelerate  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

## Declaration

```swift
protocol vDSP_DiscreteTransformLifecycleFunctions
```

## Topics

### Type Methods

- [destroySetup(\_:)](vdsp_discretetransformlifecyclefunctions/destroysetup%28__%29.md)
- [makeDiscreteFourierTransform(previous:count:direction:transformType:)](vdsp_discretetransformlifecyclefunctions/makediscretefouriertransform%28previous_count_direction_transformtype_%29.md)

## Relationships

### Conforming Types

- [vDSP.DFTDoublePrecisionInterleavedFunctions](vdsp/dftdoubleprecisioninterleavedfunctions.md)
- [vDSP.DFTDoublePrecisionSplitComplexFunctions](vdsp/dftdoubleprecisionsplitcomplexfunctions.md)
- [vDSP.DFTSinglePrecisionInterleavedFunctions](vdsp/dftsingleprecisioninterleavedfunctions.md)
- [vDSP.DFTSinglePrecisionSplitComplexFunctions](vdsp/dftsingleprecisionsplitcomplexfunctions.md)

## See Also

### Fourier Transform

- [vDSP_DFTFunctions](vdsp_dftfunctions.md): Deprecated. A protocol that defines functions for discrete Fourier transform operations.
- [vDSP_FloatingPointDiscreteFourierTransformable](vdsp_floatingpointdiscretefouriertransformable.md): Deprecated. Types that support discrete Fourier transform operations.
- [vDSP_FourierTransformFunctions](vdsp_fouriertransformfunctions.md): A protocol that defines functions for fast Fourier transform operations.
- [vDSP_FourierTransformable](vdsp_fouriertransformable.md): Types that support fast Fourier transform operations.
- [vDSP_DiscreteFourierTransformable](vdsp_discretefouriertransformable.md)
