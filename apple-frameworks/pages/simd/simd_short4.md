> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_short4](https://developer.apple.com/documentation/simd/simd_short4)

# simd_short4 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 16-bit signed integer elements.

## Declaration

```swift
typealias simd_short4 = SIMD4<Int16>
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_short4(\_:)](simd_make_short4%28__%29-6bvw4.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_short4(\_:)](simd_make_short4%28__%29-68qml.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_short4(\_:)](simd_make_short4%28__%29-662gm.md): Returns a new vector from the specified vector.
- [simd_make_short4(\_:)](simd_make_short4%28__%29-5rbcq.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_short4(\_:)](simd_make_short4%28__%29-9muje.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_short4(\_:)](simd_make_short4%28__%29-7tcxn.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_short4(\_:\_:)](simd_make_short4%28____%29-8h120.md): Returns a new vector from the specified vectors.
- [simd_make_short4_undef(\_:)](simd_make_short4_undef%28__%29-8g0xr.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_short4_undef(\_:)](simd_make_short4_undef%28__%29-8imcm.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_short4(\_:)](simd_make_short4%28__%29-1emve.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_short4(\_:\_:\_:\_:)](simd_make_short4%28________%29.md): Returns a new vector from the specified scalar values.
- [simd_make_short4_undef(\_:)](simd_make_short4_undef%28__%29-36i14.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_short4(\_:\_:\_:)](simd_make_short4%28______%29-6v1lj.md): Returns a new vector from a vector and scalar values.
- [simd_make_short4(\_:\_:)](simd_make_short4%28____%29-8tpr6.md): Returns a new vector from a vector and a scalar value.
- [simd_make_short4(\_:\_:\_:)](simd_make_short4%28______%29-34dcj.md): Returns a new vector from two scalar values and a vector.
- [simd_make_short4(\_:\_:\_:)](simd_make_short4%28______%29-21v12.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_short4(\_:\_:)](simd_make_short4%28____%29-46aby.md): Returns a new vector from a scalar value and a vector.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-81n9o.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-3fip1.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-51wsu.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-4uj62.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-4qgga.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-2y9o8.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-3w6s9.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-7xxnr.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6cn5f.md)
- [simd_all(\_:)](simd_all%28__%29-1k2rx.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-u3k7.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_short4](vector_short4.md)

## See Also

### Vector Data Types

- [simd_short1](simd_short1.md): A vector of one 16-bit signed integer element.
- [simd_short2](simd_short2.md): A vector of two 16-bit signed integer elements.
- [simd_short3](simd_short3.md): A vector of three 16-bit signed integer elements.
- [simd_short8](simd_short8.md): A vector of eight 16-bit signed integer elements.
- [simd_short16](simd_short16.md): A vector of sixteen 16-bit signed integer elements.
- [simd_short32](simd_short32.md): A vector of thirty-two 16-bit signed integer elements.

# simd_short4 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of four 16-bit signed integer elements.

## Declaration

```objectivec
typedef short __attribute__((ext_vector_type(4))) simd_short4;
```

## Topics

### Functions to Create Four-Element Vectors From Other Vectors

- [simd_make_short4](simd_make_short4%28__%29-6bvw4.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_short4](simd_make_short4%28__%29-68qml.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_short4](simd_make_short4%28__%29-662gm.md): Returns a new vector from the specified vector.
- [simd_make_short4](simd_make_short4%28__%29-5rbcq.md): Returns a new vector by truncating the specified eight-element vector.
- [simd_make_short4](simd_make_short4%28__%29-9muje.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_short4](simd_make_short4%28__%29-7tcxn.md): Returns a new vector by truncating the specified thirty two-element vector.
- [simd_make_short4](simd_make_short4%28____%29-8h120.md): Returns a new vector from the specified vectors.
- [vector4](vector4-5h3is.md): Returns a new vector from the specified vectors.
- [simd_make_short4_undef](simd_make_short4_undef%28__%29-8g0xr.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_short4_undef](simd_make_short4_undef%28__%29-8imcm.md): Returns a new vector from the specified three-element vector, and other elements undefined.

### Functions to Create Four-Element Vectors From Scalar Values

- [simd_make_short4](simd_make_short4%28__%29-1emve.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_short4](simd_make_short4%28________%29.md): Returns a new vector from the specified scalar values.
- [vector4](vector4-42vpa.md): Returns a new vector from the specified scalar values.
- [simd_make_short4_undef](simd_make_short4_undef%28__%29-36i14.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Four-Element Vectors From Combinations of Vectors and Scalar Values

- [simd_make_short4](simd_make_short4%28______%29-6v1lj.md): Returns a new vector from a vector and scalar values.
- [simd_make_short4](simd_make_short4%28____%29-8tpr6.md): Returns a new vector from a vector and a scalar value.
- [vector4](vector4-8l9kg.md): Returns a new vector from a vector and a scalar value.
- [simd_make_short4](simd_make_short4%28______%29-34dcj.md): Returns a new vector from two scalar values and a vector.
- [simd_make_short4](simd_make_short4%28______%29-21v12.md): Returns a new vector from a scalar value, a vector, and a scalar value.
- [simd_make_short4](simd_make_short4%28____%29-46aby.md): Returns a new vector from a scalar value and a vector.

### Functions to Create Four-Element Vectors From Vectors of Other Types

- [simd_short](simd_short-6kz7g.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_short](simd_short-6l9fg.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_short](simd_short-6kubg.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_short](simd_short-6l458.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_short](simd_short-6kwdg.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_short](simd_short-6l678.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_short](simd_short-6kus0.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_short](simd_short-6l4k0.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_short](simd_short-6l7r4.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_short](simd_short-6l78g.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_short_sat](simd_short_sat-3gjfp.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-3g9id.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-3geh1.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-3g4p1.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-3glj1.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-3gblp.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-3gn33.md): Returns a new vector from the specified vector of 64-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-3gcwv.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-3gb7n.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_short_sat](simd_short_sat-3ganz.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-81n9o.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-3fip1.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-51wsu.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-4uj62.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-4qgga.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-2y9o8.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-3w6s9.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-7xxnr.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6cn5f.md)
- [simd_all](simd_all%28__%29-1k2rx.md)
- [simd_bitselect](simd_bitselect%28______%29-u3k7.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_short4](vector_short4.md)

## See Also

### Vector Data Types

- [simd_short1](simd_short1.md): A vector of one 16-bit signed integer element.
- [simd_short2](simd_short2.md): A vector of two 16-bit signed integer elements.
- [simd_short3](simd_short3.md): A vector of three 16-bit signed integer elements.
- [simd_short8](simd_short8.md): A vector of eight 16-bit signed integer elements.
- [simd_short16](simd_short16.md): A vector of sixteen 16-bit signed integer elements.
- [simd_short32](simd_short32.md): A vector of thirty-two 16-bit signed integer elements.
