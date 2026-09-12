> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_short2](https://developer.apple.com/documentation/simd/simd_short2)

# simd_short2 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 16-bit signed integer elements.

## Declaration

```swift
typealias simd_short2 = SIMD2<Int16>
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_short2(\_:)](simd_make_short2%28__%29-6juuy.md): Returns a new vector from the specified vector.
- [simd_make_short2(\_:)](simd_make_short2%28__%29-6gmv7.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_short2(\_:)](simd_make_short2%28__%29-5z7ps.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_short2(\_:)](simd_make_short2%28__%29-74zg4.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_short2(\_:)](simd_make_short2%28__%29-58qns.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_short2(\_:)](simd_make_short2%28__%29-6bz90.md): Returns a new vector by truncating the specified thirty two-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_short2(\_:)](simd_make_short2%28__%29-222xa.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_short2(\_:\_:)](simd_make_short2%28____%29.md): Returns a new vector from the specified scalar values.
- [simd_make_short2_undef(\_:)](simd_make_short2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-88dfi.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-5qqhe.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-6gad6.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-49c4w.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4kmuw.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2q65m.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-13ip4.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-6w9rg.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-64jj5.md)
- [simd_all(\_:)](simd_all%28__%29-1d5nj.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-625jo.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_short2](vector_short2.md)

## See Also

### Vector Data Types

- [simd_short1](simd_short1.md): A vector of one 16-bit signed integer element.
- [simd_short3](simd_short3.md): A vector of three 16-bit signed integer elements.
- [simd_short4](simd_short4.md): A vector of four 16-bit signed integer elements.
- [simd_short8](simd_short8.md): A vector of eight 16-bit signed integer elements.
- [simd_short16](simd_short16.md): A vector of sixteen 16-bit signed integer elements.
- [simd_short32](simd_short32.md): A vector of thirty-two 16-bit signed integer elements.

# simd_short2 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of two 16-bit signed integer elements.

## Declaration

```objectivec
typedef short __attribute__((ext_vector_type(2))) simd_short2;
```

## Topics

### Functions to Create Two-Element Vectors From Other Vectors

- [simd_make_short2](simd_make_short2%28__%29-6juuy.md): Returns a new vector from the specified vector.
- [simd_make_short2](simd_make_short2%28__%29-6gmv7.md): Returns a new vector by truncating the specified three-element vector.
- [simd_make_short2](simd_make_short2%28__%29-5z7ps.md): Returns a new vector by truncating the specified four-element vector.
- [simd_make_short2](simd_make_short2%28__%29-74zg4.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_short2](simd_make_short2%28__%29-58qns.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_short2](simd_make_short2%28__%29-6bz90.md): Returns a new vector by truncating the specified thirty two-element vector.

### Functions to Create Two-Element Vectors From Scalar Values

- [simd_make_short2](simd_make_short2%28__%29-222xa.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_short2](simd_make_short2%28____%29.md): Returns a new vector from the specified scalar values.
- [vector2](vector2-5ek7j.md): Returns a new vector from the specified scalar values.
- [simd_make_short2_undef](simd_make_short2_undef%28__%29.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Two-Element Vectors From Vectors of Other Types

- [simd_short](simd_short-6f37y.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_short](simd_short-6et5a.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_short](simd_short-6ey3y.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_short](simd_short-6eoa6.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_short](simd_short-6f6bm.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_short](simd_short-6ewci.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_short](simd_short-6f4tm.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_short](simd_short-6eusq.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_short](simd_short-6erke.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_short](simd_short-6esiy.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_short_sat](simd_short_sat-3md2f.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-3mn6v.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-3m83r.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-3mi6f.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-3mg4b.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-3mqaj.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-3mfdp.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-3mpct.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-3mm1h.md): Returns a new vector from the specified vector of 32-bit, floating point elements.
- [simd_short_sat](simd_short_sat-3mmpp.md): Returns a new vector from the specified vector of 64-bit, floating point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-88dfi.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-5qqhe.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-6gad6.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-49c4w.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4kmuw.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2q65m.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-13ip4.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-6w9rg.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-64jj5.md)
- [simd_all](simd_all%28__%29-1d5nj.md)
- [simd_bitselect](simd_bitselect%28______%29-625jo.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_short2](vector_short2.md)

## See Also

### Vector Data Types

- [simd_short1](simd_short1.md): A vector of one 16-bit signed integer element.
- [simd_short3](simd_short3.md): A vector of three 16-bit signed integer elements.
- [simd_short4](simd_short4.md): A vector of four 16-bit signed integer elements.
- [simd_short8](simd_short8.md): A vector of eight 16-bit signed integer elements.
- [simd_short16](simd_short16.md): A vector of sixteen 16-bit signed integer elements.
- [simd_short32](simd_short32.md): A vector of thirty-two 16-bit signed integer elements.
