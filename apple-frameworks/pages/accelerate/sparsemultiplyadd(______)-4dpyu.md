> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiplyadd(_:_:_:)-4dpyu](https://developer.apple.com/documentation/accelerate/sparsemultiplyadd(_:_:_:)-4dpyu)

# SparseMultiplyAdd(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs `Y += AX` for complex float values

## Declaration

```swift
func SparseMultiplyAdd(_ A: SparseMatrix_Complex_Float, _ X: DenseMatrix_Complex_Float, _ Y: DenseMatrix_Complex_Float)
```

<a id="discussion"></a>

## Discussion

- Parameter `A`: (input) sparse matrix.
- Parameter `X`: (input) dense matrix. Inner dimensions of `A` and `X` must match.
- Parameter `Y`: (output) dense matrix. Dimensions must match the outer dimensions of `A` and `X`. Overwritten with their product.

## See Also

### Complex multiply-add functions

- [SparseMultiplyAdd(\_:\_:\_:)](sparsemultiplyadd%28______%29-658zk.md): Performs `Y += AX` for complex double values

# SparseMultiplyAdd (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs `Y += AX` for complex float values

## Declaration

```objectivec
static void SparseMultiplyAdd(SparseMatrix_Complex_Float A, DenseMatrix_Complex_Float X, DenseMatrix_Complex_Float Y);
```

<a id="discussion"></a>

## Discussion

- Parameter `A`: (input) sparse matrix.
- Parameter `X`: (input) dense matrix. Inner dimensions of `A` and `X` must match.
- Parameter `Y`: (output) dense matrix. Dimensions must match the outer dimensions of `A` and `X`. Overwritten with their product.

## See Also

### Complex multiply-add functions

- [SparseMultiplyAdd](sparsemultiplyadd%28______%29-658zk.md): Performs `Y += AX` for complex double values
- [SparseMultiplyAdd](sparsemultiplyadd-4gs2p.md): Performs `Y += alpha * AX` for complex float values
- [SparseMultiplyAdd](sparsemultiplyadd-7pu5c.md): Performs `Y += alpha * AX` for complex double values
