> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:)-87v8w](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:)-87v8w)

# SparseSolve(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Subfactor \* X = B* in place for the vector of double-precision values *X*.

## Declaration

```swift
func SparseSolve(_ Subfactor: SparseOpaqueSubfactor_Double, _ XB: DenseVector_Double)
```

## Parameters

- `Subfactor`: The *Subfactor* in *Subfactor* *\* X = B* that [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-49d8w.md) returns.
- `XB`: On input, the vector *B*. On return, the vector *X* overwrites it.

## See Also

### Vector-solving functions

- [SparseSolve(\_:\_:)](sparsesolve%28____%29-6pxrq.md): Solves the equation *Subfactor \* X = B* in place for the vector of single-precision values *X*.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-g0wb.md): Solves the equation *Subfactor \* X = B* in place for the vector of double-precision values *X*.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-5mq7s.md): Solves the equation *Subfactor \* X = B* in place for the vector of single-precision values *X*.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Subfactor \* X = B* in place for the vector of double-precision values *X*.

## Declaration

```objectivec
static void SparseSolve(SparseOpaqueSubfactor_Double Subfactor, DenseVector_Double xb);
```

## Parameters

- `Subfactor`: The *Subfactor* in *Subfactor* *\* X = B* that [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-49d8w.md) returns.
- `xb`: On input, the vector *B*. On return, the vector *X* overwrites it.

## See Also

### Vector-solving functions

- [SparseSolve](sparsesolve%28____%29-6pxrq.md): Solves the equation *Subfactor \* X = B* in place for the vector of single-precision values *X*.
- [SparseSolve](sparsesolve%28______%29-g0wb.md): Solves the equation *Subfactor \* X = B* in place for the vector of double-precision values *X*.
- [SparseSolve](sparsesolve%28______%29-5mq7s.md): Solves the equation *Subfactor \* X = B* in place for the vector of single-precision values *X*.
