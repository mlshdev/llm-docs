> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsecleanup(_:)-15kpj](https://developer.apple.com/documentation/accelerate/sparsecleanup(_:)-15kpj)

# SparseCleanup(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Releases a double-precision subfactor object’s references to any memory that the Sparse Solvers library allocates.

## Declaration

```swift
func SparseCleanup(_ toFree: SparseOpaqueSubfactor_Double)
```

## Parameters

- `toFree`: The object to release references to any allocated memory.

## See Also

### Resource Cleanup

- [SparseCleanup(\_:)](sparsecleanup%28__%29-6ywzn.md): Releases a matrix of double-precision values’ references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup(\_:)](sparsecleanup%28__%29-9f4vi.md): Releases a matrix of single-precision values’ references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup(\_:)](sparsecleanup%28__%29-3cnxt.md): Releases a factorization of a matrix of double-precision values’ references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup(\_:)](sparsecleanup%28__%29-4kus5.md): Releases a factorization of a matrix of single-precision values’ references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup(\_:)](sparsecleanup%28__%29-6jpd8.md): Releases a matrix factorization’s references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup(\_:)](sparsecleanup%28__%29-1mrmc.md): Releases a single-precision subfactor object’s references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup(\_:)](sparsecleanup%28__%29-45lq7.md): Releases a double-precision preconditioner’s references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup(\_:)](sparsecleanup%28__%29-1qhk8.md): Releases a single-precision preconditioner’s references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup(\_:)](sparsecleanup%28__%29-1jxdh.md): Release a Sparse Preconditioner’s references to any memory allocated by the sparse library.
- [SparseCleanup(\_:)](sparsecleanup%28__%29-28nz7.md): Release a Sparse Object’s references to any memory allocated by the sparse library.
- [SparseCleanup(\_:)](sparsecleanup%28__%29-3wccz.md): Release a Sparse matrix’s references to any memory allocated by the Sparse library.
- [SparseCleanup(\_:)](sparsecleanup%28__%29-3wccz.md): Release a Sparse matrix’s references to any memory allocated by the Sparse library.
- [SparseCleanup(\_:)](sparsecleanup%28__%29-4enlt.md): Release a Sparse Object’s references to any memory allocated by the sparse library.
- [SparseCleanup(\_:)](sparsecleanup%28__%29-4z3l9.md): Release a Sparse matrix’s references to any memory allocated by the Sparse library.
- [SparseCleanup(\_:)](sparsecleanup%28__%29-5ajx.md): Release a Sparse Preconditioner’s references to any memory allocated by the sparse library.

# SparseCleanup (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Releases a double-precision subfactor object’s references to any memory that the Sparse Solvers library allocates.

## Declaration

```objectivec
static void SparseCleanup(SparseOpaqueSubfactor_Double Opaque);
```

## Parameters

- `Opaque`: The object to release references to any allocated memory.

## See Also

### Resource Cleanup

- [SparseCleanup](sparsecleanup%28__%29-6ywzn.md): Releases a matrix of double-precision values’ references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup](sparsecleanup%28__%29-9f4vi.md): Releases a matrix of single-precision values’ references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup](sparsecleanup%28__%29-3cnxt.md): Releases a factorization of a matrix of double-precision values’ references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup](sparsecleanup%28__%29-4kus5.md): Releases a factorization of a matrix of single-precision values’ references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup](sparsecleanup%28__%29-6jpd8.md): Releases a matrix factorization’s references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup](sparsecleanup%28__%29-1mrmc.md): Releases a single-precision subfactor object’s references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup](sparsecleanup%28__%29-45lq7.md): Releases a double-precision preconditioner’s references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup](sparsecleanup%28__%29-1qhk8.md): Releases a single-precision preconditioner’s references to any memory that the Sparse Solvers library allocates.
- [SparseCleanup](sparsecleanup%28__%29-1jxdh.md): Release a Sparse Preconditioner’s references to any memory allocated by the sparse library.
- [SparseCleanup](sparsecleanup%28__%29-28nz7.md): Release a Sparse Object’s references to any memory allocated by the sparse library.
- [SparseCleanup](sparsecleanup%28__%29-3wccz.md): Release a Sparse matrix’s references to any memory allocated by the Sparse library.
- [SparseCleanup](sparsecleanup%28__%29-3wccz.md): Release a Sparse matrix’s references to any memory allocated by the Sparse library.
- [SparseCleanup](sparsecleanup%28__%29-4enlt.md): Release a Sparse Object’s references to any memory allocated by the sparse library.
- [SparseCleanup](sparsecleanup%28__%29-4z3l9.md): Release a Sparse matrix’s references to any memory allocated by the Sparse library.
- [SparseCleanup](sparsecleanup%28__%29-5ajx.md): Release a Sparse Preconditioner’s references to any memory allocated by the sparse library.
