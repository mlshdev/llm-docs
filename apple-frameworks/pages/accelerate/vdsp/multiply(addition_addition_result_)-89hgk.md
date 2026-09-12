> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/multiply(addition:addition:result:)-89hgk](https://developer.apple.com/documentation/accelerate/vdsp/multiply(addition:addition:result:)-89hgk)

# multiply(addition:addition:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the double-precision element-wise product of the sums of two pairs of vectors.

## Declaration

```swift
static func multiply<S, T, U, V>(addition additionAB: (a: S, b: T), addition additionCD: (c: U, d: U), result: inout V) where S : AccelerateBuffer, T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, S.Element == Double, T.Element == Double, U.Element == Double, V.Element == Double
```

## Parameters

- `additionAB`: A tuple that contains the vectors `A` and `B` in `E = (A + B) * (C + D)`.
- `additionCD`: A tuple that contains the vectors `C` and `D` in `E = (A + B) * (C + D)`.
- `result`: The output vector `E` in `E = (A + B) * (C + D)`.

<a id="Discussion"></a>

## Discussion

This function calculates the products of the first `N` elements of the addition of vectors `A` and `B` and the addition of vectors `C` and `D`.

```swift
 for (n = 0; n < N; ++n)
    E[n] = (A[n]+B[n]) * (C[n]+D[n]); 
```

![A diagram showing the operation of this function. There are four rows. The top row represents the input vectors, A, B, C, and D, with three boxes of each. The second row represents the operations that sum vectors A and B, and sum vectors C and D, with three boxes of each. The third row represents the multiplication operation as three boxes.  The bottom row represents the output vector E as three boxes. The diagram has connecting lines from the input vectors to the operations, and from the operations to the output vectors. ](https://developer.apple.com/images/com.apple.accelerate/media-4337069@2x.png)

The following code shows an example of using this function:

```swift
    let count = 5
    
    let a: [Double] = [ 1,  2,  3,  4,  5]
    let b: [Double] = [10, 20, 30, 40, 50]
    let c: [Double] = [ 5,  4,  3,  2,  1]
    let d: [Double] = [50, 40, 30, 20, 10]
    
    let e = [Double](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP.multiply(addition: (a, b),
                      addition: (c, d),
                      result: &buffer)
        
        initializedCount = count
    }
    
    // Prints "[605.0, 968.0, 1089.0, 968.0, 605.0]".
    print(e)

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
