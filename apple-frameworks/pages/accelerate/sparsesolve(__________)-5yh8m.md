> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:_:_:_:)-5yh8m](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:_:_:)-5yh8m)

# SparseSolve(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *AX = B* for matrices of double-precision values using the specified iterative method and opaque preconditioner.

## Declaration

```swift
func SparseSolve(_ method: SparseIterativeMethod, _ A: SparseMatrix_Double, _ B: DenseMatrix_Double, _ X: DenseMatrix_Double, _ Preconditioner: SparseOpaquePreconditioner_Double) -> SparseIterativeStatus_t
```

## Parameters

- `method`: The iterative method.
- `A`: The matrix *A*.
- `B`: The matrix *B*.
- `X`: The matrix *X*.
- `Preconditioner`: The preconditioner to apply.

<a id="return-value"></a>

## Return Value

A [SparseIterativeStatus_t](sparseiterativestatus_t.md) enumeration that represents the status of the iterative solve.

<a id="Discussion"></a>

## Discussion

Use this function to solve a system of linear equations using a factored coefficient matrix. Preconditioning the coefficient matrix can reduce the number of iterations the function requires to converge the system.

The following figure shows two systems of equations where the coefficient matrix is sparse:

![A mathematical equation that has two stacked sets of three simultaneous equations on the left. Each equation has three unknowns. The same sets of simultaneous equations appear on the right as a single matrix equation, A x equals B. The single matrix equation consists of a three-by-three matrix multiplied by a three-by-two matrix that equals a three-by-two matrix. ](https://developer.apple.com/images/com.apple.accelerate/media-3743131@2x.png)

The following code solves this system by applying a diagonal scaling preconditioner and using the least squares minimum residual method:

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

let preconditioner = SparseCreatePreconditioner(SparsePreconditionerDiagScaling,
                                                A)

defer {
    SparseCleanup(A)
    SparseCleanup(preconditioner)
}

/// Create the right-hand-side matrix, _B_.
var bValues: [Double] = [30, 35, 100,
                         300, 350, 1000]
let n = bValues.count

let xValues = [Double](unsafeUninitializedCapacity: n) {
    buffer, count in
    bValues.withUnsafeMutableBufferPointer { bPtr in
        let B = DenseMatrix_Double(rowCount: 3,
                                   columnCount: 2,
                                   columnStride: 3,
                                   attributes: SparseAttributes_t(),
                                   data: bPtr.baseAddress!)
        
        let X = DenseMatrix_Double(rowCount: 3,
                                   columnCount: 2,
                                   columnStride: 3,
                                   attributes: SparseAttributes_t(),
                                   data: buffer.baseAddress!)
        
        SparseSolve(SparseLSMR(),
                    A, B, X,
                    preconditioner)
        count = n
    }
}
```

On return, x`Values` contains the values `[1.0, 2.0, 3.0, 10.0, 20.0, 30.0]`.

## See Also

### Iterative sparse solve functions with preconditioner

- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-7vrh0.md): Solves the equation *AX = B* for matrices of single-precision values using the specified iterative method and opaque preconditioner.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-5d7vf.md): Solves the equation *AX = B* for matrices of double-precision values using the specified iterative method and preconditioner type.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-7apig.md): Solves the equation *AX = B* for matrices of single-precision values using the specified iterative method and preconditioner type.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-8nfbc.md): Solves the equation *AX = B* for matrices of double-precision values, treating *A* as an operator and using the specified iterative method.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-80ri4.md): Solves the equation *AX = B* for matrices of single-precision values, treating *A* as an operator and using the specified iterative method.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *AX = B* for matrices of double-precision values using the specified iterative method and opaque preconditioner.

## Declaration

```objectivec
static SparseIterativeStatus_t SparseSolve(SparseIterativeMethod method, SparseMatrix_Double A, DenseMatrix_Double B, DenseMatrix_Double X, SparseOpaquePreconditioner_Double Preconditioner);
```

## Parameters

- `method`: The iterative method.
- `A`: The matrix *A*.
- `B`: The matrix *B*.
- `X`: The matrix *X*.
- `Preconditioner`: The preconditioner to apply.

<a id="return-value"></a>

## Return Value

A [SparseIterativeStatus_t](sparseiterativestatus_t.md) enumeration that represents the status of the iterative solve.

<a id="Discussion"></a>

## Discussion

Use this function to solve a system of linear equations using a factored coefficient matrix. Preconditioning the coefficient matrix can reduce the number of iterations the function requires to converge the system.

The following figure shows two systems of equations where the coefficient matrix is sparse:

![A mathematical equation that has two stacked sets of three simultaneous equations on the left. Each equation has three unknowns. The same sets of simultaneous equations appear on the right as a single matrix equation, A x equals B. The single matrix equation consists of a three-by-three matrix multiplied by a three-by-two matrix that equals a three-by-two matrix. ](https://developer.apple.com/images/com.apple.accelerate/media-3743131@2x.png)

The following code solves this system by applying a diagonal scaling preconditioner and using the least squares minimum residual method:

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

let preconditioner = SparseCreatePreconditioner(SparsePreconditionerDiagScaling,
                                                A)

defer {
    SparseCleanup(A)
    SparseCleanup(preconditioner)
}

/// Create the right-hand-side matrix, _B_.
var bValues: [Double] = [30, 35, 100,
                         300, 350, 1000]
let n = bValues.count

let xValues = [Double](unsafeUninitializedCapacity: n) {
    buffer, count in
    bValues.withUnsafeMutableBufferPointer { bPtr in
        let B = DenseMatrix_Double(rowCount: 3,
                                   columnCount: 2,
                                   columnStride: 3,
                                   attributes: SparseAttributes_t(),
                                   data: bPtr.baseAddress!)
        
        let X = DenseMatrix_Double(rowCount: 3,
                                   columnCount: 2,
                                   columnStride: 3,
                                   attributes: SparseAttributes_t(),
                                   data: buffer.baseAddress!)
        
        SparseSolve(SparseLSMR(),
                    A, B, X,
                    preconditioner)
        count = n
    }
}
```

On return, x`Values` contains the values `[1.0, 2.0, 3.0, 10.0, 20.0, 30.0]`.

## See Also

### Iterative sparse solve functions with preconditioner

- [SparseSolve](sparsesolve%28__________%29-7vrh0.md): Solves the equation *AX = B* for matrices of single-precision values using the specified iterative method and opaque preconditioner.
- [SparseSolve](sparsesolve%28__________%29-5d7vf.md): Solves the equation *AX = B* for matrices of double-precision values using the specified iterative method and preconditioner type.
- [SparseSolve](sparsesolve%28__________%29-7apig.md): Solves the equation *AX = B* for matrices of single-precision values using the specified iterative method and preconditioner type.
- [SparseSolve](sparsesolve%28__________%29-8nfbc.md): Solves the equation *AX = B* for matrices of double-precision values, treating *A* as an operator and using the specified iterative method.
- [SparseSolve](sparsesolve%28__________%29-80ri4.md): Solves the equation *AX = B* for matrices of single-precision values, treating *A* as an operator and using the specified iterative method.
