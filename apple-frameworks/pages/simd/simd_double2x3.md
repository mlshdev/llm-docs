> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double2x3](https://developer.apple.com/documentation/simd/simd_double2x3)

# simd_double2x3 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of two columns and three rows that contains double-precision values.

## Declaration

```swift
struct simd_double2x3
```

## Topics

### Initializers

- [init()](simd_double2x3/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_double2x3/init%28__%29-6xclm.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_double2x3/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_double2x3/init%28__%29-6n7k.md): Creates a new matrix from an array.
- [init(\_:\_:)](simd_double2x3/init%28____%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_double2x3/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_double2x3/init%28rows_%29.md): Creates a new matrix with the specified rows.

### Matrix Properties

- [transpose](simd_double2x3/transpose.md): The transpose of the matrix.
- [columns](simd_double2x3/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:)](simd_matrix%28____%29-86soe.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:\_:)](simd_matrix_from_rows%28______%29-96jbn.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:\_:)](matrix_from_rows%28______%29-2ar1l.md): Returns a new matrix with the specified rows.

### Element Access

- [subscript(\_:)](simd_double2x3/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_double2x3/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [double2x3](double2x3.md): A type alias for a double-precision 2 x 3 matrix.
- [matrix_double2x3](matrix_double2x3.md): A type alias for a double-precision 2 x 3 matrix.

### Deprecated Symbols

- [matrix_equal(\_:\_:)](matrix_equal%28____%29-52vds.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_from_columns(\_:\_:)](matrix_from_columns%28____%29-61w2n.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-97k0o.md): Deprecated. Returns the transpose of a matrix.
- [init(\_:)](simd_double2x3/init%28__%29-98rcw.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_double2x3/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.

### Operators

- [\*(\_:\_:)](simd_double2x3/_%28____%29-26bpe.md)
- [\*(\_:\_:)](simd_double2x3/_%28____%29-2qo9o.md)
- [\*(\_:\_:)](simd_double2x3/_%28____%29-3li3r.md)
- [\*(\_:\_:)](simd_double2x3/_%28____%29-4bwlw.md)
- [\*(\_:\_:)](simd_double2x3/_%28____%29-559m0.md)
- [\*(\_:\_:)](simd_double2x3/_%28____%29-8rxeu.md)
- [\*(\_:\_:)](simd_double2x3/_%28____%29-919bm.md)
- [\*=(\_:\_:)](simd_double2x3/_=%28____%29-3lbnh.md)
- [\*=(\_:\_:)](simd_double2x3/_=%28____%29-9b91z.md)
- [+(\_:\_:)](simd_double2x3/+%28____%29.md)
- [+=(\_:\_:)](simd_double2x3/+=%28____%29.md)
- [-(\_:)](simd_double2x3/-%28__%29.md)
- [-(\_:\_:)](simd_double2x3/-%28____%29.md)
- [-=(\_:\_:)](simd_double2x3/-=%28____%29.md)

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
- [simd_double2x4](simd_double2x4.md): A matrix of two columns and four rows that contains double-precision values.
- [simd_double3x2](simd_double3x2.md): A matrix of three columns and two rows that contains double-precision values.
- [simd_double3x3](simd_double3x3.md): A matrix of three columns and three rows that contains double-precision values.
- [simd_double3x4](simd_double3x4.md): A matrix of three columns and four rows that contains double-precision values.
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.

# simd_double2x3 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of two columns and three rows that contains double-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_double2x3;
```

## Topics

### Matrix Properties

- [columns](simd_double2x3/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28____%29-86soe.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28______%29-96jbn.md): Returns a new matrix with the specified rows.

### Math Functions

- [simd_add](simd_add-1zc96.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-6k8aw.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-1fidi.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-7g1h8.md): Returns the product of a scalar value and a 2 x 3 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-4s2hh.md): Returns the product of a three-element vector and a 2 x 3 matrix.
- [matrix_multiply](matrix_multiply-545xs.md): Returns the product of a three-element vector and a 2 x 3 matrix.
- [simd_mul](simd_mul-4r4ek.md): Returns the product of a 2 x 3 matrix and a two-element vector.
- [matrix_multiply](matrix_multiply-2of7c.md): Returns the product of a 2 x 3 matrix and a two-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-194di.md): Returns the product of a 2 x 3 matrix and a 2 x 2 matrix.
- [matrix_multiply](matrix_multiply-5myx3.md): Returns the product of a 2 x 3 matrix and a 2 x 2 matrix.
- [simd_mul](simd_mul-4ymsr.md): Returns the product of a 3 x 3 matrix and a 2 x 3 matrix.
- [matrix_multiply](matrix_multiply-1lfzx.md): Returns the product of a 3 x 3 matrix and a 2 x 3 matrix.
- [simd_mul](simd_mul-7yr3s.md): Returns the product of a 4 x 3 matrix and a 2 x 4 matrix.
- [matrix_multiply](matrix_multiply-2uqmb.md): Returns the product of a 4 x 3 matrix and a 2 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-9ko75.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-crvf.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-2gmox.md): Returns true if every element in a matrix is within a specified double-precision relative tolerance to the corresponding element in a second matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-9taxv.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-84813.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_double2x3](matrix_double2x3.md): A type alias for a double-precision 2 x 3 matrix.

## See Also

### Matrix structures

- [simd_double2x2](simd_double2x2.md): A matrix of two columns and two rows that contains double-precision values.
- [simd_double2x4](simd_double2x4.md): A matrix of two columns and four rows that contains double-precision values.
- [simd_double3x2](simd_double3x2.md): A matrix of three columns and two rows that contains double-precision values.
- [simd_double3x3](simd_double3x3.md): A matrix of three columns and three rows that contains double-precision values.
- [simd_double3x4](simd_double3x4.md): A matrix of three columns and four rows that contains double-precision values.
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.
