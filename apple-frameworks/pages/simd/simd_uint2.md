> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_uint2](https://developer.apple.com/documentation/simd/simd_uint2)

# simd_uint2 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 32-bit unsigned integer elements.

## Declaration

```swift
typealias simd_uint2 = SIMD2<UInt32>
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_uint2(\_:)](simd_make_uint2%28__%29-3fnd3.md): Returns a new vector from the specified vector.
- [simd_make_uint2(\_:)](simd_make_uint2%28__%29-3cbr2.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_uint2(\_:)](simd_make_uint2%28__%29-3m281.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_uint2(\_:)](simd_make_uint2%28__%29-40jb1.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_uint2(\_:)](simd_make_uint2%28__%29-9b05l.md): Returns a new vector by truncating the specified sixteen-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_uint2(\_:)](simd_make_uint2%28__%29-82fnu.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uint2(\_:\_:)](simd_make_uint2%28____%29.md): Returns a new vector from the specified scalar values.
- [simd_make_uint2_undef(\_:)](simd_make_uint2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-5yp7.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-5cyx4.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-59rk7.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-2urgh.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-49p5s.md): Returns the minimum value in a vector.
- [reduce_min(\_:)](reduce_min%28__%29-2b4fr.md): Returns the minimum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4ket4.md): Returns the maximum value in a vector.
- [reduce_max(\_:)](reduce_max%28__%29-5dxp4.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2q44e.md): Returns the sum of all elements in a vector.
- [reduce_add(\_:)](reduce_add%28__%29-5uvts.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-9b5n7.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-6xef7.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-70ls4.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-8931y.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-9ch4d.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-9fm5e.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-64hll.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all(\_:)](simd_all%28__%29-1d7bv.md): Returns true if the high-order bit of every element is set; false otherwise.
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-5dqwa.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [uint2](uint2.md): Deprecated.
- [vector_uint2](vector_uint2.md)

## See Also

### Vector Data Types

- [simd_uint1](simd_uint1.md): A vector of one 32-bit unsigned integer element.
- [simd_uint3](simd_uint3.md): A vector of three 32-bit unsigned integer elements.
- [simd_uint4](simd_uint4.md): A vector of four 32-bit unsigned integer elements.
- [simd_uint8](simd_uint8.md): A vector of eight 32-bit unsigned integer elements.
- [simd_uint16](simd_uint16.md): A vector of sixteen 32-bit unsigned integer elements.

# simd_uint2 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 32-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned int __attribute__((ext_vector_type(2))) simd_uint2;
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_uint2](simd_make_uint2%28__%29-3fnd3.md): Returns a new vector from the specified vector.
- [simd_make_uint2](simd_make_uint2%28__%29-3cbr2.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_uint2](simd_make_uint2%28__%29-3m281.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_uint2](simd_make_uint2%28__%29-40jb1.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_uint2](simd_make_uint2%28__%29-9b05l.md): Returns a new vector by truncating the specified sixteen-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_uint2](simd_make_uint2%28__%29-82fnu.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uint2](simd_make_uint2%28____%29.md): Returns a new vector from the specified scalar values.
- [vector2](vector2-4xvts.md): Returns a new vector from the specified scalar values.
- [simd_make_uint2_undef](simd_make_uint2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Two-Element Vectors From Vectors of Other Types

- [simd_uint](simd_uint-7dmoi.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uint](simd_uint-7dwk2.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uint](simd_uint-7dhsi.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uint](simd_uint-7drrm.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uint](simd_uint-7djoe.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uint](simd_uint-7dtge.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uint](simd_uint-7di4e.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_uint](simd_uint-7ds5a.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_uint](simd_uint-7dv22.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_uint](simd_uint-7due6.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_uint_sat](simd_uint_sat-qumw.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-qkgo.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-qpg8.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-qfo8.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-qwh4.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-qmjs.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-qvc4.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-qllw.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-qjj0.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_uint_sat](simd_uint_sat-qiyc.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-5yp7.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-2urgh.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-49p5s.md): Returns the minimum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4ket4.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2q44e.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-9b5n7.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-8931y.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-64hll.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all](simd_all%28__%29-1d7bv.md): Returns true if the high-order bit of every element is set; false otherwise.
- [simd_bitselect](simd_bitselect%28______%29-5dqwa.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uint2](vector_uint2.md)

## See Also

### Vector Data Types

- [simd_uint1](simd_uint1.md): A vector of one 32-bit unsigned integer element.
- [simd_uint3](simd_uint3.md): A vector of three 32-bit unsigned integer elements.
- [simd_uint4](simd_uint4.md): A vector of four 32-bit unsigned integer elements.
- [simd_uint8](simd_uint8.md): A vector of eight 32-bit unsigned integer elements.
- [simd_uint16](simd_uint16.md): A vector of sixteen 32-bit unsigned integer elements.
