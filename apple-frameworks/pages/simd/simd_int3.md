> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_int3](https://developer.apple.com/documentation/simd/simd_int3)

# simd_int3 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 32-bit signed integer elements.

## Declaration

```swift
typealias simd_int3 = SIMD3<Int32>
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_int3(\_:)](simd_make_int3%28__%29-2tix4.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_int3(\_:)](simd_make_int3%28__%29-2r609.md): Returns a new vector from the specified vector.
- [simd_make_int3(\_:)](simd_make_int3%28__%29-3fioe.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_int3(\_:)](simd_make_int3%28__%29-28n96.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_int3(\_:)](simd_make_int3%28__%29-4wbrt.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_int3_undef(\_:)](simd_make_int3_undef%28__%29-5kpok.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_int3(\_:)](simd_make_int3%28__%29-4pdxm.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_int3(\_:\_:\_:)](simd_make_int3%28______%29.md): Returns a new vector from the specified scalar values.
- [simd_make_int3_undef(\_:)](simd_make_int3_undef%28__%29-5q1nf.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_int3(\_:\_:)](simd_make_int3%28____%29-7nox5.md): Returns a new vector from a vector and a scalar value.
- [simd_make_int3(\_:\_:)](simd_make_int3%28____%29-48lb0.md): Returns a new vector from a scalar value and a vector.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-8d4m3.md): Returns the absolute value of each element in a vector.
- [abs(\_:)](abs%28__%29-2m9bi.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-68p0z.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-7b2i.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-cim1.md): Returns each element in a vector clamped to a specified scalar range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-6i7q4.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-45ygx.md): Returns the minimum value in a vector.
- [reduce_min(\_:)](reduce_min%28__%29-3l43s.md): Returns the minimum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4gy97.md): Returns the maximum value in a vector.
- [reduce_max(\_:)](reduce_max%28__%29-5wvu6.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2utmv.md): Returns the sum of all elements in a vector.
- [reduce_add(\_:)](reduce_add%28__%29-9pjza.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_max(\_:\_:)](simd_max%28____%29-93k3o.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-1zb5g.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-1w3tf.md): Returns the maximum value of each element in a vector.
- [simd_min(\_:\_:)](simd_min%28____%29-2t446.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-8safl.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-8p0ea.md): Returns the minimum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-69748.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all(\_:)](simd_all%28__%29-1apey.md): Returns true if the high-order bit of every element is set; false otherwise.
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-78l7a.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [int3](int3.md): Deprecated.
- [vector_int3](vector_int3.md)

## See Also

### Vector Data Types

- [simd_int1](simd_int1.md): A vector of one 32-bit signed integer element.
- [simd_int2](simd_int2.md): A vector of two 32-bit signed integer elements.
- [simd_int4](simd_int4.md): A vector of four 32-bit signed integer elements.
- [simd_int8](simd_int8.md): A vector of eight 32-bit signed integer elements.
- [simd_int16](simd_int16.md): A vector of sixteen 32-bit signed integer elements.

# simd_int3 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 32-bit signed integer elements.

## Declaration

```objectivec
typedef int __attribute__((ext_vector_type(3))) simd_int3;
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_int3](simd_make_int3%28__%29-2tix4.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_int3](simd_make_int3%28__%29-2r609.md): Returns a new vector from the specified vector.
- [simd_make_int3](simd_make_int3%28__%29-3fioe.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_int3](simd_make_int3%28__%29-28n96.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_int3](simd_make_int3%28__%29-4wbrt.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_int3_undef](simd_make_int3_undef%28__%29-5kpok.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_int3](simd_make_int3%28__%29-4pdxm.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_int3](simd_make_int3%28______%29.md): Returns a new vector from the specified scalar values.
- [vector3](vector3-8jq14.md): Returns a new vector from the specified scalar values.
- [simd_make_int3_undef](simd_make_int3_undef%28__%29-5q1nf.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_int3](simd_make_int3%28____%29-7nox5.md): Returns a new vector from a vector and a scalar value.
- [vector3](vector3-7wv2r.md): Returns a new vector from a vector and a scalar value.
- [simd_make_int3](simd_make_int3%28____%29-48lb0.md): Returns a new vector from a scalar value and a vector.

### Functions to Create Three-Element Vectors From Vectors of Other Types

- [simd_int](simd_int-9k08p.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_int](simd_int-9ka9l.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_int](simd_int-9jvcp.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_int](simd_int-9k56h.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_int](simd_int-9jx7l.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_int](simd_int-9k71d.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_int](simd_int-9jvmj.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_int](simd_int-9k5ln.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_int](simd_int-9k8m7.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_int](simd_int-9k83f.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_int_sat](simd_int_sat-6weo6.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-6w4w6.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-6w9t2.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-6vzom.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-6wgfu.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-6w6m2.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-6wfsi.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-6w5ki.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-6w3v2.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_int_sat](simd_int_sat-6w3aa.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Round-Half-to-Even Conversion From Single-Precision Vectors

- [simd_int_rte](simd_int_rte-8wkxz.md): Returns a new vector from the specified three-element vector.

### Common Functions

- [simd_abs](simd_abs%28__%29-8d4m3.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-68p0z.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-6i7q4.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-45ygx.md): Returns the minimum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4gy97.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2utmv.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_max](simd_max%28____%29-93k3o.md): Returns the maximum value of each element in a vector.
- [simd_min](simd_min%28____%29-2t446.md): Returns the minimum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-69748.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all](simd_all%28__%29-1apey.md): Returns true if the high-order bit of every element is set; false otherwise.
- [simd_bitselect](simd_bitselect%28______%29-78l7a.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_int3](vector_int3.md)

## See Also

### Vector Data Types

- [simd_int1](simd_int1.md): A vector of one 32-bit signed integer element.
- [simd_int2](simd_int2.md): A vector of two 32-bit signed integer elements.
- [simd_int4](simd_int4.md): A vector of four 32-bit signed integer elements.
- [simd_int8](simd_int8.md): A vector of eight 32-bit signed integer elements.
- [simd_int16](simd_int16.md): A vector of sixteen 32-bit signed integer elements.
