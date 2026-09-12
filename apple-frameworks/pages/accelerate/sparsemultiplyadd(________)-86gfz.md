> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiplyadd(_:_:_:_:)-86gfz](https://developer.apple.com/documentation/accelerate/sparsemultiplyadd(_:_:_:_:)-86gfz)

# SparseMultiplyAdd(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiply operation *Y += alpha \* AX* on a sparse matrix of double-precision, floating-point values.

## Declaration

```swift
func SparseMultiplyAdd(_ alpha: Double, _ A: SparseMatrix_Double, _ X: DenseMatrix_Double, _ Y: DenseMatrix_Double)
```

## Parameters

- `alpha`: The scalar value *alpha* in *Y += alpha \* AX*.
- `A`: The sparse matrix *A* in *Y* *+= AX*.
- `X`: The dense matrix *X* in *Y* *+= AX*.
- `Y`: The dense matrix *Y* in *Y* *+= AX*.

<a id="Discussion"></a>

## Discussion

Use this function to multiply a scalar value by a sparse matrix, then by a dense matrix, and accumulate the result. The following equation is an example of a matrix-matrix multiplication where the first matrix is sparse:

![A mathematical formula that describes the matrix multiplication, Y plus-equals alpha times A X. A four-by-two matrix added to a scalar value multiplied by a four-by-four matrix multiplied by a four-by-two matrix equals a four-by-two matrix.](https://developer.apple.com/images/com.apple.accelerate/media-3703078@2x.png)

Call [SparseMultiplyAdd(\_:\_:\_:\_:)](sparsemultiplyadd%28________%29-3oa6n.md) to calculate the result.

```swift
let rowCount = Int32(4)
let columnCount = Int32(4)
let blockCount = 4
let blockSize = UInt8(1)
let rowIndices: [Int32] = [0, 3, 0, 3]
let columnIndices: [Int32] = [0, 0, 3, 3]
let data = [1.0, 4.0, 13.0, 16.0]

/// The _A_ in _Y += alpha * AX_.
let A = SparseConvertFromCoordinate(rowCount, columnCount,
                                    blockCount, blockSize,
                                    SparseAttributes_t(),
                                    rowIndices, columnIndices,
                                    data)
defer {
    SparseCleanup(A)
}

/// The values for _X_ in _Y += alpha * AX_.
var xValues = [10.0, -1.0, -1.0, 10.0,
               100.0, -1.0, -1.0, 100.0]

/// The values for _Y_ in _Y += alpha * AX_.
var yValues = [Double](repeating: 1,
                       count: xValues.count)

let alpha = 2.0

yValues.withUnsafeMutableBufferPointer { yValuesPtr in
    xValues.withUnsafeMutableBufferPointer { denseMatrixPtr in
        /// The _X_ in _Y += alpha * AX_.
        let X = DenseMatrix_Double(rowCount: 4,
                                   columnCount: 2,
                                   columnStride: 4,
                                   attributes: SparseAttributes_t(),
                                   data: denseMatrixPtr.baseAddress!)
        
        /// The _Y_ in _Y += alpha * AX_.
        let Y = DenseMatrix_Double(rowCount: 4,
                                   columnCount: 2,
                                   columnStride: 4,
                                   attributes: SparseAttributes_t(),
                                   data: yValuesPtr.baseAddress!)
        
        SparseMultiplyAdd(alpha, A, X, Y)
    }
}

// On return, `yValues` contains:
//      `[ 281.0, 1.0, 1.0,  401.0,
//        2801.0, 1.0, 1.0, 4001.0]`
```

## See Also

### Multiply-add functions

- [SparseMultiplyAdd(\_:\_:\_:)](sparsemultiplyadd%28______%29-lgm5.md): Performs the multiply operation *Y += AX* on a sparse matrix of double-precision, floating-point values.
- [SparseMultiplyAdd(\_:\_:\_:)](sparsemultiplyadd%28______%29-8pgpq.md): Performs the multiply operation *Y += AX* on a sparse matrix of single-precision, floating-point values.
- [SparseMultiplyAdd(\_:\_:\_:\_:)](sparsemultiplyadd%28________%29-n61k.md): Performs the multiply operation *Y += alpha \* AX* on a sparse matrix of single-precision, floating-point values.

# SparseMultiplyAdd (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiply operation *Y += alpha \* AX* on a sparse matrix of double-precision, floating-point values.

## Declaration

```objectivec
static void SparseMultiplyAdd(double alpha, SparseMatrix_Double A, DenseMatrix_Double X, DenseMatrix_Double Y);
```

## Parameters

- `alpha`: The scalar value *alpha* in *Y += alpha \* AX*.
- `A`: The sparse matrix *A* in *Y* *+= AX*.
- `X`: The dense matrix *X* in *Y* *+= AX*.
- `Y`: The dense matrix *Y* in *Y* *+= AX*.

<a id="Discussion"></a>

## Discussion

Use this function to multiply a scalar value by a sparse matrix, then by a dense matrix, and accumulate the result. The following equation is an example of a matrix-matrix multiplication where the first matrix is sparse:

![A mathematical formula that describes the matrix multiplication, Y plus-equals alpha times A X. A four-by-two matrix added to a scalar value multiplied by a four-by-four matrix multiplied by a four-by-two matrix equals a four-by-two matrix.](https://developer.apple.com/images/com.apple.accelerate/media-3703078@2x.png)

Call [SparseMultiplyAdd](sparsemultiplyadd%28________%29-3oa6n.md) to calculate the result.

```swift
let rowCount = Int32(4)
let columnCount = Int32(4)
let blockCount = 4
let blockSize = UInt8(1)
let rowIndices: [Int32] = [0, 3, 0, 3]
let columnIndices: [Int32] = [0, 0, 3, 3]
let data = [1.0, 4.0, 13.0, 16.0]

/// The _A_ in _Y += alpha * AX_.
let A = SparseConvertFromCoordinate(rowCount, columnCount,
                                    blockCount, blockSize,
                                    SparseAttributes_t(),
                                    rowIndices, columnIndices,
                                    data)
defer {
    SparseCleanup(A)
}

/// The values for _X_ in _Y += alpha * AX_.
var xValues = [10.0, -1.0, -1.0, 10.0,
               100.0, -1.0, -1.0, 100.0]

/// The values for _Y_ in _Y += alpha * AX_.
var yValues = [Double](repeating: 1,
                       count: xValues.count)

let alpha = 2.0

yValues.withUnsafeMutableBufferPointer { yValuesPtr in
    xValues.withUnsafeMutableBufferPointer { denseMatrixPtr in
        /// The _X_ in _Y += alpha * AX_.
        let X = DenseMatrix_Double(rowCount: 4,
                                   columnCount: 2,
                                   columnStride: 4,
                                   attributes: SparseAttributes_t(),
                                   data: denseMatrixPtr.baseAddress!)
        
        /// The _Y_ in _Y += alpha * AX_.
        let Y = DenseMatrix_Double(rowCount: 4,
                                   columnCount: 2,
                                   columnStride: 4,
                                   attributes: SparseAttributes_t(),
                                   data: yValuesPtr.baseAddress!)
        
        SparseMultiplyAdd(alpha, A, X, Y)
    }
}

// On return, `yValues` contains:
//      `[ 281.0, 1.0, 1.0,  401.0,
//        2801.0, 1.0, 1.0, 4001.0]`
```

## See Also

### Multiply-add functions

- [SparseMultiplyAdd](sparsemultiplyadd%28______%29-lgm5.md): Performs the multiply operation *Y += AX* on a sparse matrix of double-precision, floating-point values.
- [SparseMultiplyAdd](sparsemultiplyadd%28______%29-8pgpq.md): Performs the multiply operation *Y += AX* on a sparse matrix of single-precision, floating-point values.
- [SparseMultiplyAdd](sparsemultiplyadd%28________%29-n61k.md): Performs the multiply operation *Y += alpha \* AX* on a sparse matrix of single-precision, floating-point values.
