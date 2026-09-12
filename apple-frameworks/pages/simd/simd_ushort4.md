> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_ushort4](https://developer.apple.com/documentation/simd/simd_ushort4)

# simd_ushort4 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 16-bit unsigned integer elements.

## Declaration

```swift
typealias simd_ushort4 = SIMD4<UInt16>
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_ushort4(\_:)](simd_make_ushort4%28__%29-35tv2.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ushort4(\_:)](simd_make_ushort4%28__%29-38zbb.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_ushort4(\_:)](simd_make_ushort4%28__%29-3qyfo.md): Returns a new vector from the specified vector.
- [simd_make_ushort4(\_:)](simd_make_ushort4%28__%29-45zew.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_ushort4(\_:)](simd_make_ushort4%28__%29-2aylo.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_ushort4(\_:)](simd_make_ushort4%28__%29-7bisx.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_ushort4(\_:\_:)](simd_make_ushort4%28____%29-33b7a.md): Returns a new vector from the specified vectors.
- [simd_make_ushort4_undef(\_:)](simd_make_ushort4_undef%28__%29-263ji.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_ushort4_undef(\_:)](simd_make_ushort4_undef%28__%29-22y87.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_ushort4(\_:)](simd_make_ushort4%28__%29-85y03.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ushort4(\_:\_:\_:\_:)](simd_make_ushort4%28________%29.md): Returns a new vector from the specified scalar values.
- [simd_make_ushort4_undef(\_:)](simd_make_ushort4_undef%28__%29-9xmiv.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_ushort4(\_:\_:\_:)](simd_make_ushort4%28______%29-5tiuy.md): Returns a new vector from a vector and scalar values.
- [simd_make_ushort4(\_:\_:)](simd_make_ushort4%28____%29-44sd1.md): Returns a new vector from a vector and a scalar value.
- [simd_make_ushort4(\_:\_:\_:)](simd_make_ushort4%28______%29-3yjly.md): Returns a new vector from two scalar values and a vector.
- [simd_make_ushort4(\_:\_:\_:)](simd_make_ushort4%28______%29-53g72.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_ushort4(\_:\_:)](simd_make_ushort4%28____%29-4t4aq.md): Returns a new vector from a scalar value and a vector.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-72wjb.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-9613j.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-4usy2.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4qq8a.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2yjso.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-9tvdl.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-64jwl.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6cx6b.md)
- [simd_all(\_:)](simd_all%28__%29-1jswd.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-ryof.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ushort4](vector_ushort4.md)

## See Also

### Vector Data Types

- [simd_ushort1](simd_ushort1.md): A vector of one 16-bit unsigned integer element.
- [simd_ushort2](simd_ushort2.md): A vector of two 16-bit unsigned integer elements.
- [simd_ushort3](simd_ushort3.md): A vector of three 16-bit unsigned integer elements.
- [simd_ushort8](simd_ushort8.md): A vector of eight 16-bit unsigned integer elements.
- [simd_ushort16](simd_ushort16.md): A vector of sixteen 16-bit unsigned integer elements.
- [simd_ushort32](simd_ushort32.md): A vector of thirty-two 16-bit unsigned integer elements.

# simd_ushort4 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 16-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned short __attribute__((ext_vector_type(4))) simd_ushort4;
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_ushort4](simd_make_ushort4%28__%29-35tv2.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_ushort4](simd_make_ushort4%28__%29-38zbb.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_ushort4](simd_make_ushort4%28__%29-3qyfo.md): Returns a new vector from the specified vector.
- [simd_make_ushort4](simd_make_ushort4%28__%29-45zew.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_ushort4](simd_make_ushort4%28__%29-2aylo.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_ushort4](simd_make_ushort4%28__%29-7bisx.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_ushort4](simd_make_ushort4%28____%29-33b7a.md): Returns a new vector from the specified vectors.
- [vector4](vector4-stby.md): Returns a new vector from the specified vectors.
- [simd_make_ushort4_undef](simd_make_ushort4_undef%28__%29-263ji.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_ushort4_undef](simd_make_ushort4_undef%28__%29-22y87.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_ushort4](simd_make_ushort4%28__%29-85y03.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_ushort4](simd_make_ushort4%28________%29.md): Returns a new vector from the specified scalar values.
- [vector4](vector4-vklr.md): Returns a new vector from the specified scalar values.
- [simd_make_ushort4_undef](simd_make_ushort4_undef%28__%29-9xmiv.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_ushort4](simd_make_ushort4%28______%29-5tiuy.md): Returns a new vector from a vector and scalar values.
- [simd_make_ushort4](simd_make_ushort4%28____%29-44sd1.md): Returns a new vector from a vector and a scalar value.
- [vector4](vector4-34nn6.md): Returns a new vector from a vector and a scalar value.
- [simd_make_ushort4](simd_make_ushort4%28______%29-3yjly.md): Returns a new vector from two scalar values and a vector.
- [simd_make_ushort4](simd_make_ushort4%28______%29-53g72.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_ushort4](simd_make_ushort4%28____%29-4t4aq.md): Returns a new vector from a scalar value and a vector.

### Functions to Create Four-Element Vectors From Vectors of Other Types

- [simd_ushort](simd_ushort-2yc4p.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ushort](simd_ushort-2y23t.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-2ygzt.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ushort](simd_ushort-2y70p.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-2yf49.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ushort](simd_ushort-2y555.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-2ygrr.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_ushort](simd_ushort-2y6qv.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_ushort](simd_ushort-2y3qr.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_ushort](simd_ushort-2y4af.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_ushort_sat](simd_ushort_sat-82yk0.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-82omo.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-82tkg.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-82ju8.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-831o8.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-82ry0.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-832ro.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_ushort_sat](simd_ushort_sat-82slg.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_ushort_sat](simd_ushort_sat-82pos.md): Returns a new vector from the specified vector of 32-bit, floating point elements.
- [simd_ushort_sat](simd_ushort_sat-82qc4.md): Returns a new vector from the specified vector of 64-bit, floating point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-72wjb.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-9613j.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-4usy2.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4qq8a.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2yjso.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-9tvdl.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-64jwl.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6cx6b.md)
- [simd_all](simd_all%28__%29-1jswd.md)
- [simd_bitselect](simd_bitselect%28______%29-ryof.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_ushort4](vector_ushort4.md)

## See Also

### Vector Data Types

- [simd_ushort1](simd_ushort1.md): A vector of one 16-bit unsigned integer element.
- [simd_ushort2](simd_ushort2.md): A vector of two 16-bit unsigned integer elements.
- [simd_ushort3](simd_ushort3.md): A vector of three 16-bit unsigned integer elements.
- [simd_ushort8](simd_ushort8.md): A vector of eight 16-bit unsigned integer elements.
- [simd_ushort16](simd_ushort16.md): A vector of sixteen 16-bit unsigned integer elements.
- [simd_ushort32](simd_ushort32.md): A vector of thirty-two 16-bit unsigned integer elements.
