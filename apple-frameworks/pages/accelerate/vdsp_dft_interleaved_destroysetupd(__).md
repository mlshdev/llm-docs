> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_dft_interleaved_destroysetupd(_:)](https://developer.apple.com/documentation/accelerate/vdsp_dft_interleaved_destroysetupd(_:))

# vDSP_DFT_Interleaved_DestroySetupD(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Releases a double-precision discrete Fourier transform (DFT) setup structure.

## Declaration

```swift
func vDSP_DFT_Interleaved_DestroySetupD(_ Setup: vDSP_DFT_Interleaved_SetupD?)
```

## Parameters

- `Setup`: The setup structure to destroy.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function isn’t fully thread-safe. Don’t call this function concurrently with any function that uses or shares its underlying storage with the setup structure.

## See Also

### Interleaved discrete Fourier transform functions

- [Performing Fourier transforms on interleaved-complex data](performing-fourier-transforms-on-interleaved-complex-data.md): Optimize discrete Fourier transform (DFT) performance with the vDSP interleaved DFT routines.
- [vDSP_DFT_Interleaved_CreateSetup(\_:\_:\_:\_:)](vdsp_dft_interleaved_createsetup%28________%29.md): Returns a setup structure that contains precalculated data for forward and inverse, single-precision interleaved discrete Fourier transform (DFT) functions.
- [vDSP_DFT_Interleaved_CreateSetupD(\_:\_:\_:\_:)](vdsp_dft_interleaved_createsetupd%28________%29.md): Returns a setup structure that contains precalculated data for forward and inverse, double-precision interleaved discrete Fourier transform (DFT) functions.
- [vDSP_DFT_Interleaved_Execute(\_:\_:\_:)](vdsp_dft_interleaved_execute%28______%29.md): Calculates the single-precision discrete Fourier transform (DFT) for a vector of interleaved complex values.
- [vDSP_DFT_Interleaved_ExecuteD(\_:\_:\_:)](vdsp_dft_interleaved_executed%28______%29.md): Calculates the double-precision discrete Fourier transform (DFT) for a vector of interleaved complex values.
- [vDSP_DFT_Interleaved_DestroySetup(\_:)](vdsp_dft_interleaved_destroysetup%28__%29.md): Releases a single-precision discrete Fourier transform (DFT) setup structure.

# vDSP_DFT_Interleaved_DestroySetupD (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Releases a double-precision discrete Fourier transform (DFT) setup structure.

## Declaration

```objectivec
void vDSP_DFT_Interleaved_DestroySetupD(vDSP_DFT_Interleaved_SetupD Setup);
```

## Parameters

- `Setup`: The setup structure to destroy.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function isn’t fully thread-safe. Don’t call this function concurrently with any function that uses or shares its underlying storage with the setup structure.

## See Also

### Interleaved discrete Fourier transform functions

- [Performing Fourier transforms on interleaved-complex data](performing-fourier-transforms-on-interleaved-complex-data.md): Optimize discrete Fourier transform (DFT) performance with the vDSP interleaved DFT routines.
- [vDSP_DFT_Interleaved_CreateSetup](vdsp_dft_interleaved_createsetup%28________%29.md): Returns a setup structure that contains precalculated data for forward and inverse, single-precision interleaved discrete Fourier transform (DFT) functions.
- [vDSP_DFT_Interleaved_CreateSetupD](vdsp_dft_interleaved_createsetupd%28________%29.md): Returns a setup structure that contains precalculated data for forward and inverse, double-precision interleaved discrete Fourier transform (DFT) functions.
- [vDSP_DFT_Interleaved_Execute](vdsp_dft_interleaved_execute%28______%29.md): Calculates the single-precision discrete Fourier transform (DFT) for a vector of interleaved complex values.
- [vDSP_DFT_Interleaved_ExecuteD](vdsp_dft_interleaved_executed%28______%29.md): Calculates the double-precision discrete Fourier transform (DFT) for a vector of interleaved complex values.
- [vDSP_DFT_Interleaved_DestroySetup](vdsp_dft_interleaved_destroysetup%28__%29.md): Releases a single-precision discrete Fourier transform (DFT) setup structure.
