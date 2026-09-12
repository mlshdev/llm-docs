> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_float4](https://developer.apple.com/documentation/simd/simd_float4)

# simd_float4 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 32-bit floating-point elements.

## Declaration

```swift
typealias simd_float4 = SIMD4<Float>
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_float4(\_:)](simd_make_float4%28__%29-iuxp.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_float4(\_:)](simd_make_float4%28__%29-fyse.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_float4(\_:)](simd_make_float4%28__%29-cjxn.md): Returns a new vector from the specified vector.
- [simd_make_float4(\_:)](simd_make_float4%28__%29-9xll2.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_float4(\_:)](simd_make_float4%28__%29-5sesp.md): Returns a new vector by truncating the specified 16-element vector.
- [simd_make_float4(\_:\_:)](simd_make_float4%28____%29-51w3j.md): Returns a new vector from the specified vectors.
- [simd_make_float4_undef(\_:)](simd_make_float4_undef%28__%29-3brs5.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_float4_undef(\_:)](simd_make_float4_undef%28__%29-3f7tu.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_float4(\_:)](simd_make_float4%28__%29-2ja7v.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_float4(\_:\_:\_:\_:)](simd_make_float4%28________%29.md): Returns a new vector from the specified scalar values.
- [simd_make_float4_undef(\_:)](simd_make_float4_undef%28__%29-24y7o.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_float4(\_:\_:\_:)](simd_make_float4%28______%29-5qr1r.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_float4(\_:\_:\_:)](simd_make_float4%28______%29-2rgt8.md): Returns a new vector from two scalar values and a vector.
- [simd_make_float4(\_:\_:)](simd_make_float4%28____%29-9ngva.md): Returns a new vector from a scalar value and a vector.
- [simd_make_float4(\_:\_:\_:)](simd_make_float4%28______%29-2bmi8.md): Returns a new vector from a vector and scalar values.
- [simd_make_float4(\_:\_:)](simd_make_float4%28____%29-4911p.md): Returns a new vector from a vector and a scalar value.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-81qo8.md): Returns the absolute value of each element in a vector.
- [abs(\_:)](abs%28__%29-1fzhv.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-6vmhh.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-46ay6.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-19q7w.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-6sa26.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract(\_:)](simd_fract%28__%29-3w2rh.md): Returns the fractional part of each element in a vector.
- [fract(\_:)](fract%28__%29-9s3df.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-74zwz.md): Returns the sign of each element in a vector.
- [sign(\_:)](sign%28__%29-167c1.md): Returns the sign of each element in a vector.
- [simd_step(\_:\_:)](simd_step%28____%29-1fxwh.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.
- [step(\_:edge:)](step%28__edge_%29-8we4c.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce Functions

- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2yn18.md): Returns the sum of all elements in a vector.
- [reduce_add(\_:)](reduce_add%28__%29-8m4ir.md): Returns the sum of all elements in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4qug2.md): Returns the maximum value in a vector.
- [reduce_max(\_:)](reduce_max%28__%29-263wv.md): Returns the maximum value in a vector.
- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-4un1u.md): Returns the minimum value in a vector.
- [reduce_min(\_:)](reduce_min%28__%29-1xt53.md): Returns the minimum value in a vector.

### Interpolation Functions

- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-5fpv1.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-2uufx.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-8qz2g.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-33ugy.md): Returns an element-wise smoothly interpolated value between two vectors.
- [smoothstep(\_:edge0:edge1:)](smoothstep%28__edge0_edge1_%29-3gx0q.md): Returns an element-wise smoothly interpolated value between two vectors.

### Extrema Functions

- [simd_max(\_:\_:)](simd_max%28____%29-3mrbf.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-8mn3g.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-317vz.md): Returns the maximum value of each element in a vector.
- [fmax(\_:\_:)](fmax%28____%29-7f29b.md)
- [simd_min(\_:\_:)](simd_min%28____%29-6upge.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-2jw3s.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-7wmdr.md): Returns the minimum value of each element in a vector.
- [fmin(\_:\_:)](fmin%28____%29-47ii0.md)

### Reciprocal and Reciprocal Square Root Functions

- [simd_recip(\_:)](simd_recip%28__%29-820ma.md): Returns the reciprocal of each element in a vector.
- [recip(\_:)](recip%28__%29-3idnw.md): Returns the reciprocal of each element in a vector.
- [simd_rsqrt(\_:)](simd_rsqrt%28__%29-i4we.md): Returns the reciprocal square root of each element in a vector.
- [rsqrt(\_:)](rsqrt%28__%29-3g5ej.md): Returns the reciprocal square root of each element in a vector.
- [simd_precise_recip(\_:)](simd_precise_recip%28__%29-6ptoq.md): Returns the precise reciprocal of each element in a vector.
- [simd_precise_rsqrt(\_:)](simd_precise_rsqrt%28__%29-136xw.md): Returns the precise reciprocal square root of each element in a vector.
- [simd_fast_recip(\_:)](simd_fast_recip%28__%29-6nf.md): Returns the fast reciprocal of each element in a vector.
- [simd_fast_rsqrt(\_:)](simd_fast_rsqrt%28__%29-8p7fk.md): Returns the fast reciprocal square root of each element in a vector.

### Exponential and Logarithmic Functions

- [exp(\_:)](exp%28__%29-8lp9u.md): Returns *e* raised to the power of each element in a vector.
- [exp2(\_:)](exp2%28__%29-4tmv0.md): Returns 2 raised to the power of each element in a vector.
- [exp10(\_:)](exp10%28__%29-7ddho.md): Returns 10 raised to the power of each element in a vector.
- [expm1(\_:)](expm1%28__%29-4f45.md): Returns *eˣ-1* for each element in a vector.
- [log(\_:)](log%28__%29-259z1.md): Returns the natural logarithm of each element in a vector.
- [log2(\_:)](log2%28__%29-5gt2x.md): Returns the base 2 logarithm of each element in a vector.
- [log10(\_:)](log10%28__%29-2lowj.md): Returns the base 10 logarithm of each element in a vector.
- [log1p(\_:)](log1p%28__%29-77wue.md): Returns *log(1+x)* of each element in a vector.

### Geometry Functions

- [dot(\_:\_:)](dot%28____%29-47df.md): Returns the dot product of two vectors.
- [normalize(\_:)](normalize%28__%29-6g9xc.md): Returns a vector pointing in the same direction of the supplied vector with a length of 1.
- [project(\_:\_:)](project%28____%29-pdsh.md): Returns the first vector projected onto the second vector.
- [reflect(\_:n:)](reflect%28__n_%29-8i5cc.md): Returns the reflection direction of an incident vector and a unit normal vector.
- [refract(\_:n:eta:)](refract%28__n_eta_%29-8qo9c.md): Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.

### Vector Norm Functions

- [norm_one(\_:)](norm_one%28__%29-jo3r.md): Returns the sum of the absolute values of a vector.
- [norm_inf(\_:)](norm_inf%28__%29-8tppa.md): Returns the maximum absolute value of a vector.

### Length and Distance Functions

- [length(\_:)](length%28__%29-9i1zg.md): Returns the length of a vector.
- [length_squared(\_:)](length_squared%28__%29-80gxf.md): Returns the square of the length of a vector.
- [distance(\_:\_:)](distance%28____%29-39uat.md): Returns the distance between two vectors.
- [distance_squared(\_:\_:)](distance_squared%28____%29-32wfg.md): Returns the square of the distance between two vectors.

### Hyperbolic Functions

- [acosh(\_:)](acosh%28__%29-7sio6.md): Returns the inverse hyperbolic cosine of each element in a vector.
- [asinh(\_:)](asinh%28__%29-693z8.md): Returns the inverse hyperbolic sine of each element in a vector.
- [atanh(\_:)](atanh%28__%29-48wed.md): Returns the inverse hyperbolic tangent of each element in a vector.
- [cosh(\_:)](cosh%28__%29-5k3hp.md): Returns the hyperbolic cosine of each element in a vector.
- [sinh(\_:)](sinh%28__%29-4eoxy.md): Returns the hyperbolic sine of each element in a vector.
- [tanh(\_:)](tanh%28__%29-9p88r.md): Returns the hyperbolic tangent of each element in a vector.

### Logic Functions

- [simd_select(\_:\_:\_:)](simd_select%28______%29-7vjx6.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-7g1os.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Math Functions

- [cbrt(\_:)](cbrt%28__%29-5wdps.md): Returns the cube root of each element in a vector.
- [ceil(\_:)](ceil%28__%29-2omh0.md): Returns the ceiling of each element in a vector.
- [erf(\_:)](erf%28__%29-4zsot.md): Returns the error function for each element in a vector.
- [erfc(\_:)](erfc%28__%29-7acqr.md): Returns the complementary error function for each element in a vector.
- [floor(\_:)](floor%28__%29-56de3.md): Returns the floor of each element in a vector.
- [fma(\_:\_:\_:)](fma%28______%29-1zefy.md): Returns the multiply-add result for corresponding elements in three vectors.
- [fmod(\_:\_:)](fmod%28____%29-px8m.md): Returns the modulus after dividing each element in a vector by the corresponding element in a second vector.
- [hypot(\_:\_:)](hypot%28____%29-96sjx.md): Returns the hypotenuse of a right-angled triangle with the sides that are adjacent to the right angle that two vectors define.
- [lgamma(\_:)](lgamma%28__%29-3l63e.md): Returns the natural logarithm of the absolute value of the gamma function of each element in a vector.
- [nextafter(\_:\_:)](nextafter%28____%29-6sc0p.md): Returns the next representable value of each element in a vector in the direction of the corresponding element in a second vector.
- [pow(\_:\_:)](pow%28____%29-skyu.md): Returns each element in a vector raised to the power of the corresponding element in a second vector.
- [remainder(\_:\_:)](remainder%28____%29-7o61f.md): Returns the remainder after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [round(\_:)](round%28__%29-8vqnv.md): Returns each element in a vector rounded to the nearest integer.
- [simd_muladd(\_:\_:\_:)](simd_muladd%28______%29-3e79w.md): Returns the multiply-add result for corresponding elements in three vectors.
- [tgamma(\_:)](tgamma%28__%29-twdo.md): Returns the gamma function for each element in a vector.
- [trunc(\_:)](trunc%28__%29-4xiyl.md): Returns each element in a vector rounded toward zero to the nearest integer.

### Trigonometric Functions

- [acos(\_:)](acos%28__%29-2blze.md): Returns the arccosine of each element in a vector.
- [asin(\_:)](asin%28__%29-87ban.md): Returns the arcsine of each element in a vector.
- [atan(\_:)](atan%28__%29-8xa90.md): Returns the arctangent of each element in a vector.
- [atan2(\_:\_:)](atan2%28____%29-63ije.md): Returns the arctangent of each pair of corresponding elements in two vectors.
- [cos(\_:)](cos%28__%29-8qcj2.md): Returns the cosine of each element in a vector.
- [cospi(\_:)](cospi%28__%29-5chnf.md): Returns the cosine of each element in a vector multiplied by pi.
- [sin(\_:)](sin%28__%29-80x4.md): Returns the sine of each element in a vector.
- [sinpi(\_:)](sinpi%28__%29-71xz.md): Returns the sine of each element in a vector multiplied by pi.
- [sincos(\_:)](sincos%28__%29-8bfn1.md): Returns the sine and cosine of each element in a vector.
- [sincospi(\_:)](sincospi%28__%29-84wzt.md): Returns the sine and cosine of each element in a vector multiplied by pi.
- [tan(\_:)](tan%28__%29-7uvy9.md): Returns the tangent of each element in a vector.
- [tanpi(\_:)](tanpi%28__%29-93eul.md): Returns the tangent of each element in a vector multiplied by pi.

### Classification Functions

- [isfinite(\_:)](isfinite%28__%29-96ccc.md): Returns true for each element that is finite in a vector.
- [isinf(\_:)](isinf%28__%29-4hqza.md): Returns true for each element that is infinite in a vector.
- [isnan(\_:)](isnan%28__%29-9epap.md): Returns true for each element that is not a number (NaN) in a vector.
- [isnormal(\_:)](isnormal%28__%29-7428z.md): Returns true for each element that is normal in a vector.

### Alternative Type Alias

- [vector_float4](vector_float4.md)
- [float4](float4.md): Deprecated.

## See Also

### Vector data types

- [simd_float1](simd_float1.md): A vector of one 32-bit floating-point element.
- [simd_float2](simd_float2.md): A vector of two 32-bit floating-point elements.
- [simd_float3](simd_float3.md): A vector of three 32-bit floating-point elements.
- [simd_float8](simd_float8.md): A vector of eight 32-bit floating-point elements.
- [simd_float16](simd_float16.md): A vector of sixteen 32-bit floating-point elements.

# simd_float4 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 32-bit floating-point elements.

## Declaration

```objectivec
typedef float __attribute__((ext_vector_type(4))) simd_float4;
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_float4](simd_make_float4%28__%29-iuxp.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_float4](simd_make_float4%28__%29-fyse.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_float4](simd_make_float4%28__%29-cjxn.md): Returns a new vector from the specified vector.
- [simd_make_float4](simd_make_float4%28__%29-9xll2.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_float4](simd_make_float4%28__%29-5sesp.md): Returns a new vector by truncating the specified 16-element vector.
- [simd_make_float4](simd_make_float4%28____%29-51w3j.md): Returns a new vector from the specified vectors.
- [vector4](vector4-1op5j.md): Returns a new vector from the specified vectors.
- [simd_make_float4_undef](simd_make_float4_undef%28__%29-3brs5.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_float4_undef](simd_make_float4_undef%28__%29-3f7tu.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_float4](simd_make_float4%28__%29-2ja7v.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_float4](simd_make_float4%28________%29.md): Returns a new vector from the specified scalar values.
- [vector4](vector4-9g9vo.md): Returns a new vector from the specified scalar values.
- [simd_make_float4_undef](simd_make_float4_undef%28__%29-24y7o.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_float4](simd_make_float4%28______%29-5qr1r.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_float4](simd_make_float4%28______%29-2rgt8.md): Returns a new vector from two scalar values and a vector.
- [simd_make_float4](simd_make_float4%28____%29-9ngva.md): Returns a new vector from a scalar value and a vector.
- [simd_make_float4](simd_make_float4%28______%29-2bmi8.md): Returns a new vector from a vector and scalar values.
- [simd_make_float4](simd_make_float4%28____%29-4911p.md): Returns a new vector from a vector and a scalar value.
- [vector4](vector4-8b00f.md): Returns a new vector from a vector and a scalar value.

### Functions to Create Four-Element Vectors From Vectors of Other Types

- [simd_float](simd_float-joa3.md): Returns a new vector from the specified vector of 8-bit, signed-integer elements.
- [simd_float](simd_float-je97.md): Returns a new vector from the specified vector of 8-bit, unsigned-integer elements.
- [simd_float](simd_float-jj4b.md): Returns a new vector from the specified vector of 16-bit, signed-integer elements.
- [simd_float](simd_float-j957.md): Returns a new vector from the specified vector of 16-bit, unsigned-integer elements.
- [simd_float](simd_float-jq3j.md): Returns a new vector from the specified vector of 32-bit, signed-integer elements.
- [simd_float](simd_float-jg4f.md): Returns a new vector from the specified vector of 32-bit, unsigned-integer elements.
- [simd_float](simd_float-jr19.md): Returns a new vector from the specified vector of 64-bit, signed-integer elements.
- [simd_float](simd_float-jgyl.md): Returns a new vector from the specified vector of 64-bit, unsigned-integer elements.
- [simd_float](simd_float-jf39.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_float](simd_float-jekd.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-81qo8.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-6vmhh.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-6sa26.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract](simd_fract%28__%29-3w2rh.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-74zwz.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-1fxwh.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce Functions

- [simd_reduce_add](simd_reduce_add%28__%29-2yn18.md): Returns the sum of all elements in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4qug2.md): Returns the maximum value in a vector.
- [simd_reduce_min](simd_reduce_min%28__%29-4un1u.md): Returns the minimum value in a vector.

### Interpolation Functions

- [simd_mix](simd_mix%28______%29-5fpv1.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep](simd_smoothstep%28______%29-33ugy.md): Returns an element-wise smoothly interpolated value between two vectors.

### Extrema Functions

- [simd_max](simd_max%28____%29-3mrbf.md): Returns the maximum value of each element in a vector.
- [simd_min](simd_min%28____%29-6upge.md): Returns the minimum value of each element in a vector.

### Reciprocal and Reciprocal Square Root Functions

- [simd_recip](simd_recip%28__%29-820ma.md): Returns the reciprocal of each element in a vector.
- [simd_rsqrt](simd_rsqrt%28__%29-i4we.md): Returns the reciprocal square root of each element in a vector.
- [simd_precise_recip](simd_precise_recip%28__%29-6ptoq.md): Returns the precise reciprocal of each element in a vector.
- [simd_precise_rsqrt](simd_precise_rsqrt%28__%29-136xw.md): Returns the precise reciprocal square root of each element in a vector.
- [simd_fast_recip](simd_fast_recip%28__%29-6nf.md): Returns the fast reciprocal of each element in a vector.
- [simd_fast_rsqrt](simd_fast_rsqrt%28__%29-8p7fk.md): Returns the fast reciprocal square root of each element in a vector.

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

- [simd_dot](simd_dot-6c4kk.md): Returns the dot product of two vectors.
- [simd_normalize](simd_normalize-9o75a.md): Returns a vector pointing in the same direction of the supplied vector, with a length of 1.
- [simd_fast_normalize](simd_fast_normalize-3shj.md): Returns the fast normalized vector.
- [simd_precise_normalize](simd_precise_normalize-4vumw.md): Returns the precise normalized vector.
- [simd_project](simd_project-409nq.md): Returns the first vector projected onto the second vector.
- [simd_fast_project](simd_fast_project-t4b2.md): Returns the fast projected vector.
- [simd_precise_project](simd_precise_project-vzd4.md): Returns the precise projected vector.
- [simd_reflect](simd_reflect-2n1lw.md): Returns the reflection direction of an incident vector and a unit normal vector.
- [simd_refract](simd_refract-8tap1.md): Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.

### Vector Norm Functions

- [simd_norm_one](simd_norm_one-sda7.md): Returns the sum of the absolute values of a vector.
- [simd_norm_inf](simd_norm_inf-97r82.md): Returns the maximum absolute value of a vector.

### Length and Distance Functions

- [simd_length](simd_length-3fnlb.md): Returns the length of a vector.
- [simd_fast_length](simd_fast_length-4ok58.md): Returns the fast length of a vector.
- [simd_precise_length](simd_precise_length-7du56.md): Returns the precise length of a vector.
- [simd_length_squared](simd_length_squared-2t8g5.md): Returns the square of the length of a vector.
- [simd_distance](simd_distance-4w02j.md): Returns the distance between two vectors.
- [simd_fast_distance](simd_fast_distance-1kcm1.md): Returns the fast distance between two vectors.
- [simd_precise_distance](simd_precise_distance-8v0dv.md): Returns the precise distance between two vectors.
- [simd_distance_squared](simd_distance_squared-1kxqo.md): Returns the square of the distance between two vectors.

### Hyperbolic Functions

- [acosh](acosh.md): Returns the inverse hyperbolic cosine of each element in a vector.
- [asinh](asinh.md): Returns the inverse hyperbolic sine of each element in a vector.
- [atanh](atanh.md): Returns the inverse hyperbolic tangent of each element in a vector.
- [cosh](cosh.md): Returns the hyperbolic cosine of each element in a vector.
- [sinh](sinh.md): Returns the hyperbolic sine of each element in a vector.
- [tanh](tanh.md): Returns the hyperbolic tangent of each element in a vector.

### Logic Functions

- [simd_select](simd_select%28______%29-7vjx6.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect](simd_bitselect%28______%29-7g1os.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

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
- [simd_muladd](simd_muladd%28______%29-3e79w.md): Returns the multiply-add result for corresponding elements in three vectors.
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

- [vector_float4](vector_float4.md)

## See Also

### Vector data types

- [simd_float1](simd_float1.md): A vector of one 32-bit floating-point element.
- [simd_float2](simd_float2.md): A vector of two 32-bit floating-point elements.
- [simd_float3](simd_float3.md): A vector of three 32-bit floating-point elements.
- [simd_float8](simd_float8.md): A vector of eight 32-bit floating-point elements.
- [simd_float16](simd_float16.md): A vector of sixteen 32-bit floating-point elements.
