> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_biquadm_destroysetup](https://developer.apple.com/documentation/accelerate/vdsp_biquadm_destroysetup)

# vDSP_biquadm_DestroySetup

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Destroys a single-precision multichannel biquadratic filter setup object.

## Declaration

```objectivec
extern void vDSP_biquadm_DestroySetup(vDSP_biquadm_Setup __setup);
```

## Parameters

- `__setup`: The biquadratic filter setup object that the function destroys.

<a id="Discussion"></a>

## Discussion

This function frees all resources associated with a biquadratic filter setup object.

## See Also

### Destroying a multichannel biquadratic filter setup

- [vDSP_biquadm_DestroySetupD](vdsp_biquadm_destroysetupd.md): Destroys a double-precision multichannel biquadratic filter setup object.
