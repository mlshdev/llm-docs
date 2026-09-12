> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:_:_:)-26fae](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:_:)-26fae)

# SparseSolve(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Ax = b* for vectors of double-precision values, treating *A* as an operator and using the specified iterative method.

## Declaration

```swift
func SparseSolve(_ method: SparseIterativeMethod, _ ApplyOperator: @escaping (Bool, CBLAS_TRANSPOSE, DenseVector_Double, DenseVector_Double) -> Void, _ b: DenseVector_Double, _ x: DenseVector_Double) -> SparseIterativeStatus_t
```

## Parameters

- `method`: The iterative method.
- `ApplyOperator`: The apply operator block to run. The block takes the following parameters:

  - **accumulate**: Indicates whether to perform `y` `+= op(A)`x (if `true`), or `Y = op(A)X` (if `false`).
  - **trans**: Indicates whether `op(A)` is the application of *A* if `CblasNoTrans`, or *Aᵀ* if `CblasTrans`
  - **x**: The vector to multiply.
  - **y**: The vector for accumulating or storing the result.
- `b`: The vector *b*.
- `x`: The matrix *x*.

<a id="return-value"></a>

## Return Value

A [SparseIterativeStatus_t](sparseiterativestatus_t.md) enumeration that represents the status of the iterative solve.

<a id="Discussion"></a>

## Discussion

Use this function to solve a system of linear equations using a factored coefficient matrix. In cases where the matrix *A* isn’t explicitly available or you need control over the multiplication, this function allows you to provide an apply block.

The following figure shows two systems of equations where the coefficient matrix is sparse:

![A mathematical equation that has one set of three simultaneous equations on the left. Each equation has three unknowns. The same set of simultaneous equations appears on the right as a single matrix equation, A x equals B. The single matrix equation consists of a three-by-three matrix multiplied by a three-element column matrix that equals a three-element column matrix.](https://developer.apple.com/images/com.apple.accelerate/media-3703925@2x.png)

The following code solves this system using the least squares minimum residual method:

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
defer {
    SparseCleanup(A)
}

/// Create the right-hand-side vector, _b_.
var bValues: [Double] = [30, 35, 100]
var xValues = [Double](repeating: .nan, count: bValues.count)

/// Create the apply operator block.
func applyOperator(accumulate: Bool,
                   trans: CBLAS_TRANSPOSE,
                   x: DenseVector_Double,
                   y: DenseVector_Double) {
    switch(accumulate, trans == CblasTrans) {
        case (false, false):
            SparseMultiply(A, x, y)
        case (false, true):
            SparseMultiply(SparseGetTranspose(A), x, y)
        case (true, false):
            SparseMultiplyAdd(A, x, y)
        case (true, true):
            SparseMultiplyAdd(SparseGetTranspose(A), x, y)
    }
}

bValues.withUnsafeMutableBufferPointer { bPtr in
    xValues.withUnsafeMutableBufferPointer { xPtr in
        
        let b = DenseVector_Double(count: 3,
                                   data: bPtr.baseAddress!)
        
        let x = DenseVector_Double(count: 3,
                                   data: xPtr.baseAddress!)

        SparseSolve(SparseLSMR(),
                    applyOperator,
                    b, x)
    }
}
```

On return, x`Values` contains the values `[1.0, 2.0, 3.0]`.

## See Also

### Iterative sparse solve functions

- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-7f1sp.md): Solves the equation *Ax = b* for vectors of double-precision values using the specified iterative method.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-97k3a.md): Solves the equation *Ax = b* for vectors of single-precision values using the specified iterative method.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-9yhgp.md): Solves the equation *Ax = b* for vectors of single-precision values, treating *A* as an operator and using the specified iterative method.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Ax = b* for vectors of double-precision values, treating *A* as an operator and using the specified iterative method.

## Declaration

```objectivec
static SparseIterativeStatus_t SparseSolve(SparseIterativeMethod method, void (^ApplyOperator)(bool accumulate, enum CBLAS_TRANSPOSE trans, DenseVector_Double x, DenseVector_Double y), DenseVector_Double b, DenseVector_Double x);
```

## Parameters

- `method`: The iterative method.
- `ApplyOperator`: The apply operator block to run. The block takes the following parameters:

  - **accumulate**: Indicates whether to perform `y` `+= op(A)`x (if `true`), or `Y = op(A)X` (if `false`).
  - **trans**: Indicates whether `op(A)` is the application of *A* if `CblasNoTrans`, or *Aᵀ* if `CblasTrans`
  - **x**: The vector to multiply.
  - **y**: The vector for accumulating or storing the result.
- `b`: The vector *b*.
- `x`: The matrix *x*.

<a id="return-value"></a>

## Return Value

A [SparseIterativeStatus_t](sparseiterativestatus_t.md) enumeration that represents the status of the iterative solve.

<a id="Discussion"></a>

## Discussion

Use this function to solve a system of linear equations using a factored coefficient matrix. In cases where the matrix *A* isn’t explicitly available or you need control over the multiplication, this function allows you to provide an apply block.

The following figure shows two systems of equations where the coefficient matrix is sparse:

![A mathematical equation that has one set of three simultaneous equations on the left. Each equation has three unknowns. The same set of simultaneous equations appears on the right as a single matrix equation, A x equals B. The single matrix equation consists of a three-by-three matrix multiplied by a three-element column matrix that equals a three-element column matrix.](https://developer.apple.com/images/com.apple.accelerate/media-3703925@2x.png)

The following code solves this system using the least squares minimum residual method:

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
defer {
    SparseCleanup(A)
}

/// Create the right-hand-side vector, _b_.
var bValues: [Double] = [30, 35, 100]
var xValues = [Double](repeating: .nan, count: bValues.count)

/// Create the apply operator block.
func applyOperator(accumulate: Bool,
                   trans: CBLAS_TRANSPOSE,
                   x: DenseVector_Double,
                   y: DenseVector_Double) {
    switch(accumulate, trans == CblasTrans) {
        case (false, false):
            SparseMultiply(A, x, y)
        case (false, true):
            SparseMultiply(SparseGetTranspose(A), x, y)
        case (true, false):
            SparseMultiplyAdd(A, x, y)
        case (true, true):
            SparseMultiplyAdd(SparseGetTranspose(A), x, y)
    }
}

bValues.withUnsafeMutableBufferPointer { bPtr in
    xValues.withUnsafeMutableBufferPointer { xPtr in
        
        let b = DenseVector_Double(count: 3,
                                   data: bPtr.baseAddress!)
        
        let x = DenseVector_Double(count: 3,
                                   data: xPtr.baseAddress!)

        SparseSolve(SparseLSMR(),
                    applyOperator,
                    b, x)
    }
}
```

On return, x`Values` contains the values `[1.0, 2.0, 3.0]`.

## See Also

### Iterative sparse solve functions

- [SparseSolve](sparsesolve%28________%29-7f1sp.md): Solves the equation *Ax = b* for vectors of double-precision values using the specified iterative method.
- [SparseSolve](sparsesolve%28________%29-97k3a.md): Solves the equation *Ax = b* for vectors of single-precision values using the specified iterative method.
- [SparseSolve](sparsesolve%28________%29-9yhgp.md): Solves the equation *Ax = b* for vectors of single-precision values, treating *A* as an operator and using the specified iterative method.
