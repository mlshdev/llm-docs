> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:_:)-85a24

# SparseMultiply(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs the multiplication `Y = AX` for complex float values.

## Declaration

```swift
func SparseMultiply(_ A: SparseMatrix_Complex_Float, _ X: DenseMatrix_Complex_Float, _ Y: DenseMatrix_Complex_Float)
```

## Parameters

- `A`: (Input) sparse matrix.
- `X`: (Input) dense matrix. Inner dimensions of `A` and `X` must match.
- `Y`: (Output) dense matrix. Dimensions must match the outer dimensions of `A` and `X`. Overwritten with their product.

## See Also

### Complex multiplication functions

- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-1sjuk.md): Performs the multiplication `Y = AX` for complex double values.

# SparseMultiply (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs the multiplication `Y = AX` for complex float values.

## Declaration

```objectivec
static void SparseMultiply(SparseMatrix_Complex_Float A, DenseMatrix_Complex_Float X, DenseMatrix_Complex_Float Y);
```

## Parameters

- `A`: (Input) sparse matrix.
- `X`: (Input) dense matrix. Inner dimensions of `A` and `X` must match.
- `Y`: (Output) dense matrix. Dimensions must match the outer dimensions of `A` and `X`. Overwritten with their product.

## See Also

### Complex multiplication functions

- [SparseMultiply](sparsemultiply%28______%29-1sjuk.md): Performs the multiplication `Y = AX` for complex double values.
- [SparseMultiply](sparsemultiply-5bf3v.md): Performs the multiplication `Y = alpha * AX` for complex float values
- [SparseMultiply](sparsemultiply-65jst.md): Performs the multiplication `Y = alpha * AX` for complex double values
