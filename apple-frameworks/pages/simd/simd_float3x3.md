> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_float3x3](https://developer.apple.com/documentation/simd/simd_float3x3)

# simd_float3x3 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of three columns and three rows that contains single-precision values.

## Declaration

```swift
struct simd_float3x3
```

## Mentioned In

- [Working with Matrices](../accelerate/working-with-matrices.md)

## Topics

### Initializers

- [init()](simd_float3x3/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_float3x3/init%28__%29-43ntv.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_float3x3/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_float3x3/init%28__%29-51tfs.md): Creates a new matrix with the specified columns.
- [init(\_:)](simd_float3x3/init%28__%29-5wkmz.md): Creates a new matrix from the specified quarternion.
- [init(\_:\_:\_:)](simd_float3x3/init%28______%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_float3x3/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_float3x3/init%28rows_%29.md): Creates a new matrix with the specified rows.

### Matrix Constants

- [matrix_identity_float3x3](matrix_identity_float3x3.md): A 3 x 3 identity matrix.

### Matrix Properties

- [determinant](simd_float3x3/determinant.md): The determinant of the matrix.
- [inverse](simd_float3x3/inverse.md): The inverse of the matrix.
- [transpose](simd_float3x3/transpose.md): The transpose of the matrix.
- [columns](simd_float3x3/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:\_:)](simd_matrix%28______%29-52z0s.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:\_:)](simd_matrix_from_rows%28______%29-1tn2x.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:\_:)](matrix_from_rows%28______%29-15v2l.md): Returns a new matrix with the specified rows.
- [simd_matrix3x3(\_:)](simd_matrix3x3%28__%29-60cx9.md): Returns a new matrix with the specified quarternion.

### Element Access

- [subscript(\_:)](simd_float3x3/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_float3x3/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [float3x3](float3x3.md)
- [matrix_float3x3](matrix_float3x3.md)

### Deprecated Symbols

- [matrix_invert(\_:)](matrix_invert%28__%29-15kif.md): Deprecated. Returns the inverse of the specified matrix.
- [matrix_from_diagonal(\_:)](matrix_from_diagonal%28__%29-61643.md): Deprecated. Returns a new matrix with the specified vector on the main diagonal.
- [matrix_determinant(\_:)](matrix_determinant%28__%29-2m4vm.md): Deprecated. Returns the determinant of the specified matrix.
- [matrix_equal(\_:\_:)](matrix_equal%28____%29-14gko.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_from_columns(\_:\_:\_:)](matrix_from_columns%28______%29-4c7qb.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-9pl1z.md): Deprecated. Returns the transpose of a matrix.
- [init(\_:)](simd_float3x3/init%28__%29-7ymye.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_float3x3/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.

### Operators

- [\*(\_:\_:)](simd_float3x3/_%28____%29-4x4d0.md)
- [\*(\_:\_:)](simd_float3x3/_%28____%29-69c2x.md)
- [\*(\_:\_:)](simd_float3x3/_%28____%29-6jkru.md)
- [\*(\_:\_:)](simd_float3x3/_%28____%29-6p68q.md)
- [\*(\_:\_:)](simd_float3x3/_%28____%29-81cfn.md)
- [\*(\_:\_:)](simd_float3x3/_%28____%29-8sd17.md)
- [\*(\_:\_:)](simd_float3x3/_%28____%29-9a517.md)
- [\*=(\_:\_:)](simd_float3x3/_=%28____%29-1iqf4.md)
- [\*=(\_:\_:)](simd_float3x3/_=%28____%29-744e6.md)
- [+(\_:\_:)](simd_float3x3/+%28____%29.md)
- [+=(\_:\_:)](simd_float3x3/+=%28____%29.md)
- [-(\_:)](simd_float3x3/-%28__%29.md)
- [-(\_:\_:)](simd_float3x3/-%28____%29.md)
- [-=(\_:\_:)](simd_float3x3/-=%28____%29.md)

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

- [simd_float2x2](simd_float2x2.md): A matrix of two columns and two rows that contains single-precision values.
- [simd_float2x3](simd_float2x3.md): A matrix of two columns and three rows that contains single-precision values.
- [simd_float2x4](simd_float2x4.md): A matrix of two columns and four rows that contains single-precision values.
- [simd_float3x2](simd_float3x2.md): A matrix of three columns and two rows that contains single-precision values.
- [simd_float3x4](simd_float3x4.md): A matrix of three columns and four rows that contains single-precision values.
- [simd_float4x2](simd_float4x2.md): A matrix of four columns and two rows that contains single-precision values.
- [simd_float4x3](simd_float4x3.md): A matrix of four columns and three rows that contains single-precision values.
- [simd_float4x4](simd_float4x4.md): A matrix of four columns and four rows that contains single-precision values.

# simd_float3x3 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of three columns and three rows that contains single-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_float3x3;
```

## Mentioned In

- [Working with Matrices](../accelerate/working-with-matrices.md)

## Topics

### Matrix Constants

- [matrix_identity_float3x3](matrix_identity_float3x3.md): A 3 x 3 identity matrix.

### Matrix Properties

- [columns](simd_float3x3/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28______%29-52z0s.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28______%29-1tn2x.md): Returns a new matrix with the specified rows.
- [simd_diagonal_matrix](simd_diagonal_matrix-2nvn1.md): Returns a new matrix with the specified vector on the main diagonal.
- [simd_matrix3x3](simd_matrix3x3%28__%29-60cx9.md): Returns a new matrix with the specified quarternion.

### Math Functions

- [simd_add](simd_add-2i7sl.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-8o3lk.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-27owq.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-63kq0.md): Returns the product of a scalar value and a 3 x 3 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-5kjlm.md): Returns the product of a three-element vector and a 3 x 3 matrix.
- [matrix_multiply](matrix_multiply-8trq3.md): Returns the product of a three-element vector and a 3 x 3 matrix.
- [simd_mul](simd_mul-3yvmm.md): Returns the product of a 3 x 3 matrix and a three-element vector.
- [matrix_multiply](matrix_multiply-7b224.md): Returns the product of a 3 x 3 matrix and a three-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-7xeg2.md): Returns the product of a 2 x 3 matrix and a 3 x 2 matrix.
- [simd_mul](simd_mul-7qt0c.md): Returns the product of a 3 x 3 matrix and a 3 x 3 matrix.
- [matrix_multiply](matrix_multiply-3cx53.md): Returns the product of a 3 x 3 matrix and a 3 x 3 matrix.
- [simd_mul](simd_mul-956ho.md): Returns the product of a 4 x 3 matrix and a 3 x 4 matrix.
- [matrix_multiply](matrix_multiply-88ewr.md): Returns the product of a 4 x 3 matrix and a 3 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-2up01.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-6065x.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-edbd.md): Returns true if every element in a matrix is within a specified single-precision relative tolerance to the corresponding element in a second matrix.

### Determinant and Inverse Functions

- [simd_determinant](simd_determinant-43g30.md): Returns the determinant of the specified matrix.
- [simd_inverse](simd_inverse-9xvv5.md): Returns the inverse of the specified matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-4dfvx.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-10jte.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_float3x3](matrix_float3x3.md)

## See Also

### Matrix structures

- [simd_float2x2](simd_float2x2.md): A matrix of two columns and two rows that contains single-precision values.
- [simd_float2x3](simd_float2x3.md): A matrix of two columns and three rows that contains single-precision values.
- [simd_float2x4](simd_float2x4.md): A matrix of two columns and four rows that contains single-precision values.
- [simd_float3x2](simd_float3x2.md): A matrix of three columns and two rows that contains single-precision values.
- [simd_float3x4](simd_float3x4.md): A matrix of three columns and four rows that contains single-precision values.
- [simd_float4x2](simd_float4x2.md): A matrix of four columns and two rows that contains single-precision values.
- [simd_float4x3](simd_float4x3.md): A matrix of four columns and three rows that contains single-precision values.
- [simd_float4x4](simd_float4x4.md): A matrix of four columns and four rows that contains single-precision values.
