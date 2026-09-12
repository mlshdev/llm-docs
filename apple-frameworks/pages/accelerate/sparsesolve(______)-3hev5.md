> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:_:)-3hev5](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:)-3hev5)

# SparseSolve(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solve the equation `Subfactor * x = b` for the vector `x` of complex float values.

## Declaration

```swift
func SparseSolve(_ Subfactor: SparseOpaqueSubfactor_Complex_Float, _ B: DenseVector_Complex_Float, _ X: DenseVector_Complex_Float)
```

## Parameters

- `Subfactor`: (Input) The subfactor to solve a system involving, as returned by `SparseCreateSubfactor()`).

## See Also

### Complex direct solving functions

- [SparseSolve(\_:\_:)](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-1psgz.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-5apxy.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-3482l.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
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

Solve the equation `Subfactor * x = b` for the vector `x` of complex float values.

## Declaration

```objectivec
static void SparseSolve(SparseOpaqueSubfactor_Complex_Float Subfactor, DenseVector_Complex_Float b, DenseVector_Complex_Float x);
```

## Parameters

- `Subfactor`: (Input) The subfactor to solve a system involving, as returned by `SparseCreateSubfactor()`).
- `b`: (Input) The right-hand side `b`. If `Subfactor` is `m x n`, then `b` must have length `m`.
- `x`: (Output) The solution `x`. If `Subfactor` is `m x n`, then `x` must have length `n`.

## See Also

### Complex direct solving functions

- [SparseSolve](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve](sparsesolve%28____%29-1psgz.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve](sparsesolve%28____%29-5apxy.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve](sparsesolve%28______%29-3482l.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve](sparsesolve%28______%29-3qkkl.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve](sparsesolve%28______%29-76ge0.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`.
- [SparseSolve](sparsesolve%28______%29-7day5.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`.
- [SparseSolve](sparsesolve%28______%29-7ltk8.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve](sparsesolve%28______%29-85y2u.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values.
- [SparseSolve](sparsesolve%28______%29-90ojf.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values, in place.
