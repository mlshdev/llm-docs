> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/densematrix_complex_float](https://developer.apple.com/documentation/accelerate/densematrix_complex_float)

# DenseMatrix_Complex_Float (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Contains a dense `rowCount` x `columnCount` matrix of complex float values stored in column-major order.

## Declaration

```swift
struct DenseMatrix_Complex_Float
```

<a id="overview"></a>

## Overview

- **`rowCount`**: Number of rows in the matrix.
- **`columnCount`**: Number of columns in the matrix.
- **`columnStride`**: The column stride of the matrix.
- **`attributes`**: The attributes of the matrix, for example whether the  matrix is symmetrical (Hermitian) or triangular.
- **`data`**: The array of float values in column-major order.

## Topics

### Initializers

- [init(rowCount:columnCount:columnStride:attributes:data:)](densematrix_complex_float/init%28rowcount_columncount_columnstride_attributes_data_%29.md)

### Instance Properties

- [attributes](densematrix_complex_float/attributes.md): A type representing the attributes of a matrix.
- [columnCount](densematrix_complex_float/columncount.md)
- [columnStride](densematrix_complex_float/columnstride.md)
- [data](densematrix_complex_float/data.md)
- [rowCount](densematrix_complex_float/rowcount.md)

## See Also

### Creating dense complex matrices and dense complex vectors

- [DenseMatrix_Complex_Double](densematrix_complex_double.md): Contains a dense `rowCount` x `columnCount` matrix of complex double values stored in column-major order.
- [DenseVector_Complex_Double](densevector_complex_double.md): Contains a dense vector of double complex values.
- [DenseVector_Complex_Float](densevector_complex_float.md): Contains a dense vector of float complex values.

# DenseMatrix_Complex_Float (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Contains a dense `rowCount` x `columnCount` matrix of complex float values stored in column-major order.

## Declaration

```objectivec
typedef struct { ... } DenseMatrix_Complex_Float;
```

<a id="overview"></a>

## Overview

- **`rowCount`**: Number of rows in the matrix.
- **`columnCount`**: Number of columns in the matrix.
- **`columnStride`**: The column stride of the matrix.
- **`attributes`**: The attributes of the matrix, for example whether the  matrix is symmetrical (Hermitian) or triangular.
- **`data`**: The array of float values in column-major order.

## Topics

### Instance Properties

- [attributes](densematrix_complex_float/attributes.md): A type representing the attributes of a matrix.
- [columnCount](densematrix_complex_float/columncount.md)
- [columnStride](densematrix_complex_float/columnstride.md)
- [data](densematrix_complex_float/data.md)
- [rowCount](densematrix_complex_float/rowcount.md)

## See Also

### Creating dense complex matrices and dense complex vectors

- [DenseMatrix_Complex_Double](densematrix_complex_double.md): Contains a dense `rowCount` x `columnCount` matrix of complex double values stored in column-major order.
- [DenseVector_Complex_Double](densevector_complex_double.md): Contains a dense vector of double complex values.
- [DenseVector_Complex_Float](densevector_complex_float.md): Contains a dense vector of float complex values.
