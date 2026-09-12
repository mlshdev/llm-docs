> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_half3](https://developer.apple.com/documentation/simd/simd_half3)

# simd_half3 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 16-bit floating-point elements.

## Declaration

```swift
typealias simd_half3 = SIMD3<Float16>
```

## Topics

### Functions to create three-element vectors from other vectors

- [simd_make_half3(\_:)](simd_make_half3%28__%29-52gdy.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_half3(\_:)](simd_make_half3%28__%29-4yz0x.md): Returns a new vector from the specified vector.
- [simd_make_half3(\_:)](simd_make_half3%28__%29-4h0kc.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_half3(\_:)](simd_make_half3%28__%29-5nca0.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_half3(\_:)](simd_make_half3%28__%29-9063q.md): Returns a new vector by truncating the specified 16-element vector.
- [simd_make_half3(\_:)](simd_make_half3%28__%29-64v1.md): Returns a new vector by truncating the specified 32-element vector.
- [simd_make_half3_undef(\_:)](simd_make_half3_undef%28__%29-1frd1.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to create three-element vectors from scalar values

- [simd_make_half3(\_:)](simd_make_half3%28__%29-9gqvo.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_half3(\_:\_:\_:)](simd_make_half3%28______%29.md): Returns a new vector from the specified scalar values.
- [simd_make_half3(\_:\_:)](simd_make_half3%28____%29-5wwpl.md): Returns a new vector from a vector and a scalar value.
- [simd_make_half3(\_:\_:)](simd_make_half3%28____%29-4svq0.md): Returns a new vector from a scalar value and a vector.
- [simd_make_half3_undef(\_:)](simd_make_half3_undef%28__%29-6lcqp.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common functions

- [simd_abs(\_:)](simd_abs%28__%29-8derx.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-2h8ov.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-9k8m9.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract(\_:)](simd_fract%28__%29-47quw.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-6gppu.md): Returns the sign of each element in a vector.
- [simd_step(\_:\_:)](simd_step%28____%29-8w7e.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce functions

- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2v3th.md): Returns the sum of all elements in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4h2m7.md): Returns the maximum value in a vector.
- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-4685v.md): Returns the minimum value in a vector.

### Interpolation functions

- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-4co2a.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-4rnii.md): Returns an element-wise smoothly interpolated value between two vectors.

### Extrema functions

- [simd_max(\_:\_:)](simd_max%28____%29-1g1g7.md): Returns the maximum value of each element in a vector.
- [simd_min(\_:\_:)](simd_min%28____%29-4rmyw.md): Returns the minimum value of each element in a vector.

### Reciprocal and reciprocal square root functions

- [simd_recip(\_:)](simd_recip%28__%29-8k0yn.md): Returns the reciprocal of each element in a vector.
- [simd_rsqrt(\_:)](simd_rsqrt%28__%29-rgh7.md): Returns the reciprocal square root of each element in a vector.
- [simd_precise_recip(\_:)](simd_precise_recip%28__%29-61jmz.md): Returns the precise reciprocal of each element in a vector.
- [simd_precise_rsqrt(\_:)](simd_precise_rsqrt%28__%29-znwt.md): Returns the precise reciprocal square root of each element in a vector.
- [simd_fast_recip(\_:)](simd_fast_recip%28__%29-okeq.md): Returns the fast reciprocal of each element in a vector.
- [simd_fast_rsqrt(\_:)](simd_fast_rsqrt%28__%29-80xc1.md): Returns the fast reciprocal square root of each element in a vector.

### Logic functions

- [simd_select(\_:\_:\_:)](simd_select%28______%29-2ljkl.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-6ne9u.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Math functions

- [simd_muladd(\_:\_:\_:)](simd_muladd%28______%29-582ze.md): Returns the multiply-add result for corresponding elements in three vectors.

## See Also

### Vector data types

- [simd_half1](simd_half1.md): A vector of one 16-bit floating-point element.
- [simd_half2](simd_half2.md): A vector of two 16-bit floating-point elements.
- [simd_half4](simd_half4.md): A vector of four 16-bit floating-point elements.
- [simd_half8](simd_half8.md): A vector of eight 16-bit floating-point elements.
- [simd_half16](simd_half16.md): A vector of sixteen 16-bit floating-point elements.
- [simd_half32](simd_half32.md): A vector of thirty-two 16-bit floating-point elements.

# simd_half3 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 16-bit floating-point elements.

## Declaration

```objectivec
typedef _Float16 __attribute__((ext_vector_type(3))) simd_half3;
```

## Topics

### Functions to create three-element vectors from other vectors

- [simd_make_half3](simd_make_half3%28__%29-52gdy.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_half3](simd_make_half3%28__%29-4yz0x.md): Returns a new vector from the specified vector.
- [simd_make_half3](simd_make_half3%28__%29-4h0kc.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_half3](simd_make_half3%28__%29-5nca0.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_half3](simd_make_half3%28__%29-9063q.md): Returns a new vector by truncating the specified 16-element vector.
- [simd_make_half3](simd_make_half3%28__%29-64v1.md): Returns a new vector by truncating the specified 32-element vector.
- [simd_make_half3_undef](simd_make_half3_undef%28__%29-1frd1.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to create three-element vectors from scalar values

- [simd_make_half3](simd_make_half3%28__%29-9gqvo.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_half3](simd_make_half3%28______%29.md): Returns a new vector from the specified scalar values.
- [simd_make_half3](simd_make_half3%28____%29-5wwpl.md): Returns a new vector from a vector and a scalar value.
- [simd_make_half3](simd_make_half3%28____%29-4svq0.md): Returns a new vector from a scalar value and a vector.
- [simd_make_half3_undef](simd_make_half3_undef%28__%29-6lcqp.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to create three-element vectors from vectors of other types

- [simd_half](simd_half-2rwea.md): Returns a new vector from the specified vector of 8-bit, signed-integer elements.
- [simd_half](simd_half-2rm82.md): Returns a new vector from the specified vector of 8-bit, unsigned-integer elements.
- [simd_half](simd_half-2rr4y.md): Returns a new vector from the specified vector of 16-bit, signed-integer elements.
- [simd_half](simd_half-2rheq.md): Returns a new vector from the specified vector of 16-bit, unsigned-integer elements.
- [simd_half](simd_half-2ry5y.md): Returns a new vector from the specified vector of 32-bit, signed-integer elements.
- [simd_half](simd_half-2roc6.md): Returns a new vector from the specified vector of 32-bit, unsigned-integer elements.
- [simd_half](simd_half-2rz6u.md): Returns a new vector from the specified vector of 64-bit, signed-integer elements.
- [simd_half](simd_half-2royu.md): Returns a new vector from the specified vector of 64-bit, unsigned-integer elements.
- [simd_half](simd_half-2rnty.md): Returns a new vector from the specified vector of 16-bit, floating-point elements.
- [simd_half](simd_half-2rn9m.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_half](simd_half-2rmqe.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common functions

- [simd_abs](simd_abs%28__%29-8derx.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-2h8ov.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-9k8m9.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract](simd_fract%28__%29-47quw.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-6gppu.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-8w7e.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce functions

- [simd_reduce_add](simd_reduce_add%28__%29-2v3th.md): Returns the sum of all elements in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4h2m7.md): Returns the maximum value in a vector.
- [simd_reduce_min](simd_reduce_min%28__%29-4685v.md): Returns the minimum value in a vector.

### Interpolation functions

- [simd_mix](simd_mix%28______%29-4co2a.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep](simd_smoothstep%28______%29-4rnii.md): Returns an element-wise smoothly interpolated value between two vectors.

### Extrema functions

- [simd_max](simd_max%28____%29-1g1g7.md): Returns the maximum value of each element in a vector.
- [simd_min](simd_min%28____%29-4rmyw.md): Returns the minimum value of each element in a vector.

### Reciprocal and reciprocal square root functions

- [simd_recip](simd_recip%28__%29-8k0yn.md): Returns the reciprocal of each element in a vector.
- [simd_rsqrt](simd_rsqrt%28__%29-rgh7.md): Returns the reciprocal square root of each element in a vector.
- [simd_precise_recip](simd_precise_recip%28__%29-61jmz.md): Returns the precise reciprocal of each element in a vector.
- [simd_precise_rsqrt](simd_precise_rsqrt%28__%29-znwt.md): Returns the precise reciprocal square root of each element in a vector.
- [simd_fast_recip](simd_fast_recip%28__%29-okeq.md): Returns the fast reciprocal of each element in a vector.
- [simd_fast_rsqrt](simd_fast_rsqrt%28__%29-80xc1.md): Returns the fast reciprocal square root of each element in a vector.

### Geometry functions

- [simd_cross](simd_cross-828tl.md): Returns the cross product of two vectors.
- [simd_dot](simd_dot-p9ir.md): Returns the dot product of two vectors.
- [simd_normalize](simd_normalize-9c7zv.md): Returns a vector pointing in the same direction of the supplied vector, with a length of 1.
- [simd_fast_normalize](simd_fast_normalize-e3y.md): Returns the fast normalized vector.
- [simd_precise_normalize](simd_precise_normalize-4z7hd.md): Returns the precise normalized vector.
- [simd_orient](simd_orient-5jxfm.md): Tests the orientation of the two supplied vectors.
- [simd_project](simd_project-3e81w.md): Returns the first vector projected onto the second vector.
- [simd_precise_project](simd_precise_project-9ry7l.md): Returns the precise projected vector.
- [simd_fast_project](simd_fast_project-99ic5.md): Returns the fast projected vector.
- [simd_reflect](simd_reflect-79zx0.md): Returns the reflection direction of an incident vector and a unit normal vector.
- [simd_refract](simd_refract-5dshi.md): Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.

### Vector norm functions

- [simd_norm_one](simd_norm_one-xiye.md): Returns the sum of the absolute values of a vector.
- [simd_norm_inf](simd_norm_inf-94803.md): Returns the maximum absolute value of a vector.

### Length and distance functions

- [simd_length](simd_length-3rboq.md): Returns the length of a vector.
- [simd_fast_length](simd_fast_length-56ke1.md): Returns the fast length of a vector.
- [simd_precise_length](simd_precise_length-7azob.md): Returns the precise length of a vector.
- [simd_length_squared](simd_length_squared-3hmac.md): Returns the square of the length of a vector.
- [simd_distance](simd_distance-245n7.md): Returns the distance between two vectors.
- [simd_fast_distance](simd_fast_distance-93wpb.md): Returns the fast distance between two vectors.
- [simd_precise_distance](simd_precise_distance-84o1x.md): Returns the precise distance between two vectors.
- [simd_distance_squared](simd_distance_squared-66q77.md): Returns the square of the distance between two vectors.

### Logic functions

- [simd_select](simd_select%28______%29-2ljkl.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect](simd_bitselect%28______%29-6ne9u.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Math functions

- [simd_muladd](simd_muladd%28______%29-582ze.md): Returns the multiply-add result for corresponding elements in three vectors.

## See Also

### Vector data types

- [simd_half1](simd_half1.md): A vector of one 16-bit floating-point element.
- [simd_half2](simd_half2.md): A vector of two 16-bit floating-point elements.
- [simd_half4](simd_half4.md): A vector of four 16-bit floating-point elements.
- [simd_half8](simd_half8.md): A vector of eight 16-bit floating-point elements.
- [simd_half16](simd_half16.md): A vector of sixteen 16-bit floating-point elements.
- [simd_half32](simd_half32.md): A vector of thirty-two 16-bit floating-point elements.
