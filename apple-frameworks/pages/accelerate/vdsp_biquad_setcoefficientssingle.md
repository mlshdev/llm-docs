> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_biquad_setcoefficientssingle](https://developer.apple.com/documentation/accelerate/vdsp_biquad_setcoefficientssingle)

# vDSP_biquad_SetCoefficientsSingle

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets single-precision coefficients of the specified single-channel biquadratic filter setup object.

## Declaration

```objectivec
extern void vDSP_biquad_SetCoefficientsSingle(vDSP_biquad_Setup __setup, const float *__coeffs, vDSP_Length __start_sec, vDSP_Length __nsec);
```

## Parameters

- `__setup`: The biquadratic filter setup object that the function updates.
- `__coeffs`: A pointer to the new coefficients.
- `__start_sec`: The first section that the function updates.
- `__nsec`: The number of sections that the function updates.

<a id="Discussion"></a>

## Discussion

Use this function to update sections of coefficient values of a biquad setup structure. This function doesn’t allocate new memory. The range that you specify using `__start_sec` and `__nsec` must be within the number of sections that you define in the create setup function.

## See Also

### Setting the coefficients of a single-channel biquadratic filter

- [vDSP_biquad_SetCoefficientsDouble](vdsp_biquad_setcoefficientsdouble.md): Sets double-precision coefficients of the specified single-channel biquadratic filter setup object.
