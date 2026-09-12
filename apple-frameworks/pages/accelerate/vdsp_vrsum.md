> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vrsum](https://developer.apple.com/documentation/accelerate/vdsp_vrsum)

# vDSP_vrsum

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Performs running sum integration over a single-precision vector.

## Declaration

```objectivec
extern void vDSP_vrsum(const float *__A, vDSP_Stride __IA, const float *__S, float *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision real input vector.
- `__IA`: Address stride for `A`.
- `__S`: Points to single-precision real input scalar: weighting factor.
- `__C`: Single-precision real output vector.
- `__IC`: Stride for `C`
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

Performs the following operation:

![mathematical formula](https://developer.apple.com/images/com.apple.accelerate/media-2557738@2x.png)

Integrates vector `A` using a running sum from vector `C`. Vector `A` is weighted by scalar `*S` and added to the previous output point. The first element  from vector `A` is not used in the sum.

## See Also

### Running Sum Integration

- [vDSP_vrsumD](vdsp_vrsumd.md): Performs running sum integration over a double-precision vector.
