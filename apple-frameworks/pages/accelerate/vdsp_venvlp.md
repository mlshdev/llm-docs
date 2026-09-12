> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_venvlp](https://developer.apple.com/documentation/accelerate/vdsp_venvlp)

# vDSP_venvlp

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates whether each element in a single-precision vector falls within a specified range.

## Declaration

```objectivec
extern void vDSP_venvlp(const float *__A, vDSP_Stride __IA, const float *__B, vDSP_Stride __IB, const float *__C, vDSP_Stride __IC, float *__D, vDSP_Stride __ID, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision real input vector: high envelope.
- `__IA`: Stride for `A`.
- `__B`: Single-precision real input vector: low envelope.
- `__IB`: Stride for `B`.
- `__C`: Single-precision real input vector.
- `__IC`: Stride for `C`.
- `__D`: Single-precision real output vector.
- `__ID`: Stride for `D`.
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

Finds the extrema of `C`. For the first `N` elements of `C`, the corresponding element of `A` provides an upper-threshold value, and the corresponding element of `B` provides a  lower-threshold value. If the value of an element of `C` falls outside the range defined by these thresholds, it is copied to the corresponding element of `D`. If its value is within the range, the corresponding element of `D` is set to zero:

![mathematical formula](https://developer.apple.com/images/com.apple.accelerate/media-2557782@2x.png)

## See Also

### Vector-to-Vector Extrema Finding

- [vDSP_venvlpD](vdsp_venvlpd.md): Calculates whether each element in a double-precision vector falls within a specified range.
