> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/add(multiplication:multiplication:result:)-663mk](https://developer.apple.com/documentation/accelerate/vdsp/add(multiplication:multiplication:result:)-663mk)

# add(multiplication:multiplication:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the single-precision element-wise addition of two vector-scalar products.

## Declaration

```swift
static func add<T, U, V>(multiplication multiplicationAB: (a: T, b: Float), multiplication multiplicationCD: (c: U, d: Float), result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Float, U.Element == Float, V.Element == Float
```

## Parameters

- `multiplicationAB`: A tuple that contains the vector `A` and the scalar value `B` in `E = (A * B) + (C * D)`.
- `multiplicationCD`: A tuple that contains the vector `C` and the scalar value `D` in `E = (A * B) + (C * D)`.
- `result`: The output vector `E` in `E = (A * B) + (C * D)`.

<a id="Discussion"></a>

## Discussion

This function calculates the element-wise vector-scalar products of `A` and `B`, and `C` and `D`, and writes the sum of the products to vector `D`.

```swift
for (n = 0; n < N; ++n)
    E[n] = A[n]*B + C[n]*D;
```

![A diagram showing the operation of this function. There are four rows. The top row represents the input vectors, A and C, with three boxes each, and the scalar values, B and D, with one box each. The second row represents the operations that multiply A and B, as well as the operations that multiply C and D, with three boxes each. The third row represents the addition operation as three boxes. The bottom row represents the output vector E as three boxes. The diagram has connecting lines from the input vectors to the operations, and from the operations to the output vector.  ](https://developer.apple.com/images/com.apple.accelerate/media-4389065@2x.png)

The following code shows an example of using this function:

```swift
    let count = 5
    
    let a: [Float] = [ 1,  2,  3,  4,  5]
    let b: Float = 10
    let c: [Float] = [ 5,  4,  3,  2,  1]
    let d: Float = 50
    
    let e = [Float](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP.add(multiplication: (a, b),
                 multiplication: (c, d),
                 result: &buffer)
        
        initializedCount = count
    }
    
    // Prints "[260.0, 220.0, 180.0, 140.0, 100.0]".
    print(e)
```

## See Also

### Addition

- [add(\_:\_:)](add%28____%29-9mv1a.md): Returns the double-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:)](add%28____%29-2ftxc.md): Returns the double-precision element-wise sum of two vectors.
- [add(\_:\_:)](add%28____%29-53nh9.md): Returns the single-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:)](add%28____%29-7swvf.md): Returns the single-precision element-wise sum of two vectors.
- [add(\_:\_:result:)](add%28____result_%29-2531u.md): Calculates the single-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:result:)](add%28____result_%29-2w0o9.md): Calculates the single-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:result:)](add%28____result_%29-338hl.md): Calculates the double-precision element-wise sum of two vectors.
- [add(\_:\_:result:)](add%28____result_%29-3vzwi.md): Calculates the single-precision element-wise sum of two vectors.
- [add(\_:to:count:result:)](add%28__to_count_result_%29-g1dk.md): Calculates the single-precision element-wise sum of the supplied complex vectors.
- [add(\_:to:count:result:)](add%28__to_count_result_%29-75np9.md): Calculates the double-precision element-wise sum of the supplied complex vectors.
- [add(multiplication:\_:)](add%28multiplication___%29-4e3tj.md): Returns the double-precision element-wise addition of the product of a vector and a scalar value, and a vector.
- [add(multiplication:\_:)](add%28multiplication___%29-1bsuq.md): Returns the double-precision element-wise addition of the product of a vector and a scalar value, and a vector.
- [add(multiplication:\_:)](add%28multiplication___%29-9dxlr.md): Returns the double-precision element-wise sum of the product of two vectors, and a scalar value.
- [add(multiplication:\_:)](add%28multiplication___%29-4667v.md): Returns the double-precision element-wise sum of a vector and the product of two vectors.
- [add(multiplication:\_:)](add%28multiplication___%29-3tw93.md): Returns the single-precision element-wise addition of the product of a vector and a scalar value, and a vector.
