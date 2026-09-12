> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiply(_:_:_:)-4nosz](https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:_:)-4nosz)

# SparseMultiply(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of double-precision values.

## Declaration

```swift
func SparseMultiply(_ Subfactor: SparseOpaqueSubfactor_Double, _ X: DenseMatrix_Double, _ Y: DenseMatrix_Double)
```

## Parameters

- `Subfactor`: The subfactor to multiply by, which [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-49d8w.md) returns.
- `X`: The matrix *X*.
- `Y`: The matrix *Y*.

## See Also

### Subfactor and dense matrix multiplication

- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-88trz.md): Performs the multiply operation *Y* *= Subfactor \* X,* \__in place on a dense matrix of double-precision values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-3r4mf.md): Performs the multiply operation *Y*\_ \_*= Subfactor \* X*, in place on a dense matrix of single-precision values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-88stx.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of single-precision values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-34fp6.md): Perform the multiply operation `Y = Subfactor * X` in place for complex float values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-3dwed.md): Perform the multiply operation `y = Subfactor * x` for complex floatr values, in place.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-7q8gs.md): Perform the multiply operation `Y = Subfactor * X` for complex double values.

# SparseMultiply (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of double-precision values.

## Declaration

```objectivec
static void SparseMultiply(SparseOpaqueSubfactor_Double Subfactor, DenseMatrix_Double X, DenseMatrix_Double Y);
```

## Parameters

- `Subfactor`: The subfactor to multiply by, which [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-49d8w.md) returns.
- `X`: The matrix *X*.
- `Y`: The matrix *Y*.

## See Also

### Subfactor and dense matrix multiplication

- [SparseMultiply](sparsemultiply%28____%29-88trz.md): Performs the multiply operation *Y* *= Subfactor \* X,* \__in place on a dense matrix of double-precision values.
- [SparseMultiply](sparsemultiply%28____%29-3r4mf.md): Performs the multiply operation *Y*\_ \_*= Subfactor \* X*, in place on a dense matrix of single-precision values.
- [SparseMultiply](sparsemultiply%28______%29-88stx.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of single-precision values.
- [SparseMultiply](sparsemultiply%28____%29-34fp6.md): Perform the multiply operation `Y = Subfactor * X` in place for complex float values.
- [SparseMultiply](sparsemultiply%28____%29-3dwed.md): Perform the multiply operation `y = Subfactor * x` for complex floatr values, in place.
- [SparseMultiply](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.
- [SparseMultiply](sparsemultiply%28______%29-7q8gs.md): Perform the multiply operation `Y = Subfactor * X` for complex double values.
