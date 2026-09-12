> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiply(_:_:_:_:)-2osop](https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:_:_:)-2osop)

# SparseMultiply(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of double-precision values and without any internal memory allocations.

## Declaration

```swift
func SparseMultiply(_ Subfactor: SparseOpaqueSubfactor_Double, _ X: DenseMatrix_Double, _ Y: DenseMatrix_Double, _ workspace: UnsafeMutableRawPointer)
```

## Parameters

- `Subfactor`: The subfactor to multiply by, which [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-49d8w.md) returns.
- `X`: The matrix *X*.
- `Y`: The matrix *Y*.
- `workspace`: A workspace of size `workspaceRequiredStatic` `+ nrhs *` `workspaceRequiredPerRHS` where `nrhs` is the number of right-hand-side vectors.

## See Also

### Subfactor and dense matrix multiplication with user-defined workspace

- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-20xvs.md): Performs the multiply operation *Y* *= Subfactor \* X*, in place on a dense matrix of double-precision values and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6thvw.md): Performs the multiply operation *Y* *= Subfactor \* X*, in place on a dense matrix of single-precision values and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-9v8hk.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of single-precision values and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6strd.md): Perform the multiply operation `Y = Subfactor * X `for complex float values, in place.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-7mdi8.md): Perform the multiply operation `Y = Subfactor * X `for complex double values, in place.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-581zl.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.

# SparseMultiply (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of double-precision values and without any internal memory allocations.

## Declaration

```objectivec
static void SparseMultiply(SparseOpaqueSubfactor_Double Subfactor, DenseMatrix_Double X, DenseMatrix_Double Y, void *workspace);
```

## Parameters

- `Subfactor`: The subfactor to multiply by, which [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-49d8w.md) returns.
- `X`: The matrix *X*.
- `Y`: The matrix *Y*.
- `workspace`: A workspace of size `workspaceRequiredStatic` `+ nrhs *` `workspaceRequiredPerRHS` where `nrhs` is the number of right-hand-side vectors.

## See Also

### Subfactor and dense matrix multiplication with user-defined workspace

- [SparseMultiply](sparsemultiply%28______%29-20xvs.md): Performs the multiply operation *Y* *= Subfactor \* X*, in place on a dense matrix of double-precision values and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28______%29-6thvw.md): Performs the multiply operation *Y* *= Subfactor \* X*, in place on a dense matrix of single-precision values and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28________%29-9v8hk.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of single-precision values and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28______%29-6strd.md): Perform the multiply operation `Y = Subfactor * X `for complex float values, in place.
- [SparseMultiply](sparsemultiply%28______%29-7mdi8.md): Perform the multiply operation `Y = Subfactor * X `for complex double values, in place.
- [SparseMultiply](sparsemultiply%28________%29-581zl.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.
