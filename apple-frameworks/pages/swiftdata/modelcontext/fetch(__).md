> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/fetch(_:)](https://developer.apple.com/documentation/swiftdata/modelcontext/fetch(_:))

# fetch(\_:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Returns an array of typed models that match the criteria of the specified fetch descriptor.

## Declaration

```swift
func fetch<T>(_ descriptor: FetchDescriptor<T>) throws -> [T] where T : PersistentModel
```

## Parameters

- `descriptor`: A fetch descriptor that provides the configuration for the fetch.

<a id="return-value"></a>

## Return Value

The array of typed models that satisfy the criteria of the fetch descriptor. If no models match the criteria, the array is empty.

## See Also

### Fetching models

- [fetch(\_:batchSize:)](fetch%28__batchsize_%29.md): Returns a collection of typed models, in batches, which match the criteria of the specified fetch descriptor.
- [fetchCount(\_:)](fetchcount%28__%29.md): Returns the number of models that match the criteria of the specified fetch descriptor.
- [FetchDescriptor](../fetchdescriptor.md): A type that describes the criteria, sort order, and any additional configuration to use when performing a fetch.
- [FetchResultsCollection](../fetchresultscollection.md): A collection that efficiently provides the results of a completed fetch.
- [enumerate(\_:batchSize:allowEscapingMutations:block:)](enumerate%28__batchsize_allowescapingmutations_block_%29.md): Runs a closure for each model that matches the criteria of the specified fetch descriptor.
- [model(for:)](model%28for_%29.md): Returns the persistent model for the specified identifier.
- [registeredModel(for:)](registeredmodel%28for_%29.md): Returns the typed model for the specified identifier.
