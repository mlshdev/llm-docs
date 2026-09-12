> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseupdatefactor(_:_:_:_:_:)-9qg54](https://developer.apple.com/documentation/accelerate/sparseupdatefactor(_:_:_:_:_:)-9qg54)

# SparseUpdateFactor(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Apply a low-rank update to an existing factorization of a matrix of float values.

## Declaration

```swift
func SparseUpdateFactor(_ updateAlgorithm: SparseUpdate_t, _ Factorization: UnsafeMutablePointer<SparseOpaqueFactorization_Float>, _ updateCount: Int32, _ updatedIndices: UnsafePointer<Int32>, _ Update: SparseMatrix_Float)
```

## Parameters

- `updateAlgorithm`: The update algorithm to use
- `Factorization`: The existing factorization to be updated. The existing factorization will be modified and will no longer solve `AX=B`.
- `updateCount`: Number of updated entries or columns
- `updatedIndices`: List of updated indices, interpreted as described above
- `Update`: The updated entries.

<a id="discussion"></a>

## Discussion

If we have a factorization `A = LU` and now wish to solve a system `ĀX = B` where `Ā = A + UV^T` for some low-rank update matrices `U` of size `m x k` and `V` of size `k x n` for some small `k` there exist methods to modify (update) the original factors at a lower cost than a full factorization.

Supported techniques are:

- `SparseUpdatePartialRefactor`: The most stable, but most expensive, method is to perform a partial refactorization that will recalculate the L and U factor values that would be different if performing an LU factorization from scratch.

  For the partial refactorization, `updatedIndices` should be a list of `updateCount` (row, column) pairs indicating modified values (i.e. a total of `2*updateCount` integers), and `Update` should be a full copy of the original matrix with those value modified to their new values. The structure of `Update` must be identical to that of the original matrix.

## See Also

### Factorization update functions

- [SparseUpdateFactor(\_:\_:\_:\_:\_:)](sparseupdatefactor%28__________%29-1n2be.md): Apply a low-rank update to an existing factorization of a matrix of complex float values.
- [SparseUpdateFactor(\_:\_:\_:\_:\_:)](sparseupdatefactor%28__________%29-9h956.md): Apply a low-rank update to an existing factorization of a matrix of complex double values.
- [SparseUpdateFactor(\_:\_:\_:\_:\_:)](sparseupdatefactor%28__________%29-wrqg.md): Apply a low-rank update to an existing factorization of a matrix of double values.

# SparseUpdateFactor (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Apply a low-rank update to an existing factorization of a matrix of float values.

## Declaration

```objectivec
static void SparseUpdateFactor(SparseUpdate_t updateAlgorithm, SparseOpaqueFactorization_Float *Factorization, int updateCount, const int *updatedIndices, SparseMatrix_Float Update);
```

## Parameters

- `updateAlgorithm`: The update algorithm to use
- `Factorization`: The existing factorization to be updated. The existing factorization will be modified and will no longer solve `AX=B`.
- `updateCount`: Number of updated entries or columns
- `updatedIndices`: List of updated indices, interpreted as described above
- `Update`: The updated entries.

<a id="discussion"></a>

## Discussion

If we have a factorization `A = LU` and now wish to solve a system `ĀX = B` where `Ā = A + UV^T` for some low-rank update matrices `U` of size `m x k` and `V` of size `k x n` for some small `k` there exist methods to modify (update) the original factors at a lower cost than a full factorization.

Supported techniques are:

- `SparseUpdatePartialRefactor`: The most stable, but most expensive, method is to perform a partial refactorization that will recalculate the L and U factor values that would be different if performing an LU factorization from scratch.

  For the partial refactorization, `updatedIndices` should be a list of `updateCount` (row, column) pairs indicating modified values (i.e. a total of `2*updateCount` integers), and `Update` should be a full copy of the original matrix with those value modified to their new values. The structure of `Update` must be identical to that of the original matrix.

## See Also

### Factorization update functions

- [SparseUpdateFactor](sparseupdatefactor%28__________%29-1n2be.md): Apply a low-rank update to an existing factorization of a matrix of complex float values.
- [SparseUpdateFactor](sparseupdatefactor%28__________%29-9h956.md): Apply a low-rank update to an existing factorization of a matrix of complex double values.
- [SparseUpdateFactor](sparseupdatefactor%28__________%29-wrqg.md): Apply a low-rank update to an existing factorization of a matrix of double values.
