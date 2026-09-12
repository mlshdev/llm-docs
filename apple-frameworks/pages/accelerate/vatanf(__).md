> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vatanf(_:)](https://developer.apple.com/documentation/accelerate/vatanf(_:))

# vatanf(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

For each vector element, calculates the arctangent.  Results are in the interval \[-pi/2, pi/2\].

## Declaration

```swift
func vatanf(_: vFloat) -> vFloat
```

## See Also

### Trigonometric Functions (from vfp.h)

- [vsinf(\_:)](vsinf%28__%29.md): For each vector element, calculates the sine.
- [vcosf(\_:)](vcosf%28__%29.md): For each vector element, calculates the cosine.
- [vsincosf(\_:\_:)](vsincosf%28____%29.md): Simultaneously computes sine and cosine of values in a vector.
- [vtanf(\_:)](vtanf%28__%29.md): For each vector element, calculates the tangent.
- [vasinf(\_:)](vasinf%28__%29.md): For each vector element, calculates the arcsine. Results are in the interval \[-pi/2, pi/2\].
- [vacosf(\_:)](vacosf%28__%29.md): For each vector element, calculates the arccosine. Results are in the interval \[0, pi\].
- [vatan2f(\_:\_:)](vatan2f%28____%29.md): For each vector element, calculates the arctangent of `arg2`/`arg1` in the interval \[-pi,pi\] using the sign of both arguments to determine the quadrant of the computed value.
- [vvcbrt(\_:\_:\_:)](vvcbrt%28______%29.md): Calculates the cube root for each element of a vector.
- [vvcbrtf(\_:\_:\_:)](vvcbrtf%28______%29.md): Calculates the cube root for each element of a vector.

# vatanf (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

For each vector element, calculates the arctangent.  Results are in the interval \[-pi/2, pi/2\].

## Declaration

```objectivec
extern vFloat vatanf(vFloat );
```

## See Also

### Trigonometric Functions (from vfp.h)

- [vsinf](vsinf%28__%29.md): For each vector element, calculates the sine.
- [vcosf](vcosf%28__%29.md): For each vector element, calculates the cosine.
- [vsincosf](vsincosf%28____%29.md): Simultaneously computes sine and cosine of values in a vector.
- [vtanf](vtanf%28__%29.md): For each vector element, calculates the tangent.
- [vasinf](vasinf%28__%29.md): For each vector element, calculates the arcsine. Results are in the interval \[-pi/2, pi/2\].
- [vacosf](vacosf%28__%29.md): For each vector element, calculates the arccosine. Results are in the interval \[0, pi\].
- [vatan2f](vatan2f%28____%29.md): For each vector element, calculates the arctangent of `arg2`/`arg1` in the interval \[-pi,pi\] using the sign of both arguments to determine the quadrant of the computed value.
- [vvcbrt](vvcbrt%28______%29.md): Calculates the cube root for each element of a vector.
- [vvcbrtf](vvcbrtf%28______%29.md): Calculates the cube root for each element of a vector.
