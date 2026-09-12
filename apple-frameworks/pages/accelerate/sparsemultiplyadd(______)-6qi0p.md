> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiplyadd(_:_:_:)-6qi0p](https://developer.apple.com/documentation/accelerate/sparsemultiplyadd(_:_:_:)-6qi0p)

# SparseMultiplyAdd(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs `y += Ax` for complex double values

## Declaration

```swift
func SparseMultiplyAdd(_ A: SparseMatrix_Complex_Double, _ x: DenseVector_Complex_Double, _ y: DenseVector_Complex_Double)
```

<a id="discussion"></a>

## Discussion

- Parameter `A`: (input) sparse matrix.
- Parameter `x`: (input) dense vector.
- Parameter `y`: (output) dense vector.

## See Also

### Complex multiply-add functions

- [SparseMultiplyAdd(\_:\_:\_:)](sparsemultiplyadd%28______%29-8dqy7.md): Performs `y += Ax` for complex float values

# SparseMultiplyAdd (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs `y += Ax` for complex double values

## Declaration

```objectivec
static void SparseMultiplyAdd(SparseMatrix_Complex_Double A, DenseVector_Complex_Double x, DenseVector_Complex_Double y);
```

<a id="discussion"></a>

## Discussion

- Parameter `A`: (input) sparse matrix.
- Parameter `x`: (input) dense vector.
- Parameter `y`: (output) dense vector.

## See Also

### Complex multiply-add functions

- [SparseMultiplyAdd](sparsemultiplyadd%28______%29-8dqy7.md): Performs `y += Ax` for complex float values
- [SparseMultiplyAdd](sparsemultiplyadd-47egy.md): Performs `y += alpha * Ax` for complex double values
- [SparseMultiplyAdd](sparsemultiplyadd-8ym23.md): Performs `y += alpha * Ax` for complex float values
