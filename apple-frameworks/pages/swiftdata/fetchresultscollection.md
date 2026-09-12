> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/fetchresultscollection](https://developer.apple.com/documentation/swiftdata/fetchresultscollection)

# FetchResultsCollection

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

A collection that efficiently provides the results of a completed fetch.

## Declaration

```swift
struct FetchResultsCollection<Element>
```

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Fetching models

- [fetch(\_:)](modelcontext/fetch%28__%29.md): Returns an array of typed models that match the criteria of the specified fetch descriptor.
- [fetch(\_:batchSize:)](modelcontext/fetch%28__batchsize_%29.md): Returns a collection of typed models, in batches, which match the criteria of the specified fetch descriptor.
- [fetchCount(\_:)](modelcontext/fetchcount%28__%29.md): Returns the number of models that match the criteria of the specified fetch descriptor.
- [FetchDescriptor](fetchdescriptor.md): A type that describes the criteria, sort order, and any additional configuration to use when performing a fetch.
- [enumerate(\_:batchSize:allowEscapingMutations:block:)](modelcontext/enumerate%28__batchsize_allowescapingmutations_block_%29.md): Runs a closure for each model that matches the criteria of the specified fetch descriptor.
- [model(for:)](modelcontext/model%28for_%29.md): Returns the persistent model for the specified identifier.
- [registeredModel(for:)](modelcontext/registeredmodel%28for_%29.md): Returns the typed model for the specified identifier.
