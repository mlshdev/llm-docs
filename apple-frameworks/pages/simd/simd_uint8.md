> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_uint8](https://developer.apple.com/documentation/simd/simd_uint8)

# simd_uint8 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 32-bit unsigned integer elements.

## Declaration

```swift
typealias simd_uint8 = SIMD8<UInt32>
```

## Topics

### Functions to Create Eight-Element Vectors From Other Vectors

- [simd_make_uint8(\_:)](simd_make_uint8%28__%29-2vaoh.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uint8(\_:)](simd_make_uint8%28__%29-2rtxs.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_uint8(\_:)](simd_make_uint8%28__%29-2ovzr.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_uint8(\_:)](simd_make_uint8%28__%29-3sztf.md): Returns a new vector from the specified vector.
- [simd_make_uint8(\_:)](simd_make_uint8%28__%29-64gkj.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_uint8(\_:\_:)](simd_make_uint8%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_uint8_undef(\_:)](simd_make_uint8_undef%28__%29-ck1m.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_uint8_undef(\_:)](simd_make_uint8_undef%28__%29-hojv.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_uint8_undef(\_:)](simd_make_uint8_undef%28__%29-6a8k.md): Returns a new vector from the specified four-element vector, and other elements undefined.

### Functions to Create Eight-Element Vectors From Scalar Values

- [simd_make_uint8(\_:)](simd_make_uint8%28__%29-7jqj3.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uint8_undef(\_:)](simd_make_uint8_undef%28__%29-8p5i8.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-9evfi.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-1v1wn.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-3o9f6.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-55ah6.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-3av90.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-873mx.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-4l2k6.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6p8mz.md)
- [simd_all(\_:)](simd_all%28__%29-1ynbd.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-803fj.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uint8](vector_uint8.md)

## See Also

### Vector Data Types

- [simd_uint1](simd_uint1.md): A vector of one 32-bit unsigned integer element.
- [simd_uint2](simd_uint2.md): A vector of two 32-bit unsigned integer elements.
- [simd_uint3](simd_uint3.md): A vector of three 32-bit unsigned integer elements.
- [simd_uint4](simd_uint4.md): A vector of four 32-bit unsigned integer elements.
- [simd_uint16](simd_uint16.md): A vector of sixteen 32-bit unsigned integer elements.

# simd_uint8 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 32-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned int __attribute__((ext_vector_type(8))) simd_uint8;
```

## Topics

### Functions to Create Eight-Element Vectors From Other Vectors

- [simd_make_uint8](simd_make_uint8%28__%29-2vaoh.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uint8](simd_make_uint8%28__%29-2rtxs.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_uint8](simd_make_uint8%28__%29-2ovzr.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_uint8](simd_make_uint8%28__%29-3sztf.md): Returns a new vector from the specified vector.
- [simd_make_uint8](simd_make_uint8%28__%29-64gkj.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_uint8](simd_make_uint8%28____%29.md): Returns a new vector from the specified vectors.
- [vector8](vector8-2a1px.md): Returns a new vector from the specified vectors.
- [simd_make_uint8_undef](simd_make_uint8_undef%28__%29-ck1m.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_uint8_undef](simd_make_uint8_undef%28__%29-hojv.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_uint8_undef](simd_make_uint8_undef%28__%29-6a8k.md): Returns a new vector from the specified four-element vector, and other elements undefined.

### Functions to Create Eight-Element Vectors From Scalar Values

- [simd_make_uint8](simd_make_uint8%28__%29-7jqj3.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uint8_undef](simd_make_uint8_undef%28__%29-8p5i8.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Eight-Element Vectors From Vectors of Other Types

- [simd_uint](simd_uint-8dih8.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uint](simd_uint-8ds98.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uint](simd_uint-8ddf0.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uint](simd_uint-8dncc.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uint](simd_uint-8dgmc.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uint](simd_uint-8dqg4.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uint](simd_uint-8dhgw.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_uint](simd_uint-8drlc.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_uint](simd_uint-8dt6o.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_uint](simd_uint-8dtuo.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_uint_sat](simd_uint_sat-1bp92.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-1bf6e.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-1bu8m.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-1bk2e.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-1bs6i.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-1bi96.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-1brg2.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-1bhbm.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-1bebq.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_uint_sat](simd_uint_sat-1bexu.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-9evfi.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-1v1wn.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-3o9f6.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-55ah6.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-3av90.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-873mx.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-4l2k6.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6p8mz.md)
- [simd_all](simd_all%28__%29-1ynbd.md)
- [simd_bitselect](simd_bitselect%28______%29-803fj.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uint8](vector_uint8.md)

## See Also

### Vector Data Types

- [simd_uint1](simd_uint1.md): A vector of one 32-bit unsigned integer element.
- [simd_uint2](simd_uint2.md): A vector of two 32-bit unsigned integer elements.
- [simd_uint3](simd_uint3.md): A vector of three 32-bit unsigned integer elements.
- [simd_uint4](simd_uint4.md): A vector of four 32-bit unsigned integer elements.
- [simd_uint16](simd_uint16.md): A vector of sixteen 32-bit unsigned integer elements.
