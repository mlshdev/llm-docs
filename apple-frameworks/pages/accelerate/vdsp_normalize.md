> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_normalize](https://developer.apple.com/documentation/accelerate/vdsp_normalize)

# vDSP_normalize

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Computes single-precision mean and standard deviation, and then calculates new elements to have a zero mean and a unit standard deviation.

## Declaration

```objectivec
extern void vDSP_normalize(const float *__A, vDSP_Stride __IA, float *__C, vDSP_Stride __IC, float *__Mean, float *__StandardDeviation, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision input vector.
- `__IA`: Stride for `A`.
- `__C`: Single-precision output vector, or `NULL` (see Discussion below).
- `__IC`: Stride for `C`.
- `__Mean`: Single-precision mean of the elements of `A`.
- `__StandardDeviation`: Single-precision standard deviation of the elements of `A`.
- `__N`: Number of elements in `A`.

<a id="Discussion"></a>

## Discussion

The function calculates values for `Mean` and `StandardDeviation`, then calculates new values for `A` to have a zero mean and unit standard deviation.

For iOS 9.0 and later or macOS 10.11 and later, the production of new elements may be omitted by passing `NULL` for `C`. In this case `A` remains unchanged.

## See Also

### Normalization Functions

- [vDSP_normalizeD](vdsp_normalized.md): Computes double-precision mean and standard deviation, and then calculates new elements to have a zero mean and a unit standard deviation.
