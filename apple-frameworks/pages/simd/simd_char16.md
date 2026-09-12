> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_char16](https://developer.apple.com/documentation/simd/simd_char16)

# simd_char16 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of sixteen 8-bit signed integer elements.

## Declaration

```swift
typealias simd_char16 = SIMD16<CChar>
```

## Topics

### Functions to Create Sixteen-Element Vectors From Other Vectors

- [simd_make_char16(\_:)](simd_make_char16%28__%29-5aqmo.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_char16(\_:)](simd_make_char16%28__%29-5e63t.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_char16(\_:)](simd_make_char16%28__%29-54urm.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_char16(\_:)](simd_make_char16%28__%29-4pte6.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_char16(\_:)](simd_make_char16%28__%29-516bc.md): Returns a new vector from the specified vector.
- [simd_make_char16(\_:)](simd_make_char16%28__%29-tfq4.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_char16(\_:)](simd_make_char16%28__%29-2j94t.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_char16(\_:\_:)](simd_make_char16%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_char16_undef(\_:)](simd_make_char16_undef%28__%29-5kb1b.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_char16_undef(\_:)](simd_make_char16_undef%28__%29-5gvk6.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_char16_undef(\_:)](simd_make_char16_undef%28__%29-5ddf1.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_char16_undef(\_:)](simd_make_char16_undef%28__%29-4yci9.md): Returns a new vector from the specified eight-element vector, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Scalar Values

- [simd_make_char16(\_:)](simd_make_char16%28__%29-9skzf.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_char16_undef(\_:)](simd_make_char16_undef%28__%29-9uhre.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-475ng.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-509lj.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-19z1a.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-3crdj.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-8idj9.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-7mtzs.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-3t06b.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-2pboz.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-92tuy.md)
- [simd_all(\_:)](simd_all%28__%29-iajg.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-5uq86.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_char16](vector_char16.md)

## See Also

### Vector Data Types

- [simd_char1](simd_char1.md): A vector of one 8-bit signed integer element.
- [simd_char2](simd_char2.md): A vector of two 8-bit signed integer elements.
- [simd_char3](simd_char3.md): A vector of three 8-bit signed integer elements.
- [simd_char4](simd_char4.md): A vector of four 8-bit signed integer elements.
- [simd_char8](simd_char8.md): A vector of eight 8-bit signed integer elements.
- [simd_char32](simd_char32.md): A vector of thirty-two 8-bit signed integer elements.
- [simd_char64](simd_char64.md): A vector of sixty-four 8-bit signed integer elements.

# simd_char16 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of sixteen 8-bit signed integer elements.

## Declaration

```objectivec
typedef char __attribute__((ext_vector_type(16))) simd_char16;
```

## Topics

### Functions to Create Sixteen-Element Vectors From Other Vectors

- [simd_make_char16](simd_make_char16%28__%29-5aqmo.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_char16](simd_make_char16%28__%29-5e63t.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_char16](simd_make_char16%28__%29-54urm.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_char16](simd_make_char16%28__%29-4pte6.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_char16](simd_make_char16%28__%29-516bc.md): Returns a new vector from the specified vector.
- [simd_make_char16](simd_make_char16%28__%29-tfq4.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_char16](simd_make_char16%28__%29-2j94t.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_char16](simd_make_char16%28____%29.md): Returns a new vector from the specified vectors.
- [vector16](vector16-gwvj.md): Returns a new vector from the specified vectors.
- [simd_make_char16_undef](simd_make_char16_undef%28__%29-5kb1b.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_char16_undef](simd_make_char16_undef%28__%29-5gvk6.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_char16_undef](simd_make_char16_undef%28__%29-5ddf1.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_char16_undef](simd_make_char16_undef%28__%29-4yci9.md): Returns a new vector from the specified eight-element vector, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Scalar Values

- [simd_make_char16](simd_make_char16%28__%29-9skzf.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_char16_undef](simd_make_char16_undef%28__%29-9uhre.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Vectors of Other Types

- [simd_char](simd_char-98lzg.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_char](simd_char-98c7g.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_char](simd_char-98qy4.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_char](simd_char-98h4c.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_char](simd_char-98nqs.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_char](simd_char-98dx0.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_char](simd_char-98dt4.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_char_sat](simd_char_sat-6mtcs.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-6n38c.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-6mogs.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-6myfw.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-6mwk4.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_char_sat](simd_char_sat-6n6j8.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_char_sat](simd_char_sat-6n1q0.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-475ng.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-509lj.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-19z1a.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-3crdj.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-8idj9.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-7mtzs.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-3t06b.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-2pboz.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-92tuy.md)
- [simd_all](simd_all%28__%29-iajg.md)
- [simd_bitselect](simd_bitselect%28______%29-5uq86.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_char16](vector_char16.md)

## See Also

### Vector Data Types

- [simd_char1](simd_char1.md): A vector of one 8-bit signed integer element.
- [simd_char2](simd_char2.md): A vector of two 8-bit signed integer elements.
- [simd_char3](simd_char3.md): A vector of three 8-bit signed integer elements.
- [simd_char4](simd_char4.md): A vector of four 8-bit signed integer elements.
- [simd_char8](simd_char8.md): A vector of eight 8-bit signed integer elements.
- [simd_char32](simd_char32.md): A vector of thirty-two 8-bit signed integer elements.
- [simd_char64](simd_char64.md): A vector of sixty-four 8-bit signed integer elements.
