> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double4](https://developer.apple.com/documentation/simd/simd_double4)

# simd_double4 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 64-bit floating-point elements.

## Declaration

```swift
typealias simd_double4 = SIMD4<Double>
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_double4(\_:)](simd_make_double4%28__%29-3ft6m.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_double4(\_:)](simd_make_double4%28__%29-3jd0t.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_double4(\_:)](simd_make_double4%28__%29-3ofj0.md): Returns a new vector from the specified vector.
- [simd_make_double4(\_:)](simd_make_double4%28__%29-41bao.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_double4(\_:\_:)](simd_make_double4%28____%29-68v0e.md): Returns a new vector from the specified vectors.
- [simd_make_double4_undef(\_:)](simd_make_double4_undef%28__%29-6brs0.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_double4_undef(\_:)](simd_make_double4_undef%28__%29-68wqb.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_double4(\_:)](simd_make_double4%28__%29-2zeiq.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_double4(\_:\_:\_:\_:)](simd_make_double4%28________%29.md): Returns a new vector from the specified scalar values.
- [simd_make_double4_undef(\_:)](simd_make_double4_undef%28__%29-22old.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_double4(\_:\_:\_:)](simd_make_double4%28______%29-51v00.md): Returns a new vector from two scalar values and a vector.
- [simd_make_double4(\_:\_:\_:)](simd_make_double4%28______%29-8f2vh.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_double4(\_:\_:)](simd_make_double4%28____%29-1ifzl.md): Returns a new vector from a scalar value and a vector.
- [simd_make_double4(\_:\_:\_:)](simd_make_double4%28______%29-8b5fy.md): Returns a new vector from a vector and scalar values.
- [simd_make_double4(\_:\_:)](simd_make_double4%28____%29-767qm.md): Returns a new vector from a vector and a scalar value.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-81rjc.md): Returns the absolute value of each element in a vector.
- [abs(\_:)](abs%28__%29-63bb7.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-8skia.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-3iua3.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-51jkt.md): Returns each element in a vector clamped to a specified range.
- [simd_fract(\_:)](simd_fract%28__%29-3w3dh.md): Returns the fractional part of each element in a vector.
- [fract(\_:)](fract%28__%29-8mowg.md): Returns the fractional part of each element in a vector.
- [simd_equal(\_:\_:)](simd_equal%28____%29-6lpka.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_sign(\_:)](simd_sign%28__%29-74z7b.md): Returns the sign of each element in a vector.
- [sign(\_:)](sign%28__%29-86tur.md): Returns the sign of each element in a vector.
- [simd_step(\_:\_:)](simd_step%28____%29-6nrf4.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.
- [step(\_:edge:)](step%28__edge_%29-641e1.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce Functions

- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2ymlg.md): Returns the sum of all elements in a vector.
- [reduce_add(\_:)](reduce_add%28__%29-7psay.md): Returns the sum of all elements in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4qv3y.md): Returns the maximum value in a vector.
- [reduce_max(\_:)](reduce_max%28__%29-66smw.md): Returns the maximum value in a vector.
- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-4umgm.md): Returns the minimum value in a vector.
- [reduce_min(\_:)](reduce_min%28__%29-4bbr.md): Returns the minimum value in a vector.

### Interpolation Functions

- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-6idlb.md): Returns an element-wise smoothly interpolated value between two vectors.
- [smoothstep(\_:edge0:edge1:)](smoothstep%28__edge0_edge1_%29-3gmrv.md): Returns an element-wise smoothly interpolated value between two vectors.
- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-49aeg.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-9jxxl.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-92fbo.md): Returns an element-wise linearly interpolated value between two vectors.

### Extrema Functions

- [simd_max(\_:\_:)](simd_max%28____%29-72b4.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-82ig0.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-4pgdo.md): Returns the maximum value of each element in a vector.
- [fmax(\_:\_:)](fmax%28____%29-60f6g.md): Returns the maximum value of each element in a vector.
- [simd_min(\_:\_:)](simd_min%28____%29-78g6s.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-7rmn.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-8m4sw.md): Returns the minimum value of each element in a vector.
- [fmin(\_:\_:)](fmin%28____%29-4joph.md): Returns the minimum value of each element in a vector.

### Reciprocal and Reciprocal Square Root Functions

- [simd_recip(\_:)](simd_recip%28__%29-8218m.md): Returns the reciprocal of each element in a vector.
- [recip(\_:)](recip%28__%29-2zcya.md): Returns the reciprocal of each element in a vector.
- [simd_rsqrt(\_:)](simd_rsqrt%28__%29-i5ka.md): Returns the reciprocal square root of each element in a vector.
- [rsqrt(\_:)](rsqrt%28__%29-8rb58.md): Returns the reciprocal square root of each element in a vector.
- [simd_precise_recip(\_:)](simd_precise_recip%28__%29-6pt5q.md): Returns the precise reciprocal of each element in a vector.
- [simd_precise_rsqrt(\_:)](simd_precise_rsqrt%28__%29-136bw.md): Returns the precise reciprocal square root of each element in a vector.
- [simd_fast_recip(\_:)](simd_fast_recip%28__%29-61j.md): Returns the fast reciprocal of each element in a vector.
- [simd_fast_rsqrt(\_:)](simd_fast_rsqrt%28__%29-8p6tk.md): Returns the fast reciprocal square root of each element in a vector.

### Exponential and Logarithmic Functions

- [exp(\_:)](exp%28__%29-92zj.md): Returns *e* raised to the power of each element in a vector.
- [exp2(\_:)](exp2%28__%29-6nz50.md): Returns 2 raised to the power of each element in a vector.
- [exp10(\_:)](exp10%28__%29-apfo.md): Returns 10 raised to the power of each element in a vector.
- [expm1(\_:)](expm1%28__%29-4osfq.md): Returns *eˣ-1* for each element in a vector.
- [log(\_:)](log%28__%29-54908.md): Returns the natural logarithm of each element in a vector.
- [log2(\_:)](log2%28__%29-2m5uu.md): Returns the base 2 logarithm of each element in a vector.
- [log10(\_:)](log10%28__%29-80x29.md): Returns the base 10 logarithm of each element in a vector.
- [log1p(\_:)](log1p%28__%29-t4r0.md): Returns *log(1+x)* of each element in a vector.

### Geometry Functions

- [dot(\_:\_:)](dot%28____%29-5ifd.md): Returns the dot product of two vectors.
- [normalize(\_:)](normalize%28__%29-3lhrd.md): Returns a vector pointing in the same direction of the supplied vector with a length of 1.
- [project(\_:\_:)](project%28____%29-1uuxo.md): Returns the first vector projected onto the second vector.
- [reflect(\_:n:)](reflect%28__n_%29-1nabs.md): Returns the reflection direction of an incident vector and a unit normal vector.
- [refract(\_:n:eta:)](refract%28__n_eta_%29-2macj.md): Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.

### Vector Norm Functions

- [norm_one(\_:)](norm_one%28__%29-1cwpd.md): Returns the sum of the absolute values of a vector.
- [norm_inf(\_:)](norm_inf%28__%29-8zws7.md): Returns the maximum absolute value of a vector.

### Length and Distance Functions

- [length(\_:)](length%28__%29-79i68.md): Returns the length of a vector.
- [length_squared(\_:)](length_squared%28__%29-856uz.md): Returns the square of the length of a vector.
- [distance(\_:\_:)](distance%28____%29-559m9.md): Returns the distance between two vectors.
- [distance_squared(\_:\_:)](distance_squared%28____%29-73nv3.md): Returns the square of the distance between two vectors.

### Hyperbolic Functions

- [acosh(\_:)](acosh%28__%29-2a3a.md): Returns the inverse hyperbolic cosine of each element in a vector.
- [asinh(\_:)](asinh%28__%29-847y.md): Returns the inverse hyperbolic sine of each element in a vector.
- [atanh(\_:)](atanh%28__%29-17pza.md): Returns the inverse hyperbolic tangent of each element in a vector.
- [cosh(\_:)](cosh%28__%29-8h0te.md): Returns the hyperbolic cosine of each element in a vector.
- [sinh(\_:)](sinh%28__%29-3rjw6.md): Returns the hyperbolic sine of each element in a vector.
- [tanh(\_:)](tanh%28__%29-x8vt.md): Returns the hyperbolic tangent of each element in a vector.

### Logic Functions

- [simd_select(\_:\_:\_:)](simd_select%28______%29-tq6k.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-1mn6g.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Math Functions

- [cbrt(\_:)](cbrt%28__%29-7pm3s.md): Returns the cube root of each element in a vector.
- [ceil(\_:)](ceil%28__%29-9s503.md): Returns the ceiling of each element in a vector.
- [erf(\_:)](erf%28__%29-1yjjk.md): Returns the error function for each element in a vector.
- [erfc(\_:)](erfc%28__%29-6rgzx.md): Returns the complementary error function for each element in a vector.
- [floor(\_:)](floor%28__%29-3956i.md): Returns the floor of each element in a vector.
- [fma(\_:\_:\_:)](fma%28______%29-6mqpv.md): Returns the multiply-add result for corresponding elements in three vectors.
- [fmod(\_:\_:)](fmod%28____%29-92tjw.md): Returns the modulus after dividing each element in a vector by the corresponding element in a second vector.
- [hypot(\_:\_:)](hypot%28____%29-2exik.md): Returns the hypotenuse of a right-angled triangle with the sides that are adjacent to the right angle that two vectors define.
- [lgamma(\_:)](lgamma%28__%29-2frmv.md): Returns the natural logarithm of the absolute value of the gamma function of each element in a vector.
- [nextafter(\_:\_:)](nextafter%28____%29-oxq7.md): Returns the next representable value of each element in a vector in the direction of the corresponding element in a second vector.
- [pow(\_:\_:)](pow%28____%29-3jh7o.md): Returns each element in a vector raised to the power of the corresponding element in a second vector.
- [remainder(\_:\_:)](remainder%28____%29-jw8b.md): Returns the remainder after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [round(\_:)](round%28__%29-5ytc6.md): Returns each element in a vector rounded to the nearest integer.
- [simd_muladd(\_:\_:\_:)](simd_muladd%28______%29-6kpyx.md): Returns the multiply-add result for corresponding elements in three vectors.
- [tgamma(\_:)](tgamma%28__%29-2o8vo.md): Returns the gamma function for each element in a vector.
- [trunc(\_:)](trunc%28__%29-9n2h5.md): Returns each element in a vector rounded toward zero to the nearest integer.

### Trigonometric Functions

- [acos(\_:)](acos%28__%29-9cb48.md): Returns the arccosine of each element in a vector.
- [asin(\_:)](asin%28__%29-70soc.md): Returns the arcsine of each element in a vector.
- [atan(\_:)](atan%28__%29-5w6c7.md): Returns the arctangent of each element in a vector.
- [atan2(\_:\_:)](atan2%28____%29-19fnn.md): Returns the arctangent of each pair of corresponding elements in two vectors.
- [cos(\_:)](cos%28__%29-1leci.md): Returns the cosine of each element in a vector.
- [cospi(\_:)](cospi%28__%29-8cke2.md): Returns the cosine of each element in a vector multiplied by pi.
- [sin(\_:)](sin%28__%29-67ulu.md): Returns the sine of each element in a vector.
- [sinpi(\_:)](sinpi%28__%29-45nf0.md): Returns the sine of each element in a vector multiplied by pi.
- [sincos(\_:)](sincos%28__%29-9olep.md): Returns the sine and cosine of each element in a vector.
- [sincospi(\_:)](sincospi%28__%29-40ymv.md): Returns the sine and cosine of each element in a vector multiplied by pi.
- [tan(\_:)](tan%28__%29-5zsp2.md): Returns the tangent of each element in a vector.
- [tanpi(\_:)](tanpi%28__%29-54qo6.md): Returns the tangent of each element in a vector multiplied by pi.

### Classification Functions

- [isfinite(\_:)](isfinite%28__%29-1870d.md): Returns true for each element that is finite in a vector.
- [isinf(\_:)](isinf%28__%29-4gutc.md): Returns true for each element that is infinite in a vector.
- [isnan(\_:)](isnan%28__%29-94v5c.md): Returns true for each element that is not a number (NaN) in a vector.
- [isnormal(\_:)](isnormal%28__%29-35fxl.md): Returns true for each element that is normal in a vector.

### Alternative Type Alias

- [vector_double4](vector_double4.md)
- [double4](double4.md): Deprecated.

## See Also

### Vector data types

- [simd_double1](simd_double1.md): A vector of one 64-bit floating-point element.
- [simd_double2](simd_double2.md): A vector of two 64-bit floating-point elements.
- [simd_double3](simd_double3.md): A vector of three 64-bit floating-point elements.
- [simd_double8](simd_double8.md): A vector of eight 64-bit floating-point elements.

# simd_double4 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 64-bit floating-point elements.

## Declaration

```objectivec
typedef double __attribute__((ext_vector_type(4))) simd_double4;
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_double4](simd_make_double4%28__%29-3ft6m.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_double4](simd_make_double4%28__%29-3jd0t.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_double4](simd_make_double4%28__%29-3ofj0.md): Returns a new vector from the specified vector.
- [simd_make_double4](simd_make_double4%28__%29-41bao.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_double4](simd_make_double4%28____%29-68v0e.md): Returns a new vector from the specified vectors.
- [vector4](vector4-15myv.md): Returns a new vector from the specified vectors.
- [simd_make_double4_undef](simd_make_double4_undef%28__%29-6brs0.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_double4_undef](simd_make_double4_undef%28__%29-68wqb.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_double4](simd_make_double4%28__%29-2zeiq.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_double4](simd_make_double4%28________%29.md): Returns a new vector from the specified scalar values.
- [vector4](vector4-4b8da.md): Returns a new vector from the specified scalar values.
- [simd_make_double4_undef](simd_make_double4_undef%28__%29-22old.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_double4](simd_make_double4%28______%29-51v00.md): Returns a new vector from two scalar values and a vector.
- [simd_make_double4](simd_make_double4%28______%29-8f2vh.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_double4](simd_make_double4%28____%29-1ifzl.md): Returns a new vector from a scalar value and a vector.
- [simd_make_double4](simd_make_double4%28______%29-8b5fy.md): Returns a new vector from a vector and scalar values.
- [simd_make_double4](simd_make_double4%28____%29-767qm.md): Returns a new vector from a vector and a scalar value.
- [vector4](vector4-23zx8.md): Returns a new vector from a vector and a scalar value.

### Functions to Create Four-Element Vectors From Vectors of Other Types

- [simd_double](simd_double-5p2h2.md): Returns a new vector from the specified vector of 8-bit, signed-integer elements.
- [simd_double](simd_double-5osau.md): Returns a new vector from the specified vector of 8-bit, unsigned-integer elements.
- [simd_double](simd_double-5oxie.md): Returns a new vector from the specified vector of 16-bit, signed-integer elements.
- [simd_double](simd_double-5onhi.md): Returns a new vector from the specified vector of 16-bit, unsigned-integer elements.
- [simd_double](simd_double-5p456.md): Returns a new vector from the specified vector of 32-bit, signed-integer elements.
- [simd_double](simd_double-5ouey.md): Returns a new vector from the specified vector of 32-bit, unsigned-integer elements.
- [simd_double](simd_double-5p376.md): Returns a new vector from the specified vector of 64-bit, signed-integer elements.
- [simd_double](simd_double-5ot9u.md): Returns a new vector from the specified vector of 64-bit, unsigned-integer elements.
- [simd_double](simd_double-5orke.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_double](simd_double-5oqzm.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-81rjc.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-8skia.md): Returns each element in a vector clamped to a specified range.
- [simd_fract](simd_fract%28__%29-3w3dh.md): Returns the fractional part of each element in a vector.
- [simd_equal](simd_equal%28____%29-6lpka.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_sign](simd_sign%28__%29-74z7b.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-6nrf4.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce Functions

- [simd_reduce_add](simd_reduce_add%28__%29-2ymlg.md): Returns the sum of all elements in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4qv3y.md): Returns the maximum value in a vector.
- [simd_reduce_min](simd_reduce_min%28__%29-4umgm.md): Returns the minimum value in a vector.

### Interpolation Functions

- [simd_smoothstep](simd_smoothstep%28______%29-6idlb.md): Returns an element-wise smoothly interpolated value between two vectors.
- [simd_mix](simd_mix%28______%29-49aeg.md): Returns an element-wise linearly interpolated value between two vectors.

### Extrema Functions

- [simd_max](simd_max%28____%29-72b4.md): Returns the maximum value of each element in a vector.
- [simd_min](simd_min%28____%29-78g6s.md): Returns the minimum value of each element in a vector.

### Reciprocal and Reciprocal Square Root Functions

- [simd_recip](simd_recip%28__%29-8218m.md): Returns the reciprocal of each element in a vector.
- [simd_rsqrt](simd_rsqrt%28__%29-i5ka.md): Returns the reciprocal square root of each element in a vector.
- [simd_precise_recip](simd_precise_recip%28__%29-6pt5q.md): Returns the precise reciprocal of each element in a vector.
- [simd_precise_rsqrt](simd_precise_rsqrt%28__%29-136bw.md): Returns the precise reciprocal square root of each element in a vector.
- [simd_fast_recip](simd_fast_recip%28__%29-61j.md): Returns the fast reciprocal of each element in a vector.
- [simd_fast_rsqrt](simd_fast_rsqrt%28__%29-8p6tk.md): Returns the fast reciprocal square root of each element in a vector.

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

- [simd_dot](simd_dot-85nay.md): Returns the dot product of two vectors.
- [simd_normalize](simd_normalize-9o7wa.md): Returns a vector pointing in the same direction of the supplied vector, with a length of 1.
- [simd_fast_normalize](simd_fast_normalize-3rv7.md): Returns the fast normalized vector.
- [simd_precise_normalize](simd_precise_normalize-4vtps.md): Returns the precise normalized vector.
- [simd_project](simd_project-6cfku.md): Returns the first vector projected onto the second vector.
- [simd_fast_project](simd_fast_project-6urv1.md): Returns the fast projected vector.
- [simd_precise_project](simd_precise_project-1f1gc.md): Returns the precise projected vector.
- [simd_reflect](simd_reflect-91ah5.md): Returns the reflection direction of an incident vector and a unit normal vector.
- [simd_refract](simd_refract-7dskm.md): Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.

### Vector Norm Functions

- [simd_norm_one](simd_norm_one-scnf.md): Returns the sum of the absolute values of a vector.
- [simd_norm_inf](simd_norm_inf-97qpi.md): Returns the maximum absolute value of a vector.

### Length and Distance Functions

- [simd_length](simd_length-3fo5n.md): Returns the length of a vector.
- [simd_fast_length](simd_fast_length-4okp0.md): Returns the fast length of a vector.
- [simd_precise_length](simd_precise_length-7dt8e.md): Returns the precise length of a vector.
- [simd_length_squared](simd_length_squared-2t7x9.md): Returns the square of the length of a vector.
- [simd_distance](simd_distance-9rhec.md): Returns the distance between two vectors.
- [simd_fast_distance](simd_fast_distance-13ukv.md): Returns the fast distance between two vectors.
- [simd_precise_distance](simd_precise_distance-5ywfl.md): Returns the precise distance between two vectors.
- [simd_distance_squared](simd_distance_squared-42eds.md): Returns the square of the distance between two vectors.

### Hyperbolic Functions

- [acosh](acosh.md): Returns the inverse hyperbolic cosine of each element in a vector.
- [asinh](asinh.md): Returns the inverse hyperbolic sine of each element in a vector.
- [atanh](atanh.md): Returns the inverse hyperbolic tangent of each element in a vector.
- [cosh](cosh.md): Returns the hyperbolic cosine of each element in a vector.
- [sinh](sinh.md): Returns the hyperbolic sine of each element in a vector.
- [tanh](tanh.md): Returns the hyperbolic tangent of each element in a vector.

### Logic Functions

- [simd_select](simd_select%28______%29-tq6k.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect](simd_bitselect%28______%29-1mn6g.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

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
- [simd_muladd](simd_muladd%28______%29-6kpyx.md): Returns the multiply-add result for corresponding elements in three vectors.
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

- [vector_double4](vector_double4.md)

## See Also

### Vector data types

- [simd_double1](simd_double1.md): A vector of one 64-bit floating-point element.
- [simd_double2](simd_double2.md): A vector of two 64-bit floating-point elements.
- [simd_double3](simd_double3.md): A vector of three 64-bit floating-point elements.
- [simd_double8](simd_double8.md): A vector of eight 64-bit floating-point elements.
