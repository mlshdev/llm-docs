> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/hypot(x0:x1:y0:y1:result:)-4pizr](https://developer.apple.com/documentation/accelerate/vdsp/hypot(x0:x1:y0:y1:result:)-4pizr)

# hypot(x0:x1:y0:y1:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the double-precision hypotenuses of right triangles with legs that are the differences of corresponding elements of two pairs of vectors.

## Declaration

```swift
static func hypot<R, S, T, U, V>(x0: R, x1: S, y0: T, y1: U, result: inout V) where R : AccelerateBuffer, S : AccelerateBuffer, T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, R.Element == Double, S.Element == Double, T.Element == Double, U.Element == Double, V.Element == Double
```

## Parameters

- `x0`: An array that contains the first values of the first set of legs of the triangles.
- `x1`: An array that contains the second values of the first set of legs of the triangles.
- `y0`: An array that contains the first values of the second set of legs of the triangles.
- `y1`: An array that contains the second values of the second set of legs of the triangles.
- `result`: An array that receives the result of the calculation.

<a id="Discussion"></a>

## Discussion

This function calculates the length of the hypotenuse of *n* number of triangles, where *n* is the number of elements in the supplied vectors. The differences between corresponding elements of vectors `x0` and `x1` and vectors `y0` and `y1` define the lengths of the two legs of each triangle.

The functions use the following operation:

```swift
for (n = 0; n < N; ++n)
    E[n] = sqrt((x0[n]-x1[n])**2 + (y0[n]-y1[n])**2);
```

For example, the following code calculates the hypotenuse of four Pythagorean triples:

```swift
    let x0: [Double] = [3, 6, 5, 9]
    let x1: [Double] = [0, 0, 0, 0]
    
    let y0: [Double] = [0, 0, 0, 0]
    let y1: [Double] = [4, 8, 12, 12]
    
    let hypotenuses = [Double](
        unsafeUninitializedCapacity: x0.count) {
            buffer, initializedCount in
            
            vDSP.hypot(x0: x0, x1: x1,
                       y0: y0, y1: y1,
                       result: &buffer)
            
            initializedCount = x0.count
        }
    
    // Prints "[5.0, 10.0, 13.0, 15.0]".
    print(hypotenuses)
```

## See Also

### Related Documentation

- [vDSP_vpythg](../vdsp_vpythg.md): Calculates the single-precision hypotenuses of right triangles with legs that are the differences of corresponding elements of two pairs of vectors.

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
