> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/subtract(multiplication:_:)-6u3sp](https://developer.apple.com/documentation/accelerate/vdsp/subtract(multiplication:_:)-6u3sp)

# subtract(multiplication:\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the single-precision element-wise difference of a vector and the product of two vectors.

## Declaration

```swift
static func subtract<S, T, U>(multiplication: (a: T, b: U), _ vector: S) -> [Float] where S : AccelerateBuffer, T : AccelerateBuffer, U : AccelerateBuffer, S.Element == Float, T.Element == Float, U.Element == Float
```

## Parameters

- `multiplication`: A tuple that contains the vectors `A` and `B` in `D = (A * B) - C`.
- `vector`: The input vector `C` in `D = (A * B) - C`.

<a id="return-value"></a>

## Return Value

The output vector `D` in `D = (A * B) - C`.

## Mentioned In

- [Using vDSP for vector-based arithmetic](../using-vdsp-for-vector-based-arithmetic.md)

<a id="Discussion"></a>

## Discussion

This function calculates the products of the first `N` elements of `A` and `B`, subtracts each product from the corresponding value in `C`, and writes the result to `D`.

```swift
 for (n = 0; n < N; ++n)
    D[n] = (A[n] * B[n]) - C[n];
```

![A diagram showing the operation of this function. There are four rows. The top row represents the input vectors, A and B, with three boxes of each. The second row represents the operation that multiplies A and B, as well as the input vector C, with three boxes of each. The third row represents the subtraction operation as three boxes.  The bottom row represents the output vector D as three boxes. The diagram has connecting lines from the input vectors to the operations, and from the operations to the output vectors. ](https://developer.apple.com/images/com.apple.accelerate/media-4336998@2x.png)

The following code shows an example of using this function:

```swift
    let a: [Float] = [ 1,  2,  3,  4,  5]
    let b: [Float] = [10, 20, 30, 40, 50]
    let c: [Float] = [ 5,  4,  3,  2,  1]
    
    let d = vDSP.subtract(multiplication: (a, b),
                          c)
    
    // Prints "[5.0, 36.0, 87.0, 158.0, 249.0]".
    print(d)

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
- [subtract(multiplication:\_:result:)](subtract%28multiplication___result_%29-9p12h.md): Calculates the double-precision element-wise difference of the product of a vector and a scalar value, and a vector.
- [subtract(multiplication:\_:result:)](subtract%28multiplication___result_%29-86gx3.md): Calculates the single-precision element-wise difference of the product of a vector and a scalar value, and a vector.
- [subtract(multiplication:\_:result:)](subtract%28multiplication___result_%29-3f2bw.md): Calculates the double-precision element-wise difference of a vector and the product of two vectors.
- [subtract(multiplication:\_:result:)](subtract%28multiplication___result_%29-6b91s.md): Calculates the single-precision element-wise difference of a vector and the product of two vectors.
- [subtract(multiplication:multiplication:)](subtract%28multiplication_multiplication_%29-22a4b.md): Returns the double-precision element-wise difference of the products of two pairs of vectors.
- [subtract(multiplication:multiplication:)](subtract%28multiplication_multiplication_%29-1ghyu.md): Returns the single-precision element-wise difference of the products of two pairs of vectors.
