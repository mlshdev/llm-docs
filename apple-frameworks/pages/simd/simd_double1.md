> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double1](https://developer.apple.com/documentation/simd/simd_double1)

# simd_double1 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of one 64-bit floating-point element.

## Declaration

```swift
typealias simd_double1 = Double
```

## Topics

### Common Functions

- [step(\_:edge:)](step%28__edge_%29-382a5.md)
- [simd_step(\_:\_:)](simd_step%28____%29-8mpre.md)
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-1ktlk.md): Returns each element in a vector clamped to a specified range.
- [simd_fract(\_:)](simd_fract%28__%29-1wsn4.md): Returns the fractional part of each element in a vector.
- [sign(\_:)](sign%28__%29-iwmp.md): Returns the sign of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-937ee.md): Returns the sign of each element in a vector.

### Interpolation Functions

- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-5839l.md): Returns an element-wise smoothly interpolated value between two vectors.
- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-6aqwp.md): Returns an element-wise linearly interpolated value between two vectors.

### Extrema Functions

- [min(\_:\_:)](min%28____%29-7rmn.md): Returns the minimum value of each element in a vector.
- [simd_min(\_:\_:)](simd_min%28____%29-x4en.md): Returns the minimum value of each element in a vector.
- [max(\_:\_:)](max%28____%29-3puhr.md): Returns the maximum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-9ibgs.md): Returns the maximum value of each element in a vector.

### Math Functions

- [simd_muladd(\_:\_:\_:)](simd_muladd%28______%29-9hwx1.md): Returns the multiply-add result for corresponding elements in three vectors.

### Reciprocal and Reciprocal Square Root Functions

- [recip(\_:)](recip%28__%29-8b6ef.md): Returns the reciprocal of each element in a vector.
- [simd_recip(\_:)](simd_recip%28__%29-7ylz3.md): Returns the reciprocal of each element in a vector.
- [simd_fast_recip(\_:)](simd_fast_recip%28__%29-1h1e.md): Returns the fast reciprocal of each element in a vector.
- [simd_precise_recip(\_:)](simd_precise_recip%28__%29-6qb0h.md): Returns the precise reciprocal of each element in a vector.
- [rsqrt(\_:)](rsqrt%28__%29-7h0u6.md): Returns the reciprocal square root of each element in a vector.
- [simd_rsqrt(\_:)](simd_rsqrt%28__%29-4ygr4.md): Returns the reciprocal square root of each element in a vector.
- [simd_fast_rsqrt(\_:)](simd_fast_rsqrt%28__%29-43tvc.md): Returns the fast reciprocal square root of each element in a vector.
- [simd_precise_rsqrt(\_:)](simd_precise_rsqrt%28__%29-5fl9s.md): Returns the precise reciprocal square root of each element in a vector.

## See Also

### Vector data types

- [simd_double2](simd_double2.md): A vector of two 64-bit floating-point elements.
- [simd_double3](simd_double3.md): A vector of three 64-bit floating-point elements.
- [simd_double4](simd_double4.md): A vector of four 64-bit floating-point elements.
- [simd_double8](simd_double8.md): A vector of eight 64-bit floating-point elements.

# simd_double1 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of one 64-bit floating-point element.

## Declaration

```objectivec
typedef double simd_double1;
```

## Topics

### Common Functions

- [simd_step](simd_step%28____%29-8mpre.md)
- [simd_clamp](simd_clamp%28______%29-1ktlk.md): Returns each element in a vector clamped to a specified range.
- [simd_fract](simd_fract%28__%29-1wsn4.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-937ee.md): Returns the sign of each element in a vector.

### Interpolation Functions

- [simd_smoothstep](simd_smoothstep%28______%29-5839l.md): Returns an element-wise smoothly interpolated value between two vectors.
- [simd_mix](simd_mix%28______%29-6aqwp.md): Returns an element-wise linearly interpolated value between two vectors.

### Extrema Functions

- [simd_min](simd_min%28____%29-x4en.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-9ibgs.md): Returns the maximum value of each element in a vector.

### Math Functions

- [simd_muladd](simd_muladd%28______%29-9hwx1.md): Returns the multiply-add result for corresponding elements in three vectors.

### Reciprocal and Reciprocal Square Root Functions

- [simd_recip](simd_recip%28__%29-7ylz3.md): Returns the reciprocal of each element in a vector.
- [simd_fast_recip](simd_fast_recip%28__%29-1h1e.md): Returns the fast reciprocal of each element in a vector.
- [simd_precise_recip](simd_precise_recip%28__%29-6qb0h.md): Returns the precise reciprocal of each element in a vector.
- [simd_rsqrt](simd_rsqrt%28__%29-4ygr4.md): Returns the reciprocal square root of each element in a vector.
- [simd_fast_rsqrt](simd_fast_rsqrt%28__%29-43tvc.md): Returns the fast reciprocal square root of each element in a vector.
- [simd_precise_rsqrt](simd_precise_rsqrt%28__%29-5fl9s.md): Returns the precise reciprocal square root of each element in a vector.

## See Also

### Vector data types

- [simd_double2](simd_double2.md): A vector of two 64-bit floating-point elements.
- [simd_double3](simd_double3.md): A vector of three 64-bit floating-point elements.
- [simd_double4](simd_double4.md): A vector of four 64-bit floating-point elements.
- [simd_double8](simd_double8.md): A vector of eight 64-bit floating-point elements.
