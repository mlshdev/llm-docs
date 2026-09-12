> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zrvdivd](https://developer.apple.com/documentation/accelerate/vdsp_zrvdivd)

# vDSP_zrvdivD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Divides a double-precision complex vector by a double-precision real vector.

## Declaration

```objectivec
extern void vDSP_zrvdivD(const DSPDoubleSplitComplex *__A, vDSP_Stride __IA, const double *__B, vDSP_Stride __IB, const DSPDoubleSplitComplex *__C, vDSP_Stride __IC, vDSP_Length __N);
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

This function divides of the first `N` complex elements of `A` by the corresponding real elements of `B`, writing the result to `C`:

![A diagram showing the operation of the vDSP_zrvdiv function. There are three rows. The top row represents the first input, vector A. The second row represents the second input, vector B. The bottom row represents the output, vector C. The diagram has connecting lines from the input vectors to the output vector indicating the relationships between the inputs and output.](https://developer.apple.com/images/com.apple.accelerate/media-3213998@2x.png)

The operation is:

```swift
 for (n = 0; n < N; ++n)
    C[n] = A[n] / B[n];
```

## See Also

### Binary (Complex-Real) Division Operations

- [vDSP_zrvdiv](vdsp_zrvdiv.md): Divides a single-precision complex vector by a single-precision real vector.
