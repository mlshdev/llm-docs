> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparserefactor(_:_:_:)-4ofvz](https://developer.apple.com/documentation/accelerate/sparserefactor(_:_:_:)-4ofvz)

# SparseRefactor(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values, without any internal allocations.

## Declaration

```swift
func SparseRefactor(_ Matrix: SparseMatrix_Complex_Float, _ Factored: UnsafeMutablePointer<SparseOpaqueFactorization_Complex_Float>, _ workspace: UnsafeMutableRawPointer)
```

## Parameters

- `Matrix`: The matrix to be factorized.
- `workspace`: A pointer to a workspace of size at least `Factorization->symbolicFactorization.workspaceSize_Float * 2` bytes. This memory must be 16-byte aligned (any allocation returned by `malloc` has this property). This workspace may be reused or destroyed by the user as soon as the function returns.

<a id="discussion"></a>

## Discussion

`Matrix` must have the same non-zero structure as that used for the original factorization.

The same numerical factorization options will be used as in the original construction of `Factorization`.

This call provides very similar behavior to that which can be achieved by reusing explicit storage supplied to `SparseFactor` as the argument `factorStorage`. However, in addition to providing a simplified call sequence, this call can also reuse any additional storage allocated to accomodate delayed pivots.

Note that internal memory allocations may occur in the case of pivoted factorizations that result in delayed pivots. If you require closer control over memory allocations, supply an `sfoptions.malloc` function that implements the required behaviour, or use an alternative non-pivoted factorization returns. Note that if `sfoptions.malloc` returns `NULL` the factorization will abort immediately.

Note that if the reference count of the underlying object is not exactly one (i.e. if there are any implict copies as a result of calls to `SparseGetTranspose` or `SparseCreateSubfactor()` that have not been destroyed through a call to `SparseCleanup`), then new storage will be allocated regardless.

## See Also

### Matrix Refactorizations Functions with User-Defined Workspace

- [SparseRefactor(\_:\_:\_:)](sparserefactor%28______%29-9mqeq.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage, without internal memory allocation.
- [SparseRefactor(\_:\_:\_:)](sparserefactor%28______%29-2dqt8.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage, without internal memory allocation.
- [SparseRefactor(\_:\_:\_:\_:)](sparserefactor%28________%29-59ehf.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage and specified options, and without internal memory allocation.
- [SparseRefactor(\_:\_:\_:\_:)](sparserefactor%28________%29-8i8vi.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage and specified options, and without internal memory allocation.
- [SparseRefactor(\_:\_:\_:)](sparserefactor%28______%29-593yb.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values, without any internal allocations.
- [SparseRefactor(\_:\_:\_:\_:)](sparserefactor%28________%29-201rh.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values, using updated options and without any internal allocations.
- [SparseRefactor(\_:\_:\_:\_:)](sparserefactor%28________%29-20xqc.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values, using updated options and without any internal allocations.

# SparseRefactor (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values, without any internal allocations.

## Declaration

```objectivec
static void SparseRefactor(SparseMatrix_Complex_Float Matrix, SparseOpaqueFactorization_Complex_Float *Factorization, void *workspace);
```

## Parameters

- `Matrix`: The matrix to be factorized.
- `Factorization`: The factorization to be updated.
- `workspace`: A pointer to a workspace of size at least `Factorization->symbolicFactorization.workspaceSize_Float * 2` bytes. This memory must be 16-byte aligned (any allocation returned by `malloc` has this property). This workspace may be reused or destroyed by the user as soon as the function returns.

<a id="discussion"></a>

## Discussion

`Matrix` must have the same non-zero structure as that used for the original factorization.

The same numerical factorization options will be used as in the original construction of `Factorization`.

This call provides very similar behavior to that which can be achieved by reusing explicit storage supplied to `SparseFactor` as the argument `factorStorage`. However, in addition to providing a simplified call sequence, this call can also reuse any additional storage allocated to accomodate delayed pivots.

Note that internal memory allocations may occur in the case of pivoted factorizations that result in delayed pivots. If you require closer control over memory allocations, supply an `sfoptions.malloc` function that implements the required behaviour, or use an alternative non-pivoted factorization returns. Note that if `sfoptions.malloc` returns `NULL` the factorization will abort immediately.

Note that if the reference count of the underlying object is not exactly one (i.e. if there are any implict copies as a result of calls to `SparseGetTranspose` or `SparseCreateSubfactor()` that have not been destroyed through a call to `SparseCleanup`), then new storage will be allocated regardless.

## See Also

### Matrix Refactorizations Functions with User-Defined Workspace

- [SparseRefactor](sparserefactor%28______%29-9mqeq.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage, without internal memory allocation.
- [SparseRefactor](sparserefactor%28______%29-2dqt8.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage, without internal memory allocation.
- [SparseRefactor](sparserefactor%28________%29-59ehf.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage and specified options, and without internal memory allocation.
- [SparseRefactor](sparserefactor%28________%29-8i8vi.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage and specified options, and without internal memory allocation.
- [SparseRefactor](sparserefactor%28______%29-593yb.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values, without any internal allocations.
- [SparseRefactor](sparserefactor%28________%29-201rh.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values, using updated options and without any internal allocations.
- [SparseRefactor](sparserefactor%28________%29-20xqc.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values, using updated options and without any internal allocations.
