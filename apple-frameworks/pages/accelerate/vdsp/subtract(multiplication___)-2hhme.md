> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/subtract(multiplication:_:)-2hhme](https://developer.apple.com/documentation/accelerate/vdsp/subtract(multiplication:_:)-2hhme)

# subtract(multiplication:\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the double-precision element-wise difference of the product of a vector and a scalar value, and a vector.

## Declaration

```swift
static func subtract<T, U>(multiplication: (a: U, b: Double), _ vector: T) -> [Double] where T : AccelerateBuffer, U : AccelerateBuffer, T.Element == Double, U.Element == Double
```

## Parameters

- `multiplication`: The input scalar value `C` in `D = (A * B) - C`.
- `vector`: A tuple that contains the vectors `A` and `B` in `D = (A * B) - C`.

<a id="return-value"></a>

## Return Value

The output vector `D` in `D = (A * B) - C`.

<a id="Discussion"></a>

## Discussion

This function calculates the element-wise product of vector `A` and scalar value `B`, subtracts vector `C` from the product, and writes the result to vector `D`.

```swift
 for (n = 0; n < N; ++n)
    D[n] = A[n] * B - C[n];
```

![A diagram showing the operation of this function. There are four rows. The top row represents the input vector A with three boxes, and the scalar value B with one box. The second row represents the operation that multiplies A and B, with three boxes, as well as the input vector C with three boxes. The third row represents the subtraction operation as three boxes. The bottom row represents the output vector D as three boxes. The diagram has connecting lines from the input vectors to the operations, and from the operations to the output vector.  ](https://developer.apple.com/images/com.apple.accelerate/media-4387380@2x.png)

The following code shows an example of using this function:

```swift

    let a: [Double] = [ 1,  2,  3,  4,  5]
    let b: Double = 10
    let c: [Double] = [ 5,  4,  3,  2,  1]
    
    let d = vDSP.subtract(multiplication: (a, b),
                          c)
    
    // Prints "[5.0, 16.0, 27.0, 38.0, 49.0]".
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
- [subtract(multiplication:\_:)](subtract%28multiplication___%29-9gphg.md): Returns the double-precision element-wise difference of a vector and the product of two vectors.
- [subtract(multiplication:\_:)](subtract%28multiplication___%29-3zm6l.md): Calculates the single-precision element-wise difference of the product of a vector and a scalar value, and a vector.
- [subtract(multiplication:\_:)](subtract%28multiplication___%29-6u3sp.md): Returns the single-precision element-wise difference of a vector and the product of two vectors.
- [subtract(multiplication:\_:result:)](subtract%28multiplication___result_%29-9p12h.md): Calculates the double-precision element-wise difference of the product of a vector and a scalar value, and a vector.
- [subtract(multiplication:\_:result:)](subtract%28multiplication___result_%29-86gx3.md): Calculates the single-precision element-wise difference of the product of a vector and a scalar value, and a vector.
- [subtract(multiplication:\_:result:)](subtract%28multiplication___result_%29-3f2bw.md): Calculates the double-precision element-wise difference of a vector and the product of two vectors.
- [subtract(multiplication:\_:result:)](subtract%28multiplication___result_%29-6b91s.md): Calculates the single-precision element-wise difference of a vector and the product of two vectors.
- [subtract(multiplication:multiplication:)](subtract%28multiplication_multiplication_%29-22a4b.md): Returns the double-precision element-wise difference of the products of two pairs of vectors.
- [subtract(multiplication:multiplication:)](subtract%28multiplication_multiplication_%29-1ghyu.md): Returns the single-precision element-wise difference of the products of two pairs of vectors.
