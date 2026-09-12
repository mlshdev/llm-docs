> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiply(_:_:)-3dwed](https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:)-3dwed)

# SparseMultiply(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Perform the multiply operation `y = Subfactor * x` for complex floatr values, in place.

## Declaration

```swift
func SparseMultiply(_ Subfactor: SparseOpaqueSubfactor_Complex_Float, _ XY: DenseVector_Complex_Float)
```

## Parameters

- `Subfactor`: (Input) The subfactor to multiply by, as returned by `SparseCreateSubfactor()`.

## See Also

### Subfactor and dense matrix multiplication

- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-88trz.md): Performs the multiply operation *Y* *= Subfactor \* X,* \__in place on a dense matrix of double-precision values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-3r4mf.md): Performs the multiply operation *Y*\_ \_*= Subfactor \* X*, in place on a dense matrix of single-precision values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-4nosz.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of double-precision values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-88stx.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of single-precision values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-34fp6.md): Perform the multiply operation `Y = Subfactor * X` in place for complex float values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-7q8gs.md): Perform the multiply operation `Y = Subfactor * X` for complex double values.

# SparseMultiply (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Perform the multiply operation `y = Subfactor * x` for complex floatr values, in place.

## Declaration

```objectivec
static void SparseMultiply(SparseOpaqueSubfactor_Complex_Float Subfactor, DenseVector_Complex_Float xy);
```

## Parameters

- `Subfactor`: (Input) The subfactor to multiply by, as returned by `SparseCreateSubfactor()`.
- `xy`: (Input/Output) On input, the vector `x`. On return it is overwritten with the vector `y`. If `Subfactor` is `m x n`, then `xb` must have length `k`, where `k = max(m, n)`. If `m != n`, then only the first `min(m,n)` entries are used for input or output as approriate.

## See Also

### Subfactor and dense matrix multiplication

- [SparseMultiply](sparsemultiply%28____%29-88trz.md): Performs the multiply operation *Y* *= Subfactor \* X,* \__in place on a dense matrix of double-precision values.
- [SparseMultiply](sparsemultiply%28____%29-3r4mf.md): Performs the multiply operation *Y*\_ \_*= Subfactor \* X*, in place on a dense matrix of single-precision values.
- [SparseMultiply](sparsemultiply%28______%29-4nosz.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of double-precision values.
- [SparseMultiply](sparsemultiply%28______%29-88stx.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of single-precision values.
- [SparseMultiply](sparsemultiply%28____%29-34fp6.md): Perform the multiply operation `Y = Subfactor * X` in place for complex float values.
- [SparseMultiply](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.
- [SparseMultiply](sparsemultiply%28______%29-7q8gs.md): Perform the multiply operation `Y = Subfactor * X` for complex double values.
