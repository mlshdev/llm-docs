> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiplyadd(_:_:_:)-8dqy7](https://developer.apple.com/documentation/accelerate/sparsemultiplyadd(_:_:_:)-8dqy7)

# SparseMultiplyAdd(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs `y += Ax` for complex float values

## Declaration

```swift
func SparseMultiplyAdd(_ A: SparseMatrix_Complex_Float, _ x: DenseVector_Complex_Float, _ y: DenseVector_Complex_Float)
```

<a id="discussion"></a>

## Discussion

- Parameter `A`: (input) sparse matrix.
- Parameter `x`: (input) dense vector.
- Parameter `y`: (output) dense vector.

## See Also

### Complex multiply-add functions

- [SparseMultiplyAdd(\_:\_:\_:)](sparsemultiplyadd%28______%29-6qi0p.md): Performs `y += Ax` for complex double values

# SparseMultiplyAdd (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs `y += Ax` for complex float values

## Declaration

```objectivec
static void SparseMultiplyAdd(SparseMatrix_Complex_Float A, DenseVector_Complex_Float x, DenseVector_Complex_Float y);
```

<a id="discussion"></a>

## Discussion

- Parameter `A`: (input) sparse matrix.
- Parameter `x`: (input) dense vector.
- Parameter `y`: (output) dense vector.

## See Also

### Complex multiply-add functions

- [SparseMultiplyAdd](sparsemultiplyadd%28______%29-6qi0p.md): Performs `y += Ax` for complex double values
- [SparseMultiplyAdd](sparsemultiplyadd-47egy.md): Performs `y += alpha * Ax` for complex double values
- [SparseMultiplyAdd](sparsemultiplyadd-8ym23.md): Performs `y += alpha * Ax` for complex float values
