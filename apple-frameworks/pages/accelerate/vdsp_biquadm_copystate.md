> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_biquadm_copystate](https://developer.apple.com/documentation/accelerate/vdsp_biquadm_copystate)

# vDSP_biquadm_CopyState

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Copies the filter state from one single-precision multichannel biquadratic IIR filter object to another.

## Declaration

```objectivec
extern void vDSP_biquadm_CopyState(vDSP_biquadm_Setup __dest, const struct vDSP_biquadm_SetupStruct *__src);
```

## Parameters

- `__dest`: The `vDSP_biquadm_Setup` object whose state you wish to overwrite.
- `__src`: The `vDSP_biquadm_SetupStruct` object whose state you wish to copy.

<a id="Discussion"></a>

## Discussion

Both `src` and `dest` objects must be valid single-precision multichannel biquad setup objects created by previous calls to [vDSP_biquadm_CreateSetup](https://developer.apple.com/documentation/kernel/1579945-vdsp_biquadm_createsetup), and both objects must have the same number of channels and sections.

## See Also

### Copying the filter state of a multichannel biquadratic filter

- [vDSP_biquadm_CopyStateD](vdsp_biquadm_copystated.md): Copies the filter state from one double-precision multichannel biquadratic IIR filter object to another.
