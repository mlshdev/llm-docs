> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_uchar4](https://developer.apple.com/documentation/simd/simd_uchar4)

# simd_uchar4 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 8-bit unsigned integer elements.

## Declaration

```swift
typealias simd_uchar4 = SIMD4<UInt8>
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_uchar4(\_:)](simd_make_uchar4%28__%29-4hwy4.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uchar4(\_:)](simd_make_uchar4%28__%29-4lf1x.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_uchar4(\_:)](simd_make_uchar4%28__%29-3x2fa.md): Returns a new vector from the specified vector.
- [simd_make_uchar4(\_:)](simd_make_uchar4%28__%29-3i1f6.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_uchar4(\_:)](simd_make_uchar4%28__%29-174yg.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_uchar4(\_:)](simd_make_uchar4%28__%29-6662s.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_uchar4(\_:)](simd_make_uchar4%28__%29-4d9x4.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_uchar4(\_:\_:)](simd_make_uchar4%28____%29-29ka1.md): Returns a new vector from the specified vectors.
- [simd_make_uchar4_undef(\_:)](simd_make_uchar4_undef%28__%29-5we7j.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_uchar4_undef(\_:)](simd_make_uchar4_undef%28__%29-5tfyu.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_uchar4(\_:)](simd_make_uchar4%28__%29-7gszj.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uchar4(\_:\_:\_:\_:)](simd_make_uchar4%28________%29.md): Returns a new vector from the specified scalar values.
- [simd_make_uchar4_undef(\_:)](simd_make_uchar4_undef%28__%29-7uno.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_uchar4(\_:\_:\_:)](simd_make_uchar4%28______%29-5x9io.md): Returns a new vector from a vector and scalar values.
- [simd_make_uchar4(\_:\_:)](simd_make_uchar4%28____%29-3zlj2.md): Returns a new vector from a vector and a scalar value.
- [simd_make_uchar4(\_:\_:\_:)](simd_make_uchar4%28______%29-9rqjk.md): Returns a new vector from two scalar values and a vector.
- [simd_make_uchar4(\_:\_:\_:)](simd_make_uchar4%28______%29-53d7w.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_uchar4(\_:\_:)](simd_make_uchar4%28____%29-4sdi7.md): Returns a new vector from a scalar value and a vector.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-7gs2x.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-4wf8b.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-4uo6i.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4qv6y.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2yos8.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-9muwy.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-2f249.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6d22b.md)
- [simd_all(\_:)](simd_all%28__%29-1jo4t.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-46k0t.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uchar4](vector_uchar4.md)

## See Also

### Vector Data Types

- [simd_uchar1](simd_uchar1.md): A vector of one 8-bit unsigned integer element.
- [simd_uchar2](simd_uchar2.md): A vector of two 8-bit unsigned integer elements.
- [simd_uchar3](simd_uchar3.md): A vector of three 8-bit unsigned integer elements.
- [simd_uchar8](simd_uchar8.md): A vector of eight 8-bit unsigned integer elements.
- [simd_uchar16](simd_uchar16.md): A vector of sixteen 8-bit unsigned integer elements.
- [simd_uchar32](simd_uchar32.md): A vector of thirty-two 8-bit unsigned integer elements.
- [simd_uchar64](simd_uchar64.md): A vector of sixty-four 8-bit unsigned integer elements.

# simd_uchar4 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 8-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned char __attribute__((ext_vector_type(4))) simd_uchar4;
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_uchar4](simd_make_uchar4%28__%29-4hwy4.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uchar4](simd_make_uchar4%28__%29-4lf1x.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_uchar4](simd_make_uchar4%28__%29-3x2fa.md): Returns a new vector from the specified vector.
- [simd_make_uchar4](simd_make_uchar4%28__%29-3i1f6.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_uchar4](simd_make_uchar4%28__%29-174yg.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_uchar4](simd_make_uchar4%28__%29-6662s.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_uchar4](simd_make_uchar4%28__%29-4d9x4.md): Returns a new vector by truncating the specified sixty four-element vector.
- [simd_make_uchar4](simd_make_uchar4%28____%29-29ka1.md): Returns a new vector from the specified vectors.
- [vector4](vector4-3tea7.md): Returns a new vector from the specified vectors.
- [simd_make_uchar4_undef](simd_make_uchar4_undef%28__%29-5we7j.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_uchar4_undef](simd_make_uchar4_undef%28__%29-5tfyu.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_uchar4](simd_make_uchar4%28__%29-7gszj.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uchar4](simd_make_uchar4%28________%29.md): Returns a new vector from the specified scalar values.
- [vector4](vector4-7c8o4.md): Returns a new vector from the specified scalar values.
- [simd_make_uchar4_undef](simd_make_uchar4_undef%28__%29-7uno.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_uchar4](simd_make_uchar4%28______%29-5x9io.md): Returns a new vector from a vector and scalar values.
- [simd_make_uchar4](simd_make_uchar4%28____%29-3zlj2.md): Returns a new vector from a vector and a scalar value.
- [vector4](vector4-8y2oj.md): Returns a new vector from a vector and a scalar value.
- [simd_make_uchar4](simd_make_uchar4%28______%29-9rqjk.md): Returns a new vector from two scalar values and a vector.
- [simd_make_uchar4](simd_make_uchar4%28______%29-53d7w.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_uchar4](simd_make_uchar4%28____%29-4sdi7.md): Returns a new vector from a scalar value and a vector.

### Functions to Create Four-Element Vectors From Vectors of Other Types

- [simd_uchar](simd_uchar-8g94o.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uchar](simd_uchar-8fzaw.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-8geew.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uchar](simd_uchar-8g46w.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-8g7eg.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uchar](simd_uchar-8fxko.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-8g90k.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_uchar](simd_uchar-8fz6s.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_uchar](simd_uchar-8g0ws.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_uchar](simd_uchar-8g1h0.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_uchar_sat](simd_uchar_sat-2dfgm.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-2d5ae.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-2dkfa.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-2daau.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-2ddea.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-2d3ma.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-2deje.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_uchar_sat](simd_uchar_sat-2d4d6.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_uchar_sat](simd_uchar_sat-2d6fq.md): Returns a new vector from the specified vector of 32-bit, floating point elements.
- [simd_uchar_sat](simd_uchar_sat-2d6wq.md): Returns a new vector from the specified vector of 64-bit, floating point elements.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-7gs2x.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-4wf8b.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-4uo6i.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4qv6y.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2yos8.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-9muwy.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-2f249.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6d22b.md)
- [simd_all](simd_all%28__%29-1jo4t.md)
- [simd_bitselect](simd_bitselect%28______%29-46k0t.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_uchar4](vector_uchar4.md)

## See Also

### Vector Data Types

- [simd_uchar1](simd_uchar1.md): A vector of one 8-bit unsigned integer element.
- [simd_uchar2](simd_uchar2.md): A vector of two 8-bit unsigned integer elements.
- [simd_uchar3](simd_uchar3.md): A vector of three 8-bit unsigned integer elements.
- [simd_uchar8](simd_uchar8.md): A vector of eight 8-bit unsigned integer elements.
- [simd_uchar16](simd_uchar16.md): A vector of sixteen 8-bit unsigned integer elements.
- [simd_uchar32](simd_uchar32.md): A vector of thirty-two 8-bit unsigned integer elements.
- [simd_uchar64](simd_uchar64.md): A vector of sixty-four 8-bit unsigned integer elements.
