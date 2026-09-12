> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_float1](https://developer.apple.com/documentation/simd/simd_float1)

# simd_float1 (Swift)

**Framework:** simd  
**Kind:** Type Alias

A vector of one 32-bit floating-point element.

## Declaration

```swift
typealias simd_float1 = Float
```

## Topics

### Common Functions

- [step(\_:edge:)](step%28__edge_%29-7md5f.md): Returns zero for each element in a vector less than a specified edge; one otherwise.
- [simd_step(\_:\_:)](simd_step%28____%29-7127e.md): Returns zero for each element in a vector less than a specified edge; one otherwise.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-8f4ck.md): Returns each element in a vector clamped to a specified range.
- [simd_fract(\_:)](simd_fract%28__%29-1ws2w.md): Returns the fractional part of each element in a vector.
- [sign(\_:)](sign%28__%29-iw0p.md): Returns the sign of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-9380i.md): Returns the sign of each element in a vector.

### Interpolation Functions

- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-3i6gv.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-993b1.md): Returns an element-wise smoothly interpolated value between two vectors.

### Extrema Functions

- [simd_min(\_:\_:)](simd_min%28____%29-8o17r.md): Returns the minimum value of each element in a vector.
- [simd_max(\_:\_:)](simd_max%28____%29-7wj2s.md): Returns the maximum value of each element in a vector.

### Reciprocal and Reciprocal Square Root Functions

- [recip(\_:)](recip%28__%29-8b743.md): Returns the reciprocal of each element in a vector.
- [simd_recip(\_:)](simd_recip%28__%29-7ylar.md): Returns the reciprocal of each element in a vector.
- [simd_fast_recip(\_:)](simd_fast_recip%28__%29-1hpi.md): Returns the fast reciprocal of each element in a vector.
- [simd_precise_recip(\_:)](simd_precise_recip%28__%29-6qbmp.md): Returns the precise reciprocal of each element in a vector.
- [rsqrt(\_:)](rsqrt%28__%29-7h1cq.md): Returns the reciprocal square root of each element in a vector.
- [simd_rsqrt(\_:)](simd_rsqrt%28__%29-4yg08.md): Returns the reciprocal square root of each element in a vector.
- [simd_fast_rsqrt(\_:)](simd_fast_rsqrt%28__%29-43uag.md): Returns the fast reciprocal square root of each element in a vector.
- [simd_precise_rsqrt(\_:)](simd_precise_rsqrt%28__%29-5flt4.md): Returns the precise reciprocal square root of each element in a vector.

### Math Functions

- [simd_muladd(\_:\_:\_:)](simd_muladd%28______%29-2pepd.md): Returns the multiply-add result for corresponding elements in three vectors.

## See Also

### Vector data types

- [simd_float2](simd_float2.md): A vector of two 32-bit floating-point elements.
- [simd_float3](simd_float3.md): A vector of three 32-bit floating-point elements.
- [simd_float4](simd_float4.md): A vector of four 32-bit floating-point elements.
- [simd_float8](simd_float8.md): A vector of eight 32-bit floating-point elements.
- [simd_float16](simd_float16.md): A vector of sixteen 32-bit floating-point elements.

# simd_float1 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

A vector of one 32-bit floating-point element.

## Declaration

```objectivec
typedef float simd_float1;
```

## Topics

### Common Functions

- [simd_step](simd_step%28____%29-7127e.md): Returns zero for each element in a vector less than a specified edge; one otherwise.
- [simd_clamp](simd_clamp%28______%29-8f4ck.md): Returns each element in a vector clamped to a specified range.
- [simd_fract](simd_fract%28__%29-1ws2w.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-9380i.md): Returns the sign of each element in a vector.

### Interpolation Functions

- [simd_mix](simd_mix%28______%29-3i6gv.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep](simd_smoothstep%28______%29-993b1.md): Returns an element-wise smoothly interpolated value between two vectors.

### Extrema Functions

- [simd_min](simd_min%28____%29-8o17r.md): Returns the minimum value of each element in a vector.
- [simd_max](simd_max%28____%29-7wj2s.md): Returns the maximum value of each element in a vector.

### Reciprocal and Reciprocal Square Root Functions

- [simd_recip](simd_recip%28__%29-7ylar.md): Returns the reciprocal of each element in a vector.
- [simd_fast_recip](simd_fast_recip%28__%29-1hpi.md): Returns the fast reciprocal of each element in a vector.
- [simd_precise_recip](simd_precise_recip%28__%29-6qbmp.md): Returns the precise reciprocal of each element in a vector.
- [simd_rsqrt](simd_rsqrt%28__%29-4yg08.md): Returns the reciprocal square root of each element in a vector.
- [simd_fast_rsqrt](simd_fast_rsqrt%28__%29-43uag.md): Returns the fast reciprocal square root of each element in a vector.
- [simd_precise_rsqrt](simd_precise_rsqrt%28__%29-5flt4.md): Returns the precise reciprocal square root of each element in a vector.

### Math Functions

- [simd_muladd](simd_muladd%28______%29-2pepd.md): Returns the multiply-add result for corresponding elements in three vectors.

## See Also

### Vector data types

- [simd_float2](simd_float2.md): A vector of two 32-bit floating-point elements.
- [simd_float3](simd_float3.md): A vector of three 32-bit floating-point elements.
- [simd_float4](simd_float4.md): A vector of four 32-bit floating-point elements.
- [simd_float8](simd_float8.md): A vector of eight 32-bit floating-point elements.
- [simd_float16](simd_float16.md): A vector of sixteen 32-bit floating-point elements.
