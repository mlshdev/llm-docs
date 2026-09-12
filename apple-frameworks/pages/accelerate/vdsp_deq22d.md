> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_deq22d](https://developer.apple.com/documentation/accelerate/vdsp_deq22d)

# vDSP_deq22D

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Performs two-pole two-zero recursive filtering on a double-precision vector.

## Declaration

```objectivec
extern void vDSP_deq22D(const double *__A, vDSP_Stride __IA, const double *__B, double *__C, vDSP_Stride __IC, vDSP_Length __N);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_deq22](https://developer.apple.com/documentation/kernel/1532225-vdsp_deq22), except for the types of vectors `A`, `B`, and `C`..

## See Also

### Vector-to-Vector Recursive Filtering on Real Vectors

- [vDSP_deq22](vdsp_deq22.md): Performs two-pole two-zero recursive filtering on a single-precision vector.
