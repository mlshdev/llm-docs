> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_ulong4](https://developer.apple.com/documentation/simd/simd_ulong4)

# simd_ulong4 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 64-bit unsigned integer elements.

## Declaration

```swift
typealias simd_ulong4 = SIMD4<simd_ulong1>
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_ulong4(\_:)](simd_make_ulong4%28__%29-364ux.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ulong4(\_:)](simd_make_ulong4%28__%29-39may.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_ulong4(\_:)](simd_make_ulong4%28__%29-2zv2b.md): Returns a new vector from the specified vector.
- [simd_make_ulong4(\_:)](simd_make_ulong4%28__%29-43wof.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_ulong4(\_:\_:)](simd_make_ulong4%28____%29-9oy4u.md): Returns a new vector from the specified vectors.
- [simd_make_ulong4_undef(\_:)](simd_make_ulong4_undef%28__%29-o0j.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_ulong4_undef(\_:)](simd_make_ulong4_undef%28__%29-9xbtd.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_ulong4(\_:)](simd_make_ulong4%28__%29-6kawu.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ulong4(\_:\_:\_:\_:)](simd_make_ulong4%28________%29.md): Returns a new vector from the specified scalar values.
- [simd_make_ulong4_undef(\_:)](simd_make_ulong4_undef%28__%29-jgtr.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_ulong4(\_:\_:\_:)](simd_make_ulong4%28______%29-4du2m.md): Returns a new vector from two scalar values and a vector.
- [simd_make_ulong4(\_:\_:\_:)](simd_make_ulong4%28______%29-8asm5.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_ulong4(\_:\_:)](simd_make_ulong4%28____%29-5mtth.md): Returns a new vector from a scalar value and a vector.
- [simd_make_ulong4(\_:\_:\_:)](simd_make_ulong4%28______%29-8g4ch.md): Returns a new vector from a vector and scalar values.
- [simd_make_ulong4(\_:\_:)](simd_make_ulong4%28____%29-cnt3.md): Returns a new vector from a vector and a scalar value.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-5cuj3.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-8d8x.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-4ujwm.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4qsf2.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2yjx0.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-9meuw.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-6x9fu.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6cxel.md)
- [simd_all(\_:)](simd_all%28__%29-1jlbv.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-6gszc.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ulong4](vector_ulong4.md)

## See Also

### Vector Data Types

- [simd_ulong1](simd_ulong1.md): A vector of one 64-bit unsigned integer element.
- [simd_ulong2](simd_ulong2.md): A vector of two 64-bit unsigned integer elements.
- [simd_ulong3](simd_ulong3.md): A vector of three 64-bit unsigned integer elements.
- [simd_ulong8](simd_ulong8.md): A vector of eight 64-bit unsigned integer elements.

# simd_ulong4 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 64-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned long __attribute__((ext_vector_type(4))) simd_ulong4;
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_ulong4](simd_make_ulong4%28__%29-364ux.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ulong4](simd_make_ulong4%28__%29-39may.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_ulong4](simd_make_ulong4%28__%29-2zv2b.md): Returns a new vector from the specified vector.
- [simd_make_ulong4](simd_make_ulong4%28__%29-43wof.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_ulong4](simd_make_ulong4%28____%29-9oy4u.md): Returns a new vector from the specified vectors.
- [vector4](vector4-9qgza.md): Returns a new vector from the specified vectors.
- [simd_make_ulong4_undef](simd_make_ulong4_undef%28__%29-o0j.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_ulong4_undef](simd_make_ulong4_undef%28__%29-9xbtd.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_ulong4](simd_make_ulong4%28__%29-6kawu.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ulong4](simd_make_ulong4%28________%29.md): Returns a new vector from the specified scalar values.
- [vector4](vector4-8yxgu.md): Returns a new vector from the specified scalar values.
- [simd_make_ulong4_undef](simd_make_ulong4_undef%28__%29-jgtr.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_ulong4](simd_make_ulong4%28______%29-4du2m.md): Returns a new vector from two scalar values and a vector.
- [simd_make_ulong4](simd_make_ulong4%28______%29-8asm5.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_ulong4](simd_make_ulong4%28____%29-5mtth.md): Returns a new vector from a scalar value and a vector.
- [simd_make_ulong4](simd_make_ulong4%28______%29-8g4ch.md): Returns a new vector from a vector and scalar values.
- [simd_make_ulong4](simd_make_ulong4%28____%29-cnt3.md): Returns a new vector from a vector and a scalar value.
- [vector4](vector4-2st.md): Returns a new vector from a vector and a scalar value.

### Functions to Create Four-Element Vectors From Vectors of Other Types

- [simd_ulong](simd_ulong-1j7li.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ulong](simd_ulong-1ixkm.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-1jcja.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ulong](simd_ulong-1j2ly.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-1j9du.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ulong](simd_ulong-1izlu.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-1jazu.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-1j0ve.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_ulong](simd_ulong-1iz4u.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_ulong](simd_ulong-1iykq.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_ulong_sat](simd_ulong_sat-10sdw.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-112b8.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-10n78.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-10xbo.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-10p9o.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ulong_sat](simd_ulong_sat-10yzw.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-10pxs.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-11040.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_ulong_sat](simd_ulong_sat-1137k.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_ulong_sat](simd_ulong_sat-112e8.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-5cuj3.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-8d8x.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-4ujwm.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4qsf2.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2yjx0.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-9meuw.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-6x9fu.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6cxel.md)
- [simd_all](simd_all%28__%29-1jlbv.md)
- [simd_bitselect](simd_bitselect%28______%29-6gszc.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ulong4](vector_ulong4.md)

## See Also

### Vector Data Types

- [simd_ulong1](simd_ulong1.md): A vector of one 64-bit unsigned integer element.
- [simd_ulong2](simd_ulong2.md): A vector of two 64-bit unsigned integer elements.
- [simd_ulong3](simd_ulong3.md): A vector of three 64-bit unsigned integer elements.
- [simd_ulong8](simd_ulong8.md): A vector of eight 64-bit unsigned integer elements.
