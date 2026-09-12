> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/add(multiplication:_:)-7aut1](https://developer.apple.com/documentation/accelerate/vdsp/add(multiplication:_:)-7aut1)

# add(multiplication:\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the single-precision element-wise addition of the product of a vector and a scalar value, and a vector.

## Declaration

```swift
static func add<T, U>(multiplication: (a: T, b: Float), _ vector: U) -> [Float] where T : AccelerateBuffer, U : AccelerateBuffer, T.Element == Float, U.Element == Float
```

## Parameters

- `multiplication`: A tuple that contains the vectors `A` and `B` in `D = (A * B) + C`.
- `vector`: The input scalar value `C` in `D = (A * B) + C`.

<a id="return-value"></a>

## Return Value

The output vector `D` in `D = (A * B) + C`.

## Mentioned In

- [Using vDSP for vector-based arithmetic](../using-vdsp-for-vector-based-arithmetic.md)

<a id="Discussion"></a>

## Discussion

This function calculates the element-wise product of vector `A` and scalar value `B`, adds vector `C` to the product, and writes the result to vector `D`.

```swift
 for (n = 0; n < N; ++n)
    D[n] = A[n] * B + C[n];
```

![A diagram showing the operation of this function. There are four rows. The top row represents the input vector, A, with three boxes, and the scalar value B, with one box. The second row represents the operation that multiplies A and B, with three boxes, as well as the input vector C with three boxes. The third row represents the addition operation as three boxes. The bottom row represents the output vector D as three boxes. The diagram has connecting lines from the input vectors to the operations, and from the operations to the output vector. ](https://developer.apple.com/images/com.apple.accelerate/media-4387621@2x.png)

The following code shows an example of using this function:

```swift
    let a: [Float] = [ 1,  2,  3,  4,  5]
    let b: Float = 10
    let c: [Float] = [ 5,  4,  3,  2,  1]
    
    let d = vDSP.add(multiplication: (a, b),
                     c)
    
    // Prints "[15.0, 24.0, 33.0, 42.0, 51.0]".
    print(d)
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
