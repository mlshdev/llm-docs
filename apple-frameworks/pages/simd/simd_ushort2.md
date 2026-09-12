> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_ushort2](https://developer.apple.com/documentation/simd/simd_ushort2)

# simd_ushort2 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 16-bit unsigned integer elements.

## Declaration

```swift
typealias simd_ushort2 = SIMD2<UInt16>
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_ushort2(\_:)](simd_make_ushort2%28__%29-2dkjj.md): Returns a new vector from the specified vector.
- [simd_make_ushort2(\_:)](simd_make_ushort2%28__%29-2gsja.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_ushort2(\_:)](simd_make_ushort2%28__%29-1sfxh.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_ushort2(\_:)](simd_make_ushort2%28__%29-2yrlt.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_ushort2(\_:)](simd_make_ushort2%28__%29-72vh1.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_ushort2(\_:)](simd_make_ushort2%28__%29-8zwg1.md): Returns a new vector by truncating the specified thirty two-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_ushort2(\_:)](simd_make_ushort2%28__%29-4i2ym.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ushort2(\_:\_:)](simd_make_ushort2%28____%29.md): Returns a new vector from the specified scalar values.
- [simd_make_ushort2_undef(\_:)](simd_make_ushort2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-3o9ad.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-ktbu.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-49m28.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4kcqg.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2pw16.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-717c8.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-27z7q.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-649i9.md)
- [simd_all(\_:)](simd_all%28__%29-1dffj.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-9p6cd.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ushort2](vector_ushort2.md)

## See Also

### Vector Data Types

- [simd_ushort1](simd_ushort1.md): A vector of one 16-bit unsigned integer element.
- [simd_ushort3](simd_ushort3.md): A vector of three 16-bit unsigned integer elements.
- [simd_ushort4](simd_ushort4.md): A vector of four 16-bit unsigned integer elements.
- [simd_ushort8](simd_ushort8.md): A vector of eight 16-bit unsigned integer elements.
- [simd_ushort16](simd_ushort16.md): A vector of sixteen 16-bit unsigned integer elements.
- [simd_ushort32](simd_ushort32.md): A vector of thirty-two 16-bit unsigned integer elements.

# simd_ushort2 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 16-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned short __attribute__((ext_vector_type(2))) simd_ushort2;
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_ushort2](simd_make_ushort2%28__%29-2dkjj.md): Returns a new vector from the specified vector.
- [simd_make_ushort2](simd_make_ushort2%28__%29-2gsja.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_ushort2](simd_make_ushort2%28__%29-1sfxh.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_ushort2](simd_make_ushort2%28__%29-2yrlt.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_ushort2](simd_make_ushort2%28__%29-72vh1.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_ushort2](simd_make_ushort2%28__%29-8zwg1.md): Returns a new vector by truncating the specified thirty two-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_ushort2](simd_make_ushort2%28__%29-4i2ym.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ushort2](simd_make_ushort2%28____%29.md): Returns a new vector from the specified scalar values.
- [vector2](vector2-39jw3.md): Returns a new vector from the specified scalar values.
- [simd_make_ushort2_undef](simd_make_ushort2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Two-Element Vectors From Vectors of Other Types

- [simd_ushort](simd_ushort-3j95f.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ushort](simd_ushort-3jj4j.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-3j49f.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ushort](simd_ushort-3je8j.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-3jb1r.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ushort](simd_ushort-3jl2n.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-3ja7h.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_ushort](simd_ushort-3jk19.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-3ji9x.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_ushort](simd_ushort-3jhkd.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_ushort_sat](simd_ushort_sat-7h07e.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-7ha6i.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-7h54a.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-7hf1m.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-7h23i.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-7hc2m.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-7h2xq.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-7hcwu.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-7hb0i.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_ushort_sat](simd_ushort_sat-7haim.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-3o9ad.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-ktbu.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-49m28.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4kcqg.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2pw16.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-717c8.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-27z7q.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-649i9.md)
- [simd_all](simd_all%28__%29-1dffj.md)
- [simd_bitselect](simd_bitselect%28______%29-9p6cd.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ushort2](vector_ushort2.md)

## See Also

### Vector Data Types

- [simd_ushort1](simd_ushort1.md): A vector of one 16-bit unsigned integer element.
- [simd_ushort3](simd_ushort3.md): A vector of three 16-bit unsigned integer elements.
- [simd_ushort4](simd_ushort4.md): A vector of four 16-bit unsigned integer elements.
- [simd_ushort8](simd_ushort8.md): A vector of eight 16-bit unsigned integer elements.
- [simd_ushort16](simd_ushort16.md): A vector of sixteen 16-bit unsigned integer elements.
- [simd_ushort32](simd_ushort32.md): A vector of thirty-two 16-bit unsigned integer elements.
