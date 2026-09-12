> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegetinertia(_:_:_:_:)-6ca5h](https://developer.apple.com/documentation/accelerate/sparsegetinertia(_:_:_:_:)-6ca5h)

# SparseGetInertia(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns the inertia of an LDLT factorization in complex float.

## Declaration

```swift
func SparseGetInertia(_ Factored: SparseOpaqueFactorization_Complex_Float, _ num_positive: UnsafeMutablePointer<Int32>, _ num_zero: UnsafeMutablePointer<Int32>, _ num_negative: UnsafeMutablePointer<Int32>) -> Int32
```

## Parameters

- `Factored`: The factorization to be queried.
- `num_positive`: Upon return `*num_positive` has been set to the number of positive pivots.
- `num_zero`: Upon return `*num_zero` has been set to the number of zero pivots.
- `num_negative`: Upon return `*num_negative` has been set to the number of negative pivots.

<a id="return-value"></a>

## Return Value

0 on success, non-zero on error

<a id="discussion"></a>

## Discussion

For a given LDLT factorization, this function returns the number of negative, zero and positive pivots taken during the factorization. Note that in some cases, particularly when eigenvalues are close to zero, the computed numerical inertia may not be an accurate reflection of the true inertia of the system, and in particular can be highly dependent on the zeroTolerance (and to a less degree the pivotTolerance) specified in the factorization options.

This call is only supported for factorizations of type `SparseFactorizationLDLTTPP`.

## See Also

### Factorization inertia functions

- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-6r90r.md): Returns the inertia of a single-precision *LDLᵀ* factorization.
- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-2ykzq.md): Returns the inertia of a double-precision *LDLᵀ* factorization.
- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-2gc7f.md): Returns the inertia of an LDLT factorization in complex double.
- [SparseUpdate_t](sparseupdate_t.md): Low-rank update algorithm selector
- [SparseUpdatePartialRefactor](sparseupdatepartialrefactor.md): Low-rank update algorithm selector

# SparseGetInertia (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns the inertia of an LDLT factorization in complex float.

## Declaration

```objectivec
int SparseGetInertia(SparseOpaqueFactorization_Complex_Float Factored, int *num_positive, int *num_zero, int *num_negative);
```

## Parameters

- `Factored`: The factorization to be queried.
- `num_positive`: Upon return `*num_positive` has been set to the number of positive pivots.
- `num_zero`: Upon return `*num_zero` has been set to the number of zero pivots.
- `num_negative`: Upon return `*num_negative` has been set to the number of negative pivots.

<a id="return-value"></a>

## Return Value

0 on success, non-zero on error

<a id="discussion"></a>

## Discussion

For a given LDLT factorization, this function returns the number of negative, zero and positive pivots taken during the factorization. Note that in some cases, particularly when eigenvalues are close to zero, the computed numerical inertia may not be an accurate reflection of the true inertia of the system, and in particular can be highly dependent on the zeroTolerance (and to a less degree the pivotTolerance) specified in the factorization options.

This call is only supported for factorizations of type `SparseFactorizationLDLTTPP`.

## See Also

### Factorization inertia functions

- [SparseGetInertia](sparsegetinertia%28________%29-6r90r.md): Returns the inertia of a single-precision *LDLᵀ* factorization.
- [SparseGetInertia](sparsegetinertia%28________%29-2ykzq.md): Returns the inertia of a double-precision *LDLᵀ* factorization.
- [SparseGetInertia](sparsegetinertia%28________%29-2gc7f.md): Returns the inertia of an LDLT factorization in complex double.
- [SparseUpdate_t](sparseupdate_t.md): Low-rank update algorithm selector
- [SparseUpdatePartialRefactor](sparseupdatepartialrefactor.md): Low-rank update algorithm selector
