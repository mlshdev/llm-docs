> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double3x4](https://developer.apple.com/documentation/simd/simd_double3x4)

# simd_double3x4 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of three columns and four rows that contains double-precision values.

## Declaration

```swift
struct simd_double3x4
```

## Topics

### Initializers

- [init()](simd_double3x4/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_double3x4/init%28__%29-11lc1.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_double3x4/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_double3x4/init%28__%29-74wu4.md): Creates a new matrix from an array.
- [init(\_:\_:\_:)](simd_double3x4/init%28______%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_double3x4/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_double3x4/init%28rows_%29.md): Creates a new matrix with the specified rows.

### Matrix Properties

- [transpose](simd_double3x4/transpose.md): The transpose of the matrix.
- [columns](simd_double3x4/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:\_:)](simd_matrix%28______%29-4o4n5.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:\_:\_:)](simd_matrix_from_rows%28________%29-7j052.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:\_:\_:)](matrix_from_rows%28________%29-69xld.md): Returns a new matrix with the specified rows.

### Element Access

- [subscript(\_:)](simd_double3x4/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_double3x4/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [double3x4](double3x4.md): A type alias for a double-precision 3 x 4 matrix.
- [matrix_double3x4](matrix_double3x4.md): A type alias for a double-precision 3 x 4 matrix.

### Deprecated Symbols

- [matrix_equal(\_:\_:)](matrix_equal%28____%29-4qog1.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_from_columns(\_:\_:\_:)](matrix_from_columns%28______%29-4no1k.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-8am0o.md): Deprecated. Returns the transpose of a matrix.
- [init(\_:)](simd_double3x4/init%28__%29-2qvpe.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_double3x4/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.

### Operators

- [\*(\_:\_:)](simd_double3x4/_%28____%29-15q5b.md)
- [\*(\_:\_:)](simd_double3x4/_%28____%29-2qxoj.md)
- [\*(\_:\_:)](simd_double3x4/_%28____%29-3xyct.md)
- [\*(\_:\_:)](simd_double3x4/_%28____%29-4g9jd.md)
- [\*(\_:\_:)](simd_double3x4/_%28____%29-4qzww.md)
- [\*(\_:\_:)](simd_double3x4/_%28____%29-6qa2j.md)
- [\*(\_:\_:)](simd_double3x4/_%28____%29-962p4.md)
- [\*=(\_:\_:)](simd_double3x4/_=%28____%29-62fjm.md)
- [\*=(\_:\_:)](simd_double3x4/_=%28____%29-sjb5.md)
- [+(\_:\_:)](simd_double3x4/+%28____%29.md)
- [+=(\_:\_:)](simd_double3x4/+=%28____%29.md)
- [-(\_:)](simd_double3x4/-%28__%29.md)
- [-(\_:\_:)](simd_double3x4/-%28____%29.md)
- [-=(\_:\_:)](simd_double3x4/-=%28____%29.md)

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
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.

# simd_double3x4 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of three columns and four rows that contains double-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_double3x4;
```

## Topics

### Matrix Properties

- [columns](simd_double3x4/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28______%29-4o4n5.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28________%29-7j052.md): Returns a new matrix with the specified rows.

### Equality Functions

- [simd_equal](simd_equal-4m10u.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-h72t.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-9q7od.md): Returns true if every element in a matrix is within a specified double-precision relative tolerance to the corresponding element in a second matrix.

### Math Functions

- [simd_add](simd_add-53ag9.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-6yn8w.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-5ie6g.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-6r1po.md): Returns the product of a scalar value and a 3 x 4 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-5zv.md): Returns the product of a four-element vector and a 3 x 4 matrix.
- [matrix_multiply](matrix_multiply-8rk6t.md): Returns the product of a four-element vector and a 3 x 4 matrix.
- [simd_mul](simd_mul-3kj8k.md): Returns the product of a 3 x 4 matrix and a three-element vector.
- [matrix_multiply](matrix_multiply-f05e.md): Returns the product of a 3 x 4 matrix and a three-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-9jaek.md): Returns the product of a 2 x 4 matrix and a 3 x 2 matrix.
- [matrix_multiply](matrix_multiply-5wjn1.md): Returns the product of a 2 x 4 matrix and a 3 x 2 matrix.
- [simd_mul](simd_mul-tzji.md): Returns the product of a 3 x 4 matrix and a 3 x 3 matrix.
- [matrix_multiply](matrix_multiply-6ga2h.md): Returns the product of a 3 x 4 matrix and a 3 x 3 matrix.
- [simd_mul](simd_mul-hhfz.md): Returns the product of a 4 x 4 matrix and a 3 x 4 matrix.
- [matrix_multiply](matrix_multiply-8xc78.md): Returns the product of a 4 x 4 matrix and a 3 x 4 matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-2oumb.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-26pwk.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_double3x4](matrix_double3x4.md): A type alias for a double-precision 3 x 4 matrix.

## See Also

### Matrix structures

- [simd_double2x2](simd_double2x2.md): A matrix of two columns and two rows that contains double-precision values.
- [simd_double2x3](simd_double2x3.md): A matrix of two columns and three rows that contains double-precision values.
- [simd_double2x4](simd_double2x4.md): A matrix of two columns and four rows that contains double-precision values.
- [simd_double3x2](simd_double3x2.md): A matrix of three columns and two rows that contains double-precision values.
- [simd_double3x3](simd_double3x3.md): A matrix of three columns and three rows that contains double-precision values.
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.
