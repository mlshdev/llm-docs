> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/divide(_:_:result:)-7ejy9](https://developer.apple.com/documentation/accelerate/vdsp/divide(_:_:result:)-7ejy9)

# divide(\_:\_:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the single-precision element-wise division of two vectors.

## Declaration

```swift
static func divide<T, U, V>(_ vectorA: T, _ vectorB: U, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Float, U.Element == Float, V.Element == Float
```

## Parameters

- `vectorA`: The first input vector, `A`.
- `vectorB`: The second input vector, `B`.
- `result`: The output vector, `C`.

<a id="Discussion"></a>

## Discussion

This function calculates the division of the first `N` elements of input vectors `A` and `B`, and writes the result to output vector `C`.

```swift
 for (n = 0; n < N; ++n)
    C[n] = A[n] / B[n];
```

![A diagram showing the operation of this function. There are three rows. The top row represents the input vectors, A and B, with three boxes of each. The middle row represents the operation as three boxes with division signs. The bottom row represents the output vector C as three boxes. The diagram has connecting lines from the input vectors to the operation, and from the operation to the output vectors.](https://developer.apple.com/images/com.apple.accelerate/media-4336922@2x.png)

The following code shows an example of using this function:

```swift
    let count = 5
    
    let a: [Float] = [10, 20, 30, 40, 50]
    let b: [Float] = [ 1,  2,  3,  4,  5]
    
    let c = [Float](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP.divide(a, b,
                    result: &buffer)
        
        initializedCount = count
    }
    
    // Prints "[10.0, 10.0, 10.0, 10.0, 10.0]".
    print(c)
```

## See Also

### Division

- [divide(\_:\_:)](divide%28____%29-73m8v.md): Returns the double-precision element-wise division of a scalar value and a vector.
- [divide(\_:\_:)](divide%28____%29-9nb4j.md): Calculates the double-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:)](divide%28____%29-8swnm.md): Returns the double-precision element-wise division of two vectors.
- [divide(\_:\_:)](divide%28____%29-70npt.md): Returns the single-precision element-wise division of a scalar value and a vector.
- [divide(\_:\_:)](divide%28____%29-1uqmz.md): Calculates the single-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:)](divide%28____%29-6nfsi.md): Returns the single-precision element-wise division of two vectors.
- [divide(\_:\_:result:)](divide%28____result_%29-18qa3.md): Calculates the double-precision element-wise division of a scalar value and a vector.
- [divide(\_:\_:result:)](divide%28____result_%29-3emlk.md): Calculates the single-precision element-wise division of a scalar value and a vector.
- [divide(\_:\_:result:)](divide%28____result_%29-44mff.md): Calculates the double-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:result:)](divide%28____result_%29-5hwb2.md): Calculates the single-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:result:)](divide%28____result_%29-6gtmm.md): Calculates the double-precision element-wise division of two vectors.
- [divide(\_:by:count:result:)](divide%28__by_count_result_%29-9chz5.md): Calculates the single-precision element-wise division of a complex vector by a complex vector.
- [divide(\_:by:count:result:)](divide%28__by_count_result_%29-57jlj.md): Calculates the double-precision element-wise division of a complex vector by a complex vector.
- [divide(\_:by:result:)](divide%28__by_result_%29-66qch.md): Calculates the single-precision element-wise division of a complex vector by a real vector.
- [divide(\_:by:result:)](divide%28__by_result_%29-402v9.md): Calculates the double-precision element-wise division of a complex vector by a complex vector.
