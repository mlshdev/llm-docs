> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1579974-vdsp_biquadm_resetstate

# vDSP_biquadm_ResetState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.9+

Resets the filter state of a single-precision multichannel biquad IIR filter object.

## Declaration

```objectivec
void vDSP_biquadm_ResetState(vDSP_biquadm_Setup __setup);
```

## Parameters

- `__setup`: The filter state object whose state you wish to reset.
