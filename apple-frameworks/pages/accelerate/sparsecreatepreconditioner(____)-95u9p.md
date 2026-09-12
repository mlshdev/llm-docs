> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsecreatepreconditioner(_:_:)-95u9p](https://developer.apple.com/documentation/accelerate/sparsecreatepreconditioner(_:_:)-95u9p)

# SparseCreatePreconditioner(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Create a preconditioner for the given matrix of complex float values.

## Declaration

```swift
func SparseCreatePreconditioner(_ type: SparsePreconditioner_t, _ A: SparseMatrix_Complex_Float) -> SparseOpaquePreconditioner_Complex_Float
```

## Parameters

- `type`: (Input) The type of preconditioner to create.
- `A`: (Input) The matrix to construct a preconditioner for.

<a id="return-value"></a>

## Return Value

The constructed preconditioner object. Resource must be freed through a call to `SparseCleanup()` once the user is finished with the preconditioner.

## See Also

### Creating preconditioners

- [SparseCreatePreconditioner(\_:\_:)](sparsecreatepreconditioner%28____%29-4ysww.md): Creates a preconditioner for the specified matrix of double-precision values.
- [SparseCreatePreconditioner(\_:\_:)](sparsecreatepreconditioner%28____%29-59ql5.md): Creates a preconditioner for the specified matrix of single-precision values.
- [SparseOpaquePreconditioner_Double](sparseopaquepreconditioner_double.md): A structure that represents a double-precision preconditioner.
- [SparseOpaquePreconditioner_Float](sparseopaquepreconditioner_float.md): A structure that represents a single-precision preconditioner.
- [SparseCreatePreconditioner(\_:\_:)](sparsecreatepreconditioner%28____%29-1yp4n.md): Create a preconditioner for the given matrix of complex double values.

# SparseCreatePreconditioner (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Create a preconditioner for the given matrix of complex float values.

## Declaration

```objectivec
static SparseOpaquePreconditioner_Complex_Float SparseCreatePreconditioner(SparsePreconditioner_t type, SparseMatrix_Complex_Float A);
```

## Parameters

- `type`: (Input) The type of preconditioner to create.
- `A`: (Input) The matrix to construct a preconditioner for.

<a id="return-value"></a>

## Return Value

The constructed preconditioner object. Resource must be freed through a call to `SparseCleanup()` once the user is finished with the preconditioner.

## See Also

### Creating preconditioners

- [SparseCreatePreconditioner](sparsecreatepreconditioner%28____%29-4ysww.md): Creates a preconditioner for the specified matrix of double-precision values.
- [SparseCreatePreconditioner](sparsecreatepreconditioner%28____%29-59ql5.md): Creates a preconditioner for the specified matrix of single-precision values.
- [SparseOpaquePreconditioner_Double](sparseopaquepreconditioner_double.md): A structure that represents a double-precision preconditioner.
- [SparseOpaquePreconditioner_Float](sparseopaquepreconditioner_float.md): A structure that represents a single-precision preconditioner.
- [SparseCreatePreconditioner](sparsecreatepreconditioner%28____%29-1yp4n.md): Create a preconditioner for the given matrix of complex double values.
