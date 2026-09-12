> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historydescriptor/sortby](https://developer.apple.com/documentation/swiftdata/historydescriptor/sortby)

# sortBy

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+ · Swift 5.9+

The sort descriptor to use to sort the returned history data.

## Declaration

```swift
var sortBy: [SortDescriptor<TransactionType>]
```

## See Also

### Getting the descriptor configuration

- [fetchLimit](fetchlimit.md): The maximum number of transactions to retrieve from the model store’s history.
- [predicate](predicate.md): The predicate used to initialize the history descriptor.
