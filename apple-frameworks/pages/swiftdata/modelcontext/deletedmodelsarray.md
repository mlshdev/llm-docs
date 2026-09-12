> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/deletedmodelsarray](https://developer.apple.com/documentation/swiftdata/modelcontext/deletedmodelsarray)

# deletedModelsArray

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

The array of registered models that the context will remove from the persistent storage during the next save operation.

## Declaration

```swift
var deletedModelsArray: [any PersistentModel] { get }
```

## See Also

### Deleting models

- [delete(\_:)](delete%28__%29.md): Removes the specified model from the persistent storage during the next save operation.
- [delete(model:where:includeSubclasses:)](delete%28model_where_includesubclasses_%29.md): Removes each model satisfying the given predicate from the persistent storage during the next save operation.
