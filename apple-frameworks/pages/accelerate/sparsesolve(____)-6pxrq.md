> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:)-6pxrq](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:)-6pxrq)

# SparseSolve(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Subfactor \* X = B* in place for the vector of single-precision values *X*.

## Declaration

```swift
func SparseSolve(_ Subfactor: SparseOpaqueSubfactor_Float, _ XB: DenseVector_Float)
```

## Parameters

- `Subfactor`: The *Subfactor* in *Subfactor* *\* X = B* that [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-4renf.md) returns.
- `XB`: On input, the vector *B*. On return, the vector *X* overwrites it.

## See Also

### Vector-solving functions

- [SparseSolve(\_:\_:)](sparsesolve%28____%29-87v8w.md): Solves the equation *Subfactor \* X = B* in place for the vector of double-precision values *X*.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-g0wb.md): Solves the equation *Subfactor \* X = B* in place for the vector of double-precision values *X*.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-5mq7s.md): Solves the equation *Subfactor \* X = B* in place for the vector of single-precision values *X*.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Subfactor \* X = B* in place for the vector of single-precision values *X*.

## Declaration

```objectivec
static void SparseSolve(SparseOpaqueSubfactor_Float Subfactor, DenseVector_Float xb);
```

## Parameters

- `Subfactor`: The *Subfactor* in *Subfactor* *\* X = B* that [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-4renf.md) returns.
- `xb`: On input, the vector *B*. On return, the vector *X* overwrites it.

## See Also

### Vector-solving functions

- [SparseSolve](sparsesolve%28____%29-87v8w.md): Solves the equation *Subfactor \* X = B* in place for the vector of double-precision values *X*.
- [SparseSolve](sparsesolve%28______%29-g0wb.md): Solves the equation *Subfactor \* X = B* in place for the vector of double-precision values *X*.
- [SparseSolve](sparsesolve%28______%29-5mq7s.md): Solves the equation *Subfactor \* X = B* in place for the vector of single-precision values *X*.
