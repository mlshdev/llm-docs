> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/stereoramp(withinitialvalue:multiplyingby:_:increment:)-18f8z](https://developer.apple.com/documentation/accelerate/vdsp/stereoramp(withinitialvalue:multiplyingby:_:increment:)-18f8z)

# stereoRamp(withInitialValue:multiplyingBy:\_:increment:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns two single-precision vectors that contain stereo monotonically incrementing or decrementing values multiplied by two source vectors.

## Declaration

```swift
static func stereoRamp<U>(withInitialValue initialValue: inout Float, multiplyingBy multiplierOne: U, _ multiplierTwo: U, increment: Float) -> (firstOutput: [Float], secondOutput: [Float]) where U : AccelerateBuffer, U.Element == Float
```

## Parameters

- `initialValue`: The initial value of the ramp.
- `multiplierOne`: The first input vector that’s multiplied by the ramp function.
- `multiplierTwo`: The second input vector that’s multiplied by the ramp function.
- `increment`: The increment, or decrement if negative, between each generated element.

<a id="Discussion"></a>

## Discussion

Use this function to create two vectors by multiplying the values in two input vectors with the corresponding values of a ramp.

For example, the following code fills the arrays `multiplierOne` and `multiplierTwo` with sine values:

```swift
let n = vDSP_Length(1024)

let multiplierOne: [Float] = (0 ..< n).map {
    return sin(Float($0) / 20) * 2
}

let multiplierTwo: [Float] = (0 ..< n).map {
    return sin(Float($0) / 40)
}
```

The following figure illustrates the values of `multiplierOne`, as a solid line, and `multiplierTwo`, as a dashed line:

![A graphic shows two sine waves. The first sine wave appears as a solid line and the second sine wave appears as a dashed line. The first sine wave has a higher freqency and a higher amplitude than the second sine wave. ](https://developer.apple.com/images/com.apple.accelerate/media-3732292@2x.png)

Pass `multiplierOne` and `multiplierTwo` as the `multiplyingBy` parameter of [stereoRamp(withInitialValue:multiplyingBy:\_:increment:)](stereoramp%28withinitialvalue_multiplyingby___increment_%29-18f8z.md):

```swift
var start: Float = 0
let step: Float = 0.1

let results = vDSP.stereoRamp(withInitialValue: &start,
                              multiplyingBy: multiplierOne, multiplierTwo,
                              increment: step)
```

On return, the output vectors, `results.firstOutput` and `results.secondOutput`, contain ramped-sine waves. The figure below shows the first output as a solid line and the second output as a dashed line:

![A graphic shows two sine waves. The first sine wave appears as a solid line and the second sine wave appears as a dashed line. The first sine wave and has a higher freqency and a higher amplitude than the second sine wave.  Both sine waves are tapered, that is, they begin on the left with a very low amplitude and their amplitudes ramp up towards the right of the image.](https://developer.apple.com/images/com.apple.accelerate/media-3732287@2x.png)

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
