> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_char4](https://developer.apple.com/documentation/simd/simd_char4)

# simd_char4 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 8-bit signed integer elements.

## Declaration

```swift
typealias simd_char4 = SIMD4<CChar>
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_char4(\_:)](simd_make_char4%28__%29-mdlt.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_char4(\_:)](simd_make_char4%28__%29-k1u0.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_char4(\_:)](simd_make_char4%28__%29-gjz7.md): Returns a new vector from the specified vector.
- [simd_make_char4(\_:)](simd_make_char4%28__%29-1mbtb.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_char4(\_:)](simd_make_char4%28__%29-4y0kh.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_char4(\_:)](simd_make_char4%28__%29-3tnz9.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_char4(\_:)](simd_make_char4%28__%29-69u9q.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_char4(\_:\_:)](simd_make_char4%28____%29-3vf4l.md): Returns a new vector from the specified vectors.
- [simd_make_char4_undef(\_:)](simd_make_char4_undef%28__%29-6zlek.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_char4_undef(\_:)](simd_make_char4_undef%28__%29-73111.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_char4(\_:)](simd_make_char4%28__%29-8kfe3.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_char4(\_:\_:\_:\_:)](simd_make_char4%28________%29.md): Returns a new vector from the specified scalar values.
- [simd_make_char4_undef(\_:)](simd_make_char4_undef%28__%29-99pql.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Value

- [simd_make_char4(\_:\_:\_:)](simd_make_char4%28______%29-82ftd.md): Returns a new vector from a vector and scalar values.
- [simd_make_char4(\_:\_:)](simd_make_char4%28____%29-226qq.md): Returns a new vector from a vector and a scalar value.
- [simd_make_char4(\_:\_:\_:)](simd_make_char4%28______%29-9mb46.md): Returns a new vector from two scalar values and a vector.
- [simd_make_char4(\_:\_:\_:)](simd_make_char4%28______%29-94kun.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_char4(\_:\_:)](simd_make_char4%28____%29-76rpp.md): Returns a new vector from a scalar value and a vector.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-81ics.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-1lm34.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-4x3vb.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-4ue96.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4ql9m.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2yeuw.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-2mbto.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-7qdak.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6cs8j.md)
- [simd_all(\_:)](simd_all%28__%29-1jxv1.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-4mvfw.md)

### Alternative Type Alias

- [vector_char4](vector_char4.md)

## See Also

### Vector Data Types

- [simd_char1](simd_char1.md): A vector of one 8-bit signed integer element.
- [simd_char2](simd_char2.md): A vector of two 8-bit signed integer elements.
- [simd_char3](simd_char3.md): A vector of three 8-bit signed integer elements.
- [simd_char8](simd_char8.md): A vector of eight 8-bit signed integer elements.
- [simd_char16](simd_char16.md): A vector of sixteen 8-bit signed integer elements.
- [simd_char32](simd_char32.md): A vector of thirty-two 8-bit signed integer elements.
- [simd_char64](simd_char64.md): A vector of sixty-four 8-bit signed integer elements.

# simd_char4 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 8-bit signed integer elements.

## Declaration

```objectivec
typedef char __attribute__((ext_vector_type(4))) simd_char4;
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_char4](simd_make_char4%28__%29-mdlt.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_char4](simd_make_char4%28__%29-k1u0.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_char4](simd_make_char4%28__%29-gjz7.md): Returns a new vector from the specified vector.
- [simd_make_char4](simd_make_char4%28__%29-1mbtb.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_char4](simd_make_char4%28__%29-4y0kh.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_char4](simd_make_char4%28__%29-3tnz9.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_char4](simd_make_char4%28__%29-69u9q.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_char4](simd_make_char4%28____%29-3vf4l.md): Returns a new vector from the specified vectors.
- [vector4](vector4-695o8.md): Returns a new vector from the specified vectors.
- [simd_make_char4_undef](simd_make_char4_undef%28__%29-6zlek.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_char4_undef](simd_make_char4_undef%28__%29-73111.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_char4](simd_make_char4%28__%29-8kfe3.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [vector4](vector4-2lql7.md): Returns a new vector from the specified scalar values.
- [simd_make_char4](simd_make_char4%28________%29.md): Returns a new vector from the specified scalar values.
- [simd_make_char4_undef](simd_make_char4_undef%28__%29-99pql.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Value

- [simd_make_char4](simd_make_char4%28______%29-82ftd.md): Returns a new vector from a vector and scalar values.
- [simd_make_char4](simd_make_char4%28____%29-226qq.md): Returns a new vector from a vector and a scalar value.
- [vector4](vector4-4dfou.md): Returns a new vector from a vector and a scalar value.
- [simd_make_char4](simd_make_char4%28______%29-9mb46.md): Returns a new vector from two scalar values and a vector.
- [simd_make_char4](simd_make_char4%28______%29-94kun.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_char4](simd_make_char4%28____%29-76rpp.md): Returns a new vector from a scalar value and a vector.

### Functions to Create Four-Element Vectors From Vectors of Other Types

- [simd_char](simd_char-7q0xi.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_char](simd_char-7pqwm.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_char](simd_char-7q5x2.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_char](simd_char-7pvsm.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_char](simd_char-7pz0a.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_char](simd_char-7pp6i.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_char](simd_char-7pxci.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_char](simd_char-7pnki.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_char](simd_char-7pp9i.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_char](simd_char-7pptu.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_char_sat](simd_char_sat-1z4wz.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-1yuzn.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-1z9tv.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-1yzyb.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-1z32v.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-1yt3r.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-1z4mp.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-1yupd.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-1ywi1.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_char_sat](simd_char_sat-1yx5t.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-81ics.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-1lm34.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-4x3vb.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-4ue96.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4ql9m.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2yeuw.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-2mbto.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-7qdak.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6cs8j.md)
- [simd_all](simd_all%28__%29-1jxv1.md)
- [simd_bitselect](simd_bitselect%28______%29-4mvfw.md)

### Alternative Type Alias

- [vector_char4](vector_char4.md)

## See Also

### Vector Data Types

- [simd_char1](simd_char1.md): A vector of one 8-bit signed integer element.
- [simd_char2](simd_char2.md): A vector of two 8-bit signed integer elements.
- [simd_char3](simd_char3.md): A vector of three 8-bit signed integer elements.
- [simd_char8](simd_char8.md): A vector of eight 8-bit signed integer elements.
- [simd_char16](simd_char16.md): A vector of sixteen 8-bit signed integer elements.
- [simd_char32](simd_char32.md): A vector of thirty-two 8-bit signed integer elements.
- [simd_char64](simd_char64.md): A vector of sixty-four 8-bit signed integer elements.
