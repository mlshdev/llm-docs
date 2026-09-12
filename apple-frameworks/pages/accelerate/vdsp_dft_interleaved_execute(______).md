> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_dft_interleaved_execute(_:_:_:)](https://developer.apple.com/documentation/accelerate/vdsp_dft_interleaved_execute(_:_:_:))

# vDSP_DFT_Interleaved_Execute(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Calculates the single-precision discrete Fourier transform (DFT)  for a vector of interleaved complex values.

## Declaration

```swift
func vDSP_DFT_Interleaved_Execute(_ Setup: vDSP_DFT_Interleaved_Setup, _ Iri: UnsafePointer<DSPComplex>, _ Ori: UnsafeMutablePointer<DSPComplex>)
```

## Parameters

- `Setup`: The DFT setup structure for this transform.
- `Iri`: A single-precision vector that contains the input values.
- `Ori`: A single-precision vector that contains the output values. The output can equal the input, but this function doesn’t support any other overlap of the input and output vectors.

<a id="Discussion"></a>

## Discussion

This function supports in-place operation where the output and input parameters are equal. The transform length must equal the transform length specified in the setup structure.

> **Important**

>  For best performance, make sure the two vector addresses you pass to this function are 16-byte-aligned.

## See Also

### Interleaved discrete Fourier transform functions

- [Performing Fourier transforms on interleaved-complex data](performing-fourier-transforms-on-interleaved-complex-data.md): Optimize discrete Fourier transform (DFT) performance with the vDSP interleaved DFT routines.
- [vDSP_DFT_Interleaved_CreateSetup(\_:\_:\_:\_:)](vdsp_dft_interleaved_createsetup%28________%29.md): Returns a setup structure that contains precalculated data for forward and inverse, single-precision interleaved discrete Fourier transform (DFT) functions.
- [vDSP_DFT_Interleaved_CreateSetupD(\_:\_:\_:\_:)](vdsp_dft_interleaved_createsetupd%28________%29.md): Returns a setup structure that contains precalculated data for forward and inverse, double-precision interleaved discrete Fourier transform (DFT) functions.
- [vDSP_DFT_Interleaved_ExecuteD(\_:\_:\_:)](vdsp_dft_interleaved_executed%28______%29.md): Calculates the double-precision discrete Fourier transform (DFT) for a vector of interleaved complex values.
- [vDSP_DFT_Interleaved_DestroySetup(\_:)](vdsp_dft_interleaved_destroysetup%28__%29.md): Releases a single-precision discrete Fourier transform (DFT) setup structure.
- [vDSP_DFT_Interleaved_DestroySetupD(\_:)](vdsp_dft_interleaved_destroysetupd%28__%29.md): Releases a double-precision discrete Fourier transform (DFT) setup structure.

# vDSP_DFT_Interleaved_Execute (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Calculates the single-precision discrete Fourier transform (DFT)  for a vector of interleaved complex values.

## Declaration

```objectivec
void vDSP_DFT_Interleaved_Execute(vDSP_DFT_Interleaved_Setup const Setup, const DSPComplex *Iri, DSPComplex *Ori);
```

## Parameters

- `Setup`: The DFT setup structure for this transform.
- `Iri`: A single-precision vector that contains the input values.
- `Ori`: A single-precision vector that contains the output values. The output can equal the input, but this function doesn’t support any other overlap of the input and output vectors.

<a id="Discussion"></a>

## Discussion

This function supports in-place operation where the output and input parameters are equal. The transform length must equal the transform length specified in the setup structure.

> **Important**

>  For best performance, make sure the two vector addresses you pass to this function are 16-byte-aligned.

## See Also

### Interleaved discrete Fourier transform functions

- [Performing Fourier transforms on interleaved-complex data](performing-fourier-transforms-on-interleaved-complex-data.md): Optimize discrete Fourier transform (DFT) performance with the vDSP interleaved DFT routines.
- [vDSP_DFT_Interleaved_CreateSetup](vdsp_dft_interleaved_createsetup%28________%29.md): Returns a setup structure that contains precalculated data for forward and inverse, single-precision interleaved discrete Fourier transform (DFT) functions.
- [vDSP_DFT_Interleaved_CreateSetupD](vdsp_dft_interleaved_createsetupd%28________%29.md): Returns a setup structure that contains precalculated data for forward and inverse, double-precision interleaved discrete Fourier transform (DFT) functions.
- [vDSP_DFT_Interleaved_ExecuteD](vdsp_dft_interleaved_executed%28______%29.md): Calculates the double-precision discrete Fourier transform (DFT) for a vector of interleaved complex values.
- [vDSP_DFT_Interleaved_DestroySetup](vdsp_dft_interleaved_destroysetup%28__%29.md): Releases a single-precision discrete Fourier transform (DFT) setup structure.
- [vDSP_DFT_Interleaved_DestroySetupD](vdsp_dft_interleaved_destroysetupd%28__%29.md): Releases a double-precision discrete Fourier transform (DFT) setup structure.
