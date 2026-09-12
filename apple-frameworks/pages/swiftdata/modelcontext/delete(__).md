> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/delete(_:)](https://developer.apple.com/documentation/swiftdata/modelcontext/delete(_:))

# delete(\_:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Removes the specified model from the persistent storage during the next save operation.

## Declaration

```swift
func delete<T>(_ model: T) where T : PersistentModel
```

## Parameters

- `model`: The persistent model to delete.

<a id="discussion"></a>

## Discussion

When the context nexts commits its changes, SwiftData removes the model from the persistent storage. If the model is new and in an unsaved state, the context simply discards it.

## See Also

### Deleting models

- [deletedModelsArray](deletedmodelsarray.md): The array of registered models that the context will remove from the persistent storage during the next save operation.
- [delete(model:where:includeSubclasses:)](delete%28model_where_includesubclasses_%29.md): Removes each model satisfying the given predicate from the persistent storage during the next save operation.
