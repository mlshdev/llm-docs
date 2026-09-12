> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_ushort32](https://developer.apple.com/documentation/simd/simd_ushort32)

# simd_ushort32 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of thirty-two 16-bit unsigned integer elements.

## Declaration

```swift
typealias simd_ushort32 = SIMD32<UInt16>
```

## Topics

### Functions to Create Thirty Two-Element Vectors From Other Vectors

- [simd_make_ushort32(\_:)](simd_make_ushort32%28__%29-359dc.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ushort32(\_:)](simd_make_ushort32%28__%29-323vt.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_ushort32(\_:)](simd_make_ushort32%28__%29-2yvzm.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_ushort32(\_:)](simd_make_ushort32%28__%29-2k4se.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_ushort32(\_:)](simd_make_ushort32%28__%29-1y3a6.md): Returns a new vector from the specified sixteen-element vector, and other elements set to zero.
- [simd_make_ushort32(\_:)](simd_make_ushort32%28__%29-7o0fp.md): Returns a new vector from the specified vector.
- [simd_make_ushort32(\_:\_:)](simd_make_ushort32%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_ushort32_undef(\_:)](simd_make_ushort32_undef%28__%29-5c9cc.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_ushort32_undef(\_:)](simd_make_ushort32_undef%28__%29-5fet1.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_ushort32_undef(\_:)](simd_make_ushort32_undef%28__%29-563cu.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_ushort32_undef(\_:)](simd_make_ushort32_undef%28__%29-4r2aq.md): Returns a new vector from the specified eight-element vector, and other elements undefined.
- [simd_make_ushort32_undef(\_:)](simd_make_ushort32_undef%28__%29-ie6m.md): Returns a new vector from the specified sixteen-element vector, and other elements undefined.

### Functions to Create Thirty Two-Element Vectors From Scalar Values

- [simd_make_ushort32(\_:)](simd_make_ushort32%28__%29-9so7l.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ushort32_undef(\_:)](simd_make_ushort32_undef%28__%29-1kuiz.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-8pjou.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-4rifl.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-2b90g.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-9irzc.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-1uuef.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-4512d.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-3xzw5.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-3au8l.md)
- [simd_all(\_:)](simd_all%28__%29-1kmnn.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-6mgti.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ushort32](vector_ushort32.md)

## See Also

### Vector Data Types

- [simd_ushort1](simd_ushort1.md): A vector of one 16-bit unsigned integer element.
- [simd_ushort2](simd_ushort2.md): A vector of two 16-bit unsigned integer elements.
- [simd_ushort3](simd_ushort3.md): A vector of three 16-bit unsigned integer elements.
- [simd_ushort4](simd_ushort4.md): A vector of four 16-bit unsigned integer elements.
- [simd_ushort8](simd_ushort8.md): A vector of eight 16-bit unsigned integer elements.
- [simd_ushort16](simd_ushort16.md): A vector of sixteen 16-bit unsigned integer elements.

# simd_ushort32 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of thirty-two 16-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned short __attribute__((ext_vector_type(32))) simd_ushort32;
```

## Topics

### Functions to Create Thirty Two-Element Vectors From Other Vectors

- [simd_make_ushort32](simd_make_ushort32%28__%29-359dc.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ushort32](simd_make_ushort32%28__%29-323vt.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_ushort32](simd_make_ushort32%28__%29-2yvzm.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_ushort32](simd_make_ushort32%28__%29-2k4se.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_ushort32](simd_make_ushort32%28__%29-1y3a6.md): Returns a new vector from the specified sixteen-element vector, and other elements set to zero.
- [simd_make_ushort32](simd_make_ushort32%28__%29-7o0fp.md): Returns a new vector from the specified vector.
- [simd_make_ushort32](simd_make_ushort32%28____%29.md): Returns a new vector from the specified vectors.
- [vector32](vector32-9avu.md): Returns a new vector from the specified vectors.
- [simd_make_ushort32_undef](simd_make_ushort32_undef%28__%29-5c9cc.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_ushort32_undef](simd_make_ushort32_undef%28__%29-5fet1.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_ushort32_undef](simd_make_ushort32_undef%28__%29-563cu.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_ushort32_undef](simd_make_ushort32_undef%28__%29-4r2aq.md): Returns a new vector from the specified eight-element vector, and other elements undefined.
- [simd_make_ushort32_undef](simd_make_ushort32_undef%28__%29-ie6m.md): Returns a new vector from the specified sixteen-element vector, and other elements undefined.

### Functions to Create Thirty Two-Element Vectors From Scalar Values

- [simd_make_ushort32](simd_make_ushort32%28__%29-9so7l.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ushort32_undef](simd_make_ushort32_undef%28__%29-1kuiz.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Thirty Two-Element Vectors From Vectors of Other Types

- [simd_ushort](simd_ushort-5br1u.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ushort](simd_ushort-5c12q.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-5bm2a.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ushort](simd_ushort-5bvzm.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_ushort_sat](simd_ushort_sat-11tza.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-11k7a.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-11p46.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-11fae.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-8pjou.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-4rifl.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-2b90g.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-9irzc.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-1uuef.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-4512d.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-3xzw5.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-3au8l.md)
- [simd_all](simd_all%28__%29-1kmnn.md)
- [simd_bitselect](simd_bitselect%28______%29-6mgti.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ushort32](vector_ushort32.md)

## See Also

### Vector Data Types

- [simd_ushort1](simd_ushort1.md): A vector of one 16-bit unsigned integer element.
- [simd_ushort2](simd_ushort2.md): A vector of two 16-bit unsigned integer elements.
- [simd_ushort3](simd_ushort3.md): A vector of three 16-bit unsigned integer elements.
- [simd_ushort4](simd_ushort4.md): A vector of four 16-bit unsigned integer elements.
- [simd_ushort8](simd_ushort8.md): A vector of eight 16-bit unsigned integer elements.
- [simd_ushort16](simd_ushort16.md): A vector of sixteen 16-bit unsigned integer elements.
