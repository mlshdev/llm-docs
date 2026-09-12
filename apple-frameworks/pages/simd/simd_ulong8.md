> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_ulong8](https://developer.apple.com/documentation/simd/simd_ulong8)

# simd_ulong8 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 64-bit unsigned integer elements.

## Declaration

```swift
typealias simd_ulong8 = SIMD8<simd_ulong1>
```

## Topics

### Functions to Create Eight-Element Vectors From Other Vectors

- [simd_make_ulong8(\_:)](simd_make_ulong8%28__%29-5w0n4.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ulong8(\_:)](simd_make_ulong8%28__%29-5zhz7.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_ulong8(\_:)](simd_make_ulong8%28__%29-6hggi.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_ulong8(\_:)](simd_make_ulong8%28__%29-6wa2m.md): Returns a new vector from the specified vector.
- [simd_make_ulong8(\_:\_:)](simd_make_ulong8%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_ulong8_undef(\_:)](simd_make_ulong8_undef%28__%29-9rdt9.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_ulong8_undef(\_:)](simd_make_ulong8_undef%28__%29-9oge2.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_ulong8_undef(\_:)](simd_make_ulong8_undef%28__%29-d5pk.md): Returns a new vector from the specified four-element vector, and other elements undefined.

### Functions to Create Eight-Element Vectors From Scalar Values

- [simd_make_ulong8(\_:)](simd_make_ulong8%28__%29-w5ee.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ulong8_undef(\_:)](simd_make_ulong8_undef%28__%29-73woc.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-6mt76.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-4dws0.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-3oaqy.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-55c36.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-3avzc.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-1ynv5.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-9mj3u.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6p9gh.md)
- [simd_all(\_:)](simd_all%28__%29-1yolz.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-3xirg.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ulong8](vector_ulong8.md)

## See Also

### Vector Data Types

- [simd_ulong1](simd_ulong1.md): A vector of one 64-bit unsigned integer element.
- [simd_ulong2](simd_ulong2.md): A vector of two 64-bit unsigned integer elements.
- [simd_ulong3](simd_ulong3.md): A vector of three 64-bit unsigned integer elements.
- [simd_ulong4](simd_ulong4.md): A vector of four 64-bit unsigned integer elements.

# simd_ulong8 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 64-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned long __attribute__((ext_vector_type(8))) simd_ulong8;
```

## Topics

### Functions to Create Eight-Element Vectors From Other Vectors

- [simd_make_ulong8](simd_make_ulong8%28__%29-5w0n4.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ulong8](simd_make_ulong8%28__%29-5zhz7.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_ulong8](simd_make_ulong8%28__%29-6hggi.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_ulong8](simd_make_ulong8%28__%29-6wa2m.md): Returns a new vector from the specified vector.
- [simd_make_ulong8](simd_make_ulong8%28____%29.md): Returns a new vector from the specified vectors.
- [vector8](vector8-5kkur.md): Returns a new vector from the specified vectors.
- [simd_make_ulong8_undef](simd_make_ulong8_undef%28__%29-9rdt9.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_ulong8_undef](simd_make_ulong8_undef%28__%29-9oge2.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_ulong8_undef](simd_make_ulong8_undef%28__%29-d5pk.md): Returns a new vector from the specified four-element vector, and other elements undefined.

### Functions to Create Eight-Element Vectors From Scalar Values

- [simd_make_ulong8](simd_make_ulong8%28__%29-w5ee.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ulong8_undef](simd_make_ulong8_undef%28__%29-73woc.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Eight-Element Vectors From Vectors of Other Types

- [simd_ulong](simd_ulong-16dyy.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ulong](simd_ulong-16o3e.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-1692y.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ulong](simd_ulong-16j3u.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-16fzq.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ulong](simd_ulong-16px2.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-16eyu.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_ulong](simd_ulong-16oxy.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-16n5e.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_ulong](simd_ulong-16mhi.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_ulong_sat](simd_ulong_sat-nyps.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-o8sg.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-o3vk.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-odsw.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-nvpk.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-o5oo.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-nu30.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-o3yk.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-o7ac.md): Returns a new vector from the specified vector of 32-bit, floating point elements.
- [simd_ulong_sat](simd_ulong_sat-o6mk.md): Returns a new vector from the specified vector of 64-bit, floating point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-6mt76.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-4dws0.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-3oaqy.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-55c36.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-3avzc.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-1ynv5.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-9mj3u.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6p9gh.md)
- [simd_all](simd_all%28__%29-1yolz.md)
- [simd_bitselect](simd_bitselect%28______%29-3xirg.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ulong8](vector_ulong8.md)

## See Also

### Vector Data Types

- [simd_ulong1](simd_ulong1.md): A vector of one 64-bit unsigned integer element.
- [simd_ulong2](simd_ulong2.md): A vector of two 64-bit unsigned integer elements.
- [simd_ulong3](simd_ulong3.md): A vector of three 64-bit unsigned integer elements.
- [simd_ulong4](simd_ulong4.md): A vector of four 64-bit unsigned integer elements.
