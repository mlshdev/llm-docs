> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vvcbrt(_:_:_:)](https://developer.apple.com/documentation/accelerate/vvcbrt(_:_:_:))

# vvcbrt(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the cube root for each element of a vector.

## Declaration

```swift
func vvcbrt(_: UnsafeMutablePointer<Double>, _: UnsafePointer<Double>, _: UnsafePointer<Int32>)
```

<a id="Parameters"></a>

### Parameters

- **y**: (output) Output vector of size `*n`. `y[i]` is set to `cbrt(x[i])`.
- **x**: (input) Input vector of size `*n`.
- **n**: (input) The number of elements in the vectors `x` and `y`.

## See Also

### Trigonometric Functions (from vfp.h)

- [vsinf(\_:)](vsinf%28__%29.md): For each vector element, calculates the sine.
- [vcosf(\_:)](vcosf%28__%29.md): For each vector element, calculates the cosine.
- [vsincosf(\_:\_:)](vsincosf%28____%29.md): Simultaneously computes sine and cosine of values in a vector.
- [vtanf(\_:)](vtanf%28__%29.md): For each vector element, calculates the tangent.
- [vasinf(\_:)](vasinf%28__%29.md): For each vector element, calculates the arcsine. Results are in the interval \[-pi/2, pi/2\].
- [vacosf(\_:)](vacosf%28__%29.md): For each vector element, calculates the arccosine. Results are in the interval \[0, pi\].
- [vatanf(\_:)](vatanf%28__%29.md): For each vector element, calculates the arctangent. Results are in the interval \[-pi/2, pi/2\].
- [vatan2f(\_:\_:)](vatan2f%28____%29.md): For each vector element, calculates the arctangent of `arg2`/`arg1` in the interval \[-pi,pi\] using the sign of both arguments to determine the quadrant of the computed value.
- [vvcbrtf(\_:\_:\_:)](vvcbrtf%28______%29.md): Calculates the cube root for each element of a vector.

# vvcbrt (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the cube root for each element of a vector.

## Declaration

```objectivec
void vvcbrt(double *, const double *, const int *);
```

<a id="Parameters"></a>

### Parameters

- **y**: (output) Output vector of size `*n`. `y[i]` is set to `cbrt(x[i])`.
- **x**: (input) Input vector of size `*n`.
- **n**: (input) The number of elements in the vectors `x` and `y`.

## See Also

### Trigonometric Functions (from vfp.h)

- [vsinf](vsinf%28__%29.md): For each vector element, calculates the sine.
- [vcosf](vcosf%28__%29.md): For each vector element, calculates the cosine.
- [vsincosf](vsincosf%28____%29.md): Simultaneously computes sine and cosine of values in a vector.
- [vtanf](vtanf%28__%29.md): For each vector element, calculates the tangent.
- [vasinf](vasinf%28__%29.md): For each vector element, calculates the arcsine. Results are in the interval \[-pi/2, pi/2\].
- [vacosf](vacosf%28__%29.md): For each vector element, calculates the arccosine. Results are in the interval \[0, pi\].
- [vatanf](vatanf%28__%29.md): For each vector element, calculates the arctangent. Results are in the interval \[-pi/2, pi/2\].
- [vatan2f](vatan2f%28____%29.md): For each vector element, calculates the arctangent of `arg2`/`arg1` in the interval \[-pi,pi\] using the sign of both arguments to determine the quadrant of the computed value.
- [vvcbrtf](vvcbrtf%28______%29.md): Calculates the cube root for each element of a vector.
