> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_long3](https://developer.apple.com/documentation/simd/simd_long3)

# simd_long3 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 64-bit signed integer elements.

## Declaration

```swift
typealias simd_long3 = SIMD3<simd_long1>
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_long3(\_:)](simd_make_long3%28__%29-4le1z.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_long3(\_:)](simd_make_long3%28__%29-4osz8.md): Returns a new vector from the specified vector.
- [simd_make_long3(\_:)](simd_make_long3%28__%29-40i9p.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_long3(\_:)](simd_make_long3%28__%29-567hd.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_long3_undef(\_:)](simd_make_long3_undef%28__%29-8anf9.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_long3(\_:)](simd_make_long3%28__%29-1n0vi.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_long3(\_:\_:\_:)](simd_make_long3%28______%29.md): Returns a new vector from the specified scalar values.
- [simd_make_long3_undef(\_:)](simd_make_long3_undef%28__%29-4ehx.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_long3(\_:\_:)](simd_make_long3%28____%29-3zz23.md): Returns a new vector from a scalar value and a vector.
- [simd_make_long3(\_:\_:)](simd_make_long3%28____%29-36pz0.md): Returns a new vector from a vector and a scalar value.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-8d3rx.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-6yqku.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-1ikxk.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-45zbv.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4hb9r.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2uv9x.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-3a034.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-2hury.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-698ng.md)
- [simd_all(\_:)](simd_all%28__%29-1ao6q.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-9hl4.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_long3](vector_long3.md)

## See Also

### Vector Data Types

- [simd_long1](simd_long1.md): A vector of one 64-bit signed integer element.
- [simd_long2](simd_long2.md): A vector of two 64-bit signed integer elements.
- [simd_long4](simd_long4.md): A vector of four 64-bit signed integer elements.
- [simd_long8](simd_long8.md): A vector of eight 64-bit signed integer elements.

# simd_long3 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 64-bit signed integer elements.

## Declaration

```objectivec
typedef long __attribute__((ext_vector_type(3))) simd_long3;
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_long3](simd_make_long3%28__%29-4le1z.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_long3](simd_make_long3%28__%29-4osz8.md): Returns a new vector from the specified vector.
- [simd_make_long3](simd_make_long3%28__%29-40i9p.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_long3](simd_make_long3%28__%29-567hd.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_long3_undef](simd_make_long3_undef%28__%29-8anf9.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Conversion to Signed 64-Bit (Round Half to Even) Functions

- [simd_long_rte](simd_long_rte-83sbc.md): Returns a new three-element vector by rounding halves to the nearest even value.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_long3](simd_make_long3%28__%29-1n0vi.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_long3](simd_make_long3%28______%29.md): Returns a new vector from the specified scalar values.
- [vector3](vector3-3pmc2.md): Returns a new vector from the specified scalar values.
- [simd_make_long3_undef](simd_make_long3_undef%28__%29-4ehx.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_long3](simd_make_long3%28____%29-3zz23.md): Returns a new vector from a scalar value and a vector.
- [simd_make_long3](simd_make_long3%28____%29-36pz0.md): Returns a new vector from a vector and a scalar value.
- [vector3](vector3-6gwfj.md): Returns a new vector from a vector and a scalar value.

### Functions to Create Three-Element Vectors From Vectors of Other Types

- [simd_long](simd_long-7iv6.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_long](simd_long-7936.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_long](simd_long-7dya.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_long](simd_long-740y.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_long](simd_long-7kye.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_long](simd_long-7aza.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_long](simd_long-7miu.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_long](simd_long-7ccm.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_long](simd_long-7aju.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_long](simd_long-79xy.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_long_sat](simd_long_sat-5ov8p.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_long_sat](simd_long_sat-5p5gp.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_long_sat](simd_long_sat-5oqa1.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_long_sat](simd_long_sat-5p05l.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_long_sat](simd_long_sat-5oscx.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_long_sat](simd_long_sat-5p28h.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_long_sat](simd_long_sat-5oqsr.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_long_sat](simd_long_sat-5p0mj.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_long_sat](simd_long_sat-5p3tb.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_long_sat](simd_long_sat-5p3aj.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-8d3rx.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-6yqku.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-1ikxk.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-45zbv.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4hb9r.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2uv9x.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-3a034.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-2hury.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-698ng.md)
- [simd_all](simd_all%28__%29-1ao6q.md)
- [simd_bitselect](simd_bitselect%28______%29-9hl4.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_long3](vector_long3.md)

## See Also

### Vector Data Types

- [simd_long1](simd_long1.md): A vector of one 64-bit signed integer element.
- [simd_long2](simd_long2.md): A vector of two 64-bit signed integer elements.
- [simd_long4](simd_long4.md): A vector of four 64-bit signed integer elements.
- [simd_long8](simd_long8.md): A vector of eight 64-bit signed integer elements.
