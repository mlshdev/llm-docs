> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vlog10f(_:)](https://developer.apple.com/documentation/accelerate/vlog10f(_:))

# vlog10f(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Computes the base-10 logarithm of values in a vector.

## Declaration

```swift
func vlog10f(_: vFloat) -> vFloat
```

<a id="return-value"></a>

## Return Value

Returns a vector of floating point values, each of which is the base-10 logarithm of the corresponding value in the source vector.

<a id="Parameters"></a>

### Parameters:

- **X**: The source vector.

## See Also

### Exponential and Logarithmic Functions (from vfp.h)

- [vexpf(\_:)](vexpf%28__%29.md): For each vector element, calculates the exponential of X.
- [vexp2f(\_:)](vexp2f%28__%29.md)
- [vexpm1f(\_:)](vexpm1f%28__%29.md): For each vector element, calculates ExpM1(x) = Exp(x) - 1. But, for small enough arguments, ExpM1(x) is expected to be more accurate than Exp(x) - 1.
- [vlogf(\_:)](vlogf%28__%29.md): For each vector element, calculates the natural logarithm of `X`.
- [vlog1pf(\_:)](vlog1pf%28__%29.md): For each vector element, calculates Log1P = Log(1 + x). But, for small enough arguments, Log1P is expected to be more accurate than Log(1 + x).
- [vlogbf(\_:)](vlogbf%28__%29.md): For each vector element, extracts the exponent of `X`, as a signed integral value. A subnormal argument is treated as though it were first normalized. Thus: 1 \<= x \* 2^(-logb(x)) \< 2.
- [vlog2f(\_:)](vlog2f%28__%29.md)
- [vvpows(\_:\_:\_:\_:)](vvpows%28________%29.md): Calculates the cube root for each element of a vector.
- [vvpowsf(\_:\_:\_:\_:)](vvpowsf%28________%29.md): Calculates, element-wise, x\*\*y for a vector x and a scalar y.
- [vscalbf(\_:\_:)](vscalbf%28____%29.md): For each vector element, calculates x \* 2^n efficiently. This is not normally done by computing 2^n explicitly.

# vlog10f (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Computes the base-10 logarithm of values in a vector.

## Declaration

```objectivec
extern vFloat vlog10f(vFloat );
```

<a id="return-value"></a>

## Return Value

Returns a vector of floating point values, each of which is the base-10 logarithm of the corresponding value in the source vector.

<a id="Parameters"></a>

### Parameters:

- **X**: The source vector.

## See Also

### Exponential and Logarithmic Functions (from vfp.h)

- [vexpf](vexpf%28__%29.md): For each vector element, calculates the exponential of X.
- [vexp2f](vexp2f%28__%29.md)
- [vexpm1f](vexpm1f%28__%29.md): For each vector element, calculates ExpM1(x) = Exp(x) - 1. But, for small enough arguments, ExpM1(x) is expected to be more accurate than Exp(x) - 1.
- [vlogf](vlogf%28__%29.md): For each vector element, calculates the natural logarithm of `X`.
- [vlog1pf](vlog1pf%28__%29.md): For each vector element, calculates Log1P = Log(1 + x). But, for small enough arguments, Log1P is expected to be more accurate than Log(1 + x).
- [vlogbf](vlogbf%28__%29.md): For each vector element, extracts the exponent of `X`, as a signed integral value. A subnormal argument is treated as though it were first normalized. Thus: 1 \<= x \* 2^(-logb(x)) \< 2.
- [vlog2f](vlog2f%28__%29.md)
- [vvpows](vvpows%28________%29.md): Calculates the cube root for each element of a vector.
- [vvpowsf](vvpowsf%28________%29.md): Calculates, element-wise, x\*\*y for a vector x and a scalar y.
- [vscalbf](vscalbf%28____%29.md): For each vector element, calculates x \* 2^n efficiently. This is not normally done by computing 2^n explicitly.
