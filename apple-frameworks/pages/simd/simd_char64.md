> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_char64](https://developer.apple.com/documentation/simd/simd_char64)

# simd_char64 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of sixty-four 8-bit signed integer elements.

## Declaration

```swift
typealias simd_char64 = SIMD64<CChar>
```

## Topics

### Functions to Create Sixty Four-Element Vectors From Other Vectors

- [simd_make_char64(\_:)](simd_make_char64%28__%29-mo7n.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_char64(\_:)](simd_make_char64%28__%29-kchm.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_char64(\_:)](simd_make_char64%28__%29-18pa1.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_char64(\_:)](simd_make_char64%28__%29-1mmet.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_char64(\_:)](simd_make_char64%28__%29-kijk.md): Returns a new vector from the specified sixteen-element vector, and other elements set to zero.
- [simd_make_char64(\_:)](simd_make_char64%28__%29-747mj.md): Returns a new vector from the specified thirty two-element vector, and other elements set to zero.
- [simd_make_char64(\_:)](simd_make_char64%28__%29-v4n8.md): Returns a new vector from the specified vector.
- [simd_make_char64(\_:\_:)](simd_make_char64%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_char64_undef(\_:)](simd_make_char64_undef%28__%29-9r2mn.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_char64_undef(\_:)](simd_make_char64_undef%28__%29-9ui3q.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_char64_undef(\_:)](simd_make_char64_undef%28__%29-cbyu.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_char64_undef(\_:)](simd_make_char64_undef%28__%29-p5ey.md): Returns a new vector from the specified eight-element vector, and other elements undefined.
- [simd_make_char64_undef(\_:)](simd_make_char64_undef%28__%29-ax60.md): Returns a new vector from the specified sixteen-element vector, and other elements undefined.
- [simd_make_char64_undef(\_:)](simd_make_char64_undef%28__%29-5axfx.md): Returns a new vector from the specified thirty two-element vector, and other elements undefined.

### Functions to Create Sixty Four-Element Vectors From Scalar Values

- [simd_make_char64(\_:)](simd_make_char64%28__%29-bvt7.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_char64_undef(\_:)](simd_make_char64_undef%28__%29-2ljie.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-1p85t.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-6jkxk.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-8ghe2.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-jzf5.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-mshf.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-92wpk.md): Returns the sum of all elements in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-jb9j.md)
- [simd_all(\_:)](simd_all%28__%29-2mapx.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-2qkxa.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-66xtr.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-4dt8v.md): Returns the maximum value of each element in a vector.

## See Also

### Vector Data Types

- [simd_char1](simd_char1.md): A vector of one 8-bit signed integer element.
- [simd_char2](simd_char2.md): A vector of two 8-bit signed integer elements.
- [simd_char3](simd_char3.md): A vector of three 8-bit signed integer elements.
- [simd_char4](simd_char4.md): A vector of four 8-bit signed integer elements.
- [simd_char8](simd_char8.md): A vector of eight 8-bit signed integer elements.
- [simd_char16](simd_char16.md): A vector of sixteen 8-bit signed integer elements.
- [simd_char32](simd_char32.md): A vector of thirty-two 8-bit signed integer elements.

# simd_char64 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of sixty-four 8-bit signed integer elements.

## Declaration

```objectivec
typedef char __attribute__((ext_vector_type(64))) simd_char64;
```

## Topics

### Functions to Create Sixty Four-Element Vectors From Other Vectors

- [simd_make_char64](simd_make_char64%28__%29-mo7n.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_char64](simd_make_char64%28__%29-kchm.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_char64](simd_make_char64%28__%29-18pa1.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_char64](simd_make_char64%28__%29-1mmet.md): Returns a new vector from the specified eight-element vector, and other elements set to zero.
- [simd_make_char64](simd_make_char64%28__%29-kijk.md): Returns a new vector from the specified sixteen-element vector, and other elements set to zero.
- [simd_make_char64](simd_make_char64%28__%29-747mj.md): Returns a new vector from the specified thirty two-element vector, and other elements set to zero.
- [simd_make_char64](simd_make_char64%28__%29-v4n8.md): Returns a new vector from the specified vector.
- [simd_make_char64](simd_make_char64%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_char64_undef](simd_make_char64_undef%28__%29-9r2mn.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_char64_undef](simd_make_char64_undef%28__%29-9ui3q.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_char64_undef](simd_make_char64_undef%28__%29-cbyu.md): Returns a new vector from the specified four-element vector, and other elements undefined.
- [simd_make_char64_undef](simd_make_char64_undef%28__%29-p5ey.md): Returns a new vector from the specified eight-element vector, and other elements undefined.
- [simd_make_char64_undef](simd_make_char64_undef%28__%29-ax60.md): Returns a new vector from the specified sixteen-element vector, and other elements undefined.
- [simd_make_char64_undef](simd_make_char64_undef%28__%29-5axfx.md): Returns a new vector from the specified thirty two-element vector, and other elements undefined.

### Functions to Create Sixty Four-Element Vectors From Scalar Values

- [simd_make_char64](simd_make_char64%28__%29-bvt7.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_char64_undef](simd_make_char64_undef%28__%29-2ljie.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs](simd_abs%28__%29-1p85t.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-6jkxk.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-8ghe2.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-jzf5.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-mshf.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-92wpk.md): Returns the sum of all elements in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-jb9j.md)
- [simd_all](simd_all%28__%29-2mapx.md)
- [simd_bitselect](simd_bitselect%28______%29-2qkxa.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Extrema Functions

- [simd_min](simd_min%28____%29-66xtr.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-4dt8v.md): Returns the maximum value of each element in a vector.

## See Also

### Vector Data Types

- [simd_char1](simd_char1.md): A vector of one 8-bit signed integer element.
- [simd_char2](simd_char2.md): A vector of two 8-bit signed integer elements.
- [simd_char3](simd_char3.md): A vector of three 8-bit signed integer elements.
- [simd_char4](simd_char4.md): A vector of four 8-bit signed integer elements.
- [simd_char8](simd_char8.md): A vector of eight 8-bit signed integer elements.
- [simd_char16](simd_char16.md): A vector of sixteen 8-bit signed integer elements.
- [simd_char32](simd_char32.md): A vector of thirty-two 8-bit signed integer elements.
