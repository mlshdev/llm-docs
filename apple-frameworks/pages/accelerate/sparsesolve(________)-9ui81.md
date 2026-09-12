> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:_:_:)-9ui81](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:_:)-9ui81)

# SparseSolve(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solve the equation `Subfactor * x = b` for the vector `x` of complex double values, in place.

## Declaration

```swift
func SparseSolve(_ Subfactor: SparseOpaqueSubfactor_Complex_Double, _ B: DenseVector_Complex_Double, _ X: DenseVector_Complex_Double, _ workspace: UnsafeMutableRawPointer)
```

## Parameters

- `Subfactor`: (Input) The subfactor to solve a system involving, as returned by `SparseCreateSubfactor()`.
- `workspace`: (Scratch) A workspace of size `Subfactor.workspaceRequiredStatic + 1*Subfactor.workspaceRequiredPerRHS * 2`. This memory must be 16-byte aligned (any allocation returned by `malloc()` has this property).

## See Also

### Complex subfactor-solving functions

- [SparseSolve(\_:\_:)](sparsesolve%28____%29-3x0vj.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-78cl0.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-879na.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex float values, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-2qlwo.md): Solve the equation `Subfactor * X` = B for the matrix `X` of complex float values in place.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-5stp5.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-6afcf.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex float values.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-9xxqn.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Solve the equation `Subfactor * x = b` for the vector `x` of complex double values, in place.

## Declaration

```objectivec
static void SparseSolve(SparseOpaqueSubfactor_Complex_Double Subfactor, DenseVector_Complex_Double b, DenseVector_Complex_Double x, void *workspace);
```

## Parameters

- `Subfactor`: (Input) The subfactor to solve a system involving, as returned by `SparseCreateSubfactor()`.
- `b`: (Input) The right-hand side `b`. If `Subfactor` is `m x n`, then `b` must have length `m`.
- `x`: (Output) The solution `x`. If `Subfactor` is `m x n`, then x must have length n.
- `workspace`: (Scratch) A workspace of size `Subfactor.workspaceRequiredStatic + 1*Subfactor.workspaceRequiredPerRHS * 2`. This memory must be 16-byte aligned (any allocation returned by `malloc()` has this property).

## See Also

### Complex subfactor-solving functions

- [SparseSolve](sparsesolve%28____%29-3x0vj.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values, in place.
- [SparseSolve](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve](sparsesolve%28____%29-78cl0.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values, in place.
- [SparseSolve](sparsesolve%28____%29-879na.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex float values, in place.
- [SparseSolve](sparsesolve%28______%29-2qlwo.md): Solve the equation `Subfactor * X` = B for the matrix `X` of complex float values in place.
- [SparseSolve](sparsesolve%28________%29-5stp5.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve](sparsesolve%28________%29-6afcf.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex float values.
- [SparseSolve](sparsesolve%28________%29-9xxqn.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values.
