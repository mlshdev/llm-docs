> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:)-2oyl1](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:)-2oyl1)

# SparseSolve(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Subfactor \* X = B* in place for the matrix of double-precision values *X*.

## Declaration

```swift
func SparseSolve(_ Subfactor: SparseOpaqueSubfactor_Double, _ XB: DenseMatrix_Double)
```

## Parameters

- `Subfactor`: The *Subfactor* in *Subfactor* *\* X = B* that [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-49d8w.md) returns.
- `XB`: On input, the matrix *B*. On return, the matrix *X* overwrites it.

## See Also

### Matrix-solving functions

- [SparseSolve(\_:\_:)](sparsesolve%28____%29-2tyws.md): Solves the equation *Subfactor \* X = B* in place for the matrix of single-precision values *X*.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-1lads.md): Solves the equation *Subfactor \* X = B* for the matrix of double-precision values *X*.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-76z89.md): Solves the equation *Subfactor \* X = B* for the matrix of single-precision values *X*.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Subfactor \* X = B* in place for the matrix of double-precision values *X*.

## Declaration

```objectivec
static void SparseSolve(SparseOpaqueSubfactor_Double Subfactor, DenseMatrix_Double XB);
```

## Parameters

- `Subfactor`: The *Subfactor* in *Subfactor* *\* X = B* that [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-49d8w.md) returns.
- `XB`: On input, the matrix *B*. On return, the matrix *X* overwrites it.

## See Also

### Matrix-solving functions

- [SparseSolve](sparsesolve%28____%29-2tyws.md): Solves the equation *Subfactor \* X = B* in place for the matrix of single-precision values *X*.
- [SparseSolve](sparsesolve%28______%29-1lads.md): Solves the equation *Subfactor \* X = B* for the matrix of double-precision values *X*.
- [SparseSolve](sparsesolve%28______%29-76z89.md): Solves the equation *Subfactor \* X = B* for the matrix of single-precision values *X*.
