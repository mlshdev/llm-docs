> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegettranspose(_:)-227ei](https://developer.apple.com/documentation/accelerate/sparsegettranspose(_:)-227ei)

# SparseGetTranspose(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a transposed copy of the specified matrix of double-precision, floating-point values.

## Declaration

```swift
func SparseGetTranspose(_ Matrix: SparseMatrix_Double) -> SparseMatrix_Double
```

## Parameters

- `Matrix`: The matrix to transpose.

<a id="return-value"></a>

## Return Value

A [SparseMatrix_Double](sparsematrix_double.md) structure that represents the transposed matrix.

<a id="Discussion"></a>

## Discussion

Use this function to return a new [SparseMatrix_Double](sparsematrix_double.md) structure that shares underlying storage with the specified matrix, but with its [transpose](sparseattributes_t/transpose.md) attribute as `true`. The system doesn’t reference-count the underlying storage, so you must ensure it doesn’t destroy the original matrix before you finish with the matrix that this routine returns.

## See Also

### Matrix transpose functions

- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-7no8k.md): Returns a transposed copy of the specified matrix of single-precision, floating-point values.

# SparseGetTranspose (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a transposed copy of the specified matrix of double-precision, floating-point values.

## Declaration

```objectivec
static SparseMatrix_Double SparseGetTranspose(SparseMatrix_Double Matrix);
```

## Parameters

- `Matrix`: The matrix to transpose.

<a id="return-value"></a>

## Return Value

A [SparseMatrix_Double](sparsematrix_double.md) structure that represents the transposed matrix.

<a id="Discussion"></a>

## Discussion

Use this function to return a new [SparseMatrix_Double](sparsematrix_double.md) structure that shares underlying storage with the specified matrix, but with its [transpose](sparseattributes_t/transpose.md) attribute as `true`. The system doesn’t reference-count the underlying storage, so you must ensure it doesn’t destroy the original matrix before you finish with the matrix that this routine returns.

## See Also

### Matrix transpose functions

- [SparseGetTranspose](sparsegettranspose%28__%29-7no8k.md): Returns a transposed copy of the specified matrix of single-precision, floating-point values.
