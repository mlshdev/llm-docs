> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsefactor(_:_:)-8gl6j](https://developer.apple.com/documentation/accelerate/sparsefactor(_:_:)-8gl6j)

# SparseFactor(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the specified factorization of a sparse matrix of double-precision values.

## Declaration

```swift
func SparseFactor(_ type: SparseFactorization_t, _ Matrix: SparseMatrix_Double) -> SparseOpaqueFactorization_Double
```

## Parameters

- `type`: The type of factorization to perform.
- `Matrix`: The matrix to factorize.

<a id="return-value"></a>

## Return Value

A [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md) structure that represents the matrix factorization.

## Mentioned In

- [Solving systems using direct methods](solving-systems-using-direct-methods.md)

<a id="Discussion"></a>

## Discussion

Use this function to calculate the factorization of a sparse matrix to pass to the direct solve functions. The following figure shows a system of equations where the coefficient matrix is sparse:

![A mathematical equation that has one set of three simultaneous equations on the left. Each equation has three unknowns. The same set of simultaneous equations appears on the right as a single matrix equation, A x equals B. The single matrix equation consists of a three-by-three matrix multiplied by a three-element column matrix that equals a three-element column matrix.](https://developer.apple.com/images/com.apple.accelerate/media-3703880@2x.png)

The following code solves this system with a QR factorization of the coefficient matrix:

```swift
/// Create the coefficient matrix _A_.
let rowIndices: [Int32] =    [ 0,  1, 1,  2]
let columnIndices: [Int32] = [ 2,  0, 2,  1]
let aValues: [Double] =      [10, 20, 5, 50]

let A = SparseConvertFromCoordinate(3, 3,
                                    4, 1,
                                    SparseAttributes_t(),
                                    rowIndices, columnIndices,
                                    aValues)

/// Factorize _A_.
let factorization = SparseFactor(SparseFactorizationQR, A)

defer {
    SparseCleanup(A)
    SparseCleanup(factorization)
}

/// Create the right-hand-side vector, _b_.
var bValues = [30.0, 35.0, 100.0]

bValues.withUnsafeMutableBufferPointer { bPtr in
    
    let xb = DenseVector_Double(count: 3,
                               data: bPtr.baseAddress!)
    
    SparseSolve(factorization, xb)
}
```

On return, `bValues` contains the values `[1.0, 2.0, 3.0]`.

You can use the symbolic factorization that this function returns for multiple numerical factorizations with different numerical values but the same nonzero structure.

## See Also

### Matrix factorization functions

- [SparseFactor(\_:\_:)](sparsefactor%28____%29-38shj.md): Returns the specified factorization of a sparse matrix of single-precision values.
- [SparseFactor(\_:\_:\_:\_:)](sparsefactor%28________%29-88xmk.md): Returns the specified factorization of a sparse matrix of double-precision values using the specified options.
- [SparseFactor(\_:\_:\_:\_:)](sparsefactor%28________%29-8apyz.md): Returns the specified factorization of a sparse matrix of single-precision values using the specified options.

# SparseFactor (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the specified factorization of a sparse matrix of double-precision values.

## Declaration

```objectivec
static SparseOpaqueFactorization_Double SparseFactor(SparseFactorization_t type, SparseMatrix_Double Matrix);
```

## Parameters

- `type`: The type of factorization to perform.
- `Matrix`: The matrix to factorize.

<a id="return-value"></a>

## Return Value

A [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md) structure that represents the matrix factorization.

## Mentioned In

- [Solving systems using direct methods](solving-systems-using-direct-methods.md)

<a id="Discussion"></a>

## Discussion

Use this function to calculate the factorization of a sparse matrix to pass to the direct solve functions. The following figure shows a system of equations where the coefficient matrix is sparse:

![A mathematical equation that has one set of three simultaneous equations on the left. Each equation has three unknowns. The same set of simultaneous equations appears on the right as a single matrix equation, A x equals B. The single matrix equation consists of a three-by-three matrix multiplied by a three-element column matrix that equals a three-element column matrix.](https://developer.apple.com/images/com.apple.accelerate/media-3703880@2x.png)

The following code solves this system with a QR factorization of the coefficient matrix:

```swift
/// Create the coefficient matrix _A_.
let rowIndices: [Int32] =    [ 0,  1, 1,  2]
let columnIndices: [Int32] = [ 2,  0, 2,  1]
let aValues: [Double] =      [10, 20, 5, 50]

let A = SparseConvertFromCoordinate(3, 3,
                                    4, 1,
                                    SparseAttributes_t(),
                                    rowIndices, columnIndices,
                                    aValues)

/// Factorize _A_.
let factorization = SparseFactor(SparseFactorizationQR, A)

defer {
    SparseCleanup(A)
    SparseCleanup(factorization)
}

/// Create the right-hand-side vector, _b_.
var bValues = [30.0, 35.0, 100.0]

bValues.withUnsafeMutableBufferPointer { bPtr in
    
    let xb = DenseVector_Double(count: 3,
                               data: bPtr.baseAddress!)
    
    SparseSolve(factorization, xb)
}
```

On return, `bValues` contains the values `[1.0, 2.0, 3.0]`.

You can use the symbolic factorization that this function returns for multiple numerical factorizations with different numerical values but the same nonzero structure.

## See Also

### Matrix factorization functions

- [SparseFactor](sparsefactor%28____%29-38shj.md): Returns the specified factorization of a sparse matrix of single-precision values.
- [SparseFactor](sparsefactor%28________%29-88xmk.md): Returns the specified factorization of a sparse matrix of double-precision values using the specified options.
- [SparseFactor](sparsefactor%28________%29-8apyz.md): Returns the specified factorization of a sparse matrix of single-precision values using the specified options.
