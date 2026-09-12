> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_short3](https://developer.apple.com/documentation/simd/simd_short3)

# simd_short3 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 16-bit signed integer elements.

## Declaration

```swift
typealias simd_short3 = SIMD3<Int16>
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_short3(\_:)](simd_make_short3%28__%29-c59z.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_short3(\_:)](simd_make_short3%28__%29-gyam.md): eturns a new vector from the specified vector.
- [simd_make_short3(\_:)](simd_make_short3%28__%29-x9n1.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_short3(\_:)](simd_make_short3%28__%29-1capt.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_short3(\_:)](simd_make_short3%28__%29-9l6v8.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_short3(\_:)](simd_make_short3%28__%29-70om7.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_short3_undef(\_:)](simd_make_short3_undef%28__%29-87ju7.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_short3(\_:)](simd_make_short3%28__%29-2ux4i.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_short3(\_:\_:\_:)](simd_make_short3%28______%29.md): Returns a new vector from the specified scalar values.
- [simd_make_short3_undef(\_:)](simd_make_short3_undef%28__%29-5n83n.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_short3(\_:\_:)](simd_make_short3%28____%29-7dmp4.md): Returns a new vector from a vector and a scalar value.
- [simd_make_short3(\_:\_:)](simd_make_short3%28____%29-9bk9v.md): Returns a new vector from a scalar value and a vector.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-8d6jr.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-7wmh7.md): Returns the absolute value of each element in a vector.
- [simd_equal(\_:\_:)](simd_equal%28____%29-40ux3.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-466g9.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4hewh.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2v1tf.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-9vz62.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-8id6w.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-69f7s.md)
- [simd_all(\_:)](simd_all%28__%29-1ahau.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-8m8ti.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_short3](vector_short3.md)

## See Also

### Vector Data Types

- [simd_short1](simd_short1.md): A vector of one 16-bit signed integer element.
- [simd_short2](simd_short2.md): A vector of two 16-bit signed integer elements.
- [simd_short4](simd_short4.md): A vector of four 16-bit signed integer elements.
- [simd_short8](simd_short8.md): A vector of eight 16-bit signed integer elements.
- [simd_short16](simd_short16.md): A vector of sixteen 16-bit signed integer elements.
- [simd_short32](simd_short32.md): A vector of thirty-two 16-bit signed integer elements.

# simd_short3 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 16-bit signed integer elements.

## Declaration

```objectivec
typedef short __attribute__((ext_vector_type(3))) simd_short3;
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_short3](simd_make_short3%28__%29-c59z.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_short3](simd_make_short3%28__%29-gyam.md): eturns a new vector from the specified vector.
- [simd_make_short3](simd_make_short3%28__%29-x9n1.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_short3](simd_make_short3%28__%29-1capt.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_short3](simd_make_short3%28__%29-9l6v8.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_short3](simd_make_short3%28__%29-70om7.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_short3_undef](simd_make_short3_undef%28__%29-87ju7.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_short3](simd_make_short3%28__%29-2ux4i.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_short3](simd_make_short3%28______%29.md): Returns a new vector from the specified scalar values.
- [vector3](vector3-3x8j.md): Returns a new vector from the specified scalar values.
- [simd_make_short3_undef](simd_make_short3_undef%28__%29-5n83n.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_short3](simd_make_short3%28____%29-7dmp4.md): Returns a new vector from a vector and a scalar value.
- [vector3](vector3-3833i.md): Returns a new vector from a vector and a scalar value.
- [simd_make_short3](simd_make_short3%28____%29-9bk9v.md): Returns a new vector from a scalar value and a vector.

### Functions to Create Three-Element Vectors From Vectors of Other Types

- [simd_short](simd_short-6hhh3.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_short](simd_short-6hrav.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_short](simd_short-6hmgn.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_short](simd_short-6hw6v.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements
- [simd_short](simd_short-6he6b.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_short](simd_short-6ho1v.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_short](simd_short-6hfx5.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_short](simd_short-6hpp5.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_short](simd_short-6hswh.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_short](simd_short-6hsc9.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_short_sat](simd_short_sat-3ixry.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-3j7lq.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-3j2pq.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-3jcji.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements
- [simd_short_sat](simd_short_sat-3izgq.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-3j9fu.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-3iy1u.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-3j7vm.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-3j652.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_short_sat](simd_short_sat-3j5f6.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-8d6jr.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-7wmh7.md): Returns the absolute value of each element in a vector.
- [simd_equal](simd_equal%28____%29-40ux3.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-466g9.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4hewh.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2v1tf.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-9vz62.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-8id6w.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-69f7s.md)
- [simd_all](simd_all%28__%29-1ahau.md)
- [simd_bitselect](simd_bitselect%28______%29-8m8ti.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_short3](vector_short3.md)

## See Also

### Vector Data Types

- [simd_short1](simd_short1.md): A vector of one 16-bit signed integer element.
- [simd_short2](simd_short2.md): A vector of two 16-bit signed integer elements.
- [simd_short4](simd_short4.md): A vector of four 16-bit signed integer elements.
- [simd_short8](simd_short8.md): A vector of eight 16-bit signed integer elements.
- [simd_short16](simd_short16.md): A vector of sixteen 16-bit signed integer elements.
- [simd_short32](simd_short32.md): A vector of thirty-two 16-bit signed integer elements.
