> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:)-879na](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:)-879na)

# SparseSolve(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solve the equation `Subfactor * X = B` for the matrix `X` of complex float values, in place.

## Declaration

```swift
func SparseSolve(_ Subfactor: SparseOpaqueSubfactor_Complex_Float, _ XB: DenseMatrix_Complex_Float)
```

## Parameters

- `Subfactor`: (Input) The subfactor to solve a system involving, as returned by `SparseCreateSubfactor()`.
- `XB`: (Input/Output) On input, the matrix `B`. On return it is overwritten with the matrix `X`. If `Subfactor` is `m x n`, then `XB` must have dimension `k x nrhs`, where `k = max(m, n)` and `nrhs` is the number of right-hand sides. If `m != n`, then only the first `min(m,n)` entries are used for input or output as approriate.

## See Also

### Complex subfactor-solving functions

- [SparseSolve(\_:\_:)](sparsesolve%28____%29-3x0vj.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-78cl0.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-2qlwo.md): Solve the equation `Subfactor * X` = B for the matrix `X` of complex float values in place.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-5stp5.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-6afcf.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex float values.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-9ui81.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values, in place.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-9xxqn.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solve the equation `Subfactor * X = B` for the matrix `X` of complex float values, in place.

## Declaration

```objectivec
static void SparseSolve(SparseOpaqueSubfactor_Complex_Float Subfactor, DenseMatrix_Complex_Float XB);
```

## Parameters

- `Subfactor`: (Input) The subfactor to solve a system involving, as returned by `SparseCreateSubfactor()`.
- `XB`: (Input/Output) On input, the matrix `B`. On return it is overwritten with the matrix `X`. If `Subfactor` is `m x n`, then `XB` must have dimension `k x nrhs`, where `k = max(m, n)` and `nrhs` is the number of right-hand sides. If `m != n`, then only the first `min(m,n)` entries are used for input or output as approriate.

## See Also

### Complex subfactor-solving functions

- [SparseSolve](sparsesolve%28____%29-3x0vj.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values, in place.
- [SparseSolve](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve](sparsesolve%28____%29-78cl0.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values, in place.
- [SparseSolve](sparsesolve%28______%29-2qlwo.md): Solve the equation `Subfactor * X` = B for the matrix `X` of complex float values in place.
- [SparseSolve](sparsesolve%28________%29-5stp5.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve](sparsesolve%28________%29-6afcf.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex float values.
- [SparseSolve](sparsesolve%28________%29-9ui81.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values, in place.
- [SparseSolve](sparsesolve%28________%29-9xxqn.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values.
