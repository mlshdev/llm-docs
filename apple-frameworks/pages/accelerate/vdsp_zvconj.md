> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zvconj](https://developer.apple.com/documentation/accelerate/vdsp_zvconj)

# vDSP_zvconj

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the complex conjugate of the values in a single-precision vector using the specified stride.

## Declaration

```objectivec
extern void vDSP_zvconj(const DSPSplitComplex *__A, vDSP_Stride __IA, const DSPSplitComplex *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision complex input vector
- `__IA`: Stride for `A`
- `__C`: Single-precision complex output vector
- `__IC`: Stride for `C`
- `__N`: The number of elements to process

<a id="Discussion"></a>

## Discussion

Conjugates elements of vector `A`, leaving results in `C`.

![mathematical formula](https://developer.apple.com/images/com.apple.accelerate/media-2557733@2x.png)

## See Also

### Single-Vector Complex Conjugation

- [vDSP_zvconjD](vdsp_zvconjd.md): Calculates the complex conjugate of the values in a double-precision vector using the specified stride.
