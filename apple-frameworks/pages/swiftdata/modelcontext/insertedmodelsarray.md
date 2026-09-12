> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/insertedmodelsarray](https://developer.apple.com/documentation/swiftdata/modelcontext/insertedmodelsarray)

# insertedModelsArray

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

The array of inserted models that the context is yet to persist.

## Declaration

```swift
var insertedModelsArray: [any PersistentModel] { get }
```

## See Also

### Inserting models

- [insert(\_:)](insert%28__%29.md): Registers the specified model with the context so it can include the model in the next save operation.
