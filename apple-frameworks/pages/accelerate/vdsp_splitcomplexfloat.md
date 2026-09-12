> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_splitcomplexfloat](https://developer.apple.com/documentation/accelerate/vdsp_splitcomplexfloat)

# vDSP_SplitComplexFloat

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

## Declaration

```swift
struct vDSP_SplitComplexFloat
```

## Topics

### Type Methods

- [destroySetup(\_:)](vdsp_splitcomplexfloat/destroysetup%28__%29.md): Releases an FFT setup object.
- [makeFFTSetup(log2n:radix:)](vdsp_splitcomplexfloat/makefftsetup%28log2n_radix_%29.md): Returns a setup structure to perform a fast Fourier transform.
- [transform(fftSetup:log2n:source:destination:direction:)](vdsp_splitcomplexfloat/transform%28fftsetup_log2n_source_destination_direction_%29.md): Performs a 1D fast Fourier transform.
- [transform2D(fftSetup:width:height:source:destination:direction:)](vdsp_splitcomplexfloat/transform2d%28fftsetup_width_height_source_destination_direction_%29.md): Performs a 2D fast Fourier transform.

## Relationships

### Conforms To

- [vDSP_FourierTransformFunctions](vdsp_fouriertransformfunctions.md)

## See Also

### Structures

- [vDSP.Biquad](vdsp/biquad.md): A single- or double-precision biquadratic filter.
- [vDSP.VectorizableDouble](vdsp/vectorizabledouble.md): A structure that represents a double-precision real value for biquadratic filtering and discrete Fourier transforms.
- [vDSP.VectorizableFloat](vdsp/vectorizablefloat.md): A structure that represents a single-precision real value for biquadratic filtering and discrete Fourier transforms.
- [vDSP.DFTDoublePrecisionInterleavedFunctions](vdsp/dftdoubleprecisioninterleavedfunctions.md)
- [vDSP.DFTDoublePrecisionSplitComplexFunctions](vdsp/dftdoubleprecisionsplitcomplexfunctions.md)
- [vDSP.DFTSinglePrecisionInterleavedFunctions](vdsp/dftsingleprecisioninterleavedfunctions.md)
- [vDSP.DFTSinglePrecisionSplitComplexFunctions](vdsp/dftsingleprecisionsplitcomplexfunctions.md)
- [vDSP_SplitComplexDouble](vdsp_splitcomplexdouble.md)
