> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/aimodelasset/summary/operationcount

# AIModelAsset.Summary.OperationCount

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A model operation and the number of times it occurs.

## Declaration

```swift
struct OperationCount
```

## Topics

### Inspecting operation details

- [operationName](operationcount/operationname.md): The name of the operation.
- [count](operationcount/count.md): The number of times this operation occurs in the model.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AIModelAsset.Summary.StorageType](storagetype.md): A scalar storage type and the number of elements that use it.
