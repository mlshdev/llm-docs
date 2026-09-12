> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:_:_:)-6od6k](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:_:)-6od6k)

# SparseSolve(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.

## Declaration

```swift
func SparseSolve(_ Factored: SparseOpaqueFactorization_Complex_Float, _ b: DenseVector_Complex_Float, _ x: DenseVector_Complex_Float, _ workspace: UnsafeMutableRawPointer)
```

## Parameters

- `Factored`: A factorization of `A`.
- `b`: The right-hand side `b` to solve for. If `A` has dimension `m x n`, then `b` must have length `m`.
- `x`: Vector in which to return solution. If `A` has dimension `m x n`, then `x` must have length `n`.
- `workspace`: Scratch space of size `Factored.solveWorkspaceRequiredStatic + 1*Factored.solveWorkspaceRequiredPerRHS * 2`. This memory must be 16-byte aligned (any allocation returned by malloc() has this property).

<a id="discussion"></a>

## Discussion

If the factorization is `A=QR` and the system is underdetermined, the solution of minimum norm `|| x ||_2` is returned. If the factorization is `A=QR` and the system is overdetermined, the least squares solution `arg min_x || Ax - b ||_2` is returned. In the case of a factorization of `type=SparseCholeskyAtA`, the factorization is in fact of `A^T A`, so the solution returned is for the system `A^TAx=b`.

## See Also

### Complex matrix solving functions

- [SparseSolve(\_:\_:)](sparsesolve%28____%29-31yj7.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-3x0vj.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-4j17a.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-2qlwo.md): Solve the equation `Subfactor * X` = B for the matrix `X` of complex float values in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-2rk1c.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of A`,` in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-34okt.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place, and without any internal memory allocations.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-48njk.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of A`,` in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-6pudz.md): Solve the equation `Subfactor * X` = B for the matrix `X` of complex double values in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-7krer.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex float values, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-7qdpl.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-8ikjb.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place, and without any internal memory allocations.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-5xn6p.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, and without any internal memory allocations.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-6demt.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-7mtyx.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, and without any internal memory allocations.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.

## Declaration

```objectivec
static void SparseSolve(SparseOpaqueFactorization_Complex_Float Factored, DenseVector_Complex_Float x, DenseVector_Complex_Float b, void *workspace);
```

## Parameters

- `Factored`: A factorization of `A`.
- `x`: Vector in which to return solution. If `A` has dimension `m x n`, then `x` must have length `n`.
- `b`: The right-hand side `b` to solve for. If `A` has dimension `m x n`, then `b` must have length `m`.
- `workspace`: Scratch space of size `Factored.solveWorkspaceRequiredStatic + 1*Factored.solveWorkspaceRequiredPerRHS * 2`. This memory must be 16-byte aligned (any allocation returned by malloc() has this property).

<a id="discussion"></a>

## Discussion

If the factorization is `A=QR` and the system is underdetermined, the solution of minimum norm `|| x ||_2` is returned. If the factorization is `A=QR` and the system is overdetermined, the least squares solution `arg min_x || Ax - b ||_2` is returned. In the case of a factorization of `type=SparseCholeskyAtA`, the factorization is in fact of `A^T A`, so the solution returned is for the system `A^TAx=b`.

## See Also

### Complex matrix solving functions

- [SparseSolve](sparsesolve%28____%29-31yj7.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve](sparsesolve%28____%29-3x0vj.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values, in place.
- [SparseSolve](sparsesolve%28____%29-4j17a.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve](sparsesolve%28______%29-2qlwo.md): Solve the equation `Subfactor * X` = B for the matrix `X` of complex float values in place.
- [SparseSolve](sparsesolve%28______%29-2rk1c.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of A`,` in place.
- [SparseSolve](sparsesolve%28______%29-34okt.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place, and without any internal memory allocations.
- [SparseSolve](sparsesolve%28______%29-48njk.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of A`,` in place.
- [SparseSolve](sparsesolve%28______%29-6pudz.md): Solve the equation `Subfactor * X` = B for the matrix `X` of complex double values in place.
- [SparseSolve](sparsesolve%28______%29-7krer.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex float values, in place.
- [SparseSolve](sparsesolve%28______%29-7qdpl.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values, in place.
- [SparseSolve](sparsesolve%28______%29-8ikjb.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place, and without any internal memory allocations.
- [SparseSolve](sparsesolve%28________%29-5xn6p.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, and without any internal memory allocations.
- [SparseSolve](sparsesolve%28________%29-6demt.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve](sparsesolve%28________%29-7mtyx.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, and without any internal memory allocations.
