> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparserefactor(_:_:_:)-q0va](https://developer.apple.com/documentation/accelerate/sparserefactor(_:_:_:)-q0va)

# SparseRefactor(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values, using different options.

## Declaration

```swift
func SparseRefactor(_ Matrix: SparseMatrix_Complex_Double, _ Factorization: UnsafeMutablePointer<SparseOpaqueFactorization_Complex_Double>, _ nfoptions: SparseNumericFactorOptions)
```

## Parameters

- `Matrix`: The matrix to be factorized.
- `Factorization`: The factorization to be updated.
- `nfoptions`: Numeric factor options, for example pivoting parameters.

<a id="discussion"></a>

## Discussion

`Matrix` must have the same non-zero structure as that used for the original factorization.

This call provides very similar behavior to that which can be achieved by reusing explicit storage supplied to `SparseFactor` as the argument `factorStorage`. However, in addition to providing a simplified call sequence, this call can also reuse any additional storage allocated to accomodate delayed pivots.

Note that if the reference count of the underlying object is not exactly one (i.e. if there are any implict copies as a result of calls to `SparseGetTranspose` or `SparseCreateSubfactor()` that have not been destroyed through a call to `SparseCleanup`), then new storage will be allocated regardless.

## See Also

### Matrix Refactorization Functions

- [SparseRefactor(\_:\_:)](sparserefactor%28____%29-8vrf5.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage.
- [SparseRefactor(\_:\_:)](sparserefactor%28____%29-21q4x.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage.
- [SparseRefactor(\_:\_:\_:)](sparserefactor%28______%29-6ttkd.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage and specified options.
- [SparseRefactor(\_:\_:\_:)](sparserefactor%28______%29-2ovxs.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage and specified options.
- [SparseRefactor(\_:\_:)](sparserefactor%28____%29-mgni.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values.
- [SparseRefactor(\_:\_:)](sparserefactor%28____%29-zegz.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values.
- [SparseRefactor(\_:\_:\_:)](sparserefactor%28______%29-4chx2.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values, using different options.

# SparseRefactor (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values, using different options.

## Declaration

```objectivec
static void SparseRefactor(SparseMatrix_Complex_Double Matrix, SparseOpaqueFactorization_Complex_Double *Factorization, SparseNumericFactorOptions nfoptions);
```

## Parameters

- `Matrix`: The matrix to be factorized.
- `Factorization`: The factorization to be updated.
- `nfoptions`: Numeric factor options, for example pivoting parameters.

<a id="discussion"></a>

## Discussion

`Matrix` must have the same non-zero structure as that used for the original factorization.

This call provides very similar behavior to that which can be achieved by reusing explicit storage supplied to `SparseFactor` as the argument `factorStorage`. However, in addition to providing a simplified call sequence, this call can also reuse any additional storage allocated to accomodate delayed pivots.

Note that if the reference count of the underlying object is not exactly one (i.e. if there are any implict copies as a result of calls to `SparseGetTranspose` or `SparseCreateSubfactor()` that have not been destroyed through a call to `SparseCleanup`), then new storage will be allocated regardless.

## See Also

### Matrix Refactorization Functions

- [SparseRefactor](sparserefactor%28____%29-8vrf5.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage.
- [SparseRefactor](sparserefactor%28____%29-21q4x.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage.
- [SparseRefactor](sparserefactor%28______%29-6ttkd.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage and specified options.
- [SparseRefactor](sparserefactor%28______%29-2ovxs.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage and specified options.
- [SparseRefactor](sparserefactor%28____%29-mgni.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values.
- [SparseRefactor](sparserefactor%28____%29-zegz.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values.
- [SparseRefactor](sparserefactor%28______%29-4chx2.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values, using different options.
