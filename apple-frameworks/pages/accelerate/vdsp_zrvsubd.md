> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zrvsubd](https://developer.apple.com/documentation/accelerate/vdsp_zrvsubd)

# vDSP_zrvsubD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Subtracts a double-precision real vector from a double-precision complex vector.

## Declaration

```objectivec
extern void vDSP_zrvsubD(const DSPDoubleSplitComplex *__A, vDSP_Stride __IA, const double *__B, vDSP_Stride __IB, const DSPDoubleSplitComplex *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: Double-precision complex input vector.
- `__IA`: Stride for `A`.
- `__B`: Double-precision real input vector.
- `__IB`: Stride for `B`.
- `__C`: Double-precision complex output vector.
- `__IC`: Stride for `C`.
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

This function subtracts the first `N` real elements of `B` from corresponding complex elements of `A`, writing the result to `C`:

![A diagram showing the operation of the vDSP_zrvsub function. There are three rows. The top row represents the first input, vector A. The second row represents the second input, vector B. The bottom row represents the output, vector C. The diagram has connecting lines from the input vectors to the output vector indicating the relationships between the inputs and output.](https://developer.apple.com/images/com.apple.accelerate/media-3213990@2x.png)

The operation is:

```swift
 for (n = 0; n < N; ++n)
    C[n] = A[n] - B[n];
```

## See Also

### Binary (Complex-Real) Subtraction Operations

- [vDSP_zrvsub](vdsp_zrvsub.md): Subtracts a single-precision real vector from a single-precision complex vector.
