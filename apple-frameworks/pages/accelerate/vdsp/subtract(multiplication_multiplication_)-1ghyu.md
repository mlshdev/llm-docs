> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/subtract(multiplication:multiplication:)-1ghyu](https://developer.apple.com/documentation/accelerate/vdsp/subtract(multiplication:multiplication:)-1ghyu)

# subtract(multiplication:multiplication:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the single-precision element-wise difference of the products of two pairs of vectors.

## Declaration

```swift
static func subtract<R, S, T, U>(multiplication multiplicationAB: (a: T, b: U), multiplication multiplicationCD: (c: R, d: S)) -> [Float] where R : AccelerateBuffer, S : AccelerateBuffer, T : AccelerateBuffer, U : AccelerateBuffer, R.Element == Float, S.Element == Float, T.Element == Float, U.Element == Float
```

## Parameters

- `multiplicationAB`: A tuple that contains the vectors `A` and `B` in `E = (A * B) - (C * D)`.
- `multiplicationCD`: A tuple that contains the vectors `C` and `D` in `E = (A * B) - (C * D)`.

<a id="return-value"></a>

## Return Value

The output vector `E` in `E = (A * B) - (C * D)`.

## Mentioned In

- [Using vDSP for vector-based arithmetic](../using-vdsp-for-vector-based-arithmetic.md)

<a id="Discussion"></a>

## Discussion

This function calculates the differences of the first `N` elements of the product of vectors `A` and `B` and the product of vectors `C` and `D`.

```swift
 for (n = 0; n < N; ++n)
    E[n] = A[n]*B[n] - C[n]*D[n]; 
```

![A diagram showing the operation of this function. There are four rows. The top row represents the input vectors, A, B, C, and D, with three boxes of each. The second row represents the operations that multiply vectors A and B, and multiply vectors C and D, with three boxes of each. The third row represents the subtraction operation as three boxes.  The bottom row represents the output vector E as three boxes. The diagram has connecting lines from the input vectors to the operations, and from the operations to the output vectors. ](https://developer.apple.com/images/com.apple.accelerate/media-4337028@2x.png)

The following code shows an example of using this function:

```swift
    let a: [Float] = [ 1,  2,  3,  4,  5]
    let b: [Float] = [10, 20, 30, 40, 50]
    let c: [Float] = [ 5,  4,  3,  2,  1]
    let d: [Float] = [50, 40, 30, 20, 10]
    
    let e = vDSP.subtract(multiplication: (a, b),
                          multiplication: (c, d))
    
    // Prints "[-240.0, -120.0, 0.0, 120.0, 240.0]".
    print(e)

```

## See Also

### Subtraction

- [subtract(\_:\_:)](subtract%28____%29-8o5ai.md): Returns the double-precision element-wise subtraction of two vectors.
- [subtract(\_:\_:)](subtract%28____%29-9xmo8.md): Returns the single-precision element-wise subtraction of two vectors.
- [subtract(\_:\_:result:)](subtract%28____result_%29-1ianx.md): Calculates the double-precision element-wise subtraction of two vectors.
- [subtract(\_:\_:result:)](subtract%28____result_%29-2p3fa.md): Calculates the single-precision element-wise subtraction of two vectors.
- [subtract(\_:from:count:result:)](subtract%28__from_count_result_%29-4p5xd.md): Calculates the single-precision element-wise subtraction of a complex vector from a complex vector.
- [subtract(\_:from:count:result:)](subtract%28__from_count_result_%29-80zi9.md): Calculates the double-precision element-wise subtraction of a complex vector from a complex vector.
- [subtract(multiplication:\_:)](subtract%28multiplication___%29-2hhme.md): Calculates the double-precision element-wise difference of the product of a vector and a scalar value, and a vector.
- [subtract(multiplication:\_:)](subtract%28multiplication___%29-9gphg.md): Returns the double-precision element-wise difference of a vector and the product of two vectors.
- [subtract(multiplication:\_:)](subtract%28multiplication___%29-3zm6l.md): Calculates the single-precision element-wise difference of the product of a vector and a scalar value, and a vector.
- [subtract(multiplication:\_:)](subtract%28multiplication___%29-6u3sp.md): Returns the single-precision element-wise difference of a vector and the product of two vectors.
- [subtract(multiplication:\_:result:)](subtract%28multiplication___result_%29-9p12h.md): Calculates the double-precision element-wise difference of the product of a vector and a scalar value, and a vector.
- [subtract(multiplication:\_:result:)](subtract%28multiplication___result_%29-86gx3.md): Calculates the single-precision element-wise difference of the product of a vector and a scalar value, and a vector.
- [subtract(multiplication:\_:result:)](subtract%28multiplication___result_%29-3f2bw.md): Calculates the double-precision element-wise difference of a vector and the product of two vectors.
- [subtract(multiplication:\_:result:)](subtract%28multiplication___result_%29-6b91s.md): Calculates the single-precision element-wise difference of a vector and the product of two vectors.
- [subtract(multiplication:multiplication:)](subtract%28multiplication_multiplication_%29-22a4b.md): Returns the double-precision element-wise difference of the products of two pairs of vectors.
