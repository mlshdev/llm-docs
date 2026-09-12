> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_half8](https://developer.apple.com/documentation/simd/simd_half8)

# simd_half8 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 16-bit floating-point elements.

## Declaration

```swift
typealias simd_half8 = SIMD8<Float16>
```

## Topics

### Functions to create eight-element vectors from other vectors

- [simd_make_half8(\_:)](simd_make_half8%28__%29-97ut4.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_half8(\_:)](simd_make_half8%28__%29-9anaf.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_half8(\_:)](simd_make_half8%28__%29-9e4ki.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_half8(\_:)](simd_make_half8%28__%29-9slsm.md): Returns a new vector from the specified vector.
- [simd_make_half8(\_:)](simd_make_half8%28__%29-4xf3n.md): Returns a new vector by truncating the specified 16-element vector.
- [simd_make_half8(\_:)](simd_make_half8%28__%29-94pmz.md): Returns a new vector by truncating the specified 32-element vector.
- [simd_make_half8_undef(\_:)](simd_make_half8_undef%28__%29-3on10.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_half8_undef(\_:)](simd_make_half8_undef%28__%29-3l5sn.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_half8_undef(\_:)](simd_make_half8_undef%28__%29-337am.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_half8(\_:\_:)](simd_make_half8%28____%29.md): Returns a new vector from the specified vectors.

### Functions to create eight-element vectors from scalar values

- [simd_make_half8(\_:)](simd_make_half8%28__%29-ivna.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_half8_undef(\_:)](simd_make_half8_undef%28__%29-4lqrh.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common functions

- [simd_abs(\_:)](simd_abs%28__%29-7p1mc.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-7a090.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-8nejo.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract(\_:)](simd_fract%28__%29-3jdnl.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-7hck3.md): Returns the sign of each element in a vector.
- [simd_step(\_:\_:)](simd_step%28____%29-5v3vi.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce functions

- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-3auqo.md): Returns the sum of all elements in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-55ayy.md): Returns the maximum value in a vector.
- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-3o9ia.md): Returns the minimum value in a vector.

### Interpolation functions

- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-6gojc.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-96q78.md): Returns an element-wise smoothly interpolated value between two vectors.

### Extrema functions

- [simd_max(\_:\_:)](simd_max%28____%29-ei84.md): Returns the maximum value of each element in a vector.
- [simd_min(\_:\_:)](simd_min%28____%29-55b3r.md): Returns the minimum value of each element in a vector.

### Reciprocal and reciprocal square root functions

- [simd_recip(\_:)](simd_recip%28__%29-98e5u.md): Returns the reciprocal of each element in a vector.
- [simd_rsqrt(\_:)](simd_rsqrt%28__%29-1ofzq.md): Returns the reciprocal square root of each element in a vector.
- [simd_precise_recip(\_:)](simd_precise_recip%28__%29-74du2.md): Returns the precise reciprocal of each element in a vector.
- [simd_precise_rsqrt(\_:)](simd_precise_rsqrt%28__%29-1hm48.md): Returns the precise reciprocal square root of each element in a vector.
- [simd_fast_recip(\_:)](simd_fast_recip%28__%29-16ixv.md): Returns the fast reciprocal of each element in a vector.
- [simd_fast_rsqrt(\_:)](simd_fast_rsqrt%28__%29-923z8.md): Returns the fast reciprocal square root of each element in a vector.

### Logic functions

- [simd_select(\_:\_:\_:)](simd_select%28______%29-7qsat.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-1kwpu.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Math functions

- [simd_muladd(\_:\_:\_:)](simd_muladd%28______%29-1vfnf.md): Returns the multiply-add result for corresponding elements in three vectors.

## See Also

### Vector data types

- [simd_half1](simd_half1.md): A vector of one 16-bit floating-point element.
- [simd_half2](simd_half2.md): A vector of two 16-bit floating-point elements.
- [simd_half3](simd_half3.md): A vector of three 16-bit floating-point elements.
- [simd_half4](simd_half4.md): A vector of four 16-bit floating-point elements.
- [simd_half16](simd_half16.md): A vector of sixteen 16-bit floating-point elements.
- [simd_half32](simd_half32.md): A vector of thirty-two 16-bit floating-point elements.

# simd_half8 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 16-bit floating-point elements.

## Declaration

```objectivec
typedef _Float16 __attribute__((ext_vector_type(8))) simd_half8;
```

## Topics

### Functions to create eight-element vectors from other vectors

- [simd_make_half8](simd_make_half8%28__%29-97ut4.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_half8](simd_make_half8%28__%29-9anaf.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_half8](simd_make_half8%28__%29-9e4ki.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_half8](simd_make_half8%28__%29-9slsm.md): Returns a new vector from the specified vector.
- [simd_make_half8](simd_make_half8%28__%29-4xf3n.md): Returns a new vector by truncating the specified 16-element vector.
- [simd_make_half8](simd_make_half8%28__%29-94pmz.md): Returns a new vector by truncating the specified 32-element vector.
- [simd_make_half8_undef](simd_make_half8_undef%28__%29-3on10.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_half8_undef](simd_make_half8_undef%28__%29-3l5sn.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_half8_undef](simd_make_half8_undef%28__%29-337am.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_half8](simd_make_half8%28____%29.md): Returns a new vector from the specified vectors.

### Functions to create eight-element vectors from scalar values

- [simd_make_half8](simd_make_half8%28__%29-ivna.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_half8_undef](simd_make_half8_undef%28__%29-4lqrh.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to create eight-element vectors from vectors of other types

- [simd_half](simd_half-3u66l.md): Returns a new vector from the specified vector of 8-bit, signed-integer elements.
- [simd_half](simd_half-3ufyl.md): Returns a new vector from the specified vector of 8-bit, unsigned-integer elements.
- [simd_half](simd_half-3uazx.md): Returns a new vector from the specified vector of 16-bit, signed-integer elements.
- [simd_half](simd_half-3ukx9.md): Returns a new vector from the specified vector of 16-bit, unsigned-integer elements.
- [simd_half](simd_half-3u7w5.md): Returns a new vector from the specified vector of 32-bit, signed-integer elements.
- [simd_half](simd_half-3ui0l.md): Returns a new vector from the specified vector of 32-bit, unsigned-integer elements.
- [simd_half](simd_half-3u9dz.md): Returns a new vector from the specified vector of 64-bit, signed-integer elements.
- [simd_half](simd_half-3ujk7.md): Returns a new vector from the specified vector of 64-bit, unsigned-integer elements.
- [simd_half](simd_half-3ui4n.md): Returns a new vector from the specified vector of 16-bit, floating-point elements.
- [simd_half](simd_half-3uhij.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_half](simd_half-3uh2v.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common functions

- [simd_abs](simd_abs%28__%29-7p1mc.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-7a090.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-8nejo.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract](simd_fract%28__%29-3jdnl.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-7hck3.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-5v3vi.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Reduce functions

- [simd_reduce_add](simd_reduce_add%28__%29-3auqo.md): Returns the sum of all elements in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-55ayy.md): Returns the maximum value in a vector.
- [simd_reduce_min](simd_reduce_min%28__%29-3o9ia.md): Returns the minimum value in a vector.

### Interpolation functions

- [simd_mix](simd_mix%28______%29-6gojc.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep](simd_smoothstep%28______%29-96q78.md): Returns an element-wise smoothly interpolated value between two vectors.

### Extrema functions

- [simd_max](simd_max%28____%29-ei84.md): Returns the maximum value of each element in a vector.
- [simd_min](simd_min%28____%29-55b3r.md): Returns the minimum value of each element in a vector.

### Reciprocal and reciprocal square root functions

- [simd_recip](simd_recip%28__%29-98e5u.md): Returns the reciprocal of each element in a vector.
- [simd_rsqrt](simd_rsqrt%28__%29-1ofzq.md): Returns the reciprocal square root of each element in a vector.
- [simd_precise_recip](simd_precise_recip%28__%29-74du2.md): Returns the precise reciprocal of each element in a vector.
- [simd_precise_rsqrt](simd_precise_rsqrt%28__%29-1hm48.md): Returns the precise reciprocal square root of each element in a vector.
- [simd_fast_recip](simd_fast_recip%28__%29-16ixv.md): Returns the fast reciprocal of each element in a vector.
- [simd_fast_rsqrt](simd_fast_rsqrt%28__%29-923z8.md): Returns the fast reciprocal square root of each element in a vector.

### Geometry functions

- [simd_dot](simd_dot-16ezc.md): Returns the dot product of two vectors.
- [simd_normalize](simd_normalize-us7.md): Returns a vector pointing in the same direction of the supplied vector, with a length of 1.
- [simd_fast_normalize](simd_fast_normalize-8x56w.md): Returns the fast normalized vector.
- [simd_precise_normalize](simd_precise_normalize-621rw.md): Returns the precise normalized vector.
- [simd_project](simd_project-472vy.md): Returns the first vector projected onto the second vector.
- [simd_precise_project](simd_precise_project-8kipf.md): Returns the precise projected vector.
- [simd_fast_project](simd_fast_project-2k6sp.md): Returns the fast projected vector.

### Vector norm functions

- [simd_norm_one](simd_norm_one-fkef.md): Returns the sum of the absolute values of a vector.
- [simd_norm_inf](simd_norm_inf-9m6k2.md): Returns the maximum absolute value of a vector.

### Length and distance functions

- [simd_length](simd_length-32yfr.md): Returns the length of a vector.
- [simd_fast_length](simd_fast_length-5uxn4.md): Returns the fast length of a vector.
- [simd_precise_length](simd_precise_length-67lfe.md): Returns the precise length of a vector.
- [simd_length_squared](simd_length_squared-3xd95.md): Returns the square of the length of a vector.
- [simd_distance](simd_distance-2j394.md): Returns the distance between two vectors.
- [simd_fast_distance](simd_fast_distance-66qhh.md): Returns the fast distance between two vectors.
- [simd_precise_distance](simd_precise_distance-9fb2f.md): Returns the precise distance between two vectors.
- [simd_distance_squared](simd_distance_squared-3sgxy.md): Returns the square of the distance between two vectors.

### Logic functions

- [simd_select](simd_select%28______%29-7qsat.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
- [simd_bitselect](simd_bitselect%28______%29-1kwpu.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Math functions

- [simd_muladd](simd_muladd%28______%29-1vfnf.md): Returns the multiply-add result for corresponding elements in three vectors.

## See Also

### Vector data types

- [simd_half1](simd_half1.md): A vector of one 16-bit floating-point element.
- [simd_half2](simd_half2.md): A vector of two 16-bit floating-point elements.
- [simd_half3](simd_half3.md): A vector of three 16-bit floating-point elements.
- [simd_half4](simd_half4.md): A vector of four 16-bit floating-point elements.
- [simd_half16](simd_half16.md): A vector of sixteen 16-bit floating-point elements.
- [simd_half32](simd_half32.md): A vector of thirty-two 16-bit floating-point elements.
