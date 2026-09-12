> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double2](https://developer.apple.com/documentation/simd/simd_double2)

# simd_double2 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 64-bit floating-point elements.

## Declaration

```swift
typealias simd_double2 = SIMD2<Double>
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_double2(\_:)](simd_make_double2%28__%29-3qby3.md): Returns a new vector from the specified vector.
- [simd_make_double2(\_:)](simd_make_double2%28__%29-3tt38.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_double2(\_:)](simd_make_double2%28__%29-3hpld.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_double2(\_:)](simd_make_double2%28__%29-4o3ot.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_double2(\_:\_:)](simd_make_double2%28____%29.md): Returns a new vector from the specified vectors.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_double2(\_:)](simd_make_double2%28__%29-r6xz.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_double2_undef(\_:)](simd_make_double2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-8869e.md): Returns the absolute value of each element in a vector.
- [abs(\_:)](abs%28__%29-1p8t7.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-6puwa.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-7n2jv.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-6d1s7.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-vmn4.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract(\_:)](simd_fract%28__%29-42i3r.md): Returns the fractional part of each element in a vector.
- [fract(\_:)](fract%28__%29-2gjrn.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-6jlx9.md): Returns the sign of each element in a vector.
- [sign(\_:)](sign%28__%29-5fczz.md): Returns the sign of each element in a vector.
- [step(\_:edge:)](step%28__edge_%29-2qauk.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.
- [simd_step(\_:\_:)](simd_step%28____%29-8jlf2.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce Functions

- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2q09i.md): Returns the sum of all elements in a vector.
- [reduce_add(\_:)](reduce_add%28__%29-8iwo6.md): Returns the sum of all elements in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4kinw.md): Returns the maximum value in a vector.
- [reduce_max(\_:)](reduce_max%28__%29-3rmpx.md): Returns the maximum value in a vector.
- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-49t1o.md): Returns the minimum value in a vector.
- [reduce_min(\_:)](reduce_min%28__%29-6mev7.md): Returns the minimum value in a vector.

### Interpolation Functions

- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-e0ov.md): Returns an element-wise smoothly interpolated value between two vectors.
- [smoothstep(\_:edge0:edge1:)](smoothstep%28__edge0_edge1_%29-2wqo9.md): Returns an element-wise smoothly interpolated value between two vectors.
- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-v083.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-7bjg5.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-3hfwb.md): Returns an element-wise linearly interpolated value between two vectors.

### Extrema Functions

- [simd_max(\_:\_:)](simd_max%28____%29-1sy2n.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-3puhr.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-8a5p5.md): Returns the maximum value of each element in a vector.
- [fmax(\_:\_:)](fmax%28____%29-15te9.md): Returns the maximum value of each element in a vector.
- [simd_min(\_:\_:)](simd_min%28____%29-9mraz.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-4sdw0.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-9yz9x.md): Returns the minimum value of each element in a vector.
- [fmin(\_:\_:)](fmin%28____%29-39mes.md): Returns the minimum value of each element in a vector.

### Reciprocal and Reciprocal Square Root Functions

- [recip(\_:)](recip%28__%29-43mv7.md): Returns the reciprocal of each element in a vector.
- [simd_recip(\_:)](simd_recip%28__%29-8nekc.md): Returns the reciprocal of each element in a vector.
- [simd_fast_recip(\_:)](simd_fast_recip%28__%29-lm0t.md): Returns the fast reciprocal of each element in a vector.
- [simd_precise_recip(\_:)](simd_precise_recip%28__%29-66n8k.md): Returns the precise reciprocal of each element in a vector.
- [simd_rsqrt(\_:)](simd_rsqrt%28__%29-ok9s.md): Returns the reciprocal square root of each element in a vector.
- [rsqrt(\_:)](rsqrt%28__%29-2k5rh.md): Returns the reciprocal square root of each element in a vector.
- [simd_fast_rsqrt(\_:)](simd_fast_rsqrt%28__%29-84dca.md): Returns the fast reciprocal square root of each element in a vector.
- [simd_precise_rsqrt(\_:)](simd_precise_rsqrt%28__%29-wrke.md): Returns the precise reciprocal square root of each element in a vector.

### Exponential and Logarithmic Functions

- [exp(\_:)](exp%28__%29-9nxip.md): Returns *e* raised to the power of each element in a vector.
- [exp2(\_:)](exp2%28__%29-4y2ne.md): Returns 2 raised to the power of each element in a vector.
- [exp10(\_:)](exp10%28__%29-4tdos.md): Returns 10 raised to the power of each element in a vector.
- [expm1(\_:)](expm1%28__%29-9aitr.md): Returns *eˣ-1* for each element in a vector.
- [log(\_:)](log%28__%29-2ieba.md): Returns the natural logarithm of each element in a vector.
- [log2(\_:)](log2%28__%29-779eu.md): Returns the base 2 logarithm of each element in a vector.
- [log10(\_:)](log10%28__%29-337zw.md): Returns the base 10 logarithm of each element in a vector.
- [log1p(\_:)](log1p%28__%29-40mka.md): Returns *log(1+x)* of each element in a vector.

### Geometry Functions

- [cross(\_:\_:)](cross%28____%29-916aw.md): Returns the cross product of two vectors.
- [dot(\_:\_:)](dot%28____%29-6ayky.md): Returns the dot product of two vectors.
- [normalize(\_:)](normalize%28__%29-5mqhk.md): Returns a vector pointing in the same direction of the supplied vector with a length of 1.
- [project(\_:\_:)](project%28____%29-kai1.md): Returns the first vector projected onto the second vector.
- [reflect(\_:n:)](reflect%28__n_%29-3rhgb.md): Returns the reflection direction of an incident vector and a unit normal vector.
- [refract(\_:n:eta:)](refract%28__n_eta_%29-1ghae.md): Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.

### Vector Norm Functions

- [norm_one(\_:)](norm_one%28__%29-2uh74.md): Returns the sum of the absolute values of a vector.
- [norm_inf(\_:)](norm_inf%28__%29-s3p1.md): Returns the maximum absolute value of a vector.

### Length and Distance Functions

- [length(\_:)](length%28__%29-4gxdk.md): Returns the length of a vector.
- [length_squared(\_:)](length_squared%28__%29-8gxz9.md): Returns the square of the length of a vector.
- [distance(\_:\_:)](distance%28____%29-1mnxv.md): Returns the distance between two vectors.
- [distance_squared(\_:\_:)](distance_squared%28____%29-56tah.md): Returns the square of the distance between two vectors.

### Hyperbolic Functions

- [acosh(\_:)](acosh%28__%29-edu.md): Returns the inverse hyperbolic cosine of each element in a vector.
- [asinh(\_:)](asinh%28__%29-nxaa.md): Returns the inverse hyperbolic sine of each element in a vector.
- [atanh(\_:)](atanh%28__%29-5l8ss.md): Returns the inverse hyperbolic tangent of each element in a vector.
- [cosh(\_:)](cosh%28__%29-303ot.md): Returns the hyperbolic cosine of each element in a vector.
- [sinh(\_:)](sinh%28__%29-5gx9h.md): Returns the hyperbolic sine of each element in a vector.
- [tanh(\_:)](tanh%28__%29-739hq.md): Returns the hyperbolic tangent of each element in a vector.

### Logic Functions

- [simd_select(\_:\_:\_:)](simd_select%28______%29-7sz6k.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-3ys1a.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Math Functions

- [cbrt(\_:)](cbrt%28__%29-75bqn.md): Returns the cube root of each element in a vector.
- [ceil(\_:)](ceil%28__%29-cu6z.md): Returns the ceiling of each element in a vector.
- [erf(\_:)](erf%28__%29-7tfrz.md): Returns the error function for each element in a vector.
- [erfc(\_:)](erfc%28__%29-8i2r6.md): Returns the complementary error function for each element in a vector.
- [floor(\_:)](floor%28__%29-21h1y.md)
- [fma(\_:\_:\_:)](fma%28______%29-4fxau.md): Returns the multiply-add result for corresponding elements in three vectors.
- [fmod(\_:\_:)](fmod%28____%29-81hr1.md): Returns the modulus after dividing each element in a vector by the corresponding element in a second vector.
- [hypot(\_:\_:)](hypot%28____%29-9ecpz.md): Returns the hypotenuse of a right-angled triangle with the sides that are adjacent to the right angle that two vectors define.
- [lgamma(\_:)](lgamma%28__%29-697vf.md): Returns the natural logarithm of the absolute value of the gamma function of each element in a vector.
- [nextafter(\_:\_:)](nextafter%28____%29-6qeuz.md): Returns the next representable value of each element in a vector in the direction of the corresponding element in a second vector.
- [pow(\_:\_:)](pow%28____%29-2ov0n.md): Returns each element in a vector raised to the power of the corresponding element in a second vector.
- [remainder(\_:\_:)](remainder%28____%29-1l80m.md): Returns the remainder after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [round(\_:)](round%28__%29-1ith.md): Returns each element in a vector rounded to the nearest integer.
- [simd_muladd(\_:\_:\_:)](simd_muladd%28______%29-o9lv.md): Returns the multiply-add result for corresponding elements in three vectors.
- [tgamma(\_:)](tgamma%28__%29-3id8t.md): Returns the gamma function for each element in a vector.
- [trunc(\_:)](trunc%28__%29-1xvcu.md): Returns each element in a vector rounded toward zero to the nearest integer.

### Trigonometric Functions

- [acos(\_:)](acos%28__%29-1hgv5.md): Returns the arccosine of each element in a vector.
- [asin(\_:)](asin%28__%29-72orw.md): Returns the arcsine of each element in a vector.
- [atan(\_:)](atan%28__%29-9onaa.md): Returns the arctangent of each element in a vector.
- [atan2(\_:\_:)](atan2%28____%29-6ogu4.md): Returns the arctangent of each pair of corresponding elements in two vectors.
- [cos(\_:)](cos%28__%29-3p9ym.md): Returns the cosine of each element in a vector.
- [cospi(\_:)](cospi%28__%29-57353.md): Returns the cosine of each element in a vector multiplied by pi.
- [sin(\_:)](sin%28__%29-3p88b.md): Returns the sine of each element in a vector.
- [sinpi(\_:)](sinpi%28__%29-4lgpo.md): Returns the sine of each element in a vector multiplied by pi.
- [sincos(\_:)](sincos%28__%29-9pa2l.md): Returns the sine and cosine of each element in a vector.
- [sincospi(\_:)](sincospi%28__%29-3fwbj.md): Returns the sine and cosine of each element in a vector multiplied by pi.
- [tan(\_:)](tan%28__%29-5czlf.md): Returns the tangent of each element in a vector.
- [tanpi(\_:)](tanpi%28__%29-9z76.md): Returns the tangent of each element in a vector multiplied by pi.

### Classification Functions

- [isfinite(\_:)](isfinite%28__%29-7d8q7.md): Returns true for each element that is finite in a vector.
- [isinf(\_:)](isinf%28__%29-4wflm.md): Returns true for each element that is infinite in a vector.
- [isnan(\_:)](isnan%28__%29-9irpc.md): Returns true for each element that is not a number (NaN) in a vector.
- [isnormal(\_:)](isnormal%28__%29-61nr1.md): Returns true for each element that is normal in a vector.

### Alternative Type Alias

- [vector_double2](vector_double2.md)
- [double2](double2.md): Deprecated.

## See Also

### Vector data types

- [simd_double1](simd_double1.md): A vector of one 64-bit floating-point element.
- [simd_double3](simd_double3.md): A vector of three 64-bit floating-point elements.
- [simd_double4](simd_double4.md): A vector of four 64-bit floating-point elements.
- [simd_double8](simd_double8.md): A vector of eight 64-bit floating-point elements.

# simd_double2 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 64-bit floating-point elements.

## Declaration

```objectivec
typedef double __attribute__((ext_vector_type(2))) simd_double2;
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_double2](simd_make_double2%28__%29-3qby3.md): Returns a new vector from the specified vector.
- [simd_make_double2](simd_make_double2%28__%29-3tt38.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_double2](simd_make_double2%28__%29-3hpld.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_double2](simd_make_double2%28__%29-4o3ot.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_double2](simd_make_double2%28____%29.md): Returns a new vector from the specified vectors.
- [vector2](vector2-8cpbh.md): Returns a new vector from the specified vectors.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_double2](simd_make_double2%28__%29-r6xz.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_double2_undef](simd_make_double2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Vectors of Other Types

- [simd_double](simd_double-531gc.md): Returns a new vector from the specified vector of 8-bit, signed-integer elements.
- [simd_double](simd_double-53bbw.md): Returns a new vector from the specified vector of 8-bit, unsigned-integer elements.
- [simd_double](simd_double-536fw.md): Returns a new vector from the specified vector of 16-bit, signed-integer elements.
- [simd_double](simd_double-53gf0.md): Returns a new vector from the specified vector of 16-bit, unsigned-integer elements.
- [simd_double](simd_double-534k4.md): Returns a new vector from the specified vector of 32-bit, signed-integer elements.
- [simd_double](simd_double-53ej8.md): Returns a new vector from the specified vector of 32-bit, unsigned-integer elements.
- [simd_double](simd_double-5365s.md): Returns a new vector from the specified vector of 64-bit, signed-integer elements.
- [simd_double](simd_double-53fzk.md): Returns a new vector from the specified vector of 64-bit, unsigned-integer elements.
- [simd_double](simd_double-53czc.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_double](simd_double-53di8.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-8869e.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-6puwa.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-vmn4.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract](simd_fract%28__%29-42i3r.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-6jlx9.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-8jlf2.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce Functions

- [simd_reduce_add](simd_reduce_add%28__%29-2q09i.md): Returns the sum of all elements in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4kinw.md): Returns the maximum value in a vector.
- [simd_reduce_min](simd_reduce_min%28__%29-49t1o.md): Returns the minimum value in a vector.

### Interpolation Functions

- [simd_smoothstep](simd_smoothstep%28______%29-e0ov.md): Returns an element-wise smoothly interpolated value between two vectors.
- [simd_mix](simd_mix%28______%29-v083.md): Returns an element-wise linearly interpolated value between two vectors.

### Extrema Functions

- [simd_max](simd_max%28____%29-1sy2n.md): Returns the maximum value of each element in a vector.
- [simd_min](simd_min%28____%29-9mraz.md): Returns the minimum value of each element in a vector.

### Reciprocal and Reciprocal Square Root Functions

- [simd_recip](simd_recip%28__%29-8nekc.md): Returns the reciprocal of each element in a vector.
- [simd_fast_recip](simd_fast_recip%28__%29-lm0t.md): Returns the fast reciprocal of each element in a vector.
- [simd_precise_recip](simd_precise_recip%28__%29-66n8k.md): Returns the precise reciprocal of each element in a vector.
- [simd_rsqrt](simd_rsqrt%28__%29-ok9s.md): Returns the reciprocal square root of each element in a vector.
- [simd_fast_rsqrt](simd_fast_rsqrt%28__%29-84dca.md): Returns the fast reciprocal square root of each element in a vector.
- [simd_precise_rsqrt](simd_precise_rsqrt%28__%29-wrke.md): Returns the precise reciprocal square root of each element in a vector.

### Exponential and Logarithmic Functions

- [exp](exp.md): Returns *e* raised to the power of each element in a vector.
- [exp2](exp2.md): Returns 2 raised to the power of each element in a vector.
- [exp10](exp10.md): Returns 10 raised to the power of each element in a vector.
- [expm1](expm1.md): Returns *eˣ-1* for each element in a vector.
- [log](log.md): Returns the natural logarithm of each element in a vector.
- [log2](log2.md): Returns the base 2 logarithm of each element in a vector.
- [log10](log10.md): Returns the base 10 logarithm of each element in a vector.
- [log1p](log1p.md): Returns *log(1+x)* for each element in a vector.

### Geometry Functions

- [simd_cross](simd_cross-1dixl.md): Returns the cross product of two vectors.
- [simd_dot](simd_dot-3r1vl.md): Returns the dot product of two vectors.
- [simd_incircle](simd_incircle-8iogb.md): Tests if a double-precision point lies inside, on, or outside a circle.
- [simd_normalize](simd_normalize-9fo1c.md): Returns a vector pointing in the same direction of the supplied vector, with a length of 1.
- [simd_fast_normalize](simd_fast_normalize-9wy6m.md): Returns the fast normalized vector.
- [simd_precise_normalize](simd_precise_normalize-54dru.md): Returns the precise normalized vector.
- [simd_orient](simd_orient-9fgki.md): Tests the orientation of the two supplied vectors.
- [simd_orient](simd_orient-9b2wf.md): Tests the orientation of the three supplied vectors.
- [simd_project](simd_project-1mg5p.md): Returns the first vector projected onto the second vector.
- [simd_fast_project](simd_fast_project-6c68k.md): Returns the fast projected vector.
- [simd_precise_project](simd_precise_project-7t3qn.md): Returns the precise projected vector.
- [simd_reflect](simd_reflect-7c8f9.md): Returns the reflection direction of an incident vector and a unit normal vector.
- [simd_refract](simd_refract-4ani9.md): Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.

### Vector Norm Functions

- [simd_norm_one](simd_norm_one-10wox.md): Returns the sum of the absolute values of a vector.
- [simd_norm_inf](simd_norm_inf-91byc.md): Returns the maximum absolute value of a vector.

### Length and Distance Functions

- [simd_length](simd_length-3oaj5.md): Returns the length of a vector.
- [simd_fast_length](simd_fast_length-59e3i.md): Returns the fast length of a vector.
- [simd_precise_length](simd_precise_length-77yjg.md): Returns the precise length of a vector.
- [simd_length_squared](simd_length_squared-3e3uf.md): Returns the square of the length of a vector.
- [simd_distance](simd_distance-2d51k.md): Returns the distance between two vectors.
- [simd_fast_distance](simd_fast_distance-3vbs7.md): Returns the fast distance between two vectors.
- [simd_precise_distance](simd_precise_distance-3dnn0.md): Returns the precise distance between two vectors.
- [simd_distance_squared](simd_distance_squared-7xzck.md): Returns the square of the distance between two vectors.

### Hyperbolic Functions

- [acosh](acosh.md): Returns the inverse hyperbolic cosine of each element in a vector.
- [asinh](asinh.md): Returns the inverse hyperbolic sine of each element in a vector.
- [atanh](atanh.md): Returns the inverse hyperbolic tangent of each element in a vector.
- [cosh](cosh.md): Returns the hyperbolic cosine of each element in a vector.
- [sinh](sinh.md): Returns the hyperbolic sine of each element in a vector.
- [tanh](tanh.md): Returns the hyperbolic tangent of each element in a vector.

### Logic Functions

- [simd_select](simd_select%28______%29-7sz6k.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect](simd_bitselect%28______%29-3ys1a.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Math Functions

- [cbrt](cbrt.md): Returns the cube root of each element in a vector.
- [copysign](copysign.md): Returns each element of a vector, with the sign of the corresponding element in a second vector.
- [erf](erf.md): Returns the error function for each element in a vector.
- [erfc](erfc.md): Returns the complementary error function for each element in a vector.
- [fabs](fabs.md): Returns the absolute value of each element in a vector.
- [fdim](fdim.md): Returns the positive difference between corresponding elements in two vectors.
- [fma](fma.md): Returns the multiply-add result for corresponding elements in three vectors.
- [fmod](fmod.md): Returns the modulus after dividing each element in a vector by the corresponding element in a second vector.
- [hypot](hypot.md): Returns the hypotenuse of a right-angled triangle with the sides that are adjacent to the right angle that two vectors define.
- [nextafter](nextafter.md): Returns the next representable value of each element in a vector in the direction of the corresponding element in a second vector.
- [pow](pow.md): Returns each element in a vector raised to the power of the corresponding element in a second vector.
- [remainder](remainder.md): Returns the remainder after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [rint](rint.md): Returns each element in a vector rounded to the nearest integer in the specified direction.
- [round](round.md): Returns each element in a vector rounded to the nearest integer.
- [simd_muladd](simd_muladd%28______%29-o9lv.md): Returns the multiply-add result for corresponding elements in three vectors.
- [sqrt](sqrt.md): Returns the square root of each element in a vector.
- [tgamma](tgamma.md): Returns the gamma function for each element in a vector.

### Trigonometric Functions

- [acos](acos.md): Returns the arccosine of each element in a vector.
- [asin](asin.md): Returns the arcsine of each element in a vector.
- [atan](atan.md): Returns the arctangent of each element in a vector.
- [atan2](atan2.md): Returns the arctangent of each pair of corresponding elements in two vectors.
- [cos](cos.md): Returns the cosine of each element in a vector.
- [cospi](cospi.md): Returns the cosine of each element in a vector multiplied by pi.
- [sin](sin.md): Returns the sine of each element in a vector.
- [sinpi](sinpi.md): Returns the sine of each element in a vector multiplied by pi.
- [tan](tan.md): Returns the tangent of each element in a vector.
- [tanpi](tanpi.md): Returns the tangent of each element in a vector multiplied by pi.

### Alternative Type Alias

- [vector_double2](vector_double2.md)

## See Also

### Vector data types

- [simd_double1](simd_double1.md): A vector of one 64-bit floating-point element.
- [simd_double3](simd_double3.md): A vector of three 64-bit floating-point elements.
- [simd_double4](simd_double4.md): A vector of four 64-bit floating-point elements.
- [simd_double8](simd_double8.md): A vector of eight 64-bit floating-point elements.
