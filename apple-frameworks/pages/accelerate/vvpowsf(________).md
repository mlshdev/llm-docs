> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vvpowsf(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vvpowsf(_:_:_:_:))

# vvpowsf(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates, element-wise, x\*\*y for a vector x and a scalar y.

## Declaration

```swift
func vvpowsf(_: UnsafeMutablePointer<Float>, _: UnsafePointer<Float>, _: UnsafePointer<Float>, _: UnsafePointer<Int32>)
```

<a id="Parameters"></a>

### Parameters

- **z**: (output) Output vector of size `*n`. `z[i]` is set to `pow(x[i], y)`.
- **y**: (input)  Input scalar, exponent in calculation.
- **x**: (input)  Input vector of size `*n`, base in calculation.
- **n**: (input)  The number of elements in the vectors `x`, `y` and `z`

## See Also

### Exponential and Logarithmic Functions (from vfp.h)

- [vexpf(\_:)](vexpf%28__%29.md): For each vector element, calculates the exponential of X.
- [vexp2f(\_:)](vexp2f%28__%29.md)
- [vexpm1f(\_:)](vexpm1f%28__%29.md): For each vector element, calculates ExpM1(x) = Exp(x) - 1. But, for small enough arguments, ExpM1(x) is expected to be more accurate than Exp(x) - 1.
- [vlogf(\_:)](vlogf%28__%29.md): For each vector element, calculates the natural logarithm of `X`.
- [vlog1pf(\_:)](vlog1pf%28__%29.md): For each vector element, calculates Log1P = Log(1 + x). But, for small enough arguments, Log1P is expected to be more accurate than Log(1 + x).
- [vlog10f(\_:)](vlog10f%28__%29.md): Computes the base-10 logarithm of values in a vector.
- [vlogbf(\_:)](vlogbf%28__%29.md): For each vector element, extracts the exponent of `X`, as a signed integral value. A subnormal argument is treated as though it were first normalized. Thus: 1 \<= x \* 2^(-logb(x)) \< 2.
- [vlog2f(\_:)](vlog2f%28__%29.md)
- [vvpows(\_:\_:\_:\_:)](vvpows%28________%29.md): Calculates the cube root for each element of a vector.
- [vscalbf(\_:\_:)](vscalbf%28____%29.md): For each vector element, calculates x \* 2^n efficiently. This is not normally done by computing 2^n explicitly.

# vvpowsf (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates, element-wise, x\*\*y for a vector x and a scalar y.

## Declaration

```objectivec
void vvpowsf(float *, const float *, const float *, const int *);
```

<a id="Parameters"></a>

### Parameters

- **z**: (output) Output vector of size `*n`. `z[i]` is set to `pow(x[i], y)`.
- **y**: (input)  Input scalar, exponent in calculation.
- **x**: (input)  Input vector of size `*n`, base in calculation.
- **n**: (input)  The number of elements in the vectors `x`, `y` and `z`

## See Also

### Exponential and Logarithmic Functions (from vfp.h)

- [vexpf](vexpf%28__%29.md): For each vector element, calculates the exponential of X.
- [vexp2f](vexp2f%28__%29.md)
- [vexpm1f](vexpm1f%28__%29.md): For each vector element, calculates ExpM1(x) = Exp(x) - 1. But, for small enough arguments, ExpM1(x) is expected to be more accurate than Exp(x) - 1.
- [vlogf](vlogf%28__%29.md): For each vector element, calculates the natural logarithm of `X`.
- [vlog1pf](vlog1pf%28__%29.md): For each vector element, calculates Log1P = Log(1 + x). But, for small enough arguments, Log1P is expected to be more accurate than Log(1 + x).
- [vlog10f](vlog10f%28__%29.md): Computes the base-10 logarithm of values in a vector.
- [vlogbf](vlogbf%28__%29.md): For each vector element, extracts the exponent of `X`, as a signed integral value. A subnormal argument is treated as though it were first normalized. Thus: 1 \<= x \* 2^(-logb(x)) \< 2.
- [vlog2f](vlog2f%28__%29.md)
- [vvpows](vvpows%28________%29.md): Calculates the cube root for each element of a vector.
- [vscalbf](vscalbf%28____%29.md): For each vector element, calculates x \* 2^n efficiently. This is not normally done by computing 2^n explicitly.
