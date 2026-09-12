> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_int8](https://developer.apple.com/documentation/simd/simd_int8)

# simd_int8 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 32-bit signed integer elements.

## Declaration

```swift
typealias simd_int8 = SIMD8<Int32>
```

## Topics

### Functions to Create Eight-Element Vectors From Other Vectors

- [simd_make_int8(\_:)](simd_make_int8%28__%29-9s1jp.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_int8(\_:)](simd_make_int8%28__%29-9vi30.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_int8(\_:)](simd_make_int8%28__%29-efr4.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_int8(\_:)](simd_make_int8%28__%29-r4ak.md): Returns a new vector from the specified vector.
- [simd_make_int8(\_:)](simd_make_int8%28__%29-3lu01.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_int8(\_:\_:)](simd_make_int8%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_int8_undef(\_:)](simd_make_int8_undef%28__%29-57mj8.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_int8_undef(\_:)](simd_make_int8_undef%28__%29-5324d.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_int8_undef(\_:)](simd_make_int8_undef%28__%29-5rem2.md): Returns a new vector from the specified four-element vector, and other elements undefined.

### Functions to Create Eight-Element Vectors From Scalar Values

- [simd_make_int8(\_:)](simd_make_int8%28__%29-9srg8.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_int8_undef(\_:)](simd_make_int8_undef%28__%29-2ce80.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-7os48.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-4jo2y.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-ojy5.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-3ojci.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-55kne.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-3b56c.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-2fywl.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-5sjen.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6pigr.md)
- [simd_all(\_:)](simd_all%28__%29-1yx6x.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-361vz.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_int8](vector_int8.md)

## See Also

### Vector Data Types

- [simd_int1](simd_int1.md): A vector of one 32-bit signed integer element.
- [simd_int2](simd_int2.md): A vector of two 32-bit signed integer elements.
- [simd_int3](simd_int3.md): A vector of three 32-bit signed integer elements.
- [simd_int4](simd_int4.md): A vector of four 32-bit signed integer elements.
- [simd_int16](simd_int16.md): A vector of sixteen 32-bit signed integer elements.

# simd_int8 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 32-bit signed integer elements.

## Declaration

```objectivec
typedef int __attribute__((ext_vector_type(8))) simd_int8;
```

## Topics

### Functions to Create Eight-Element Vectors From Other Vectors

- [simd_make_int8](simd_make_int8%28__%29-9s1jp.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_int8](simd_make_int8%28__%29-9vi30.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_int8](simd_make_int8%28__%29-efr4.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_int8](simd_make_int8%28__%29-r4ak.md): Returns a new vector from the specified vector.
- [simd_make_int8](simd_make_int8%28__%29-3lu01.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_int8](simd_make_int8%28____%29.md): Returns a new vector from the specified vectors.
- [vector8](vector8-5snjo.md): Returns a new vector from the specified vectors.
- [simd_make_int8_undef](simd_make_int8_undef%28__%29-57mj8.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_int8_undef](simd_make_int8_undef%28__%29-5324d.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_int8_undef](simd_make_int8_undef%28__%29-5rem2.md): Returns a new vector from the specified four-element vector, and other elements undefined.

### Functions to Create Eight-Element Vectors From Scalar Values

- [simd_make_int8](simd_make_int8%28__%29-9srg8.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_int8_undef](simd_make_int8_undef%28__%29-2ce80.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Eight-Element Vectors From Vectors of Other Types

- [simd_int](simd_int-nskx.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_int](simd_int-nik1.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_int](simd_int-nxm9.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_int](simd_int-nnht.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_int](simd_int-npcx.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_int](simd_int-nfj5.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_int](simd_int-nojf.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_int](simd_int-neij.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_int](simd_int-nhpj.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_int](simd_int-ngyj.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_int_sat](simd_int_sat-7dttd.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-7e41d.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-7dovl.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-7dysx.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-7dvvt.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-7e5pl.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-7dubn.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-7e43n.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-7e2fr.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_int_sat](simd_int_sat-7e1v7.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Round-Half-to-Even Conversion From Single-Precision Vectors

- [simd_int_rte](simd_int_rte-7ziwq.md): Returns a new vector from the specified eight-element vector.

### Common Functions

- [simd_abs](simd_abs%28__%29-7os48.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-4jo2y.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-ojy5.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-3ojci.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-55kne.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-3b56c.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-2fywl.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-5sjen.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6pigr.md)
- [simd_all](simd_all%28__%29-1yx6x.md)
- [simd_bitselect](simd_bitselect%28______%29-361vz.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_int8](vector_int8.md)

## See Also

### Vector Data Types

- [simd_int1](simd_int1.md): A vector of one 32-bit signed integer element.
- [simd_int2](simd_int2.md): A vector of two 32-bit signed integer elements.
- [simd_int3](simd_int3.md): A vector of three 32-bit signed integer elements.
- [simd_int4](simd_int4.md): A vector of four 32-bit signed integer elements.
- [simd_int16](simd_int16.md): A vector of sixteen 32-bit signed integer elements.
