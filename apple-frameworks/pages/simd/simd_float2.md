> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_float2](https://developer.apple.com/documentation/simd/simd_float2)

# simd_float2 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 32-bit floating-point elements.

## Declaration

```swift
typealias simd_float2 = SIMD2<Float>
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_float2(\_:)](simd_make_float2%28__%29-3nphb.md): Returns a new vector from the specified vector.
- [simd_make_float2(\_:)](simd_make_float2%28__%29-3kta4.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_float2(\_:)](simd_make_float2%28__%29-32usp.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_float2(\_:)](simd_make_float2%28__%29-493yd.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_float2(\_:)](simd_make_float2%28__%29-4e6k3.md): Returns a new vector by truncating the specified 16-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_float2(\_:)](simd_make_float2%28__%29-70ndk.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_float2(\_:\_:)](simd_make_float2%28____%29.md): Returns a new vector from the specified scalar values.
- [simd_make_float2_undef(\_:)](simd_make_float2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-886vq.md): Returns the absolute value of each element in a vector.
- [abs(\_:)](abs%28__%29-6ckob.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-9b6uf.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-5rthg.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-3oo0f.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-9z8e8.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract(\_:)](simd_fract%28__%29-42ipv.md): Returns the fractional part of each element in a vector.
- [fract(\_:)](fract%28__%29-7rplw.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-6jld1.md): Returns the sign of each element in a vector.
- [sign(\_:)](sign%28__%29-2e6do.md): Returns the sign of each element in a vector.
- [simd_step(\_:\_:)](simd_step%28____%29-9xjdc.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.
- [step(\_:edge:)](step%28__edge_%29-1pthr.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce Functions

- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2pzn6.md): Returns the sum of all elements in a vector.
- [reduce_add(\_:)](reduce_add%28__%29-39n2m.md): Returns the sum of all elements in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4kjh0.md): Returns the maximum value in a vector.
- [reduce_max(\_:)](reduce_max%28__%29-4zzwq.md): Returns the maximum value in a vector.
- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-49sh0.md): Returns the minimum value in a vector.
- [reduce_min(\_:)](reduce_min%28__%29-76co5.md): Returns the minimum value in a vector.

### Interpolation Functions

- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-bvhh.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-2z3yo.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-14tli.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-7iziv.md): Returns an element-wise smoothly interpolated value between two vectors.
- [smoothstep(\_:edge0:edge1:)](smoothstep%28__edge0_edge1_%29-43udr.md): Returns an element-wise smoothly interpolated value between two vectors.

### Extrema Functions

- [simd_max(\_:\_:)](simd_max%28____%29-6uws6.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-35pzn.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-9ye2a.md): Returns the maximum value of each element in a vector.
- [fmax(\_:\_:)](fmax%28____%29-3cz61.md): Returns the maximum value of each element in a vector.
- [simd_min(\_:\_:)](simd_min%28____%29-9xyee.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-3eaa2.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-6cnnq.md): Returns the minimum value of each element in a vector.
- [fmin(\_:\_:)](fmin%28____%29-7jupb.md): Returns the minimum value of each element in a vector.

### Reciprocal and Reciprocal Square Root Functions

- [simd_recip(\_:)](simd_recip%28__%29-8nf6c.md): Returns the reciprocal of each element in a vector.
- [recip(\_:)](recip%28__%29-2opi.md): Returns the reciprocal of each element in a vector.
- [simd_rsqrt(\_:)](simd_rsqrt%28__%29-okw0.md): Returns the reciprocal square root of each element in a vector.
- [rsqrt(\_:)](rsqrt%28__%29-1er1q.md): Returns the reciprocal square root of each element in a vector.
- [simd_precise_recip(\_:)](simd_precise_recip%28__%29-66mt8.md): Returns the precise reciprocal of each element in a vector.
- [simd_precise_rsqrt(\_:)](simd_precise_rsqrt%28__%29-wqzu.md): Returns the precise reciprocal square root of each element in a vector.
- [simd_fast_recip(\_:)](simd_fast_recip%28__%29-ll5x.md): Returns the fast reciprocal of each element in a vector.
- [simd_fast_rsqrt(\_:)](simd_fast_rsqrt%28__%29-84cs6.md): Returns the fast reciprocal square root of each element in a vector.

### Exponential and Logarithmic Functions

- [exp(\_:)](exp%28__%29-3pa97.md): Returns *e* raised to the power of each element in a vector.
- [exp2(\_:)](exp2%28__%29-6sez2.md): Returns 2 raised to the power of each element in a vector.
- [exp10(\_:)](exp10%28__%29-6ga3o.md): Returns 10 raised to the power of each element in a vector.
- [expm1(\_:)](expm1%28__%29-3bqf9.md): Returns *eˣ-1* for each element in a vector.
- [log(\_:)](log%28__%29-1zfuo.md): Returns the natural logarithm of each element in a vector.
- [log2(\_:)](log2%28__%29-8x5g.md): Returns the base 2 logarithm of each element in a vector.
- [log10(\_:)](log10%28__%29-4yb6z.md): Returns the base 10 logarithm of each element in a vector.
- [log1p(\_:)](log1p%28__%29-15zc7.md): Returns *log(1+x)* of each element in a vector.

### Geometry Functions

- [cross(\_:\_:)](cross%28____%29-53xk2.md): Returns the cross product of two vectors.
- [dot(\_:\_:)](dot%28____%29-1vb5g.md): Returns the dot product of two vectors.
- [normalize(\_:)](normalize%28__%29-100kb.md): Returns a vector pointing in the same direction of the supplied vector with a length of 1.
- [project(\_:\_:)](project%28____%29-9wt83.md): Returns the first vector projected onto the second vector.
- [reflect(\_:n:)](reflect%28__n_%29-6w80i.md): Returns the reflection direction of an incident vector and a unit normal vector.
- [refract(\_:n:eta:)](refract%28__n_eta_%29-5bv79.md): Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.

### Vector Norm Functions

- [norm_one(\_:)](norm_one%28__%29-2y0m.md): Returns the sum of the absolute values of a vector.
- [norm_inf(\_:)](norm_inf%28__%29-9lj66.md): Returns the maximum absolute value of a vector.

### Length and Distance Functions

- [length(\_:)](length%28__%29-6g7q5.md): Returns the length of a vector.
- [length_squared(\_:)](length_squared%28__%29-6tcxv.md): Returns the square of the length of a vector.
- [distance(\_:\_:)](distance%28____%29-1p8ae.md): Returns the distance between two vectors.
- [distance_squared(\_:\_:)](distance_squared%28____%29-9nmpe.md): Returns the square of the distance between two vectors.

### Hyperbolic Functions

- [acosh(\_:)](acosh%28__%29-16wup.md): Returns the inverse hyperbolic cosine of each element in a vector.
- [asinh(\_:)](asinh%28__%29-14lj8.md): Returns the inverse hyperbolic sine of each element in a vector.
- [atanh(\_:)](atanh%28__%29-3o0hv.md): Returns the inverse hyperbolic tangent of each element in a vector.
- [cosh(\_:)](cosh%28__%29-4n03p.md): Returns the hyperbolic cosine of each element in a vector.
- [sinh(\_:)](sinh%28__%29-2ft5c.md): Returns the hyperbolic sine of each element in a vector.
- [tanh(\_:)](tanh%28__%29-8avnx.md): Returns the hyperbolic tangent of each element in a vector.

### Logic Functions

- [simd_select(\_:\_:\_:)](simd_select%28______%29-9jdc0.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-5g70k.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Math Functions

- [cbrt(\_:)](cbrt%28__%29-1t3k.md): Returns the cube root of each element in a vector.
- [ceil(\_:)](ceil%28__%29-8j6zo.md): Returns the ceiling of each element in a vector.
- [erf(\_:)](erf%28__%29-1unjp.md): Returns the error function for each element in a vector.
- [erfc(\_:)](erfc%28__%29-1hisg.md): Returns the complementary error function for each element in a vector.
- [floor(\_:)](floor%28__%29-1e9me.md): Returns the floor of each element in a vector.
- [fma(\_:\_:\_:)](fma%28______%29-69k8u.md): Returns the multiply-add result for corresponding elements in three vectors.
- [fmod(\_:\_:)](fmod%28____%29-566aw.md): Returns the modulus after dividing each element in a vector by the corresponding element in a second vector.
- [hypot(\_:\_:)](hypot%28____%29-1zs4i.md): Returns the hypotenuse of a right-angled triangle with the sides that are adjacent to the right angle that two vectors define.
- [lgamma(\_:)](lgamma%28__%29-1ksbv.md): Returns the natural logarithm of the absolute value of the gamma function of each element in a vector.
- [nextafter(\_:\_:)](nextafter%28____%29-8mat0.md): Returns the next representable value of each element in a vector in the direction of the corresponding element in a second vector.
- [pow(\_:\_:)](pow%28____%29-15e0y.md): Returns each element in a vector raised to the power of the corresponding element in a second vector.
- [remainder(\_:\_:)](remainder%28____%29-37wwd.md): Returns the remainder after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [round(\_:)](round%28__%29-608of.md): Returns each element in a vector rounded to the nearest integer.
- [simd_muladd(\_:\_:\_:)](simd_muladd%28______%29-45h2k.md): Returns the multiply-add result for corresponding elements in three vectors.
- [tgamma(\_:)](tgamma%28__%29-2aqvi.md): Returns the gamma function for each element in a vector.
- [trunc(\_:)](trunc%28__%29-6neoe.md): Returns each element in a vector rounded toward zero to the nearest integer.

### Trigonometric Functions

- [acos(\_:)](acos%28__%29-1ya4v.md): Returns the arccosine of each element in a vector.
- [asin(\_:)](asin%28__%29-4tbvj.md): Returns the arcsine of each element in a vector.
- [atan(\_:)](atan%28__%29-5v3x.md): Returns the arctangent of each element in a vector.
- [atan2(\_:\_:)](atan2%28____%29-4dpoz.md): Returns the arctangent of each pair of corresponding elements in two vectors.
- [cos(\_:)](cos%28__%29-59waa.md): Returns the cosine of each element in a vector.
- [cospi(\_:)](cospi%28__%29-2cd9u.md): Returns the cosine of each element in a vector multiplied by pi.
- [sin(\_:)](sin%28__%29-5k8vo.md): Returns the sine of each element in a vector.
- [sinpi(\_:)](sinpi%28__%29-524r6.md): Returns the sine of each element in a vector multiplied by pi.
- [sincos(\_:)](sincos%28__%29-4uhuq.md): Returns the sine and cosine of each element in a vector.
- [sincospi(\_:)](sincospi%28__%29-11sii.md): Returns the sine and cosine of each element in a vector multiplied by pi.
- [tan(\_:)](tan%28__%29-4rx9f.md): Returns the tangent of each element in a vector.
- [tanpi(\_:)](tanpi%28__%29-3a1w1.md): Returns the tangent of each element in a vector multiplied by pi.

### Classification Functions

- [isfinite(\_:)](isfinite%28__%29-zthr.md): Returns true for each element that is finite in a vector.
- [isinf(\_:)](isinf%28__%29-9bb5h.md): Returns true for each element that is infinite in a vector.
- [isnan(\_:)](isnan%28__%29-7diw7.md): Returns true for each element that is not a number (NaN) in a vector.
- [isnormal(\_:)](isnormal%28__%29-3n6dc.md): Returns true for each element that is normal in a vector.

### Alternative Type Alias

- [vector_float2](vector_float2.md)
- [float2](float2.md): Deprecated.

## See Also

### Vector data types

- [simd_float1](simd_float1.md): A vector of one 32-bit floating-point element.
- [simd_float3](simd_float3.md): A vector of three 32-bit floating-point elements.
- [simd_float4](simd_float4.md): A vector of four 32-bit floating-point elements.
- [simd_float8](simd_float8.md): A vector of eight 32-bit floating-point elements.
- [simd_float16](simd_float16.md): A vector of sixteen 32-bit floating-point elements.

# simd_float2 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 32-bit floating-point elements.

## Declaration

```objectivec
typedef float __attribute__((ext_vector_type(2))) simd_float2;
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_float2](simd_make_float2%28__%29-3nphb.md): Returns a new vector from the specified vector.
- [simd_make_float2](simd_make_float2%28__%29-3kta4.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_float2](simd_make_float2%28__%29-32usp.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_float2](simd_make_float2%28__%29-493yd.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_float2](simd_make_float2%28__%29-4e6k3.md): Returns a new vector by truncating the specified 16-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_float2](simd_make_float2%28__%29-70ndk.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_float2](simd_make_float2%28____%29.md): Returns a new vector from the specified scalar values.
- [vector2](vector2-25p9a.md): Returns a new vector from the specified scalar values.
- [simd_make_float2_undef](simd_make_float2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Two-Element Vectors From Vectors of Other Types

- [simd_float](simd_float-14iup.md): Returns a new vector from the specified vector of 8-bit, signed-integer elements.
- [simd_float](simd_float-148tt.md): Returns a new vector from the specified vector of 8-bit, unsigned-integer elements.
- [simd_float](simd_float-14nqp.md): Returns a new vector from the specified vector of 16-bit, signed-integer elements.
- [simd_float](simd_float-14dwx.md): Returns a new vector from the specified vector of 16-bit, unsigned-integer elements.
- [simd_float](simd_float-14lvd.md): Returns a new vector from the specified vector of 32-bit, signed-integer elements.
- [simd_float](simd_float-14c1l.md): Returns a new vector from the specified vector of 32-bit, unsigned-integer elements.
- [simd_float](simd_float-14mw7.md): Returns a new vector from the specified vector of 64-bit, signed-integer elements.
- [simd_float](simd_float-14cvb.md): Returns a new vector from the specified vector of 64-bit, unsigned-integer elements.
- [simd_float](simd_float-149uz.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_float](simd_float-14afr.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-886vq.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-9b6uf.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-9z8e8.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract](simd_fract%28__%29-42ipv.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-6jld1.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-9xjdc.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce Functions

- [simd_reduce_add](simd_reduce_add%28__%29-2pzn6.md): Returns the sum of all elements in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4kjh0.md): Returns the maximum value in a vector.
- [simd_reduce_min](simd_reduce_min%28__%29-49sh0.md): Returns the minimum value in a vector.

### Interpolation Functions

- [simd_mix](simd_mix%28______%29-bvhh.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep](simd_smoothstep%28______%29-7iziv.md): Returns an element-wise smoothly interpolated value between two vectors.

### Extrema Functions

- [simd_max](simd_max%28____%29-6uws6.md): Returns the maximum value of each element in a vector.
- [simd_min](simd_min%28____%29-9xyee.md): Returns the minimum value of each element in a vector.

### Reciprocal and Reciprocal Square Root Functions

- [simd_recip](simd_recip%28__%29-8nf6c.md): Returns the reciprocal of each element in a vector.
- [simd_rsqrt](simd_rsqrt%28__%29-okw0.md): Returns the reciprocal square root of each element in a vector.
- [simd_precise_recip](simd_precise_recip%28__%29-66mt8.md): Returns the precise reciprocal of each element in a vector.
- [simd_precise_rsqrt](simd_precise_rsqrt%28__%29-wqzu.md): Returns the precise reciprocal square root of each element in a vector.
- [simd_fast_recip](simd_fast_recip%28__%29-ll5x.md): Returns the fast reciprocal of each element in a vector.
- [simd_fast_rsqrt](simd_fast_rsqrt%28__%29-84cs6.md): Returns the fast reciprocal square root of each element in a vector.

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

- [simd_cross](simd_cross-3ukic.md): Returns the cross product of two vectors.
- [simd_dot](simd_dot-3pmfs.md): Returns the dot product of two vectors.
- [simd_incircle](simd_incircle-1bi0y.md): Tests if a single-precision point lies inside, on, or outside a circle.
- [simd_normalize](simd_normalize-9fok8.md): Returns a vector pointing in the same direction of the supplied vector, with a length of 1.
- [simd_fast_normalize](simd_fast_normalize-9wxm2.md): Returns the fast normalized vector.
- [simd_precise_normalize](simd_precise_normalize-54d5a.md): Returns the precise normalized vector.
- [simd_orient](simd_orient-8wej6.md): Tests the orientation of the two supplied vectors.
- [simd_orient](simd_orient-6wf24.md): Tests the orientation of the three supplied vectors.
- [simd_project](simd_project-39liq.md): Returns the first vector projected onto the second vector.
- [simd_precise_project](simd_precise_project-4ei25.md): Returns the precise projected vector.
- [simd_fast_project](simd_fast_project-4chm1.md): Returns the fast projected vector.
- [simd_reflect](simd_reflect-7dnri.md): Returns the reflection direction of an incident vector and a unit normal vector.
- [simd_refract](simd_refract-4vcf3.md): Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.

### Vector Norm Functions

- [simd_norm_one](simd_norm_one-10vvt.md): Returns the sum of the absolute values of a vector.
- [simd_norm_inf](simd_norm_inf-91b24.md): Returns the maximum absolute value of a vector.

### Length and Distance Functions

- [simd_length](simd_length-3ob5d.md): Returns the length of a vector.
- [simd_fast_length](simd_fast_length-59ep6.md): Returns the fast length of a vector.
- [simd_precise_length](simd_precise_length-77xwk.md): Returns the precise length of a vector.
- [simd_length_squared](simd_length_squared-3e32j.md): Returns the square of the length of a vector.
- [simd_distance](simd_distance-598wa.md): Returns the distance between two vectors.
- [simd_fast_distance](simd_fast_distance-2jlix.md): Returns the fast distance between two vectors.
- [simd_precise_distance](simd_precise_distance-8hrn8.md): Returns the precise distance between two vectors.
- [simd_distance_squared](simd_distance_squared-7zevh.md): Returns the square of the distance between two vectors.

### Hyperbolic Functions

- [acosh](acosh.md): Returns the inverse hyperbolic cosine of each element in a vector.
- [asinh](asinh.md): Returns the inverse hyperbolic sine of each element in a vector.
- [atanh](atanh.md): Returns the inverse hyperbolic tangent of each element in a vector.
- [cosh](cosh.md): Returns the hyperbolic cosine of each element in a vector.
- [sinh](sinh.md): Returns the hyperbolic sine of each element in a vector.
- [tanh](tanh.md): Returns the hyperbolic tangent of each element in a vector.

### Logic Functions

- [simd_select](simd_select%28______%29-9jdc0.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect](simd_bitselect%28______%29-5g70k.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

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
- [simd_muladd](simd_muladd%28______%29-45h2k.md): Returns the multiply-add result for corresponding elements in three vectors.
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

- [vector_float2](vector_float2.md)

## See Also

### Vector data types

- [simd_float1](simd_float1.md): A vector of one 32-bit floating-point element.
- [simd_float3](simd_float3.md): A vector of three 32-bit floating-point elements.
- [simd_float4](simd_float4.md): A vector of four 32-bit floating-point elements.
- [simd_float8](simd_float8.md): A vector of eight 32-bit floating-point elements.
- [simd_float16](simd_float16.md): A vector of sixteen 32-bit floating-point elements.
