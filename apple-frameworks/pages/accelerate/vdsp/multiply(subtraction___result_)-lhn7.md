> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/multiply(subtraction:_:result:)-lhn7](https://developer.apple.com/documentation/accelerate/vdsp/multiply(subtraction:_:result:)-lhn7)

# multiply(subtraction:\_:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the double-precision element-wise product of the difference of two vectors and a scalar value.

## Declaration

```swift
static func multiply<T, U, V>(subtraction: (a: T, b: U), _ scalar: Double, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Double, U.Element == Double, V.Element == Double
```

## Parameters

- `subtraction`: A tuple that contains the vectors `A` and `B` in `D = (A - B) * C`.
- `scalar`: The input scalar value `C` in `D = (A - B) * C`.
- `result`: The output vector `D` in `D = (A - B) * C`.

<a id="Discussion"></a>

## Discussion

This function calculates the element-wise difference of vectors `A` and `B`, multiplies the difference by scalar value `C`, and writes the result to vector `D`.

```swift
 for (n = 0; n < N; ++n)
    D[n] = (A[n] - B[n]) * C;
```

![A diagram showing the operation of this function. There are four rows. The top row represents the input vectors, A and B, with three boxes of each. The second row frepresents the operation that subtracts B from A, with three boxes, as well as the input scalar C with one box. The third row represents the multiplication operation as three boxes. The bottom row represents the output vector D as three boxes. The diagram has connecting lines from the input vectors to the operations, and from the operations to the output vector.  ](https://developer.apple.com/images/com.apple.accelerate/media-4387365@2x.png)

The following code shows an example of using this function:

```swift
    let count = 5
    
    let a: [Double] = [ 1,  2,  3,  4,  5]
    let b: [Double] = [10, 20, 30, 40, 50]
    let c: Double = 5
    
    let d = [Double](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP.multiply(subtraction: (a, b), 
                      c,
                      result: &buffer)
        
        initializedCount = count
    }
    
    // Prints "[-45.0, -90.0, -135.0, -180.0, -225.0]".
    print(d)
```

## See Also

### Multiplication

- [multiply(\_:\_:)](multiply%28____%29-9dxnc.md): Returns the double-precision element-wise product of a vector and a scalar value.
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
