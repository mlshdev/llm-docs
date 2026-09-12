> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_float3x2](https://developer.apple.com/documentation/simd/simd_float3x2)

# simd_float3x2 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of three columns and two rows that contains single-precision values.

## Declaration

```swift
struct simd_float3x2
```

## Topics

### Initializers

- [init()](simd_float3x2/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_float3x2/init%28__%29-8cvcd.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_float3x2/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_float3x2/init%28__%29-7ssoh.md): Creates a new matrix from an array.
- [init(\_:\_:\_:)](simd_float3x2/init%28______%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_float3x2/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_float3x2/init%28rows_%29.md): Creates a new matrix with the specified rows.

### Matrix Properties

- [transpose](simd_float3x2/transpose.md): The transpose of the matrix.
- [columns](simd_float3x2/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:\_:)](simd_matrix%28______%29-2oltj.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:)](simd_matrix_from_rows%28____%29-48bjr.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:)](matrix_from_rows%28____%29-47wrn.md): Returns a new matrix with the specified rows.

### Element Access

- [subscript(\_:)](simd_float3x2/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_float3x2/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [float3x2](float3x2.md): A type alias for a single-precision 3 x 2 matrix.
- [matrix_float3x2](matrix_float3x2.md): A type alias for a single-precision 3 x 2 matrix.

### Deprecated Symbols

- [matrix_from_columns(\_:\_:\_:)](matrix_from_columns%28______%29-6ua0c.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_equal(\_:\_:)](matrix_equal%28____%29-1kgro.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-92iqd.md): Deprecated. Returns the transpose of a matrix.
- [cmatrix](simd_float3x2/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.
- [init(\_:)](simd_float3x2/init%28__%29-323m3.md): Deprecated. Creates a new matrix with the specified matrix.

### Operators

- [\*(\_:\_:)](simd_float3x2/_%28____%29-2dgpn.md)
- [\*(\_:\_:)](simd_float3x2/_%28____%29-2raa3.md)
- [\*(\_:\_:)](simd_float3x2/_%28____%29-5obls.md)
- [\*(\_:\_:)](simd_float3x2/_%28____%29-7x4bm.md)
- [\*(\_:\_:)](simd_float3x2/_%28____%29-83wp.md)
- [\*(\_:\_:)](simd_float3x2/_%28____%29-8l62c.md)
- [\*(\_:\_:)](simd_float3x2/_%28____%29-9c2w1.md)
- [\*=(\_:\_:)](simd_float3x2/_=%28____%29-46fya.md)
- [\*=(\_:\_:)](simd_float3x2/_=%28____%29-6ojp8.md)
- [+(\_:\_:)](simd_float3x2/+%28____%29.md)
- [+=(\_:\_:)](simd_float3x2/+=%28____%29.md)
- [-(\_:)](simd_float3x2/-%28__%29.md)
- [-(\_:\_:)](simd_float3x2/-%28____%29.md)
- [-=(\_:\_:)](simd_float3x2/-=%28____%29.md)

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
- [simd_float3x3](simd_float3x3.md): A matrix of three columns and three rows that contains single-precision values.
- [simd_float3x4](simd_float3x4.md): A matrix of three columns and four rows that contains single-precision values.
- [simd_float4x2](simd_float4x2.md): A matrix of four columns and two rows that contains single-precision values.
- [simd_float4x3](simd_float4x3.md): A matrix of four columns and three rows that contains single-precision values.
- [simd_float4x4](simd_float4x4.md): A matrix of four columns and four rows that contains single-precision values.

# simd_float3x2 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of three columns and two rows that contains single-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_float3x2;
```

## Topics

### Matrix Properties

- [columns](simd_float3x2/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28______%29-2oltj.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28____%29-48bjr.md): Returns a new matrix with the specified rows.

### Math Functions

- [simd_add](simd_add-2n7i.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-5gv4w.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-27p9m.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-63kuc.md): Returns the product of a scalar value and a 3 x 2 matrix.

### Matrix-Vector Multiplication Functions

- [matrix_multiply](matrix_multiply-1e54g.md): Returns the product of a two-element vector and a 3 x 2 matrix.
- [simd_mul](simd_mul-6vmls.md): Returns the product of a four-element vector and a 2 x 4 matrix.
- [matrix_multiply](matrix_multiply-3bktl.md): Returns the product of a 3 x 2 matrix and a three-element vector.
- [simd_mul](simd_mul-3kx08.md): Returns the product of a 3 x 2 matrix and a three-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-5coc0.md): Returns the product of a 2 x 2 matrix and a 3 x 2 matrix.
- [matrix_multiply](matrix_multiply-2syft.md): Returns the product of a 2 x 2 matrix and a 3 x 2 matrix.
- [simd_mul](simd_mul-9m23z.md): Returns the product of a 3 x 2 matrix and a 3 x 3 matrix.
- [matrix_multiply](matrix_multiply-2cyog.md): Returns the product of a 3 x 2 matrix and a 3 x 3 matrix.
- [simd_mul](simd_mul-39sak.md): Returns the product of a 4 x 2 matrix and a 3 x 4 matrix.
- [matrix_multiply](matrix_multiply-4o3v4.md): Returns the product of a 4 x 2 matrix and a 3 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-6hbvw.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-2osqw.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-80z14.md): Returns true if every element in a matrix is within a specified single-precision relative tolerance to the corresponding element in a second matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-7mkq9.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-10k3m.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_float3x2](matrix_float3x2.md): A type alias for a single-precision 3 x 2 matrix.

## See Also

### Matrix structures

- [simd_float2x2](simd_float2x2.md): A matrix of two columns and two rows that contains single-precision values.
- [simd_float2x3](simd_float2x3.md): A matrix of two columns and three rows that contains single-precision values.
- [simd_float2x4](simd_float2x4.md): A matrix of two columns and four rows that contains single-precision values.
- [simd_float3x3](simd_float3x3.md): A matrix of three columns and three rows that contains single-precision values.
- [simd_float3x4](simd_float3x4.md): A matrix of three columns and four rows that contains single-precision values.
- [simd_float4x2](simd_float4x2.md): A matrix of four columns and two rows that contains single-precision values.
- [simd_float4x3](simd_float4x3.md): A matrix of four columns and three rows that contains single-precision values.
- [simd_float4x4](simd_float4x4.md): A matrix of four columns and four rows that contains single-precision values.
