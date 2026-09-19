> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/simd/matrix_multiply-9ikfl

# matrix_multiply

**Interface language:** Objective-C

**Framework:** simd  
**Kind:** Function

Returns the product of a three-element vector and a 4 x 3 matrix.

## Declaration

```objectivec
static simd_float4 matrix_multiply(simd_float3 __x, simd_float4x3 __y);
```

## See Also

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-9e8z9.md): Returns the product of a three-element vector and a 4 x 3 matrix.
- [matrix_multiply](matrix_multiply-2zrla.md): Returns the product of a 4 x 3 matrix and a four-element vector.
- [simd_mul](simd_mul-2jbub.md): Returns the product of a 4 x 3 matrix and a four-element vector.
