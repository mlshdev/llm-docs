> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_float2x3](https://developer.apple.com/documentation/simd/simd_float2x3)

# simd_float2x3 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of two columns and three rows that contains single-precision values.

## Declaration

```swift
struct simd_float2x3
```

## Topics

### Initializers

- [init()](simd_float2x3/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_float2x3/init%28__%29-9lk1g.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_float2x3/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_float2x3/init%28__%29-757nf.md): Creates a new matrix from an array.
- [init(\_:\_:)](simd_float2x3/init%28____%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_float2x3/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_float2x3/init%28rows_%29.md): Creates a new matrix with the specified rows.

### Matrix Properties

- [transpose](simd_float2x3/transpose.md): The transpose of the matrix.
- [columns](simd_float2x3/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:)](simd_matrix%28____%29-7qavs.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:\_:)](simd_matrix_from_rows%28______%29-9kksc.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:\_:)](matrix_from_rows%28______%29-m0hw.md): Returns a new matrix with the specified rows.

### Element Access

- [subscript(\_:)](simd_float2x3/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_float2x3/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [float2x3](float2x3.md): A type alias for a single-precision 2 x 3 matrix.
- [matrix_float2x3](matrix_float2x3.md): A type alias for a single-precision 2 x 3 matrix.

### Deprecated Symbols

- [matrix_from_columns(\_:\_:)](matrix_from_columns%28____%29-8tygq.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_equal(\_:\_:)](matrix_equal%28____%29-he2l.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-71xii.md): Deprecated. Returns the transpose of a matrix.
- [init(\_:)](simd_float2x3/init%28__%29-55t2w.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_float2x3/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.

### Operators

- [\*(\_:\_:)](simd_float2x3/_%28____%29-2hkqa.md)
- [\*(\_:\_:)](simd_float2x3/_%28____%29-4hssh.md)
- [\*(\_:\_:)](simd_float2x3/_%28____%29-4pre4.md)
- [\*(\_:\_:)](simd_float2x3/_%28____%29-7vzog.md)
- [\*(\_:\_:)](simd_float2x3/_%28____%29-82e85.md)
- [\*(\_:\_:)](simd_float2x3/_%28____%29-84qqs.md)
- [\*(\_:\_:)](simd_float2x3/_%28____%29-955tc.md)
- [\*=(\_:\_:)](simd_float2x3/_=%28____%29-6hcqy.md)
- [\*=(\_:\_:)](simd_float2x3/_=%28____%29-7ohft.md)
- [+(\_:\_:)](simd_float2x3/+%28____%29.md)
- [+=(\_:\_:)](simd_float2x3/+=%28____%29.md)
- [-(\_:)](simd_float2x3/-%28__%29.md)
- [-(\_:\_:)](simd_float2x3/-%28____%29.md)
- [-=(\_:\_:)](simd_float2x3/-=%28____%29.md)

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
- [simd_float2x4](simd_float2x4.md): A matrix of two columns and four rows that contains single-precision values.
- [simd_float3x2](simd_float3x2.md): A matrix of three columns and two rows that contains single-precision values.
- [simd_float3x3](simd_float3x3.md): A matrix of three columns and three rows that contains single-precision values.
- [simd_float3x4](simd_float3x4.md): A matrix of three columns and four rows that contains single-precision values.
- [simd_float4x2](simd_float4x2.md): A matrix of four columns and two rows that contains single-precision values.
- [simd_float4x3](simd_float4x3.md): A matrix of four columns and three rows that contains single-precision values.
- [simd_float4x4](simd_float4x4.md): A matrix of four columns and four rows that contains single-precision values.

# simd_float2x3 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of two columns and three rows that contains single-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_float2x3;
```

## Topics

### Matrix Properties

- [columns](simd_float2x3/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28____%29-7qavs.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28______%29-9kksc.md): Returns a new matrix with the specified rows.

### Math Functions

- [simd_add](simd_add-9wpew.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-964zd.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-1iouq.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-6xb7.md): Returns the product of a scalar value and a 2 x 3 matrix.

### Matrix-Vector Multiplication Functions

- [matrix_multiply](matrix_multiply-4h3hg.md): Returns the product of a three-element vector and a 2 x 3 matrix.
- [simd_mul](simd_mul-9nrvk.md): Returns the product of a three-element vector and a 2 x 3 matrix.
- [matrix_multiply](matrix_multiply-46tk7.md): Returns the product of a 2 x 2 matrix and a two-element vector.
- [simd_mul](simd_mul-5urnv.md): Returns the product of a 2 x 2 matrix and a two-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-3uh3s.md): Returns the product of a 2 x 3 matrix and a 2 x 2 matrix.
- [matrix_multiply](matrix_multiply-1f27l.md): Returns the product of a 2 x 3 matrix and a 2 x 2 matrix.
- [matrix_multiply](matrix_multiply-q1lr.md): Returns the product of a 2 x 3 matrix and a 3 x 2 matrix.
- [simd_mul](simd_mul-4cl38.md): Returns the product of a 3 x 3 matrix and a 2 x 3 matrix.
- [matrix_multiply](matrix_multiply-5hr72.md): Returns the product of a 3 x 3 matrix and a 2 x 3 matrix.
- [simd_mul](simd_mul-532ye.md): Returns the product of a 4 x 3 matrix and a 2 x 4 matrix.
- [matrix_multiply](matrix_multiply-2l8mv.md): Returns the product of a 4 x 3 matrix and a 2 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-2flog.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-jjiy.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-8togh.md): Returns true if every element in a matrix is within a specified single-precision relative tolerance to the corresponding element in a second matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-4qv3c.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-53rrs.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_float2x3](matrix_float2x3.md): A type alias for a single-precision 2 x 3 matrix.

## See Also

### Matrix structures

- [simd_float2x2](simd_float2x2.md): A matrix of two columns and two rows that contains single-precision values.
- [simd_float2x4](simd_float2x4.md): A matrix of two columns and four rows that contains single-precision values.
- [simd_float3x2](simd_float3x2.md): A matrix of three columns and two rows that contains single-precision values.
- [simd_float3x3](simd_float3x3.md): A matrix of three columns and three rows that contains single-precision values.
- [simd_float3x4](simd_float3x4.md): A matrix of three columns and four rows that contains single-precision values.
- [simd_float4x2](simd_float4x2.md): A matrix of four columns and two rows that contains single-precision values.
- [simd_float4x3](simd_float4x3.md): A matrix of four columns and three rows that contains single-precision values.
- [simd_float4x4](simd_float4x4.md): A matrix of four columns and four rows that contains single-precision values.
