> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiply(_:_:)-3s0hu](https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:)-3s0hu)

# SparseMultiply(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Perform the multiply operation `Y = Subfactor * X` in place for complex double values.

## Declaration

```swift
func SparseMultiply(_ Subfactor: SparseOpaqueSubfactor_Complex_Double, _ XY: DenseMatrix_Complex_Double)
```

## Parameters

- `Subfactor`: (Input) The subfactor to multiply by, as returned by `SparseCreateSubfactor()`.
- `XY`: (Input/Output) On input, the matrix `X`. On return it is overwritten with the matrix `Y`. If `Subfactor` is `m x n`, then `XB` must have dimension `k x nrhs`, where `k = max(m, n)` and `nrhs` is the number of right-hand side vectors. If `m != n`, then only the first `min(m,n)` entries are used for input or output as approriate.

## See Also

### Subfactor and dense vector multiplication

- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-8ehhn.md): Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of double-precision values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-7l3sr.md): Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of single-precision values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6abql.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-2h425.md): Performs the multiply operation *Y = Subfactor \** *X* on a vector of single-precision values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-9fn7j.md): Perform the multiply operation `y = Subfactor * x` for complex double values, in place.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-4fwfv.md): Perform the multiply operation `y = Subfactor * x` for complex double values..
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-58wuo.md): Perform the multiply operation `y = Subfactor * x` for complex float values..
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.

# SparseMultiply (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Perform the multiply operation `Y = Subfactor * X` in place for complex double values.

## Declaration

```objectivec
static void SparseMultiply(SparseOpaqueSubfactor_Complex_Double Subfactor, DenseMatrix_Complex_Double XY);
```

## Parameters

- `Subfactor`: (Input) The subfactor to multiply by, as returned by `SparseCreateSubfactor()`.
- `XY`: (Input/Output) On input, the matrix `X`. On return it is overwritten with the matrix `Y`. If `Subfactor` is `m x n`, then `XB` must have dimension `k x nrhs`, where `k = max(m, n)` and `nrhs` is the number of right-hand side vectors. If `m != n`, then only the first `min(m,n)` entries are used for input or output as approriate.

## See Also

### Subfactor and dense vector multiplication

- [SparseMultiply](sparsemultiply%28____%29-8ehhn.md): Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of double-precision values.
- [SparseMultiply](sparsemultiply%28____%29-7l3sr.md): Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of single-precision values.
- [SparseMultiply](sparsemultiply%28______%29-6abql.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values.
- [SparseMultiply](sparsemultiply%28______%29-2h425.md): Performs the multiply operation *Y = Subfactor \** *X* on a vector of single-precision values.
- [SparseMultiply](sparsemultiply%28____%29-9fn7j.md): Perform the multiply operation `y = Subfactor * x` for complex double values, in place.
- [SparseMultiply](sparsemultiply%28______%29-4fwfv.md): Perform the multiply operation `y = Subfactor * x` for complex double values..
- [SparseMultiply](sparsemultiply%28______%29-58wuo.md): Perform the multiply operation `y = Subfactor * x` for complex float values..
- [SparseMultiply](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.
