> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zrdesampd](https://developer.apple.com/documentation/accelerate/vdsp_zrdesampd)

# vDSP_zrdesampD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Performs complex-real double-precision FIR filtering with decimation and antialiasing.

## Declaration

```objectivec
extern void vDSP_zrdesampD(const DSPDoubleSplitComplex *__A, vDSP_Stride __DF, const double *__F, const DSPDoubleSplitComplex *__C, vDSP_Length __N, vDSP_Length __P);
```

<a id="Discussion"></a>

## Discussion

This is the same as [vDSP_zrdesamp](vdsp_zrdesamp.md), except for the types of vectors `A`, `F`, and `C`.

## See Also

### Complex Vectors

- [vDSP_zrdesamp](vdsp_zrdesamp.md): Performs complex-real single-precision FIR filtering with decimation and antialiasing.
