> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_biquad_destroysetup](https://developer.apple.com/documentation/accelerate/vdsp_biquad_destroysetup)

# vDSP_biquad_DestroySetup

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Destroys a single-precision biquadratic filter setup object.

## Declaration

```objectivec
extern void vDSP_biquad_DestroySetup(vDSP_biquad_Setup __setup);
```

## Parameters

- `__setup`: The object to be destroyed; a setup created by [vDSP_biquad_CreateSetup](vdsp_biquad_createsetup.md).

<a id="Discussion"></a>

## Discussion

This function frees all resources associated with a `vDSP_biquad_Setup` object previously created through a call to [vDSP_biquad_CreateSetup](vdsp_biquad_createsetup.md).

## See Also

### Destroying a single-channel biquadratic filter setup

- [vDSP_biquad_DestroySetupD](vdsp_biquad_destroysetupd.md): Destroys a double-precision biquadratic filter setup object.
