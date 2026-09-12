> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiply-65jst](https://developer.apple.com/documentation/accelerate/sparsemultiply-65jst)

# SparseMultiply

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs the multiplication `Y = alpha * AX` for complex double values

## Declaration

```objectivec
static void SparseMultiply(__SPARSE_double_complex alpha, SparseMatrix_Complex_Double A, DenseMatrix_Complex_Double X, DenseMatrix_Complex_Double Y);
```

## Parameters

- `alpha`: (Input) scale to apply to the result.
- `A`: (Input) sparse matrix.
- `X`: (Input) dense matrix. Inner dimensions of `A` and `X` must match.
- `Y`: (Output) dense matrix. Dimensions must match the outer dimensions of `A` and `X`. Overwritten with `alpha * AX`.

## See Also

### Complex multiplication functions

- [SparseMultiply](sparsemultiply%28______%29-1sjuk.md): Performs the multiplication `Y = AX` for complex double values.
- [SparseMultiply](sparsemultiply%28______%29-85a24.md): Performs the multiplication `Y = AX` for complex float values.
- [SparseMultiply](sparsemultiply-5bf3v.md): Performs the multiplication `Y = alpha * AX` for complex float values
