> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_char3](https://developer.apple.com/documentation/simd/simd_char3)

# simd_char3 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 8-bit signed integer elements.

## Declaration

```swift
typealias simd_char3 = SIMD3<CChar>
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_char3(\_:)](simd_make_char3%28__%29-7hn14.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_char3(\_:)](simd_make_char3%28__%29-7l2ch.md): Returns a new vector from the specified vector.
- [simd_make_char3(\_:)](simd_make_char3%28__%29-81dqq.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_char3(\_:)](simd_make_char3%28__%29-6wpri.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_char3(\_:)](simd_make_char3%28__%29-7kwml.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_char3(\_:)](simd_make_char3%28__%29-5pt8h.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_char3(\_:)](simd_make_char3%28__%29-2kabv.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_char3_undef(\_:)](simd_make_char3_undef%28__%29-3pbpb.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_char3(\_:)](simd_make_char3%28__%29-9zbpd.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_char3(\_:\_:\_:)](simd_make_char3%28______%29.md): Returns a new vector from the specified scalar values.
- [simd_make_char3_undef(\_:)](simd_make_char3_undef%28__%29-866v6.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_char3(\_:\_:)](simd_make_char3%28____%29-5c5ds.md): Returns a new vector from a scalar value and a vector.
- [simd_make_char3(\_:\_:)](simd_make_char3%28____%29-9qv2s.md): Returns a new vector from a vector and a scalar value.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-8d1l3.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-5xm9q.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-ymae.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-461hl.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4h9pt.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2uwqb.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-93d9y.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-5fzu7.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-69a7c.md)
- [simd_all(\_:)](simd_all%28__%29-1aml2.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-4kbjh.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_char3](vector_char3.md)

## See Also

### Vector Data Types

- [simd_char1](simd_char1.md): A vector of one 8-bit signed integer element.
- [simd_char2](simd_char2.md): A vector of two 8-bit signed integer elements.
- [simd_char4](simd_char4.md): A vector of four 8-bit signed integer elements.
- [simd_char8](simd_char8.md): A vector of eight 8-bit signed integer elements.
- [simd_char16](simd_char16.md): A vector of sixteen 8-bit signed integer elements.
- [simd_char32](simd_char32.md): A vector of thirty-two 8-bit signed integer elements.
- [simd_char64](simd_char64.md): A vector of sixty-four 8-bit signed integer elements.

# simd_char3 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 8-bit signed integer elements.

## Declaration

```objectivec
typedef char __attribute__((ext_vector_type(3))) simd_char3;
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_char3](simd_make_char3%28__%29-7hn14.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_char3](simd_make_char3%28__%29-7l2ch.md): Returns a new vector from the specified vector.
- [simd_make_char3](simd_make_char3%28__%29-81dqq.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_char3](simd_make_char3%28__%29-6wpri.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_char3](simd_make_char3%28__%29-7kwml.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_char3](simd_make_char3%28__%29-5pt8h.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_char3](simd_make_char3%28__%29-2kabv.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_char3_undef](simd_make_char3_undef%28__%29-3pbpb.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_char3](simd_make_char3%28__%29-9zbpd.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_char3](simd_make_char3%28______%29.md): Returns a new vector from the specified scalar values.
- [vector3](vector3-7jt7g.md): Returns a new vector from the specified scalar values.
- [simd_make_char3_undef](simd_make_char3_undef%28__%29-866v6.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_char3](simd_make_char3%28____%29-5c5ds.md): Returns a new vector from a scalar value and a vector.
- [simd_make_char3](simd_make_char3%28____%29-9qv2s.md): Returns a new vector from a vector and a scalar value.
- [vector3](vector3-7dpc0.md): Returns a new vector from a vector and a scalar value.

### Functions to Create Three-Element Vectors From Vectors of Other Types

- [simd_char](simd_char-7zce5.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_char](simd_char-7z2kd.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_char](simd_char-7zhfh.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_char](simd_char-7z7i5.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_char](simd_char-7zflh.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_char](simd_char-7z5rp.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_char](simd_char-7zejv.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_char](simd_char-7z4q3.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_char](simd_char-7z1j3.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_char](simd_char-7z22z.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_char_sat](simd_char_sat-2gjzk.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-2gu40.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-2gp4g.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-2gz1s.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-2giaw.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-2gs88.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-2gjc4.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-2gt5w.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-2gv24.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_char_sat](simd_char_sat-2gvmc.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-8d1l3.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-5xm9q.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-ymae.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-461hl.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4h9pt.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2uwqb.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-93d9y.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-5fzu7.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-69a7c.md)
- [simd_all](simd_all%28__%29-1aml2.md)
- [simd_bitselect](simd_bitselect%28______%29-4kbjh.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_char3](vector_char3.md)

## See Also

### Vector Data Types

- [simd_char1](simd_char1.md): A vector of one 8-bit signed integer element.
- [simd_char2](simd_char2.md): A vector of two 8-bit signed integer elements.
- [simd_char4](simd_char4.md): A vector of four 8-bit signed integer elements.
- [simd_char8](simd_char8.md): A vector of eight 8-bit signed integer elements.
- [simd_char16](simd_char16.md): A vector of sixteen 8-bit signed integer elements.
- [simd_char32](simd_char32.md): A vector of thirty-two 8-bit signed integer elements.
- [simd_char64](simd_char64.md): A vector of sixty-four 8-bit signed integer elements.
