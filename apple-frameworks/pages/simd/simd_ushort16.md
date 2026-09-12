> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_ushort16](https://developer.apple.com/documentation/simd/simd_ushort16)

# simd_ushort16 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of sixteen 16-bit unsigned integer elements.

## Declaration

```swift
typealias simd_ushort16 = SIMD16<UInt16>
```

## Topics

### Functions to Create Sixteen-Element Vectors From Other Vectors

- [simd_make_ushort16(\_:)](simd_make_ushort16%28__%29-5h1oe.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ushort16(\_:)](simd_make_ushort16%28__%29-5dtrr.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_ushort16(\_:)](simd_make_ushort16%28__%29-4vumc.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_ushort16(\_:)](simd_make_ushort16%28__%29-4h3f4.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_ushort16(\_:)](simd_make_ushort16%28__%29-43b0g.md): Returns a new vector from the specified vector.
- [simd_make_ushort16(\_:)](simd_make_ushort16%28__%29-5wstb.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_ushort16(\_:\_:)](simd_make_ushort16%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_ushort16_undef(\_:)](simd_make_ushort16_undef%28__%29-3jyo.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_ushort16_undef(\_:)](simd_make_ushort16_undef%28__%29-8phl.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_ushort16_undef(\_:)](simd_make_ushort16_undef%28__%29-bxgi.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_ushort16_undef(\_:)](simd_make_ushort16_undef%28__%29-957cx.md): Returns a new vector from the specified eight-element vector, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Scalar Values

- [simd_make_ushort16(\_:)](simd_make_ushort16%28__%29-6sqah.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ushort16_undef(\_:)](simd_make_ushort16_undef%28__%29-6iivl.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-5hezy.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-9luz4.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-3d6c7.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-8isf9.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-7n920.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-99clp.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-1332e.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-938p6.md)
- [simd_all(\_:)](simd_all%28__%29-iffg.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-144l9.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ushort16](vector_ushort16.md)

## See Also

### Vector Data Types

- [simd_ushort1](simd_ushort1.md): A vector of one 16-bit unsigned integer element.
- [simd_ushort2](simd_ushort2.md): A vector of two 16-bit unsigned integer elements.
- [simd_ushort3](simd_ushort3.md): A vector of three 16-bit unsigned integer elements.
- [simd_ushort4](simd_ushort4.md): A vector of four 16-bit unsigned integer elements.
- [simd_ushort8](simd_ushort8.md): A vector of eight 16-bit unsigned integer elements.
- [simd_ushort32](simd_ushort32.md): A vector of thirty-two 16-bit unsigned integer elements.

# simd_ushort16 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of sixteen 16-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned short __attribute__((ext_vector_type(16))) simd_ushort16;
```

## Topics

### Functions to Create Sixteen-Element Vectors From Other Vectors

- [simd_make_ushort16](simd_make_ushort16%28__%29-5h1oe.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ushort16](simd_make_ushort16%28__%29-5dtrr.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_ushort16](simd_make_ushort16%28__%29-4vumc.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_ushort16](simd_make_ushort16%28__%29-4h3f4.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_ushort16](simd_make_ushort16%28__%29-43b0g.md): Returns a new vector from the specified vector.
- [simd_make_ushort16](simd_make_ushort16%28__%29-5wstb.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_ushort16](simd_make_ushort16%28____%29.md): Returns a new vector from the specified vectors.
- [vector16](vector16-4zacu.md): Returns a new vector from the specified vectors.
- [simd_make_ushort16_undef](simd_make_ushort16_undef%28__%29-3jyo.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_ushort16_undef](simd_make_ushort16_undef%28__%29-8phl.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_ushort16_undef](simd_make_ushort16_undef%28__%29-bxgi.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_ushort16_undef](simd_make_ushort16_undef%28__%29-957cx.md): Returns a new vector from the specified eight-element vector, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Scalar Values

- [simd_make_ushort16](simd_make_ushort16%28__%29-6sqah.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ushort16_undef](simd_make_ushort16_undef%28__%29-6iivl.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Vectors of Other Types

- [simd_ushort](simd_ushort-46anm.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ushort](simd_ushort-46khe.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-465ki.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ushort](simd_ushort-46foy.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-468rq.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ushort](simd_ushort-46ism.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-46ivu.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_ushort_sat](simd_ushort_sat-3mcov.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-3mmin.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-3m7r3.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-3mhof.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-3m9j7.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-3mjb7.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-3mlfl.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-5hezy.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-9luz4.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-3d6c7.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-8isf9.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-7n920.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-99clp.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-1332e.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-938p6.md)
- [simd_all](simd_all%28__%29-iffg.md)
- [simd_bitselect](simd_bitselect%28______%29-144l9.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ushort16](vector_ushort16.md)

## See Also

### Vector Data Types

- [simd_ushort1](simd_ushort1.md): A vector of one 16-bit unsigned integer element.
- [simd_ushort2](simd_ushort2.md): A vector of two 16-bit unsigned integer elements.
- [simd_ushort3](simd_ushort3.md): A vector of three 16-bit unsigned integer elements.
- [simd_ushort4](simd_ushort4.md): A vector of four 16-bit unsigned integer elements.
- [simd_ushort8](simd_ushort8.md): A vector of eight 16-bit unsigned integer elements.
- [simd_ushort32](simd_ushort32.md): A vector of thirty-two 16-bit unsigned integer elements.
