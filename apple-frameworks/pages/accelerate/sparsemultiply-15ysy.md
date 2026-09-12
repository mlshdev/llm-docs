> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiply-15ysy](https://developer.apple.com/documentation/accelerate/sparsemultiply-15ysy)

# SparseMultiply

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs the multiplication `y = alpha * Ax` for complex double values.

## Declaration

```objectivec
static void SparseMultiply(__SPARSE_double_complex alpha, SparseMatrix_Complex_Double A, DenseVector_Complex_Double x, DenseVector_Complex_Double y);
```

## Parameters

- `alpha`: (Input) scale to apply to the result.
- `A`: (Input) sparse matrix.
- `x`: (Input) dense vector.
- `y`: (Output) dense vector.

## See Also

### Complex multiplication functions

- [SparseMultiply](sparsemultiply%28______%29-6gzb3.md): Performs the multiplication `y = Ax` for complex float values
- [SparseMultiply](sparsemultiply-4xaml.md): Performs the multiplication `y = alpha * Ax` for complex float values.
- [SparseMultiply](sparsemultiply%28______%29-6xiv8.md): Performs the multiplication `y = Ax` for complex double values
