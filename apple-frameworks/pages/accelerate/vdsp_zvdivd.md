> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zvdivd](https://developer.apple.com/documentation/accelerate/vdsp_zvdivd)

# vDSP_zvdivD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Divides two complex double-precision vectors.

## Declaration

```objectivec
extern void vDSP_zvdivD(const DSPDoubleSplitComplex *__B, vDSP_Stride __IB, const DSPDoubleSplitComplex *__A, vDSP_Stride __IA, const DSPDoubleSplitComplex *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__B`: Double-precision complex input vector. Note that `B` comes before `A`!
- `__IB`: Stride for `B`.
- `__A`: Double-precision complex input vector.
- `__IA`: Stride for `A`.
- `__C`: Double-precision complex output vector.
- `__IC`: Stride for `C`.
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

This function divides the first `N` elements of `A` by corresponding elements of `B`, leaving the result in `C`.

![](https://developer.apple.com/images/com.apple.accelerate/media-3213994@2x.png)

The operation is:

```swift
for (n = 0; n < N; ++n)
    C[n] = A[n] / B[n];
```

## See Also

### Binary Division Operations

- [vDSP_zvdiv](vdsp_zvdiv.md): Divides two complex single-precision vectors.
