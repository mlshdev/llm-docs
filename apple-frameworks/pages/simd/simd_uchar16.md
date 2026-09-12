> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_uchar16](https://developer.apple.com/documentation/simd/simd_uchar16)

# simd_uchar16 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of sixteen 8-bit unsigned integer elements.

## Declaration

```swift
typealias simd_uchar16 = SIMD16<UInt8>
```

## Topics

### Functions to Create Sixteen-Element Vectors From Other Vectors

- [simd_make_uchar16(\_:)](simd_make_uchar16%28__%29-3fz5p.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uchar16(\_:)](simd_make_uchar16%28__%29-3d3no.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_uchar16(\_:)](simd_make_uchar16%28__%29-39lkf.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_uchar16(\_:)](simd_make_uchar16%28__%29-2v4kz.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_uchar16(\_:)](simd_make_uchar16%28__%29-3jakr.md): Returns a new vector from the specified vector.
- [simd_make_uchar16(\_:)](simd_make_uchar16%28__%29-1q2p8.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_uchar16(\_:)](simd_make_uchar16%28__%29-4u0bo.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_uchar16(\_:\_:)](simd_make_uchar16%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_uchar16_undef(\_:)](simd_make_uchar16_undef%28__%29-7pk27.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_uchar16_undef(\_:)](simd_make_uchar16_undef%28__%29-7sziu.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_uchar16_undef(\_:)](simd_make_uchar16_undef%28__%29-7jo0t.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_uchar16_undef(\_:)](simd_make_uchar16_undef%28__%29-74mxt.md): Returns a new vector from the specified eight-element vector, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Scalar Values

- [simd_make_uchar16(\_:)](simd_make_uchar16%28__%29-v6ux.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uchar16_undef(\_:)](simd_make_uchar16_undef%28__%29-4x6v6.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-1zlhc.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-6la77.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-3d193.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-8inet.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-7n460.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-8haop.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-248h3.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-933sa.md)
- [simd_all(\_:)](simd_all%28__%29-ikbg.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-9i5ku.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uchar16](vector_uchar16.md)

## See Also

### Vector Data Types

- [simd_uchar1](simd_uchar1.md): A vector of one 8-bit unsigned integer element.
- [simd_uchar2](simd_uchar2.md): A vector of two 8-bit unsigned integer elements.
- [simd_uchar3](simd_uchar3.md): A vector of three 8-bit unsigned integer elements.
- [simd_uchar4](simd_uchar4.md): A vector of four 8-bit unsigned integer elements.
- [simd_uchar8](simd_uchar8.md): A vector of eight 8-bit unsigned integer elements.
- [simd_uchar32](simd_uchar32.md): A vector of thirty-two 8-bit unsigned integer elements.
- [simd_uchar64](simd_uchar64.md): A vector of sixty-four 8-bit unsigned integer elements.

# simd_uchar16 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of sixteen 8-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned char __attribute__((ext_vector_type(16))) simd_uchar16;
```

## Topics

### Functions to Create Sixteen-Element Vectors From Other Vectors

- [simd_make_uchar16](simd_make_uchar16%28__%29-3fz5p.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uchar16](simd_make_uchar16%28__%29-3d3no.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_uchar16](simd_make_uchar16%28__%29-39lkf.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_uchar16](simd_make_uchar16%28__%29-2v4kz.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_uchar16](simd_make_uchar16%28__%29-3jakr.md): Returns a new vector from the specified vector.
- [simd_make_uchar16](simd_make_uchar16%28__%29-1q2p8.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_uchar16](simd_make_uchar16%28__%29-4u0bo.md): Returns a new vector by truncating the specified sixty four-element vector.
- [vector16](vector16-5572p.md): Returns a new vector from the specified vectors.
- [simd_make_uchar16](simd_make_uchar16%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_uchar16_undef](simd_make_uchar16_undef%28__%29-7pk27.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_uchar16_undef](simd_make_uchar16_undef%28__%29-7sziu.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_uchar16_undef](simd_make_uchar16_undef%28__%29-7jo0t.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_uchar16_undef](simd_make_uchar16_undef%28__%29-74mxt.md): Returns a new vector from the specified eight-element vector, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Scalar Values

- [simd_make_uchar16](simd_make_uchar16%28__%29-v6ux.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uchar16_undef](simd_make_uchar16_undef%28__%29-4x6v6.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Vectors of Other Types

- [simd_uchar](simd_uchar-1lpok.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uchar](simd_uchar-1lzno.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-1lkmc.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uchar](simd_uchar-1lun8.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-1lspo.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uchar](simd_uchar-1m2sc.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-1lxyo.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_uchar_sat](simd_uchar_sat-2l8ia.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-2lihe.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-2ldea.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-2lnde.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-2ladq.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-2lkcu.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-2lhga.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-1zlhc.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-6la77.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-3d193.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-8inet.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-7n460.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-8haop.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-248h3.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-933sa.md)
- [simd_all](simd_all%28__%29-ikbg.md)
- [simd_bitselect](simd_bitselect%28______%29-9i5ku.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uchar16](vector_uchar16.md)

## See Also

### Vector Data Types

- [simd_uchar1](simd_uchar1.md): A vector of one 8-bit unsigned integer element.
- [simd_uchar2](simd_uchar2.md): A vector of two 8-bit unsigned integer elements.
- [simd_uchar3](simd_uchar3.md): A vector of three 8-bit unsigned integer elements.
- [simd_uchar4](simd_uchar4.md): A vector of four 8-bit unsigned integer elements.
- [simd_uchar8](simd_uchar8.md): A vector of eight 8-bit unsigned integer elements.
- [simd_uchar32](simd_uchar32.md): A vector of thirty-two 8-bit unsigned integer elements.
- [simd_uchar64](simd_uchar64.md): A vector of sixty-four 8-bit unsigned integer elements.
