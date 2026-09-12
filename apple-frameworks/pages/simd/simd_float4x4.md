> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_float4x4](https://developer.apple.com/documentation/simd/simd_float4x4)

# simd_float4x4 (Swift)

**Framework:** simd  
**Kind:** Structure

A matrix of four columns and four rows that contains single-precision values.

## Declaration

```swift
struct simd_float4x4
```

## Topics

### Initializers

- [init()](simd_float4x4/init%28%29.md): Creates a new matrix with uninitialized memory.
- [init(\_:)](simd_float4x4/init%28__%29-6pc85.md): Creates a new matrix with the specified scalar value on the main diagonal.
- [init(diagonal:)](simd_float4x4/init%28diagonal_%29.md): Creates a new matrix with the specified vector on the main diagonal.
- [init(\_:)](simd_float4x4/init%28__%29-50sjs.md): Creates a new matrix with the specified columns.
- [init(\_:)](simd_float4x4/init%28__%29-7ig5g.md): Creates a new matrix from the specified quaternion.
- [init(\_:)](simd_float4x4/init%28__%29-4jrbw.md): Creates a new matrix from the specified SceneKit matrix.
- [init(\_:)](simd_float4x4/init%28__%29-q9z6.md): Creates a new matrix from the specified SceneKit matrix.
- [init(\_:\_:\_:\_:)](simd_float4x4/init%28________%29.md): Creates a new matrix with the specified vectors as columns.
- [init(columns:)](simd_float4x4/init%28columns_%29.md): Creates a new matrix with the specified columns.
- [init(rows:)](simd_float4x4/init%28rows_%29.md): Creates a new matrix with the specified rows.
- [init(\_:)](simd_float4x4/init%28__%29-3op4b.md)
- [init(\_:)](simd_float4x4/init%28__%29-9txnb.md)
- [init(\_:)](simd_float4x4/init%28__%29-77vxr.md)
- [init(affineTransform:)](simd_float4x4/init%28affinetransform_%29.md): Deprecated.
- [init(pose:)](simd_float4x4/init%28pose_%29.md): Deprecated.
- [init(projectiveTransform:)](simd_float4x4/init%28projectivetransform_%29.md): Deprecated.

### Matrix Constants

- [matrix_identity_float4x4](matrix_identity_float4x4.md): A 4 x 4 identity matrix.

### Matrix Properties

- [determinant](simd_float4x4/determinant.md): The determinant of the matrix.
- [inverse](simd_float4x4/inverse.md): The inverse of the matrix.
- [transpose](simd_float4x4/transpose.md): The transpose of the matrix.
- [columns](simd_float4x4/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix(\_:\_:\_:\_:)](simd_matrix%28________%29-4p5ox.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows(\_:\_:\_:\_:)](simd_matrix_from_rows%28________%29-34hac.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:\_:\_:)](matrix_from_rows%28________%29-18jb3.md): Returns a new matrix with the specified rows.
- [simd_matrix4x4(\_:)](simd_matrix4x4%28__%29-20lv7.md): Returns a new matrix with the specified quarternion.

### Element Access

- [subscript(\_:)](simd_float4x4/subscript%28__%29.md): Accesses the column at the specified position.
- [subscript(\_:\_:)](simd_float4x4/subscript%28____%29.md): Accesses the element at the specified position.

### Type Aliases

- [float4x4](float4x4.md): A type alias for a single-precision 4 x 4 matrix.
- [matrix_float4x4](matrix_float4x4.md): A type alias for a single-precision 4 x 4 matrix.

### Deprecated Symbols

- [matrix_invert(\_:)](matrix_invert%28__%29-7fevy.md): Deprecated. Returns the inverse of the specified matrix.
- [matrix_from_diagonal(\_:)](matrix_from_diagonal%28__%29-71pds.md): Deprecated. Returns a new matrix with the specified vector on the main diagonal.
- [matrix_determinant(\_:)](matrix_determinant%28__%29-4yqoy.md): Deprecated. Returns the determinant of the specified matrix.
- [matrix_equal(\_:\_:)](matrix_equal%28____%29-752xl.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_from_columns(\_:\_:\_:\_:)](matrix_from_columns%28________%29-5d0yw.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-8t44c.md): Deprecated. Returns the transpose of a matrix.
- [cmatrix](simd_float4x4/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.
- [init(\_:)](simd_float4x4/init%28__%29-2ga0f.md): Deprecated. Creates a new matrix with the specified matrix.

### Operators

- [\*(\_:\_:)](simd_float4x4/_%28____%29-1qmhs.md)
- [\*(\_:\_:)](simd_float4x4/_%28____%29-1qwyg.md)
- [\*(\_:\_:)](simd_float4x4/_%28____%29-6yrrr.md)
- [\*(\_:\_:)](simd_float4x4/_%28____%29-973nq.md)
- [\*(\_:\_:)](simd_float4x4/_%28____%29-97jjs.md)
- [\*(\_:\_:)](simd_float4x4/_%28____%29-9bvh7.md)
- [\*(\_:\_:)](simd_float4x4/_%28____%29-vr6m.md)
- [\*=(\_:\_:)](simd_float4x4/_=%28____%29-10057.md)
- [\*=(\_:\_:)](simd_float4x4/_=%28____%29-43syc.md)
- [+(\_:\_:)](simd_float4x4/+%28____%29.md)
- [+=(\_:\_:)](simd_float4x4/+=%28____%29.md)
- [-(\_:)](simd_float4x4/-%28__%29.md)
- [-(\_:\_:)](simd_float4x4/-%28____%29.md)
- [-=(\_:\_:)](simd_float4x4/-=%28____%29.md)

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
- [simd_float4x2](simd_float4x2.md): A matrix of four columns and two rows that contains single-precision values.
- [simd_float4x3](simd_float4x3.md): A matrix of four columns and three rows that contains single-precision values.

# simd_float4x4 (Objective-C)

**Framework:** simd  
**Kind:** Structure

A matrix of four columns and four rows that contains single-precision values.

## Declaration

```objectivec
typedef struct { ... } simd_float4x4;
```

## Topics

### Matrix Constants

- [matrix_identity_float4x4](matrix_identity_float4x4.md): A 4 x 4 identity matrix.

### Matrix Properties

- [columns](simd_float4x4/columns.md): The columns of the matrix.

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28________%29-4p5ox.md): Returns a new matrix with the specified columns.
- [simd_matrix_from_rows](simd_matrix_from_rows%28________%29-34hac.md): Returns a new matrix with the specified rows.
- [simd_diagonal_matrix](simd_diagonal_matrix-2l0e4.md): Returns a new matrix with the specified vector on the main diagonal.
- [simd_matrix4x4](simd_matrix4x4%28__%29-20lv7.md): Returns a new matrix with the specified quarternion.

### Math Functions

- [simd_add](simd_add-8hvd.md): Returns the sum of two matrices.
- [simd_sub](simd_sub-bfqo.md): Returns the difference of two matrices.
- [matrix_scale](matrix_scale-197rd.md): Returns the product of a scalar value and a matrix.

### Matrix-Scalar Multiplication Functions

- [simd_mul](simd_mul-7dgim.md): Returns the product of a scalar value and a 4 x 4 matrix.

### Matrix-Vector Multiplication Functions

- [simd_mul](simd_mul-78xlj.md): Returns the product of a four-element vector and a 4 x 4 matrix.
- [matrix_multiply](matrix_multiply-43zat.md): Returns the product of a four-element vector and a 4 x 4 matrix.
- [simd_mul](simd_mul-781du.md): Returns the product of a 4 x 4 matrix and a four-element vector.
- [matrix_multiply](matrix_multiply-1q25o.md): Returns the product of a 4 x 4 matrix and a four-element vector.

### Matrix-Matrix Multiplication Functions

- [simd_mul](simd_mul-904fl.md): Returns the product of a 2 x 4 matrix and a 4 x 2 matrix.
- [matrix_multiply](matrix_multiply-93c5i.md): Returns the product of a 2 x 4 matrix and a 4 x 2 matrix.
- [matrix_multiply](matrix_multiply-7g81z.md): Returns the product of a 3 x 4 matrix and a 4 x 3 matrix.
- [simd_mul](simd_mul-6xfmy.md): Returns the product of a 3 x 4 matrix and a 4 x 3 matrix.
- [matrix_multiply](matrix_multiply-7hosa.md): Returns the product of a 4 x 4 matrix and a 4 x 4 matrix.
- [simd_mul](simd_mul-1sxjd.md): Returns the product of a 4 x 4 matrix and a 4 x 4 matrix.

### Equality Functions

- [simd_equal](simd_equal-cge0.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-9kkrw.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-8f55s.md): Returns true if every element in a matrix is within a specified single-precision relative tolerance to the corresponding element in a second matrix.

### Determinant and Inverse Functions

- [simd_determinant](simd_determinant-358zf.md): Returns the determinant of the specified matrix.
- [simd_inverse](simd_inverse-3h6ry.md): Returns the inverse of the specified matrix.

### Linear Combination Function

- [simd_linear_combination](simd_linear_combination-4bbf.md): Returns the linear combination of two scalar values and two matrices.

### Transpose Function

- [simd_transpose](simd_transpose-7h97b.md): Returns the transpose of a matrix.

### Type Aliases

- [matrix_float4x4](matrix_float4x4.md): A type alias for a single-precision 4 x 4 matrix.

## See Also

### Matrix structures

- [simd_float2x2](simd_float2x2.md): A matrix of two columns and two rows that contains single-precision values.
- [simd_float2x3](simd_float2x3.md): A matrix of two columns and three rows that contains single-precision values.
- [simd_float2x4](simd_float2x4.md): A matrix of two columns and four rows that contains single-precision values.
- [simd_float3x2](simd_float3x2.md): A matrix of three columns and two rows that contains single-precision values.
- [simd_float3x3](simd_float3x3.md): A matrix of three columns and three rows that contains single-precision values.
- [simd_float3x4](simd_float3x4.md): A matrix of three columns and four rows that contains single-precision values.
- [simd_float4x2](simd_float4x2.md): A matrix of four columns and two rows that contains single-precision values.
- [simd_float4x3](simd_float4x3.md): A matrix of four columns and three rows that contains single-precision values.
