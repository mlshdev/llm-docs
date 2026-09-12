> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_biquadm_resetstated](https://developer.apple.com/documentation/accelerate/vdsp_biquadm_resetstated)

# vDSP_biquadm_ResetStateD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Resets the filter state of a double-precision multichannel biquadratic IIR filter object.

## Declaration

```objectivec
extern void vDSP_biquadm_ResetStateD(vDSP_biquadm_SetupD __setup);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_biquadm_ResetState](https://developer.apple.com/documentation/kernel/1579974-vdsp_biquadm_resetstate) except for the type of the `setup` object.

## See Also

### Resetting the filter state of a multichannel biquadratic filter

- [vDSP_biquadm_ResetState](vdsp_biquadm_resetstate.md): Resets the filter state of a single-precision multichannel biquadratic IIR filter object.
