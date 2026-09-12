> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchquery/results-swift.struct](https://developer.apple.com/documentation/corespotlight/cssearchquery/results-swift.struct)

# CSSearchQuery.Results

**Framework:** Core Spotlight  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An asynchronous sequence that contains the results that match the query string.

## Declaration

```swift
struct Results
```

<a id="Discussion"></a>

## Discussion

A `CSSearchQuery/Results-swift.struct` structure contains the results of a query. Fetch this structure from the [results](results-swift.property.md) property of your query object to execute the query automatically and begin the delivery of the results. Use each instance of the structure to get the details for a single result.

For more information about how to use this structure, see the [results](results-swift.property.md) property.

## Topics

### Structures

- [CSSearchQuery.Results.Item](results-swift.struct/item.md)
- [CSSearchQuery.Results.Iterator](results-swift.struct/iterator.md)

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Executing the query automatically

- [results](results-swift.property.md): The results that match the current query string.
