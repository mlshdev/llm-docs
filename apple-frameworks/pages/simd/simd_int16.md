> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_int16](https://developer.apple.com/documentation/simd/simd_int16)

# simd_int16 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of sixteen 32-bit signed integer elements.

## Declaration

```swift
typealias simd_int16 = SIMD16<Int32>
```

## Topics

### Functions to Create Sixteen-Element Vectors From Other Vectors

- [simd_make_int16(\_:)](simd_make_int16%28__%29-35atp.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_int16(\_:)](simd_make_int16%28__%29-31p8k.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_int16(\_:)](simd_make_int16%28__%29-3b5u3.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_int16(\_:)](simd_make_int16%28__%29-25e3r.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_int16(\_:)](simd_make_int16%28__%29-4wuqs.md): Returns a new vector from the specified vector.
- [simd_make_int16(\_:\_:)](simd_make_int16%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_int16_undef(\_:)](simd_make_int16_undef%28__%29-3zkgc.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_int16_undef(\_:)](simd_make_int16_undef%28__%29-431ed.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_int16_undef(\_:)](simd_make_int16_undef%28__%29-3eopu.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_int16_undef(\_:)](simd_make_int16_undef%28__%29-4lk92.md): Returns a new vector from the specified eight-element vector, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Scalar Values

- [simd_make_int16(\_:)](simd_make_int16%28__%29-26gfd.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_int16_undef(\_:)](simd_make_int16_undef%28__%29-6radb.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-477j8.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-5xcny.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-5fwh2.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-3coa3.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-8igr1.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-7msaw.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-3f9xy.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-ybh4.md): Returns the maximum value of each element in a vector.

### Alternative Type Alias

- [vector_int16](vector_int16.md)

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-92rsm.md)
- [simd_all(\_:)](simd_all%28__%29-idpg.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-9fgtc.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## See Also

### Vector Data Types

- [simd_int1](simd_int1.md): A vector of one 32-bit signed integer element.
- [simd_int2](simd_int2.md): A vector of two 32-bit signed integer elements.
- [simd_int3](simd_int3.md): A vector of three 32-bit signed integer elements.
- [simd_int4](simd_int4.md): A vector of four 32-bit signed integer elements.
- [simd_int8](simd_int8.md): A vector of eight 32-bit signed integer elements.

# simd_int16 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of sixteen 32-bit signed integer elements.

## Declaration

```objectivec
typedef int __attribute__((ext_vector_type(16))) simd_int16;
```

## Topics

### Functions to Create Sixteen-Element Vectors From Other Vectors

- [simd_make_int16](simd_make_int16%28__%29-35atp.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_int16](simd_make_int16%28__%29-31p8k.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_int16](simd_make_int16%28__%29-3b5u3.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_int16](simd_make_int16%28__%29-25e3r.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_int16](simd_make_int16%28__%29-4wuqs.md): Returns a new vector from the specified vector.
- [simd_make_int16](simd_make_int16%28____%29.md): Returns a new vector from the specified vectors.
- [vector16](vector16-sofg.md): Returns a new vector from the specified vectors.
- [simd_make_int16_undef](simd_make_int16_undef%28__%29-3zkgc.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_int16_undef](simd_make_int16_undef%28__%29-431ed.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_int16_undef](simd_make_int16_undef%28__%29-3eopu.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_int16_undef](simd_make_int16_undef%28__%29-4lk92.md): Returns a new vector from the specified eight-element vector, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Scalar Values

- [simd_make_int16](simd_make_int16%28__%29-26gfd.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_int16_undef](simd_make_int16_undef%28__%29-6radb.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Sixteen-Element Vectors From Vectors of Other Types

- [simd_int](simd_int-42e4x.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_int](simd_int-42o0h.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_int](simd_int-4298x.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_int](simd_int-42j81.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_int](simd_int-42b4p.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_int](simd_int-42kwp.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_int](simd_int-42mif.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_int_sat](simd_int_sat-621eg.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-61riw.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-61wew.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-61mmw.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-61ziw.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_int_sat](simd_int_sat-61pg8.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_int_sat](simd_int_sat-61t6k.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.

### Functions to Perform Round-Half-to-Even Conversion From Single-Precision Vectors

- [simd_int_rte](simd_int_rte-f7pp.md): Returns a new vector from the specified sixteen-element vector.

### Common Functions

- [simd_abs](simd_abs%28__%29-477j8.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-5xcny.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-5fwh2.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-3coa3.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-8igr1.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-7msaw.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-3f9xy.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-ybh4.md): Returns the maximum value of each element in a vector.

### Alternative Type Alias

- [vector_int16](vector_int16.md)

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-92rsm.md)
- [simd_all](simd_all%28__%29-idpg.md)
- [simd_bitselect](simd_bitselect%28______%29-9fgtc.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## See Also

### Vector Data Types

- [simd_int1](simd_int1.md): A vector of one 32-bit signed integer element.
- [simd_int2](simd_int2.md): A vector of two 32-bit signed integer elements.
- [simd_int3](simd_int3.md): A vector of three 32-bit signed integer elements.
- [simd_int4](simd_int4.md): A vector of four 32-bit signed integer elements.
- [simd_int8](simd_int8.md): A vector of eight 32-bit signed integer elements.
