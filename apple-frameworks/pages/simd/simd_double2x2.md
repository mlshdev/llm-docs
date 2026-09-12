> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double2x2](https://developer.apple.com/documentation/simd/simd_double2x2)

# simd_double2x2 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of two columns and two rows that contains double-precision values.

## Declaration

```swift
struct simd_double2x2
```

## Topics

### Initializers

- [init()](simd_double2x2/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_double2x2/init%28__%29-3kbjz.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_double2x2/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_double2x2/init%28__%29-6yq0z.md): Creates a new matrix with the specified columns.
- [init(\_:\_:)](simd_double2x2/init%28____%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_double2x2/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_double2x2/init%28rows_%29.md): Creates a new matrix with the specified rows.

### Matrix Constants

- [matrix_identity_double2x2](matrix_identity_double2x2.md): A 2 x 2 identity matrix.

### Matrix Properties

- [determinant](simd_double2x2/determinant.md): The determinant of the matrix.
- [inverse](simd_double2x2/inverse.md): The inverse of the matrix.
- [transpose](simd_double2x2/transpose.md): The transpose of the matrix.
- [columns](simd_double2x2/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:)](simd_matrix%28____%29-938tb.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:)](simd_matrix_from_rows%28____%29-368td.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:)](matrix_from_rows%28____%29-1w56v.md): Returns a new matrix with the specified vector on the main diagonal.

### Element Access

- [subscript(\_:)](simd_double2x2/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_double2x2/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [double2x2](double2x2.md): A type alias for a double-precision 2 x 2 matrix.
- [matrix_double2x2](matrix_double2x2.md): A type alias for a double-precision 2 x 2 matrix.

### Deprecated Symbols

- [matrix_invert(\_:)](matrix_invert%28__%29-nkj5.md): Deprecated. Returns the inverse of the specified matrix.
- [matrix_equal(\_:\_:)](matrix_equal%28____%29-4claa.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_from_diagonal(\_:)](matrix_from_diagonal%28__%29-7i8pm.md): Deprecated. Returns a new matrix with the specified vector on the main diagonal.
- [matrix_determinant(\_:)](matrix_determinant%28__%29-7kglv.md): Deprecated. Returns the determinant of the specified matrix.
- [matrix_from_columns(\_:\_:)](matrix_from_columns%28____%29-37jug.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-6qaez.md): Deprecated. Returns the transpose of a matrix.
- [init(\_:)](simd_double2x2/init%28__%29-9vxjx.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_double2x2/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.

### Operators

- [\*(\_:\_:)](simd_double2x2/_%28____%29-34mwe.md)
- [\*(\_:\_:)](simd_double2x2/_%28____%29-4srge.md)
- [\*(\_:\_:)](simd_double2x2/_%28____%29-4x1rs.md)
- [\*(\_:\_:)](simd_double2x2/_%28____%29-6vah1.md)
- [\*(\_:\_:)](simd_double2x2/_%28____%29-86p1t.md)
- [\*(\_:\_:)](simd_double2x2/_%28____%29-mvy8.md)
- [\*(\_:\_:)](simd_double2x2/_%28____%29-xb7z.md)
- [\*=(\_:\_:)](simd_double2x2/_=%28____%29-76lel.md)
- [\*=(\_:\_:)](simd_double2x2/_=%28____%29-99yuu.md)
- [+(\_:\_:)](simd_double2x2/+%28____%29.md)
- [+=(\_:\_:)](simd_double2x2/+=%28____%29.md)
- [-(\_:)](simd_double2x2/-%28__%29.md)
- [-(\_:\_:)](simd_double2x2/-%28____%29.md)
- [-=(\_:\_:)](simd_double2x2/-=%28____%29.md)

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

- [simd_double2x3](simd_double2x3.md): A matrix of two columns and three rows that contains double-precision values.
- [simd_double2x4](simd_double2x4.md): A matrix of two columns and four rows that contains double-precision values.
- [simd_double3x2](simd_double3x2.md): A matrix of three columns and two rows that contains double-precision values.
- [simd_double3x3](simd_double3x3.md): A matrix of three columns and three rows that contains double-precision values.
- [simd_double3x4](simd_double3x4.md): A matrix of three columns and four rows that contains double-precision values.
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.

# simd_double2x2 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of two columns and two rows that contains double-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_double2x2;
```

## Topics

### Matrix Constants

- [matrix_identity_double2x2](matrix_identity_double2x2.md): A 2 x 2 identity matrix.

### Matrix Properties

- [columns](simd_double2x2/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28____%29-938tb.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28____%29-368td.md): Returns a new matrix with the specified rows.
- [simd_diagonal_matrix](simd_diagonal_matrix-2rc7a.md): Returns a new matrix with the specified vector on the main diagonal.

### Math Functions

- [simd_add](simd_add-64sxk.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-3z533.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-1fioe.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-7g1qo.md): Returns the product of a scalar value and a 2 x 2 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-6zaz0.md): Returns the product of a two-element vector and a 2 x 2 matrix.
- [matrix_multiply](matrix_multiply-21157.md): Returns the product of a two-element vector and a 2 x 2 matrix.
- [simd_mul](simd_mul-4rv7d.md): Returns the product of a 2 x 2 matrix and a two-element vector.
- [matrix_multiply](matrix_multiply-716q6.md): Returns the product of a 2 x 2 matrix and a two-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-6rjv0.md): Returns the product of a 2 x 2 matrix and a 2 x 2 matrix.
- [matrix_multiply](matrix_multiply-6qr69.md): Returns the product of a 2 x 2 matrix and a 2 x 2 matrix.
- [simd_mul](simd_mul-nya8.md): Returns the product of a 3 x 2 matrix and a 2 x 3 matrix.
- [matrix_multiply](matrix_multiply-57hdt.md): Returns the product of a 3 x 2 matrix and a 2 x 3 matrix.
- [simd_mul](simd_mul-85noy.md): Returns the product of a 4 x 2 matrix and a 2 x 4 matrix.
- [matrix_multiply](matrix_multiply-4k37n.md): Returns the product of a 4 x 2 matrix and a 2 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-deo2.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-9536l.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-1lba2.md): Returns true if every element in a matrix is within a specified double-precision relative tolerance to the corresponding element in a second matrix.

### Determinant and Inverse Functions

- [simd_determinant](simd_determinant-7mt9z.md): Returns the determinant of the specified matrix.
- [simd_inverse](simd_inverse-9d12d.md): Returns the inverse of the specified matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-1ycz5.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-848b9.md)

### Type Aliases

- [matrix_double2x2](matrix_double2x2.md): A type alias for a double-precision 2 x 2 matrix.

## See Also

### Matrix structures

- [simd_double2x3](simd_double2x3.md): A matrix of two columns and three rows that contains double-precision values.
- [simd_double2x4](simd_double2x4.md): A matrix of two columns and four rows that contains double-precision values.
- [simd_double3x2](simd_double3x2.md): A matrix of three columns and two rows that contains double-precision values.
- [simd_double3x3](simd_double3x3.md): A matrix of three columns and three rows that contains double-precision values.
- [simd_double3x4](simd_double3x4.md): A matrix of three columns and four rows that contains double-precision values.
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.
