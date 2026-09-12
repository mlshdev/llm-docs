> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_uint4](https://developer.apple.com/documentation/simd/simd_uint4)

# simd_uint4 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 32-bit unsigned integer elements.

## Declaration

```swift
typealias simd_uint4 = SIMD4<UInt32>
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_uint4(\_:)](simd_make_uint4%28__%29-236jz.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uint4(\_:)](simd_make_uint4%28__%29-1zpti.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_uint4(\_:)](simd_make_uint4%28__%29-2o2f5.md): Returns a new vector from the specified vector.
- [simd_make_uint4(\_:)](simd_make_uint4%28__%29-333jp.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_uint4(\_:)](simd_make_uint4%28__%29-4a98b.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_uint4(\_:\_:)](simd_make_uint4%28____%29-14dxw.md): Returns a new vector from the specified vectors.
- [simd_make_uint4_undef(\_:)](simd_make_uint4_undef%28__%29-4iaj6.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_uint4_undef(\_:)](simd_make_uint4_undef%28__%29-4lr3n.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_uint4(\_:)](simd_make_uint4%28__%29-1vdsn.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uint4(\_:\_:\_:\_:)](simd_make_uint4%28________%29.md): Returns a new vector from the specified scalar values.
- [simd_make_uint4_undef(\_:)](simd_make_uint4_undef%28__%29-5wuto.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_uint4(\_:\_:\_:)](simd_make_uint4%28______%29-5ftg3.md): Returns a new vector from a vector and scalar values.
- [simd_make_uint4(\_:\_:)](simd_make_uint4%28____%29-9arct.md): Returns a new vector from a vector and a scalar value.
- [simd_make_uint4(\_:\_:\_:)](simd_make_uint4%28______%29-73ivt.md): Returns a new vector from two scalar values and a vector.
- [simd_make_uint4(\_:\_:\_:)](simd_make_uint4%28______%29-45zbh.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_uint4(\_:\_:)](simd_make_uint4%28____%29-4kh9u.md): Returns a new vector from a scalar value and a vector.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-1y56u.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-6ix39.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-6fsdy.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-6tvg4.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-4ukuu.md): Returns the minimum value in a vector.
- [reduce_min(\_:)](reduce_min%28__%29-3yrpe.md): Returns the minimum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4qtcm.md): Returns the maximum value in a vector.
- [reduce_max(\_:)](reduce_max%28__%29-ko69.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2ylgg.md): Returns the sum of all elements in a vector.
- [reduce_add(\_:)](reduce_add%28__%29-9xs7v.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-7hpr6.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-7l4j0.md): Returns the minimum value of each element in a vector.
- [min(\_:\_:)](min%28____%29-7o4pn.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-6870v.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-2m7il.md): Returns the maximum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-2pev2.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6cz27.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all(\_:)](simd_all%28__%29-1jm2d.md): Returns true if the high-order bit of every element is set; false otherwise.
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-1rrhy.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [uint4](uint4.md): Deprecated.
- [vector_uint4](vector_uint4.md)

## See Also

### Vector Data Types

- [simd_uint1](simd_uint1.md): A vector of one 32-bit unsigned integer element.
- [simd_uint2](simd_uint2.md): A vector of two 32-bit unsigned integer elements.
- [simd_uint3](simd_uint3.md): A vector of three 32-bit unsigned integer elements.
- [simd_uint8](simd_uint8.md): A vector of eight 32-bit unsigned integer elements.
- [simd_uint16](simd_uint16.md): A vector of sixteen 32-bit unsigned integer elements.

# simd_uint4 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 32-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned int __attribute__((ext_vector_type(4))) simd_uint4;
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_uint4](simd_make_uint4%28__%29-236jz.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uint4](simd_make_uint4%28__%29-1zpti.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_uint4](simd_make_uint4%28__%29-2o2f5.md): Returns a new vector from the specified vector.
- [simd_make_uint4](simd_make_uint4%28__%29-333jp.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_uint4](simd_make_uint4%28__%29-4a98b.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_uint4](simd_make_uint4%28____%29-14dxw.md): Returns a new vector from the specified vectors.
- [vector4](vector4-1wxcx.md): Returns a new vector from the specified vectors.
- [simd_make_uint4_undef](simd_make_uint4_undef%28__%29-4iaj6.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_uint4_undef](simd_make_uint4_undef%28__%29-4lr3n.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_uint4](simd_make_uint4%28__%29-1vdsn.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uint4](simd_make_uint4%28________%29.md): Returns a new vector from the specified scalar values.
- [vector4](vector4-2s268.md): Returns a new vector from the specified scalar values.
- [simd_make_uint4_undef](simd_make_uint4_undef%28__%29-5wuto.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_uint4](simd_make_uint4%28______%29-5ftg3.md): Returns a new vector from a vector and scalar values.
- [simd_make_uint4](simd_make_uint4%28____%29-9arct.md): Returns a new vector from a vector and a scalar value.
- [vector4](vector4-91xr7.md): Returns a new vector from a vector and a scalar value.
- [simd_make_uint4](simd_make_uint4%28______%29-73ivt.md): Returns a new vector from two scalar values and a vector.
- [simd_make_uint4](simd_make_uint4%28______%29-45zbh.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_uint4](simd_make_uint4%28____%29-4kh9u.md): Returns a new vector from a scalar value and a vector.

### Functions to Create Four-Element Vectors From Vectors of Other Types

- [simd_uint](simd_uint-77qjk.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uint](simd_uint-77gtc.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uint](simd_uint-77lq8.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uint](simd_uint-77br4.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uint](simd_uint-77tvc.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uint](simd_uint-77jy0.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uint](simd_uint-77s4c.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_uint](simd_uint-77icc.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_uint](simd_uint-77f84.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_uint](simd_uint-77fp8.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_uint_sat](simd_uint_sat-716a.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-7b76.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-7642.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-7g8i.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-747a.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-7e6e.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-75su.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_uint_sat](simd_uint_sat-7foe.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_uint_sat](simd_uint_sat-7cmi.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_uint_sat](simd_uint_sat-7ddq.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-1y56u.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-6tvg4.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-4ukuu.md): Returns the minimum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4qtcm.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2ylgg.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-7hpr6.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-6870v.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6cz27.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all](simd_all%28__%29-1jm2d.md): Returns true if the high-order bit of every element is set; false otherwise.
- [simd_bitselect](simd_bitselect%28______%29-1rrhy.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uint4](vector_uint4.md)

## See Also

### Vector Data Types

- [simd_uint1](simd_uint1.md): A vector of one 32-bit unsigned integer element.
- [simd_uint2](simd_uint2.md): A vector of two 32-bit unsigned integer elements.
- [simd_uint3](simd_uint3.md): A vector of three 32-bit unsigned integer elements.
- [simd_uint8](simd_uint8.md): A vector of eight 32-bit unsigned integer elements.
- [simd_uint16](simd_uint16.md): A vector of sixteen 32-bit unsigned integer elements.
