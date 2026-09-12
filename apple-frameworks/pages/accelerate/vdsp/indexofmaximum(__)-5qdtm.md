> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/indexofmaximum(_:)-5qdtm](https://developer.apple.com/documentation/accelerate/vdsp/indexofmaximum(_:)-5qdtm)

# indexOfMaximum(\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the maximum value and corresponding index in a single-precision vector.

## Declaration

```swift
static func indexOfMaximum<U>(_ vector: U) -> (UInt, Float) where U : AccelerateBuffer, U.Element == Float
```

## Parameters

- `vector`: The input vector.

<a id="return-value"></a>

## Return Value

A tuple that contains the maximum value and corresponding index.

## Mentioned In

- [Performing Fourier transforms on interleaved-complex data](../performing-fourier-transforms-on-interleaved-complex-data.md)

<a id="Discussion"></a>

## Discussion

This function calculates the maximum value and its corresponding index of the first `N` elements of the input vector and writes the results to the output scalar parameters, `C` and `I`, respectively.

![A diagram showing the operation of this function. There are three rows. The top row represents the input vector, A, with three boxes. The middle row represents the operation as two boxes that contains maximum and argmax functions. The bottom row represents the output scalar values C and I as two  boxes. The diagram has connecting lines from the input vector to the operations, and from the operations to the output scalar values.](https://developer.apple.com/images/com.apple.accelerate/media-4465948@2x.png)

The following code shows an example of using this function:

```swift
let a: [Float] = [-1.5, 2.25, 3.6,
                  0.2, -0.1, -4.3]

let indexOfMaximum = vDSP.indexOfMaximum(a)
print("indexOfMaximum", indexOfMaximum) // Prints "indexOfMaximum (2, 3.6)".
```

## See Also

### Type Methods

- [absolute(\_:)](absolute%28__%29-9c3ge.md): Returns the absolute value of each element in the supplied double-precision vector.
- [absolute(\_:)](absolute%28__%29-5ehc1.md): Returns the absolute value of each element in the supplied single-precision vector.
- [absolute(\_:result:)](absolute%28__result_%29-9x5jn.md): Calculates the absolute value of each element in the supplied single-precision complex vector.
- [absolute(\_:result:)](absolute%28__result_%29-1wu9x.md): Calculates the absolute value of each element in the supplied double-precision complex vector.
- [absolute(\_:result:)](absolute%28__result_%29-657bd.md): Calculates the absolute value of each element in the supplied double-precision vector.
- [absolute(\_:result:)](absolute%28__result_%29-4pigo.md): Calculates the absolute value of each element in the supplied single-precision vector.
- [add(\_:\_:)](add%28____%29-9mv1a.md): Returns the double-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:)](add%28____%29-2ftxc.md): Returns the double-precision element-wise sum of two vectors.
- [add(\_:\_:)](add%28____%29-53nh9.md): Returns the single-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:)](add%28____%29-7swvf.md): Returns the single-precision element-wise sum of two vectors.
- [add(\_:\_:result:)](add%28____result_%29-2531u.md): Calculates the single-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:result:)](add%28____result_%29-2w0o9.md): Calculates the single-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:result:)](add%28____result_%29-338hl.md): Calculates the double-precision element-wise sum of two vectors.
- [add(\_:\_:result:)](add%28____result_%29-3vzwi.md): Calculates the single-precision element-wise sum of two vectors.
- [add(\_:to:count:result:)](add%28__to_count_result_%29-g1dk.md): Calculates the single-precision element-wise sum of the supplied complex vectors.
