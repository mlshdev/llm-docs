> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/model(for:)](https://developer.apple.com/documentation/swiftdata/modelcontext/model(for:))

# model(for:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Returns the persistent model for the specified identifier.

## Declaration

```swift
func model(for persistentModelID: PersistentIdentifier) -> any PersistentModel
```

## Parameters

- `persistentModelID`: The identifier of the model to fetch. For more information, see [PersistentIdentifier](../persistentidentifier.md).

<a id="return-value"></a>

## Return Value

The identified persistent model, if known to the context; otherwise, an unsaved model with its [persistentModelID](../persistentmodel/persistentmodelid.md) property set to `persistentModelID`.

## See Also

### Fetching models

- [fetch(\_:)](fetch%28__%29.md): Returns an array of typed models that match the criteria of the specified fetch descriptor.
- [fetch(\_:batchSize:)](fetch%28__batchsize_%29.md): Returns a collection of typed models, in batches, which match the criteria of the specified fetch descriptor.
- [fetchCount(\_:)](fetchcount%28__%29.md): Returns the number of models that match the criteria of the specified fetch descriptor.
- [FetchDescriptor](../fetchdescriptor.md): A type that describes the criteria, sort order, and any additional configuration to use when performing a fetch.
- [FetchResultsCollection](../fetchresultscollection.md): A collection that efficiently provides the results of a completed fetch.
- [enumerate(\_:batchSize:allowEscapingMutations:block:)](enumerate%28__batchsize_allowescapingmutations_block_%29.md): Runs a closure for each model that matches the criteria of the specified fetch descriptor.
- [registeredModel(for:)](registeredmodel%28for_%29.md): Returns the typed model for the specified identifier.
