> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/multiply(_:_:)-9dxnc](https://developer.apple.com/documentation/accelerate/vdsp/multiply(_:_:)-9dxnc)

# multiply(\_:\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the double-precision element-wise product of a vector and a scalar value.

## Declaration

```swift
static func multiply<U>(_ scalar: Double, _ vector: U) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

## Parameters

- `scalar`: The input scalar value, `B`.
- `vector`: The input vector, `A`.

<a id="return-value"></a>

## Return Value

The output vector, `C`.

<a id="Discussion"></a>

## Discussion

This function calculates the element-wise product of vector `A` and scalar value `B`, and writes the result to vector `C`.

```swift
 for (n = 0; n < N; ++n)
    C[n] = A[n] * B;
```

![A diagram showing the operation of this function. There are three rows. The top row represents the input vector A with three boxes, and the scalar value B with one box. The middle row represents the operation as three boxes with multiplication signs. The bottom row represents the output vector C as three boxes. The diagram has connecting lines from the input vectors to the operation, and from the operation to the output vector. ](https://developer.apple.com/images/com.apple.accelerate/media-4337191@2x.png)

The following code shows an example of using this function:

```swift
    let a: [Double] = [1, 2, 3, 4, 5]
    let b: Double = 10
    
    let c = vDSP.multiply(b, a)
    
    // Prints "[10.0, 20.0, 30.0, 40.0, 50.0]".
    print(c)
```

## See Also

### Multiplication

- [multiply(\_:\_:)](multiply%28____%29-1ckqt.md): Returns the double-precision element-wise product of two vectors.
- [multiply(\_:\_:)](multiply%28____%29-993yp.md): Returns the single-precision element-wise product of a vector and a scalar value.
- [multiply(\_:\_:)](multiply%28____%29-9zgw.md): Returns the single-precision element-wise product of two vectors.
- [multiply(\_:\_:result:)](multiply%28____result_%29-4xorc.md): Calculates the double-precision element-wise product of a vector and a scalar value.
- [multiply(\_:\_:result:)](multiply%28____result_%29-358cn.md): Calculates the single-precision element-wise product of a vector and a scalar value.
- [multiply(\_:\_:result:)](multiply%28____result_%29-3ptjl.md): Calculates the double-precision element-wise product of two vectors.
- [multiply(\_:\_:result:)](multiply%28____result_%29-155f3.md): Calculates the single-precision element-wise product of two vectors.
- [multiply(\_:by:count:useConjugate:result:)](multiply%28__by_count_useconjugate_result_%29-4idx8.md): Calculates the product of two complex single-precision vectors, optionally conjugating one of them.
- [multiply(\_:by:count:useConjugate:result:)](multiply%28__by_count_useconjugate_result_%29-79r8u.md): Calculates the element-wise product of two complex double-precision vectors, optionally conjugating one of them.
- [multiply(\_:by:result:)](multiply%28__by_result_%29-8b9eq.md): Calculates the double-precision element-wise product of a complex vector and a real vector.
- [multiply(\_:by:result:)](multiply%28__by_result_%29-8jyhd.md): Calculates the single-precision element-wise product of a complex vector and a real vector.
- [multiply(addition:\_:)](multiply%28addition___%29-4c9in.md): Returns the double-precision element-wise product of the sum of two vectors and a scalar value.
- [multiply(addition:\_:)](multiply%28addition___%29-1wt61.md): Returns the double-precision element-wise product of a vector and the sum of two vectors.
- [multiply(addition:\_:)](multiply%28addition___%29-4fnbx.md): Returns the single-precision element-wise product of the sum of two vectors and a scalar value.
- [multiply(addition:\_:)](multiply%28addition___%29-7t59.md): Returns the single-precision element-wise product of a vector and the sum of two vectors.
