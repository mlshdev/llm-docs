> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1579980-vdsp_biquadm_copystate](https://developer.apple.com/documentation/kernel/1579980-vdsp_biquadm_copystate)

# vDSP_biquadm_CopyState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.9+

Copies the filter state from one single-precision multichannel biquad IIR filter object to another.

## Declaration

```objectivec
void vDSP_biquadm_CopyState(vDSP_biquadm_Setup __dest, const struct vDSP_biquadm_SetupStruct *__src);
```

## Parameters

- `__dest`: The `vDSP_biquadm_Setup` object whose state you wish to overwrite.
- `__src`: The `vDSP_biquadm_SetupStruct` object whose state you wish to copy.

<a id="discussion"></a>

## Discussion

Both `src` and `dest` objects must be valid single-precision multichannel biquad setup objects created by previous calls to [vDSP_biquadm_CreateSetup](1579945-vdsp_biquadm_createsetup.md). Both objects must have the same number of channels and sections.
