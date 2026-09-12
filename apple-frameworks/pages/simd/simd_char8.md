> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_char8](https://developer.apple.com/documentation/simd/simd_char8)

# simd_char8 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 8-bit signed integer elements.

## Declaration

```swift
typealias simd_char8 = SIMD8<CChar>
```

## Topics

### Functions to Create Eight-Element Vectors From Other Vectors

- [simd_make_char8(\_:)](simd_make_char8%28__%29-3e9h4.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_char8(\_:)](simd_make_char8%28__%29-39q4x.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_char8(\_:)](simd_make_char8%28__%29-3y2oy.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_char8(\_:)](simd_make_char8%28__%29-4c00u.md): Returns a new vector from the specified vector.
- [simd_make_char8(\_:)](simd_make_char8%28__%29-497r7.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_char8(\_:)](simd_make_char8%28__%29-tbln.md): Returns a new vector by truncating the specified thrity two-element vector.
- [simd_make_char8(\_:)](simd_make_char8%28__%29-4m1k5.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_char8(\_:\_:)](simd_make_char8%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_char8_undef(\_:)](simd_make_char8_undef%28__%29-4zw8k.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_char8_undef(\_:)](simd_make_char8_undef%28__%29-53bml.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_char8_undef(\_:)](simd_make_char8_undef%28__%29-5kqwe.md): Returns a new vector from the specified four-element vector, and other elements undefined.

### Functions to Create Eight-Element Vectors From Scalar Values

- [simd_make_char8(\_:)](simd_make_char8%28__%29-2wraz.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_char8_undef(\_:)](simd_make_char8_undef%28__%29-830qy.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-7oowg.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-6t9ze.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-7xed4.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-3omfa.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-55mb2.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-3b8ak.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-66w6r.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-1zyht.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6plnr.md)
- [simd_all(\_:)](simd_all%28__%29-1yyw9.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-5bgc3.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_char8](vector_char8.md)

## See Also

### Vector Data Types

- [simd_char1](simd_char1.md): A vector of one 8-bit signed integer element.
- [simd_char2](simd_char2.md): A vector of two 8-bit signed integer elements.
- [simd_char3](simd_char3.md): A vector of three 8-bit signed integer elements.
- [simd_char4](simd_char4.md): A vector of four 8-bit signed integer elements.
- [simd_char16](simd_char16.md): A vector of sixteen 8-bit signed integer elements.
- [simd_char32](simd_char32.md): A vector of thirty-two 8-bit signed integer elements.
- [simd_char64](simd_char64.md): A vector of sixty-four 8-bit signed integer elements.

# simd_char8 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 8-bit signed integer elements.

## Declaration

```objectivec
typedef char __attribute__((ext_vector_type(8))) simd_char8;
```

## Topics

### Functions to Create Eight-Element Vectors From Other Vectors

- [simd_make_char8](simd_make_char8%28__%29-3e9h4.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_char8](simd_make_char8%28__%29-39q4x.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_char8](simd_make_char8%28__%29-3y2oy.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_char8](simd_make_char8%28__%29-4c00u.md): Returns a new vector from the specified vector.
- [simd_make_char8](simd_make_char8%28__%29-497r7.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_char8](simd_make_char8%28__%29-tbln.md): Returns a new vector by truncating the specified thrity two-element vector.
- [simd_make_char8](simd_make_char8%28__%29-4m1k5.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_char8](simd_make_char8%28____%29.md): Returns a new vector from the specified vectors.
- [vector8](vector8-73z2d.md): Returns a new vector from the specified vectors.
- [simd_make_char8_undef](simd_make_char8_undef%28__%29-4zw8k.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_char8_undef](simd_make_char8_undef%28__%29-53bml.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_char8_undef](simd_make_char8_undef%28__%29-5kqwe.md): Returns a new vector from the specified four-element vector, and other elements undefined.

### Functions to Create Eight-Element Vectors From Scalar Values

- [simd_make_char8](simd_make_char8%28__%29-2wraz.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_char8_undef](simd_make_char8_undef%28__%29-830qy.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Eight-Element Vectors From Vectors of Other Types

- [simd_char](simd_char-7azp6.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_char](simd_char-7apve.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_char](simd_char-7b4ze.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_char](simd_char-7aure.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_char](simd_char-7b2w6.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_char](simd_char-7at2e.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_char](simd_char-7b3y6.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_char](simd_char-7au4e.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_char](simd_char-7aqw2.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_char](simd_char-7arha.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_char_sat](simd_char_sat-1k3vb.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-1kdqv.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-1jyvr.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-1k8uv.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-1k1zv.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-1kbyz.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-1k125.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-1kb19.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-1kcv9.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_char_sat](simd_char_sat-1kdj1.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-7oowg.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-6t9ze.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-7xed4.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-3omfa.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-55mb2.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-3b8ak.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-66w6r.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-1zyht.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6plnr.md)
- [simd_all](simd_all%28__%29-1yyw9.md)
- [simd_bitselect](simd_bitselect%28______%29-5bgc3.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_char8](vector_char8.md)

## See Also

### Vector Data Types

- [simd_char1](simd_char1.md): A vector of one 8-bit signed integer element.
- [simd_char2](simd_char2.md): A vector of two 8-bit signed integer elements.
- [simd_char3](simd_char3.md): A vector of three 8-bit signed integer elements.
- [simd_char4](simd_char4.md): A vector of four 8-bit signed integer elements.
- [simd_char16](simd_char16.md): A vector of sixteen 8-bit signed integer elements.
- [simd_char32](simd_char32.md): A vector of thirty-two 8-bit signed integer elements.
- [simd_char64](simd_char64.md): A vector of sixty-four 8-bit signed integer elements.
