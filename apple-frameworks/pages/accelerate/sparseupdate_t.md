> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseupdate_t](https://developer.apple.com/documentation/accelerate/sparseupdate_t)

# SparseUpdate_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Low-rank update algorithm selector

## Declaration

```swift
struct SparseUpdate_t
```

<a id="overview"></a>

## Overview

See `SparseUpdateFactor()` for a full description of these updates.

- **`SparseUpdatePartialRefactor`**: Perform update using a partial refactorization of the matrix

## Topics

### Initializers

- [init(\_:)](sparseupdate_t/init%28__%29.md)
- [init(rawValue:)](sparseupdate_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](sparseupdate_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Factorization inertia functions

- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-6r90r.md): Returns the inertia of a single-precision *LDLᵀ* factorization.
- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-2ykzq.md): Returns the inertia of a double-precision *LDLᵀ* factorization.
- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-2gc7f.md): Returns the inertia of an LDLT factorization in complex double.
- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-6ca5h.md): Returns the inertia of an LDLT factorization in complex float.
- [SparseUpdatePartialRefactor](sparseupdatepartialrefactor.md): Low-rank update algorithm selector

# SparseUpdate_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Low-rank update algorithm selector

## Declaration

```objectivec
typedef enum { ... } SparseUpdate_t;
```

<a id="overview"></a>

## Overview

See `SparseUpdateFactor()` for a full description of these updates.

- **`SparseUpdatePartialRefactor`**: Perform update using a partial refactorization of the matrix

## See Also

### Factorization inertia functions

- [SparseGetInertia](sparsegetinertia%28________%29-6r90r.md): Returns the inertia of a single-precision *LDLᵀ* factorization.
- [SparseGetInertia](sparsegetinertia%28________%29-2ykzq.md): Returns the inertia of a double-precision *LDLᵀ* factorization.
- [SparseGetInertia](sparsegetinertia%28________%29-2gc7f.md): Returns the inertia of an LDLT factorization in complex double.
- [SparseGetInertia](sparsegetinertia%28________%29-6ca5h.md): Returns the inertia of an LDLT factorization in complex float.
- [SparseUpdatePartialRefactor](sparseupdatepartialrefactor.md): Low-rank update algorithm selector
