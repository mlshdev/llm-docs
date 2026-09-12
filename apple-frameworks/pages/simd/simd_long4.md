> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_long4](https://developer.apple.com/documentation/simd/simd_long4)

# simd_long4 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 64-bit signed integer elements.

## Declaration

```swift
typealias simd_long4 = SIMD4<simd_long1>
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_long4(\_:)](simd_make_long4%28__%29-98er2.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_long4(\_:)](simd_make_long4%28__%29-94zwx.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_long4(\_:)](simd_make_long4%28__%29-8op7o.md): Returns a new vector from the specified vector.
- [simd_make_long4(\_:)](simd_make_long4%28__%29-9tamg.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_long4(\_:\_:)](simd_make_long4%28____%29-51qs4.md): Returns a new vector from the specified vectors.
- [simd_make_long4_undef(\_:)](simd_make_long4_undef%28__%29-31uo1.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_long4_undef(\_:)](simd_make_long4_undef%28__%29-345km.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_long4(\_:)](simd_make_long4%28__%29-4ir93.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_long4(\_:\_:\_:\_:)](simd_make_long4%28________%29.md): Returns a new vector from the specified scalar values.
- [simd_make_long4_undef(\_:)](simd_make_long4_undef%28__%29-6bf3i.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_long4(\_:\_:\_:)](simd_make_long4%28______%29-5o04d.md): Returns a new vector from two scalar values and a vector.
- [simd_make_long4(\_:\_:\_:)](simd_make_long4%28______%29-1oyio.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_long4(\_:\_:)](simd_make_long4%28____%29-837pc.md): Returns a new vector from a scalar value and a vector.
- [simd_make_long4(\_:\_:\_:)](simd_make_long4%28______%29-6ici1.md): Returns a new vector from a vector and scalar values.
- [simd_make_long4(\_:\_:)](simd_make_long4%28____%29-270ke.md): Returns a new vector from a vector and a scalar value.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-81f1k.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-69473.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-4wnv3.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-4ua4m.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4qin2.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2ya50.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-4y4aq.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-3enrf.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6cnfh.md)
- [simd_all(\_:)](simd_all%28__%29-1jv5n.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-9f5q6.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_long4](vector_long4.md)

## See Also

### Vector Data Types

- [simd_long1](simd_long1.md): A vector of one 64-bit signed integer element.
- [simd_long2](simd_long2.md): A vector of two 64-bit signed integer elements.
- [simd_long3](simd_long3.md): A vector of three 64-bit signed integer elements.
- [simd_long8](simd_long8.md): A vector of eight 64-bit signed integer elements.

# simd_long4 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 64-bit signed integer elements.

## Declaration

```objectivec
typedef long __attribute__((ext_vector_type(4))) simd_long4;
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_long4](simd_make_long4%28__%29-98er2.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_long4](simd_make_long4%28__%29-94zwx.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_long4](simd_make_long4%28__%29-8op7o.md): Returns a new vector from the specified vector.
- [simd_make_long4](simd_make_long4%28__%29-9tamg.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_long4](simd_make_long4%28____%29-51qs4.md): Returns a new vector from the specified vectors.
- [vector4](vector4-5mcxh.md): Returns a new vector from the specified vectors.
- [simd_make_long4_undef](simd_make_long4_undef%28__%29-31uo1.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_long4_undef](simd_make_long4_undef%28__%29-345km.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Conversion to Signed 64-Bit (Round Half to Even) Functions

- [simd_long_rte](simd_long_rte-7twh9.md): Returns a new four-element vector by rounding halves to the nearest even value.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_long4](simd_make_long4%28__%29-4ir93.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_long4](simd_make_long4%28________%29.md): Returns a new vector from the specified scalar values.
- [vector4](vector4-96he8.md): Returns a new vector from the specified scalar values.
- [simd_make_long4_undef](simd_make_long4_undef%28__%29-6bf3i.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_long4](simd_make_long4%28______%29-5o04d.md): Returns a new vector from two scalar values and a vector.
- [simd_make_long4](simd_make_long4%28______%29-1oyio.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_long4](simd_make_long4%28____%29-837pc.md): Returns a new vector from a scalar value and a vector.
- [simd_make_long4](simd_make_long4%28______%29-6ici1.md): Returns a new vector from a vector and scalar values.
- [simd_make_long4](simd_make_long4%28____%29-270ke.md): Returns a new vector from a vector and a scalar value.
- [vector4](vector4-5gopv.md): Returns a new vector from a vector and a scalar value.

### Functions to Create Four-Element Vectors From Vectors of Other Types

- [simd_long](simd_long-9x5l.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_long](simd_long-a715.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_long](simd_long-a255.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_long](simd_long-ac49.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_long](simd_long-9yxd.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_long](simd_long-a8wh.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_long](simd_long-9xiz.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_long](simd_long-a7cr.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_long](simd_long-a5mn.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_long](simd_long-a4uz.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_long_sat](simd_long_sat-5ldhe.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_long_sat](simd_long_sat-5ln9e.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_long_sat](simd_long_sat-5lihu.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_long_sat](simd_long_sat-5ls82.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_long_sat](simd_long_sat-5la9i.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_long_sat](simd_long_sat-5lk6u.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_long_sat](simd_long_sat-5lbza.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_long_sat](simd_long_sat-5llpi.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_long_sat](simd_long_sat-5loyi.md): Returns a new vector from the specified vector of 32-bit, floating point elements.
- [simd_long_sat](simd_long_sat-5lody.md): Returns a new vector from the specified vector of 64-bit, floating point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-81f1k.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-69473.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-4wnv3.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-4ua4m.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4qin2.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2ya50.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-4y4aq.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-3enrf.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6cnfh.md)
- [simd_all](simd_all%28__%29-1jv5n.md)
- [simd_bitselect](simd_bitselect%28______%29-9f5q6.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_long4](vector_long4.md)

## See Also

### Vector Data Types

- [simd_long1](simd_long1.md): A vector of one 64-bit signed integer element.
- [simd_long2](simd_long2.md): A vector of two 64-bit signed integer elements.
- [simd_long3](simd_long3.md): A vector of three 64-bit signed integer elements.
- [simd_long8](simd_long8.md): A vector of eight 64-bit signed integer elements.
