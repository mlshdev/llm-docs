> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/fftsetupd](https://developer.apple.com/documentation/accelerate/fftsetupd)

# FFTSetupD (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque type that contains setup information for a double-precision FFT transform.

## Declaration

```swift
typealias FFTSetupD = OpaquePointer
```

<a id="Discussion"></a>

## Discussion

Call the [vDSP_create_fftsetupD](vdsp_create_fftsetupd.md) function to create a setup structure, and calll [vDSP_destroy_fftsetupD](vdsp_destroy_fftsetupd.md) to deallocate a setup structure.

## See Also

### FFT Setup

- [FFTSetup](fftsetup.md): An opaque type that contains setup information for a single-precision FFT transform.
- [FFTRadix](fftradix.md): The radix of the FFT decomposition.

# FFTSetupD (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque type that contains setup information for a double-precision FFT transform.

## Declaration

```objectivec
typedef struct OpaqueFFTSetupD * FFTSetupD;
```

<a id="Discussion"></a>

## Discussion

Call the [vDSP_create_fftsetupD](vdsp_create_fftsetupd.md) function to create a setup structure, and calll [vDSP_destroy_fftsetupD](vdsp_destroy_fftsetupd.md) to deallocate a setup structure.

## See Also

### FFT Setup

- [vDSP_create_fftsetup](vdsp_create_fftsetup.md): Returns a setup structure that contains precalculated data for single-precision FFT functions.
- [vDSP_create_fftsetupD](vdsp_create_fftsetupd.md): Returns a setup structure that contains precalculated data for double-precision FFT functions.
- [vDSP_destroy_fftsetup](vdsp_destroy_fftsetup.md): Deallocates an existing single-precision FFT setup structure.
- [vDSP_destroy_fftsetupD](vdsp_destroy_fftsetupd.md): Deallocates an existing double-precision FFT setup structure.
- [vDSP_DFT_CreateSetup](vdsp_dft_createsetup.md)
- [FFTSetup](fftsetup.md): An opaque type that contains setup information for a single-precision FFT transform.
- [FFTRadix](fftradix.md): The radix of the FFT decomposition.
