> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zvcmuld](https://developer.apple.com/documentation/accelerate/vdsp_zvcmuld)

# vDSP_zvcmulD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Multiplies a double-precision complex vector by the conjugate of another double-precision complex vector.

## Declaration

```objectivec
extern void vDSP_zvcmulD(const DSPDoubleSplitComplex *__A, vDSP_Stride __IA, const DSPDoubleSplitComplex *__B, vDSP_Stride __IB, const DSPDoubleSplitComplex *__C, vDSP_Stride __iC, vDSP_Length __N);
```

## Parameters

- `__A`: Double-precision complex input vector.
- `__IA`: Stride for `A`.
- `__B`: Double-precision complex input vector.
- `__IB`: Stride for `B`.
- `__C`: Double-precision complex output vector.
- `__iC`: Stride for `C`.
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

This function calculates the products of the first `N` complex conjugates of `A` by the corresponding complex elements of `B`, writing the result to `C`:

![A diagram showing the operation of the vDSP_zvcmul function. There are three rows. The top row represents the first input, vector A. The second row represents the second input, vector B. The bottom row represents the output, vector C. The diagram has connecting lines from the input vectors to the output vector indicating the relationships between the inputs and output.](https://developer.apple.com/images/com.apple.accelerate/media-3213996@2x.png)

The operation is:

```swift
 for (n = 0; n < N; ++n)
    C[n] = conj(A[n]) * B[n];
```

## See Also

### Binary Conjugate-Multiply Operations

- [vDSP_zvcmul](vdsp_zvcmul.md): Multiplies a single-precision complex vector by the conjugate of another single-precision complex vector.
