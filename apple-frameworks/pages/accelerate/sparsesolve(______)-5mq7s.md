> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesolve(_:_:_:)-5mq7s](https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:)-5mq7s)

# SparseSolve(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Subfactor \* X = B* in place for the vector of single-precision values *X*.

## Declaration

```swift
func SparseSolve(_ Subfactor: SparseOpaqueSubfactor_Float, _ B: DenseVector_Float, _ X: DenseVector_Float)
```

## Parameters

- `Subfactor`: The *Subfactor* in *Subfactor* *\* X = B* that [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-4renf.md) returns.
- `B`: The vector *B*.
- `X`: The vector *X*.

## See Also

### Vector-solving functions

- [SparseSolve(\_:\_:)](sparsesolve%28____%29-87v8w.md): Solves the equation *Subfactor \* X = B* in place for the vector of double-precision values *X*.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-6pxrq.md): Solves the equation *Subfactor \* X = B* in place for the vector of single-precision values *X*.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-g0wb.md): Solves the equation *Subfactor \* X = B* in place for the vector of double-precision values *X*.

# SparseSolve (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Solves the equation *Subfactor \* X = B* in place for the vector of single-precision values *X*.

## Declaration

```objectivec
static void SparseSolve(SparseOpaqueSubfactor_Float Subfactor, DenseVector_Float b, DenseVector_Float x);
```

## Parameters

- `Subfactor`: The *Subfactor* in *Subfactor* *\* X = B* that [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-4renf.md) returns.
- `b`: The vector *b*.
- `x`: The vector *x*.

## See Also

### Vector-solving functions

- [SparseSolve](sparsesolve%28____%29-87v8w.md): Solves the equation *Subfactor \* X = B* in place for the vector of double-precision values *X*.
- [SparseSolve](sparsesolve%28____%29-6pxrq.md): Solves the equation *Subfactor \* X = B* in place for the vector of single-precision values *X*.
- [SparseSolve](sparsesolve%28______%29-g0wb.md): Solves the equation *Subfactor \* X = B* in place for the vector of double-precision values *X*.
