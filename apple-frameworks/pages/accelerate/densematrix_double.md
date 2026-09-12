> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/densematrix_double](https://developer.apple.com/documentation/accelerate/densematrix_double)

# DenseMatrix_Double (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains a dense matrix of double-precision, floating-point values.

## Declaration

```swift
struct DenseMatrix_Double
```

<a id="overview"></a>

## Overview

You typically use dense matrices to represent the unknowns matrix, *X*, and the right-hand-side matrix, *B*, in the matrix equation *AX = B.* A [DenseMatrix_Double](densematrix_double.md) structure provides a pointer to its underlying data, and information about its structure and attributes.

The following code shows an example of how to create a dense matrix structure from an array of double-precision values. In this case, use [withUnsafeMutableBufferPointer(\_:)](acceleratemutablebuffer/withunsafemutablebufferpointer%28__%29.md) to pass a pointer to your collection. The [DenseMatrix_Double](densematrix_double.md) structure is valid only during the execution of the closure. Don’t store or return the structure for later use.

```swift
// An array of `rowCount` x `columnCount` single-precision values.
var matrixValues = [...]
let rowCount = Int32(5)
let columnCount = Int32(5)

matrixValues.withUnsafeMutableBufferPointer {
    let matrix = DenseMatrix_Double(rowCount: rowCount,
                                    columnCount: columnCount,
                                    columnStride: rowCount,
                                    attributes: SparseAttributes_t(),
                                    data: $0.baseAddress!)
    
    // Perform operations using `matrix`.
}
```

## Topics

### Initializers

- [init(rowCount:columnCount:columnStride:attributes:data:)](densematrix_double/init%28rowcount_columncount_columnstride_attributes_data_%29.md): Creates a new matrix of double-precision values.

### Inspecting a Matrix’s Structure and Data

- [rowCount](densematrix_double/rowcount.md): The number of rows in the matrix.
- [columnCount](densematrix_double/columncount.md): The number of columns in the matrix.
- [columnStride](densematrix_double/columnstride.md): The stride between matrix columns, in elements.
- [attributes](densematrix_double/attributes.md): The attributes of the matrix, such as whether it’s symmetrical or triangular.
- [SparseAttributes_t](sparseattributes_t.md): A structure that represents the attributes of a matrix.
- [data](densematrix_double/data.md): The array of double-precision, floating-point values in column-major order.

## See Also

### Creating dense matrices and dense vectors

- [DenseMatrix_Float](densematrix_float.md): A structure that contains a dense matrix of single-precision, floating-point values.
- [DenseVector_Double](densevector_double.md): A structure that contains a dense vector of double-precision, floating-point values.
- [DenseVector_Float](densevector_float.md): A structure that contains a dense vector of single-precision, floating-point values.

# DenseMatrix_Double (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains a dense matrix of double-precision, floating-point values.

## Declaration

```objectivec
typedef struct { ... } DenseMatrix_Double;
```

<a id="overview"></a>

## Overview

You typically use dense matrices to represent the unknowns matrix, *X*, and the right-hand-side matrix, *B*, in the matrix equation *AX = B.* A [DenseMatrix_Double](densematrix_double.md) structure provides a pointer to its underlying data, and information about its structure and attributes.

The following code shows an example of how to create a dense matrix structure from an array of double-precision values. In this case, use [withUnsafeMutableBufferPointer(\_:)](acceleratemutablebuffer/withunsafemutablebufferpointer%28__%29.md) to pass a pointer to your collection. The [DenseMatrix_Double](densematrix_double.md) structure is valid only during the execution of the closure. Don’t store or return the structure for later use.

```swift
// An array of `rowCount` x `columnCount` single-precision values.
var matrixValues = [...]
let rowCount = Int32(5)
let columnCount = Int32(5)

matrixValues.withUnsafeMutableBufferPointer {
    let matrix = DenseMatrix_Double(rowCount: rowCount,
                                    columnCount: columnCount,
                                    columnStride: rowCount,
                                    attributes: SparseAttributes_t(),
                                    data: $0.baseAddress!)
    
    // Perform operations using `matrix`.
}
```

## Topics

### Inspecting a Matrix’s Structure and Data

- [rowCount](densematrix_double/rowcount.md): The number of rows in the matrix.
- [columnCount](densematrix_double/columncount.md): The number of columns in the matrix.
- [columnStride](densematrix_double/columnstride.md): The stride between matrix columns, in elements.
- [attributes](densematrix_double/attributes.md): The attributes of the matrix, such as whether it’s symmetrical or triangular.
- [SparseAttributes_t](sparseattributes_t.md): A structure that represents the attributes of a matrix.
- [data](densematrix_double/data.md): The array of double-precision, floating-point values in column-major order.

## See Also

### Creating dense matrices and dense vectors

- [DenseMatrix_Float](densematrix_float.md): A structure that contains a dense matrix of single-precision, floating-point values.
- [DenseVector_Double](densevector_double.md): A structure that contains a dense vector of double-precision, floating-point values.
- [DenseVector_Float](densevector_float.md): A structure that contains a dense vector of single-precision, floating-point values.
