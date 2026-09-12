> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiply(_:_:_:)-7q8gs](https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:_:)-7q8gs)

# SparseMultiply(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Perform the multiply operation `Y = Subfactor * X` for complex double values.

## Declaration

```swift
func SparseMultiply(_ Subfactor: SparseOpaqueSubfactor_Complex_Double, _ X: DenseMatrix_Complex_Double, _ Y: DenseMatrix_Complex_Double)
```

## Parameters

- `Subfactor`: (Input) The subfactor to multiply by, as returned by `SparseCreateSubfactor()`.
- `X`: (Input) The right-hand side vectors `X`. If `Subfactor` is `m x n`, then `X` must have dimension `n x nrhs`, where nrhs is the number of right-hand side vectors.
- `Y`: (Output) The result vectors `Y`. If `Subfactor` is `m x n`, and `X` is `m x nrhs`, then `Y` must have dimension `m x nrhs`.

## See Also

### Subfactor and dense matrix multiplication

- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-88trz.md): Performs the multiply operation *Y* *= Subfactor \* X,* \__in place on a dense matrix of double-precision values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-3r4mf.md): Performs the multiply operation *Y*\_ \_*= Subfactor \* X*, in place on a dense matrix of single-precision values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-4nosz.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of double-precision values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-88stx.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of single-precision values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-34fp6.md): Perform the multiply operation `Y = Subfactor * X` in place for complex float values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-3dwed.md): Perform the multiply operation `y = Subfactor * x` for complex floatr values, in place.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.

# SparseMultiply (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Perform the multiply operation `Y = Subfactor * X` for complex double values.

## Declaration

```objectivec
static void SparseMultiply(SparseOpaqueSubfactor_Complex_Double Subfactor, DenseMatrix_Complex_Double X, DenseMatrix_Complex_Double Y);
```

## Parameters

- `Subfactor`: (Input) The subfactor to multiply by, as returned by `SparseCreateSubfactor()`.
- `X`: (Input) The right-hand side vectors `X`. If `Subfactor` is `m x n`, then `X` must have dimension `n x nrhs`, where nrhs is the number of right-hand side vectors.
- `Y`: (Output) The result vectors `Y`. If `Subfactor` is `m x n`, and `X` is `m x nrhs`, then `Y` must have dimension `m x nrhs`.

## See Also

### Subfactor and dense matrix multiplication

- [SparseMultiply](sparsemultiply%28____%29-88trz.md): Performs the multiply operation *Y* *= Subfactor \* X,* \__in place on a dense matrix of double-precision values.
- [SparseMultiply](sparsemultiply%28____%29-3r4mf.md): Performs the multiply operation *Y*\_ \_*= Subfactor \* X*, in place on a dense matrix of single-precision values.
- [SparseMultiply](sparsemultiply%28______%29-4nosz.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of double-precision values.
- [SparseMultiply](sparsemultiply%28______%29-88stx.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of single-precision values.
- [SparseMultiply](sparsemultiply%28____%29-34fp6.md): Perform the multiply operation `Y = Subfactor * X` in place for complex float values.
- [SparseMultiply](sparsemultiply%28____%29-3dwed.md): Perform the multiply operation `y = Subfactor * x` for complex floatr values, in place.
- [SparseMultiply](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.
