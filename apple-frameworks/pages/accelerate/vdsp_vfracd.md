> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vfracd](https://developer.apple.com/documentation/accelerate/vdsp_vfracd)

# vDSP_vfracD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Truncates the elements of a double-precision vector to fractions.

## Declaration

```objectivec
extern void vDSP_vfracD(const double *__A, vDSP_Stride __IA, double *__C, vDSP_Stride __IC, vDSP_Length __N);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_vfrac](vdsp_vfrac.md), except for the types of vectors `A` and C.

## See Also

### Single-Vector Fractional Part Extraction

- [vDSP_vfrac](vdsp_vfrac.md): Truncates the elements of a single-precision vector to fractions.
