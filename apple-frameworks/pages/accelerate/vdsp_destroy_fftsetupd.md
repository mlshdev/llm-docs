> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_destroy_fftsetupd](https://developer.apple.com/documentation/accelerate/vdsp_destroy_fftsetupd)

# vDSP_destroy_fftsetupD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Deallocates an existing double-precision FFT setup structure.

## Declaration

```objectivec
extern void vDSP_destroy_fftsetupD(FFTSetupD __setup);
```

## Parameters

- `__setup`: The setup structure to deallocate, previously created by [vDSP_create_fftsetup](https://developer.apple.com/documentation/kernel/1580009-vdsp_create_fftsetup).

<a id="Discussion"></a>

## Discussion

`vDSP_destroy_fftsetup` frees existing setup data and releases any allocated memory.

## See Also

### FFT Setup

- [vDSP_create_fftsetup](vdsp_create_fftsetup.md): Returns a setup structure that contains precalculated data for single-precision FFT functions.
- [vDSP_create_fftsetupD](vdsp_create_fftsetupd.md): Returns a setup structure that contains precalculated data for double-precision FFT functions.
- [vDSP_destroy_fftsetup](vdsp_destroy_fftsetup.md): Deallocates an existing single-precision FFT setup structure.
- [vDSP_DFT_CreateSetup](vdsp_dft_createsetup.md)
- [FFTSetup](fftsetup.md): An opaque type that contains setup information for a single-precision FFT transform.
- [FFTSetupD](fftsetupd.md): An opaque type that contains setup information for a double-precision FFT transform.
- [FFTRadix](fftradix.md): The radix of the FFT decomposition.
