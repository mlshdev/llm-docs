> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiplyadd(_:_:_:)-658zk](https://developer.apple.com/documentation/accelerate/sparsemultiplyadd(_:_:_:)-658zk)

# SparseMultiplyAdd(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs `Y += AX` for complex double values

## Declaration

```swift
func SparseMultiplyAdd(_ A: SparseMatrix_Complex_Double, _ X: DenseMatrix_Complex_Double, _ Y: DenseMatrix_Complex_Double)
```

<a id="discussion"></a>

## Discussion

- Parameter `A`: (input) sparse matrix.
- Parameter `X`: (input) dense matrix. Inner dimensions of `A` and `X` must match.
- Parameter `Y`: (output) dense matrix. Dimensions must match the outer dimensions of `A` and `X`. Overwritten with their product.

## See Also

### Complex multiply-add functions

- [SparseMultiplyAdd(\_:\_:\_:)](sparsemultiplyadd%28______%29-4dpyu.md): Performs `Y += AX` for complex float values

# SparseMultiplyAdd (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs `Y += AX` for complex double values

## Declaration

```objectivec
static void SparseMultiplyAdd(SparseMatrix_Complex_Double A, DenseMatrix_Complex_Double X, DenseMatrix_Complex_Double Y);
```

<a id="discussion"></a>

## Discussion

- Parameter `A`: (input) sparse matrix.
- Parameter `X`: (input) dense matrix. Inner dimensions of `A` and `X` must match.
- Parameter `Y`: (output) dense matrix. Dimensions must match the outer dimensions of `A` and `X`. Overwritten with their product.

## See Also

### Complex multiply-add functions

- [SparseMultiplyAdd](sparsemultiplyadd%28______%29-4dpyu.md): Performs `Y += AX` for complex float values
- [SparseMultiplyAdd](sparsemultiplyadd-4gs2p.md): Performs `Y += alpha * AX` for complex float values
- [SparseMultiplyAdd](sparsemultiplyadd-7pu5c.md): Performs `Y += alpha * AX` for complex double values
