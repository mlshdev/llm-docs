> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double8](https://developer.apple.com/documentation/simd/simd_double8)

# simd_double8 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 64-bit floating-point elements.

## Declaration

```swift
typealias simd_double8 = SIMD8<Double>
```

## Topics

### Functions to Create Eight-Element Vectors From Other Vectors

- [simd_make_double8(\_:)](simd_make_double8%28__%29-3wn9q.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_double8(\_:)](simd_make_double8%28__%29-40259.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_double8(\_:)](simd_make_double8%28__%29-3br50.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_double8(\_:)](simd_make_double8%28__%29-4i0aw.md): Returns a new vector from the specified vector.
- [simd_make_double8(\_:\_:)](simd_make_double8%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_double8_undef(\_:)](simd_make_double8_undef%28__%29-7g0z0.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_double8_undef(\_:)](simd_make_double8_undef%28__%29-7d127.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_double8_undef(\_:)](simd_make_double8_undef%28__%29-7md0u.md): Returns a new vector from the specified four-element vector, and other elements undefined.

### Functions to Create Eight-Element Vectors From Scalar Values

- [simd_make_double8(\_:)](simd_make_double8%28__%29-56g8y.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_double8_undef(\_:)](simd_make_double8_undef%28__%29-5rmk5.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-7p0dw.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-q88m.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-8pk1m.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract(\_:)](simd_fract%28__%29-3jcfd.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-7hb8r.md): Returns the sign of each element in a vector.
- [simd_step(\_:\_:)](simd_step%28____%29-1vckv.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-3ode2.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-55eqq.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-3aymg.md): Returns the sum of all elements in a vector.

### Interpolation Functions

- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-99l4q.md): Returns an element-wise smoothly interpolated value between two vectors.
- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-5afwd.md): Returns an element-wise linearly interpolated value between two vectors.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-6beor.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-65po6.md): Returns the maximum value of each element in a vector.

### Reciprocal and Reciprocal Square Root Functions

- [simd_recip(\_:)](simd_recip%28__%29-98afu.md): Returns the reciprocal of each element in a vector.
- [simd_fast_recip(\_:)](simd_fast_recip%28__%29-16f97.md): Returns the fast reciprocal of each element in a vector.
- [simd_precise_recip(\_:)](simd_precise_recip%28__%29-74cqq.md): Returns the precise reciprocal of each element in a vector.
- [simd_rsqrt(\_:)](simd_rsqrt%28__%29-1ojpy.md): Returns the reciprocal square root of each element in a vector.
- [simd_fast_rsqrt(\_:)](simd_fast_rsqrt%28__%29-922us.md): Returns the fast reciprocal square root of each element in a vector.
- [simd_precise_rsqrt(\_:)](simd_precise_rsqrt%28__%29-1hq00.md): Returns the precise reciprocal square root of each element in a vector.

### Exponential and Logarithmic Functions

- [exp(\_:)](exp%28__%29-69tin.md): Returns *e* raised to the power of each element in a vector.
- [exp2(\_:)](exp2%28__%29-4m3mb.md): Returns 2 raised to the power of each element in a vector.
- [exp10(\_:)](exp10%28__%29-39f7r.md): Returns 10 raised to the power of each element in a vector.
- [expm1(\_:)](expm1%28__%29-8nn5x.md): Returns *eˣ-1* for each element in a vector.
- [log(\_:)](log%28__%29-7649l.md): Returns the natural logarithm of each element in a vector.
- [log2(\_:)](log2%28__%29-8k8nf.md): Returns the base 2 logarithm of each element in a vector.
- [log10(\_:)](log10%28__%29-24ung.md): Returns the base 10 logarithm of each element in a vector.
- [log1p(\_:)](log1p%28__%29-3fdfb.md): Returns *log(1+x)* of each element in a vector.

### Hyperbolic Functions

- [acosh(\_:)](acosh%28__%29-2zf9d.md): Returns the inverse hyperbolic cosine of each element in a vector.
- [asinh(\_:)](asinh%28__%29-5vu4r.md): Returns the inverse hyperbolic sine of each element in a vector.
- [atanh(\_:)](atanh%28__%29-d3b3.md): Returns the inverse hyperbolic tangent of each element in a vector.
- [cosh(\_:)](cosh%28__%29-1g57o.md): Returns the hyperbolic cosine of each element in a vector.
- [sinh(\_:)](sinh%28__%29-ip9w.md): Returns the hyperbolic sine of each element in a vector.
- [tanh(\_:)](tanh%28__%29-1ag6z.md): Returns the hyperbolic tangent of each element in a vector.

### Logic Functions

- [simd_select(\_:\_:\_:)](simd_select%28______%29-8wti7.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-1yj5q.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Math Functions

- [cbrt(\_:)](cbrt%28__%29-9dsjc.md): Returns the cube root of each element in a vector.
- [erf(\_:)](erf%28__%29-293ey.md): Returns the error function for each element in a vector.
- [erfc(\_:)](erfc%28__%29-vzkw.md): Returns the complementary error function for each element in a vector.
- [fma(\_:\_:\_:)](fma%28______%29-95vfo.md): Returns the multiply-add result for corresponding elements in three vectors.
- [fmod(\_:\_:)](fmod%28____%29-7g7m.md): Returns the modulus after dividing each element in a vector by the corresponding element in a second vector.
- [hypot(\_:\_:)](hypot%28____%29-8vke8.md): Returns the hypotenuse of a right-angled triangle with the sides that are adjacent to the right angle that two vectors define.
- [lgamma(\_:)](lgamma%28__%29-7t6g8.md): Returns the natural logarithm of the absolute value of the gamma function of each element in a vector.
- [nextafter(\_:\_:)](nextafter%28____%29-2xerr.md): Returns the next representable value of each element in a vector in the direction of the corresponding element in a second vector.
- [pow(\_:\_:)](pow%28____%29-9xmzf.md): Returns each element in a vector raised to the power of the corresponding element in a second vector.
- [remainder(\_:\_:)](remainder%28____%29-326ci.md): Returns the remainder after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [round(\_:)](round%28__%29-7t6q.md): Returns each element in a vector rounded to the nearest integer.
- [simd_muladd(\_:\_:\_:)](simd_muladd%28______%29-2vs0c.md): Returns the multiply-add result for corresponding elements in three vectors.
- [tgamma(\_:)](tgamma%28__%29-8qiri.md): Returns the gamma function for each element in a vector.

### Trigonometric Functions

- [acos(\_:)](acos%28__%29-2141m.md): Returns the arccosine of each element in a vector.
- [asin(\_:)](asin%28__%29-78d03.md): Returns the arcsine of each element in a vector.
- [atan(\_:)](atan%28__%29-7b52p.md): Returns the arctangent of each element in a vector.
- [atan2(\_:\_:)](atan2%28____%29-8pfg9.md): Returns the arctangent of each pair of corresponding elements in two vectors.
- [cos(\_:)](cos%28__%29-7bqey.md): Returns the cosine of each element in a vector.
- [cospi(\_:)](cospi%28__%29-8d55q.md): Returns the cosine of each element in a vector multiplied by pi.
- [sin(\_:)](sin%28__%29-1joh9.md): Returns the sine of each element in a vector.
- [sinpi(\_:)](sinpi%28__%29-9tdix.md): Returns the sine of each element in a vector multiplied by pi.
- [sincos(\_:)](sincos%28__%29-3iwed.md): Returns the sine and cosine of each element in a vector.
- [sincospi(\_:)](sincospi%28__%29-5yfry.md): Returns the sine and cosine of each element in a vector multiplied by pi.
- [tan(\_:)](tan%28__%29-7a2xj.md): Returns the tangent of each element in a vector.
- [tanpi(\_:)](tanpi%28__%29-3lobh.md): Returns the tangent of each element in a vector multiplied by pi.

### Classification Functions

- [isfinite(\_:)](isfinite%28__%29-9iwij.md): Returns true for each element that is finite in a vector.
- [isinf(\_:)](isinf%28__%29-5i1uj.md): Returns true for each element that is infinite in a vector.
- [isnan(\_:)](isnan%28__%29-90lcg.md): Returns true for each element that is not a number (NaN) in a vector.
- [isnormal(\_:)](isnormal%28__%29-7lk2x.md): Returns true for each element that is normal in a vector.

### Alternative Type Alias

- [vector_double8](vector_double8.md)

## See Also

### Vector data types

- [simd_double1](simd_double1.md): A vector of one 64-bit floating-point element.
- [simd_double2](simd_double2.md): A vector of two 64-bit floating-point elements.
- [simd_double3](simd_double3.md): A vector of three 64-bit floating-point elements.
- [simd_double4](simd_double4.md): A vector of four 64-bit floating-point elements.

# simd_double8 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 64-bit floating-point elements.

## Declaration

```objectivec
typedef double __attribute__((ext_vector_type(8))) simd_double8;
```

## Topics

### Functions to Create Eight-Element Vectors From Other Vectors

- [simd_make_double8](simd_make_double8%28__%29-3wn9q.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_double8](simd_make_double8%28__%29-40259.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_double8](simd_make_double8%28__%29-3br50.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_double8](simd_make_double8%28__%29-4i0aw.md): Returns a new vector from the specified vector.
- [simd_make_double8](simd_make_double8%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_double8_undef](simd_make_double8_undef%28__%29-7g0z0.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_double8_undef](simd_make_double8_undef%28__%29-7d127.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_double8_undef](simd_make_double8_undef%28__%29-7md0u.md): Returns a new vector from the specified four-element vector, and other elements undefined.

### Functions to Create Eight-Element Vectors From Scalar Values

- [simd_make_double8](simd_make_double8%28__%29-56g8y.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_double8_undef](simd_make_double8_undef%28__%29-5rmk5.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Eight-Element Vectors From Vectors of Other Types

- [simd_double](simd_double-62zne.md): Returns a new vector from the specified vector of 8-bit, signed-integer elements.
- [simd_double](simd_double-639kq.md): Returns a new vector from the specified vector of 8-bit, unsigned-integer elements.
- [simd_double](simd_double-634oq.md): Returns a new vector from the specified vector of 16-bit, signed-integer elements.
- [simd_double](simd_double-63eii.md): Returns a new vector from the specified vector of 16-bit, unsigned-integer elements.
- [simd_double](simd_double-631ha.md): Returns a new vector from the specified vector of 32-bit, signed-integer elements.
- [simd_double](simd_double-63bi6.md): Returns a new vector from the specified vector of 32-bit, unsigned-integer elements.
- [simd_double](simd_double-63332.md): Returns a new vector from the specified vector of 64-bit, signed-integer elements.
- [simd_double](simd_double-63d26.md): Returns a new vector from the specified vector of 64-bit, unsigned-integer elements.
- [simd_double](simd_double-63b6q.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_double](simd_double-63agu.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-7p0dw.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-q88m.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-8pk1m.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract](simd_fract%28__%29-3jcfd.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-7hb8r.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-1vckv.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-3ode2.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-55eqq.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-3aymg.md): Returns the sum of all elements in a vector.

### Interpolation Functions

- [simd_smoothstep](simd_smoothstep%28______%29-99l4q.md): Returns an element-wise smoothly interpolated value between two vectors.
- [simd_mix](simd_mix%28______%29-5afwd.md): Returns an element-wise linearly interpolated value between two vectors.

### Extrema Functions

- [simd_min](simd_min%28____%29-6beor.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-65po6.md): Returns the maximum value of each element in a vector.

### Reciprocal and Reciprocal Square Root Functions

- [simd_recip](simd_recip%28__%29-98afu.md): Returns the reciprocal of each element in a vector.
- [simd_fast_recip](simd_fast_recip%28__%29-16f97.md): Returns the fast reciprocal of each element in a vector.
- [simd_precise_recip](simd_precise_recip%28__%29-74cqq.md): Returns the precise reciprocal of each element in a vector.
- [simd_rsqrt](simd_rsqrt%28__%29-1ojpy.md): Returns the reciprocal square root of each element in a vector.
- [simd_fast_rsqrt](simd_fast_rsqrt%28__%29-922us.md): Returns the fast reciprocal square root of each element in a vector.
- [simd_precise_rsqrt](simd_precise_rsqrt%28__%29-1hq00.md): Returns the precise reciprocal square root of each element in a vector.

### Geometry Functions

- [simd_dot](simd_dot-5vlda.md): Returns the dot product of two vectors.
- [simd_normalize](simd_normalize-yjr.md): Returns a vector pointing in the same direction of the supplied vector, with a length of 1.
- [simd_fast_normalize](simd_fast_normalize-8x3pc.md): Returns the fast normalized vector.
- [simd_precise_normalize](simd_precise_normalize-6237w.md): Returns the precise normalized vector.
- [simd_project](simd_project-8o56y.md): Returns the first vector projected onto the second vector.
- [simd_fast_project](simd_fast_project-61mm1.md): Returns the fast projected vector.
- [simd_precise_project](simd_precise_project-2x3bb.md): Returns the precise projected vector.

### Vector Norm Functions

- [simd_norm_one](simd_norm_one-fgqf.md): Returns the sum of the absolute values of a vector.
- [simd_norm_inf](simd_norm_inf-9maca.md): Returns the maximum absolute value of a vector.

### Length and Distance Functions

- [simd_length](simd_length-32x7b.md): Returns the length of a vector.
- [simd_fast_length](simd_fast_length-5utvc.md): Returns the fast length of a vector.
- [simd_precise_length](simd_precise_length-67k0i.md): Returns the precise length of a vector.
- [simd_length_squared](simd_length_squared-3x9ip.md): Returns the square of the length of a vector.
- [simd_distance](simd_distance-8f8o.md): Returns the distance between two vectors.
- [simd_fast_distance](simd_fast_distance-9mi5e.md): Returns the fast distance between two vectors.
- [simd_precise_distance](simd_precise_distance-82p17.md): Returns the precise distance between two vectors.
- [simd_distance_squared](simd_distance_squared-4kl6l.md): Returns the square of the distance between two vectors.

### Logic Functions

- [simd_select](simd_select%28______%29-8wti7.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect](simd_bitselect%28______%29-1yj5q.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Math Functions

- [simd_muladd](simd_muladd%28______%29-2vs0c.md): Returns the multiply-add result for corresponding elements in three vectors.

### Alternative Type Alias

- [vector_double8](vector_double8.md)

## See Also

### Vector data types

- [simd_double1](simd_double1.md): A vector of one 64-bit floating-point element.
- [simd_double2](simd_double2.md): A vector of two 64-bit floating-point elements.
- [simd_double3](simd_double3.md): A vector of three 64-bit floating-point elements.
- [simd_double4](simd_double4.md): A vector of four 64-bit floating-point elements.
