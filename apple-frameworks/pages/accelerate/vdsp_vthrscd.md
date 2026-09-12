> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vthrscd](https://developer.apple.com/documentation/accelerate/vdsp_vthrscd)

# vDSP_vthrscD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates double-precision vector threshold with signed constant to the specified range.

## Declaration

```objectivec
extern void vDSP_vthrscD(const double *__A, vDSP_Stride __IA, const double *__B, const double *__C, double *__D, vDSP_Stride __ID, vDSP_Length __N);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_vthrsc](vdsp_vthrsc.md), except for the types of vectors `A` and `D`, and scalars `*B` and `*C`.

## See Also

### Threshold Operations

- [vDSP_vthres](vdsp_vthres.md): Calculates single-precision vector threshold with zero fill to the specified range.
- [vDSP_vthresD](vdsp_vthresd.md): Calculates double-precision vector threshold with zero fill to the specified range.
- [vDSP_vthrsc](vdsp_vthrsc.md): Calculates single-precision vector threshold with signed constant to the specified range.
