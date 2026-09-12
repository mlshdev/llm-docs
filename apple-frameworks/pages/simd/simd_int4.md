> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_int4](https://developer.apple.com/documentation/simd/simd_int4)

# simd_int4 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 32-bit signed integer elements.

## Declaration

```swift
typealias simd_int4 = SIMD4<Int32>
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_int4(\_:)](simd_make_int4%28__%29-1suou.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_int4(\_:)](simd_make_int4%28__%29-1wbev.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_int4(\_:)](simd_make_int4%28__%29-1kx2w.md): Returns a new vector from the specified vector.
- [simd_make_int4(\_:)](simd_make_int4%28__%29-2qk04.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_int4(\_:)](simd_make_int4%28__%29-2rtb0.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_int4(\_:\_:)](simd_make_int4%28____%29-4phxy.md): Returns a new vector from the specified vectors.
- [simd_make_int4_undef(\_:)](simd_make_int4_undef%28__%29-5g92f.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_int4_undef(\_:)](simd_make_int4_undef%28__%29-5dw9q.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_int4(\_:)](simd_make_int4%28__%29-7vwve.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_int4(\_:\_:\_:\_:)](simd_make_int4%28________%29.md): Returns a new vector from the specified scalar values.
- [simd_make_int4_undef(\_:)](simd_make_int4_undef%28__%29-2wt72.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_int4(\_:\_:\_:)](simd_make_int4%28______%29-7cjm7.md): Returns a new vector from a vector and scalar values.
- [simd_make_int4(\_:\_:)](simd_make_int4%28____%29-7rrqd.md): Returns a new vector from a vector and a scalar value.
- [simd_make_int4(\_:\_:\_:)](simd_make_int4%28______%29-9tjlm.md): Returns a new vector from two scalar values and a vector.
- [simd_make_int4(\_:\_:\_:)](simd_make_int4%28______%29-8of8y.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_int4(\_:\_:)](simd_make_int4%28____%29-6p0ui.md): Returns a new vector from a scalar value and a vector.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-81glw.md): Returns the absolute value of each element in a vector.
- [abs(\_:)](abs%28__%29-1b3qo.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-50obl.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-5if3n.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-5f538.md): Returns each element in a vector clamped to a specified scalar range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-2rypj.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-4uaza.md): Returns the minimum value in a vector.
- [reduce_min(\_:)](reduce_min%28__%29-6npco.md): Returns the minimum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4qjkm.md): Returns the maximum value in a vector.
- [reduce_max(\_:)](reduce_max%28__%29-5afy1.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2ybq8.md): Returns the sum of all elements in a vector.
- [reduce_add(\_:)](reduce_add%28__%29-89ptt.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_max(\_:\_:)](simd_max%28____%29-51txy.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-696e3.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-6cb9k.md): Returns the maximum value of each element in a vector.
- [simd_min(\_:\_:)](simd_min%28____%29-1m8ma.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-5uuf6.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-5y1sd.md): Returns the minimum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6cp1b.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all(\_:)](simd_all%28__%29-1jw6t.md): Returns true if the high-order bit of every element is set; false otherwise.
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-27mh1.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [int4](int4.md): Deprecated.
- [vector_int4](vector_int4.md)

## See Also

### Vector Data Types

- [simd_int1](simd_int1.md): A vector of one 32-bit signed integer element.
- [simd_int2](simd_int2.md): A vector of two 32-bit signed integer elements.
- [simd_int3](simd_int3.md): A vector of three 32-bit signed integer elements.
- [simd_int8](simd_int8.md): A vector of eight 32-bit signed integer elements.
- [simd_int16](simd_int16.md): A vector of sixteen 32-bit signed integer elements.

# simd_int4 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 32-bit signed integer elements.

## Declaration

```objectivec
typedef int __attribute__((ext_vector_type(4))) simd_int4;
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_int4](simd_make_int4%28__%29-1suou.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_int4](simd_make_int4%28__%29-1wbev.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_int4](simd_make_int4%28__%29-1kx2w.md): Returns a new vector from the specified vector.
- [simd_make_int4](simd_make_int4%28__%29-2qk04.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_int4](simd_make_int4%28__%29-2rtb0.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_int4](simd_make_int4%28____%29-4phxy.md): Returns a new vector from the specified vectors.
- [vector4](vector4-6k3t7.md): Returns a new vector from the specified vectors.
- [simd_make_int4_undef](simd_make_int4_undef%28__%29-5g92f.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_int4_undef](simd_make_int4_undef%28__%29-5dw9q.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_int4](simd_make_int4%28__%29-7vwve.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_int4](simd_make_int4%28________%29.md): Returns a new vector from the specified scalar values.
- [vector4](vector4-7j5gn.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.
- [simd_make_int4_undef](simd_make_int4_undef%28__%29-2wt72.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_int4](simd_make_int4%28______%29-7cjm7.md): Returns a new vector from a vector and scalar values.
- [simd_make_int4](simd_make_int4%28____%29-7rrqd.md): Returns a new vector from a vector and a scalar value.
- [vector4](vector4-6wxif.md): Returns a new vector from a vector and a scalar value.
- [simd_make_int4](simd_make_int4%28______%29-9tjlm.md): Returns a new vector from two scalar values and a vector.
- [simd_make_int4](simd_make_int4%28______%29-8of8y.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_int4](simd_make_int4%28____%29-6p0ui.md): Returns a new vector from a scalar value and a vector.

### Functions to Create Four-Element Vectors From Vectors of Other Types

- [simd_int](simd_int-9gib6.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_int](simd_int-9gsc2.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_int](simd_int-9gnaq.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_int](simd_int-9gx82.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_int](simd_int-9gf7q.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_int](simd_int-9gp3a.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_int](simd_int-9ggra.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_int](simd_int-9gqqe.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_int](simd_int-9gtqi.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_int](simd_int-9gt5y.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_int_sat](simd_int_sat-6820l.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-67sad.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-67x4l.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-67nat.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-68459.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-67tx9.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-684sf.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-67uyn.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-67t8j.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_int_sat](simd_int_sat-67sbj.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Round-Half-to-Even Conversion From Single-Precision Vectors

- [simd_int_rte](simd_int_rte-8emhi.md): Returns a new vector from the specified four-element vector.

### Common Functions

- [simd_abs](simd_abs%28__%29-81glw.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-50obl.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-2rypj.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-4uaza.md): Returns the minimum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4qjkm.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2ybq8.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_max](simd_max%28____%29-51txy.md): Returns the maximum value of each element in a vector.
- [simd_min](simd_min%28____%29-1m8ma.md): Returns the minimum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6cp1b.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all](simd_all%28__%29-1jw6t.md): Returns true if the high-order bit of every element is set; false otherwise.
- [simd_bitselect](simd_bitselect%28______%29-27mh1.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_int4](vector_int4.md)

## See Also

### Vector Data Types

- [simd_int1](simd_int1.md): A vector of one 32-bit signed integer element.
- [simd_int2](simd_int2.md): A vector of two 32-bit signed integer elements.
- [simd_int3](simd_int3.md): A vector of three 32-bit signed integer elements.
- [simd_int8](simd_int8.md): A vector of eight 32-bit signed integer elements.
- [simd_int16](simd_int16.md): A vector of sixteen 32-bit signed integer elements.
