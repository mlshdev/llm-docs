> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1532215-vdsp_biquad2_resetstate](https://developer.apple.com/documentation/kernel/1532215-vdsp_biquad2_resetstate)

# vDSP_biquad2_ResetState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.9+

Resets the filter state of a single-precision stereo biquadratic filter object.

## Declaration

```objectivec
void vDSP_biquad2_ResetState(vDSP_biquad_Setup);
```

## Parameters

- `Parameter 0 `: The biquadratic filter object that the function resets.

## See Also

### Biquadratic Infinite Impulse Response (IIR) Filters

- [vDSP_biquad2](1532195-vdsp_biquad2.md): Applies a single-precision stereo biquadratic IIR filter.
- [vDSP_biquad2_CreateSetup](1532224-vdsp_biquad2_createsetup.md): Builds a data structure that contains precalculated single-precision data for stereo biquadratic filter functions to use.
- [IIRChannel](iirchannel.md): Constants that specify which channels a stereo biquadratic filter operates.
- [vDSP_biquad2_CopyState](1532220-vdsp_biquad2_copystate.md): Copies the filter state from one biquadratic filter object to another.
- [vDSP_biquad2_DestroySetup](1532201-vdsp_biquad2_destroysetup.md): Destroys a single-precision stereo biquadratic IIR setup object.
