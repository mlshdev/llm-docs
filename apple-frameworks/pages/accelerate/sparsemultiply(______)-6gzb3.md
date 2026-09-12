> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiply(_:_:_:)-6gzb3](https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:_:)-6gzb3)

# SparseMultiply(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs the multiplication `y = Ax` for complex float values

## Declaration

```swift
func SparseMultiply(_ A: SparseMatrix_Complex_Float, _ x: DenseVector_Complex_Float, _ y: DenseVector_Complex_Float)
```

## Parameters

- `A`: (Input) sparse matrix.
- `x`: (Input) dense vector.
- `y`: (Output) dense vector.

## See Also

### Complex multiplication functions

- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6xiv8.md): Performs the multiplication `y = Ax` for complex double values

# SparseMultiply (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Performs the multiplication `y = Ax` for complex float values

## Declaration

```objectivec
static void SparseMultiply(SparseMatrix_Complex_Float A, DenseVector_Complex_Float x, DenseVector_Complex_Float y);
```

## Parameters

- `A`: (Input) sparse matrix.
- `x`: (Input) dense vector.
- `y`: (Output) dense vector.

## See Also

### Complex multiplication functions

- [SparseMultiply](sparsemultiply-15ysy.md): Performs the multiplication `y = alpha * Ax` for complex double values.
- [SparseMultiply](sparsemultiply-4xaml.md): Performs the multiplication `y = alpha * Ax` for complex float values.
- [SparseMultiply](sparsemultiply%28______%29-6xiv8.md): Performs the multiplication `y = Ax` for complex double values
