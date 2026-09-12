> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_sve_svesqd](https://developer.apple.com/documentation/accelerate/vdsp_sve_svesqd)

# vDSP_sve_svesqD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the sum of values and the sum of squares in a double-precision vector.

## Declaration

```objectivec
extern void vDSP_sve_svesqD(const double *__A, vDSP_Stride __IA, double *__Sum, double *__SumOfSquares, vDSP_Length __N);
```

## Parameters

- `__A`: Double-precision input vector.
- `__IA`: Stride for the input vector.
- `__Sum`: Double-precision sum (scalar) of the elements of `A`.
- `__SumOfSquares`: Double-precision sum (scalar) of the squares of the elements of `A`.
- `__N`: Number of elements in `A`.

<a id="Discussion"></a>

## Discussion

This function calculates the sum of values and the sum of squares of the first `N` elements of `A` and writes the result to `Sum` and `SumOfSquares` respectively:

![A diagram showing the operation of the vDSP_sve_svesq function. There are three rows. The top row represents the input, vector A. The second row represents the summation operations. The bottom row represents the output, vector C. The diagram has connecting lines from the input vectors to the operation and from the operation to the output vector indicating the relationships between the input and output.](https://developer.apple.com/images/com.apple.accelerate/media-3226729@2x.png)

The operation is:

```c
Sum          = sum(A[n],      0 <= n < N);
SumOfSquares = sum(A[n] ** 2, 0 <= n < N);
```

## See Also

### Vector Summation

- [vDSP_sve](vdsp_sve.md): Calculates the sum of values in a single-precision vector.
- [vDSP_sveD](vdsp_sved.md): Calculates the sum of values in a double-precision vector.
- [vDSP_svemg](vdsp_svemg.md): Calculates the sum of magnitudes in a single-precision vector.
- [vDSP_svemgD](vdsp_svemgd.md): Calculates the sum of magnitudes in a double-precision vector.
- [vDSP_svesq](vdsp_svesq.md): Calculates the sum of squares in a single-precision vector.
- [vDSP_svesqD](vdsp_svesqd.md): Calculates the sum of squares in a double-precision vector.
- [vDSP_sve_svesq](vdsp_sve_svesq.md): Calculates the sum of values and the sum of squares in a single-precision vector.
- [vDSP_svs](vdsp_svs.md): Calculates the sum of signed squares in a single-precision vector.
- [vDSP_svsD](vdsp_svsd.md): Calculates the sum of signed squares in a double-precision vector.
