> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/fftsetup

# FFTSetup

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.13+

An opaque type that contains setup information for a given FFT transform.

## Declaration

```objectivec
typedef struct OpaqueFFTSetup *FFTSetup;
```

<a id="discussion"></a>

## Discussion

A setup object can be allocated with [vDSP_create_fftsetup](1580009-vdsp_create_fftsetup.md) and destroyed with [vDSP_destroy_fftsetup](1579978-vdsp_destroy_fftsetup.md). The setup object includes, among other things, precomputed tables used in computing an FFT of the specified size.
