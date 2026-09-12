> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_uchar64](https://developer.apple.com/documentation/simd/simd_uchar64)

# simd_uchar64 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of sixty-four 8-bit unsigned integer elements.

## Declaration

```swift
typealias simd_uchar64 = SIMD64<UInt8>
```

## Topics

### Functions to Create Sixty Four-Element Vectors From Other Vectors

- [simd_make_uchar64(\_:)](simd_make_uchar64%28__%29-57u64.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uchar64(\_:)](simd_make_uchar64%28__%29-5apn9.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_uchar64(\_:)](simd_make_uchar64%28__%29-51eby.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_uchar64(\_:)](simd_make_uchar64%28__%29-65i5u.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_uchar64(\_:)](simd_make_uchar64%28__%29-3wfeh.md): Returns a new vector from the specified sixteen-element vector, and other elements set to zero.
- [simd_make_uchar64(\_:)](simd_make_uchar64%28__%29-56lh8.md): Returns a new vector from the specified thirty two-element vector, and other elements set to zero.
- [simd_make_uchar64(\_:)](simd_make_uchar64%28__%29-1g5oc.md): Returns a new vector from the specified vector.
- [simd_make_uchar64(\_:\_:)](simd_make_uchar64%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_uchar64_undef(\_:)](simd_make_uchar64_undef%28__%29-8lvix.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_uchar64_undef(\_:)](simd_make_uchar64_undef%28__%29-8ig34.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_uchar64_undef(\_:)](simd_make_uchar64_undef%28__%29-8fhu3.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_uchar64_undef(\_:)](simd_make_uchar64_undef%28__%29-9jm47.md): Returns a new vector from the specified eight-element vector, and other elements undefined.
- [simd_make_uchar64_undef(\_:)](simd_make_uchar64_undef%28__%29-p0tj.md): Returns a new vector from the specified sixteen-element vector, and other elements undefined.
- [simd_make_uchar64_undef(\_:)](simd_make_uchar64_undef%28__%29-9ldf2.md): Returns a new vector from the specified thirty two-element vector, and other elements undefined.

### Functions to Create Sixty Four-Element Vectors From Scalar Values

- [simd_make_uchar64(\_:)](simd_make_uchar64%28__%29-9d1w7.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uchar64_undef(\_:)](simd_make_uchar64_undef%28__%29-6vlwv.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-jpn5.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-micz.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-936l4.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-ep1f.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-5la8o.md): Returns the maximum value of each element in a vector.

### Common Functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-52h9h.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-494kp.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-jl1j.md)
- [simd_all(\_:)](simd_all%28__%29-2m0jp.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-2bway.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## See Also

### Vector Data Types

- [simd_uchar1](simd_uchar1.md): A vector of one 8-bit unsigned integer element.
- [simd_uchar2](simd_uchar2.md): A vector of two 8-bit unsigned integer elements.
- [simd_uchar3](simd_uchar3.md): A vector of three 8-bit unsigned integer elements.
- [simd_uchar4](simd_uchar4.md): A vector of four 8-bit unsigned integer elements.
- [simd_uchar8](simd_uchar8.md): A vector of eight 8-bit unsigned integer elements.
- [simd_uchar16](simd_uchar16.md): A vector of sixteen 8-bit unsigned integer elements.
- [simd_uchar32](simd_uchar32.md): A vector of thirty-two 8-bit unsigned integer elements.

# simd_uchar64 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of sixty-four 8-bit unsigned integer elements.

## Declaration

```objectivec
typedef unsigned char __attribute__((ext_vector_type(64))) simd_uchar64;
```

## Topics

### Functions to Create Sixty Four-Element Vectors From Other Vectors

- [simd_make_uchar64](simd_make_uchar64%28__%29-57u64.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_uchar64](simd_make_uchar64%28__%29-5apn9.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_uchar64](simd_make_uchar64%28__%29-51eby.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_uchar64](simd_make_uchar64%28__%29-65i5u.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_uchar64](simd_make_uchar64%28__%29-3wfeh.md): Returns a new vector from the specified sixteen-element vector, and other elements set to zero.
- [simd_make_uchar64](simd_make_uchar64%28__%29-56lh8.md): Returns a new vector from the specified thirty two-element vector, and other elements set to zero.
- [simd_make_uchar64](simd_make_uchar64%28__%29-1g5oc.md): Returns a new vector from the specified vector.
- [simd_make_uchar64](simd_make_uchar64%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_uchar64_undef](simd_make_uchar64_undef%28__%29-8lvix.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_uchar64_undef](simd_make_uchar64_undef%28__%29-8ig34.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_uchar64_undef](simd_make_uchar64_undef%28__%29-8fhu3.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_uchar64_undef](simd_make_uchar64_undef%28__%29-9jm47.md): Returns a new vector from the specified eight-element vector, and other elements undefined.
- [simd_make_uchar64_undef](simd_make_uchar64_undef%28__%29-p0tj.md): Returns a new vector from the specified sixteen-element vector, and other elements undefined.
- [simd_make_uchar64_undef](simd_make_uchar64_undef%28__%29-9ldf2.md): Returns a new vector from the specified thirty two-element vector, and other elements undefined.

### Functions to Create Sixty Four-Element Vectors From Scalar Values

- [simd_make_uchar64](simd_make_uchar64%28__%29-9d1w7.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_uchar64_undef](simd_make_uchar64_undef%28__%29-6vlwv.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-jpn5.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-micz.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-936l4.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-ep1f.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-5la8o.md): Returns the maximum value of each element in a vector.

### Common Functions

- [simd_clamp](simd_clamp%28______%29-52h9h.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-494kp.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-jl1j.md)
- [simd_all](simd_all%28__%29-2m0jp.md)
- [simd_bitselect](simd_bitselect%28______%29-2bway.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## See Also

### Vector Data Types

- [simd_uchar1](simd_uchar1.md): A vector of one 8-bit unsigned integer element.
- [simd_uchar2](simd_uchar2.md): A vector of two 8-bit unsigned integer elements.
- [simd_uchar3](simd_uchar3.md): A vector of three 8-bit unsigned integer elements.
- [simd_uchar4](simd_uchar4.md): A vector of four 8-bit unsigned integer elements.
- [simd_uchar8](simd_uchar8.md): A vector of eight 8-bit unsigned integer elements.
- [simd_uchar16](simd_uchar16.md): A vector of sixteen 8-bit unsigned integer elements.
- [simd_uchar32](simd_uchar32.md): A vector of thirty-two 8-bit unsigned integer elements.
