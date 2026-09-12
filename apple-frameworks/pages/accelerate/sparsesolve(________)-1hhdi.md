> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:_:_:)-1hhdi](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:_:)-1hhdi)

# SparseSolve(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Subfactor \* X = B* for the matrix of single-precision values *X*, without any internal memory allocations.

## Declaration

```swift
func SparseSolve(_ Subfactor: SparseOpaqueSubfactor_Float, _ B: DenseMatrix_Float, _ X: DenseMatrix_Float, _ workspace: UnsafeMutableRawPointer)
```

## Parameters

- `Subfactor`: The *Subfactor* in *Subfactor* *\* X = B* that [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-4renf.md) returns.
- `B`: The matrix *B*.
- `X`: The matrix *X*.
- `workspace`: A workspace of size `workspaceRequiredStatic` `+ nrhs *` `workspaceRequiredPerRHS` where `nrhs` is the number of right-hand-side vectors.

## See Also

### Matrix-solving functions with user-defined workspace

- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-8k0w9.md): Solves the equation *Subfactor \* X = B* in place for the matrix of double-precision values *X*, without any internal memory allocations.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-9kp2g.md): Solves the equation *Subfactor \* X = B* in place for the matrix of single-precision values *X*, without any internal memory allocations.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-90z8f.md): Solves the equation *Subfactor \* X = B* for the matrix of double-precision values *X*, without any internal memory allocations.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Subfactor \* X = B* for the matrix of single-precision values *X*, without any internal memory allocations.

## Declaration

```objectivec
static void SparseSolve(SparseOpaqueSubfactor_Float Subfactor, DenseMatrix_Float B, DenseMatrix_Float X, void *workspace);
```

## Parameters

- `Subfactor`: The *Subfactor* in *Subfactor* *\* X = B* that [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-4renf.md) returns.
- `B`: The matrix *B*.
- `X`: The matrix *X*.
- `workspace`: A workspace of size `workspaceRequiredStatic` `+ nrhs *` `workspaceRequiredPerRHS` where `nrhs` is the number of right-hand-side vectors.

## See Also

### Matrix-solving functions with user-defined workspace

- [SparseSolve](sparsesolve%28______%29-8k0w9.md): Solves the equation *Subfactor \* X = B* in place for the matrix of double-precision values *X*, without any internal memory allocations.
- [SparseSolve](sparsesolve%28______%29-9kp2g.md): Solves the equation *Subfactor \* X = B* in place for the matrix of single-precision values *X*, without any internal memory allocations.
- [SparseSolve](sparsesolve%28________%29-90z8f.md): Solves the equation *Subfactor \* X = B* for the matrix of double-precision values *X*, without any internal memory allocations.
