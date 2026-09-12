> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double4x4](https://developer.apple.com/documentation/simd/simd_double4x4)

# simd_double4x4 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of four columns and four rows that contains double-precision values.

## Declaration

```swift
struct simd_double4x4
```

## Topics

### Initializers

- [init()](simd_double4x4/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_double4x4/init%28__%29-184ad.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_double4x4/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_double4x4/init%28__%29-ahnn.md): Creates a new matrix with the specified columns.
- [init(\_:)](simd_double4x4/init%28__%29-43z8y.md): Creates a new matrix from the specified quaternion.
- [init(\_:)](simd_double4x4/init%28__%29-45usb.md): Creates a new matrix from the specified SceneKit matrix.
- [init(\_:)](simd_double4x4/init%28__%29-vm0p.md): Creates a new matrix from the specified SceneKit matrix.
- [init(\_:\_:\_:\_:)](simd_double4x4/init%28________%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_double4x4/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_double4x4/init%28rows_%29.md): Creates a new matrix with the specified rows.
- [init(\_:)](simd_double4x4/init%28__%29-1ara7.md): Returns a new 4 x 4 double-precision matrix from a Spatial affine transform.
- [init(\_:)](simd_double4x4/init%28__%29-818zf.md): Returns a new 4 x 4 double-precision matrix from a Spatial pose.
- [init(\_:)](simd_double4x4/init%28__%29-98553.md): Returns a new 4 x 4 double-precision matrix from a Spatial projective transform.

### Matrix Constants

- [matrix_identity_double4x4](matrix_identity_double4x4.md): A 4 x 4 identity matrix.

### Matrix Properties

- [determinant](simd_double4x4/determinant.md): The determinant of the matrix.
- [inverse](simd_double4x4/inverse.md): The inverse of the matrix.
- [transpose](simd_double4x4/transpose.md): The transpose of the matrix.
- [columns](simd_double4x4/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:\_:\_:)](simd_matrix%28________%29-28at0.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:\_:\_:)](simd_matrix_from_rows%28________%29-898tw.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:\_:\_:)](matrix_from_rows%28________%29-37t0w.md): Returns a new matrix with the specified rows.
- [simd_matrix4x4(\_:)](simd_matrix4x4%28__%29-20mdz.md): Returns a new matrix with the specified quarternion.

### Element Access

- [subscript(\_:)](simd_double4x4/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_double4x4/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [double4x4](double4x4.md): A type alias for a double-precision 4 x 4 matrix.
- [matrix_double4x4](matrix_double4x4.md): A type alias for a double-precision 4 x 4 matrix.

### Deprecated Symbols

- [matrix_invert(\_:)](matrix_invert%28__%29-84fxh.md): Deprecated. Returns the inverse of the specified matrix.
- [matrix_from_columns(\_:\_:\_:\_:)](matrix_from_columns%28________%29-61q4l.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_from_diagonal(\_:)](matrix_from_diagonal%28__%29-2r6tr.md): Deprecated. Returns a new matrix with the specified vector on the main diagonal.
- [matrix_determinant(\_:)](matrix_determinant%28__%29-2n34p.md): Deprecated. Returns the determinant of the specified matrix.
- [matrix_equal(\_:\_:)](matrix_equal%28____%29-3jmfe.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-66ecl.md): Deprecated. Returns the transpose of a matrix.
- [init(\_:)](simd_double4x4/init%28__%29-4fie3.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_double4x4/cmatrix.md): Deprecated. Creates a new matrix with the specified matrix.

### Operators

- [\*(\_:\_:)](simd_double4x4/_%28____%29-17puk.md)
- [\*(\_:\_:)](simd_double4x4/_%28____%29-2wqm8.md)
- [\*(\_:\_:)](simd_double4x4/_%28____%29-3jd3c.md)
- [\*(\_:\_:)](simd_double4x4/_%28____%29-5459y.md)
- [\*(\_:\_:)](simd_double4x4/_%28____%29-5i8yr.md)
- [\*(\_:\_:)](simd_double4x4/_%28____%29-7cb0c.md)
- [\*(\_:\_:)](simd_double4x4/_%28____%29-p402.md)
- [\*=(\_:\_:)](simd_double4x4/_=%28____%29-12w8l.md)
- [\*=(\_:\_:)](simd_double4x4/_=%28____%29-9llx.md)
- [+(\_:\_:)](simd_double4x4/+%28____%29.md)
- [+=(\_:\_:)](simd_double4x4/+=%28____%29.md)
- [-(\_:)](simd_double4x4/-%28__%29.md)
- [-(\_:\_:)](simd_double4x4/-%28____%29.md)
- [-=(\_:\_:)](simd_double4x4/-=%28____%29.md)

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
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.

# simd_double4x4 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of four columns and four rows that contains double-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_double4x4;
```

## Topics

### Matrix Constants

- [matrix_identity_double4x4](matrix_identity_double4x4.md): A 4 x 4 identity matrix.

### Matrix Properties

- [columns](simd_double4x4/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28________%29-28at0.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28________%29-898tw.md): Returns a new matrix with the specified rows.
- [simd_diagonal_matrix](simd_diagonal_matrix-2kzr8.md): Returns a new matrix with the specified vector on the main diagonal.
- [simd_matrix4x4](simd_matrix4x4%28__%29-20mdz.md): Returns a new matrix with the specified quarternion.

### Math Functions

- [simd_add](simd_add-1xlxx.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-7jlkw.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-4tq7w.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-9tjap.md): Returns the product of a scalar value and a 4 x 4 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-196yv.md): Returns the product of a four-element vector and a 4 x 4 matrix.
- [matrix_multiply](matrix_multiply-4oa35.md): Returns the product of a four-element vector and a 4 x 4 matrix.
- [simd_mul](simd_mul-8uzzq.md): Returns the product of a 4 x 4 matrix and a four-element vector.
- [matrix_multiply](matrix_multiply-15q9b.md): Returns the product of a 4 x 4 matrix and a four-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-tl8p.md): Returns the product of a 2 x 4 matrix and a 4 x 2 matrix.
- [matrix_multiply](matrix_multiply-1tn9l.md): Returns the product of a 2 x 4 matrix and a 4 x 2 matrix.
- [simd_mul](simd_mul-3whrl.md): Returns the product of a 3 x 4 matrix and a 4 x 3 matrix.
- [matrix_multiply](matrix_multiply-7esn4.md): Returns the product of a 3 x 4 matrix and a 4 x 3 matrix.
- [simd_mul](simd_mul-2qe27.md): Returns the product of a 4 x 4 matrix and a 4 x 4 matrix.
- [matrix_multiply](matrix_multiply-1f372.md): Returns the product of a 4 x 4 matrix and a 4 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-d0so.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-322rr.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-51nhs.md): Returns true if every element in a matrix is within a specified double-precision relative tolerance to the corresponding element in a second matrix.

### Determinant and Inverse Functions

- [simd_determinant](simd_determinant-9g8zm.md): Returns the determinant of the specified matrix.
- [simd_inverse](simd_inverse-9nllu.md): Returns the inverse of the specified matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-9sqyx.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-xovu.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_double4x4](matrix_double4x4.md): A type alias for a double-precision 4 x 4 matrix.

## See Also

### Matrix structures

- [simd_double2x2](simd_double2x2.md): A matrix of two columns and two rows that contains double-precision values.
- [simd_double2x3](simd_double2x3.md): A matrix of two columns and three rows that contains double-precision values.
- [simd_double2x4](simd_double2x4.md): A matrix of two columns and four rows that contains double-precision values.
- [simd_double3x2](simd_double3x2.md): A matrix of three columns and two rows that contains double-precision values.
- [simd_double3x3](simd_double3x3.md): A matrix of three columns and three rows that contains double-precision values.
- [simd_double3x4](simd_double3x4.md): A matrix of three columns and four rows that contains double-precision values.
- [simd_double4x2](simd_double4x2.md): A matrix of four columns and two rows that contains double-precision values.
- [simd_double4x3](simd_double4x3.md): A matrix of four columns and three rows that contains double-precision values.
