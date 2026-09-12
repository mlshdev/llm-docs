> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_float4x2](https://developer.apple.com/documentation/simd/simd_float4x2)

# simd_float4x2 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of four columns and two rows that contains single-precision values.

## Declaration

```swift
struct simd_float4x2
```

## Topics

### Initializers

- [init()](simd_float4x2/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_float4x2/init%28__%29-4xu3o.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_float4x2/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_float4x2/init%28__%29-5k3p5.md): Creates a new matrix from an array.
- [init(\_:\_:\_:\_:)](simd_float4x2/init%28________%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_float4x2/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_float4x2/init%28rows_%29.md): Creates a new matrix with the specified rows.

### Matrix Properties

- [transpose](simd_float4x2/transpose.md): The transpose of the matrix.
- [columns](simd_float4x2/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:\_:\_:)](simd_matrix%28________%29-xobw.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:)](simd_matrix_from_rows%28____%29-4lzrf.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:)](matrix_from_rows%28____%29-2ip8.md): Returns a new matrix with the specified rows.

### Element Access

- [subscript(\_:)](simd_float4x2/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_float4x2/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [float4x2](float4x2.md): A type alias for a single-precision 4 x 2 matrix.
- [matrix_float4x2](matrix_float4x2.md): A type alias for a single-precision 4 x 2 matrix.

### Deprecated Symbols

- [matrix_equal(\_:\_:)](matrix_equal%28____%29-1izln.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_from_columns(\_:\_:\_:\_:)](matrix_from_columns%28________%29-2u92u.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-260wn.md): Deprecated. Returns the transpose of a matrix.
- [cmatrix](simd_float4x2/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.
- [init(\_:)](simd_float4x2/init%28__%29-2e140.md): Deprecated. Creates a new matrix with the specified matrix.

### Operators

- [\*(\_:\_:)](simd_float4x2/_%28____%29-3xkqa.md)
- [\*(\_:\_:)](simd_float4x2/_%28____%29-5f1f2.md)
- [\*(\_:\_:)](simd_float4x2/_%28____%29-85wgv.md)
- [\*(\_:\_:)](simd_float4x2/_%28____%29-93u9t.md)
- [\*(\_:\_:)](simd_float4x2/_%28____%29-9kthx.md)
- [\*(\_:\_:)](simd_float4x2/_%28____%29-9wwew.md)
- [\*(\_:\_:)](simd_float4x2/_%28____%29-jxxr.md)
- [\*=(\_:\_:)](simd_float4x2/_=%28____%29-24lqw.md)
- [\*=(\_:\_:)](simd_float4x2/_=%28____%29-39csh.md)
- [+(\_:\_:)](simd_float4x2/+%28____%29.md)
- [+=(\_:\_:)](simd_float4x2/+=%28____%29.md)
- [-(\_:)](simd_float4x2/-%28__%29.md)
- [-(\_:\_:)](simd_float4x2/-%28____%29.md)
- [-=(\_:\_:)](simd_float4x2/-=%28____%29.md)

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
- [simd_float4x3](simd_float4x3.md): A matrix of four columns and three rows that contains single-precision values.
- [simd_float4x4](simd_float4x4.md): A matrix of four columns and four rows that contains single-precision values.

# simd_float4x2 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of four columns and two rows that contains single-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_float4x2;
```

## Topics

### Matrix Properties

- [columns](simd_float4x2/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28________%29-xobw.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28____%29-4lzrf.md): Returns a new matrix with the specified rows.

### Math Functions

- [simd_add](simd_add-91obt.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-2yh2r.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-195w1.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-7dh2q.md): Returns the product of a scalar value and a 4 x 2 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-9yzel.md): Returns the product of a two-element vector and a 4 x 2 matrix.
- [matrix_multiply](matrix_multiply-52sa.md): Returns the product of a two-element vector and a 4 x 2 matrix.
- [simd_mul](simd_mul-8l982.md): Returns the product of a 4 x 2 matrix and a four-element vector.
- [matrix_multiply](matrix_multiply-3vw6i.md): Returns the product of a 4 x 2 matrix and a four-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-94zal.md): Returns the product of a 2 x 2 matrix and a 4 x 2 matrix.
- [matrix_multiply](matrix_multiply-8pnia.md): Returns the product of a 2 x 2 matrix and a 4 x 2 matrix.
- [simd_mul](simd_mul-8cz5z.md): Returns the product of a 3 x 2 matrix and a 4 x 3 matrix.
- [matrix_multiply](matrix_multiply-6fuei.md): Returns the product of a 3 x 2 matrix and a 4 x 3 matrix.
- [simd_mul](simd_mul-6gsx.md): Returns the product of a 4 x 2 matrix and a 4 x 4 matrix.
- [matrix_multiply](matrix_multiply-5x4v6.md): Returns the product of a 4 x 2 matrix and a 4 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-7pkez.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-4haeg.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-cp1h.md): Returns true if every element in a matrix is within a specified single-precision relative tolerance to the corresponding element in a second matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-4ivue.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-7h9qj.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_float4x2](matrix_float4x2.md): A type alias for a single-precision 4 x 2 matrix.

## See Also

### Matrix structures

- [simd_float2x2](simd_float2x2.md): A matrix of two columns and two rows that contains single-precision values.
- [simd_float2x3](simd_float2x3.md): A matrix of two columns and three rows that contains single-precision values.
- [simd_float2x4](simd_float2x4.md): A matrix of two columns and four rows that contains single-precision values.
- [simd_float3x2](simd_float3x2.md): A matrix of three columns and two rows that contains single-precision values.
- [simd_float3x3](simd_float3x3.md): A matrix of three columns and three rows that contains single-precision values.
- [simd_float3x4](simd_float3x4.md): A matrix of three columns and four rows that contains single-precision values.
- [simd_float4x3](simd_float4x3.md): A matrix of four columns and three rows that contains single-precision values.
- [simd_float4x4](simd_float4x4.md): A matrix of four columns and four rows that contains single-precision values.
