> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/insert(_:)](https://developer.apple.com/documentation/swiftdata/modelcontext/insert(_:))

# insert(\_:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Registers the specified model with the context so it can include the model in the next save operation.

## Declaration

```swift
func insert<T>(_ model: T) where T : PersistentModel
```

## Parameters

- `model`: The model to include in the next save operation.

<a id="discussion"></a>

## Discussion

A model is given a temporary persistent identifier until the first time a context saves it, after which that context assigns a permanent identifier. If you call [rollback()](rollback%28%29.md) after inserting a model but before the next save operation, the context discards that model.

## See Also

### Inserting models

- [insertedModelsArray](insertedmodelsarray.md): The array of inserted models that the context is yet to persist.
