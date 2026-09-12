> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_nzcrosd](https://developer.apple.com/documentation/accelerate/vdsp_nzcrosd)

# vDSP_nzcrosD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Counts and finds the zero crossings in a double-precision vector.

## Declaration

```objectivec
extern void vDSP_nzcrosD(const double *__A, vDSP_Stride __IA, vDSP_Length __B, vDSP_Length *__C, vDSP_Length *__D, vDSP_Length __N);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_nzcros](vdsp_nzcros.md), except for the type of the input vector.

## See Also

### Single-Vector Zero Crossing Search

- [vDSP_nzcros](vdsp_nzcros.md): Counts and finds the zero crossings in a single-precision vector.
