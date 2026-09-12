> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_biquadd](https://developer.apple.com/documentation/accelerate/vdsp_biquadd)

# vDSP_biquadD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Applies a double-precision single-channel biquadratic IIR filter.

## Declaration

```objectivec
extern void vDSP_biquadD(const struct vDSP_biquad_SetupStructD *__Setup, double *__Delay, const double *__X, vDSP_Stride __IX, double *__Y, vDSP_Stride __IY, vDSP_Length __N);
```

## Parameters

- `__Setup`: The [vDSP_biquad_SetupD](https://developer.apple.com/documentation/kernel/vdsp_biquad_setupd) object defining the filter to apply.
- `__Delay`: An array of double-precision values initialized with “past” state data (elements -2 and -1) for each section of the biquad. After this function executes, this array contains the final state data of the filters. See Discussion below.
- `__X`: An array of double-precision input data for the channel.
- `__IX`: Stride for `X`.
- `__Y`: An array to be filled with double-precision output data for the channel.
- `__IY`: Stride for `Y`.
- `__N`: The number of elements to filter.

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_biquad](vdsp_biquad.md), except for the types of arrays `Delay`, `X`, and `Y`.

## See Also

### Applying a single-channel biquadratic filter

- [vDSP_biquad](vdsp_biquad.md): Applies a single-precision single-channel biquadratic IIR filter.
