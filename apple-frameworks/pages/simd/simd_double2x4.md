> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double2x4](https://developer.apple.com/documentation/simd/simd_double2x4)

# simd_double2x4 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of two columns and four rows that contains double-precision values.

## Declaration

```swift
struct simd_double2x4
```

## Topics

### Initializers

- [init()](simd_double2x4/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_double2x4/init%28__%29-71dee.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_double2x4/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_double2x4/init%28__%29-6lqav.md): Creates a new matrix from an array.
- [init(\_:\_:)](simd_double2x4/init%28____%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_double2x4/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_double2x4/init%28rows_%29.md): Creates a new matrix with the specified rows.

### Matrix Properties

- [transpose](simd_double2x4/transpose.md): The transpose of the matrix.
- [columns](simd_double2x4/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:)](simd_matrix%28____%29-7hafe.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:\_:\_:)](simd_matrix_from_rows%28________%29-851r7.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:\_:\_:)](matrix_from_rows%28________%29-897qw.md): Returns a new matrix with the specified rows.

### Element Access

- [subscript(\_:)](simd_double2x4/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_double2x4/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [double2x4](double2x4.md): A type alias for a double-precision 2 x 4 matrix.
- [matrix_double2x4](matrix_double2x4.md): A type alias for a double-precision 2 x 4 matrix.

### Deprecated Symbols

- [matrix_equal(\_:\_:)](matrix_equal%28____%29-1dcgx.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_from_columns(\_:\_:)](matrix_from_columns%28____%29-9q8xb.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-bpqg.md): Deprecated. Returns the transpose of a matrix.
- [init(\_:)](simd_double2x4/init%28__%29-6ssjo.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_double2x4/cmatrix.md): Deprecated. Creates a new matrix with the specified matrix.

### Operators

- [\*(\_:\_:)](simd_double2x4/_%28____%29-2rc47.md)
- [\*(\_:\_:)](simd_double2x4/_%28____%29-3croh.md)
- [\*(\_:\_:)](simd_double2x4/_%28____%29-4f5rx.md)
- [\*(\_:\_:)](simd_double2x4/_%28____%29-4iash.md)
- [\*(\_:\_:)](simd_double2x4/_%28____%29-59wcu.md)
- [\*(\_:\_:)](simd_double2x4/_%28____%29-8judh.md)
- [\*(\_:\_:)](simd_double2x4/_%28____%29-98679.md)
- [\*=(\_:\_:)](simd_double2x4/_=%28____%29-45oag.md)
- [\*=(\_:\_:)](simd_double2x4/_=%28____%29-57wbl.md)
- [+(\_:\_:)](simd_double2x4/+%28____%29.md)
- [+=(\_:\_:)](simd_double2x4/+=%28____%29.md)
- [-(\_:)](simd_double2x4/-%28__%29.md)
- [-(\_:\_:)](simd_double2x4/-%28____%29.md)
- [-=(\_:\_:)](simd_double2x4/-=%28____%29.md)

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
- [simd_double3x2](simd_double3x2.md): A matrix of three columns and two rows that contains double-precision values.
- [simd_double3x3](simd_double3x3.md): A matrix of three columns and three rows that contains double-precision values.
- [simd_double3x4](simd_double3x4.md): A matrix of three columns and four rows that contains double-precision values.
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.

# simd_double2x4 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of two columns and four rows that contains double-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_double2x4;
```

## Topics

### Matrix Properties

- [columns](simd_double2x4/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28____%29-7hafe.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28________%29-851r7.md): Returns a new matrix with the specified rows.

### Math Functions

- [simd_add](simd_add-1e1xc.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-75iiq.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-1fgte.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-7g2eo.md): Returns the product of a scalar value and a 2 x 4 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-43dfj.md): Returns the product of a four-element vector and a 2 x 4 matrix.
- [matrix_multiply](matrix_multiply-4dr8s.md): Returns the product of a four-element vector and a 2 x 4 matrix.
- [simd_mul](simd_mul-6ub7w.md): Returns the product of a 2 x 4 matrix and a two-element vector.
- [matrix_multiply](matrix_multiply-7vmen.md): Returns the product of a 2 x 4 matrix and a two-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-3mmg5.md): Returns the product of a 2 x 4 matrix and a 2 x 2 matrix.
- [matrix_multiply](matrix_multiply-1k4mc.md): Returns the product of a 2 x 4 matrix and a 2 x 2 matrix.
- [simd_mul](simd_mul-6qmy5.md): Returns the product of a 3 x 4 matrix and a 2 x 3 matrix.
- [matrix_multiply](matrix_multiply-tcz1.md): Returns the product of a 3 x 4 matrix and a 2 x 3 matrix.
- [simd_mul](simd_mul-63k1v.md): Returns the product of a 4 x 4 matrix and a 2 x 4 matrix.
- [matrix_multiply](matrix_multiply-30ogt.md): Returns the product of a 4 x 4 matrix and a 2 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-3xz83.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-59py1.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-8187e.md): Returns true if every element in a matrix is within a specified double-precision relative tolerance to the corresponding element in a second matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-gtsr.md)

### Transpose Function

- [simd_transpose](simd_transpose-847r1.md)

### Type Aliases

- [matrix_double2x4](matrix_double2x4.md): A type alias for a double-precision 2 x 4 matrix.

## See Also

### Matrix structures

- [simd_double2x2](simd_double2x2.md): A matrix of two columns and two rows that contains double-precision values.
- [simd_double2x3](simd_double2x3.md): A matrix of two columns and three rows that contains double-precision values.
- [simd_double3x2](simd_double3x2.md): A matrix of three columns and two rows that contains double-precision values.
- [simd_double3x3](simd_double3x3.md): A matrix of three columns and three rows that contains double-precision values.
- [simd_double3x4](simd_double3x4.md): A matrix of three columns and four rows that contains double-precision values.
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
- [simd_double4x4](simd_double4x4.md): A matrix of four columns and four rows that contains double-precision values.
