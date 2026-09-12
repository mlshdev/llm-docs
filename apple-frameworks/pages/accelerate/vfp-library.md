> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vfp-library](https://developer.apple.com/documentation/accelerate/vfp-library)

# vfp (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform floating-point arithmetic, transcendental, and trigonometric functions on 128-bit vectors.

<a id="overview"></a>

## Overview

vfp.h declares a set of floating-point arithmetic, transcendental and trigonometric functions, on 128-bit vectors, using the floating-point types from vecLibTypes.h.

These functions are named with their customary mathematical names, prefixed with the letter “v”, and all except `vtablelookup()` have the suffix “f” to indicate that they work with single-precision floating-point data. For example, `vcosf` is the single-precision cosine function.

## Topics

### Floating-Point Arithmetic and Auxiliary Functions (from vfp.h)

- [vceilf(\_:)](vceilf%28__%29.md): Computes the ceiling of values in a vector of floating-point values.
- [vcopysignf(\_:\_:)](vcopysignf%28____%29.md): For each vector element, produces a value with the magnitude of `arg2` and sign `arg1`. Note that the order of the arguments matches the recommendation of the IEEE 754 floating-point standard, which is opposite from the SANE copysign function.
- [vdivf(\_:\_:)](vdivf%28____%29.md): For each vector element, calculates `A`/`B`.
- [vfabf(\_:)](vfabf%28__%29.md): Deprecated. For each vector element, calculates the absolute value of `v`.
- [vfabsf(\_:)](vfabsf%28__%29.md)
- [vfloorf(\_:)](vfloorf%28__%29.md): Computes the floor of values in a vector of floating-point values.
- [vintf(\_:)](vintf%28__%29.md): Deprecated. Truncates the decimal portion of a vector of floating-point values.
- [vnintf(\_:)](vnintf%28__%29.md): Rounds to the nearest integer (nearest even for ties).
- [vnextafterf(\_:\_:)](vnextafterf%28____%29.md): For each vector element, calculates the next representable value after `x` in the direction of `y`. If `x` is equal to `y`, then `y` is returned.
- [vrecf(\_:)](vrecf%28__%29.md): Computes the reciprocal of values in a vector.
- [vrsqrtf(\_:)](vrsqrtf%28__%29.md): For each vector element, calculates the inverse of the square root of `X`.
- [vsqrtf(\_:)](vsqrtf%28__%29.md): For each vector element, calculates the square root of `X`.
- [vtablelookup(\_:\_:)](vtablelookup%28____%29.md): For each vector element of `Index_Vect`, returns the corresponding value from `Table`.
- [vtruncf(\_:)](vtruncf%28__%29.md)

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
- [vvpowsf(\_:\_:\_:\_:)](vvpowsf%28________%29.md): Calculates, element-wise, x\*\*y for a vector x and a scalar y.
- [vscalbf(\_:\_:)](vscalbf%28____%29.md): For each vector element, calculates x \* 2^n efficiently. This is not normally done by computing 2^n explicitly.

### Trigonometric Functions (from vfp.h)

- [vsinf(\_:)](vsinf%28__%29.md): For each vector element, calculates the sine.
- [vcosf(\_:)](vcosf%28__%29.md): For each vector element, calculates the cosine.
- [vsincosf(\_:\_:)](vsincosf%28____%29.md): Simultaneously computes sine and cosine of values in a vector.
- [vtanf(\_:)](vtanf%28__%29.md): For each vector element, calculates the tangent.
- [vasinf(\_:)](vasinf%28__%29.md): For each vector element, calculates the arcsine. Results are in the interval \[-pi/2, pi/2\].
- [vacosf(\_:)](vacosf%28__%29.md): For each vector element, calculates the arccosine. Results are in the interval \[0, pi\].
- [vatanf(\_:)](vatanf%28__%29.md): For each vector element, calculates the arctangent. Results are in the interval \[-pi/2, pi/2\].
- [vatan2f(\_:\_:)](vatan2f%28____%29.md): For each vector element, calculates the arctangent of `arg2`/`arg1` in the interval \[-pi,pi\] using the sign of both arguments to determine the quadrant of the computed value.
- [vvcbrt(\_:\_:\_:)](vvcbrt%28______%29.md): Calculates the cube root for each element of a vector.
- [vvcbrtf(\_:\_:\_:)](vvcbrtf%28______%29.md): Calculates the cube root for each element of a vector.

### Hyperbolic Functions (from vfp.h)

- [vsinhf(\_:)](vsinhf%28__%29.md): For each vector element, calculates the hyperbolic sine of `X`.
- [vcoshf(\_:)](vcoshf%28__%29.md): For each vector element, calculates the hyperbolic cosine of `X`.
- [vtanhf(\_:)](vtanhf%28__%29.md): For each vector element, calculates the hyperbolic tangent of `X`.
- [vasinhf(\_:)](vasinhf%28__%29.md): For each vector element, calculates the inverse hyperbolic sine of `X`.
- [vacoshf(\_:)](vacoshf%28__%29.md): For each vector element, calculates the inverse hyperbolic cosine of `X`.
- [vatanhf(\_:)](vatanhf%28__%29.md): For each vector element, calculates the inverse hyperbolic tangent of `X`.

### Power Functions (from vfp.h)

- [vipowf(\_:\_:)](vipowf%28____%29.md): For each vector element, calculates `X` to the integer power of `Y`.
- [vpowf(\_:\_:)](vpowf%28____%29.md): For each vector element, calculates `X` to the floating-point power of `Y`. The result is more accurate than using exp(log(`X`)\*`Y`).

### Remainder Functions (from vfp.h)

- [vfmodf(\_:\_:)](vfmodf%28____%29.md): For each vector element, calculates `X` modulo `Y`.
- [vremainderf(\_:\_:)](vremainderf%28____%29.md): For each vector element, calculates the remainder of `X`/`Y`, according to the IEEE 754 floating-point standard.
- [vremquof(\_:\_:\_:)](vremquof%28______%29.md): For each vector element, calculates the remainder of `X`/`Y`, according to the SANE standard. It stores into `QUO` the 7 low-order bits of the integer quotient, such that -127 \<= `QUO` \<= 127.

### Inquiry Functions (from vfp.h)

- [vclassifyf(\_:)](vclassifyf%28__%29.md): For each vector element, returns the class of the argument (one of the FP\_ … constants defined in math.h).
- [vsignbitf(\_:)](vsignbitf%28__%29.md): For each vector element, returns a non-zero value if and only if the sign of `arg` is negative. This includes NaNs, infinities and zeros.

# vfp (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform floating-point arithmetic, transcendental, and trigonometric functions on 128-bit vectors.

<a id="overview"></a>

## Overview

vfp.h declares a set of floating-point arithmetic, transcendental and trigonometric functions, on 128-bit vectors, using the floating-point types from vecLibTypes.h.

These functions are named with their customary mathematical names, prefixed with the letter “v”, and all except `vtablelookup()` have the suffix “f” to indicate that they work with single-precision floating-point data. For example, `vcosf` is the single-precision cosine function.

## Topics

### Floating-Point Arithmetic and Auxiliary Functions (from vfp.h)

- [vceilf](vceilf%28__%29.md): Computes the ceiling of values in a vector of floating-point values.
- [vcopysignf](vcopysignf%28____%29.md): For each vector element, produces a value with the magnitude of `arg2` and sign `arg1`. Note that the order of the arguments matches the recommendation of the IEEE 754 floating-point standard, which is opposite from the SANE copysign function.
- [vdivf](vdivf%28____%29.md): For each vector element, calculates `A`/`B`.
- [vfabf](vfabf%28__%29.md): Deprecated. For each vector element, calculates the absolute value of `v`.
- [vfabsf](vfabsf%28__%29.md)
- [vfloorf](vfloorf%28__%29.md): Computes the floor of values in a vector of floating-point values.
- [vintf](vintf%28__%29.md): Deprecated. Truncates the decimal portion of a vector of floating-point values.
- [vnintf](vnintf%28__%29.md): Rounds to the nearest integer (nearest even for ties).
- [vnextafterf](vnextafterf%28____%29.md): For each vector element, calculates the next representable value after `x` in the direction of `y`. If `x` is equal to `y`, then `y` is returned.
- [vrecf](vrecf%28__%29.md): Computes the reciprocal of values in a vector.
- [vrsqrtf](vrsqrtf%28__%29.md): For each vector element, calculates the inverse of the square root of `X`.
- [vsqrtf](vsqrtf%28__%29.md): For each vector element, calculates the square root of `X`.
- [vtablelookup](vtablelookup%28____%29.md): For each vector element of `Index_Vect`, returns the corresponding value from `Table`.
- [vtruncf](vtruncf%28__%29.md)

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
- [vvpowsf](vvpowsf%28________%29.md): Calculates, element-wise, x\*\*y for a vector x and a scalar y.
- [vscalbf](vscalbf%28____%29.md): For each vector element, calculates x \* 2^n efficiently. This is not normally done by computing 2^n explicitly.

### Trigonometric Functions (from vfp.h)

- [vsinf](vsinf%28__%29.md): For each vector element, calculates the sine.
- [vcosf](vcosf%28__%29.md): For each vector element, calculates the cosine.
- [vsincosf](vsincosf%28____%29.md): Simultaneously computes sine and cosine of values in a vector.
- [vtanf](vtanf%28__%29.md): For each vector element, calculates the tangent.
- [vasinf](vasinf%28__%29.md): For each vector element, calculates the arcsine. Results are in the interval \[-pi/2, pi/2\].
- [vacosf](vacosf%28__%29.md): For each vector element, calculates the arccosine. Results are in the interval \[0, pi\].
- [vatanf](vatanf%28__%29.md): For each vector element, calculates the arctangent. Results are in the interval \[-pi/2, pi/2\].
- [vatan2f](vatan2f%28____%29.md): For each vector element, calculates the arctangent of `arg2`/`arg1` in the interval \[-pi,pi\] using the sign of both arguments to determine the quadrant of the computed value.
- [vvcbrt](vvcbrt%28______%29.md): Calculates the cube root for each element of a vector.
- [vvcbrtf](vvcbrtf%28______%29.md): Calculates the cube root for each element of a vector.

### Hyperbolic Functions (from vfp.h)

- [vsinhf](vsinhf%28__%29.md): For each vector element, calculates the hyperbolic sine of `X`.
- [vcoshf](vcoshf%28__%29.md): For each vector element, calculates the hyperbolic cosine of `X`.
- [vtanhf](vtanhf%28__%29.md): For each vector element, calculates the hyperbolic tangent of `X`.
- [vasinhf](vasinhf%28__%29.md): For each vector element, calculates the inverse hyperbolic sine of `X`.
- [vacoshf](vacoshf%28__%29.md): For each vector element, calculates the inverse hyperbolic cosine of `X`.
- [vatanhf](vatanhf%28__%29.md): For each vector element, calculates the inverse hyperbolic tangent of `X`.

### Power Functions (from vfp.h)

- [vipowf](vipowf%28____%29.md): For each vector element, calculates `X` to the integer power of `Y`.
- [vpowf](vpowf%28____%29.md): For each vector element, calculates `X` to the floating-point power of `Y`. The result is more accurate than using exp(log(`X`)\*`Y`).

### Remainder Functions (from vfp.h)

- [vfmodf](vfmodf%28____%29.md): For each vector element, calculates `X` modulo `Y`.
- [vremainderf](vremainderf%28____%29.md): For each vector element, calculates the remainder of `X`/`Y`, according to the IEEE 754 floating-point standard.
- [vremquof](vremquof%28______%29.md): For each vector element, calculates the remainder of `X`/`Y`, according to the SANE standard. It stores into `QUO` the 7 low-order bits of the integer quotient, such that -127 \<= `QUO` \<= 127.

### Inquiry Functions (from vfp.h)

- [vclassifyf](vclassifyf%28__%29.md): For each vector element, returns the class of the argument (one of the FP\_ … constants defined in math.h).
- [vsignbitf](vsignbitf%28__%29.md): For each vector element, returns a non-zero value if and only if the sign of `arg` is negative. This includes NaNs, infinities and zeros.
