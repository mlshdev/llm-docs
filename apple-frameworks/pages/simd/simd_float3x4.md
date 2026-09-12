> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_float3x4](https://developer.apple.com/documentation/simd/simd_float3x4)

# simd_float3x4 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of three columns and four rows that contains single-precision values.

## Declaration

```swift
struct simd_float3x4
```

## Topics

### Initializers

- [init()](simd_float3x4/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_float3x4/init%28__%29-2os7r.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_float3x4/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_float3x4/init%28__%29-4w4et.md): Creates a new matrix from an array.
- [init(\_:\_:\_:)](simd_float3x4/init%28______%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_float3x4/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_float3x4/init%28rows_%29.md): Creates a new matrix with the specified rows.

### Matrix Properties

- [transpose](simd_float3x4/transpose.md): The transpose of the matrix.
- [columns](simd_float3x4/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:\_:)](simd_matrix%28______%29-1vwb0.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:\_:\_:)](simd_matrix_from_rows%28________%29-6irzy.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:\_:\_:)](matrix_from_rows%28________%29-4bn2a.md): Returns a new matrix with the specified rows.

### Element Access

- [subscript(\_:)](simd_float3x4/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_float3x4/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [float3x4](float3x4.md): A type alias for a single-precision 3 x 4 matrix.
- [matrix_float3x4](matrix_float3x4.md): A type alias for a single-precision 3 x 4 matrix.

### Deprecated Symbols

- [matrix_equal(\_:\_:)](matrix_equal%28____%29-6el88.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_from_columns(\_:\_:\_:)](matrix_from_columns%28______%29-5nhl4.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-6ygo1.md): Deprecated. Returns the transpose of a matrix.
- [init(\_:)](simd_float3x4/init%28__%29-8fk31.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_float3x4/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.

### Operators

- [\*(\_:\_:)](simd_float3x4/_%28____%29-309ny.md)
- [\*(\_:\_:)](simd_float3x4/_%28____%29-39co8.md)
- [\*(\_:\_:)](simd_float3x4/_%28____%29-5hu83.md)
- [\*(\_:\_:)](simd_float3x4/_%28____%29-71y0j.md)
- [\*(\_:\_:)](simd_float3x4/_%28____%29-7vkfz.md)
- [\*(\_:\_:)](simd_float3x4/_%28____%29-8gb9i.md)
- [\*(\_:\_:)](simd_float3x4/_%28____%29-ehb7.md)
- [\*=(\_:\_:)](simd_float3x4/_=%28____%29-4brfc.md)
- [\*=(\_:\_:)](simd_float3x4/_=%28____%29-8yuww.md)
- [+(\_:\_:)](simd_float3x4/+%28____%29.md)
- [+=(\_:\_:)](simd_float3x4/+=%28____%29.md)
- [-(\_:)](simd_float3x4/-%28__%29.md)
- [-(\_:\_:)](simd_float3x4/-%28____%29.md)
- [-=(\_:\_:)](simd_float3x4/-=%28____%29.md)

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
- [simd_float4x2](simd_float4x2.md): A matrix of four columns and two rows that contains single-precision values.
- [simd_float4x3](simd_float4x3.md): A matrix of four columns and three rows that contains single-precision values.
- [simd_float4x4](simd_float4x4.md): A matrix of four columns and four rows that contains single-precision values.

# simd_float3x4 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of three columns and four rows that contains single-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_float3x4;
```

## Topics

### Matrix Properties

- [columns](simd_float3x4/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28______%29-1vwb0.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28________%29-6irzy.md): Returns a new matrix with the specified rows.

### Equality Functions

- [simd_equal](simd_equal-8ywka.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-7vp0d.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-8ea8s.md): Returns true if every element in a matrix is within a specified single-precision relative tolerance to the corresponding element in a second matrix.

### Math Functions

- [simd_add](simd_add-2poit.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-8zkd6.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-27nie.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-63lgs.md): Returns the product of a scalar value and a 3 x 4 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-11qnx.md): Returns the product of a four-element vector and a 3 x 4 matrix.
- [matrix_multiply](matrix_multiply-4sxh3.md): Returns the product of a four-element vector and a 3 x 4 matrix.
- [simd_mul](simd_mul-9abtt.md): Returns the product of a 3 x 4 matrix and a three-element vector.
- [matrix_multiply](matrix_multiply-5tf39.md): Returns the product of a 3 x 4 matrix and a three-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-22ry5.md): Returns the product of a 2 x 4 matrix and a 3 x 2 matrix.
- [matrix_multiply](matrix_multiply-2mmjb.md): Returns the product of a 2 x 4 matrix and a 3 x 2 matrix.
- [simd_mul](simd_mul-3uxip.md): Returns the product of a 3 x 4 matrix and a 3 x 3 matrix.
- [matrix_multiply](matrix_multiply-1a1tt.md): Returns the product of a 3 x 4 matrix and a 3 x 3 matrix.
- [simd_mul](simd_mul-8ylcd.md): Returns the product of a 4 x 4 matrix and a 3 x 4 matrix.
- [matrix_multiply](matrix_multiply-15ddt.md): Returns the product of a 4 x 4 matrix and a 3 x 4 matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-q4rt.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-10krq.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_float3x4](matrix_float3x4.md): A type alias for a single-precision 3 x 4 matrix.

## See Also

### Matrix structures

- [simd_float2x2](simd_float2x2.md): A matrix of two columns and two rows that contains single-precision values.
- [simd_float2x3](simd_float2x3.md): A matrix of two columns and three rows that contains single-precision values.
- [simd_float2x4](simd_float2x4.md): A matrix of two columns and four rows that contains single-precision values.
- [simd_float3x2](simd_float3x2.md): A matrix of three columns and two rows that contains single-precision values.
- [simd_float3x3](simd_float3x3.md): A matrix of three columns and three rows that contains single-precision values.
- [simd_float4x2](simd_float4x2.md): A matrix of four columns and two rows that contains single-precision values.
- [simd_float4x3](simd_float4x3.md): A matrix of four columns and three rows that contains single-precision values.
- [simd_float4x4](simd_float4x4.md): A matrix of four columns and four rows that contains single-precision values.
