> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_uint3](https://developer.apple.com/documentation/simd/simd_uint3)

# simd_uint3 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 32-bit unsigned integer elements.

## Declaration

```swift
typealias simd_uint3 = SIMD3<UInt32>
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_uint3(\_:)](simd_make_uint3%28__%29-7e6jd.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uint3(\_:)](simd_make_uint3%28__%29-7h348.md): Returns a new vector from the specified vector.
- [simd_make_uint3(\_:)](simd_make_uint3%28__%29-77mmf.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_uint3(\_:)](simd_make_uint3%28__%29-6sqjv.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_uint3(\_:)](simd_make_uint3%28__%29-6rqe9.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_uint3_undef(\_:)](simd_make_uint3_undef%28__%29-3a81k.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_uint3(\_:)](simd_make_uint3%28__%29-512r5.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uint3(\_:\_:\_:)](simd_make_uint3%28______%29.md): Returns a new vector from the specified scalar values.
- [simd_make_uint3_undef(\_:)](simd_make_uint3_undef%28__%29-1waea.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_uint3(\_:\_:)](simd_make_uint3%28____%29-5y5kc.md): Returns a new vector from a vector and a scalar value.
- [simd_make_uint3(\_:\_:)](simd_make_uint3%28____%29-210g2.md): Returns a new vector from a vector and a scalar value.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-7ssi2.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-dhvg.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-gp7z.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-57xz1.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-4688x.md): Returns the minimum value in a vector.
- [reduce_min(\_:)](reduce_min%28__%29-1yst6.md): Returns the minimum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4h33d.md): Returns the maximum value in a vector.
- [reduce_max(\_:)](reduce_max%28__%29-1h2j7.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2v3pj.md): Returns the sum of all elements in a vector.
- [reduce_add(\_:)](reduce_add%28__%29-7drmm.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-2sp22.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-9iyne.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-9ftkl.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-7a6cq.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-703ka.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-6ww7t.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-69h3c.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all(\_:)](simd_all%28__%29-1afl6.md): Returns true if the high-order bit of every element is set; false otherwise.
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-4hak.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [uint3](uint3.md): Deprecated.
- [vector_uint3](vector_uint3.md)

## See Also

### Vector Data Types

- [simd_uint1](simd_uint1.md): A vector of one 32-bit unsigned integer element.
- [simd_uint2](simd_uint2.md): A vector of two 32-bit unsigned integer elements.
- [simd_uint4](simd_uint4.md): A vector of four 32-bit unsigned integer elements.
- [simd_uint8](simd_uint8.md): A vector of eight 32-bit unsigned integer elements.
- [simd_uint16](simd_uint16.md): A vector of sixteen 32-bit unsigned integer elements.

# simd_uint3 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 32-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned int __attribute__((ext_vector_type(3))) simd_uint3;
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_uint3](simd_make_uint3%28__%29-7e6jd.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uint3](simd_make_uint3%28__%29-7h348.md): Returns a new vector from the specified vector.
- [simd_make_uint3](simd_make_uint3%28__%29-77mmf.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_uint3](simd_make_uint3%28__%29-6sqjv.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_uint3](simd_make_uint3%28__%29-6rqe9.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_uint3_undef](simd_make_uint3_undef%28__%29-3a81k.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_uint3](simd_make_uint3%28__%29-512r5.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uint3](simd_make_uint3%28______%29.md): Returns a new vector from the specified scalar values.
- [vector3](vector3-3qyta.md): Returns a new vector from the specified scalar values.
- [simd_make_uint3_undef](simd_make_uint3_undef%28__%29-1waea.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_uint3](simd_make_uint3%28____%29-5y5kc.md): Returns a new vector from a vector and a scalar value.
- [simd_make_uint3](simd_make_uint3%28____%29-210g2.md): Returns a new vector from a vector and a scalar value.
- [vector3](vector3-3xwc.md): Returns a new vector from a scalar value and a vector.

### Functions to Create Three-Element Vectors From Vectors of Other Types

- [simd_uint](simd_uint-7h2bf.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uint](simd_uint-7gs6z.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uint](simd_uint-7h797.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uint](simd_uint-7gxbv.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uint](simd_uint-7h087.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uint](simd_uint-7gqav.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uint](simd_uint-7gzhl.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_uint](simd_uint-7gpgp.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_uint](simd_uint-7grch.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_uint](simd_uint-7grux.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_uint_sat](simd_uint_sat-ncn5.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-n2o1.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-nhgh.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-n7q9.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-nfrd.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-n5op.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-ngif.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-n6qf.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-n3iz.md): Returns a new vector from the specified vector of 32-bit, floating point elements.
- [simd_uint_sat](simd_uint_sat-n44n.md): Returns a new vector from the specified vector of 64-bit, floating point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-7ssi2.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-57xz1.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-4688x.md): Returns the minimum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4h33d.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2v3pj.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-2sp22.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-7a6cq.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-69h3c.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all](simd_all%28__%29-1afl6.md): Returns true if the high-order bit of every element is set; false otherwise.
- [simd_bitselect](simd_bitselect%28______%29-4hak.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uint3](vector_uint3.md)

## See Also

### Vector Data Types

- [simd_uint1](simd_uint1.md): A vector of one 32-bit unsigned integer element.
- [simd_uint2](simd_uint2.md): A vector of two 32-bit unsigned integer elements.
- [simd_uint4](simd_uint4.md): A vector of four 32-bit unsigned integer elements.
- [simd_uint8](simd_uint8.md): A vector of eight 32-bit unsigned integer elements.
- [simd_uint16](simd_uint16.md): A vector of sixteen 32-bit unsigned integer elements.
