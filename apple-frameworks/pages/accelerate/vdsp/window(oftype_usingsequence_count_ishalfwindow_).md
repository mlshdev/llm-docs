> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/window(oftype:usingsequence:count:ishalfwindow:)](https://developer.apple.com/documentation/accelerate/vdsp/window(oftype:usingsequence:count:ishalfwindow:))

# window(ofType:usingSequence:count:isHalfWindow:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns an array that contains the specified window.

## Declaration

```swift
static func window<T>(ofType: T.Type, usingSequence sequence: vDSP.WindowSequence, count: Int, isHalfWindow: Bool) -> [T] where T : vDSP_FloatingPointGeneratable
```

## Parameters

- `ofType`: The precision of the generated window.
- `sequence`: The window sequence to use for generation.
- `count`: The number of elements to generate.
- `isHalfWindow`: A Boolean value that specifies whether the function generates half of the number of elements.

## Mentioned In

- [Reducing spectral leakage with windowing](../reducing-spectral-leakage-with-windowing.md)

<a id="Discussion"></a>

## Discussion

Use this function to generate and return a vector populated with values of a specified window sequence.

The following code shows how to generate a single-precision Blackman window:

```swift
let c = vDSP.window(ofType: Float.self,
                    usingSequence: .blackman,
                    count: 1024,
                    isHalfWindow: false)
```

The following figure illustrates the values of the output vector, `c`:

![Visualization of a Blackman window.](https://developer.apple.com/images/com.apple.accelerate/media-3362247@2x.png)

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
