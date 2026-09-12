> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_ulong2](https://developer.apple.com/documentation/simd/simd_ulong2)

# simd_ulong2 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 64-bit unsigned integer elements.

## Declaration

```swift
typealias simd_ulong2 = SIMD2<simd_ulong1>
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_ulong2(\_:)](simd_make_ulong2%28__%29-oc6t.md): Returns a new vector from the specified vector.
- [simd_make_ulong2(\_:)](simd_make_ulong2%28__%29-rr3e.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_ulong2(\_:)](simd_make_ulong2%28__%29-ulyf.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_ulong2(\_:)](simd_make_ulong2%28__%29-17hvf.md): Returns a new vector by truncating the specified eight-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_ulong2(\_:)](simd_make_ulong2%28__%29-14omj.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ulong2(\_:\_:)](simd_make_ulong2%28____%29.md): Returns a new vector from the specified scalar values.
- [simd_make_ulong2_undef(\_:)](simd_make_ulong2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-5y5rd.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-80jzi.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-49qq4.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4kgd8.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2q2jq.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-9be6.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-86a4g.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-64g1r.md)
- [simd_all(\_:)](simd_all%28__%29-1d8u9.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-886h0.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ulong2](vector_ulong2.md)

## See Also

### Vector Data Types

- [simd_ulong1](simd_ulong1.md): A vector of one 64-bit unsigned integer element.
- [simd_ulong3](simd_ulong3.md): A vector of three 64-bit unsigned integer elements.
- [simd_ulong4](simd_ulong4.md): A vector of four 64-bit unsigned integer elements.
- [simd_ulong8](simd_ulong8.md): A vector of eight 64-bit unsigned integer elements.

# simd_ulong2 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 64-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned long __attribute__((ext_vector_type(2))) simd_ulong2;
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_ulong2](simd_make_ulong2%28__%29-oc6t.md): Returns a new vector from the specified vector.
- [simd_make_ulong2](simd_make_ulong2%28__%29-rr3e.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_ulong2](simd_make_ulong2%28__%29-ulyf.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_ulong2](simd_make_ulong2%28__%29-17hvf.md): Returns a new vector by truncating the specified eight-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_ulong2](simd_make_ulong2%28__%29-14omj.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ulong2](simd_make_ulong2%28____%29.md): Returns a new vector from the specified scalar values.
- [vector2](vector2-6n9bx.md): Returns a new vector from the specified scalar values.
- [simd_make_ulong2_undef](simd_make_ulong2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Two-Element Vectors From Vectors of Other Types

- [simd_ulong](simd_ulong-1r8xg.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ulong](simd_ulong-1rir8.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-1rdv8.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ulong](simd_ulong-1rnp0.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-1rbpo.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ulong](simd_ulong-1rlsc.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-1rb2o.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_ulong](simd_ulong-1rkuo.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-1rhpk.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_ulong](simd_ulong-1ri80.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_ulong_sat](simd_ulong_sat-1lmym.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-1lwse.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-1lrzy.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-1m1q6.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-1ll2i.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-1lv3e.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-1llwi.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-1lvtu.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-1lxxa.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_ulong_sat](simd_ulong_sat-1lyhe.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-5y5rd.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-80jzi.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-49qq4.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4kgd8.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2q2jq.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-9be6.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-86a4g.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-64g1r.md)
- [simd_all](simd_all%28__%29-1d8u9.md)
- [simd_bitselect](simd_bitselect%28______%29-886h0.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ulong2](vector_ulong2.md)

## See Also

### Vector Data Types

- [simd_ulong1](simd_ulong1.md): A vector of one 64-bit unsigned integer element.
- [simd_ulong3](simd_ulong3.md): A vector of three 64-bit unsigned integer elements.
- [simd_ulong4](simd_ulong4.md): A vector of four 64-bit unsigned integer elements.
- [simd_ulong8](simd_ulong8.md): A vector of eight 64-bit unsigned integer elements.
