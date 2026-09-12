> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double3x3](https://developer.apple.com/documentation/simd/simd_double3x3)

# simd_double3x3 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of three columns and three rows that contains double-precision values.

## Declaration

```swift
struct simd_double3x3
```

## Topics

### Initializers

- [init()](simd_double3x3/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_double3x3/init%28__%29-6qq5k.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_double3x3/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_double3x3/init%28__%29-6kw2p.md): Creates a new matrix with the specified columns.
- [init(\_:)](simd_double3x3/init%28__%29-9wyb6.md): Creates a new matrix from the specified quarternion.
- [init(\_:\_:\_:)](simd_double3x3/init%28______%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_double3x3/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_double3x3/init%28rows_%29.md): Creates a new matrix with the specified rows.

### Matrix Constants

- [matrix_identity_double3x3](matrix_identity_double3x3.md): A 3 x 3 identity matrix.

### Matrix Properties

- [determinant](simd_double3x3/determinant.md): The determinant of the matrix.
- [inverse](simd_double3x3/inverse.md): The inverse of the matrix.
- [transpose](simd_double3x3/transpose.md): The transpose of the matrix.
- [columns](simd_double3x3/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:\_:)](simd_matrix%28______%29-5h0nl.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:\_:)](simd_matrix_from_rows%28______%29-48v9h.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:\_:)](matrix_from_rows%28______%29-7a60t.md): Returns a new matrix with the specified rows.
- [simd_matrix3x3(\_:)](simd_matrix3x3%28__%29-60dhx.md): Returns a new matrix with the specified quarternion.

### Element Access

- [subscript(\_:)](simd_double3x3/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_double3x3/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [double3x3](double3x3.md): A type alias for a double-precision 3 x 3 matrix.
- [matrix_double3x3](matrix_double3x3.md): A type alias for a double-precision 3 x 3 matrix.

### Deprecated Symbols

- [matrix_invert(\_:)](matrix_invert%28__%29-2lv98.md): Deprecated. Returns the inverse of the specified matrix.
- [matrix_from_columns(\_:\_:\_:)](matrix_from_columns%28______%29-4bc62.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_from_diagonal(\_:)](matrix_from_diagonal%28__%29-3jtgg.md): Deprecated. Returns a new matrix with the specified vector on the main diagonal.
- [matrix_determinant(\_:)](matrix_determinant%28__%29-4bxkm.md): Deprecated. Returns the determinant of the specified matrix.
- [matrix_equal(\_:\_:)](matrix_equal%28____%29-9tdua.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-3ectl.md): Deprecated. Returns the transpose of a matrix.
- [init(\_:)](simd_double3x3/init%28__%29-2o4jh.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_double3x3/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.

### Operators

- [\*(\_:\_:)](simd_double3x3/_%28____%29-11ff2.md)
- [\*(\_:\_:)](simd_double3x3/_%28____%29-23oic.md)
- [\*(\_:\_:)](simd_double3x3/_%28____%29-2hizn.md)
- [\*(\_:\_:)](simd_double3x3/_%28____%29-2oy7n.md)
- [\*(\_:\_:)](simd_double3x3/_%28____%29-2yrlv.md)
- [\*(\_:\_:)](simd_double3x3/_%28____%29-38zoj.md)
- [\*(\_:\_:)](simd_double3x3/_%28____%29-8r8se.md)
- [\*=(\_:\_:)](simd_double3x3/_=%28____%29-4dl51.md)
- [\*=(\_:\_:)](simd_double3x3/_=%28____%29-7vz3h.md)
- [+(\_:\_:)](simd_double3x3/+%28____%29.md)
- [+=(\_:\_:)](simd_double3x3/+=%28____%29.md)
- [-(\_:)](simd_double3x3/-%28__%29.md)
- [-(\_:\_:)](simd_double3x3/-%28____%29.md)
- [-=(\_:\_:)](simd_double3x3/-=%28____%29.md)

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
- [simd_double3x4](simd_double3x4.md): A matrix of three columns and four rows that contains double-precision values.
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.

# simd_double3x3 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of three columns and three rows that contains double-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_double3x3;
```

## Topics

### Matrix Constants

- [matrix_identity_double3x3](matrix_identity_double3x3.md): A 3 x 3 identity matrix.

### Matrix Properties

- [columns](simd_double3x3/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28______%29-5h0nl.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28______%29-48v9h.md): Returns a new matrix with the specified rows.
- [simd_diagonal_matrix](simd_diagonal_matrix-2nuo5.md): Returns a new matrix with the specified vector on the main diagonal.
- [simd_matrix3x3](simd_matrix3x3%28__%29-60dhx.md): Returns a new matrix with the specified quarternion.

### Math Functions

- [simd_add](simd_add-3e048.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-1bye8.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-5igd0.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-6r1mg.md): Returns the product of a scalar value and a 3 x 3 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-8vafd.md): Returns the product of a three-element vector and a 3 x 3 matrix.
- [matrix_multiply](matrix_multiply-rhpr.md): Returns the product of a three-element vector and a 3 x 3 matrix.
- [simd_mul](simd_mul-ulvl.md): Returns the product of a 3 x 2 matrix and a three-element vector.
- [matrix_multiply](matrix_multiply-5o7k9.md): Returns the product of a 3 x 3 matrix and a three-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-6war0.md): Returns the product of a 2 x 3 matrix and a 3 x 2 matrix.
- [matrix_multiply](matrix_multiply-9q6cz.md): Returns the product of a 2 x 3 matrix and a 3 x 2 matrix.
- [simd_mul](simd_mul-4t2wx.md): Returns the product of a 3 x 3 matrix and a 3 x 3 matrix.
- [matrix_multiply](matrix_multiply-7h3v.md): Returns the product of a 3 x 3 matrix and a 3 x 3 matrix.
- [simd_mul](simd_mul-7a0d0.md): Returns the product of a 4 x 3 matrix and a 3 x 4 matrix.
- [matrix_multiply](matrix_multiply-8gt1r.md): Returns the product of a 4 x 3 matrix and a 3 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-77o8z.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-590ch.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-1gaj5.md): Returns true if every element in a matrix is within a specified double-precision relative tolerance to the corresponding element in a second matrix.

### Determinant and Inverse Functions

- [simd_determinant](simd_determinant-3a4ma.md): Returns the determinant of the specified matrix.
- [simd_inverse](simd_inverse-3q4en.md): Returns the inverse of the specified matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-4hhnj.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-26qy0.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_double3x3](matrix_double3x3.md): A type alias for a double-precision 3 x 3 matrix.

## See Also

### Matrix structures

- [simd_double2x2](simd_double2x2.md): A matrix of two columns and two rows that contains double-precision values.
- [simd_double2x3](simd_double2x3.md): A matrix of two columns and three rows that contains double-precision values.
- [simd_double2x4](simd_double2x4.md): A matrix of two columns and four rows that contains double-precision values.
- [simd_double3x2](simd_double3x2.md): A matrix of three columns and two rows that contains double-precision values.
- [simd_double3x4](simd_double3x4.md): A matrix of three columns and four rows that contains double-precision values.
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.
