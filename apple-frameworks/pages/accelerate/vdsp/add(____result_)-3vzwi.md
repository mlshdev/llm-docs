> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/add(_:_:result:)-3vzwi](https://developer.apple.com/documentation/accelerate/vdsp/add(_:_:result:)-3vzwi)

# add(\_:\_:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the single-precision element-wise sum of two vectors.

## Declaration

```swift
static func add<T, U, V>(_ vectorA: T, _ vectorB: U, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Float, U.Element == Float, V.Element == Float
```

## Parameters

- `vectorA`: The first input vector, `A`.
- `vectorB`: The second input vector, `B`.
- `result`: The output vector, `C`.

<a id="Discussion"></a>

## Discussion

This function calculates the sums of the first `N` elements of input vectors `A` and `B`, and writes the result to output vector `C`.

```swift
 for (n = 0; n < N; ++n)
    C[n] = A[n] + B[n];
```

![A diagram showing the operation of this function. There are three rows. The top row represents the input vectors, A and B, with three boxes of each. The middle row represents the operation as three boxes with plus signs. The bottom row represents the output vector C as three boxes. The diagram has connecting lines from the input vectors to the operation, and from the operation to the output vectors.](https://developer.apple.com/images/com.apple.accelerate/media-4389090@2x.png)

The following code shows an example of using this function:

```swift
    let count = 5

    let a: [Float] = [ 1,  2,  3,  4,  5]
    let b: [Float] = [10, 20, 30, 40, 50]

    let c = [Float](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP.add(a, b,
                 result: &buffer)
        
        initializedCount = count
    }
   
    // Prints "[11.0, 22.0, 33.0, 44.0, 55.0]".
    print(c)
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
- [add(\_:to:count:result:)](add%28__to_count_result_%29-g1dk.md): Calculates the single-precision element-wise sum of the supplied complex vectors.
- [add(\_:to:count:result:)](add%28__to_count_result_%29-75np9.md): Calculates the double-precision element-wise sum of the supplied complex vectors.
- [add(multiplication:\_:)](add%28multiplication___%29-4e3tj.md): Returns the double-precision element-wise addition of the product of a vector and a scalar value, and a vector.
- [add(multiplication:\_:)](add%28multiplication___%29-1bsuq.md): Returns the double-precision element-wise addition of the product of a vector and a scalar value, and a vector.
- [add(multiplication:\_:)](add%28multiplication___%29-9dxlr.md): Returns the double-precision element-wise sum of the product of two vectors, and a scalar value.
- [add(multiplication:\_:)](add%28multiplication___%29-4667v.md): Returns the double-precision element-wise sum of a vector and the product of two vectors.
- [add(multiplication:\_:)](add%28multiplication___%29-3tw93.md): Returns the single-precision element-wise addition of the product of a vector and a scalar value, and a vector.
- [add(multiplication:\_:)](add%28multiplication___%29-7aut1.md): Returns the single-precision element-wise addition of the product of a vector and a scalar value, and a vector.
