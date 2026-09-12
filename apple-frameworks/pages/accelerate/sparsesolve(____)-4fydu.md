> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:)-4fydu](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:)-4fydu)

# SparseSolve(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.

## Declaration

```swift
func SparseSolve(_ Subfactor: SparseOpaqueSubfactor_Complex_Float, _ XB: DenseVector_Complex_Float)
```

## Parameters

- `Subfactor`: (Input) The subfactor to solve a system involving, as returned by `SparseCreateSubfactor()`.

## See Also

### Complex direct solving functions

- [SparseSolve(\_:\_:)](sparsesolve%28____%29-1psgz.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-5apxy.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-3482l.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
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

Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.

## Declaration

```objectivec
static void SparseSolve(SparseOpaqueSubfactor_Complex_Float Subfactor, DenseVector_Complex_Float xb);
```

## Parameters

- `Subfactor`: (Input) The subfactor to solve a system involving, as returned by `SparseCreateSubfactor()`.
- `xb`: (Input/Output) On input, the vector `b`. On return it is overwritten with the solution vector `x`. If `Subfactor` is `m x n`, then `xb` must have length `k`, where `k = max(m, n)`. If `m != n`, then only the first `min(m,n)` entries are used for input or output as approriate.

## See Also

### Complex direct solving functions

- [SparseSolve](sparsesolve%28____%29-1psgz.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve](sparsesolve%28____%29-5apxy.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve](sparsesolve%28______%29-3482l.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve](sparsesolve%28______%29-3hev5.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values.
- [SparseSolve](sparsesolve%28______%29-3qkkl.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve](sparsesolve%28______%29-76ge0.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`.
- [SparseSolve](sparsesolve%28______%29-7day5.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`.
- [SparseSolve](sparsesolve%28______%29-7ltk8.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve](sparsesolve%28______%29-85y2u.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values.
- [SparseSolve](sparsesolve%28______%29-90ojf.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values, in place.
