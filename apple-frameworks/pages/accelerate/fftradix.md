> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/fftradix](https://developer.apple.com/documentation/accelerate/fftradix)

# FFTRadix (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The radix of the FFT decomposition.

## Declaration

```swift
typealias FFTRadix = Int32
```

<a id="Discussion"></a>

## Discussion

Pass an `FFTRadix` value as an argument to [vDSP_create_fftsetup](https://developer.apple.com/documentation/kernel/1580009-vdsp_create_fftsetup) or [vDSP_create_fftsetupD](vdsp_create_fftsetupd.md).

## See Also

### FFT Setup

- [FFTSetup](fftsetup.md): An opaque type that contains setup information for a single-precision FFT transform.
- [FFTSetupD](fftsetupd.md): An opaque type that contains setup information for a double-precision FFT transform.

# FFTRadix (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The radix of the FFT decomposition.

## Declaration

```objectivec
typedef int FFTRadix;
```

<a id="Discussion"></a>

## Discussion

Pass an `FFTRadix` value as an argument to [vDSP_create_fftsetup](https://developer.apple.com/documentation/kernel/1580009-vdsp_create_fftsetup) or [vDSP_create_fftsetupD](vdsp_create_fftsetupd.md).

## See Also

### FFT Setup

- [vDSP_create_fftsetup](vdsp_create_fftsetup.md): Returns a setup structure that contains precalculated data for single-precision FFT functions.
- [vDSP_create_fftsetupD](vdsp_create_fftsetupd.md): Returns a setup structure that contains precalculated data for double-precision FFT functions.
- [vDSP_destroy_fftsetup](vdsp_destroy_fftsetup.md): Deallocates an existing single-precision FFT setup structure.
- [vDSP_destroy_fftsetupD](vdsp_destroy_fftsetupd.md): Deallocates an existing double-precision FFT setup structure.
- [vDSP_DFT_CreateSetup](vdsp_dft_createsetup.md)
- [FFTSetup](fftsetup.md): An opaque type that contains setup information for a single-precision FFT transform.
- [FFTSetupD](fftsetupd.md): An opaque type that contains setup information for a double-precision FFT transform.
