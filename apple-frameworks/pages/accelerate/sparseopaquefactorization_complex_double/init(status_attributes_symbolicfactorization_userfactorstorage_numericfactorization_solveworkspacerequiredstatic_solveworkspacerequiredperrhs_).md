> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/sparseopaquefactorization_complex_double/init(status:attributes:symbolicfactorization:userfactorstorage:numericfactorization:solveworkspacerequiredstatic:solveworkspacerequiredperrhs:)

# init(status:attributes:symbolicFactorization:userFactorStorage:numericFactorization:solveWorkspaceRequiredStatic:solveWorkspaceRequiredPerRHS:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
init(status: SparseStatus_t, attributes: SparseAttributesComplex_t, symbolicFactorization: SparseOpaqueSymbolicFactorization, userFactorStorage: Bool, numericFactorization: UnsafeMutableRawPointer?, solveWorkspaceRequiredStatic: Int, solveWorkspaceRequiredPerRHS: Int)
```
