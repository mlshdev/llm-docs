> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_dft_interleaved_setupd](https://developer.apple.com/documentation/accelerate/vdsp_dft_interleaved_setupd)

# vDSP_DFT_Interleaved_SetupD (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque type that contains setup information for an interleaved double-precision discrete Fourier transform (DFT).

## Declaration

```swift
typealias vDSP_DFT_Interleaved_SetupD = OpaquePointer
```

<a id="Discussion"></a>

## Discussion

Call the [vDSP_DFT_Interleaved_CreateSetupD(\_:\_:\_:\_:)](vdsp_dft_interleaved_createsetupd%28________%29.md) function to initialize and allocate a new setup object. Call [vDSP_DFT_Interleaved_DestroySetupD(\_:)](vdsp_dft_interleaved_destroysetupd%28__%29.md) to free the resources associated with a setup object.

## See Also

### Data types

- [vDSP_DFT_Interleaved_Setup](vdsp_dft_interleaved_setup.md): An opaque type that contains setup information for an interleaved single-precision discrete Fourier transform (DFT).
- [vDSP_DFT_Setup](vdsp_dft_setup.md): An opaque type that contains setup information for a single-precision discrete Fourier transform (DFT).
- [vDSP_DFT_SetupD](vdsp_dft_setupd.md): An opaque type that contains setup information for a double-precision discrete Fourier transform (DFT).

# vDSP_DFT_Interleaved_SetupD (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque type that contains setup information for an interleaved double-precision discrete Fourier transform (DFT).

## Declaration

```objectivec
typedef struct vDSP_DFT_Interleaved_SetupStructD * vDSP_DFT_Interleaved_SetupD;
```

<a id="Discussion"></a>

## Discussion

Call the [vDSP_DFT_Interleaved_CreateSetupD](vdsp_dft_interleaved_createsetupd%28________%29.md) function to initialize and allocate a new setup object. Call [vDSP_DFT_Interleaved_DestroySetupD](vdsp_dft_interleaved_destroysetupd%28__%29.md) to free the resources associated with a setup object.

## See Also

### Data types

- [vDSP_DFT_Interleaved_Setup](vdsp_dft_interleaved_setup.md): An opaque type that contains setup information for an interleaved single-precision discrete Fourier transform (DFT).
- [vDSP_DFT_Setup](vdsp_dft_setup.md): An opaque type that contains setup information for a single-precision discrete Fourier transform (DFT).
- [vDSP_DFT_SetupD](vdsp_dft_setupd.md): An opaque type that contains setup information for a double-precision discrete Fourier transform (DFT).
