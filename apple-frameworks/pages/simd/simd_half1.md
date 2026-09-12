> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_half1](https://developer.apple.com/documentation/simd/simd_half1)

# simd_half1 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of one 16-bit floating-point element.

## Declaration

```swift
typealias simd_half1 = Float16
```

## Topics

### Common functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-c4d6.md): Returns each element in a vector clamped to a specified range.
- [simd_fract(\_:)](simd_fract%28__%29-1wwew.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-9365i.md): Returns the sign of each element in a vector.
- [simd_step(\_:\_:)](simd_step%28____%29-u24h.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Interpolation functions

- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-3mcrj.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-6zp30.md): Returns an element-wise smoothly interpolated value between two vectors.

### Extrema functions

- [simd_max(\_:\_:)](simd_max%28____%29-3f8z7.md): Returns the maximum value of each element in a vector.
- [simd_min(\_:\_:)](simd_min%28____%29-57wqc.md): Returns the minimum value of each element in a vector.

### Reciprocal and reciprocal square root functions

- [simd_recip(\_:)](simd_recip%28__%29-7yi5r.md): Returns the reciprocal of each element in a vector.
- [simd_rsqrt(\_:)](simd_rsqrt%28__%29-4yfi0.md): Returns the reciprocal square root of each element in a vector.
- [simd_precise_recip(\_:)](simd_precise_recip%28__%29-6q9sp.md): Returns the precise reciprocal of each element in a vector.
- [simd_precise_rsqrt(\_:)](simd_precise_rsqrt%28__%29-5fjxk.md): Returns the precise reciprocal square root of each element in a vector.
- [simd_fast_recip(\_:)](simd_fast_recip%28__%29-1ibu.md): Returns the fast reciprocal of each element in a vector.
- [simd_fast_rsqrt(\_:)](simd_fast_rsqrt%28__%29-43sls.md): Returns the fast reciprocal square root of each element in a vector.

### Math functions

- [simd_muladd(\_:\_:\_:)](simd_muladd%28______%29-41x8n.md): Returns the multiply-add result for corresponding elements in three vectors.

## See Also

### Vector data types

- [simd_half2](simd_half2.md): A vector of two 16-bit floating-point elements.
- [simd_half3](simd_half3.md): A vector of three 16-bit floating-point elements.
- [simd_half4](simd_half4.md): A vector of four 16-bit floating-point elements.
- [simd_half8](simd_half8.md): A vector of eight 16-bit floating-point elements.
- [simd_half16](simd_half16.md): A vector of sixteen 16-bit floating-point elements.
- [simd_half32](simd_half32.md): A vector of thirty-two 16-bit floating-point elements.

# simd_half1 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of one 16-bit floating-point element.

## Declaration

```objectivec
typedef _Float16 simd_half1;
```

## Topics

### Common functions

- [simd_clamp](simd_clamp%28______%29-c4d6.md): Returns each element in a vector clamped to a specified range.
- [simd_fract](simd_fract%28__%29-1wwew.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-9365i.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-u24h.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

### Interpolation functions

- [simd_mix](simd_mix%28______%29-3mcrj.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep](simd_smoothstep%28______%29-6zp30.md): Returns an element-wise smoothly interpolated value between two vectors.

### Extrema functions

- [simd_max](simd_max%28____%29-3f8z7.md): Returns the maximum value of each element in a vector.
- [simd_min](simd_min%28____%29-57wqc.md): Returns the minimum value of each element in a vector.

### Reciprocal and reciprocal square root functions

- [simd_recip](simd_recip%28__%29-7yi5r.md): Returns the reciprocal of each element in a vector.
- [simd_rsqrt](simd_rsqrt%28__%29-4yfi0.md): Returns the reciprocal square root of each element in a vector.
- [simd_precise_recip](simd_precise_recip%28__%29-6q9sp.md): Returns the precise reciprocal of each element in a vector.
- [simd_precise_rsqrt](simd_precise_rsqrt%28__%29-5fjxk.md): Returns the precise reciprocal square root of each element in a vector.
- [simd_fast_recip](simd_fast_recip%28__%29-1ibu.md): Returns the fast reciprocal of each element in a vector.
- [simd_fast_rsqrt](simd_fast_rsqrt%28__%29-43sls.md): Returns the fast reciprocal square root of each element in a vector.

### Math functions

- [simd_muladd](simd_muladd%28______%29-41x8n.md): Returns the multiply-add result for corresponding elements in three vectors.

## See Also

### Vector data types

- [simd_half2](simd_half2.md): A vector of two 16-bit floating-point elements.
- [simd_half3](simd_half3.md): A vector of three 16-bit floating-point elements.
- [simd_half4](simd_half4.md): A vector of four 16-bit floating-point elements.
- [simd_half8](simd_half8.md): A vector of eight 16-bit floating-point elements.
- [simd_half16](simd_half16.md): A vector of sixteen 16-bit floating-point elements.
- [simd_half32](simd_half32.md): A vector of thirty-two 16-bit floating-point elements.
