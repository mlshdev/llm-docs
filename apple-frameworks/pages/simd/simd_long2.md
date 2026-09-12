> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_long2](https://developer.apple.com/documentation/simd/simd_long2)

# simd_long2 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 64-bit signed integer elements.

## Declaration

```swift
typealias simd_long2 = SIMD2<simd_long1>
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_long2(\_:)](simd_make_long2%28__%29-96bn.md): Returns a new vector from the specified vector.
- [simd_make_long2(\_:)](simd_make_long2%28__%29-5ou8.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_long2(\_:)](simd_make_long2%28__%29-2abd.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_long2(\_:)](simd_make_long2%28__%29-9ozpw.md): Returns a new vector by truncating the specified eight-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_long2(\_:)](simd_make_long2%28__%29-698vu.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_long2(\_:\_:)](simd_make_long2%28____%29.md): Returns a new vector from the specified scalar values.
- [simd_make_long2_undef(\_:)](simd_make_long2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-88ipu.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-4sik.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-2qcs1.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-49gjw.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4kq58.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2qco6.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-5lq3f.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-439j5.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-64pz3.md)
- [simd_all(\_:)](simd_all%28__%29-1cyyp.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-8ffoo.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_long2](vector_long2.md)

## See Also

### Vector Data Types

- [simd_long1](simd_long1.md): A vector of one 64-bit signed integer element.
- [simd_long3](simd_long3.md): A vector of three 64-bit signed integer elements.
- [simd_long4](simd_long4.md): A vector of four 64-bit signed integer elements.
- [simd_long8](simd_long8.md): A vector of eight 64-bit signed integer elements.

# simd_long2 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 64-bit signed integer elements.

## Declaration

```objectivec
typedef long __attribute__((ext_vector_type(2))) simd_long2;
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_long2](simd_make_long2%28__%29-96bn.md): Returns a new vector from the specified vector.
- [simd_make_long2](simd_make_long2%28__%29-5ou8.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_long2](simd_make_long2%28__%29-2abd.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_long2](simd_make_long2%28__%29-9ozpw.md): Returns a new vector by truncating the specified eight-element vector.

### Conversion to Signed 64-Bit (Round Half to Even) Functions

- [simd_long_rte](simd_long_rte-80b73.md): Returns a new two-element vector by rounding halves to the nearest even value.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_long2](simd_make_long2%28__%29-698vu.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_long2](simd_make_long2%28____%29.md): Returns a new vector from the specified scalar values.
- [vector2](vector2-8txip.md): Returns a new vector from the specified scalar values.
- [simd_make_long2_undef](simd_make_long2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Two-Element Vectors From Vectors of Other Types

- [simd_long](simd_long-410r.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_long](simd_long-4ay3.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_long](simd_long-3w3v.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_long](simd_long-462z.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_long](simd_long-3z5r.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_long](simd_long-49a7.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_long](simd_long-3xox.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_long](simd_long-47o1.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_long](simd_long-49c1.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_long](simd_long-4a75.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_long_sat](simd_long_sat-5sao0.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_long_sat](simd_long_sat-5s0w0.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_long_sat](simd_long_sat-5sfmo.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_long_sat](simd_long_sat-5s5sw.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_long_sat](simd_long_sat-5s900.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_long_sat](simd_long_sat-5ryts.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_long_sat](simd_long_sat-5s7z8.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_long_sat](simd_long_sat-5ry5g.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_long_sat](simd_long_sat-5rzv0.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_long_sat](simd_long_sat-5s0fo.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-88ipu.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-4sik.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-2qcs1.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-49gjw.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4kq58.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2qco6.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-5lq3f.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-439j5.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-64pz3.md)
- [simd_all](simd_all%28__%29-1cyyp.md)
- [simd_bitselect](simd_bitselect%28______%29-8ffoo.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_long2](vector_long2.md)

## See Also

### Vector Data Types

- [simd_long1](simd_long1.md): A vector of one 64-bit signed integer element.
- [simd_long3](simd_long3.md): A vector of three 64-bit signed integer elements.
- [simd_long4](simd_long4.md): A vector of four 64-bit signed integer elements.
- [simd_long8](simd_long8.md): A vector of eight 64-bit signed integer elements.
