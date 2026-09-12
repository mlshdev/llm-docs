> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseupdatepartialrefactor](https://developer.apple.com/documentation/accelerate/sparseupdatepartialrefactor)

# SparseUpdatePartialRefactor (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Low-rank update algorithm selector

## Declaration

```swift
var SparseUpdatePartialRefactor: SparseUpdate_t { get }
```

<a id="discussion"></a>

## Discussion

See `SparseUpdateFactor()` for a full description of these updates.

- **`SparseUpdatePartialRefactor`**: Perform update using a partial refactorization of the matrix

## See Also

### Factorization inertia functions

- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-6r90r.md): Returns the inertia of a single-precision *LDLᵀ* factorization.
- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-2ykzq.md): Returns the inertia of a double-precision *LDLᵀ* factorization.
- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-2gc7f.md): Returns the inertia of an LDLT factorization in complex double.
- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-6ca5h.md): Returns the inertia of an LDLT factorization in complex float.
- [SparseUpdate_t](sparseupdate_t.md): Low-rank update algorithm selector

# SparseUpdatePartialRefactor (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Low-rank update algorithm selector

## Declaration

```objectivec
SparseUpdatePartialRefactor
```

<a id="discussion"></a>

## Discussion

See `SparseUpdateFactor()` for a full description of these updates.

- **`SparseUpdatePartialRefactor`**: Perform update using a partial refactorization of the matrix

## See Also

### Factorization inertia functions

- [SparseGetInertia](sparsegetinertia%28________%29-6r90r.md): Returns the inertia of a single-precision *LDLᵀ* factorization.
- [SparseGetInertia](sparsegetinertia%28________%29-2ykzq.md): Returns the inertia of a double-precision *LDLᵀ* factorization.
- [SparseGetInertia](sparsegetinertia%28________%29-2gc7f.md): Returns the inertia of an LDLT factorization in complex double.
- [SparseGetInertia](sparsegetinertia%28________%29-6ca5h.md): Returns the inertia of an LDLT factorization in complex float.
- [SparseUpdate_t](sparseupdate_t.md): Low-rank update algorithm selector
