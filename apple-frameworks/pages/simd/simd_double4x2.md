> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double4x2](https://developer.apple.com/documentation/simd/simd_double4x2)

# simd_double4x2 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of four columns and two rows that contains double-precision values.

## Declaration

```swift
struct simd_double4x2
```

## Mentioned In

- [Working with Matrices](../accelerate/working-with-matrices.md)

## Topics

### Initializers

- [init()](simd_double4x2/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_double4x2/init%28__%29-3i3he.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_double4x2/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_double4x2/init%28__%29-9pvdm.md): Creates a new matrix from an array.
- [init(\_:\_:\_:\_:)](simd_double4x2/init%28________%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_double4x2/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_double4x2/init%28rows_%29.md): Creates a new matrix with the specified rows.

### Matrix Properties

- [transpose](simd_double4x2/transpose.md): The transpose of the matrix.
- [columns](simd_double4x2/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:\_:\_:)](simd_matrix%28________%29-6cze4.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:)](simd_matrix_from_rows%28____%29-5xq2d.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:)](matrix_from_rows%28____%29-2rxkt.md): Returns a new matrix with the specified rows.

### Element Access

- [subscript(\_:)](simd_double4x2/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_double4x2/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [double4x2](double4x2.md): A type alias for a double-precision 4 x 2 matrix.
- [matrix_double4x2](matrix_double4x2.md): A type alias for a double-precision 4 x 2 matrix.

### Deprecated Symbols

- [matrix_from_columns(\_:\_:\_:\_:)](matrix_from_columns%28________%29-6tb78.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_equal(\_:\_:)](matrix_equal%28____%29-5v8g0.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-7ttoe.md): Deprecated. Returns the transpose of a matrix.
- [init(\_:)](simd_double4x2/init%28__%29-hovz.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_double4x2/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.

### Operators

- [\*(\_:\_:)](simd_double4x2/_%28____%29-5166x.md)
- [\*(\_:\_:)](simd_double4x2/_%28____%29-64ht9.md)
- [\*(\_:\_:)](simd_double4x2/_%28____%29-73ixh.md)
- [\*(\_:\_:)](simd_double4x2/_%28____%29-7fz5.md)
- [\*(\_:\_:)](simd_double4x2/_%28____%29-8tpc2.md)
- [\*(\_:\_:)](simd_double4x2/_%28____%29-mlrw.md)
- [\*(\_:\_:)](simd_double4x2/_%28____%29-qtns.md)
- [\*=(\_:\_:)](simd_double4x2/_=%28____%29-2s2r4.md)
- [\*=(\_:\_:)](simd_double4x2/_=%28____%29-9qlax.md)
- [+(\_:\_:)](simd_double4x2/+%28____%29.md)
- [+=(\_:\_:)](simd_double4x2/+=%28____%29.md)
- [-(\_:)](simd_double4x2/-%28__%29.md)
- [-(\_:\_:)](simd_double4x2/-%28____%29.md)
- [-=(\_:\_:)](simd_double4x2/-=%28____%29.md)

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

- [simd_double2x2](simd_double2x2.md): A matrix of two columns and two rows that contains double-precision values.
- [simd_double2x3](simd_double2x3.md): A matrix of two columns and three rows that contains double-precision values.
- [simd_double2x4](simd_double2x4.md): A matrix of two columns and four rows that contains double-precision values.
- [simd_double3x2](simd_double3x2.md): A matrix of three columns and two rows that contains double-precision values.
- [simd_double3x3](simd_double3x3.md): A matrix of three columns and three rows that contains double-precision values.
- [simd_double3x4](simd_double3x4.md): A matrix of three columns and four rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.

# simd_double4x2 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of four columns and two rows that contains double-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_double4x2;
```

## Mentioned In

- [Working with Matrices](../accelerate/working-with-matrices.md)

## Topics

### Matrix Properties

- [columns](simd_double4x2/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28________%29-6cze4.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28____%29-5xq2d.md): Returns a new matrix with the specified rows.

### Math Functions

- [simd_add](simd_add-6z107.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-7ngxq.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-4to50.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-9tjwx.md): Returns the product of a scalar value and a 4 x 2 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-9tg9k.md): Returns the product of a two-element vector and a 4 x 2 matrix.
- [matrix_multiply](matrix_multiply-6y1xx.md): Returns the product of a two-element vector and a 4 x 2 matrix.
- [simd_mul](simd_mul-9xo9x.md): Returns the product of a 4 x 2 matrix and a four-element vector.
- [matrix_multiply](matrix_multiply-9ly4k.md): Returns the product of a 4 x 2 matrix and a four-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-193a1.md): Returns the product of a 2 x 2 matrix and a 4 x 2 matrix.
- [matrix_multiply](matrix_multiply-7erm8.md): Returns the product of a 2 x 2 matrix and a 4 x 2 matrix.
- [simd_mul](simd_mul-2ijzp.md): Returns the product of a 3 x 2 matrix and a 4 x 3 matrix.
- [matrix_multiply](matrix_multiply-2dc11.md): Returns the product of a 3 x 2 matrix and a 4 x 3 matrix.
- [simd_mul](simd_mul-jjeg.md): Returns the product of a 4 x 2 matrix and a 4 x 4 matrix.
- [matrix_multiply](matrix_multiply-4um5g.md): Returns the product of a 4 x 2 matrix and a 4 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-6rpnx.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-3r4i6.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-7b8lm.md): Returns true if every element in a matrix is within a specified double-precision relative tolerance to the corresponding element in a second matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-9yjju.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-xobi.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_double4x2](matrix_double4x2.md): A type alias for a double-precision 4 x 2 matrix.

## See Also

### Matrix structures

- [simd_double2x2](simd_double2x2.md): A matrix of two columns and two rows that contains double-precision values.
- [simd_double2x3](simd_double2x3.md): A matrix of two columns and three rows that contains double-precision values.
- [simd_double2x4](simd_double2x4.md): A matrix of two columns and four rows that contains double-precision values.
- [simd_double3x2](simd_double3x2.md): A matrix of three columns and two rows that contains double-precision values.
- [simd_double3x3](simd_double3x3.md): A matrix of three columns and three rows that contains double-precision values.
- [simd_double3x4](simd_double3x4.md): A matrix of three columns and four rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.
