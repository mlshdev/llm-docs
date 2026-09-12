> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_biquadm_destroysetupd](https://developer.apple.com/documentation/accelerate/vdsp_biquadm_destroysetupd)

# vDSP_biquadm_DestroySetupD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Destroys a double-precision multichannel biquadratic filter setup object.

## Declaration

```objectivec
extern void vDSP_biquadm_DestroySetupD(vDSP_biquadm_SetupD __setup);
```

## Parameters

- `__setup`: The biquadratic filter setup object that the function destroys.

<a id="Discussion"></a>

## Discussion

This function frees all resources associated with a biquadratic filter setup object.

## See Also

### Destroying a multichannel biquadratic filter setup

- [vDSP_biquadm_DestroySetup](vdsp_biquadm_destroysetup.md): Destroys a single-precision multichannel biquadratic filter setup object.
