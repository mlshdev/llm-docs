> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiplyadd(_:_:_:_:)-3oa6n](https://developer.apple.com/documentation/accelerate/sparsemultiplyadd(_:_:_:_:)-3oa6n)

# SparseMultiplyAdd(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiply operation *y += alpha \* Ax* on a vector of double-precision, floating-point values.

## Declaration

```swift
func SparseMultiplyAdd(_ alpha: Double, _ A: SparseMatrix_Double, _ x: DenseVector_Double, _ y: DenseVector_Double)
```

## Parameters

- `alpha`: The scalar value *alpha* in *y* *+= alpha \* Ax*.
- `A`: The sparse matrix *A* in *y* *+= Ax*.
- `x`: The dense vector *x* in *y* *+= Ax*.
- `y`: The dense vector *y* in *y* *+= Ax*.

<a id="Discussion"></a>

## Discussion

Use this function to multiply a scalar by a sparse matrix, then by a dense vector, and accumulate the result. The following equation is an example of a matrix-vector multiplication where the matrix is sparse:

![A mathematical formula that describes the matrix multiplication, y plus-equals alpha times A x. A four-element column matrix added to a scalar value multiplied by a four-by-four matrix multiplied by a four-element column matrix equals a four-element column matrix.](https://developer.apple.com/images/com.apple.accelerate/media-3703084@2x.png)

Call [SparseMultiplyAdd(\_:\_:\_:\_:)](sparsemultiplyadd%28________%29-3oa6n.md) to calculate the result.

```swift
let rowCount = Int32(4)
let columnCount = Int32(4)
let blockCount = 4
let blockSize = UInt8(1)
let rowIndices: [Int32] = [0, 3, 0, 3]
let columnIndices: [Int32] = [0, 0, 3, 3]
let data = [1.0, 4.0, 13.0, 16.0]

/// The _A_ in _y+=Ax_.
let A = SparseConvertFromCoordinate(rowCount, columnCount,
                                    blockCount, blockSize,
                                    SparseAttributes_t(),
                                    rowIndices, columnIndices,
                                    data)
defer {
    SparseCleanup(A)
}

/// The values for _x_ in _y+=Ax_.
var xValues = [10.0, -1.0, -1.0, 10.0]

var yValues = [1.0, 1.0, 1.0, 1.0]

let alpha = 2.0

/// The values for _y_ in _y+=Ax_.
yValues.withUnsafeMutableBufferPointer { yValuesPtr in
    
    xValues.withUnsafeMutableBufferPointer { xValuesPtr in
        /// The _x_ in _y+=Ax_.
        let x = DenseVector_Double(count: 4,
                                   data: xValuesPtr.baseAddress!)
        
        /// The _y_ in _y+=Ax_.
        let y = DenseVector_Double(count: 4,
                                   data: yValuesPtr.baseAddress!)
        
        SparseMultiplyAdd(alpha, A, x, y)
    }
}

/// On return, `yValues` contains:
///      `[ 281.0, 1.0, 1.0, 401.0 ]`
```

## See Also

### Multiply-add functions

- [SparseMultiplyAdd(\_:\_:\_:)](sparsemultiplyadd%28______%29-7iuo9.md): Performs the multiply operation *y += Ax* on a vector of double-precision, floating-point values.
- [SparseMultiplyAdd(\_:\_:\_:)](sparsemultiplyadd%28______%29-ineu.md): Performs the multiply operation *y += Ax* on a vector of double-precision, floating-point values.
- [SparseMultiplyAdd(\_:\_:\_:\_:)](sparsemultiplyadd%28________%29-8n6xy.md): Performs the multiply operation *y += alpha \* Ax* on a vector of single-precision, floating-point values.

# SparseMultiplyAdd (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiply operation *y += alpha \* Ax* on a vector of double-precision, floating-point values.

## Declaration

```objectivec
static void SparseMultiplyAdd(double alpha, SparseMatrix_Double A, DenseVector_Double x, DenseVector_Double y);
```

## Parameters

- `alpha`: The scalar value *alpha* in *y* *+= alpha \* Ax*.
- `A`: The sparse matrix *A* in *y* *+= Ax*.
- `x`: The dense vector *x* in *y* *+= Ax*.
- `y`: The dense vector *y* in *y* *+= Ax*.

<a id="Discussion"></a>

## Discussion

Use this function to multiply a scalar by a sparse matrix, then by a dense vector, and accumulate the result. The following equation is an example of a matrix-vector multiplication where the matrix is sparse:

![A mathematical formula that describes the matrix multiplication, y plus-equals alpha times A x. A four-element column matrix added to a scalar value multiplied by a four-by-four matrix multiplied by a four-element column matrix equals a four-element column matrix.](https://developer.apple.com/images/com.apple.accelerate/media-3703084@2x.png)

Call [SparseMultiplyAdd](sparsemultiplyadd%28________%29-3oa6n.md) to calculate the result.

```swift
let rowCount = Int32(4)
let columnCount = Int32(4)
let blockCount = 4
let blockSize = UInt8(1)
let rowIndices: [Int32] = [0, 3, 0, 3]
let columnIndices: [Int32] = [0, 0, 3, 3]
let data = [1.0, 4.0, 13.0, 16.0]

/// The _A_ in _y+=Ax_.
let A = SparseConvertFromCoordinate(rowCount, columnCount,
                                    blockCount, blockSize,
                                    SparseAttributes_t(),
                                    rowIndices, columnIndices,
                                    data)
defer {
    SparseCleanup(A)
}

/// The values for _x_ in _y+=Ax_.
var xValues = [10.0, -1.0, -1.0, 10.0]

var yValues = [1.0, 1.0, 1.0, 1.0]

let alpha = 2.0

/// The values for _y_ in _y+=Ax_.
yValues.withUnsafeMutableBufferPointer { yValuesPtr in
    
    xValues.withUnsafeMutableBufferPointer { xValuesPtr in
        /// The _x_ in _y+=Ax_.
        let x = DenseVector_Double(count: 4,
                                   data: xValuesPtr.baseAddress!)
        
        /// The _y_ in _y+=Ax_.
        let y = DenseVector_Double(count: 4,
                                   data: yValuesPtr.baseAddress!)
        
        SparseMultiplyAdd(alpha, A, x, y)
    }
}

/// On return, `yValues` contains:
///      `[ 281.0, 1.0, 1.0, 401.0 ]`
```

## See Also

### Multiply-add functions

- [SparseMultiplyAdd](sparsemultiplyadd%28______%29-7iuo9.md): Performs the multiply operation *y += Ax* on a vector of double-precision, floating-point values.
- [SparseMultiplyAdd](sparsemultiplyadd%28______%29-ineu.md): Performs the multiply operation *y += Ax* on a vector of double-precision, floating-point values.
- [SparseMultiplyAdd](sparsemultiplyadd%28________%29-8n6xy.md): Performs the multiply operation *y += alpha \* Ax* on a vector of single-precision, floating-point values.
