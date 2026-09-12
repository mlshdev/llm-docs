> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_short8](https://developer.apple.com/documentation/simd/simd_short8)

# simd_short8 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 16-bit signed integer elements.

## Declaration

```swift
typealias simd_short8 = SIMD8<Int16>
```

## Topics

### Functions to Create Eight-Element Vectors From Other Vectors

- [simd_make_short8(\_:)](simd_make_short8%28__%29-600rc.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_short8(\_:)](simd_make_short8%28__%29-5wv29.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_short8(\_:)](simd_make_short8%28__%29-6l7oy.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_short8(\_:)](simd_make_short8%28__%29-5gjta.md): Returns a new vector from the specified vector.
- [simd_make_short8(\_:)](simd_make_short8%28__%29-22n5y.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_short8(\_:)](simd_make_short8%28__%29-8mc9h.md): Returns a new vector by truncating the specified thrity two-element vector.
- [simd_make_short8(\_:\_:)](simd_make_short8%28____%29.md): Returns a new vector from the specified vectors.
- [simd_make_short8_undef(\_:)](simd_make_short8_undef%28__%29-54hbi.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_short8_undef(\_:)](simd_make_short8_undef%28__%29-57mlz.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_short8_undef(\_:)](simd_make_short8_undef%28__%29-5ny5g.md): Returns a new vector from the specified four-element vector, and other elements undefined.

### Functions to Create Eight-Element Vectors From Scalar Values

- [simd_make_short8(\_:)](simd_make_short8%28__%29-1jz7f.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_short8_undef(\_:)](simd_make_short8_undef%28__%29-7945n.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-7otzk.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-3cc2g.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-4n1gi.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min(\_:)](simd_reduce_min%28__%29-3ordy.md): Returns the miniumum value in a vector.
- [simd_reduce_max(\_:)](simd_reduce_max%28__%29-55r7y.md): Returns the maximum value in a vector.
- [simd_reduce_add(\_:)](simd_reduce_add%28__%29-3bda4.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-40hpn.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-1u1su.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6pqh3.md)
- [simd_all(\_:)](simd_all%28__%29-1ytzd.md)
- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-1vm6y.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_short8](vector_short8.md)

## See Also

### Vector Data Types

- [simd_short1](simd_short1.md): A vector of one 16-bit signed integer element.
- [simd_short2](simd_short2.md): A vector of two 16-bit signed integer elements.
- [simd_short3](simd_short3.md): A vector of three 16-bit signed integer elements.
- [simd_short4](simd_short4.md): A vector of four 16-bit signed integer elements.
- [simd_short16](simd_short16.md): A vector of sixteen 16-bit signed integer elements.
- [simd_short32](simd_short32.md): A vector of thirty-two 16-bit signed integer elements.

# simd_short8 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of eight 16-bit signed integer elements.

## Declaration

```objectivec
typedef short __attribute__((ext_vector_type(8))) simd_short8;
```

## Topics

### Functions to Create Eight-Element Vectors From Other Vectors

- [simd_make_short8](simd_make_short8%28__%29-600rc.md): Returns a new vector from the specified two-element vector, and other elements set to zero.
- [simd_make_short8](simd_make_short8%28__%29-5wv29.md): Returns a new vector from the specified three-element vector, and other elements set to zero.
- [simd_make_short8](simd_make_short8%28__%29-6l7oy.md): Returns a new vector from the specified four-element vector, and other elements set to zero.
- [simd_make_short8](simd_make_short8%28__%29-5gjta.md): Returns a new vector from the specified vector.
- [simd_make_short8](simd_make_short8%28__%29-22n5y.md): Returns a new vector by truncating the specified sixteen-element vector.
- [simd_make_short8](simd_make_short8%28__%29-8mc9h.md): Returns a new vector by truncating the specified thrity two-element vector.
- [simd_make_short8](simd_make_short8%28____%29.md): Returns a new vector from the specified vectors.
- [vector8](vector8-7jnqf.md): Returns a new vector from the specified vectors.
- [simd_make_short8_undef](simd_make_short8_undef%28__%29-54hbi.md): Returns a new vector from the specified two-element vector, and other elements undefined.
- [simd_make_short8_undef](simd_make_short8_undef%28__%29-57mlz.md): Returns a new vector from the specified three-element vector, and other elements undefined.
- [simd_make_short8_undef](simd_make_short8_undef%28__%29-5ny5g.md): Returns a new vector from the specified four-element vector, and other elements undefined.

### Functions to Create Eight-Element Vectors From Scalar Values

- [simd_make_short8](simd_make_short8%28__%29-1jz7f.md): Returns a new vector with the first element set to a scalar value, and other elements set to zero.
- [simd_make_short8_undef](simd_make_short8_undef%28__%29-7945n.md): Returns a new vector with the first element set to a scalar value, and other elements undefined.

### Functions to Create Eight-Element Vectors From Vectors of Other Types

- [simd_short](simd_short-7008o.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_short](simd_short-6zqew.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_short](simd_short-705iw.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_short](simd_short-6zvaw.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_short](simd_short-6zxf4.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_short](simd_short-6zn74.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_short](simd_short-6zy24.md): Returns a new vector from the specified vector of 64-bit, signed integer element.
- [simd_short](simd_short-6zo8c.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_short](simd_short-6zrfo.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_short](simd_short-6zqvg.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Functions to Perform Saturating Conversion From Vectors of Other Types

- [simd_short_sat](simd_short_sat-31ieh.md): Returns a new vector from the specified vector of 8-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-318h5.md): Returns a new vector from the specified vector of 8-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-31nk9.md): Returns a new vector from the specified vector of 16-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-31de1.md): Returns a new vector from the specified vector of 16-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-31khl.md): Returns a new vector from the specified vector of 32-bit, signed integer elements.
- [simd_short_sat](simd_short_sat-31ad5.md): Returns a new vector from the specified vector of 32-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-31jcj.md): Returns a new vector from the specified vector of 64-bit, signed integer element.
- [simd_short_sat](simd_short_sat-319ir.md): Returns a new vector from the specified vector of 64-bit, unsigned integer elements.
- [simd_short_sat](simd_short_sat-317n3.md): Returns a new vector from the specified vector of 32-bit, floating-point elements.
- [simd_short_sat](simd_short_sat-3170j.md): Returns a new vector from the specified vector of 64-bit, floating-point elements.

### Common Functions

- [simd_abs](simd_abs%28__%29-7otzk.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-3cc2g.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-4n1gi.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

### Reduce Functions

- [simd_reduce_min](simd_reduce_min%28__%29-3ordy.md): Returns the miniumum value in a vector.
- [simd_reduce_max](simd_reduce_max%28__%29-55r7y.md): Returns the maximum value in a vector.
- [simd_reduce_add](simd_reduce_add%28__%29-3bda4.md): Returns the sum of all elements in a vector.

### Extrema Functions

- [simd_min](simd_min%28____%29-40hpn.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-1u1su.md): Returns the maximum value of each element in a vector.

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6pqh3.md)
- [simd_all](simd_all%28__%29-1ytzd.md)
- [simd_bitselect](simd_bitselect%28______%29-1vm6y.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

### Alternative Type Alias

- [vector_short8](vector_short8.md)

## See Also

### Vector Data Types

- [simd_short1](simd_short1.md): A vector of one 16-bit signed integer element.
- [simd_short2](simd_short2.md): A vector of two 16-bit signed integer elements.
- [simd_short3](simd_short3.md): A vector of three 16-bit signed integer elements.
- [simd_short4](simd_short4.md): A vector of four 16-bit signed integer elements.
- [simd_short16](simd_short16.md): A vector of sixteen 16-bit signed integer elements.
- [simd_short32](simd_short32.md): A vector of thirty-two 16-bit signed integer elements.
