> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_char2](https://developer.apple.com/documentation/simd/simd_char2)

# simd_char2 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 8-bit signed integer elements.

## Declaration

```swift
typealias simd_char2 = SIMD2<CChar>
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_char2(\_:)](simd_make_char2%28__%29-3yugv.md): Returns a new vector from the specified vector.
- [simd_make_char2(\_:)](simd_make_char2%28__%29-3vcc6.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_char2(\_:)](simd_make_char2%28__%29-3dx8l.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_char2(\_:)](simd_make_char2%28__%29-2yw9d.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_char2(\_:)](simd_make_char2%28__%29-2o33b.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_char2(\_:)](simd_make_char2%28__%29-6vtvj.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_char2(\_:)](simd_make_char2%28__%29-7bvq1.md): Returns a new vector by truncating the specified sixty four-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_char2(\_:)](simd_make_char2%28__%29-97vf3.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_char2(\_:\_:)](simd_make_char2%28____%29.md): Returns a new vector from the specified scalar values.
- [simd_make_char2_undef(\_:)](simd_make_char2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-88i9q.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-5vl7.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-3n6nt.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-49h4g.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4krqw.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2qb2i.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-5di41.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-6op8l.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-64och.md)
- [simd_all(\_:)](simd_all%28__%29-1d0nz.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-2nrwa.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_char2](vector_char2.md)

## See Also

### Vector Data Types

- [simd_char1](simd_char1.md): A vector of one 8-bit signed integer element.
- [simd_char3](simd_char3.md): A vector of three 8-bit signed integer elements.
- [simd_char4](simd_char4.md): A vector of four 8-bit signed integer elements.
- [simd_char8](simd_char8.md): A vector of eight 8-bit signed integer elements.
- [simd_char16](simd_char16.md): A vector of sixteen 8-bit signed integer elements.
- [simd_char32](simd_char32.md): A vector of thirty-two 8-bit signed integer elements.
- [simd_char64](simd_char64.md): A vector of sixty-four 8-bit signed integer elements.

# simd_char2 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 8-bit signed integer elements.

## Declaration

```objectivec
typedef char __attribute__((ext_vector_type(2))) simd_char2;
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_char2](simd_make_char2%28__%29-3yugv.md): Returns a new vector from the specified vector.
- [simd_make_char2](simd_make_char2%28__%29-3vcc6.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_char2](simd_make_char2%28__%29-3dx8l.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_char2](simd_make_char2%28__%29-2yw9d.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_char2](simd_make_char2%28__%29-2o33b.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_char2](simd_make_char2%28__%29-6vtvj.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_char2](simd_make_char2%28__%29-7bvq1.md): Returns a new vector by truncating the specified sixty four-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_char2](simd_make_char2%28__%29-97vf3.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_char2](simd_make_char2%28____%29.md): Returns a new vector from the specified scalar values.
- [vector2](vector2-5sh4e.md): Returns a new vector from the specified scalar values.
- [simd_make_char2_undef](simd_make_char2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Two-Element Vectors From Vectors of Other Types

- [simd_char](simd_char-7vww4.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_char](simd_char-7w72c.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_char](simd_char-7vrz8.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_char](simd_char-7w1t0.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_char](simd_char-7vyzg.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_char](simd_char-7w8rg.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_char](simd_char-7vxdk.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_char](simd_char-7w77c.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_char](simd_char-7w5iw.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_char](simd_char-7w4wo.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_char_sat](simd_char_sat-2k22h.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-2kbzt.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-2jx4p.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-2k721.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-2jyx5.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-2k8w9.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-2jy2b.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-2k7zn.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-2kb3z.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_char_sat](simd_char_sat-2kag3.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-88i9q.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-5vl7.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-3n6nt.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-49h4g.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4krqw.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2qb2i.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-5di41.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-6op8l.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-64och.md)
- [simd_all](simd_all%28__%29-1d0nz.md)
- [simd_bitselect](simd_bitselect%28______%29-2nrwa.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_char2](vector_char2.md)

## See Also

### Vector Data Types

- [simd_char1](simd_char1.md): A vector of one 8-bit signed integer element.
- [simd_char3](simd_char3.md): A vector of three 8-bit signed integer elements.
- [simd_char4](simd_char4.md): A vector of four 8-bit signed integer elements.
- [simd_char8](simd_char8.md): A vector of eight 8-bit signed integer elements.
- [simd_char16](simd_char16.md): A vector of sixteen 8-bit signed integer elements.
- [simd_char32](simd_char32.md): A vector of thirty-two 8-bit signed integer elements.
- [simd_char64](simd_char64.md): A vector of sixty-four 8-bit signed integer elements.
