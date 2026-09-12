> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_half2x4](https://developer.apple.com/documentation/simd/simd_half2x4)

# simd_half2x4 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of two columns and four rows that contains half-precision values.

## Declaration

```swift
struct simd_half2x4
```

## Topics

### Initializers

- [init()](simd_half2x4/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(columns:)](simd_half2x4/init%28columns_%29.md): Creates a new matrix with the specified columns.

### Matrix properties

- [columns](simd_half2x4/columns.md): The columns of the matrix.

### Matrix creation functions

- [simd_matrix(\_:\_:)](simd_matrix%28____%29-3087y.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:\_:\_:)](simd_matrix_from_rows%28________%29-76zte.md): Returns a new matrix with the specified rows.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Matrix structures

- [simd_half2x2](simd_half2x2.md): A matrix of two columns and two rows that contains half-precision values.
- [simd_half2x3](simd_half2x3.md): A matrix of two columns and three rows that contains half-precision values.
- [simd_half3x2](simd_half3x2.md): A matrix of three columns and two rows that contains half-precision values.
- [simd_half3x3](simd_half3x3.md): A matrix of three columns and three rows that contains half-precision values.
- [simd_half3x4](simd_half3x4.md): A matrix of three columns and four rows that contains half-precision values.
- [simd_half4x2](simd_half4x2.md): A matrix of four columns and two rows that contains half-precision values.
- [simd_half4x3](simd_half4x3.md): A matrix of four columns and three rows that contains half-precision values.
- [simd_half4x4](simd_half4x4.md): A matrix of four columns and four rows that contains half-precision values.

# simd_half2x4 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of two columns and four rows that contains half-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_half2x4;
```

## Topics

### Matrix properties

- [columns](simd_half2x4/columns.md): The columns of the matrix.

### Matrix creation functions

- [simd_matrix](simd_matrix%28____%29-3087y.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28________%29-76zte.md): Returns a new matrix with the specified rows.

### Math functions

- [simd_add](simd_add-5cg1.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-7og97.md): Returns the difference of two matrices.

### Matrix-scalar multiplication functions

- [matrix_scale](matrix_scale-3fzrg.md): Returns the product of a scalar value and a matrix.

### Matrix-vector multiplication functions

- [matrix_multiply](matrix_multiply-5rp9d.md): Returns the product of a vector and a matrix.

### Equality functions

- [simd_equal](simd_equal-9j31j.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-3lsy1.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-3z0ws.md): Returns true if every element in a matrix is within a specified single-precision relative tolerance to the corresponding element in a second matrix.

### Linear combination function

- [simd_linear_combination](simd_linear_combination-8bbng.md): Returns the linear combination of two scalar values and two matrices.

### Transpose function

- [simd_transpose](simd_transpose-2zzvb.md): Returns the transpose of a matrix.

## See Also

### Matrix structures

- [simd_half2x2](simd_half2x2.md): A matrix of two columns and two rows that contains half-precision values.
- [simd_half2x3](simd_half2x3.md): A matrix of two columns and three rows that contains half-precision values.
- [simd_half3x2](simd_half3x2.md): A matrix of three columns and two rows that contains half-precision values.
- [simd_half3x3](simd_half3x3.md): A matrix of three columns and three rows that contains half-precision values.
- [simd_half3x4](simd_half3x4.md): A matrix of three columns and four rows that contains half-precision values.
- [simd_half4x2](simd_half4x2.md): A matrix of four columns and two rows that contains half-precision values.
- [simd_half4x3](simd_half4x3.md): A matrix of four columns and three rows that contains half-precision values.
- [simd_half4x4](simd_half4x4.md): A matrix of four columns and four rows that contains half-precision values.
