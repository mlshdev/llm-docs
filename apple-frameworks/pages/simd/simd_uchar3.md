> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_uchar3](https://developer.apple.com/documentation/simd/simd_uchar3)

# simd_uchar3 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 8-bit unsigned integer elements.

## Declaration

```swift
typealias simd_uchar3 = SIMD3<UInt8>
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_uchar3(\_:)](simd_make_uchar3%28__%29-4qkxz.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uchar3(\_:)](simd_make_uchar3%28__%29-4nmxq.md): Returns a new vector from the specified vector.
- [simd_make_uchar3(\_:)](simd_make_uchar3%28__%29-45nsd.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_uchar3(\_:)](simd_make_uchar3%28__%29-3sucp.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_uchar3(\_:)](simd_make_uchar3%28__%29-90ge7.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_uchar3(\_:)](simd_make_uchar3%28__%29-38lno.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_uchar3(\_:)](simd_make_uchar3%28__%29-3p7i8.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_uchar3_undef(\_:)](simd_make_uchar3_undef%28__%29-99t25.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_uchar3(\_:)](simd_make_uchar3%28__%29-bybh.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uchar3(\_:\_:\_:)](simd_make_uchar3%28______%29.md): Returns a new vector from the specified scalar values.
- [simd_make_uchar3_undef(\_:)](simd_make_uchar3_undef%28__%29-562ub.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_uchar3(\_:\_:)](simd_make_uchar3%28____%29-5tgih.md): Returns a new vector from a vector and a scalar value.
- [simd_make_uchar3(\_:\_:)](simd_make_uchar3%28____%29-2m5x7.md): Returns a new vector from a scalar value and a vector.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-6h8i3.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-8iga0.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-46bd5.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4gzsh.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2v6nn.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-8h62y.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-8ylny.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-69k4o.md)
- [simd_all(\_:)](simd_all%28__%29-1aceu.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-2syfj.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uchar3](vector_uchar3.md)

## See Also

### Vector Data Types

- [simd_uchar1](simd_uchar1.md): A vector of one 8-bit unsigned integer element.
- [simd_uchar2](simd_uchar2.md): A vector of two 8-bit unsigned integer elements.
- [simd_uchar4](simd_uchar4.md): A vector of four 8-bit unsigned integer elements.
- [simd_uchar8](simd_uchar8.md): A vector of eight 8-bit unsigned integer elements.
- [simd_uchar16](simd_uchar16.md): A vector of sixteen 8-bit unsigned integer elements.
- [simd_uchar32](simd_uchar32.md): A vector of thirty-two 8-bit unsigned integer elements.
- [simd_uchar64](simd_uchar64.md): A vector of sixty-four 8-bit unsigned integer elements.

# simd_uchar3 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of three 8-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned char __attribute__((ext_vector_type(3))) simd_uchar3;
```

## Topics

### Functions to Create Three-Element Vectors From Other Vectors

- [simd_make_uchar3](simd_make_uchar3%28__%29-4qkxz.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uchar3](simd_make_uchar3%28__%29-4nmxq.md): Returns a new vector from the specified vector.
- [simd_make_uchar3](simd_make_uchar3%28__%29-45nsd.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_uchar3](simd_make_uchar3%28__%29-3sucp.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_uchar3](simd_make_uchar3%28__%29-90ge7.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_uchar3](simd_make_uchar3%28__%29-38lno.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_uchar3](simd_make_uchar3%28__%29-3p7i8.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_uchar3_undef](simd_make_uchar3_undef%28__%29-99t25.md): Returns a new vector from the specified two-element vector, and other elements undefined.

### Functions to Create Three-Element Vectors From Scalar Values

- [simd_make_uchar3](simd_make_uchar3%28__%29-bybh.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uchar3](simd_make_uchar3%28______%29.md): Returns a new vector from the specified scalar values.
- [vector3](vector3-9qwfg.md): Returns a new vector from the specified scalar values.
- [simd_make_uchar3_undef](simd_make_uchar3_undef%28__%29-562ub.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Three-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_uchar3](simd_make_uchar3%28____%29-5tgih.md): Returns a new vector from a vector and a scalar value.
- [vector3](vector3-9kx6s.md): Returns a new vector from a vector and a scalar value.
- [simd_make_uchar3](simd_make_uchar3%28____%29-2m5x7.md): Returns a new vector from a scalar value and a vector.

### Functions to Create Three-Element Vectors From Vectors of Other Types

- [simd_uchar](simd_uchar-8xokr.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uchar](simd_uchar-8xyej.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-8xtjf.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uchar](simd_uchar-8y3bf.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-8xmh3.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uchar](simd_uchar-8xwnb.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-8xnn5.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_uchar](simd_uchar-8xxdd.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-8xzfl.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_uchar](simd_uchar-8y001.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_uchar_sat](simd_uchar_sat-1x3x1.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-1xdsl.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-1x905.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-1xis5.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-1x225.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-1xc6l.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-1x3m3.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-1xdor.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-1xfdz.md): Returns a new vector from the specified vector of 32-bit, floating point elements.
- [simd_uchar_sat](simd_uchar_sat-1xfyj.md): Returns a new vector from the specified vector of 32-bit, floating point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-6h8i3.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-8iga0.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-46bd5.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4gzsh.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2v6nn.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-8h62y.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-8ylny.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-69k4o.md)
- [simd_all](simd_all%28__%29-1aceu.md)
- [simd_bitselect](simd_bitselect%28______%29-2syfj.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uchar3](vector_uchar3.md)

## See Also

### Vector Data Types

- [simd_uchar1](simd_uchar1.md): A vector of one 8-bit unsigned integer element.
- [simd_uchar2](simd_uchar2.md): A vector of two 8-bit unsigned integer elements.
- [simd_uchar4](simd_uchar4.md): A vector of four 8-bit unsigned integer elements.
- [simd_uchar8](simd_uchar8.md): A vector of eight 8-bit unsigned integer elements.
- [simd_uchar16](simd_uchar16.md): A vector of sixteen 8-bit unsigned integer elements.
- [simd_uchar32](simd_uchar32.md): A vector of thirty-two 8-bit unsigned integer elements.
- [simd_uchar64](simd_uchar64.md): A vector of sixty-four 8-bit unsigned integer elements.
