> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:_:_:_:)-1ogxn](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:_:_:)-1ogxn)

# SparseSolve(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solve `Ax=b` using the specified iterative method for complex double values.

## Declaration

```swift
func SparseSolve(_ method: SparseIterativeMethod, _ ApplyOperator: @escaping (Bool, CBLAS_TRANSPOSE, DenseVector_Complex_Double, DenseVector_Complex_Double) -> Void, _ b: DenseVector_Complex_Double, _ x: DenseVector_Complex_Double, _ Preconditioner: SparseOpaquePreconditioner_Complex_Double) -> SparseIterativeStatus_t
```

## Parameters

- `method`: (Input) Iterative method specification, eg return value of `SparseConjugateGradient()`.
- `ApplyOperator`: `ApplyOperator(accumulate, trans, X, Y)` should perform the operation `Y = op(A)X` if `accumulate` is `false`, or `Y += op(A)X` if `accumulate` is `true`.

  - **`accumulate`**: (input) Indicates whether to perform `Y += op(A)X` (if true) or `Y = op(A)X` (if false).
  - **`trans`**: (input) Indicates whether `op(A)` is the application of `A` (`trans=CblasNoTrans`) or `A^T` (`trans=CblasTrans`).
  - **`x`**: The vector to multiply.
  - **`y`**: The vector in which to accumulate or store the result.
- `b`: The right-hand side `b` to solve for. If `a` has dimension `m x n`, then `b` must have length `m`.
- `x`: On entry, initial guess for solution, on return the solution. If `A` has dimension `m x n`, then `x` must have length `n`. If no good initial estimate is available, user should set the initial guess to be the zero vector.
- `Preconditioner`: (Input) The preconditioner to use.

## See Also

### Iterative sparse solve functions for complex matrices

- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-2cenj.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-35kl2.md): Solve `Ax=b` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-2bm9r.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-2ygeh.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-7yfqx.md): Solve `Ax=b` using the specified iterative method for complex double values.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solve `Ax=b` using the specified iterative method for complex double values.

## Declaration

```objectivec
static SparseIterativeStatus_t SparseSolve(SparseIterativeMethod method, void (^ApplyOperator)(bool accumulate, enum CBLAS_TRANSPOSE trans, DenseVector_Complex_Double x, DenseVector_Complex_Double y), DenseVector_Complex_Double b, DenseVector_Complex_Double x, SparseOpaquePreconditioner_Complex_Double Preconditioner);
```

## Parameters

- `method`: (Input) Iterative method specification, eg return value of `SparseConjugateGradient()`.
- `ApplyOperator`: `ApplyOperator(accumulate, trans, X, Y)` should perform the operation `Y = op(A)X` if `accumulate` is `false`, or `Y += op(A)X` if `accumulate` is `true`.

  - **`accumulate`**: (input) Indicates whether to perform `Y += op(A)X` (if true) or `Y = op(A)X` (if false).
  - **`trans`**: (input) Indicates whether `op(A)` is the application of `A` (`trans=CblasNoTrans`) or `A^T` (`trans=CblasTrans`).
  - **`x`**: The vector to multiply.
  - **`y`**: The vector in which to accumulate or store the result.
- `b`: The right-hand side `b` to solve for. If `a` has dimension `m x n`, then `b` must have length `m`.
- `x`: On entry, initial guess for solution, on return the solution. If `A` has dimension `m x n`, then `x` must have length `n`. If no good initial estimate is available, user should set the initial guess to be the zero vector.
- `Preconditioner`: (Input) The preconditioner to use.

## See Also

### Iterative sparse solve functions for complex matrices

- [SparseSolve](sparsesolve%28________%29-2cenj.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28________%29-35kl2.md): Solve `Ax=b` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28__________%29-2bm9r.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-2ygeh.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-7yfqx.md): Solve `Ax=b` using the specified iterative method for complex double values.
