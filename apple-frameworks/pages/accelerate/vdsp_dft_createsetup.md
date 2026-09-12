> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_dft_createsetup](https://developer.apple.com/documentation/accelerate/vdsp_dft_createsetup)

# vDSP_DFT_CreateSetup

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
vDSP_DFT_SetupvDSP_DFT_CreateSetup(vDSP_DFT_Setup __Previous, vDSP_Length __Length);
```

## See Also

### FFT Setup

- [vDSP_create_fftsetup](vdsp_create_fftsetup.md): Returns a setup structure that contains precalculated data for single-precision FFT functions.
- [vDSP_create_fftsetupD](vdsp_create_fftsetupd.md): Returns a setup structure that contains precalculated data for double-precision FFT functions.
- [vDSP_destroy_fftsetup](vdsp_destroy_fftsetup.md): Deallocates an existing single-precision FFT setup structure.
- [vDSP_destroy_fftsetupD](vdsp_destroy_fftsetupd.md): Deallocates an existing double-precision FFT setup structure.
- [FFTSetup](fftsetup.md): An opaque type that contains setup information for a single-precision FFT transform.
- [FFTSetupD](fftsetupd.md): An opaque type that contains setup information for a double-precision FFT transform.
- [FFTRadix](fftradix.md): The radix of the FFT decomposition.
