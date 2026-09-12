> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_dft_setupd](https://developer.apple.com/documentation/accelerate/vdsp_dft_setupd)

# vDSP_DFT_SetupD (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque type that contains setup information for a double-precision discrete Fourier transform (DFT).

## Declaration

```swift
typealias vDSP_DFT_SetupD = OpaquePointer
```

<a id="Discussion"></a>

## Discussion

Call the [vDSP_DFT_zop_CreateSetupD](vdsp_dft_zop_createsetupd.md) and [vDSP_DFT_zrop_CreateSetupD](vdsp_dft_zrop_createsetupd.md) functions to initialize and allocate a new setup object. Call [vDSP_DFT_DestroySetup](vdsp_dft_destroysetup.md) to free the resources associated with a setup object.

## See Also

### Data types

- [vDSP_DFT_Interleaved_Setup](vdsp_dft_interleaved_setup.md): An opaque type that contains setup information for an interleaved single-precision discrete Fourier transform (DFT).
- [vDSP_DFT_Interleaved_SetupD](vdsp_dft_interleaved_setupd.md): An opaque type that contains setup information for an interleaved double-precision discrete Fourier transform (DFT).
- [vDSP_DFT_Setup](vdsp_dft_setup.md): An opaque type that contains setup information for a single-precision discrete Fourier transform (DFT).

# vDSP_DFT_SetupD (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque type that contains setup information for a double-precision discrete Fourier transform (DFT).

## Declaration

```objectivec
typedef struct vDSP_DFT_SetupStructD * vDSP_DFT_SetupD;
```

<a id="Discussion"></a>

## Discussion

Call the [vDSP_DFT_zop_CreateSetupD](vdsp_dft_zop_createsetupd.md) and [vDSP_DFT_zrop_CreateSetupD](vdsp_dft_zrop_createsetupd.md) functions to initialize and allocate a new setup object. Call [vDSP_DFT_DestroySetup](vdsp_dft_destroysetup.md) to free the resources associated with a setup object.

## See Also

### Data types

- [vDSP_DFT_Interleaved_Setup](vdsp_dft_interleaved_setup.md): An opaque type that contains setup information for an interleaved single-precision discrete Fourier transform (DFT).
- [vDSP_DFT_Interleaved_SetupD](vdsp_dft_interleaved_setupd.md): An opaque type that contains setup information for an interleaved double-precision discrete Fourier transform (DFT).
- [vDSP_DFT_Setup](vdsp_dft_setup.md): An opaque type that contains setup information for a single-precision discrete Fourier transform (DFT).
