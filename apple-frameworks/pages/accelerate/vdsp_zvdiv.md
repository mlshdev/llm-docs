> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zvdiv](https://developer.apple.com/documentation/accelerate/vdsp_zvdiv)

# vDSP_zvdiv

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Divides two complex single-precision vectors.

## Declaration

```objectivec
extern void vDSP_zvdiv(const DSPSplitComplex *__B, vDSP_Stride __IB, const DSPSplitComplex *__A, vDSP_Stride __IA, const DSPSplitComplex *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__B`: Single-precision complex input vector. Note that `B` comes before `A`!
- `__IB`: Stride for `B`.
- `__A`: Single-precision complex input vector.
- `__IA`: Stride for `A`.
- `__C`: Single-precision complex output vector.
- `__IC`: Stride for `C`.
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

This function divides the first `N` elements of `A` by corresponding elements of `B`, leaving the result in `C`.

![](https://developer.apple.com/images/com.apple.accelerate/media-3110562@2x.png)

The operation is:

```swift
for (n = 0; n < N; ++n)
    C[n] = A[n] / B[n];
```

## See Also

### Binary Division Operations

- [vDSP_zvdivD](vdsp_zvdivd.md): Divides two complex double-precision vectors.
