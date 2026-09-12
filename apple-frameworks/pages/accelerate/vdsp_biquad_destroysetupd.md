> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_biquad_destroysetupd](https://developer.apple.com/documentation/accelerate/vdsp_biquad_destroysetupd)

# vDSP_biquad_DestroySetupD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Destroys a double-precision biquadratic filter setup object.

## Declaration

```objectivec
extern void vDSP_biquad_DestroySetupD(vDSP_biquad_SetupD __setup);
```

## Parameters

- `__setup`: The object to be destroyed; a setup created by [vDSP_biquad_CreateSetupD](vdsp_biquad_createsetupd.md).

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_biquadm_DestroySetup](https://developer.apple.com/documentation/kernel/1579970-vdsp_biquadm_destroysetup), except for the type of the `setup` parameter.

## See Also

### Destroying a single-channel biquadratic filter setup

- [vDSP_biquad_DestroySetup](vdsp_biquad_destroysetup.md): Destroys a single-precision biquadratic filter setup object.
