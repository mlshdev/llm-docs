> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:_:_:)-eaq9](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:_:)-eaq9)

# SparseSolve(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Subfactor \* X = B* for the vector of double-precision values *X*, without any internal memory allocations.

## Declaration

```swift
func SparseSolve(_ Subfactor: SparseOpaqueSubfactor_Double, _ B: DenseVector_Double, _ X: DenseVector_Double, _ workspace: UnsafeMutableRawPointer)
```

## Parameters

- `Subfactor`: The *Subfactor* in *Subfactor* *\* X = B* that [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-4renf.md) returns.
- `B`: The vector *B*.
- `X`: The vector *X*.
- `workspace`: A workspace of size `workspaceRequiredStatic` `+` `workspaceRequiredPerRHS`.

## See Also

### Vector-solving functions with user-defined workspace

- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-7auge.md): Solves the equation *Subfactor \* X = B* for the vector of double-precision values *X*, in place and without any internal memory allocations.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-1xw9b.md): Solves the equation *Subfactor \* X = B* for the vector of single-precision values *X*, in place and without any internal memory allocations.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-2p6e3.md): Solves the equation *Subfactor \* X = B* for the vector of single-precision values *X*, without any internal memory allocations.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Subfactor \* X = B* for the vector of double-precision values *X*, without any internal memory allocations.

## Declaration

```objectivec
static void SparseSolve(SparseOpaqueSubfactor_Double Subfactor, DenseVector_Double b, DenseVector_Double x, void *workspace);
```

## Parameters

- `Subfactor`: The *Subfactor* in *Subfactor* *\* X = B* that [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-4renf.md) returns.
- `b`: The vector *B*.
- `x`: The vector *X*.
- `workspace`: A workspace of size `workspaceRequiredStatic` `+` `workspaceRequiredPerRHS`.

## See Also

### Vector-solving functions with user-defined workspace

- [SparseSolve](sparsesolve%28______%29-7auge.md): Solves the equation *Subfactor \* X = B* for the vector of double-precision values *X*, in place and without any internal memory allocations.
- [SparseSolve](sparsesolve%28______%29-1xw9b.md): Solves the equation *Subfactor \* X = B* for the vector of single-precision values *X*, in place and without any internal memory allocations.
- [SparseSolve](sparsesolve%28________%29-2p6e3.md): Solves the equation *Subfactor \* X = B* for the vector of single-precision values *X*, without any internal memory allocations.
