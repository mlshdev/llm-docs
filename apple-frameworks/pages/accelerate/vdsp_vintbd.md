> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vintbd](https://developer.apple.com/documentation/accelerate/vdsp_vintbd)

# vDSP_vintbD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the linear interpolation between the supplied double-precision vectors using the specified stride.

## Declaration

```objectivec
extern void vDSP_vintbD(const double *__A, vDSP_Stride __IA, const double *__B, vDSP_Stride __IB, const double *__C, double *__D, vDSP_Stride __ID, vDSP_Length __N);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_vintb](vdsp_vintb.md), except for the types of vectors `A`, `B`, `C`, and `D`.

## See Also

### Vector-to-Vector Linear Interpolation

- [vDSP_vintb](vdsp_vintb.md): Calculates the linear interpolation between the supplied single-precision vectors using the specified stride.
