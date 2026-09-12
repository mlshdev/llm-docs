> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double3](https://developer.apple.com/documentation/simd/simd_double3)

# simd_double3 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 64-bit floating-point elements.

## Declaration

```swift
typealias simd_double3 = SIMD3<Double>
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_double3(\_:)](simd_make_double3%28__%29-5ti92.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_double3(\_:)](simd_make_double3%28__%29-5qigh.md): Returns a new vector from the specified vector.
- [simd_make_double3(\_:)](simd_make_double3%28__%29-5zuas.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_double3(\_:)](simd_make_double3%28__%29-4tl5k.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_double3_undef(\_:)](simd_make_double3_undef%28__%29-95a07.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_double3(\_:)](simd_make_double3%28__%29-3qbde.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_double3(\_:\_:\_:)](simd_make_double3%28______%29.md): Returns a new vector from the specified scalar values.
- [simd_make_double3_undef(\_:)](simd_make_double3_undef%28__%29-38cg2.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_double3(\_:\_:)](simd_make_double3%28____%29-2va6.md): Returns a new vector from a scalar value and a vector.
- [simd_make_double3(\_:\_:)](simd_make_double3%28____%29-3b3z3.md): Returns a new vector from a vector and a scalar value.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-8db3x.md): Returns the absolute value of each element in a vector.
- [abs(\_:)](abs%28__%29-8miv.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-2jao.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-5otf7.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-6m2so.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-4v2cb.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract(\_:)](simd_fract%28__%29-47n4w.md): Returns the fractional part of each element in a vector.
- [fract(\_:)](fract%28__%29-swov.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-6goju.md): Returns the sign of each element in a vector.
- [sign(\_:)](sign%28__%29-2qtea.md): Returns the sign of each element in a vector.
- [simd_step(\_:\_:)](simd_step%28____%29-2gbx7.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.
- [step(\_:edge:)](step%28__edge_%29-4azct.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce Functions

- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2v7l1.md): Returns the sum of all elements in a vector.
- [reduce_add(\_:)](reduce_add%28__%29-3112d.md): Returns the sum of all elements in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4gytr.md): Returns the maximum value in a vector.
- [reduce_max(\_:)](reduce_max%28__%29-96cb3.md): Returns the maximum value in a vector.
- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-46by3.md): Returns the miniumum value in a vector.
- [reduce_min(\_:)](reduce_min%28__%29-9g9a6.md): Returns the miniumum value in a vector.

### Interpolation Functions

- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-46dv1.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-1dp7m.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-5ifg3.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-9hwr9.md): Returns an element-wise smoothly interpolated value between two vectors.
- [smoothstep(\_:edge0:edge1:)](smoothstep%28__edge0_edge1_%29-5ih1o.md): Returns an element-wise smoothly interpolated value between two vectors.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-5xqg7.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-7hm19.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-32b0w.md): Returns the minimum value of each element in a vector.
- [fmin(\_:\_:)](fmin%28____%29-6p9y.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-6ykq4.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-1mzkc.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-9e6ry.md): Returns the maximum value of each element in a vector.
- [fmax(\_:\_:)](fmax%28____%29-4pce8.md): Returns the maximum value of each element in a vector.

### Reciprocal and Reciprocal Square Root Functions

- [simd_recip(\_:)](simd_recip%28__%29-8jzqn.md): Returns the reciprocal of each element in a vector.
- [recip(\_:)](recip%28__%29-6uvj7.md): Returns the reciprocal of each element in a vector.
- [simd_rsqrt(\_:)](simd_rsqrt%28__%29-rhpf.md): Returns the reciprocal square root of each element in a vector.
- [rsqrt(\_:)](rsqrt%28__%29-6298y.md): Returns the reciprocal square root of each element in a vector.
- [simd_precise_recip(\_:)](simd_precise_recip%28__%29-61i77.md): Returns the precise reciprocal of each element in a vector.
- [simd_precise_rsqrt(\_:)](simd_precise_rsqrt%28__%29-zrh9.md): Returns the precise reciprocal square root of each element in a vector.
- [simd_fast_recip(\_:)](simd_fast_recip%28__%29-ogui.md): Returns the fast reciprocal of each element in a vector.
- [simd_fast_rsqrt(\_:)](simd_fast_rsqrt%28__%29-80w49.md): Returns the fast reciprocal square root of each element in a vector.

### Exponential and Logarithmic Functions

- [exp(\_:)](exp%28__%29-zash.md): Returns *e* raised to the power of each element in a vector.
- [exp2(\_:)](exp2%28__%29-26tvo.md): Returns 2 raised to the power of each element in a vector.
- [exp10(\_:)](exp10%28__%29-88dd5.md): Returns 10 raised to the power of each element in a vector.
- [expm1(\_:)](expm1%28__%29-2ag4r.md): Returns *eˣ-1* for each element in a vector.
- [log(\_:)](log%28__%29-70ujd.md): Returns the natural logarithm of each element in a vector.
- [log2(\_:)](log2%28__%29-3p8ex.md): Returns the base 2 logarithm of each element in a vector.
- [log10(\_:)](log10%28__%29-1eshe.md): Returns the base 10 logarithm of each element in a vector.
- [log1p(\_:)](log1p%28__%29-50npd.md): Returns *log(1+x)* of each element in a vector.

### Geometry Functions

- [cross(\_:\_:)](cross%28____%29-7sd7t.md): Returns the cross product of two vectors.
- [dot(\_:\_:)](dot%28____%29-2sdb.md): Returns the dot product of two vectors.
- [normalize(\_:)](normalize%28__%29-29n8k.md): Returns a vector pointing in the same direction of the supplied vector with a length of 1.
- [project(\_:\_:)](project%28____%29-9jlig.md): Returns the first vector projected onto the second vector.
- [reflect(\_:n:)](reflect%28__n_%29-1vw0n.md): Returns the reflection direction of an incident vector and a unit normal vector.
- [refract(\_:n:eta:)](refract%28__n_eta_%29-13wsy.md): Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.

### Vector Norm Functions

- [norm_one(\_:)](norm_one%28__%29-mrh.md): Returns the sum of the absolute values of a vector.
- [norm_inf(\_:)](norm_inf%28__%29-7ga8i.md): Returns the maximum absolute value of a vector.

### Length and Distance Functions

- [length(\_:)](length%28__%29-907xq.md): Returns the length of a vector.
- [length_squared(\_:)](length_squared%28__%29-620zs.md): Returns the square of the length of a vector.
- [distance(\_:\_:)](distance%28____%29-57zfj.md): Returns the distance between two vectors.
- [distance_squared(\_:\_:)](distance_squared%28____%29-4erc0.md)

### Hyperbolic Functions

- [acosh(\_:)](acosh%28__%29-1e4qf.md): Returns the inverse hyperbolic cosine of each element in a vector.
- [asinh(\_:)](asinh%28__%29-8b3vg.md): Returns the inverse hyperbolic sine of each element in a vector.
- [atanh(\_:)](atanh%28__%29-7z6qz.md): Returns the inverse hyperbolic tangent of each element in a vector.
- [cosh(\_:)](cosh%28__%29-6f3bc.md): Returns the hyperbolic cosine of each element in a vector.
- [sinh(\_:)](sinh%28__%29-6glq8.md): Returns the hyperbolic sine of each element in a vector.
- [tanh(\_:)](tanh%28__%29-4b44y.md): Returns the hyperbolic tangent of each element in a vector.

### Logic Functions

- [simd_select(\_:\_:\_:)](simd_select%28______%29-1aiih.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-mtv1.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Math Functions

- [cbrt(\_:)](cbrt%28__%29-38h14.md): Returns the cube root of each element in a vector.
- [ceil(\_:)](ceil%28__%29-72yci.md): Returns the ceiling of each element in a vector.
- [erf(\_:)](erf%28__%29-8eer2.md): Returns the error function for each element in a vector.
- [erfc(\_:)](erfc%28__%29-7ux6y.md): Returns the complementary error function for each element in a vector.
- [floor(\_:)](floor%28__%29-262rp.md): Returns the floor of each element in a vector.
- [fma(\_:\_:\_:)](fma%28______%29-6w3jf.md): Returns the multiply-add result for corresponding elements in three vectors.
- [fmod(\_:\_:)](fmod%28____%29-16oie.md): Returns the modulus after dividing each element in a vector by the corresponding element in a second vector.
- [hypot(\_:\_:)](hypot%28____%29-5z7ry.md): Returns the hypotenuse of a right-angled triangle with the sides that are adjacent to the right angle that two vectors define.
- [lgamma(\_:)](lgamma%28__%29-4lks7.md): Returns the natural logarithm of the absolute value of the gamma function of each element in a vector.
- [nextafter(\_:\_:)](nextafter%28____%29-7qi1e.md): Returns the next representable value of each element in a vector in the direction of the corresponding element in a second vector.
- [pow(\_:\_:)](pow%28____%29-6hgod.md): Returns each element in a vector raised to the power of the corresponding element in a second vector.
- [remainder(\_:\_:)](remainder%28____%29-28w7v.md): Returns the remainder after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [round(\_:)](round%28__%29-3e7l9.md): Returns each element in a vector rounded to the nearest integer.
- [simd_muladd(\_:\_:\_:)](simd_muladd%28______%29-74qpk.md): Returns the multiply-add result for corresponding elements in three vectors.
- [tgamma(\_:)](tgamma%28__%29-98alm.md): Returns the gamma function for each element in a vector.
- [trunc(\_:)](trunc%28__%29-4p8mg.md): Returns each element in a vector rounded toward zero to the nearest integer.

### Trigonometric Functions

- [acos(\_:)](acos%28__%29-76i0e.md): Returns the arccosine of each element in a vector.
- [asin(\_:)](asin%28__%29-g6mp.md): Returns the arcsine of each element in a vector.
- [atan(\_:)](atan%28__%29-2h77h.md): Returns the arctangent of each element in a vector.
- [atan2(\_:\_:)](atan2%28____%29-1zx4a.md): Returns the arctangent of each pair of corresponding elements in two vectors.
- [cos(\_:)](cos%28__%29-9hw4a.md): Returns the cosine of each element in a vector.
- [cospi(\_:)](cospi%28__%29-471sg.md): Returns the cosine of each element in a vector multiplied by pi.
- [sin(\_:)](sin%28__%29-5dnnn.md): Returns the sine of each element in a vector.
- [sinpi(\_:)](sinpi%28__%29-291vx.md): Returns the sine of each element in a vector multiplied by pi.
- [sincos(\_:)](sincos%28__%29-6572x.md): Returns the sine and cosine of each element in a vector.
- [sincospi(\_:)](sincospi%28__%29-2t5q7.md): Returns the sine and cosine of each element in a vector multiplied by pi.
- [tan(\_:)](tan%28__%29-2tvur.md): Returns the tangent of each element in a vector.
- [tanpi(\_:)](tanpi%28__%29-42odv.md): Returns the tangent of each element in a vector multiplied by pi.

### Classification Functions

- [isfinite(\_:)](isfinite%28__%29-1s3ji.md): Returns true for each element that is finite in a vector.
- [isinf(\_:)](isinf%28__%29-6gve5.md): Returns true for each element that is infinite in a vector.
- [isnan(\_:)](isnan%28__%29-6l7v3.md): Returns true for each element that is not a number (NaN) in a vector.
- [isnormal(\_:)](isnormal%28__%29-8k36k.md): Returns true for each element that is normal in a vector.

### Alternative Type Alias

- [vector_double3](vector_double3.md)
- [double3](double3.md): Deprecated.

## See Also

### Vector data types

- [simd_double1](simd_double1.md): A vector of one 64-bit floating-point element.
- [simd_double2](simd_double2.md): A vector of two 64-bit floating-point elements.
- [simd_double4](simd_double4.md): A vector of four 64-bit floating-point elements.
- [simd_double8](simd_double8.md): A vector of eight 64-bit floating-point elements.

# simd_double3 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 64-bit floating-point elements.

## Declaration

```objectivec
typedef double __attribute__((ext_vector_type(3))) simd_double3;
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_double3](simd_make_double3%28__%29-5ti92.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_double3](simd_make_double3%28__%29-5qigh.md): Returns a new vector from the specified vector.
- [simd_make_double3](simd_make_double3%28__%29-5zuas.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_double3](simd_make_double3%28__%29-4tl5k.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_double3_undef](simd_make_double3_undef%28__%29-95a07.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_double3](simd_make_double3%28__%29-3qbde.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_double3](simd_make_double3%28______%29.md): Returns a new vector from the specified scalar values.
- [vector3](vector3-kp2l.md): Returns a new vector from the specified scalar values.
- [simd_make_double3_undef](simd_make_double3_undef%28__%29-38cg2.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_double3](simd_make_double3%28____%29-2va6.md): Returns a new vector from a scalar value and a vector.
- [simd_make_double3](simd_make_double3%28____%29-3b3z3.md): Returns a new vector from a vector and a scalar value.
- [vector3](vector3-2regp.md): Returns a new vector from a vector and a scalar value.

### Functions to Create Three-Element Vectors From Vectors of Other Types

- [simd_double](simd_double-50ppx.md): Returns a new vector from the specified vector of 8-bit, signed-integer elements.
- [simd_double](simd_double-50fw5.md): Returns a new vector from the specified vector of 8-bit, unsigned-integer elements.
- [simd_double](simd_double-50kxh.md): Returns a new vector from the specified vector of 16-bit, signed-integer elements.
- [simd_double](simd_double-50at1.md): Returns a new vector from the specified vector of 16-bit, unsigned-integer elements.
- [simd_double](simd_double-50rjx.md): Returns a new vector from the specified vector of 32-bit, signed-integer elements.
- [simd_double](simd_double-50hml.md): Returns a new vector from the specified vector of 32-bit, unsigned-integer elements.
- [simd_double](simd_double-50shr.md): Returns a new vector from the specified vector of 64-bit, signed-integer elements.
- [simd_double](simd_double-50irj.md): Returns a new vector from the specified vector of 64-bit, unsigned-integer elements.
- [simd_double](simd_double-50gn7.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_double](simd_double-50g0v.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-8db3x.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-2jao.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-4v2cb.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract](simd_fract%28__%29-47n4w.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-6goju.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-2gbx7.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce Functions

- [simd_reduce_add](simd_reduce_add%28__%29-2v7l1.md): Returns the sum of all elements in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4gytr.md): Returns the maximum value in a vector.
- [simd_reduce_min](simd_reduce_min%28__%29-46by3.md): Returns the miniumum value in a vector.

### Interpolation Functions

- [simd_mix](simd_mix%28______%29-46dv1.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep](simd_smoothstep%28______%29-9hwr9.md): Returns an element-wise smoothly interpolated value between two vectors.

### Extrema Functions

- [simd_min](simd_min%28____%29-5xqg7.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-6ykq4.md): Returns the maximum value of each element in a vector.

### Reciprocal and Reciprocal Square Root Functions

- [simd_recip](simd_recip%28__%29-8jzqn.md): Returns the reciprocal of each element in a vector.
- [simd_rsqrt](simd_rsqrt%28__%29-rhpf.md): Returns the reciprocal square root of each element in a vector.
- [simd_precise_recip](simd_precise_recip%28__%29-61i77.md): Returns the precise reciprocal of each element in a vector.
- [simd_precise_rsqrt](simd_precise_rsqrt%28__%29-zrh9.md): Returns the precise reciprocal square root of each element in a vector.
- [simd_fast_recip](simd_fast_recip%28__%29-ogui.md): Returns the fast reciprocal of each element in a vector.
- [simd_fast_rsqrt](simd_fast_rsqrt%28__%29-80w49.md): Returns the fast reciprocal square root of each element in a vector.

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

- [simd_cross](simd_cross-27rm0.md): Returns the cross product of two vectors.
- [simd_dot](simd_dot-8l0kd.md): Returns the dot product of two vectors.
- [simd_insphere](simd_insphere-88pzx.md): Tests if a double-precision point lies inside, on, or outside a sphere.
- [simd_normalize](simd_normalize-9c477.md): Returns a vector pointing in the same direction of the supplied vector, with a length of 1.
- [simd_fast_normalize](simd_fast_normalize-d0e.md): Returns the fast normalized vector.
- [simd_precise_normalize](simd_precise_normalize-4z8q1.md): Returns the precise normalized vector.
- [simd_orient](simd_orient-4dorr.md): Tests the orientation of the three supplied vectors.
- [simd_orient](simd_orient-5pahm.md): Tests the orientation of the four supplied vectors.
- [simd_project](simd_project-7mlzt.md): Returns the first vector projected onto the second vector.
- [simd_fast_project](simd_fast_project-54ecd.md): Returns the fast projected vector.
- [simd_precise_project](simd_precise_project-3cfbv.md): Returns the precise projected vector.
- [simd_reflect](simd_reflect-26oex.md): Returns the reflection direction of an incident vector and a unit normal vector.
- [simd_refract](simd_refract-8ogip.md): Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.

### Vector Norm Functions

- [simd_norm_one](simd_norm_one-xf5y.md): Returns the sum of the absolute values of a vector.
- [simd_norm_inf](simd_norm_inf-94bsb.md): Returns the maximum absolute value of a vector.

### Length and Distance Functions

- [simd_length](simd_length-3r7wy.md): Returns the length of a vector.
- [simd_fast_length](simd_fast_length-56j8x.md): Returns the fast length of a vector.
- [simd_precise_length](simd_precise_length-7aygj.md): Returns the precise length of a vector.
- [simd_length_squared](simd_length_squared-3hijo.md): Returns the square of the length of a vector.
- [simd_distance](simd_distance-30257.md): Returns the distance between two vectors.
- [simd_fast_distance](simd_fast_distance-9625l.md): Returns the fast distance between two vectors.
- [simd_precise_distance](simd_precise_distance-274w4.md): Returns the precise distance between two vectors.
- [simd_distance_squared](simd_distance_squared-89twb.md): Returns the square of the distance between two vectors.

### Hyperbolic Functions

- [acosh](acosh.md): Returns the inverse hyperbolic cosine of each element in a vector.
- [asinh](asinh.md): Returns the inverse hyperbolic sine of each element in a vector.
- [atanh](atanh.md): Returns the inverse hyperbolic tangent of each element in a vector.
- [cosh](cosh.md): Returns the hyperbolic cosine of each element in a vector.
- [sinh](sinh.md): Returns the hyperbolic sine of each element in a vector.
- [tanh](tanh.md): Returns the hyperbolic tangent of each element in a vector.

### Logic Functions

- [simd_select](simd_select%28______%29-1aiih.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect](simd_bitselect%28______%29-mtv1.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Math Functions

- [cbrt](cbrt.md): Returns the cube root of each element in a vector.
- [copysign](copysign.md): Returns each element of a vector, with the sign of the corresponding element in a second vector.
- [erf](erf.md): Returns the error function for each element in a vector.
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
- [simd_muladd](simd_muladd%28______%29-74qpk.md): Returns the multiply-add result for corresponding elements in three vectors.
- [sqrt](sqrt.md): Returns the square root of each element in a vector.
- [tgamma](tgamma.md): Returns the gamma function for each element in a vector.

### Trigonometric Functions

- [acos](acos.md): Returns the arccosine of each element in a vector.
- [asin](asin.md): Returns the arcsine of each element in a vector.
- [atan](atan.md): Returns the arctangent of each element in a vector.
- [atan2](atan2.md): Returns the arctangent of each pair of corresponding elements in two vectors.
- [cospi](cospi.md): Returns the cosine of each element in a vector multiplied by pi.
- [sin](sin.md): Returns the sine of each element in a vector.
- [sinpi](sinpi.md): Returns the sine of each element in a vector multiplied by pi.
- [tan](tan.md): Returns the tangent of each element in a vector.
- [tanpi](tanpi.md): Returns the tangent of each element in a vector multiplied by pi.

### Alternative Type Alias

- [vector_double3](vector_double3.md)

## See Also

### Vector data types

- [simd_double1](simd_double1.md): A vector of one 64-bit floating-point element.
- [simd_double2](simd_double2.md): A vector of two 64-bit floating-point elements.
- [simd_double4](simd_double4.md): A vector of four 64-bit floating-point elements.
- [simd_double8](simd_double8.md): A vector of eight 64-bit floating-point elements.
