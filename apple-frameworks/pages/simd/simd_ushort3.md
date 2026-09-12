> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_ushort3](https://developer.apple.com/documentation/simd/simd_ushort3)

# simd_ushort3 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 16-bit unsigned integer elements.

## Declaration

```swift
typealias simd_ushort3 = SIMD3<UInt16>
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_ushort3(\_:)](simd_make_ushort3%28__%29-80g2g.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ushort3(\_:)](simd_make_ushort3%28__%29-7xag1.md): Returns a new vector from the specified vector.
- [simd_make_ushort3(\_:)](simd_make_ushort3%28__%29-7u2h6.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_ushort3(\_:)](simd_make_ushort3%28__%29-7fbo6.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_ushort3(\_:)](simd_make_ushort3%28__%29-58w42.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_ushort3(\_:)](simd_make_ushort3%28__%29-11fhu.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_ushort3_undef(\_:)](simd_make_ushort3_undef%28__%29-6m2i9.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_ushort3(\_:)](simd_make_ushort3%28__%29-93msa.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ushort3(\_:\_:\_:)](simd_make_ushort3%28______%29.md): Returns a new vector from the specified scalar values.
- [simd_make_ushort3_undef(\_:)](simd_make_ushort3_undef%28__%29-6cyga.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_ushort3(\_:\_:)](simd_make_ushort3%28____%29-3ap3r.md): Returns a new vector from a vector and a scalar value.
- [simd_make_ushort3(\_:\_:)](simd_make_ushort3%28____%29-9h935.md): Returns a new vector from a scalar value and a vector.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-4akg3.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-9b270.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-46gdl.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4h4s1.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2vbub.md): Returns the sum of all elements in a vector.

### Extrema Function

- [simd_min(\_:\_:)](simd_min%28____%29-4jk8l.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-4fcp5.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-69p6w.md)
- [simd_all(\_:)](simd_all%28__%29-1a7fa.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-7yglw.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ushort3](vector_ushort3.md)

## See Also

### Vector Data Types

- [simd_ushort1](simd_ushort1.md): A vector of one 16-bit unsigned integer element.
- [simd_ushort2](simd_ushort2.md): A vector of two 16-bit unsigned integer elements.
- [simd_ushort4](simd_ushort4.md): A vector of four 16-bit unsigned integer elements.
- [simd_ushort8](simd_ushort8.md): A vector of eight 16-bit unsigned integer elements.
- [simd_ushort16](simd_ushort16.md): A vector of sixteen 16-bit unsigned integer elements.
- [simd_ushort32](simd_ushort32.md): A vector of thirty-two 16-bit unsigned integer elements.

# simd_ushort3 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 16-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned short __attribute__((ext_vector_type(3))) simd_ushort3;
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_ushort3](simd_make_ushort3%28__%29-80g2g.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ushort3](simd_make_ushort3%28__%29-7xag1.md): Returns a new vector from the specified vector.
- [simd_make_ushort3](simd_make_ushort3%28__%29-7u2h6.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_ushort3](simd_make_ushort3%28__%29-7fbo6.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_ushort3](simd_make_ushort3%28__%29-58w42.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_ushort3](simd_make_ushort3%28__%29-11fhu.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_ushort3_undef](simd_make_ushort3_undef%28__%29-6m2i9.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_ushort3](simd_make_ushort3%28__%29-93msa.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ushort3](simd_make_ushort3%28______%29.md): Returns a new vector from the specified scalar values.
- [vector3](vector3-6gujk.md): Returns a new vector from the specified scalar values.
- [simd_make_ushort3_undef](simd_make_ushort3_undef%28__%29-6cyga.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [vector3](vector3-5er36.md): Returns a new vector from a vector and a scalar value.
- [simd_make_ushort3](simd_make_ushort3%28____%29-3ap3r.md): Returns a new vector from a vector and a scalar value.
- [simd_make_ushort3](simd_make_ushort3%28____%29-9h935.md): Returns a new vector from a scalar value and a vector.

### Functions to Create Three-Element Vectors From Vectors of Other Types

- [simd_ushort](simd_ushort-3fra2.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ushort](simd_ushort-3g196.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-3fw9m.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ushort](simd_ushort-3g656.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-3fudi.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ushort](simd_ushort-3g492.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-3fvby.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_ushort](simd_ushort-3g5b2.md): Returns a new vector from the specified vector of 64-bit, unsigned integer element.
- [simd_ushort](simd_ushort-3g22q.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_ushort](simd_ushort-3g2v2.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_ushort_sat](simd_ushort_sat-7kfoj.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-7kpib.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-7kapv.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-7kkoz.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-7kipj.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-7kstz.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-7kk9d.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-7kuc1.md): Returns a new vector from the specified vector of 64-bit, unsigned integer element.
- [simd_ushort_sat](simd_ushort_sat-7kr89.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_ushort_sat](simd_ushort_sat-7kroh.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-4akg3.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-9b270.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-46gdl.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4h4s1.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2vbub.md): Returns the sum of all elements in a vector.

### Extrema Function

- [simd_min](simd_min%28____%29-4jk8l.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-4fcp5.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-69p6w.md)
- [simd_all](simd_all%28__%29-1a7fa.md)
- [simd_bitselect](simd_bitselect%28______%29-7yglw.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ushort3](vector_ushort3.md)

## See Also

### Vector Data Types

- [simd_ushort1](simd_ushort1.md): A vector of one 16-bit unsigned integer element.
- [simd_ushort2](simd_ushort2.md): A vector of two 16-bit unsigned integer elements.
- [simd_ushort4](simd_ushort4.md): A vector of four 16-bit unsigned integer elements.
- [simd_ushort8](simd_ushort8.md): A vector of eight 16-bit unsigned integer elements.
- [simd_ushort16](simd_ushort16.md): A vector of sixteen 16-bit unsigned integer elements.
- [simd_ushort32](simd_ushort32.md): A vector of thirty-two 16-bit unsigned integer elements.
