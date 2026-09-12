> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vintb](https://developer.apple.com/documentation/accelerate/vdsp_vintb)

# vDSP_vintb

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the linear interpolation between the supplied single-precision vectors using the specified stride.

## Declaration

```objectivec
extern void vDSP_vintb(const float *__A, vDSP_Stride __IA, const float *__B, vDSP_Stride __IB, const float *__C, float *__D, vDSP_Stride __ID, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision real input vector.
- `__IA`: Stride for `A`.
- `__B`: Single-precision real input vector.
- `__IB`: Stride for `B`.
- `__C`: Single-precision real input scalar: interpolation constant.
- `__D`: Single-precision real output vector.
- `__ID`: Stride for `D`.
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

This function interpolates between the first `N` elements of `A` and `B` by taking the difference between corresponding elements, multiplying it by the constant `C`, and adding this to the corresponding element of `A`; results are left in corresponding elements of `D`:

![mathematical formula](https://developer.apple.com/images/com.apple.accelerate/media-2557779@2x.png)

## See Also

### Vector-to-Vector Linear Interpolation

- [vDSP_vintbD](vdsp_vintbd.md): Calculates the linear interpolation between the supplied double-precision vectors using the specified stride.
