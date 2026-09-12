> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiply(_:_:_:)-6abql](https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:_:)-6abql)

# SparseMultiply(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values.

## Declaration

```swift
func SparseMultiply(_ Subfactor: SparseOpaqueSubfactor_Double, _ X: DenseVector_Double, _ Y: DenseVector_Double)
```

## Parameters

- `Subfactor`: The subfactor to multiply by, which [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-49d8w.md) returns.
- `X`: The vector *X*.
- `Y`: The vector *Y*.

## See Also

### Subfactor and dense vector multiplication

- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-8ehhn.md): Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of double-precision values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-7l3sr.md): Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of single-precision values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-2h425.md): Performs the multiply operation *Y = Subfactor \** *X* on a vector of single-precision values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-3s0hu.md): Perform the multiply operation `Y = Subfactor * X` in place for complex double values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-9fn7j.md): Perform the multiply operation `y = Subfactor * x` for complex double values, in place.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-4fwfv.md): Perform the multiply operation `y = Subfactor * x` for complex double values..
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-58wuo.md): Perform the multiply operation `y = Subfactor * x` for complex float values..
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.

# SparseMultiply (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values.

## Declaration

```objectivec
static void SparseMultiply(SparseOpaqueSubfactor_Double Subfactor, DenseVector_Double x, DenseVector_Double y);
```

## Parameters

- `Subfactor`: The subfactor to multiply by, which [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-49d8w.md) returns.
- `x`: The vector *X*.
- `y`: The vector *Y*.

## See Also

### Subfactor and dense vector multiplication

- [SparseMultiply](sparsemultiply%28____%29-8ehhn.md): Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of double-precision values.
- [SparseMultiply](sparsemultiply%28____%29-7l3sr.md): Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of single-precision values.
- [SparseMultiply](sparsemultiply%28______%29-2h425.md): Performs the multiply operation *Y = Subfactor \** *X* on a vector of single-precision values.
- [SparseMultiply](sparsemultiply%28____%29-3s0hu.md): Perform the multiply operation `Y = Subfactor * X` in place for complex double values.
- [SparseMultiply](sparsemultiply%28____%29-9fn7j.md): Perform the multiply operation `y = Subfactor * x` for complex double values, in place.
- [SparseMultiply](sparsemultiply%28______%29-4fwfv.md): Perform the multiply operation `y = Subfactor * x` for complex double values..
- [SparseMultiply](sparsemultiply%28______%29-58wuo.md): Perform the multiply operation `y = Subfactor * x` for complex float values..
- [SparseMultiply](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.
