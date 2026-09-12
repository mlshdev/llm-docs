> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiplyadd-7pu5c](https://developer.apple.com/documentation/accelerate/sparsemultiplyadd-7pu5c)

# SparseMultiplyAdd

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs `Y += alpha * AX` for complex double values

## Declaration

```objectivec
static void SparseMultiplyAdd(__SPARSE_double_complex alpha, SparseMatrix_Complex_Double A, DenseMatrix_Complex_Double X, DenseMatrix_Complex_Double Y);
```

## Parameters

- `alpha`: (Input) scale to apply to the product of `A` and `X`.
- `A`: (Input) sparse matrix.
- `X`: (Input) dense matrix. Inner dimensions of `A` and `X` must match.
- `Y`: (Output) dense matrix. Dimensions must match the outer dimensions of `A` and `X`. Overwritten with `alpha * AX`.

## See Also

### Complex multiply-add functions

- [SparseMultiplyAdd](sparsemultiplyadd%28______%29-658zk.md): Performs `Y += AX` for complex double values
- [SparseMultiplyAdd](sparsemultiplyadd%28______%29-4dpyu.md): Performs `Y += AX` for complex float values
- [SparseMultiplyAdd](sparsemultiplyadd-4gs2p.md): Performs `Y += alpha * AX` for complex float values
