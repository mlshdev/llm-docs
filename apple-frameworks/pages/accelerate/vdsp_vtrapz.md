> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vtrapz](https://developer.apple.com/documentation/accelerate/vdsp_vtrapz)

# vDSP_vtrapz

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Performs trapezoidal integration over a single-precision vector.

## Declaration

```objectivec
extern void vDSP_vtrapz(const float *__A, vDSP_Stride __IA, const float *__B, float *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision real input vector.
- `__IA`: Address stride for `A`.
- `__B`: Pointer to single-precision real input scalar: step size.
- `__C`: Single-precision real output vector.
- `__IC`: Address stride for `C`.
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

Performs the following operation:

![mathematical formula](https://developer.apple.com/images/com.apple.accelerate/media-2557740@2x.png)

Estimates the integral of vector `A` using the trapezoidal rule. Scalar `*B` specifies the integration step size. This function can only be done out of place.

## See Also

### Trapezoidal Integration

- [vDSP_vtrapzD](vdsp_vtrapzd.md): Performs trapezoidal integration over a double-precision vector.
