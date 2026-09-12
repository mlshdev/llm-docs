> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_int2](https://developer.apple.com/documentation/simd/simd_int2)

# simd_int2 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 32-bit signed integer elements.

## Declaration

```swift
typealias simd_int2 = SIMD2<Int32>
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_int2(\_:)](simd_make_int2%28__%29-1j0r7.md): Returns a new vector from the specified vector.
- [simd_make_int2(\_:)](simd_make_int2%28__%29-1mclu.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_int2(\_:)](simd_make_int2%28__%29-1qyb9.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_int2(\_:)](simd_make_int2%28__%29-23rr5.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_int2(\_:)](simd_make_int2%28__%29-4okip.md): Returns a new vector by truncating the specified sixteen-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_int2(\_:)](simd_make_int2%28__%29-3zby.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_int2(\_:\_:)](simd_make_int2%28____%29.md): Returns a new vector from the specified scalar values.
- [simd_make_int2_undef(\_:)](simd_make_int2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-88kbu.md): Returns the absolute value of each element in a vector.
- [abs(\_:)](abs%28__%29-770jg.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-9n2rx.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-y596.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-11cyt.md): Returns each element in a vector clamped to a specified scalar range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-8sg1t.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-49f1c.md): Returns the minimum value in a vector.
- [reduce_min(\_:)](reduce_min%28__%29-34ha7.md): Returns the minimum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4kojc.md): Returns the maximum value in a vector.
- [reduce_max(\_:)](reduce_max%28__%29-6qw44.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2qeam.md): Returns the sum of all elements in a vector.
- [reduce_add(\_:)](reduce_add%28__%29-4edwc.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_max(\_:\_:)](simd_max%28____%29-2xs4j.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-9xpv0.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-9uijf.md): Returns the maximum value of each element in a vector.
- [simd_min(\_:\_:)](simd_min%28____%29-3focz.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-jyi5.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-goji.md): Returns the minimum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-64rh5.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all(\_:)](simd_all%28__%29-1cxjv.md): Returns true if the high-order bit of every element is set; false otherwise.
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-6p66c.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [int2](int2.md): Deprecated.
- [vector_int2](vector_int2.md)

## See Also

### Vector Data Types

- [simd_int1](simd_int1.md): A vector of one 32-bit signed integer element.
- [simd_int3](simd_int3.md): A vector of three 32-bit signed integer elements.
- [simd_int4](simd_int4.md): A vector of four 32-bit signed integer elements.
- [simd_int8](simd_int8.md): A vector of eight 32-bit signed integer elements.
- [simd_int16](simd_int16.md): A vector of sixteen 32-bit signed integer elements.

# simd_int2 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 32-bit signed integer elements.

## Declaration

```objectivec
typedef int __attribute__((ext_vector_type(2))) simd_int2;
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_int2](simd_make_int2%28__%29-1j0r7.md): Returns a new vector from the specified vector.
- [simd_make_int2](simd_make_int2%28__%29-1mclu.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_int2](simd_make_int2%28__%29-1qyb9.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_int2](simd_make_int2%28__%29-23rr5.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_int2](simd_make_int2%28__%29-4okip.md): Returns a new vector by truncating the specified sixteen-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_int2](simd_make_int2%28__%29-3zby.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_int2](simd_make_int2%28____%29.md): Returns a new vector from the specified scalar values.
- [vector2](vector2-9gvdx.md): Returns a new vector from the specified scalar values.
- [simd_make_int2_undef](simd_make_int2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Two-Element Vectors From Vectors of Other Types

- [simd_int](simd_int-9nfo0.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_int](simd_int-9n5ow.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_int](simd_int-9nkr4.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_int](simd_int-9nas0.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_int](simd_int-9nds0.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_int](simd_int-9n3sw.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_int](simd_int-9ncyc.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_int](simd_int-9n2z8.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_int](simd_int-9n4v0.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_int](simd_int-9n5es.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_int_sat](simd_int_sat-6swof.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-6smr3.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-6t1vz.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-6srpr.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-6sztn.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-6sq1n.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-6t0ud.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-6sqyt.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-6snv1.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_int_sat](simd_int_sat-6sohh.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Round-Half-to-Even Conversion From Single-Precision Vectors

- [simd_int_rte](simd_int_rte-8zh34.md): Returns a new vector from the specified two-element vector.

### Common Functions

- [simd_abs](simd_abs%28__%29-88kbu.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-9n2rx.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-8sg1t.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-49f1c.md): Returns the minimum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4kojc.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2qeam.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_max](simd_max%28____%29-2xs4j.md): Returns the maximum value of each element in a vector.
- [simd_min](simd_min%28____%29-3focz.md): Returns the minimum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-64rh5.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all](simd_all%28__%29-1cxjv.md): Returns true if the high-order bit of every element is set; false otherwise.
- [simd_bitselect](simd_bitselect%28______%29-6p66c.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_int2](vector_int2.md)

## See Also

### Vector Data Types

- [simd_int1](simd_int1.md): A vector of one 32-bit signed integer element.
- [simd_int3](simd_int3.md): A vector of three 32-bit signed integer elements.
- [simd_int4](simd_int4.md): A vector of four 32-bit signed integer elements.
- [simd_int8](simd_int8.md): A vector of eight 32-bit signed integer elements.
- [simd_int16](simd_int16.md): A vector of sixteen 32-bit signed integer elements.
