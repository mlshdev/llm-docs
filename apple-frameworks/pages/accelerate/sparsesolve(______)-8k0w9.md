> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:_:)-8k0w9](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:)-8k0w9)

# SparseSolve(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Subfactor \* X = B* in place for the matrix of double-precision values *X*, without any internal memory allocations.

## Declaration

```swift
func SparseSolve(_ Subfactor: SparseOpaqueSubfactor_Double, _ XB: DenseMatrix_Double, _ workspace: UnsafeMutableRawPointer)
```

## Parameters

- `Subfactor`: The *Subfactor* in *Subfactor* *\* X = B* that [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-49d8w.md) returns.
- `XB`: On input, the matrix *B*. On return, the matrix *X* overwrites it.
- `workspace`: A workspace of size `workspaceRequiredStatic` `+ nrhs *` `workspaceRequiredPerRHS` where `nrhs` is the number of right-hand-side vectors.

## See Also

### Matrix-solving functions with user-defined workspace

- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-9kp2g.md): Solves the equation *Subfactor \* X = B* in place for the matrix of single-precision values *X*, without any internal memory allocations.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-90z8f.md): Solves the equation *Subfactor \* X = B* for the matrix of double-precision values *X*, without any internal memory allocations.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-1hhdi.md): Solves the equation *Subfactor \* X = B* for the matrix of single-precision values *X*, without any internal memory allocations.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Subfactor \* X = B* in place for the matrix of double-precision values *X*, without any internal memory allocations.

## Declaration

```objectivec
static void SparseSolve(SparseOpaqueSubfactor_Double Subfactor, DenseMatrix_Double XB, void *workspace);
```

## Parameters

- `Subfactor`: The *Subfactor* in *Subfactor* *\* X = B* that [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-49d8w.md) returns.
- `XB`: On input, the matrix *B*. On return, the matrix *X* overwrites it.
- `workspace`: A workspace of size `workspaceRequiredStatic` `+ nrhs *` `workspaceRequiredPerRHS` where `nrhs` is the number of right-hand-side vectors.

## See Also

### Matrix-solving functions with user-defined workspace

- [SparseSolve](sparsesolve%28______%29-9kp2g.md): Solves the equation *Subfactor \* X = B* in place for the matrix of single-precision values *X*, without any internal memory allocations.
- [SparseSolve](sparsesolve%28________%29-90z8f.md): Solves the equation *Subfactor \* X = B* for the matrix of double-precision values *X*, without any internal memory allocations.
- [SparseSolve](sparsesolve%28________%29-1hhdi.md): Solves the equation *Subfactor \* X = B* for the matrix of single-precision values *X*, without any internal memory allocations.
