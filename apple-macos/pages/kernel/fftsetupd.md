> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/fftsetupd

# FFTSetupD

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.13+

An opaque type that contains setup information for a given double-precision FFT transform.

## Declaration

```objectivec
typedef struct OpaqueFFTSetupD *FFTSetupD;
```

<a id="discussion"></a>

## Discussion

A setup object can be allocated with [vDSP_create_fftsetupD](https://developer.apple.com/documentation/accelerate/vdsp_create_fftsetupd) and destroyed with [vDSP_destroy_fftsetupD](https://developer.apple.com/documentation/accelerate/vdsp_destroy_fftsetupd). The setup object includes, among other things, precomputed tables used in computing an FFT of the specified size.
