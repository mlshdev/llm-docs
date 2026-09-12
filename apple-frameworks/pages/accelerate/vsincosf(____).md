> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vsincosf(_:_:)](https://developer.apple.com/documentation/accelerate/vsincosf(_:_:))

# vsincosf(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Simultaneously computes sine and cosine of values in a vector.

## Declaration

```swift
func vsincosf(_: vFloat, _: UnsafeMutablePointer<vFloat>) -> vFloat
```

<a id="return-value"></a>

## Return Value

Returns a vector that contains the result of `cos(x)` for each value (`x`) in the source vector.

<a id="Parameters"></a>

### Parameters:

- **parameter 1**: the source vector.
- **parameter 2**: the output vector.

## See Also

### Trigonometric Functions (from vfp.h)

- [vsinf(\_:)](vsinf%28__%29.md): For each vector element, calculates the sine.
- [vcosf(\_:)](vcosf%28__%29.md): For each vector element, calculates the cosine.
- [vtanf(\_:)](vtanf%28__%29.md): For each vector element, calculates the tangent.
- [vasinf(\_:)](vasinf%28__%29.md): For each vector element, calculates the arcsine. Results are in the interval \[-pi/2, pi/2\].
- [vacosf(\_:)](vacosf%28__%29.md): For each vector element, calculates the arccosine. Results are in the interval \[0, pi\].
- [vatanf(\_:)](vatanf%28__%29.md): For each vector element, calculates the arctangent. Results are in the interval \[-pi/2, pi/2\].
- [vatan2f(\_:\_:)](vatan2f%28____%29.md): For each vector element, calculates the arctangent of `arg2`/`arg1` in the interval \[-pi,pi\] using the sign of both arguments to determine the quadrant of the computed value.
- [vvcbrt(\_:\_:\_:)](vvcbrt%28______%29.md): Calculates the cube root for each element of a vector.
- [vvcbrtf(\_:\_:\_:)](vvcbrtf%28______%29.md): Calculates the cube root for each element of a vector.

# vsincosf (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Simultaneously computes sine and cosine of values in a vector.

## Declaration

```objectivec
extern vFloat vsincosf(vFloat , vFloat *);
```

<a id="return-value"></a>

## Return Value

Returns a vector that contains the result of `cos(x)` for each value (`x`) in the source vector.

<a id="Parameters"></a>

### Parameters:

- **parameter 1**: the source vector.
- **parameter 2**: the output vector.

## See Also

### Trigonometric Functions (from vfp.h)

- [vsinf](vsinf%28__%29.md): For each vector element, calculates the sine.
- [vcosf](vcosf%28__%29.md): For each vector element, calculates the cosine.
- [vtanf](vtanf%28__%29.md): For each vector element, calculates the tangent.
- [vasinf](vasinf%28__%29.md): For each vector element, calculates the arcsine. Results are in the interval \[-pi/2, pi/2\].
- [vacosf](vacosf%28__%29.md): For each vector element, calculates the arccosine. Results are in the interval \[0, pi\].
- [vatanf](vatanf%28__%29.md): For each vector element, calculates the arctangent. Results are in the interval \[-pi/2, pi/2\].
- [vatan2f](vatan2f%28____%29.md): For each vector element, calculates the arctangent of `arg2`/`arg1` in the interval \[-pi,pi\] using the sign of both arguments to determine the quadrant of the computed value.
- [vvcbrt](vvcbrt%28______%29.md): Calculates the cube root for each element of a vector.
- [vvcbrtf](vvcbrtf%28______%29.md): Calculates the cube root for each element of a vector.
