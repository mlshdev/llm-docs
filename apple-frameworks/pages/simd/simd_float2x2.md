> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_float2x2](https://developer.apple.com/documentation/simd/simd_float2x2)

# simd_float2x2 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of two columns and two rows that contains single-precision values.

## Declaration

```swift
struct simd_float2x2
```

## Topics

### Initializers

- [init()](simd_float2x2/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_float2x2/init%28__%29-55fda.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_float2x2/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_float2x2/init%28__%29-2mgex.md): Creates a new matrix with the specified columns.
- [init(\_:\_:)](simd_float2x2/init%28____%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_float2x2/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_float2x2/init%28rows_%29.md): Creates a new matrix with the specified rows.

### Matrix Constants

- [matrix_identity_float2x2](matrix_identity_float2x2.md): A 2 x 2 identity matrix.

### Matrix Properties

- [determinant](simd_float2x2/determinant.md): The determinant of the matrix.
- [inverse](simd_float2x2/inverse.md): The inverse of the matrix.
- [transpose](simd_float2x2/transpose.md): The transpose of the matrix.
- [columns](simd_float2x2/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:)](simd_matrix%28____%29-1ftcm.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:)](simd_matrix_from_rows%28____%29-3mqrr.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:)](matrix_from_rows%28____%29-2pi8i.md): Returns a new matrix with the specified rows.

### Element Access

- [subscript(\_:)](simd_float2x2/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_float2x2/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [float2x2](float2x2.md): A type alias for a single-precision 2 x 2 matrix.
- [matrix_float2x2](matrix_float2x2.md): A type alias for a single-precision 2 x 2 matrix.

### Deprecated Symbols

- [matrix_invert(\_:)](matrix_invert%28__%29-94e37.md): Deprecated. Returns the inverse of the specified matrix.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-77v7g.md): Deprecated. Returns the transpose of a matrix.
- [matrix_from_diagonal(\_:)](matrix_from_diagonal%28__%29-1v0zl.md): Deprecated. Returns a new matrix with the specified vector on the main diagonal.
- [matrix_from_columns(\_:\_:)](matrix_from_columns%28____%29-5urmx.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_determinant(\_:)](matrix_determinant%28__%29-30k4n.md): Deprecated. Returns the determinant of the specified matrix.
- [matrix_equal(\_:\_:)](matrix_equal%28____%29-88hz9.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [init(\_:)](simd_float2x2/init%28__%29-uyy7.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_float2x2/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.

### Operators

- [\*(\_:\_:)](simd_float2x2/_%28____%29-2jwi9.md)
- [\*(\_:\_:)](simd_float2x2/_%28____%29-39xxb.md)
- [\*(\_:\_:)](simd_float2x2/_%28____%29-4h9qy.md)
- [\*(\_:\_:)](simd_float2x2/_%28____%29-5fo9p.md)
- [\*(\_:\_:)](simd_float2x2/_%28____%29-7begh.md)
- [\*(\_:\_:)](simd_float2x2/_%28____%29-92stm.md)
- [\*(\_:\_:)](simd_float2x2/_%28____%29-98lyp.md)
- [\*=(\_:\_:)](simd_float2x2/_=%28____%29-2vg0e.md)
- [\*=(\_:\_:)](simd_float2x2/_=%28____%29-obw4.md)
- [+(\_:\_:)](simd_float2x2/+%28____%29.md)
- [+=(\_:\_:)](simd_float2x2/+=%28____%29.md)
- [-(\_:)](simd_float2x2/-%28__%29.md)
- [-(\_:\_:)](simd_float2x2/-%28____%29.md)
- [-=(\_:\_:)](simd_float2x2/-=%28____%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Matrix structures

- [simd_float2x3](simd_float2x3.md): A matrix of two columns and three rows that contains single-precision values.
- [simd_float2x4](simd_float2x4.md): A matrix of two columns and four rows that contains single-precision values.
- [simd_float3x2](simd_float3x2.md): A matrix of three columns and two rows that contains single-precision values.
- [simd_float3x3](simd_float3x3.md): A matrix of three columns and three rows that contains single-precision values.
- [simd_float3x4](simd_float3x4.md): A matrix of three columns and four rows that contains single-precision values.
- [simd_float4x2](simd_float4x2.md): A matrix of four columns and two rows that contains single-precision values.
- [simd_float4x3](simd_float4x3.md): A matrix of four columns and three rows that contains single-precision values.
- [simd_float4x4](simd_float4x4.md): A matrix of four columns and four rows that contains single-precision values.

# simd_float2x2 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of two columns and two rows that contains single-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_float2x2;
```

## Topics

### Matrix Constants

- [matrix_identity_float2x2](matrix_identity_float2x2.md): A 2 x 2 identity matrix.

### Matrix Properties

- [columns](simd_float2x2/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28____%29-1ftcm.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28____%29-3mqrr.md): Returns a new matrix with the specified rows.
- [simd_diagonal_matrix](simd_diagonal_matrix-2rboq.md): Returns a new matrix with the specified vector on the main diagonal.

### Math Functions

- [simd_add](simd_add-9bz1e.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-1rmtl.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-1ioqq.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-6x19.md): Returns the product of a scalar value and a 2 x 2 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-2tj8m.md): Returns the product of a two-element vector and a 2 x 2 matrix.
- [matrix_multiply](matrix_multiply-7aivt.md): Returns the product of a two-element vector and a 2 x 2 matrix.
- [simd_mul](simd_mul-2ymdt.md): Returns the product of a 2 x 2 matrix and a two-element vector.
- [matrix_multiply](matrix_multiply-2mvj0.md): Returns the product of a 2 x 2 matrix and a two-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-4lnzm.md): Returns the product of a 2 x 2 matrix and a 2 x 2 matrix.
- [matrix_multiply](matrix_multiply-906o0.md): Returns the product of a 2 x 2 matrix and a 2 x 2 matrix.
- [simd_mul](simd_mul-5jxwn.md): Returns the product of a 3 x 2 matrix and a 2 x 3 matrix.
- [matrix_multiply](matrix_multiply-89c0b.md): Returns the product of a 3 x 2 matrix and a 2 x 3 matrix.
- [simd_mul](simd_mul-7cznu.md): Returns the product of a 4 x 2 matrix and a 2 x 2 matrix.
- [matrix_multiply](matrix_multiply-8rb5m.md): Returns the product of a 4 x 2 matrix and a 2 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-9hy16.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-50e42.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-6ia0i.md): Returns true if every element in a matrix is within a specified single-precision relative tolerance to the corresponding element in a second matrix.

### Determinant and Inverse Functions

- [simd_determinant](simd_determinant-86nly.md): Returns the determinant of the specified matrix.
- [simd_inverse](simd_inverse-5uob3.md): Returns the inverse of the specified matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-6c418.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-53rn8.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_float2x2](matrix_float2x2.md): A type alias for a single-precision 2 x 2 matrix.

## See Also

### Matrix structures

- [simd_float2x3](simd_float2x3.md): A matrix of two columns and three rows that contains single-precision values.
- [simd_float2x4](simd_float2x4.md): A matrix of two columns and four rows that contains single-precision values.
- [simd_float3x2](simd_float3x2.md): A matrix of three columns and two rows that contains single-precision values.
- [simd_float3x3](simd_float3x3.md): A matrix of three columns and three rows that contains single-precision values.
- [simd_float3x4](simd_float3x4.md): A matrix of three columns and four rows that contains single-precision values.
- [simd_float4x2](simd_float4x2.md): A matrix of four columns and two rows that contains single-precision values.
- [simd_float4x3](simd_float4x3.md): A matrix of four columns and three rows that contains single-precision values.
- [simd_float4x4](simd_float4x4.md): A matrix of four columns and four rows that contains single-precision values.
