> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_short32](https://developer.apple.com/documentation/simd/simd_short32)

# simd_short32 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of thirty-two 16-bit signed integer elements.

## Declaration

```swift
typealias simd_short32 = SIMD32<Int16>
```

## Topics

### Functions to Create Thirty Two-Element Vectors From Other Vectors

- [simd_make_short32(\_:)](simd_make_short32%28__%29-ubpt.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_short32(\_:)](simd_make_short32%28__%29-xjmw.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_short32(\_:)](simd_make_short32%28__%29-9757.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_short32(\_:)](simd_make_short32%28__%29-1eywv.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_short32(\_:)](simd_make_short32%28__%29-9m5sz.md): Returns a new vector from the specified sixteen-element vector, and other elements set to zero.
- [simd_make_short32(\_:)](simd_make_short32%28__%29-94o20.md): Returns a new vector from the specified vector.
- [simd_make_short32(\_:\_:)](simd_make_short32%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_short32_undef(\_:)](simd_make_short32_undef%28__%29-lops.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_short32_undef(\_:)](simd_make_short32_undef%28__%29-hws9.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_short32_undef(\_:)](simd_make_short32_undef%28__%29-ri8y.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_short32_undef(\_:)](simd_make_short32_undef%28__%29-169di.md): Returns a new vector from the specified eight-element vector, and other elements undefined.
- [simd_make_short32_undef(\_:)](simd_make_short32_undef%28__%29-435zw.md): Returns a new vector from the specified sixteen-element vector, and other elements undefined.

### Functions to Create Thirty Two-Element Vectors From Scalar Values

- [simd_make_short32(\_:)](simd_make_short32%28__%29-8b798.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_short32_undef(\_:)](simd_make_short32_undef%28__%29-94vzp.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-2cf7j.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-v73.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-2cuv8.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-2az34.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-9j1wo.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-1v4iv.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-6joky.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-8macj.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-3b445.md)
- [simd_all(\_:)](simd_all%28__%29-1kcj7.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-9so3n.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_short32](vector_short32.md)

## See Also

### Vector Data Types

- [simd_short1](simd_short1.md): A vector of one 16-bit signed integer element.
- [simd_short2](simd_short2.md): A vector of two 16-bit signed integer elements.
- [simd_short3](simd_short3.md): A vector of three 16-bit signed integer elements.
- [simd_short4](simd_short4.md): A vector of four 16-bit signed integer elements.
- [simd_short8](simd_short8.md): A vector of eight 16-bit signed integer elements.
- [simd_short16](simd_short16.md): A vector of sixteen 16-bit signed integer elements.

# simd_short32 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of thirty-two 16-bit signed integer elements.

## Declaration

```objectivec
typedef short __attribute__((ext_vector_type(32))) simd_short32;
```

## Topics

### Functions to Create Thirty Two-Element Vectors From Other Vectors

- [simd_make_short32](simd_make_short32%28__%29-ubpt.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_short32](simd_make_short32%28__%29-xjmw.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_short32](simd_make_short32%28__%29-9757.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_short32](simd_make_short32%28__%29-1eywv.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_short32](simd_make_short32%28__%29-9m5sz.md): Returns a new vector from the specified sixteen-element vector, and other elements set to zero.
- [simd_make_short32](simd_make_short32%28__%29-94o20.md): Returns a new vector from the specified vector.
- [simd_make_short32](simd_make_short32%28____%29.md): Returns a new vector from the specified vectors.
- [vector32](vector32-62nb2.md): Returns a new vector from the specified vectors.
- [simd_make_short32_undef](simd_make_short32_undef%28__%29-lops.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_short32_undef](simd_make_short32_undef%28__%29-hws9.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_short32_undef](simd_make_short32_undef%28__%29-ri8y.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_short32_undef](simd_make_short32_undef%28__%29-169di.md): Returns a new vector from the specified eight-element vector, and other elements undefined.
- [simd_make_short32_undef](simd_make_short32_undef%28__%29-435zw.md): Returns a new vector from the specified sixteen-element vector, and other elements undefined.

### Functions to Create Thirty Two-Element Vectors From Scalar Values

- [simd_make_short32](simd_make_short32%28__%29-8b798.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_short32_undef](simd_make_short32_undef%28__%29-94vzp.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Thirty Two-Element Vectors From Vectors of Other Types

- [simd_short](simd_short-7lv9o.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_short](simd_short-7ll3g.md): Returns a new vector from the specified vector of 8-bit, unsigned integer element.
- [simd_short](simd_short-7m08c.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_short](simd_short-7lqek.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_short_sat](simd_short_sat-3aycl.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-3b86d.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-3b37p.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-3bd39.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-2cf7j.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-v73.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-2cuv8.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-2az34.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-9j1wo.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-1v4iv.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-6joky.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-8macj.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-3b445.md)
- [simd_all](simd_all%28__%29-1kcj7.md)
- [simd_bitselect](simd_bitselect%28______%29-9so3n.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_short32](vector_short32.md)

## See Also

### Vector Data Types

- [simd_short1](simd_short1.md): A vector of one 16-bit signed integer element.
- [simd_short2](simd_short2.md): A vector of two 16-bit signed integer elements.
- [simd_short3](simd_short3.md): A vector of three 16-bit signed integer elements.
- [simd_short4](simd_short4.md): A vector of four 16-bit signed integer elements.
- [simd_short8](simd_short8.md): A vector of eight 16-bit signed integer elements.
- [simd_short16](simd_short16.md): A vector of sixteen 16-bit signed integer elements.
