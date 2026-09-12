> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/subtract(_:_:result:)-1ianx](https://developer.apple.com/documentation/accelerate/vdsp/subtract(_:_:result:)-1ianx)

# subtract(\_:\_:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the double-precision element-wise subtraction of two vectors.

## Declaration

```swift
static func subtract<T, U, V>(_ vectorA: U, _ vectorB: T, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Double, U.Element == Double, V.Element == Double
```

## Parameters

- `vectorA`: The first input vector, `A`.
- `vectorB`: The second input vector, `B`.
- `result`: The output vector, `C`.

<a id="Discussion"></a>

## Discussion

This function calculates the differences of the first `N` elements of input vectors `A` and `B`, and writes the result to output vector `C`.

```swift
 for (n = 0; n < N; ++n)
    C[n] = A[n] - B[n];
```

![A diagram showing the operation of this function. There are three rows. The top row represents the input vectors, A and B, with three boxes of each. The middle row represents the operation as three boxes with minus signs. The bottom row represents the output vector C as three boxes. The diagram has connecting lines from the input vectors to the operation, and from the operation to the output vectors.](https://developer.apple.com/images/com.apple.accelerate/media-4336879@2x.png)

The following code shows an example of using this function:

```swift
    let count = 5
    
    let a: [Double] = [10, 20, 30, 40, 50]
    let b: [Double] = [ 1,  2,  3,  4,  5]
    
    let c = [Double](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP.subtract(a, b,
                      result: &buffer)
        
        initializedCount = count
    }
    
    // Prints "[9.0, 18.0, 27.0, 36.0, 45.0]".
    print(c)
```

## See Also

### Subtraction

- [subtract(\_:\_:)](subtract%28____%29-8o5ai.md): Returns the double-precision element-wise subtraction of two vectors.
- [subtract(\_:\_:)](subtract%28____%29-9xmo8.md): Returns the single-precision element-wise subtraction of two vectors.
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
- [subtract(multiplication:multiplication:)](subtract%28multiplication_multiplication_%29-1ghyu.md): Returns the single-precision element-wise difference of the products of two pairs of vectors.
