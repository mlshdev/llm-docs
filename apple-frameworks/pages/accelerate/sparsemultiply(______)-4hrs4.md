> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiply(_:_:_:)-4hrs4](https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:_:)-4hrs4)

# SparseMultiply(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiplication *y = Ax* on a vector of single-precision, floating-point values.

## Declaration

```swift
func SparseMultiply(_ A: SparseMatrix_Float, _ x: DenseVector_Float, _ y: DenseVector_Float)
```

## Parameters

- `A`: The sparse matrix *A* in *y* *= Ax*.
- `x`: The dense vector *x* in *y* *= Ax*.
- `y`: The dense vector *y* in *y* *= Ax*.

<a id="Discussion"></a>

## Discussion

Use this function to multiply a sparse matrix by a dense vector. The following equation is an example of a matrix-vector multiplication where the matrix is sparse:

![A mathematical formula that describes the matrix multiplication, y equals A x. A four-by-four matrix multiplied by a four-element column matrix equals a four-element column matrix.](https://developer.apple.com/images/com.apple.accelerate/media-3703088@2x.png)

Call [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-9d57s.md) to calculate the result.

```swift
let rowCount = Int32(4)
let columnCount = Int32(4)
let blockCount = 4
let blockSize = UInt8(1)
let rowIndices: [Int32] = [0, 3, 0, 3]
let columnIndices: [Int32] = [0, 0, 3, 3]
let data: [Float] = [1.0, 4.0, 13.0, 16.0]

/// The _A_ in _y=Ax_.
let A = SparseConvertFromCoordinate(rowCount, columnCount,
                                    blockCount, blockSize,
                                    SparseAttributes_t(),
                                    rowIndices, columnIndices,
                                    data)
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

/// On return, `yValues` contains:
///      `[ 140.0, 0.0, 0.0,  200.0 ]`
```

## See Also

### Multiplication functions

- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-9d57s.md): Performs the multiplication *y = Ax* on a vector of double-precision, floating-point values.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-76o5l.md): Performs the multiply operation *y* *= alpha \* Ax* on a vector of double-precision, floating-point values.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-8yzgo.md): Performs the multiply operation *y* *= alpha \* Ax* on a vector of single-precision, floating-point values.

# SparseMultiply (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiplication *y = Ax* on a vector of single-precision, floating-point values.

## Declaration

```objectivec
static void SparseMultiply(SparseMatrix_Float A, DenseVector_Float x, DenseVector_Float y);
```

## Parameters

- `A`: The sparse matrix *A* in *y* *= Ax*.
- `x`: The dense vector *x* in *y* *= Ax*.
- `y`: The dense vector *y* in *y* *= Ax*.

<a id="Discussion"></a>

## Discussion

Use this function to multiply a sparse matrix by a dense vector. The following equation is an example of a matrix-vector multiplication where the matrix is sparse:

![A mathematical formula that describes the matrix multiplication, y equals A x. A four-by-four matrix multiplied by a four-element column matrix equals a four-element column matrix.](https://developer.apple.com/images/com.apple.accelerate/media-3703088@2x.png)

Call [SparseMultiply](sparsemultiply%28______%29-9d57s.md) to calculate the result.

```swift
let rowCount = Int32(4)
let columnCount = Int32(4)
let blockCount = 4
let blockSize = UInt8(1)
let rowIndices: [Int32] = [0, 3, 0, 3]
let columnIndices: [Int32] = [0, 0, 3, 3]
let data: [Float] = [1.0, 4.0, 13.0, 16.0]

/// The _A_ in _y=Ax_.
let A = SparseConvertFromCoordinate(rowCount, columnCount,
                                    blockCount, blockSize,
                                    SparseAttributes_t(),
                                    rowIndices, columnIndices,
                                    data)
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

/// On return, `yValues` contains:
///      `[ 140.0, 0.0, 0.0,  200.0 ]`
```

## See Also

### Multiplication functions

- [SparseMultiply](sparsemultiply%28______%29-9d57s.md): Performs the multiplication *y = Ax* on a vector of double-precision, floating-point values.
- [SparseMultiply](sparsemultiply%28________%29-76o5l.md): Performs the multiply operation *y* *= alpha \* Ax* on a vector of double-precision, floating-point values.
- [SparseMultiply](sparsemultiply%28________%29-8yzgo.md): Performs the multiply operation *y* *= alpha \* Ax* on a vector of single-precision, floating-point values.
