> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_normalized](https://developer.apple.com/documentation/accelerate/vdsp_normalized)

# vDSP_normalizeD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Computes double-precision mean and standard deviation, and then calculates new elements to have a zero mean and a unit standard deviation.

## Declaration

```objectivec
extern void vDSP_normalizeD(const double *__A, vDSP_Stride __IA, double *__C, vDSP_Stride __IC, double *__Mean, double *__StandardDeviation, vDSP_Length __N);
```

<a id="Discussion"></a>

## Discussion

This is the same as [vDSP_normalize](vdsp_normalize.md), except for the types of `A`, `C`, `Mean`, and `StandardDeviation`.

## See Also

### Normalization Functions

- [vDSP_normalize](vdsp_normalize.md): Computes single-precision mean and standard deviation, and then calculates new elements to have a zero mean and a unit standard deviation.
