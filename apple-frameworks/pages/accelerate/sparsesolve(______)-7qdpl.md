> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:_:)-7qdpl](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:)-7qdpl)

# SparseSolve(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values, in place.

## Declaration

```swift
func SparseSolve(_ Subfactor: SparseOpaqueSubfactor_Complex_Double, _ B: DenseMatrix_Complex_Double, _ X: DenseMatrix_Complex_Double)
```

## Parameters

- `Subfactor`: (Input) The subfactor to solve a system involving, as returned by `SparseCreateSubfactor()`.
- `B`: (Input) The right-hand sides `B`. If `Subfactor` is `m x n`, then `B` must have dimension `m x nrhs`, where `nrhs` is the number of right-hand sides.
- `X`: (Output) The solutions `X`. If `Subfactor` is `m x n`, and `B` is `m x nrhs`, then `X` must have dimension `n x nrhs`.

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
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-8ikjb.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place, and without any internal memory allocations.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-5xn6p.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, and without any internal memory allocations.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-6demt.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-6od6k.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-7mtyx.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, and without any internal memory allocations.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values, in place.

## Declaration

```objectivec
static void SparseSolve(SparseOpaqueSubfactor_Complex_Double Subfactor, DenseMatrix_Complex_Double B, DenseMatrix_Complex_Double X);
```

## Parameters

- `Subfactor`: (Input) The subfactor to solve a system involving, as returned by `SparseCreateSubfactor()`.
- `B`: (Input) The right-hand sides `B`. If `Subfactor` is `m x n`, then `B` must have dimension `m x nrhs`, where `nrhs` is the number of right-hand sides.
- `X`: (Output) The solutions `X`. If `Subfactor` is `m x n`, and `B` is `m x nrhs`, then `X` must have dimension `n x nrhs`.

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
- [SparseSolve](sparsesolve%28______%29-8ikjb.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place, and without any internal memory allocations.
- [SparseSolve](sparsesolve%28________%29-5xn6p.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, and without any internal memory allocations.
- [SparseSolve](sparsesolve%28________%29-6demt.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve](sparsesolve%28________%29-6od6k.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve](sparsesolve%28________%29-7mtyx.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, and without any internal memory allocations.
