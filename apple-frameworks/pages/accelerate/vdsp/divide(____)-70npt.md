> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/divide(_:_:)-70npt](https://developer.apple.com/documentation/accelerate/vdsp/divide(_:_:)-70npt)

# divide(\_:\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the single-precision element-wise division of a scalar value and a vector.

## Declaration

```swift
static func divide<U>(_ scalar: Float, _ vector: U) -> [Float] where U : AccelerateBuffer, U.Element == Float
```

## Parameters

- `scalar`: The input scalar value, `A`.
- `vector`: The input vector, `B`.

<a id="return-value"></a>

## Return Value

The output vector, `C`.

## Mentioned In

- [Using vDSP for vector-based arithmetic](../using-vdsp-for-vector-based-arithmetic.md)

<a id="Discussion"></a>

## Discussion

This function calculates the element-wise division of scalar value `A` and vector `B`, and writes the result to vector `C`.

```swift
 for (n = 0; n < N; ++n)
    C[n] = A / B[n];
```

![A diagram showing the operation of this function. There are three rows. The top row represents the scalar value A with one box, and the input vector B with three boxes. The middle row represents the operation as three boxes with division signs. The bottom row represents the output vector C as three boxes. The diagram has connecting lines from the input vectors to the operation, and from the operation to the output vector.](https://developer.apple.com/images/com.apple.accelerate/media-4337227@2x.png)

The following code shows an example of using this function:

```swift
    let a: Float = 100
    let b: [Float] = [1, 2, 3, 4, 5]
    
    let c = vDSP.divide(a, b)
    
    // Prints "[100.0, 50.0, 33.33, 25.0, 20.0]".
    print(c)
```

## See Also

### Division

- [divide(\_:\_:)](divide%28____%29-73m8v.md): Returns the double-precision element-wise division of a scalar value and a vector.
- [divide(\_:\_:)](divide%28____%29-9nb4j.md): Calculates the double-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:)](divide%28____%29-8swnm.md): Returns the double-precision element-wise division of two vectors.
- [divide(\_:\_:)](divide%28____%29-1uqmz.md): Calculates the single-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:)](divide%28____%29-6nfsi.md): Returns the single-precision element-wise division of two vectors.
- [divide(\_:\_:result:)](divide%28____result_%29-18qa3.md): Calculates the double-precision element-wise division of a scalar value and a vector.
- [divide(\_:\_:result:)](divide%28____result_%29-3emlk.md): Calculates the single-precision element-wise division of a scalar value and a vector.
- [divide(\_:\_:result:)](divide%28____result_%29-44mff.md): Calculates the double-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:result:)](divide%28____result_%29-5hwb2.md): Calculates the single-precision element-wise division of a vector and a scalar value.
- [divide(\_:\_:result:)](divide%28____result_%29-6gtmm.md): Calculates the double-precision element-wise division of two vectors.
- [divide(\_:\_:result:)](divide%28____result_%29-7ejy9.md): Calculates the single-precision element-wise division of two vectors.
- [divide(\_:by:count:result:)](divide%28__by_count_result_%29-9chz5.md): Calculates the single-precision element-wise division of a complex vector by a complex vector.
- [divide(\_:by:count:result:)](divide%28__by_count_result_%29-57jlj.md): Calculates the double-precision element-wise division of a complex vector by a complex vector.
- [divide(\_:by:result:)](divide%28__by_result_%29-66qch.md): Calculates the single-precision element-wise division of a complex vector by a real vector.
- [divide(\_:by:result:)](divide%28__by_result_%29-402v9.md): Calculates the double-precision element-wise division of a complex vector by a complex vector.
