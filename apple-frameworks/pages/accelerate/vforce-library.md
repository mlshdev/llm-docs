> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vforce-library](https://developer.apple.com/documentation/accelerate/vforce-library)

# vForce (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform transcendental and trigonometric functions on vectors of any length.

<a id="overview"></a>

## Overview

The vForce library provides a range of trigonometric and transcendental functions that work over large collections of single- and double-precision values. The collections can be of any length, and vForce supplies vectorized functions for the current architecture.

The functions declared in the vForce library have the customary mathematical names, but with the prefix `vv`, for example, [vvsqrtf(\_:\_:\_:)](vvsqrtf%28______%29.md). Each mathematical function is available in two variants: one for single-precision data and one for double-precision data. The single-precision forms have the suffix `f`, whereas the double-precision forms have no suffix. For example, [vvcosf(\_:\_:\_:)](vvcosf%28______%29.md) is the single-precision cosine function, and [vvcos(\_:\_:\_:)](vvcos%28______%29.md) is the double-precision variant.

All of the vForce library functions follow a common format:

- The return type is `void`.
- The first parameter points to an array to hold the results. The only exceptions are [vvsincosf(\_:\_:\_:\_:)](vvsincosf%28________%29.md) and [vvsincos(\_:\_:\_:\_:)](vvsincos%28________%29.md), which have two result arrays that the first two parameters point to.
- One or more parameters point to operand arrays that are the same length as the result array.
- The last parameter is the array length.

> **Note**

>  Unless otherwise mentioned, vForce functions work in-place. That is, the input may exactly equal the output.

<a id="Using-vForce"></a>

### Using vForce

The vForce library provides a high-performance alternative to `for` loops and `map(_:)` when applying operations on arrays of floating-point values.

For example, given an arbitrarily sized array, `x`, that contains single-precision values, the following code uses `map(_:)` to create a second array, `y`. On return, `y` contains the square root of each array element.

```swift
let n = 10_000

let x = (0..<n).map { _ in
    Float.random(in: 1 ... 10_000)
}

let y = x.map {
    return sqrt($0)
}
```

The equivalent functionality implemented in vForce runs significantly faster:

```swift
let y = [Float](unsafeUninitializedCapacity: n) { buffer, initializedCount in
    vForce.sqrt(x,
                result: &buffer)
    
    initializedCount = n
}
```

## Topics

### Swift Overlay

- [vForce](vforce.md): An enumeration that acts as a namespace for Swift overlays to vForce.

### Array-Oriented Arithmetic and Auxiliary Functions

- [ceil(\_:)](vforce/ceil%28__%29-9dsdt.md): Returns the ceiling of each element in a vector of double-precision values.
- [ceil(\_:)](vforce/ceil%28__%29-57grr.md): Returns the ceiling of each element in a vector of single-precision values.
- [ceil(\_:result:)](vforce/ceil%28__result_%29-4wev4.md): Calculates the ceiling of each element in a vector of double-precision values.
- [ceil(\_:result:)](vforce/ceil%28__result_%29-6zm3u.md): Calculates the ceiling of each element in a vector of single-precision values.
- [copysign(magnitudes:signs:)](vforce/copysign%28magnitudes_signs_%29-s0r3.md): Returns each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.
- [copysign(magnitudes:signs:)](vforce/copysign%28magnitudes_signs_%29-3jhf0.md): Returns each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.
- [copysign(magnitudes:signs:result:)](vforce/copysign%28magnitudes_signs_result_%29-3zoya.md): Calculates each double-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.
- [copysign(magnitudes:signs:result:)](vforce/copysign%28magnitudes_signs_result_%29-5umya.md): Calculates each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.
- [floor(\_:)](vforce/floor%28__%29-64hyu.md): Returns the floor of each element in a vector of double-precision values.
- [floor(\_:)](vforce/floor%28__%29-5awna.md): Returns the floor of each element in a vector of single-precision values.
- [floor(\_:result:)](vforce/floor%28__result_%29-61veb.md): Calculates the floor of each element in a vector of double-precision values.
- [floor(\_:result:)](vforce/floor%28__result_%29-4mf4q.md): Calculates the floor of each element in a vector of single-precision values.
- [nearestInteger(\_:)](vforce/nearestinteger%28__%29-5mppu.md): Returns the nearest integer to each element in a vector of double-precision values.
- [nearestInteger(\_:)](vforce/nearestinteger%28__%29-386dx.md): Returns the nearest integer to each element in a vector of single-precision values.
- [nearestInteger(\_:result:)](vforce/nearestinteger%28__result_%29-bbtt.md): Calculates the nearest integer to each element in a vector of double-precision values.
- [nearestInteger(\_:result:)](vforce/nearestinteger%28__result_%29-1izut.md): Calculates the nearest integer to each element in a vector of double-precision values.
- [reciprocal(\_:)](vforce/reciprocal%28__%29-555of.md): Returns the reciprocal of each element in a vector of double-precision values.
- [reciprocal(\_:)](vforce/reciprocal%28__%29-8lozf.md): Returns the reciprocal of each element in a vector of single-precision values.
- [reciprocal(\_:result:)](vforce/reciprocal%28__result_%29-pvu0.md): Calculates the reciprocal of each element in a vector of double-precision values.
- [reciprocal(\_:result:)](vforce/reciprocal%28__result_%29-7hu7a.md): Calculates the reciprocal of each element in a vector of single-precision values.
- [remainder(dividends:divisors:)](vforce/remainder%28dividends_divisors_%29-5rcri.md): Returns the remainder of the double-precision elements in `dividends` divided by the elements in `divisors`, using truncating division.
- [remainder(dividends:divisors:)](vforce/remainder%28dividends_divisors_%29-j4a5.md): Returns the remainder of the single-precision elements in `dividends` divided by the elements in `divisors`, using truncating division.
- [remainder(dividends:divisors:result:)](vforce/remainder%28dividends_divisors_result_%29-bj3f.md): Calculates the remainder of the double-precision elements in `dividends` divided by the elements in `divisors`, using truncating division.
- [remainder(dividends:divisors:result:)](vforce/remainder%28dividends_divisors_result_%29-31qe5.md): Calculates the remainder of the single-precision elements in `dividends` divided by the elements in `divisors`, using truncating division.
- [rsqrt(\_:)](vforce/rsqrt%28__%29-9gm1h.md): Returns the reciprocal square root of each element in a vector of double-precision values.
- [rsqrt(\_:)](vforce/rsqrt%28__%29-2xjyq.md): Returns the reciprocal square root of each element in a vector of single-precision values.
- [rsqrt(\_:result:)](vforce/rsqrt%28__result_%29-9vniv.md): Calculates the reciprocal square root of each element in a vector of double-precision values.
- [rsqrt(\_:result:)](vforce/rsqrt%28__result_%29-6o0ky.md): Calculates the reciprocal square root of each element in a vector of single-precision values.
- [sqrt(\_:)](vforce/sqrt%28__%29-7ze6m.md): Returns the square root of each element in a vector of double-precision values.
- [sqrt(\_:)](vforce/sqrt%28__%29-8wla9.md): Returns the square root each element in a vector of single-precision values.
- [sqrt(\_:result:)](vforce/sqrt%28__result_%29-2ixfw.md): Calculates the square root of each element in a vector of double-precision values.
- [sqrt(\_:result:)](vforce/sqrt%28__result_%29-63m91.md): Calculates the square root of each element in a vector of single-precision values.
- [trunc(\_:)](vforce/trunc%28__%29-11ss3.md): Returns the integer truncation of each element in a vector of double-precision values.
- [trunc(\_:)](vforce/trunc%28__%29-5wx8z.md): Returns the integer truncation of each element in a vector of single-precision values.
- [trunc(\_:result:)](vforce/trunc%28__result_%29-8luud.md): Calculates the integer truncation of each element in a vector of double-precision values.
- [trunc(\_:result:)](vforce/trunc%28__result_%29-4xeiu.md): Calculates the integer truncation of each element in a vector of single-precision values.
- [truncatingRemainder(dividends:divisors:)](vforce/truncatingremainder%28dividends_divisors_%29-11bh4.md): Returns the remainder of the double-precision elements in `dividends` divided by the elements in `divisors`, using truncating division.
- [truncatingRemainder(dividends:divisors:)](vforce/truncatingremainder%28dividends_divisors_%29-9ofow.md): Returns the remainder of the single-precision elements in `dividends` divided by the elements in `divisors`, using truncating division.
- [truncatingRemainder(dividends:divisors:result:)](vforce/truncatingremainder%28dividends_divisors_result_%29-6forr.md): Calculates the remainder of the double-precision elements in `dividends` divided by the elements in `divisors`, using truncating division.
- [truncatingRemainder(dividends:divisors:result:)](vforce/truncatingremainder%28dividends_divisors_result_%29-23mq2.md): Calculates the remainder of the single-precision elements in `dividends` divided by the elements in `divisors`, using truncating division.
- [vvceil(\_:\_:\_:)](vvceil%28______%29.md): Calculates the ceiling of each element in an array of double-precision values.
- [vvceilf(\_:\_:\_:)](vvceilf%28______%29.md): Calculates the ceiling of each element in an array of single-precision values.
- [vvfloor(\_:\_:\_:)](vvfloor%28______%29.md): Calculates the floor of each element in an array of double-precision values.
- [vvfloorf(\_:\_:\_:)](vvfloorf%28______%29.md): Calculates the floor of each element in an array of single-precision values.
- [vvcopysign(\_:\_:\_:\_:)](vvcopysign%28________%29.md): Copies an array, setting the sign of each element based on a second array of double-precision values.
- [vvcopysignf(\_:\_:\_:\_:)](vvcopysignf%28________%29.md): Copies an array, setting the sign of each element based on a second array of single-precision values.
- [vvdiv(\_:\_:\_:\_:)](vvdiv%28________%29.md): Divides each element in an array by the corresponding value in a second array of double-precision values.
- [vvdivf(\_:\_:\_:\_:)](vvdivf%28________%29.md): Divides each element in an array by the corresponding value in a second array of single-precision values.
- [vvfabs(\_:\_:\_:)](vvfabs%28______%29.md): Calculates the absolute value for each element in an array of double-precision values.
- [vvfabsf(\_:\_:\_:)](vvfabsf%28______%29.md): Calculates the absolute value for each element in an array of single-precision values.
- [vvfmod(\_:\_:\_:\_:)](vvfmod%28________%29.md): Calculates the modulus after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [vvfmodf(\_:\_:\_:\_:)](vvfmodf%28________%29.md): Calculates the modulus after dividing each element in an array by the corresponding element in a second array of single-precision values.
- [vvremainder(\_:\_:\_:\_:)](vvremainder%28________%29.md): Calculates the remainder after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [vvremainderf(\_:\_:\_:\_:)](vvremainderf%28________%29.md): Calculates the remainder after dividing each element in an array by the corresponding element in a second array of single-precision values.
- [vvint(\_:\_:\_:)](vvint%28______%29.md): Calculates the integer truncation for each element in an array of double-precision values.
- [vvintf(\_:\_:\_:)](vvintf%28______%29.md): Calculates the integer truncation for each element in an array of single-precision values.
- [vvnint(\_:\_:\_:)](vvnint%28______%29.md): Calculates the nearest integer for each element in an array of double-precision values.
- [vvnintf(\_:\_:\_:)](vvnintf%28______%29.md): Calculates the nearest integer for each element in an array of single-precision values.
- [vvrsqrt(\_:\_:\_:)](vvrsqrt%28______%29.md): Calculates the reciprocal square root of each element in an array of double-precision values.
- [vvrsqrtf(\_:\_:\_:)](vvrsqrtf%28______%29.md): Calculates the reciprocal square root of each element in an array of single-precision values.
- [vvsqrt(\_:\_:\_:)](vvsqrt%28______%29.md): Calculates the square root of each element in an array of double-precision values.
- [vvsqrtf(\_:\_:\_:)](vvsqrtf%28______%29.md): Calculates the square root of each element in an array of single-precision values.
- [vvrec(\_:\_:\_:)](vvrec%28______%29.md): Calculates the reciprocal of each element in an array of double-precision values.
- [vvrecf(\_:\_:\_:)](vvrecf%28______%29.md): Calculates the reciprocal of each element in an array of single-precision values.
- [vvnextafter(\_:\_:\_:\_:)](vvnextafter%28________%29.md): Calculates the next machine-representable value for each element in an array of double-precision values.
- [vvnextafterf(\_:\_:\_:\_:)](vvnextafterf%28________%29.md): Calculates the next machine-representable value for each element in an array of single-precision values.

### Array-Oriented Exponential and Logarithmic Functions

- [exp(\_:)](vforce/exp%28__%29-76nrd.md): Returns the *e*, raised to the power of each element in a vector of double-precision values.
- [exp(\_:)](vforce/exp%28__%29-5iaun.md): Returns the *e*, raised to the power of each element in a vector of single-precision values.
- [exp(\_:result:)](vforce/exp%28__result_%29-34nxw.md): Calculates the *e*, raised to the power of each element in a vector of double-precision values.
- [exp(\_:result:)](vforce/exp%28__result_%29-4k85n.md): Calculates the *e*, raised to the power of each element in a vector of single-precision values.
- [exp2(\_:)](vforce/exp2%28__%29-2m5q.md): Returns the 2, raised to the power of each element in a vector of double-precision values.
- [exp2(\_:)](vforce/exp2%28__%29-4mm9y.md): Returns the 2, raised to the power of each element in a vector of single-precision values.
- [exp2(\_:result:)](vforce/exp2%28__result_%29-6ru6m.md): Calculates the 2, raised to the power of each element in a vector of double-precision values.
- [exp2(\_:result:)](vforce/exp2%28__result_%29-8m564.md): Calculates the 2, raised to the power of each element in a vector of single-precision values.
- [expm1(\_:)](vforce/expm1%28__%29-xkzx.md): Returns the *eˣ-1* for each element in a vector of double-precision values.
- [expm1(\_:)](vforce/expm1%28__%29-mfq5.md): Returns the *eˣ-1* for each element in a vector of single-precision values.
- [expm1(\_:result:)](vforce/expm1%28__result_%29-4dpl4.md): Calculates the *eˣ-1* for each element in a vector of double-precision values.
- [expm1(\_:result:)](vforce/expm1%28__result_%29-2yhs3.md): Calculates the *eˣ-1* for each element in a vector of single-precision values.
- [log10(\_:)](vforce/log10%28__%29-9wr68.md): Returns the base 10 logarithm of each element in a vector of double-precision values.
- [log(\_:)](vforce/log%28__%29-2gh9a.md): Returns the natural logarithm for each element in a vector of double-precision values.
- [log(\_:)](vforce/log%28__%29-5ffby.md): Returns the natural logarithm for each element in a vector of single-precision values.
- [log(\_:result:)](vforce/log%28__result_%29-84hv7.md): Calculates the natural logarithm for each element in a vector of double-precision values.
- [log(\_:result:)](vforce/log%28__result_%29-4k52e.md): Calculates the natural logarithm for each element in a vector of single-precision values.
- [log1p(\_:)](vforce/log1p%28__%29-5admq.md): Returns *log(1+x)* for each element in a vector of double-precision values.
- [log1p(\_:)](vforce/log1p%28__%29-3wn9e.md): Returns *log(1+x)* for each element in a vector of single-precision values.
- [log1p(\_:result:)](vforce/log1p%28__result_%29-8kk0n.md): Calculates *log(1+x)* for each element in a vector of double-precision values.
- [log1p(\_:result:)](vforce/log1p%28__result_%29-5ckl.md): Calculates *log(1+x)* for each element in a vector of single-precision values.
- [log10(\_:)](vforce/log10%28__%29-81jwh.md): Returns the base 10 logarithm of each element in a vector of single-precision values.
- [log10(\_:result:)](vforce/log10%28__result_%29-3j9cp.md): Calculates the base 10 logarithm of each element in a vector of double-precision values.
- [log10(\_:result:)](vforce/log10%28__result_%29-35727.md): Calculates the base 10 logarithm of each element in a vector of single-precision values.
- [log2(\_:)](vforce/log2%28__%29-2gkui.md): Returns the base 2 logarithm of each element in a vector of double-precision values.
- [log2(\_:)](vforce/log2%28__%29-9b3yo.md): Returns the base 2 logarithm of each element in a vector of single-precision values.
- [log2(\_:result:)](vforce/log2%28__result_%29-5xk1k.md): Calculates the base 2 logarithm of each element in a vector of double-precision values.
- [log2(\_:result:)](vforce/log2%28__result_%29-2i9yi.md): Calculates the base 2 logarithm of each element in a vector of single-precision values.
- [logb(\_:)](vforce/logb%28__%29-6irl7.md): Returns the unbiased exponent of each element in a vector of double-precision values.
- [logb(\_:)](vforce/logb%28__%29-6hwhw.md): Returns the unbiased exponent of each element in a vector of double-precision values.
- [logb(\_:result:)](vforce/logb%28__result_%29-14tuo.md): Calculates the unbiased exponent of each element in a vector of double-precision values.
- [logb(\_:result:)](vforce/logb%28__result_%29-1m3o3.md): Calculates the unbiased exponent of each element in a vector of single-precision values.
- [vvexp(\_:\_:\_:)](vvexp%28______%29.md): Calculates *e* raised to the power of each element in an array of double-precision values.
- [vvexpf(\_:\_:\_:)](vvexpf%28______%29.md): Calculates *e* raised to the power of each element in an array of single-precision values.
- [vvexp2(\_:\_:\_:)](vvexp2%28______%29.md): Calculates 2 raised to the power of each element in an array of double-precision values.
- [vvexp2f(\_:\_:\_:)](vvexp2f%28______%29.md): Calculates 2 raised to the power of each element in an array of single-precision values.
- [vvexpm1(\_:\_:\_:)](vvexpm1%28______%29.md): Calculates *eˣ-1* for each element in an array of double-precision values.
- [vvexpm1f(\_:\_:\_:)](vvexpm1f%28______%29.md): Calculates *eˣ-1* for each element in an array of single-precision values.
- [vvlog(\_:\_:\_:)](vvlog%28______%29.md): Calculates the natural logarithm for each element in an array of double-precision values.
- [vvlogf(\_:\_:\_:)](vvlogf%28______%29.md): Calculates the natural logarithm for each element in an array of single-precision values.
- [vvlog1p(\_:\_:\_:)](vvlog1p%28______%29.md): Calculates *log(1+x)* for each element in an array of double-precision values.
- [vvlog1pf(\_:\_:\_:)](vvlog1pf%28______%29.md): Calculates *log(1+x)* for each element in an array of single-precision values.
- [vvlog2(\_:\_:\_:)](vvlog2%28______%29.md): Calculates the base 2 logarithm of each element in an array of double-precision values.
- [vvlog2f(\_:\_:\_:)](vvlog2f%28______%29.md): Calculates the base 2 logarithm of each element in an array of single-precision values.
- [vvlog10(\_:\_:\_:)](vvlog10%28______%29.md): Calculates the base 10 logarithm of each element in an array of double-precision values.
- [vvlog10f(\_:\_:\_:)](vvlog10f%28______%29.md): Calculates the base 10 logarithm of each element in an array of single-precision values.
- [vvlogb(\_:\_:\_:)](vvlogb%28______%29.md): Calculates the unbiased exponent of each element in an array of double-precision values.
- [vvlogbf(\_:\_:\_:)](vvlogbf%28______%29.md): Calculates the unbiased exponent of each element in an array of single-precision values.

### Array-Oriented Power Functions

- [pow(bases:exponents:)](vforce/pow%28bases_exponents_%29-94dha.md): Returns each double-precision element in the bases vector, raised to the power of the corresponding element in the exponents vector.
- [pow(bases:exponents:)](vforce/pow%28bases_exponents_%29-3gl7v.md): Returns each single-precision element in the bases vector, raised to the power of the corresponding element in the exponents vector.
- [pow(bases:exponents:result:)](vforce/pow%28bases_exponents_result_%29-4bso.md): Calculates each double-precision element in the bases vector, raised to the power of the corresponding element in the exponents vector.
- [pow(bases:exponents:result:)](vforce/pow%28bases_exponents_result_%29-6pffz.md): Calculates each single-precision element in the bases vector, raised to the power of the corresponding element in the exponents vector.
- [vvpow(\_:\_:\_:\_:)](vvpow%28________%29.md): Raises each element in an array to the power of the corresponding element in a second array of double-precision values.
- [vvpowf(\_:\_:\_:\_:)](vvpowf%28________%29.md): Raises each element in an array to the power of the corresponding element in a second array of single-precision values.

### Array-Oriented Trigonometric Functions

- [acos(\_:)](vforce/acos%28__%29-8srk.md): Returns the arccosine of each element in a vector of double-precision values.
- [acos(\_:)](vforce/acos%28__%29-3hl5t.md): Returns the arccosine of each element in a vector of single-precision values.
- [acos(\_:result:)](vforce/acos%28__result_%29-3c9qz.md): Calculates the arccosine of each element in a vector of double-precision values.
- [acos(\_:result:)](vforce/acos%28__result_%29-6rc2f.md): Calculates the arccosine of each element in a vector of single-precision values.
- [asin(\_:)](vforce/asin%28__%29-454ds.md): Returns the arcsine of each element in a vector of double-precision values.
- [asin(\_:)](vforce/asin%28__%29-8vvt1.md): Returns the arcsine of each element in a vector of single-precision values.
- [asin(\_:result:)](vforce/asin%28__result_%29-94jmy.md): Calculates the arcsine of each element in a vector of double-precision values.
- [asin(\_:result:)](vforce/asin%28__result_%29-ooti.md): Calculates the arcsine of each element in a vector of single-precision values.
- [atan(\_:)](vforce/atan%28__%29-1ghr3.md): Returns the arctangent of each element in a vector of double-precision values.
- [atan(\_:)](vforce/atan%28__%29-5ejvk.md): Returns the arctangent of each element in a vector of single-precision values.
- [atan(\_:result:)](vforce/atan%28__result_%29-691jp.md): Calculates the arctangent of each element in a vector of double-precision values.
- [atan(\_:result:)](vforce/atan%28__result_%29-6bb8n.md): Calculates the arctangent of each element in a vector of single-precision values.
- [atan2(x:y:)](vforce/atan2%28x_y_%29-h54u.md): Returns the arctangent of each pair of elements in two vectors of double-precision values.
- [atan2(x:y:)](vforce/atan2%28x_y_%29-3lku3.md): Returns the arctangent of each pair of elements in two vectors of single-precision values.
- [atan2(x:y:result:)](vforce/atan2%28x_y_result_%29-184b6.md): Calculates the arctangent of each pair of elements in two vectors of double-precision values.
- [atan2(x:y:result:)](vforce/atan2%28x_y_result_%29-6j6xb.md): Calculates the arctangent of each pair of elements in two vectors of single-precision values.
- [cos(\_:)](vforce/cos%28__%29-5eeyc.md): Returns the cosine of each element in a vector of double-precision values.
- [cos(\_:)](vforce/cos%28__%29-3q2fu.md): Returns the cosine of each element in a vector of single-precision values.
- [cos(\_:result:)](vforce/cos%28__result_%29-95syy.md): Calculates the cosine of each element in a vector of double-precision values.
- [cos(\_:result:)](vforce/cos%28__result_%29-lrow.md): Calculates the cosine of each element in a vector of single-precision values.
- [cosPi(\_:)](vforce/cospi%28__%29-8ouii.md): Returns the cosine of pi, multiplied by each element in a vector of double-precision values.
- [cosPi(\_:)](vforce/cospi%28__%29-578sc.md): Returns the cosine of pi, multiplied by each element in a vector of single-precision values.
- [cosPi(\_:result:)](vforce/cospi%28__result_%29-4rha2.md): Calculates the cosine of pi, multiplied by each element in a vector of double-precision values.
- [cosPi(\_:result:)](vforce/cospi%28__result_%29-5ubws.md): Calculates the cosine of pi, multiplied by each element in a vector of single-precision values.
- [sin(\_:)](vforce/sin%28__%29-61sn.md): Returns the sine of each element in a vector of double-precision values.
- [sin(\_:)](vforce/sin%28__%29-6o1ao.md): Returns the sine of each element in a vector of single-precision values.
- [sin(\_:result:)](vforce/sin%28__result_%29-6xo5w.md): Calculates the sine of each element in a vector of double-precision values.
- [sin(\_:result:)](vforce/sin%28__result_%29-oida.md): Calculates the sine of each element in a vector of single-precision values.
- [sinPi(\_:)](vforce/sinpi%28__%29-1wh5u.md): Returns the sine of pi, multiplied by each element in a vector of double-precision values.
- [sinPi(\_:)](vforce/sinpi%28__%29-3a7fm.md): Returns the sine of pi, multiplied by each element in a vector of single-precision values.
- [sinPi(\_:result:)](vforce/sinpi%28__result_%29-88a6o.md): Calculates the sine of pi, multiplied by each element in a vector of double-precision values.
- [sinPi(\_:result:)](vforce/sinpi%28__result_%29-9p5xq.md): Calculates the sine of pi, multiplied by each element in a vector of single-precision values.
- [sincos(\_:sinResult:cosResult:)](vforce/sincos%28__sinresult_cosresult_%29-93te.md): Calculates the sine and cosine of each element in a vector of double-precision values.
- [sincos(\_:sinResult:cosResult:)](vforce/sincos%28__sinresult_cosresult_%29-tk1q.md): Calculates the sine and cosine of each element in a vector of double-precision values.
- [tan(\_:)](vforce/tan%28__%29-6n5qw.md): Returns the tangent of each element in a vector of double-precision values.
- [tan(\_:)](vforce/tan%28__%29-3i3c1.md): Returns the tangent of each element in a vector of single-precision values.
- [tan(\_:result:)](vforce/tan%28__result_%29-8bosl.md): Calculates the tangent of each element in a vector of double-precision values.
- [tan(\_:result:)](vforce/tan%28__result_%29-4wevz.md): Calculates the tangent of each element in a vector of single-precision values.
- [tanPi(\_:)](vforce/tanpi%28__%29-9lrix.md): Returns the tangent of pi, multiplied by each element in a vector of double-precision values.
- [tanPi(\_:)](vforce/tanpi%28__%29-4z418.md): Returns the tangent of pi, multiplied by each element in a vector of single-precision values.
- [tanPi(\_:result:)](vforce/tanpi%28__result_%29-9d72p.md): Calculates the tangent of pi, multiplied by each element in a vector of double-precision values.
- [tanPi(\_:result:)](vforce/tanpi%28__result_%29-1gp8g.md): Calculates the tangent of pi, multiplied by each element in a vector of single-precision values.
- [vvsin(\_:\_:\_:)](vvsin%28______%29.md): Calculates the sine of each element in an array of double-precision values.
- [vvsinf(\_:\_:\_:)](vvsinf%28______%29.md): Calculates the sine of each element in an array of single-precision values.
- [vvsinpi(\_:\_:\_:)](vvsinpi%28______%29.md): Calculates the sine of pi multiplied by each element in an array of double-precision values.
- [vvsinpif(\_:\_:\_:)](vvsinpif%28______%29.md): Calculates the sine of pi multiplied by each element in an array of single-precision values.
- [vvcos(\_:\_:\_:)](vvcos%28______%29.md): Calculates the cosine of each element in an array of double-precision values.
- [vvcosf(\_:\_:\_:)](vvcosf%28______%29.md): Calculates the cosine of each element in an array of single-precision values.
- [vvcospi(\_:\_:\_:)](vvcospi%28______%29.md): Calculates the cosine of pi multiplied by each element in an array of double-precision values.
- [vvcospif(\_:\_:\_:)](vvcospif%28______%29.md): Calculates the cosine of pi multiplied by each element in an array of single-precision values.
- [vvcosisin(\_:\_:\_:)](vvcosisin%28______%29.md): Calculates the cosine and sine of each element in an array of double-precision values.
- [vvcosisinf(\_:\_:\_:)](vvcosisinf%28______%29.md): Calculates the cosine and sine of each element in an array of single-precision values.
- [vvsincos(\_:\_:\_:\_:)](vvsincos%28________%29.md): Calculates the cosine and sine of each element in an array of double-precision values.
- [vvsincosf(\_:\_:\_:\_:)](vvsincosf%28________%29.md): Calculates the cosine and sine of each element in an array of single-precision values.
- [vvtan(\_:\_:\_:)](vvtan%28______%29.md): Calculates the tangent of each element in an array of double-precision values.
- [vvtanf(\_:\_:\_:)](vvtanf%28______%29.md): Calculates the tangent of each element in an array of single-precision values.
- [vvtanpi(\_:\_:\_:)](vvtanpi%28______%29.md): Calculates the tangent of pi multiplied by each element in an array of double-precision values.
- [vvtanpif(\_:\_:\_:)](vvtanpif%28______%29.md): Calculates the tangent of pi multiplied by each element in an array of single-precision values.
- [vvasin(\_:\_:\_:)](vvasin%28______%29.md): Calculates the arcsine of each element in an array of double-precision values.
- [vvasinf(\_:\_:\_:)](vvasinf%28______%29.md): Calculates the arcsine of each element in an array of single-precision values.
- [vvacos(\_:\_:\_:)](vvacos%28______%29.md): Calculates the arccosine of each element in an array of double-precision values.
- [vvacosf(\_:\_:\_:)](vvacosf%28______%29.md): Calculates the arccosine of each element in an array of single-precision values.
- [vvatan(\_:\_:\_:)](vvatan%28______%29.md): Calculates the arctangent of each element in an array of double-precision values.
- [vvatanf(\_:\_:\_:)](vvatanf%28______%29.md): Calculates the arctangent of each element in an array of single-precision values.
- [vvatan2(\_:\_:\_:\_:)](vvatan2%28________%29.md): Calculates the arctangent of each pair of elements in two arrays of double-precision values.
- [vvatan2f(\_:\_:\_:\_:)](vvatan2f%28________%29.md): Calculates the arctangent of each pair of elements in two arrays of single-precision values.

### Array-Oriented Hyperbolic Functions

- [acosh(\_:)](vforce/acosh%28__%29-1j3qt.md): Returns the inverse hyperbolic cosine of each element in a vector of double-precision values.
- [acosh(\_:)](vforce/acosh%28__%29-8zjay.md): Returns the inverse hyperbolic cosine of each element in a vector of single-precision values.
- [acosh(\_:result:)](vforce/acosh%28__result_%29-4cip0.md): Calculates the inverse hyperbolic cosine of each element in a vector of double-precision values.
- [acosh(\_:result:)](vforce/acosh%28__result_%29-2r23w.md): Calculates the inverse hyperbolic cosine of each element in a vector of single-precision values.
- [asinh(\_:)](vforce/asinh%28__%29-ue6b.md): Returns the inverse hyperbolic sine of each element in a vector of double-precision values.
- [asinh(\_:)](vforce/asinh%28__%29-284n7.md): Returns the inverse hyperbolic sine of each element in a vector of single-precision values.
- [asinh(\_:result:)](vforce/asinh%28__result_%29-7wn57.md): Calculates the inverse hyperbolic sine of each element in a vector of double-precision values.
- [asinh(\_:result:)](vforce/asinh%28__result_%29-17vv4.md): Calculates the inverse hyperbolic sine of each element in a vector of single-precision values.
- [atanh(\_:)](vforce/atanh%28__%29-922d.md): Returns the inverse hyperbolic tangent of each element in a vector of double-precision values.
- [atanh(\_:)](vforce/atanh%28__%29-2t372.md): Returns the inverse hyperbolic tangent of each element in a vector of single-precision values.
- [atanh(\_:result:)](vforce/atanh%28__result_%29-6waj3.md): Calculates the inverse hyperbolic tangent of each element in a vector of double-precision values.
- [atanh(\_:result:)](vforce/atanh%28__result_%29-596wg.md): Calculates the inverse hyperbolic tangent of each element in a vector of single-precision values.
- [cosh(\_:)](vforce/cosh%28__%29-4dmhm.md): Returns the hyperbolic cosine of each element in a vector of double-precision values.
- [cosh(\_:)](vforce/cosh%28__%29-5ax3f.md): Returns the hyperbolic cosine of each element in a vector of single-precision values.
- [cosh(\_:result:)](vforce/cosh%28__result_%29-4f7in.md): Calculates the hyperbolic cosine of each element in a vector of double-precision values.
- [cosh(\_:result:)](vforce/cosh%28__result_%29-3x3wu.md): Calculates the hyperbolic cosine of each element in a vector of single-precision values.
- [sinh(\_:)](vforce/sinh%28__%29-54hpe.md): Returns the hyperbolic sine of each element in a vector of double-precision values.
- [sinh(\_:)](vforce/sinh%28__%29-fwj2.md): Returns the hyperbolic sine of each element in a vector of single-precision values.
- [sinh(\_:result:)](vforce/sinh%28__result_%29-6xge8.md): Calculates the hyperbolic sine of each element in a vector of double-precision values.
- [sinh(\_:result:)](vforce/sinh%28__result_%29-1ag0e.md): Calculates the hyperbolic sine of each element in a vector of single-precision values.
- [tanh(\_:)](vforce/tanh%28__%29-89qjn.md): Returns the hyperbolic tangent of each element in a vector of double-precision values.
- [tanh(\_:)](vforce/tanh%28__%29-4h4en.md): Returns the hyperbolic tangent of each element in a vector of single-precision values.
- [tanh(\_:result:)](vforce/tanh%28__result_%29-3fuc9.md): Calculates the hyperbolic tangent of each element in a vector of double-precision values.
- [tanh(\_:result:)](vforce/tanh%28__result_%29-1fzsa.md): Calculates the hyperbolic tangent of each element in a vector of single-precision values.
- [vvsinh(\_:\_:\_:)](vvsinh%28______%29.md): Calculates the hyperbolic sine of each element in an array of double-precision values.
- [vvsinhf(\_:\_:\_:)](vvsinhf%28______%29.md): Calculates the hyperbolic sine of each element in an array of single-precision values.
- [vvcosh(\_:\_:\_:)](vvcosh%28______%29.md): Calculates the hyperbolic cosine of each element in an array of double-precision values.
- [vvcoshf(\_:\_:\_:)](vvcoshf%28______%29.md): Calculates the hyperbolic cosine of each element in an array of single-precision values.
- [vvtanh(\_:\_:\_:)](vvtanh%28______%29.md): Calculates the hyperbolic tangent of each element in an array of double-precision values.
- [vvtanhf(\_:\_:\_:)](vvtanhf%28______%29.md): Calculates the hyperbolic tangent of each element in an array of single-precision values.
- [vvasinh(\_:\_:\_:)](vvasinh%28______%29.md): Calculates the inverse hyperbolic sine of each element in an array of double-precision values.
- [vvasinhf(\_:\_:\_:)](vvasinhf%28______%29.md): Calculates the inverse hyperbolic sine of each element in an array of single-precision values.
- [vvacosh(\_:\_:\_:)](vvacosh%28______%29.md): Calculates the inverse hyperbolic cosine of each element in an array of double-precision values.
- [vvacoshf(\_:\_:\_:)](vvacoshf%28______%29.md): Calculates the inverse hyperbolic cosine of each element in an array of single-precision values.
- [vvatanh(\_:\_:\_:)](vvatanh%28______%29.md): Calculates the inverse hyperbolic tangent of each element in an array of double-precision values.
- [vvatanhf(\_:\_:\_:)](vvatanhf%28______%29.md): Calculates the inverse hyperbolic tangent of each element in an array of single-precision values.

### Data Types

- [COMPLEX](complex.md)
- [DOUBLE_COMPLEX](double_complex.md)

## See Also

### Vectors, Matrices, and Quaternions

- [Working with Vectors](working-with-vectors.md): Use vectors to calculate geometric values, calculate dot products and cross products, and interpolate between values.
- [Working with Matrices](working-with-matrices.md): Solve simultaneous equations and transform points in space.
- [Working with Quaternions](working-with-quaternions.md): Rotate points around the surface of a sphere, and interpolate between them.
- [Rotating a cube by transforming its vertices](rotating-a-cube-by-transforming-its-vertices.md): Rotate a cube through a series of keyframes using quaternion interpolation to transition between them.
- [simd](simd-library.md): Perform computations on small vectors and matrices.

# vForce (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform transcendental and trigonometric functions on vectors of any length.

<a id="overview"></a>

## Overview

The vForce library provides a range of trigonometric and transcendental functions that work over large collections of single- and double-precision values. The collections can be of any length, and vForce supplies vectorized functions for the current architecture.

The functions declared in the vForce library have the customary mathematical names, but with the prefix `vv`, for example, [vvsqrtf](vvsqrtf%28______%29.md). Each mathematical function is available in two variants: one for single-precision data and one for double-precision data. The single-precision forms have the suffix `f`, whereas the double-precision forms have no suffix. For example, [vvcosf](vvcosf%28______%29.md) is the single-precision cosine function, and [vvcos](vvcos%28______%29.md) is the double-precision variant.

All of the vForce library functions follow a common format:

- The return type is `void`.
- The first parameter points to an array to hold the results. The only exceptions are [vvsincosf](vvsincosf%28________%29.md) and [vvsincos](vvsincos%28________%29.md), which have two result arrays that the first two parameters point to.
- One or more parameters point to operand arrays that are the same length as the result array.
- The last parameter is the array length.

> **Note**

>  Unless otherwise mentioned, vForce functions work in-place. That is, the input may exactly equal the output.

<a id="Using-vForce"></a>

### Using vForce

The vForce library provides a high-performance alternative to `for` loops and `map(_:)` when applying operations on arrays of floating-point values.

For example, given an arbitrarily sized array, `x`, that contains single-precision values, the following code uses `map(_:)` to create a second array, `y`. On return, `y` contains the square root of each array element.

```swift
let n = 10_000

let x = (0..<n).map { _ in
    Float.random(in: 1 ... 10_000)
}

let y = x.map {
    return sqrt($0)
}
```

The equivalent functionality implemented in vForce runs significantly faster:

```swift
let y = [Float](unsafeUninitializedCapacity: n) { buffer, initializedCount in
    vForce.sqrt(x,
                result: &buffer)
    
    initializedCount = n
}
```

## Topics

### Array-Oriented Arithmetic and Auxiliary Functions

- [vvceil](vvceil%28______%29.md): Calculates the ceiling of each element in an array of double-precision values.
- [vvceilf](vvceilf%28______%29.md): Calculates the ceiling of each element in an array of single-precision values.
- [vvfloor](vvfloor%28______%29.md): Calculates the floor of each element in an array of double-precision values.
- [vvfloorf](vvfloorf%28______%29.md): Calculates the floor of each element in an array of single-precision values.
- [vvcopysign](vvcopysign%28________%29.md): Copies an array, setting the sign of each element based on a second array of double-precision values.
- [vvcopysignf](vvcopysignf%28________%29.md): Copies an array, setting the sign of each element based on a second array of single-precision values.
- [vvdiv](vvdiv%28________%29.md): Divides each element in an array by the corresponding value in a second array of double-precision values.
- [vvdivf](vvdivf%28________%29.md): Divides each element in an array by the corresponding value in a second array of single-precision values.
- [vvfabs](vvfabs%28______%29.md): Calculates the absolute value for each element in an array of double-precision values.
- [vvfabsf](vvfabsf%28______%29.md): Calculates the absolute value for each element in an array of single-precision values.
- [vvfmod](vvfmod%28________%29.md): Calculates the modulus after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [vvfmodf](vvfmodf%28________%29.md): Calculates the modulus after dividing each element in an array by the corresponding element in a second array of single-precision values.
- [vvremainder](vvremainder%28________%29.md): Calculates the remainder after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [vvremainderf](vvremainderf%28________%29.md): Calculates the remainder after dividing each element in an array by the corresponding element in a second array of single-precision values.
- [vvint](vvint%28______%29.md): Calculates the integer truncation for each element in an array of double-precision values.
- [vvintf](vvintf%28______%29.md): Calculates the integer truncation for each element in an array of single-precision values.
- [vvnint](vvnint%28______%29.md): Calculates the nearest integer for each element in an array of double-precision values.
- [vvnintf](vvnintf%28______%29.md): Calculates the nearest integer for each element in an array of single-precision values.
- [vvrsqrt](vvrsqrt%28______%29.md): Calculates the reciprocal square root of each element in an array of double-precision values.
- [vvrsqrtf](vvrsqrtf%28______%29.md): Calculates the reciprocal square root of each element in an array of single-precision values.
- [vvsqrt](vvsqrt%28______%29.md): Calculates the square root of each element in an array of double-precision values.
- [vvsqrtf](vvsqrtf%28______%29.md): Calculates the square root of each element in an array of single-precision values.
- [vvrec](vvrec%28______%29.md): Calculates the reciprocal of each element in an array of double-precision values.
- [vvrecf](vvrecf%28______%29.md): Calculates the reciprocal of each element in an array of single-precision values.
- [vvnextafter](vvnextafter%28________%29.md): Calculates the next machine-representable value for each element in an array of double-precision values.
- [vvnextafterf](vvnextafterf%28________%29.md): Calculates the next machine-representable value for each element in an array of single-precision values.

### Array-Oriented Exponential and Logarithmic Functions

- [vvexp](vvexp%28______%29.md): Calculates *e* raised to the power of each element in an array of double-precision values.
- [vvexpf](vvexpf%28______%29.md): Calculates *e* raised to the power of each element in an array of single-precision values.
- [vvexp2](vvexp2%28______%29.md): Calculates 2 raised to the power of each element in an array of double-precision values.
- [vvexp2f](vvexp2f%28______%29.md): Calculates 2 raised to the power of each element in an array of single-precision values.
- [vvexpm1](vvexpm1%28______%29.md): Calculates *eˣ-1* for each element in an array of double-precision values.
- [vvexpm1f](vvexpm1f%28______%29.md): Calculates *eˣ-1* for each element in an array of single-precision values.
- [vvlog](vvlog%28______%29.md): Calculates the natural logarithm for each element in an array of double-precision values.
- [vvlogf](vvlogf%28______%29.md): Calculates the natural logarithm for each element in an array of single-precision values.
- [vvlog1p](vvlog1p%28______%29.md): Calculates *log(1+x)* for each element in an array of double-precision values.
- [vvlog1pf](vvlog1pf%28______%29.md): Calculates *log(1+x)* for each element in an array of single-precision values.
- [vvlog2](vvlog2%28______%29.md): Calculates the base 2 logarithm of each element in an array of double-precision values.
- [vvlog2f](vvlog2f%28______%29.md): Calculates the base 2 logarithm of each element in an array of single-precision values.
- [vvlog10](vvlog10%28______%29.md): Calculates the base 10 logarithm of each element in an array of double-precision values.
- [vvlog10f](vvlog10f%28______%29.md): Calculates the base 10 logarithm of each element in an array of single-precision values.
- [vvlogb](vvlogb%28______%29.md): Calculates the unbiased exponent of each element in an array of double-precision values.
- [vvlogbf](vvlogbf%28______%29.md): Calculates the unbiased exponent of each element in an array of single-precision values.

### Array-Oriented Power Functions

- [vvpow](vvpow%28________%29.md): Raises each element in an array to the power of the corresponding element in a second array of double-precision values.
- [vvpowf](vvpowf%28________%29.md): Raises each element in an array to the power of the corresponding element in a second array of single-precision values.

### Array-Oriented Trigonometric Functions

- [vvsin](vvsin%28______%29.md): Calculates the sine of each element in an array of double-precision values.
- [vvsinf](vvsinf%28______%29.md): Calculates the sine of each element in an array of single-precision values.
- [vvsinpi](vvsinpi%28______%29.md): Calculates the sine of pi multiplied by each element in an array of double-precision values.
- [vvsinpif](vvsinpif%28______%29.md): Calculates the sine of pi multiplied by each element in an array of single-precision values.
- [vvcos](vvcos%28______%29.md): Calculates the cosine of each element in an array of double-precision values.
- [vvcosf](vvcosf%28______%29.md): Calculates the cosine of each element in an array of single-precision values.
- [vvcospi](vvcospi%28______%29.md): Calculates the cosine of pi multiplied by each element in an array of double-precision values.
- [vvcospif](vvcospif%28______%29.md): Calculates the cosine of pi multiplied by each element in an array of single-precision values.
- [vvcosisin](vvcosisin%28______%29.md): Calculates the cosine and sine of each element in an array of double-precision values.
- [vvcosisinf](vvcosisinf%28______%29.md): Calculates the cosine and sine of each element in an array of single-precision values.
- [vvsincos](vvsincos%28________%29.md): Calculates the cosine and sine of each element in an array of double-precision values.
- [vvsincosf](vvsincosf%28________%29.md): Calculates the cosine and sine of each element in an array of single-precision values.
- [vvtan](vvtan%28______%29.md): Calculates the tangent of each element in an array of double-precision values.
- [vvtanf](vvtanf%28______%29.md): Calculates the tangent of each element in an array of single-precision values.
- [vvtanpi](vvtanpi%28______%29.md): Calculates the tangent of pi multiplied by each element in an array of double-precision values.
- [vvtanpif](vvtanpif%28______%29.md): Calculates the tangent of pi multiplied by each element in an array of single-precision values.
- [vvasin](vvasin%28______%29.md): Calculates the arcsine of each element in an array of double-precision values.
- [vvasinf](vvasinf%28______%29.md): Calculates the arcsine of each element in an array of single-precision values.
- [vvacos](vvacos%28______%29.md): Calculates the arccosine of each element in an array of double-precision values.
- [vvacosf](vvacosf%28______%29.md): Calculates the arccosine of each element in an array of single-precision values.
- [vvatan](vvatan%28______%29.md): Calculates the arctangent of each element in an array of double-precision values.
- [vvatanf](vvatanf%28______%29.md): Calculates the arctangent of each element in an array of single-precision values.
- [vvatan2](vvatan2%28________%29.md): Calculates the arctangent of each pair of elements in two arrays of double-precision values.
- [vvatan2f](vvatan2f%28________%29.md): Calculates the arctangent of each pair of elements in two arrays of single-precision values.

### Array-Oriented Hyperbolic Functions

- [vvsinh](vvsinh%28______%29.md): Calculates the hyperbolic sine of each element in an array of double-precision values.
- [vvsinhf](vvsinhf%28______%29.md): Calculates the hyperbolic sine of each element in an array of single-precision values.
- [vvcosh](vvcosh%28______%29.md): Calculates the hyperbolic cosine of each element in an array of double-precision values.
- [vvcoshf](vvcoshf%28______%29.md): Calculates the hyperbolic cosine of each element in an array of single-precision values.
- [vvtanh](vvtanh%28______%29.md): Calculates the hyperbolic tangent of each element in an array of double-precision values.
- [vvtanhf](vvtanhf%28______%29.md): Calculates the hyperbolic tangent of each element in an array of single-precision values.
- [vvasinh](vvasinh%28______%29.md): Calculates the inverse hyperbolic sine of each element in an array of double-precision values.
- [vvasinhf](vvasinhf%28______%29.md): Calculates the inverse hyperbolic sine of each element in an array of single-precision values.
- [vvacosh](vvacosh%28______%29.md): Calculates the inverse hyperbolic cosine of each element in an array of double-precision values.
- [vvacoshf](vvacoshf%28______%29.md): Calculates the inverse hyperbolic cosine of each element in an array of single-precision values.
- [vvatanh](vvatanh%28______%29.md): Calculates the inverse hyperbolic tangent of each element in an array of double-precision values.
- [vvatanhf](vvatanhf%28______%29.md): Calculates the inverse hyperbolic tangent of each element in an array of single-precision values.

### Data Types

- [COMPLEX](complex.md)
- [DOUBLE_COMPLEX](double_complex.md)

## See Also

### Vectors, Matrices, and Quaternions

- [Working with Vectors](working-with-vectors.md): Use vectors to calculate geometric values, calculate dot products and cross products, and interpolate between values.
- [Working with Matrices](working-with-matrices.md): Solve simultaneous equations and transform points in space.
- [Working with Quaternions](working-with-quaternions.md): Rotate points around the surface of a sphere, and interpolate between them.
- [Rotating a cube by transforming its vertices](rotating-a-cube-by-transforming-its-vertices.md): Rotate a cube through a series of keyframes using quaternion interpolation to transition between them.
- [simd](simd-library.md): Perform computations on small vectors and matrices.
