> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_char32](https://developer.apple.com/documentation/simd/simd_char32)

# simd_char32 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of thirty-two 8-bit signed integer elements.

## Declaration

```swift
typealias simd_char32 = SIMD32<CChar>
```

## Topics

### Functions to Create Thirty Two-Element Vectors From Other Vectors

- [simd_make_char32(\_:)](simd_make_char32%28__%29-384hl.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_char32(\_:)](simd_make_char32%28__%29-3bm80.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_char32(\_:)](simd_make_char32%28__%29-2n9wz.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_char32(\_:)](simd_make_char32%28__%29-2ag5j.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_char32(\_:)](simd_make_char32%28__%29-3g5k3.md): Returns a new vector from the specified sixteen-element vector, and other elements set to zero.
- [simd_make_char32(\_:)](simd_make_char32%28__%29-8fqzf.md): Returns a new vector from the specified vector.
- [simd_make_char32(\_:)](simd_make_char32%28__%29-6kn8l.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_char32(\_:\_:)](simd_make_char32%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_char32_undef(\_:)](simd_make_char32_undef%28__%29-7t6qn.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_char32_undef(\_:)](simd_make_char32_undef%28__%29-7poo6.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_char32_undef(\_:)](simd_make_char32_undef%28__%29-7z0ct.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_char32_undef(\_:)](simd_make_char32_undef%28__%29-6t8l5.md): Returns a new vector from the specified eight-element vector, and other elements undefined.
- [simd_make_char32_undef(\_:)](simd_make_char32_undef%28__%29-3vq4m.md): Returns a new vector from the specified sixteen-element vector, and other elements undefined.

### Functions to Create Thirty Two-Element Vectors From Scalar Values

- [simd_make_char32(\_:)](simd_make_char32%28__%29-20u7n.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_char32_undef(\_:)](simd_make_char32_undef%28__%29-9nqa9.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-2ca9r.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-2eiom.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-2iweh.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-2au68.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-9j748.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-1uzk7.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-2isjs.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-9ec8n.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-3az4l.md)
- [simd_all(\_:)](simd_all%28__%29-1k7jn.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-2da13.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_char32](vector_char32.md)

## See Also

### Vector Data Types

- [simd_char1](simd_char1.md): A vector of one 8-bit signed integer element.
- [simd_char2](simd_char2.md): A vector of two 8-bit signed integer elements.
- [simd_char3](simd_char3.md): A vector of three 8-bit signed integer elements.
- [simd_char4](simd_char4.md): A vector of four 8-bit signed integer elements.
- [simd_char8](simd_char8.md): A vector of eight 8-bit signed integer elements.
- [simd_char16](simd_char16.md): A vector of sixteen 8-bit signed integer elements.
- [simd_char64](simd_char64.md): A vector of sixty-four 8-bit signed integer elements.

# simd_char32 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of thirty-two 8-bit signed integer elements.

## Declaration

```objectivec
typedef char __attribute__((ext_vector_type(32))) simd_char32;
```

## Topics

### Functions to Create Thirty Two-Element Vectors From Other Vectors

- [simd_make_char32](simd_make_char32%28__%29-384hl.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_char32](simd_make_char32%28__%29-3bm80.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_char32](simd_make_char32%28__%29-2n9wz.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_char32](simd_make_char32%28__%29-2ag5j.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_char32](simd_make_char32%28__%29-3g5k3.md): Returns a new vector from the specified sixteen-element vector, and other elements set to zero.
- [simd_make_char32](simd_make_char32%28__%29-8fqzf.md): Returns a new vector from the specified vector.
- [simd_make_char32](simd_make_char32%28__%29-6kn8l.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_char32](simd_make_char32%28____%29.md): Returns a new vector from the specified vectors.
- [vector32](vector32-6853f.md): Returns a new vector from the specified vectors.
- [simd_make_char32_undef](simd_make_char32_undef%28__%29-7t6qn.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_char32_undef](simd_make_char32_undef%28__%29-7poo6.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_char32_undef](simd_make_char32_undef%28__%29-7z0ct.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_char32_undef](simd_make_char32_undef%28__%29-6t8l5.md): Returns a new vector from the specified eight-element vector, and other elements undefined.
- [simd_make_char32_undef](simd_make_char32_undef%28__%29-3vq4m.md): Returns a new vector from the specified sixteen-element vector, and other elements undefined.

### Functions to Create Thirty Two-Element Vectors From Scalar Values

- [simd_make_char32](simd_make_char32%28__%29-20u7n.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_char32_undef](simd_make_char32_undef%28__%29-9nqa9.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Thirty Two-Element Vectors From Vectors of Other Types

- [simd_char](simd_char-50vc0.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_char](simd_char-5159c.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_char](simd_char-51074.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_char](simd_char-51a68.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_char_sat](simd_char_sat-uyox.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-uov5.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-v3lt.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-utq9.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-2ca9r.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-2eiom.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-2iweh.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-2au68.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-9j748.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-1uzk7.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-2isjs.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-9ec8n.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-3az4l.md)
- [simd_all](simd_all%28__%29-1k7jn.md)
- [simd_bitselect](simd_bitselect%28______%29-2da13.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_char32](vector_char32.md)

## See Also

### Vector Data Types

- [simd_char1](simd_char1.md): A vector of one 8-bit signed integer element.
- [simd_char2](simd_char2.md): A vector of two 8-bit signed integer elements.
- [simd_char3](simd_char3.md): A vector of three 8-bit signed integer elements.
- [simd_char4](simd_char4.md): A vector of four 8-bit signed integer elements.
- [simd_char8](simd_char8.md): A vector of eight 8-bit signed integer elements.
- [simd_char16](simd_char16.md): A vector of sixteen 8-bit signed integer elements.
- [simd_char64](simd_char64.md): A vector of sixty-four 8-bit signed integer elements.
