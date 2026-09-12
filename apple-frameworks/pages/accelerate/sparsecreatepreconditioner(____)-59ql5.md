> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsecreatepreconditioner(_:_:)-59ql5](https://developer.apple.com/documentation/accelerate/sparsecreatepreconditioner(_:_:)-59ql5)

# SparseCreatePreconditioner(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a preconditioner for the specified matrix of single-precision values.

## Declaration

```swift
func SparseCreatePreconditioner(_ type: SparsePreconditioner_t, _ A: SparseMatrix_Float) -> SparseOpaquePreconditioner_Float
```

## Parameters

- `type`: The type of preconditioner to create.
- `A`: The matrix to construct a preconditioner for.

<a id="return-value"></a>

## Return Value

A [SparseOpaquePreconditioner_Float](sparseopaquepreconditioner_float.md) structure.  You must free the resource through a call to [SparseCleanup(\_:)](sparsecleanup%28__%29-45lq7.md) after you finish with the object.

## See Also

### Creating preconditioners

- [SparseCreatePreconditioner(\_:\_:)](sparsecreatepreconditioner%28____%29-4ysww.md): Creates a preconditioner for the specified matrix of double-precision values.
- [SparseOpaquePreconditioner_Double](sparseopaquepreconditioner_double.md): A structure that represents a double-precision preconditioner.
- [SparseOpaquePreconditioner_Float](sparseopaquepreconditioner_float.md): A structure that represents a single-precision preconditioner.
- [SparseCreatePreconditioner(\_:\_:)](sparsecreatepreconditioner%28____%29-1yp4n.md): Create a preconditioner for the given matrix of complex double values.
- [SparseCreatePreconditioner(\_:\_:)](sparsecreatepreconditioner%28____%29-95u9p.md): Create a preconditioner for the given matrix of complex float values.

# SparseCreatePreconditioner (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a preconditioner for the specified matrix of single-precision values.

## Declaration

```objectivec
static SparseOpaquePreconditioner_Float SparseCreatePreconditioner(SparsePreconditioner_t type, SparseMatrix_Float A);
```

## Parameters

- `type`: The type of preconditioner to create.
- `A`: The matrix to construct a preconditioner for.

<a id="return-value"></a>

## Return Value

A [SparseOpaquePreconditioner_Float](sparseopaquepreconditioner_float.md) structure.  You must free the resource through a call to [SparseCleanup](sparsecleanup%28__%29-45lq7.md) after you finish with the object.

## See Also

### Creating preconditioners

- [SparseCreatePreconditioner](sparsecreatepreconditioner%28____%29-4ysww.md): Creates a preconditioner for the specified matrix of double-precision values.
- [SparseOpaquePreconditioner_Double](sparseopaquepreconditioner_double.md): A structure that represents a double-precision preconditioner.
- [SparseOpaquePreconditioner_Float](sparseopaquepreconditioner_float.md): A structure that represents a single-precision preconditioner.
- [SparseCreatePreconditioner](sparsecreatepreconditioner%28____%29-1yp4n.md): Create a preconditioner for the given matrix of complex double values.
- [SparseCreatePreconditioner](sparsecreatepreconditioner%28____%29-95u9p.md): Create a preconditioner for the given matrix of complex float values.
