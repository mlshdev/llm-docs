> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_uchar32](https://developer.apple.com/documentation/simd/simd_uchar32)

# simd_uchar32 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of thirty-two 8-bit unsigned integer elements.

## Declaration

```swift
typealias simd_uchar32 = SIMD32<UInt8>
```

## Topics

### Functions to Create Thirty Two-Element Vectors From Other Vectors

- [simd_make_uchar32(\_:)](simd_make_uchar32%28__%29-ycg1.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uchar32(\_:)](simd_make_uchar32%28__%29-uuk8.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_uchar32(\_:)](simd_make_uchar32%28__%29-cvfv.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_uchar32(\_:)](simd_make_uchar32%28__%29-lv3.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_uchar32(\_:)](simd_make_uchar32%28__%29-94jec.md): Returns a new vector from the specified sixteen-element vector, and other elements set to zero.
- [simd_make_uchar32(\_:)](simd_make_uchar32%28__%29-3c53d.md): Returns a new vector from the specified vector.
- [simd_make_uchar32(\_:)](simd_make_uchar32%28__%29-3tap7.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_uchar32(\_:\_:)](simd_make_uchar32%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_uchar32_undef(\_:)](simd_make_uchar32_undef%28__%29-86jc5.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_uchar32_undef(\_:)](simd_make_uchar32_undef%28__%29-89hb0.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_uchar32_undef(\_:)](simd_make_uchar32_undef%28__%29-8emxj.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_uchar32_undef(\_:)](simd_make_uchar32_undef%28__%29-78b83.md): Returns a new vector from the specified eight-element vector, and other elements undefined.
- [simd_make_uchar32_undef(\_:)](simd_make_uchar32_undef%28__%29-9vswr.md): Returns a new vector from the specified sixteen-element vector, and other elements undefined.

### Functions to Create Thirty Two-Element Vectors From Scalar Values

- [simd_make_uchar32(\_:)](simd_make_uchar32%28__%29-8z2lu.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uchar32_undef(\_:)](simd_make_uchar32_undef%28__%29-6klno.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-3bfcx.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-qmif.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-2b45c.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-9iwy0.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-1updz.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-4b2i2.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-xuo.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-3apcl.md)
- [simd_all(\_:)](simd_all%28__%29-1khgz.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-49vzj.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uchar32](vector_uchar32.md)

## See Also

### Vector Data Types

- [simd_uchar1](simd_uchar1.md): A vector of one 8-bit unsigned integer element.
- [simd_uchar2](simd_uchar2.md): A vector of two 8-bit unsigned integer elements.
- [simd_uchar3](simd_uchar3.md): A vector of three 8-bit unsigned integer elements.
- [simd_uchar4](simd_uchar4.md): A vector of four 8-bit unsigned integer elements.
- [simd_uchar8](simd_uchar8.md): A vector of eight 8-bit unsigned integer elements.
- [simd_uchar16](simd_uchar16.md): A vector of sixteen 8-bit unsigned integer elements.
- [simd_uchar64](simd_uchar64.md): A vector of sixty-four 8-bit unsigned integer elements.

# simd_uchar32 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of thirty-two 8-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned char __attribute__((ext_vector_type(32))) simd_uchar32;
```

## Topics

### Functions to Create Thirty Two-Element Vectors From Other Vectors

- [simd_make_uchar32](simd_make_uchar32%28__%29-ycg1.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uchar32](simd_make_uchar32%28__%29-uuk8.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_uchar32](simd_make_uchar32%28__%29-cvfv.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_uchar32](simd_make_uchar32%28__%29-lv3.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_uchar32](simd_make_uchar32%28__%29-94jec.md): Returns a new vector from the specified sixteen-element vector, and other elements set to zero.
- [simd_make_uchar32](simd_make_uchar32%28__%29-3c53d.md): Returns a new vector from the specified vector.
- [simd_make_uchar32](simd_make_uchar32%28__%29-3tap7.md): Returns a new vector by truncating the specified sixty four-element vector.
- [vector32](vector32-68jyf.md): Returns a new vector from the specified vectors.
- [simd_make_uchar32](simd_make_uchar32%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_uchar32_undef](simd_make_uchar32_undef%28__%29-86jc5.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_uchar32_undef](simd_make_uchar32_undef%28__%29-89hb0.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_uchar32_undef](simd_make_uchar32_undef%28__%29-8emxj.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_uchar32_undef](simd_make_uchar32_undef%28__%29-78b83.md): Returns a new vector from the specified eight-element vector, and other elements undefined.
- [simd_make_uchar32_undef](simd_make_uchar32_undef%28__%29-9vswr.md): Returns a new vector from the specified sixteen-element vector, and other elements undefined.

### Functions to Create Thirty Two-Element Vectors From Scalar Values

- [simd_make_uchar32](simd_make_uchar32%28__%29-8z2lu.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uchar32_undef](simd_make_uchar32_undef%28__%29-6klno.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Thirty Two-Element Vectors From Vectors of Other Types

- [simd_uchar](simd_uchar-5tgfs.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uchar](simd_uchar-5t6ew.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-5tlbs.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uchar](simd_uchar-5tbi0.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_uchar_sat](simd_uchar_sat-330d5.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-32qhl.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-32vh5.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-32lax.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-3bfcx.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-qmif.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-2b45c.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-9iwy0.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-1updz.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-4b2i2.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-xuo.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-3apcl.md)
- [simd_all](simd_all%28__%29-1khgz.md)
- [simd_bitselect](simd_bitselect%28______%29-49vzj.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uchar32](vector_uchar32.md)

## See Also

### Vector Data Types

- [simd_uchar1](simd_uchar1.md): A vector of one 8-bit unsigned integer element.
- [simd_uchar2](simd_uchar2.md): A vector of two 8-bit unsigned integer elements.
- [simd_uchar3](simd_uchar3.md): A vector of three 8-bit unsigned integer elements.
- [simd_uchar4](simd_uchar4.md): A vector of four 8-bit unsigned integer elements.
- [simd_uchar8](simd_uchar8.md): A vector of eight 8-bit unsigned integer elements.
- [simd_uchar16](simd_uchar16.md): A vector of sixteen 8-bit unsigned integer elements.
- [simd_uchar64](simd_uchar64.md): A vector of sixty-four 8-bit unsigned integer elements.
