> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_ushort8](https://developer.apple.com/documentation/simd/simd_ushort8)

# simd_ushort8 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 16-bit unsigned integer elements.

## Declaration

```swift
typealias simd_ushort8 = SIMD8<UInt16>
```

## Topics

### Functions to Create Eight-Element Vectors From Other Vectors

- [simd_make_ushort8(\_:)](simd_make_ushort8%28__%29-1e906.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ushort8(\_:)](simd_make_ushort8%28__%29-1henz.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_ushort8(\_:)](simd_make_ushort8%28__%29-17t38.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_ushort8(\_:)](simd_make_ushort8%28__%29-2e4yw.md): Returns a new vector from the specified vector.
- [simd_make_ushort8(\_:)](simd_make_ushort8%28__%29-5yzvk.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_ushort8(\_:)](simd_make_ushort8%28__%29-4t9gk.md): Returns a new vector by truncating the specified thrity two-element vector.
- [simd_make_ushort8(\_:\_:)](simd_make_ushort8%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_ushort8_undef(\_:)](simd_make_ushort8_undef%28__%29-49rg0.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_ushort8_undef(\_:)](simd_make_ushort8_undef%28__%29-46lw9.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_ushort8_undef(\_:)](simd_make_ushort8_undef%28__%29-416aa.md): Returns a new vector from the specified four-element vector, and other elements undefined.

### Functions to Create Eight-Element Vectors From Scalar Values

- [simd_make_ushort8(\_:)](simd_make_ushort8%28__%29-66ltd.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ushort8_undef(\_:)](simd_make_ushort8_undef%28__%29-wluw.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-81cik.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-3fkex.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-3oh9i.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-55hce.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-3b3cs.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-2600d.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-30jsw.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6pgp3.md)
- [simd_all(\_:)](simd_all%28__%29-1yk7d.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-4yay5.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ushort8](vector_ushort8.md)

## See Also

### Vector Data Types

- [simd_ushort1](simd_ushort1.md): A vector of one 16-bit unsigned integer element.
- [simd_ushort2](simd_ushort2.md): A vector of two 16-bit unsigned integer elements.
- [simd_ushort3](simd_ushort3.md): A vector of three 16-bit unsigned integer elements.
- [simd_ushort4](simd_ushort4.md): A vector of four 16-bit unsigned integer elements.
- [simd_ushort16](simd_ushort16.md): A vector of sixteen 16-bit unsigned integer elements.
- [simd_ushort32](simd_ushort32.md): A vector of thirty-two 16-bit unsigned integer elements.

# simd_ushort8 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 16-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned short __attribute__((ext_vector_type(8))) simd_ushort8;
```

## Topics

### Functions to Create Eight-Element Vectors From Other Vectors

- [simd_make_ushort8](simd_make_ushort8%28__%29-1e906.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ushort8](simd_make_ushort8%28__%29-1henz.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_ushort8](simd_make_ushort8%28__%29-17t38.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_ushort8](simd_make_ushort8%28__%29-2e4yw.md): Returns a new vector from the specified vector.
- [simd_make_ushort8](simd_make_ushort8%28__%29-5yzvk.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_ushort8](simd_make_ushort8%28__%29-4t9gk.md): Returns a new vector by truncating the specified thrity two-element vector.
- [simd_make_ushort8](simd_make_ushort8%28____%29.md): Returns a new vector from the specified vectors.
- [vector8](vector8-411sw.md): Returns a new vector from the specified vectors.
- [simd_make_ushort8_undef](simd_make_ushort8_undef%28__%29-49rg0.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_ushort8_undef](simd_make_ushort8_undef%28__%29-46lw9.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_ushort8_undef](simd_make_ushort8_undef%28__%29-416aa.md): Returns a new vector from the specified four-element vector, and other elements undefined.

### Functions to Create Eight-Element Vectors From Scalar Values

- [simd_make_ushort8](simd_make_ushort8%28__%29-66ltd.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ushort8_undef](simd_make_ushort8_undef%28__%29-wluw.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Eight-Element Vectors From Vectors of Other Types

- [simd_ushort](simd_ushort-443vh.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ushort](simd_ushort-44dr1.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-448v1.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ushort](simd_ushort-44iu5.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-446z9.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ushort](simd_ushort-44gyd.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-44617.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_ushort](simd_ushort-44fwr.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-44cwv.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_ushort](simd_ushort-44dgr.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_ushort_sat](simd_ushort_sat-8fsa4.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-8fi24.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-8fn0s.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-8fd8s.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-8fq7o.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-8fgdw.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-8foko.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-8feug.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-8fgi0.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_ushort_sat](simd_ushort_sat-8fh48.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-81cik.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-3fkex.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-3oh9i.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-55hce.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-3b3cs.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-2600d.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-30jsw.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6pgp3.md)
- [simd_all](simd_all%28__%29-1yk7d.md)
- [simd_bitselect](simd_bitselect%28______%29-4yay5.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ushort8](vector_ushort8.md)

## See Also

### Vector Data Types

- [simd_ushort1](simd_ushort1.md): A vector of one 16-bit unsigned integer element.
- [simd_ushort2](simd_ushort2.md): A vector of two 16-bit unsigned integer elements.
- [simd_ushort3](simd_ushort3.md): A vector of three 16-bit unsigned integer elements.
- [simd_ushort4](simd_ushort4.md): A vector of four 16-bit unsigned integer elements.
- [simd_ushort16](simd_ushort16.md): A vector of sixteen 16-bit unsigned integer elements.
- [simd_ushort32](simd_ushort32.md): A vector of thirty-two 16-bit unsigned integer elements.
