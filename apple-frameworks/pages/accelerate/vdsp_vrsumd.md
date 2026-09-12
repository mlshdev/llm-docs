> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vrsumd](https://developer.apple.com/documentation/accelerate/vdsp_vrsumd)

# vDSP_vrsumD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Performs running sum integration over a double-precision vector.

## Declaration

```objectivec
extern void vDSP_vrsumD(const double *__A, vDSP_Stride __IA, const double *__S, double *__C, vDSP_Stride __IC, vDSP_Length __N);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_vrsum](vdsp_vrsum.md), except for the types of vectors `A` and `C` and scalar `*S`.

## See Also

### Running Sum Integration

- [vDSP_vrsum](vdsp_vrsum.md): Performs running sum integration over a single-precision vector.
