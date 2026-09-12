> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/enumerate(_:batchsize:allowescapingmutations:block:)](https://developer.apple.com/documentation/swiftdata/modelcontext/enumerate(_:batchsize:allowescapingmutations:block:))

# enumerate(\_:batchSize:allowEscapingMutations:block:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Runs a closure for each model that matches the criteria of the specified fetch descriptor.

## Declaration

```swift
func enumerate<T>(_ fetch: FetchDescriptor<T>, batchSize: Int = 5000, allowEscapingMutations: Bool = false, block: (T) throws -> Void) throws where T : PersistentModel
```

## Parameters

- `fetch`: A fetch descriptor that provides the configuration for the fetch.
- `batchSize`: The maximum number of models to include in each batch. The default value is 5000.
- `allowEscapingMutations`: A Boolean value that determines whether the closure can leave the context in a modified state after it completes. The default value is `false`.
- `block`: The closure to run for each fetched model.

## See Also

### Fetching models

- [fetch(\_:)](fetch%28__%29.md): Returns an array of typed models that match the criteria of the specified fetch descriptor.
- [fetch(\_:batchSize:)](fetch%28__batchsize_%29.md): Returns a collection of typed models, in batches, which match the criteria of the specified fetch descriptor.
- [fetchCount(\_:)](fetchcount%28__%29.md): Returns the number of models that match the criteria of the specified fetch descriptor.
- [FetchDescriptor](../fetchdescriptor.md): A type that describes the criteria, sort order, and any additional configuration to use when performing a fetch.
- [FetchResultsCollection](../fetchresultscollection.md): A collection that efficiently provides the results of a completed fetch.
- [model(for:)](model%28for_%29.md): Returns the persistent model for the specified identifier.
- [registeredModel(for:)](registeredmodel%28for_%29.md): Returns the typed model for the specified identifier.
