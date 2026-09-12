> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1580000-vdsp_biquadm_copystated](https://developer.apple.com/documentation/kernel/1580000-vdsp_biquadm_copystated)

# vDSP_biquadm_CopyStateD

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.10+

Copies the filter state from one dopuble-precision multichannel biquad IIR filter object to another.

## Declaration

```objectivec
void vDSP_biquadm_CopyStateD(vDSP_biquadm_SetupD __dest, const struct vDSP_biquadm_SetupStructD *__src);
```

## Parameters

- `__dest`: The `vDSP_biquadm_SetupD` object whose state you wish to overwrite.
- `__src`: The `vDSP_biquadm_SetupStructD` object whose state you wish to copy.

<a id="discussion"></a>

## Discussion

Both `src` and `dest` objects must be valid single-precision multichannel biquad setup objects created by previous calls to [vDSP_biquadm_CreateSetupD](1579944-vdsp_biquadm_createsetupd.md). Both objects must have the same number of channels and sections.
