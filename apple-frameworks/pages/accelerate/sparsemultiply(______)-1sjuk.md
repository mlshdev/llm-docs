> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiply(_:_:_:)-1sjuk](https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:_:)-1sjuk)

# SparseMultiply(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs the multiplication `Y = AX` for complex double values.

## Declaration

```swift
func SparseMultiply(_ A: SparseMatrix_Complex_Double, _ X: DenseMatrix_Complex_Double, _ Y: DenseMatrix_Complex_Double)
```

## Parameters

- `A`: (Input) sparse matrix.
- `X`: (Input) dense matrix. Inner dimensions of `A` and `X` must match.
- `Y`: (Output) dense matrix. Dimensions must match the outer dimensions of `A` and `X`. Overwritten with their product.

## See Also

### Complex multiplication functions

- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-85a24.md): Performs the multiplication `Y = AX` for complex float values.

# SparseMultiply (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs the multiplication `Y = AX` for complex double values.

## Declaration

```objectivec
static void SparseMultiply(SparseMatrix_Complex_Double A, DenseMatrix_Complex_Double X, DenseMatrix_Complex_Double Y);
```

## Parameters

- `A`: (Input) sparse matrix.
- `X`: (Input) dense matrix. Inner dimensions of `A` and `X` must match.
- `Y`: (Output) dense matrix. Dimensions must match the outer dimensions of `A` and `X`. Overwritten with their product.

## See Also

### Complex multiplication functions

- [SparseMultiply](sparsemultiply%28______%29-85a24.md): Performs the multiplication `Y = AX` for complex float values.
- [SparseMultiply](sparsemultiply-5bf3v.md): Performs the multiplication `Y = alpha * AX` for complex float values
- [SparseMultiply](sparsemultiply-65jst.md): Performs the multiplication `Y = alpha * AX` for complex double values
