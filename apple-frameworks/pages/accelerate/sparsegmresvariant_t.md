> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegmresvariant_t](https://developer.apple.com/documentation/accelerate/sparsegmresvariant_t)

# SparseGMRESVariant_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines the exact variant of GMRES to implement

## Declaration

```swift
struct SparseGMRESVariant_t
```

## Topics

### Constants

- [SparseVariantDQGMRES](sparsevariantdqgmres.md): A constant that specifies the DQGMRES variant.
- [SparseVariantFGMRES](sparsevariantfgmres.md): A constant that specifies the flexible GMRES variant.
- [SparseVariantGMRES](sparsevariantgmres.md): A constant that specifies the standard restarted GMRES variant.

### Raw Values

- [init(\_:)](sparsegmresvariant_t/init%28__%29.md)
- [init(rawValue:)](sparsegmresvariant_t/init%28rawvalue_%29.md)
- [rawValue](sparsegmresvariant_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Inspecting GMRES Options

- [atol](sparsegmresoptions/atol.md): The absolute convergence tolerance.
- [maxIterations](sparsegmresoptions/maxiterations.md): The maximum number of iterations to perform.
- [nvec](sparsegmresoptions/nvec.md): The number of orthogonal vectors the operation maintains.
- [reportError](sparsegmresoptions/reporterror.md): An optional error-reporting routine.
- [reportStatus](sparsegmresoptions/reportstatus.md): The function to report status.
- [rtol](sparsegmresoptions/rtol.md): The relative convergence tolerance.
- [variant](sparsegmresoptions/variant.md): The exact variant of GMRES to implement.

# SparseGMRESVariant_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines the exact variant of GMRES to implement

## Declaration

```objectivec
typedef enum { ... } SparseGMRESVariant_t;
```

## Topics

### Constants

- [SparseVariantDQGMRES](sparsevariantdqgmres.md): A constant that specifies the DQGMRES variant.
- [SparseVariantFGMRES](sparsevariantfgmres.md): A constant that specifies the flexible GMRES variant.
- [SparseVariantGMRES](sparsevariantgmres.md): A constant that specifies the standard restarted GMRES variant.

## See Also

### Inspecting GMRES Options

- [atol](sparsegmresoptions/atol.md): The absolute convergence tolerance.
- [maxIterations](sparsegmresoptions/maxiterations.md): The maximum number of iterations to perform.
- [nvec](sparsegmresoptions/nvec.md): The number of orthogonal vectors the operation maintains.
- [reportError](sparsegmresoptions/reporterror.md): An optional error-reporting routine.
- [reportStatus](sparsegmresoptions/reportstatus.md): The function to report status.
- [rtol](sparsegmresoptions/rtol.md): The relative convergence tolerance.
- [variant](sparsegmresoptions/variant.md): The exact variant of GMRES to implement.
