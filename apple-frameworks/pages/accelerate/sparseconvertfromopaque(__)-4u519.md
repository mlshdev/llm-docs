> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseconvertfromopaque(_:)-4u519](https://developer.apple.com/documentation/accelerate/sparseconvertfromopaque(_:)-4u519)

# SparseConvertFromOpaque(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a sparse matrix of single-precision, floating-point values from a BLAS opaque matrix.

## Declaration

```swift
func SparseConvertFromOpaque(_ matrix: sparse_matrix_float) -> SparseMatrix_Float
```

## Parameters

- `matrix`: The opaque matrix to convert.

<a id="return-value"></a>

## Return Value

A new [SparseMatrix_Float](sparsematrix_float.md).

<a id="Discussion"></a>

## Discussion

The following code shows an example of creating a [SparseMatrix_Double](sparsematrix_double.md) structure from a BLAS opaque matrix and multiplying it by a vector:

```swift
guard let blasMatrix = sparse_matrix_create_float(4, 4) else {
    return
}

sparse_insert_entry_float(blasMatrix, 1.0, 0, 0)
sparse_insert_entry_float(blasMatrix, 4.0, 3, 0)
sparse_insert_entry_float(blasMatrix, 13.0, 0, 3)
sparse_insert_entry_float(blasMatrix, 16.0, 3, 3)

let A: SparseMatrix_Float = SparseConvertFromOpaque(blasMatrix)

defer {
    SparseCleanup(A)
}

/// The values for _x_ in _y=Ax_.
var xValues: [Float] = [10.0, -1.0, -1.0, 10.0]

/// The values for _y_ in _y=Ax_.
let yValues = [Float](unsafeUninitializedCapacity: xValues.count) {
    resultBuffer, count in
    
    xValues.withUnsafeMutableBufferPointer { xValuesPtr in
        /// The _x_ in _y=Ax_.
        let x = DenseVector_Float(count: 4,
                                  data: xValuesPtr.baseAddress!)
        
        /// The _y_ in _y=Ax_.
        let y = DenseVector_Float(count: 4,
                                  data: resultBuffer.baseAddress!)
        
        SparseMultiply(A, x, y)
    }
    
    count = xValues.count
}
```

On return, `yValues` contains the values `[140.0, 0.0, 0.0, 200.0]`.

![A mathematical formula that describes a four-by-four sparse matrix multiplied by a four-element dense vector. The result is a four-element dense vector.](https://developer.apple.com/images/com.apple.accelerate/media-3702381@2x.png)

## See Also

### BLAS support

- [SparseConvertFromOpaque(\_:)](sparseconvertfromopaque%28__%29-6n7rw.md): Returns a sparse matrix of double-precision, floating-point values from a BLAS opaque matrix.
- [SparseConvertFromOpaque(\_:)](sparseconvertfromopaque%28__%29-9ll2d.md): Converts an opaque matrix of complex float values object to a transparent sparse matrix object. When you are done with this matrix, release the memory that has been allocated by calling `SparseCleanup` on it.
- [SparseConvertFromOpaque(\_:)](sparseconvertfromopaque%28__%29-9xju4.md): Converts an opaque matrix of complex double values object to a transparent sparse matrix object. When you are done with this matrix, release the memory that has been allocated by calling `SparseCleanup` on it.

# SparseConvertFromOpaque (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a sparse matrix of single-precision, floating-point values from a BLAS opaque matrix.

## Declaration

```objectivec
static SparseMatrix_Float SparseConvertFromOpaque(sparse_matrix_float matrix);
```

## Parameters

- `matrix`: The opaque matrix to convert.

<a id="return-value"></a>

## Return Value

A new [SparseMatrix_Float](sparsematrix_float.md).

<a id="Discussion"></a>

## Discussion

The following code shows an example of creating a [SparseMatrix_Double](sparsematrix_double.md) structure from a BLAS opaque matrix and multiplying it by a vector:

```swift
guard let blasMatrix = sparse_matrix_create_float(4, 4) else {
    return
}

sparse_insert_entry_float(blasMatrix, 1.0, 0, 0)
sparse_insert_entry_float(blasMatrix, 4.0, 3, 0)
sparse_insert_entry_float(blasMatrix, 13.0, 0, 3)
sparse_insert_entry_float(blasMatrix, 16.0, 3, 3)

let A: SparseMatrix_Float = SparseConvertFromOpaque(blasMatrix)

defer {
    SparseCleanup(A)
}

/// The values for _x_ in _y=Ax_.
var xValues: [Float] = [10.0, -1.0, -1.0, 10.0]

/// The values for _y_ in _y=Ax_.
let yValues = [Float](unsafeUninitializedCapacity: xValues.count) {
    resultBuffer, count in
    
    xValues.withUnsafeMutableBufferPointer { xValuesPtr in
        /// The _x_ in _y=Ax_.
        let x = DenseVector_Float(count: 4,
                                  data: xValuesPtr.baseAddress!)
        
        /// The _y_ in _y=Ax_.
        let y = DenseVector_Float(count: 4,
                                  data: resultBuffer.baseAddress!)
        
        SparseMultiply(A, x, y)
    }
    
    count = xValues.count
}
```

On return, `yValues` contains the values `[140.0, 0.0, 0.0, 200.0]`.

![A mathematical formula that describes a four-by-four sparse matrix multiplied by a four-element dense vector. The result is a four-element dense vector.](https://developer.apple.com/images/com.apple.accelerate/media-3702381@2x.png)

## See Also

### BLAS support

- [SparseConvertFromOpaque](sparseconvertfromopaque%28__%29-6n7rw.md): Returns a sparse matrix of double-precision, floating-point values from a BLAS opaque matrix.
- [SparseConvertFromOpaque](sparseconvertfromopaque%28__%29-9ll2d.md): Converts an opaque matrix of complex float values object to a transparent sparse matrix object. When you are done with this matrix, release the memory that has been allocated by calling `SparseCleanup` on it.
- [SparseConvertFromOpaque](sparseconvertfromopaque%28__%29-9xju4.md): Converts an opaque matrix of complex double values object to a transparent sparse matrix object. When you are done with this matrix, release the memory that has been allocated by calling `SparseCleanup` on it.
