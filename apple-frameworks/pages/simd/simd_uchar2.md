> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_uchar2](https://developer.apple.com/documentation/simd/simd_uchar2)

# simd_uchar2 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 8-bit unsigned integer elements.

## Declaration

```swift
typealias simd_uchar2 = SIMD2<UInt8>
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_uchar2(\_:)](simd_make_uchar2%28__%29-5a6cb.md): Returns a new vector from the specified vector.
- [simd_make_uchar2(\_:)](simd_make_uchar2%28__%29-5dlsy.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_uchar2(\_:)](simd_make_uchar2%28__%29-5vkwh.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_uchar2(\_:)](simd_make_uchar2%28__%29-4p97x.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_uchar2(\_:)](simd_make_uchar2%28__%29-6etds.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_uchar2(\_:)](simd_make_uchar2%28__%29-4hies.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_uchar2(\_:)](simd_make_uchar2%28__%29-1bfr0.md): Returns a new vector by truncating the specified sixty four-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_uchar2(\_:)](simd_make_uchar2%28__%29-152cz.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uchar2(\_:\_:)](simd_make_uchar2%28____%29.md): Returns a new vector from the specified scalar values.
- [simd_make_uchar2_undef(\_:)](simd_make_uchar2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-71hrv.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-7ujh6.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-49quo.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4khx4.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2q16y.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-45w1z.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-8i357.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-64ekh.md)
- [simd_all(\_:)](simd_all%28__%29-1dafz.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-2yxn9.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uchar2](vector_uchar2.md)

## See Also

### Vector Data Types

- [simd_uchar1](simd_uchar1.md): A vector of one 8-bit unsigned integer element.
- [simd_uchar3](simd_uchar3.md): A vector of three 8-bit unsigned integer elements.
- [simd_uchar4](simd_uchar4.md): A vector of four 8-bit unsigned integer elements.
- [simd_uchar8](simd_uchar8.md): A vector of eight 8-bit unsigned integer elements.
- [simd_uchar16](simd_uchar16.md): A vector of sixteen 8-bit unsigned integer elements.
- [simd_uchar32](simd_uchar32.md): A vector of thirty-two 8-bit unsigned integer elements.
- [simd_uchar64](simd_uchar64.md): A vector of sixty-four 8-bit unsigned integer elements.

# simd_uchar2 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 8-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned char __attribute__((ext_vector_type(2))) simd_uchar2;
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_uchar2](simd_make_uchar2%28__%29-5a6cb.md): Returns a new vector from the specified vector.
- [simd_make_uchar2](simd_make_uchar2%28__%29-5dlsy.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_uchar2](simd_make_uchar2%28__%29-5vkwh.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_uchar2](simd_make_uchar2%28__%29-4p97x.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_uchar2](simd_make_uchar2%28__%29-6etds.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_uchar2](simd_make_uchar2%28__%29-4hies.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_uchar2](simd_make_uchar2%28__%29-1bfr0.md): Returns a new vector by truncating the specified sixty four-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_uchar2](simd_make_uchar2%28__%29-152cz.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uchar2](simd_make_uchar2%28____%29.md): Returns a new vector from the specified scalar values.
- [vector2](vector2-17tw1.md): Returns a new vector from the specified scalar values.
- [simd_make_uchar2_undef](simd_make_uchar2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Two-Element Vectors From Vectors of Other Types

- [simd_uchar](simd_uchar-916c2.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uchar](simd_uchar-91gia.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-911ci.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uchar](simd_uchar-91b82.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-9134u.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uchar](simd_uchar-91db2.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-912hq.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_uchar](simd_uchar-91c9q.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-91fhm.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_uchar](simd_uchar-91eym.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_uchar_sat](simd_uchar_sat-1skjw.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-1saoc.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-1sfn0.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-1s5ws.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-1shqc.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-1s7k4.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-1siew.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-1s8oo.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-1sbs8.md): Returns a new vector from the specified vector of 32-bit, floating point elements.
- [simd_uchar_sat](simd_uchar_sat-1sb6g.md): Returns a new vector from the specified vector of 64-bit, floating point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-71hrv.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-7ujh6.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-49quo.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4khx4.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2q16y.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-45w1z.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-8i357.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-64ekh.md)
- [simd_all](simd_all%28__%29-1dafz.md)
- [simd_bitselect](simd_bitselect%28______%29-2yxn9.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uchar2](vector_uchar2.md)

## See Also

### Vector Data Types

- [simd_uchar1](simd_uchar1.md): A vector of one 8-bit unsigned integer element.
- [simd_uchar3](simd_uchar3.md): A vector of three 8-bit unsigned integer elements.
- [simd_uchar4](simd_uchar4.md): A vector of four 8-bit unsigned integer elements.
- [simd_uchar8](simd_uchar8.md): A vector of eight 8-bit unsigned integer elements.
- [simd_uchar16](simd_uchar16.md): A vector of sixteen 8-bit unsigned integer elements.
- [simd_uchar32](simd_uchar32.md): A vector of thirty-two 8-bit unsigned integer elements.
- [simd_uchar64](simd_uchar64.md): A vector of sixty-four 8-bit unsigned integer elements.
