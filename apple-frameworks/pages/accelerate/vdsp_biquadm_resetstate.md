> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_biquadm_resetstate](https://developer.apple.com/documentation/accelerate/vdsp_biquadm_resetstate)

# vDSP_biquadm_ResetState

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Resets the filter state of a single-precision multichannel biquadratic IIR filter object.

## Declaration

```objectivec
extern void vDSP_biquadm_ResetState(vDSP_biquadm_Setup __setup);
```

## Parameters

- `__setup`: The filter state object whose state you wish to reset.

<a id="Discussion"></a>

## Discussion

The `setup` object must be a valid object, previously initialized by a call to the [vDSP_biquadm_CreateSetup](https://developer.apple.com/documentation/kernel/1579945-vdsp_biquadm_createsetup) function. Upon return, all internal state is reset to the values it had when it was first initialized.

## See Also

### Resetting the filter state of a multichannel biquadratic filter

- [vDSP_biquadm_ResetStateD](vdsp_biquadm_resetstated.md): Resets the filter state of a double-precision multichannel biquadratic IIR filter object.
