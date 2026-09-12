> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_ulong3](https://developer.apple.com/documentation/simd/simd_ulong3)

# simd_ulong3 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 64-bit unsigned integer elements.

## Declaration

```swift
typealias simd_ulong3 = SIMD3<simd_ulong1>
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_ulong3(\_:)](simd_make_ulong3%28__%29-5autj.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ulong3(\_:)](simd_make_ulong3%28__%29-57xdw.md): Returns a new vector from the specified vector.
- [simd_make_ulong3(\_:)](simd_make_ulong3%28__%29-5w7y5.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_ulong3(\_:)](simd_make_ulong3%28__%29-4pyq9.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_ulong3_undef(\_:)](simd_make_ulong3_undef%28__%29-5oqlt.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_ulong3(\_:)](simd_make_ulong3%28__%29-3eb9a.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ulong3(\_:\_:\_:)](simd_make_ulong3%28______%29.md): Returns a new vector from the specified scalar values.
- [simd_make_ulong3_undef(\_:)](simd_make_ulong3_undef%28__%29-7s0qh.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_ulong3(\_:\_:)](simd_make_ulong3%28____%29-3zpz6.md): Returns a new vector from a scalar value and a vector.
- [simd_make_ulong3(\_:\_:)](simd_make_ulong3%28____%29-3orcm.md): Returns a new vector from a vector and a scalar value.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-5ce6.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-2p336.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-4697f.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4h1hr.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2v51x.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-914t0.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-765ec.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-69ij0.md)
- [simd_all(\_:)](simd_all%28__%29-1adyq.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-600bp.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ulong3](vector_ulong3.md)

## See Also

### Vector Data Types

- [simd_ulong1](simd_ulong1.md): A vector of one 64-bit unsigned integer element.
- [simd_ulong2](simd_ulong2.md): A vector of two 64-bit unsigned integer elements.
- [simd_ulong4](simd_ulong4.md): A vector of four 64-bit unsigned integer elements.
- [simd_ulong8](simd_ulong8.md): A vector of eight 64-bit unsigned integer elements.

# simd_ulong3 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 64-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned long __attribute__((ext_vector_type(3))) simd_ulong3;
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_ulong3](simd_make_ulong3%28__%29-5autj.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ulong3](simd_make_ulong3%28__%29-57xdw.md): Returns a new vector from the specified vector.
- [simd_make_ulong3](simd_make_ulong3%28__%29-5w7y5.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_ulong3](simd_make_ulong3%28__%29-4pyq9.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_ulong3_undef](simd_make_ulong3_undef%28__%29-5oqlt.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_ulong3](simd_make_ulong3%28__%29-3eb9a.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ulong3](simd_make_ulong3%28______%29.md): Returns a new vector from the specified scalar values.
- [vector3](vector3-6utbv.md): Returns a new vector from the specified scalar values.
- [simd_make_ulong3_undef](simd_make_ulong3_undef%28__%29-7s0qh.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_ulong3](simd_make_ulong3%28____%29-3zpz6.md): Returns a new vector from a scalar value and a vector.
- [simd_make_ulong3](simd_make_ulong3%28____%29-3orcm.md): Returns a new vector from a vector and a scalar value.
- [vector3](vector3-11y95.md): Returns a new vector from a vector and a scalar value.

### Functions to Create Three-Element Vectors From Vectors of Other Types

- [simd_ulong](simd_ulong-1mphp.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ulong](simd_ulong-1mfil.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-1mkj1.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ulong](simd_ulong-1malp.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-1mrfp.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ulong](simd_ulong-1mhet.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-1mptj.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_ulong](simd_ulong-1mfw7.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-1me03.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_ulong](simd_ulong-1mdc7.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_ulong_sat](simd_ulong_sat-1p4p3.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-1pevb.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-1ozs7.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-1p9pj.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-1p1l7.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-1pbrf.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-1p0xd.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-1panl.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-1pdyx.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_ulong_sat](simd_ulong_sat-1pdb5.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-5ce6.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-2p336.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-4697f.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4h1hr.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2v51x.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-914t0.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-765ec.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-69ij0.md)
- [simd_all](simd_all%28__%29-1adyq.md)
- [simd_bitselect](simd_bitselect%28______%29-600bp.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ulong3](vector_ulong3.md)

## See Also

### Vector Data Types

- [simd_ulong1](simd_ulong1.md): A vector of one 64-bit unsigned integer element.
- [simd_ulong2](simd_ulong2.md): A vector of two 64-bit unsigned integer elements.
- [simd_ulong4](simd_ulong4.md): A vector of four 64-bit unsigned integer elements.
- [simd_ulong8](simd_ulong8.md): A vector of eight 64-bit unsigned integer elements.
