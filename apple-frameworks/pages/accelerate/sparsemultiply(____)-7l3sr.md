> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiply(_:_:)-7l3sr](https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:)-7l3sr)

# SparseMultiply(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of single-precision values.

## Declaration

```swift
func SparseMultiply(_ Subfactor: SparseOpaqueSubfactor_Float, _ XY: DenseVector_Float)
```

## Parameters

- `Subfactor`: The subfactor to multiply by, which [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-4renf.md) returns.
- `XY`: On input, the vector *X*. On return, the vector *Y* overwrites it.

## See Also

### Subfactor and dense vector multiplication

- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-8ehhn.md): Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of double-precision values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6abql.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values.
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

Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of single-precision values.

## Declaration

```objectivec
static void SparseMultiply(SparseOpaqueSubfactor_Float Subfactor, DenseVector_Float xy);
```

## Parameters

- `Subfactor`: The subfactor to multiply by, which [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-4renf.md) returns.
- `xy`: On input, the vector *X*. On return, the vector *Y* overwrites it.

## See Also

### Subfactor and dense vector multiplication

- [SparseMultiply](sparsemultiply%28____%29-8ehhn.md): Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of double-precision values.
- [SparseMultiply](sparsemultiply%28______%29-6abql.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values.
- [SparseMultiply](sparsemultiply%28______%29-2h425.md): Performs the multiply operation *Y = Subfactor \** *X* on a vector of single-precision values.
- [SparseMultiply](sparsemultiply%28____%29-3s0hu.md): Perform the multiply operation `Y = Subfactor * X` in place for complex double values.
- [SparseMultiply](sparsemultiply%28____%29-9fn7j.md): Perform the multiply operation `y = Subfactor * x` for complex double values, in place.
- [SparseMultiply](sparsemultiply%28______%29-4fwfv.md): Perform the multiply operation `y = Subfactor * x` for complex double values..
- [SparseMultiply](sparsemultiply%28______%29-58wuo.md): Perform the multiply operation `y = Subfactor * x` for complex float values..
- [SparseMultiply](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.
