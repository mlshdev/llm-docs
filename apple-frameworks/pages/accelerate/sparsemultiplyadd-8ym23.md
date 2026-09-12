> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiplyadd-8ym23](https://developer.apple.com/documentation/accelerate/sparsemultiplyadd-8ym23)

# SparseMultiplyAdd

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs `y += alpha * Ax` for complex float values

## Declaration

```objectivec
static void SparseMultiplyAdd(__SPARSE_float_complex alpha, SparseMatrix_Complex_Float A, DenseVector_Complex_Float x, DenseVector_Complex_Float y);
```

## Parameters

- `alpha`: (Input) scale to apply to the product of `A` and `x`.
- `A`: (Input) sparse matrix.
- `x`: (Input) dense vector.
- `y`: (Output) dense vector.

## See Also

### Complex multiply-add functions

- [SparseMultiplyAdd](sparsemultiplyadd%28______%29-6qi0p.md): Performs `y += Ax` for complex double values
- [SparseMultiplyAdd](sparsemultiplyadd%28______%29-8dqy7.md): Performs `y += Ax` for complex float values
- [SparseMultiplyAdd](sparsemultiplyadd-47egy.md): Performs `y += alpha * Ax` for complex double values
