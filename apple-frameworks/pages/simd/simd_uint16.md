> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_uint16](https://developer.apple.com/documentation/simd/simd_uint16)

# simd_uint16 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of sixteen 32-bit unsigned integer elements.

## Declaration

```swift
typealias simd_uint16 = SIMD16<UInt32>
```

## Topics

### Functions to Create Sixteen-Element Vectors From Other Vectors

- [simd_make_uint16(\_:)](simd_make_uint16%28__%29-99aov.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uint16(\_:)](simd_make_uint16%28__%29-9efau.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_uint16(\_:)](simd_make_uint16%28__%29-9u6t5.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_uint16(\_:)](simd_make_uint16%28__%29-9hiq.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_uint16(\_:)](simd_make_uint16%28__%29-9s9mg.md): Returns a new vector from the specified vector.
- [simd_make_uint16(\_:\_:)](simd_make_uint16%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_uint16_undef(\_:)](simd_make_uint16_undef%28__%29-9w2go.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_uint16_undef(\_:)](simd_make_uint16_undef%28__%29-9slqx.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_uint16_undef(\_:)](simd_make_uint16_undef%28__%29-hcyl.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_uint16_undef(\_:)](simd_make_uint16_undef%28__%29-we1l.md): Returns a new vector from the specified eight-element vector, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Scalar Values

- [simd_make_uint16(\_:)](simd_make_uint16%28__%29-3h7ip.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uint16_undef(\_:)](simd_make_uint16_undef%28__%29-6ss74.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-226tg.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-35l8d.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-3cy7f.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-8iqq5.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-7n22w.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-5plhb.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-3cz8t.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-931x2.md)
- [simd_all(\_:)](simd_all%28__%29-inj8.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-35yra.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uint16](vector_uint16.md)

## See Also

### Vector Data Types

- [simd_uint1](simd_uint1.md): A vector of one 32-bit unsigned integer element.
- [simd_uint2](simd_uint2.md): A vector of two 32-bit unsigned integer elements.
- [simd_uint3](simd_uint3.md): A vector of three 32-bit unsigned integer elements.
- [simd_uint4](simd_uint4.md): A vector of four 32-bit unsigned integer elements.
- [simd_uint8](simd_uint8.md): A vector of eight 32-bit unsigned integer elements.

# simd_uint16 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of sixteen 32-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned int __attribute__((ext_vector_type(16))) simd_uint16;
```

## Topics

### Functions to Create Sixteen-Element Vectors From Other Vectors

- [simd_make_uint16](simd_make_uint16%28__%29-99aov.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uint16](simd_make_uint16%28__%29-9efau.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_uint16](simd_make_uint16%28__%29-9u6t5.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_uint16](simd_make_uint16%28__%29-9hiq.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_uint16](simd_make_uint16%28__%29-9s9mg.md): Returns a new vector from the specified vector.
- [simd_make_uint16](simd_make_uint16%28____%29.md): Returns a new vector from the specified vectors.
- [vector16](vector16-8xs3z.md): Returns a new vector from the specified vectors.
- [simd_make_uint16_undef](simd_make_uint16_undef%28__%29-9w2go.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_uint16_undef](simd_make_uint16_undef%28__%29-9slqx.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_uint16_undef](simd_make_uint16_undef%28__%29-hcyl.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_uint16_undef](simd_make_uint16_undef%28__%29-we1l.md): Returns a new vector from the specified eight-element vector, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Scalar Values

- [simd_make_uint16](simd_make_uint16%28__%29-3h7ip.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uint16_undef](simd_make_uint16_undef%28__%29-6ss74.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Vectors of Other Types

- [simd_uint](simd_uint-19fie.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uint](simd_uint-19pae.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uint](simd_uint-19aau.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uint](simd_uint-19kfa.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uint](simd_uint-19cb6.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uint](simd_uint-19m36.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uint](simd_uint-19qym.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_uint_sat](simd_uint_sat-548q7.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-53yzz.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-543rj.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-53tzj.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-5471v.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-53wxf.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-53x8t.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-226tg.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-35l8d.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-3cy7f.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-8iqq5.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-7n22w.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-5plhb.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-3cz8t.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-931x2.md)
- [simd_all](simd_all%28__%29-inj8.md)
- [simd_bitselect](simd_bitselect%28______%29-35yra.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uint16](vector_uint16.md)

## See Also

### Vector Data Types

- [simd_uint1](simd_uint1.md): A vector of one 32-bit unsigned integer element.
- [simd_uint2](simd_uint2.md): A vector of two 32-bit unsigned integer elements.
- [simd_uint3](simd_uint3.md): A vector of three 32-bit unsigned integer elements.
- [simd_uint4](simd_uint4.md): A vector of four 32-bit unsigned integer elements.
- [simd_uint8](simd_uint8.md): A vector of eight 32-bit unsigned integer elements.
