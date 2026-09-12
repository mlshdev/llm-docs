> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/hypot(_:_:)-7ku7m](https://developer.apple.com/documentation/accelerate/vdsp/hypot(_:_:)-7ku7m)

# hypot(\_:\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the double-precision hypotenuses of right triangles with legs that are the lengths of corresponding elements of the two input vectors.

## Declaration

```swift
static func hypot<U, V>(_ x: U, _ y: V) -> [Double] where U : AccelerateBuffer, V : AccelerateBuffer, U.Element == Double, V.Element == Double
```

## Parameters

- `x`: An array that contains the lengths of the first set of legs of the triangles.
- `y`: An array that contains the lengths of the second set of legs of the triangles.

<a id="Discussion"></a>

## Discussion

This function returns the square roots of the sum of the squares of corresponding elements of vectors `x` and `y`, using the following operation:

```objc
for (n = 0; n < N; ++n)
    C[n] = sqrt(x[n]*x[n] + y[n]*y[n]);
```

For example, the following code calculates the hypotenuse of four Pythagorean triples:

```swift
    let x: [Float] = [3, 6, 5, 9]
    let y: [Float] = [4, 8, 12, 12]
    
    let hypotenuses = vDSP.hypot(x, y)
    
    // Prints "[5.0, 10.0, 13.0, 15.0]".
    print(hypotenuses)
```

## See Also

### Related Documentation

- [vDSP_vdist](../vdsp_vdist.md): Calculates the single-precision hypotenuses of right triangles with legs that are the lengths of corresponding elements of two pairs of vectors.

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
