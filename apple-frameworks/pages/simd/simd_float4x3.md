> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_float4x3](https://developer.apple.com/documentation/simd/simd_float4x3)

# simd_float4x3 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of four columns and three rows that contains single-precision values.

## Declaration

```swift
struct simd_float4x3
```

## Topics

### Initializers

- [init()](simd_float4x3/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_float4x3/init%28__%29-4h0e8.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_float4x3/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_float4x3/init%28__%29-50uqp.md): Creates a new matrix from an array.
- [init(\_:\_:\_:\_:)](simd_float4x3/init%28________%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_float4x3/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_float4x3/init%28rows_%29.md): Creates a new matrix with the specified rows.
- [init(\_:)](simd_float4x3/init%28__%29-3rlc3.md)
- [init(affineTransform:)](simd_float4x3/init%28affinetransform_%29.md): Deprecated.

### Matrix Properties

- [transpose](simd_float4x3/transpose.md): The transpose of the matrix.
- [columns](simd_float4x3/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:\_:\_:)](simd_matrix%28________%29-55qff.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:\_:)](simd_matrix_from_rows%28______%29-81rfz.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:\_:)](matrix_from_rows%28______%29-ld0y.md): Returns a new matrix with the specified rows.

### Element Access

- [subscript(\_:)](simd_float4x3/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_float4x3/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [float4x3](float4x3.md): A type alias for a single-precision 4 x 3 matrix.
- [matrix_float4x3](matrix_float4x3.md): A type alias for a single-precision 4 x 3 matrix.

### Deprecated Symbols

- [matrix_equal(\_:\_:)](matrix_equal%28____%29-2m44x.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_from_columns(\_:\_:\_:\_:)](matrix_from_columns%28________%29-7tq9m.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-2oa75.md): Deprecated. Returns the transpose of a matrix.
- [cmatrix](simd_float4x3/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.
- [init(\_:)](simd_float4x3/init%28__%29-6f0m9.md): Deprecated. Creates a new matrix with the specified matrix.

### Operators

- [\*(\_:\_:)](simd_float4x3/_%28____%29-2x5u4.md)
- [\*(\_:\_:)](simd_float4x3/_%28____%29-3hma7.md)
- [\*(\_:\_:)](simd_float4x3/_%28____%29-3u8eq.md)
- [\*(\_:\_:)](simd_float4x3/_%28____%29-3wqpi.md)
- [\*(\_:\_:)](simd_float4x3/_%28____%29-5if2f.md)
- [\*(\_:\_:)](simd_float4x3/_%28____%29-6s4w1.md)
- [\*(\_:\_:)](simd_float4x3/_%28____%29-6v4mm.md)
- [\*=(\_:\_:)](simd_float4x3/_=%28____%29-5uxwu.md)
- [\*=(\_:\_:)](simd_float4x3/_=%28____%29-9icea.md)
- [+(\_:\_:)](simd_float4x3/+%28____%29.md)
- [+=(\_:\_:)](simd_float4x3/+=%28____%29.md)
- [-(\_:)](simd_float4x3/-%28__%29.md)
- [-(\_:\_:)](simd_float4x3/-%28____%29.md)
- [-=(\_:\_:)](simd_float4x3/-=%28____%29.md)

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
- [simd_float3x3](simd_float3x3.md): A matrix of three columns and three rows that contains single-precision values.
- [simd_float3x4](simd_float3x4.md): A matrix of three columns and four rows that contains single-precision values.
- [simd_float4x2](simd_float4x2.md): A matrix of four columns and two rows that contains single-precision values.
- [simd_float4x4](simd_float4x4.md): A matrix of four columns and four rows that contains single-precision values.

# simd_float4x3 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of four columns and three rows that contains single-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_float4x3;
```

## Topics

### Matrix Properties

- [columns](simd_float4x3/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28________%29-55qff.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28______%29-81rfz.md): Returns a new matrix with the specified rows.

### Math Functions

- [simd_add](simd_add-2mwsl.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-2uvgd.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-19677.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-7dh4y.md): Returns the product of a scalar value and a 4 x 3 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-9e8z9.md): Returns the product of a three-element vector and a 4 x 3 matrix.
- [matrix_multiply](matrix_multiply-9ikfl.md): Returns the product of a three-element vector and a 4 x 3 matrix.
- [matrix_multiply](matrix_multiply-2zrla.md): Returns the product of a 4 x 3 matrix and a four-element vector.
- [simd_mul](simd_mul-2jbub.md): Returns the product of a 4 x 3 matrix and a four-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-1gyxn.md): Returns the product of a 2 x 3 matrix and a 4 x 2 matrix.
- [matrix_multiply](matrix_multiply-4t7o3.md): Returns the product of a 2 x 3 matrix and a 4 x 2 matrix.
- [simd_mul](simd_mul-99lq6.md): Returns the product of a 3 x 3 matrix and a 4 x 3 matrix.
- [matrix_multiply](matrix_multiply-5sdp5.md): Returns the product of a 3 x 3 matrix and a 4 x 3 matrix.
- [simd_mul](simd_mul-28whi.md): Returns the product of a 4 x 3 matrix and a 4 x 4 matrix.
- [matrix_multiply](matrix_multiply-4emfa.md): Returns the product of a 4 x 3 matrix and a 4 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-1da77.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-6rxjg.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-4tjkf.md): Returns true if every element in a matrix is within a specified single-precision relative tolerance to the corresponding element in a second matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-12i0i.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-7h9uh.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_float4x3](matrix_float4x3.md): A type alias for a single-precision 4 x 3 matrix.

## See Also

### Matrix structures

- [simd_float2x2](simd_float2x2.md): A matrix of two columns and two rows that contains single-precision values.
- [simd_float2x3](simd_float2x3.md): A matrix of two columns and three rows that contains single-precision values.
- [simd_float2x4](simd_float2x4.md): A matrix of two columns and four rows that contains single-precision values.
- [simd_float3x2](simd_float3x2.md): A matrix of three columns and two rows that contains single-precision values.
- [simd_float3x3](simd_float3x3.md): A matrix of three columns and three rows that contains single-precision values.
- [simd_float3x4](simd_float3x4.md): A matrix of three columns and four rows that contains single-precision values.
- [simd_float4x2](simd_float4x2.md): A matrix of four columns and two rows that contains single-precision values.
- [simd_float4x4](simd_float4x4.md): A matrix of four columns and four rows that contains single-precision values.
