> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zvcmad](https://developer.apple.com/documentation/accelerate/vdsp_zvcmad)

# vDSP_zvcmaD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Adds a double-precision complex vector to the product of a double-precision complex vector and the conjugate of another complex double-precision vector.

## Declaration

```objectivec
extern void vDSP_zvcmaD(const DSPDoubleSplitComplex *__A, vDSP_Stride __IA, const DSPDoubleSplitComplex *__B, vDSP_Stride __IB, const DSPDoubleSplitComplex *__C, vDSP_Stride __IC, const DSPDoubleSplitComplex *__D, vDSP_Stride __ID, vDSP_Length __N);
```

## Parameters

- `__A`: Double-precision complex input vector.
- `__IA`: Stride for `A`.
- `__B`: Double-precision complex input vector.
- `__IB`: Stride for `B`.
- `__C`: Double-precision complex output vector.
- `__IC`: Stride for `C`.
- `__D`: Double-precision complex output vector.
- `__ID`: Stride for `D`.
- `__N`: Number of elements.

<a id="Discussion"></a>

## Discussion

This function multiplies of the first `N` complex conjugates of `A` by the corresponding complex elements of `B`, adds each product to the corresponding value in `C`, and writes the result to `D`:

![A diagram showing the operation of the vDSP_zvcma function. The top row represents the first input, vector A. The second row represents the second input, vector B. The third row represents the product of the elements of vectors A and B. The forth row represents the third input, C. The fifth row represents the sum of the products and elements of C.](https://developer.apple.com/images/com.apple.accelerate/media-3214024@2x.png)

The operation is:

```swift
for (n = 0; n < N; ++n)
      D[n] = conj(A[n]) * B[n] + C[n];
```

## See Also

### Ternary Conjugate-Multiply-Add

- [vDSP_zvcma](vdsp_zvcma.md): Adds a single-precision complex vector to the product of a single-precision complex vector and the conjugate of another complex single-precision vector.
