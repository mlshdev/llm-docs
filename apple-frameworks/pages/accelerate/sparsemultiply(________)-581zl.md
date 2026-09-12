> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiply(_:_:_:_:)-581zl](https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:_:_:)-581zl)

# SparseMultiply(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Perform the multiply operation `Y = Subfactor * X` for complex float values.

## Declaration

```swift
func SparseMultiply(_ Subfactor: SparseOpaqueSubfactor_Complex_Float, _ X: DenseMatrix_Complex_Float, _ Y: DenseMatrix_Complex_Float, _ workspace: UnsafeMutableRawPointer)
```

## Parameters

- `Subfactor`: (Input) The subfactor to multiply by, as returned by `SparseCreateSubfactor()`.
- `X`: (Input) The right-hand side vectors `X`. If `Subfactor` is `m x n`, then `X` must have dimension `n x nrhs`, where nrhs is the number of right-hand side vectors.
- `Y`: (Output) The result vectors `Y`. If `Subfactor` is `m x n`, and `X` is `m x nrhs`, then `Y` must have dimension `m x nrhs`.
- `workspace`: (Scratch) A workspace of size `Subfactor.workspaceRequiredStatic + nrhs * Subfactor.workspaceRequiredPerRHS * 2`. This memory must be 16-byte aligned (any allocation returned by `malloc()` has this property).

## See Also

### Subfactor and dense matrix multiplication with user-defined workspace

- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-20xvs.md): Performs the multiply operation *Y* *= Subfactor \* X*, in place on a dense matrix of double-precision values and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6thvw.md): Performs the multiply operation *Y* *= Subfactor \* X*, in place on a dense matrix of single-precision values and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-2osop.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of double-precision values and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-9v8hk.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of single-precision values and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6strd.md): Perform the multiply operation `Y = Subfactor * X `for complex float values, in place.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-7mdi8.md): Perform the multiply operation `Y = Subfactor * X `for complex double values, in place.

# SparseMultiply (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Perform the multiply operation `Y = Subfactor * X` for complex float values.

## Declaration

```objectivec
static void SparseMultiply(SparseOpaqueSubfactor_Complex_Float Subfactor, DenseMatrix_Complex_Float X, DenseMatrix_Complex_Float Y, void *workspace);
```

## Parameters

- `Subfactor`: (Input) The subfactor to multiply by, as returned by `SparseCreateSubfactor()`.
- `X`: (Input) The right-hand side vectors `X`. If `Subfactor` is `m x n`, then `X` must have dimension `n x nrhs`, where nrhs is the number of right-hand side vectors.
- `Y`: (Output) The result vectors `Y`. If `Subfactor` is `m x n`, and `X` is `m x nrhs`, then `Y` must have dimension `m x nrhs`.
- `workspace`: (Scratch) A workspace of size `Subfactor.workspaceRequiredStatic + nrhs * Subfactor.workspaceRequiredPerRHS * 2`. This memory must be 16-byte aligned (any allocation returned by `malloc()` has this property).

## See Also

### Subfactor and dense matrix multiplication with user-defined workspace

- [SparseMultiply](sparsemultiply%28______%29-20xvs.md): Performs the multiply operation *Y* *= Subfactor \* X*, in place on a dense matrix of double-precision values and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28______%29-6thvw.md): Performs the multiply operation *Y* *= Subfactor \* X*, in place on a dense matrix of single-precision values and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28________%29-2osop.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of double-precision values and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28________%29-9v8hk.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of single-precision values and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28______%29-6strd.md): Perform the multiply operation `Y = Subfactor * X `for complex float values, in place.
- [SparseMultiply](sparsemultiply%28______%29-7mdi8.md): Perform the multiply operation `Y = Subfactor * X `for complex double values, in place.
