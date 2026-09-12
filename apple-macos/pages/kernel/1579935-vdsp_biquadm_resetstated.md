> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1579935-vdsp_biquadm_resetstated](https://developer.apple.com/documentation/kernel/1579935-vdsp_biquadm_resetstated)

# vDSP_biquadm_ResetStateD

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.10+

Resets the filter state of a double-precision multichannel biquad IIR filter object.

## Declaration

```objectivec
void vDSP_biquadm_ResetStateD(vDSP_biquadm_SetupD __setup);
```

## Parameters

- `__setup`: The filter state object whose state you wish to reset.
