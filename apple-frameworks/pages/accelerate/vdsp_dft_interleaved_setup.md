> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_dft_interleaved_setup](https://developer.apple.com/documentation/accelerate/vdsp_dft_interleaved_setup)

# vDSP_DFT_Interleaved_Setup (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque type that contains setup information for an interleaved single-precision discrete Fourier transform (DFT).

## Declaration

```swift
typealias vDSP_DFT_Interleaved_Setup = OpaquePointer
```

<a id="Discussion"></a>

## Discussion

Call the [vDSP_DFT_Interleaved_CreateSetup(\_:\_:\_:\_:)](vdsp_dft_interleaved_createsetup%28________%29.md) function to initialize and allocate a new setup object. Call [vDSP_DFT_Interleaved_DestroySetup(\_:)](vdsp_dft_interleaved_destroysetup%28__%29.md) to free the resources associated with a setup object.

## See Also

### Data types

- [vDSP_DFT_Interleaved_SetupD](vdsp_dft_interleaved_setupd.md): An opaque type that contains setup information for an interleaved double-precision discrete Fourier transform (DFT).
- [vDSP_DFT_Setup](vdsp_dft_setup.md): An opaque type that contains setup information for a single-precision discrete Fourier transform (DFT).
- [vDSP_DFT_SetupD](vdsp_dft_setupd.md): An opaque type that contains setup information for a double-precision discrete Fourier transform (DFT).

# vDSP_DFT_Interleaved_Setup (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque type that contains setup information for an interleaved single-precision discrete Fourier transform (DFT).

## Declaration

```objectivec
typedef struct vDSP_DFT_Interleaved_SetupStruct * vDSP_DFT_Interleaved_Setup;
```

<a id="Discussion"></a>

## Discussion

Call the [vDSP_DFT_Interleaved_CreateSetup](vdsp_dft_interleaved_createsetup%28________%29.md) function to initialize and allocate a new setup object. Call [vDSP_DFT_Interleaved_DestroySetup](vdsp_dft_interleaved_destroysetup%28__%29.md) to free the resources associated with a setup object.

## See Also

### Data types

- [vDSP_DFT_Interleaved_SetupD](vdsp_dft_interleaved_setupd.md): An opaque type that contains setup information for an interleaved double-precision discrete Fourier transform (DFT).
- [vDSP_DFT_Setup](vdsp_dft_setup.md): An opaque type that contains setup information for a single-precision discrete Fourier transform (DFT).
- [vDSP_DFT_SetupD](vdsp_dft_setupd.md): An opaque type that contains setup information for a double-precision discrete Fourier transform (DFT).
