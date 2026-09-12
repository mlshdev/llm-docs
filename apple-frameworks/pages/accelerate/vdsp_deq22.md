> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_deq22](https://developer.apple.com/documentation/accelerate/vdsp_deq22)

# vDSP_deq22

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Performs two-pole two-zero recursive filtering on a single-precision vector.

## Declaration

```objectivec
extern void vDSP_deq22(const float *__A, vDSP_Stride __IA, const float *__B, float *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision real input vector.
- `__IA`: Stride for `A`.
- `__B`: 5 single-precision inputs (filter coefficients), with stride 1.
- `__C`: Single-precision real output vector.
- `__IC`: Stride for `C`.
- `__N`: Number of new output elements to produce.

<a id="Discussion"></a>

## Discussion

This function creates `N` new values in output vector `C`,  beginning with its third element. It performs two-pole two-zero recursive filtering on input vector `A`, which must contain at least `N` \+ 2 values; `C` must also contain at least `N` \+ 2 values.  Since the computation is recursive, the first two elements in `C` must be  initialized prior to calling this function. This function can only be done out of place.

![mathematical formula](https://developer.apple.com/images/com.apple.accelerate/media-2557789@2x.png)

## See Also

### Vector-to-Vector Recursive Filtering on Real Vectors

- [vDSP_deq22D](vdsp_deq22d.md): Performs two-pole two-zero recursive filtering on a double-precision vector.
