> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:_:_:_:)-655i9](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:_:_:)-655i9)

# SparseSolve(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solve `AX=B` using the specified iterative method for complex float values.

## Declaration

```swift
func SparseSolve(_ method: SparseIterativeMethod, _ A: SparseMatrix_Complex_Float, _ B: DenseMatrix_Complex_Float, _ X: DenseMatrix_Complex_Float, _ Preconditioner: SparsePreconditioner_t) -> SparseIterativeStatus_t
```

## Parameters

- `method`: (Input) Iterative method specification, eg return value of `SparseConjugateGradient()`.
- `A`: (Input) The matrix `A` to solve the system for. Only used for multiplication by `A` or `A^T`.
- `B`: The right-hand sides `B` to solve for. If `A` has dimension `m x n`, then `B` must have dimension `m x nrhs`, where `nrhs` is the number of right-hand sides to find solutions for.
- `X`: On entry, initial guess for solution, on return the solution. If `A` has dimension `m x n`, and `B` has dimension `m x nrhs`, then `X` must have dimension `n x nrhs`. If no good initial estimate is available, user should set the initial guess to be the zero vector.
- `Preconditioner`: Type of preconditioner to create and apply.

## See Also

### Iterative sparse solve functions for complex matrices

- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-41c6p.md): Solve `Ax=b` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-4xwsw.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-155od.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-1fw3p.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-1i6u8.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-4fvqm.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-4fvqm.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-4fvqm.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-7hdp4.md): Solve `Ax=b` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-7m9vp.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-6wjj9.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-7zp1d.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-8bndu.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-8yld7.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-4xd4z.md): Solve `AX=B` using the specified iterative method for complex double values.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solve `AX=B` using the specified iterative method for complex float values.

## Declaration

```objectivec
static SparseIterativeStatus_t SparseSolve(SparseIterativeMethod method, SparseMatrix_Complex_Float A, DenseMatrix_Complex_Float B, DenseMatrix_Complex_Float X, SparsePreconditioner_t Preconditioner);
```

## Parameters

- `method`: (Input) Iterative method specification, eg return value of `SparseConjugateGradient()`.
- `A`: (Input) The matrix `A` to solve the system for. Only used for multiplication by `A` or `A^T`.
- `B`: The right-hand sides `B` to solve for. If `A` has dimension `m x n`, then `B` must have dimension `m x nrhs`, where `nrhs` is the number of right-hand sides to find solutions for.
- `X`: On entry, initial guess for solution, on return the solution. If `A` has dimension `m x n`, and `B` has dimension `m x nrhs`, then `X` must have dimension `n x nrhs`. If no good initial estimate is available, user should set the initial guess to be the zero vector.
- `Preconditioner`: Type of preconditioner to create and apply.

## See Also

### Iterative sparse solve functions for complex matrices

- [SparseSolve](sparsesolve%28________%29-41c6p.md): Solve `Ax=b` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28________%29-4xwsw.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-155od.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-1fw3p.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-1i6u8.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-4fvqm.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28__________%29-4fvqm.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28__________%29-4fvqm.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28__________%29-7hdp4.md): Solve `Ax=b` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28__________%29-7m9vp.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28________%29-6wjj9.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28________%29-7zp1d.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28________%29-8bndu.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28________%29-8yld7.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-4xd4z.md): Solve `AX=B` using the specified iterative method for complex double values.
