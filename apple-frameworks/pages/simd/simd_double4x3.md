> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double4x3](https://developer.apple.com/documentation/simd/simd_double4x3)

# simd_double4x3 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of four columns and three rows that contains double-precision values.

## Declaration

```swift
struct simd_double4x3
```

## Topics

### Initializers

- [init()](simd_double4x3/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_double4x3/init%28__%29-lh76.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_double4x3/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_double4x3/init%28__%29-24exh.md): Creates a new matrix from an array.
- [init(\_:\_:\_:\_:)](simd_double4x3/init%28________%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_double4x3/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_double4x3/init%28rows_%29.md): Creates a new matrix with the specified rows.
- [init(\_:)](simd_double4x3/init%28__%29-8t58y.md): Returns a new matrix from a Spatial affine transform.

### Matrix Properties

- [transpose](simd_double4x3/transpose.md): The transpose of the matrix.
- [columns](simd_double4x3/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:\_:\_:)](simd_matrix%28________%29-4swfv.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:\_:)](simd_matrix_from_rows%28______%29-6525o.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:\_:)](matrix_from_rows%28______%29-19j6n.md): Returns a new matrix with the specified rows.

### Element Access

- [subscript(\_:)](simd_double4x3/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_double4x3/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [double4x3](double4x3.md): A type alias for a double-precision 4 x 3 matrix.
- [matrix_double4x3](matrix_double4x3.md): A type alias for a double-precision 4 x 3 matrix.

### Deprecated Symbols

- [matrix_from_columns(\_:\_:\_:\_:)](matrix_from_columns%28________%29-7g6mu.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_equal(\_:\_:)](matrix_equal%28____%29-1x3ox.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-23ibz.md): Deprecated. Returns the transpose of a matrix.
- [init(\_:)](simd_double4x3/init%28__%29-30jps.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_double4x3/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.

### Operators

- [\*(\_:\_:)](simd_double4x3/_%28____%29-13lud.md)
- [\*(\_:\_:)](simd_double4x3/_%28____%29-3vmls.md)
- [\*(\_:\_:)](simd_double4x3/_%28____%29-4q5li.md)
- [\*(\_:\_:)](simd_double4x3/_%28____%29-61nnq.md)
- [\*(\_:\_:)](simd_double4x3/_%28____%29-6sw55.md)
- [\*(\_:\_:)](simd_double4x3/_%28____%29-7362q.md)
- [\*(\_:\_:)](simd_double4x3/_%28____%29-8ugfy.md)
- [\*=(\_:\_:)](simd_double4x3/_=%28____%29-2x6ni.md)
- [\*=(\_:\_:)](simd_double4x3/_=%28____%29-4o6cd.md)
- [+(\_:\_:)](simd_double4x3/+%28____%29.md)
- [+=(\_:\_:)](simd_double4x3/+=%28____%29.md)
- [-(\_:)](simd_double4x3/-%28__%29.md)
- [-(\_:\_:)](simd_double4x3/-%28____%29.md)
- [-=(\_:\_:)](simd_double4x3/-=%28____%29.md)

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
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.

# simd_double4x3 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of four columns and three rows that contains double-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_double4x3;
```

## Topics

### Matrix Properties

- [columns](simd_double4x3/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28________%29-4swfv.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28______%29-6525o.md): Returns a new matrix with the specified rows.

### Math Functions

- [simd_add](simd_add-5827c.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-7r2k2.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-4to0w.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-9tjlv.md): Returns the product of a scalar value and a 4 x 3 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-2ykj4.md): Returns the product of a three-element vector and a 4 x 3 matrix.
- [matrix_multiply](matrix_multiply-1q0om.md): Returns the product of a three-element vector and a 4 x 3 matrix.
- [simd_mul](simd_mul-24gts.md): Returns the product of a 4 x 3 matrix and a four-element vector.
- [matrix_multiply](matrix_multiply-4obd4.md): Returns the product of a 4 x 3 matrix and a four-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-33ps1.md): Returns the product of a 2 x 3 matrix and a 4 x 2 matrix.
- [matrix_multiply](matrix_multiply-2txdr.md): Returns the product of a 2 x 3 matrix and a 4 x 2 matrix.
- [simd_mul](simd_mul-1ly1.md): Returns the product of a 3 x 3 matrix and a 4 x 3 matrix.
- [matrix_multiply](matrix_multiply-8s05c.md): Returns the product of a 3 x 3 matrix and a 4 x 3 matrix.
- [simd_mul](simd_mul-cmf2.md): Returns the product of a 4 x 3 matrix and a 4 x 4 matrix.
- [matrix_multiply](matrix_multiply-9g2os.md): Returns the product of a 4 x 3 matrix and a 4 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-9yy3z.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-1d74k.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-39069.md): Returns true if every element in a matrix is within a specified double-precision relative tolerance to the corresponding element in a second matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-7zah2.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-xo7a.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_double4x3](matrix_double4x3.md): A type alias for a double-precision 4 x 3 matrix.

## See Also

### Matrix structures

- [simd_double2x2](simd_double2x2.md): A matrix of two columns and two rows that contains double-precision values.
- [simd_double2x3](simd_double2x3.md): A matrix of two columns and three rows that contains double-precision values.
- [simd_double2x4](simd_double2x4.md): A matrix of two columns and four rows that contains double-precision values.
- [simd_double3x2](simd_double3x2.md): A matrix of three columns and two rows that contains double-precision values.
- [simd_double3x3](simd_double3x3.md): A matrix of three columns and three rows that contains double-precision values.
- [simd_double3x4](simd_double3x4.md): A matrix of three columns and four rows that contains double-precision values.
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.
