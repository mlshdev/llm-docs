> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double3x2](https://developer.apple.com/documentation/simd/simd_double3x2)

# simd_double3x2 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of three columns and two rows that contains double-precision values.

## Declaration

```swift
struct simd_double3x2
```

## Topics

### Initializers

- [init()](simd_double3x2/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_double3x2/init%28__%29-6r1mr.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_double3x2/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_double3x2/init%28__%29-9euf0.md): Creates a new matrix from an array.
- [init(\_:\_:\_:)](simd_double3x2/init%28______%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_double3x2/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_double3x2/init%28rows_%29.md): Creates a new matrix with the specified rows.

### Matrix Properties

- [transpose](simd_double3x2/transpose.md): The transpose of the matrix.
- [columns](simd_double3x2/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:\_:)](simd_matrix%28______%29-59y1c.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:)](simd_matrix_from_rows%28____%29-7mxf9.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:)](matrix_from_rows%28____%29-630eh.md): Returns a new matrix with the specified rows.

### Element Access

- [subscript(\_:)](simd_double3x2/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_double3x2/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [double3x2](double3x2.md): A type alias for a double-precision 3 x 2 matrix.
- [matrix_double3x2](matrix_double3x2.md): A type alias for a double-precision 3 x 2 matrix.

### Deprecated Symbols

- [matrix_equal(\_:\_:)](matrix_equal%28____%29-3dnu.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_from_columns(\_:\_:\_:)](matrix_from_columns%28______%29-9wapk.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-7ueg2.md): Deprecated. Returns the transpose of a matrix.
- [init(\_:)](simd_double3x2/init%28__%29-6yyfq.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_double3x2/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.

### Operators

- [\*(\_:\_:)](simd_double3x2/_%28____%29-1hwgh.md)
- [\*(\_:\_:)](simd_double3x2/_%28____%29-1i31n.md)
- [\*(\_:\_:)](simd_double3x2/_%28____%29-205gc.md)
- [\*(\_:\_:)](simd_double3x2/_%28____%29-55cki.md)
- [\*(\_:\_:)](simd_double3x2/_%28____%29-71omv.md)
- [\*(\_:\_:)](simd_double3x2/_%28____%29-8b0gm.md)
- [\*(\_:\_:)](simd_double3x2/_%28____%29-8sxw1.md)
- [\*=(\_:\_:)](simd_double3x2/_=%28____%29-65soi.md)
- [\*=(\_:\_:)](simd_double3x2/_=%28____%29-7jk10.md)
- [+(\_:\_:)](simd_double3x2/+%28____%29.md)
- [+=(\_:\_:)](simd_double3x2/+=%28____%29.md)
- [-(\_:)](simd_double3x2/-%28__%29.md)
- [-(\_:\_:)](simd_double3x2/-%28____%29.md)
- [-=(\_:\_:)](simd_double3x2/-=%28____%29.md)

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
- [simd_double3x3](simd_double3x3.md): A matrix of three columns and three rows that contains double-precision values.
- [simd_double3x4](simd_double3x4.md): A matrix of three columns and four rows that contains double-precision values.
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.

# simd_double3x2 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of three columns and two rows that contains double-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_double3x2;
```

## Topics

### Matrix Properties

- [columns](simd_double3x2/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28______%29-59y1c.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28____%29-7mxf9.md): Returns a new matrix with the specified rows.

### Math Functions

- [simd_add](simd_add-8lzgz.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-8ubio.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-5ifxc.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-6r11g.md): Returns the product of a scalar value and a 3 x 2 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-2w3l2.md): Returns the product of a two-element vector and a 3 x 2 matrix.
- [matrix_multiply](matrix_multiply-7xp5y.md): Returns the product of a two-element vector and a 3 x 2 matrix.
- [simd_mul](simd_mul-dc59.md): Returns the product of a 3 x 2 matrix and a three-element vector.
- [matrix_multiply](matrix_multiply-47zcl.md): Returns the product of a 3 x 2 matrix and a three-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-5bzdp.md): Returns the product of a 2 x 2 matrix and a 3 x 2 matrix.
- [matrix_multiply](matrix_multiply-65zgq.md): Returns the product of a 2 x 2 matrix and a 3 x 2 matrix.
- [simd_mul](simd_mul-1ixcc.md): Returns the product of a 3 x 2 matrix and a 3 x 3 matrix.
- [matrix_multiply](matrix_multiply-9afd1.md): Returns the product of a 3 x 2 matrix and a 3 x 3 matrix.
- [simd_mul](simd_mul-42qfc.md): Returns the product of a 4 x 2 matrix and a 3 x 4 matrix.
- [matrix_multiply](matrix_multiply-8xm6m.md): Returns the product of a 4 x 2 matrix and a 3 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-49bi6.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-19451.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-7rdht.md): Returns true if every element in a matrix is within a specified double-precision relative tolerance to the corresponding element in a second matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-70pcs.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-26qnw.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_double3x2](matrix_double3x2.md): A type alias for a double-precision 3 x 2 matrix.

## See Also

### Matrix structures

- [simd_double2x2](simd_double2x2.md): A matrix of two columns and two rows that contains double-precision values.
- [simd_double2x3](simd_double2x3.md): A matrix of two columns and three rows that contains double-precision values.
- [simd_double2x4](simd_double2x4.md): A matrix of two columns and four rows that contains double-precision values.
- [simd_double3x3](simd_double3x3.md): A matrix of three columns and three rows that contains double-precision values.
- [simd_double3x4](simd_double3x4.md): A matrix of three columns and four rows that contains double-precision values.
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.
