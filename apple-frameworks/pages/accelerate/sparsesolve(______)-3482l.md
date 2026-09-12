> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:_:)-3482l](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:)-3482l)

# SparseSolve(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.

## Declaration

```swift
func SparseSolve(_ Factored: SparseOpaqueFactorization_Complex_Float, _ xb: DenseVector_Complex_Float, _ workspace: UnsafeMutableRawPointer)
```

## Parameters

- `Factored`: A factorization of `A`.
- `xb`: On entry, the right-hand side `b`. On return, the solution vector `x`. If `A` has dimension `m x n`, then `xb` must have length `k`, where `k=max(m,n)`.
- `workspace`: Scratch space of size `Factored.solveWorkspaceRequiredStatic + 1*Factored.solveWorkspaceRequiredPerRHS * 2`. This memory must be 16-byte aligned (any allocation returned by `malloc()` has this property).

<a id="discussion"></a>

## Discussion

If the factorization is `A=QR` and the system is underdetermined, the solution of minimum norm `|| x ||_2` is returned. If the factorization is `A=QR` and the system is overdetermined, the least squares solution `arg min_x || Ax - b ||_2` is returned. In the case of a factorization of `type=SparseCholeskyAtA`, the factorization is in fact of `A^T A`, so the solution returned is for the system `A^TAx=b`.

## See Also

### Complex direct solving functions

- [SparseSolve(\_:\_:)](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-1psgz.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-5apxy.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-3hev5.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-3qkkl.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-76ge0.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-7day5.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-7ltk8.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-85y2u.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-90ojf.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values, in place.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.

## Declaration

```objectivec
static void SparseSolve(SparseOpaqueFactorization_Complex_Float Factored, DenseVector_Complex_Float xb, void *workspace);
```

## Parameters

- `Factored`: A factorization of `A`.
- `xb`: On entry, the right-hand side `b`. On return, the solution vector `x`. If `A` has dimension `m x n`, then `xb` must have length `k`, where `k=max(m,n)`.
- `workspace`: Scratch space of size `Factored.solveWorkspaceRequiredStatic + 1*Factored.solveWorkspaceRequiredPerRHS * 2`. This memory must be 16-byte aligned (any allocation returned by `malloc()` has this property).

<a id="discussion"></a>

## Discussion

If the factorization is `A=QR` and the system is underdetermined, the solution of minimum norm `|| x ||_2` is returned. If the factorization is `A=QR` and the system is overdetermined, the least squares solution `arg min_x || Ax - b ||_2` is returned. In the case of a factorization of `type=SparseCholeskyAtA`, the factorization is in fact of `A^T A`, so the solution returned is for the system `A^TAx=b`.

## See Also

### Complex direct solving functions

- [SparseSolve](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve](sparsesolve%28____%29-1psgz.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve](sparsesolve%28____%29-5apxy.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve](sparsesolve%28______%29-3hev5.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values.
- [SparseSolve](sparsesolve%28______%29-3qkkl.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve](sparsesolve%28______%29-76ge0.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`.
- [SparseSolve](sparsesolve%28______%29-7day5.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`.
- [SparseSolve](sparsesolve%28______%29-7ltk8.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve](sparsesolve%28______%29-85y2u.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values.
- [SparseSolve](sparsesolve%28______%29-90ojf.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values, in place.
