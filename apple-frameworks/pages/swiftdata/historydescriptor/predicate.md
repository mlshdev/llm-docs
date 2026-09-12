> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historydescriptor/predicate](https://developer.apple.com/documentation/swiftdata/historydescriptor/predicate)

# predicate

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

The predicate used to initialize the history descriptor.

## Declaration

```swift
var predicate: Predicate<TransactionType>?
```

## See Also

### Getting the descriptor configuration

- [fetchLimit](fetchlimit.md): The maximum number of transactions to retrieve from the model store’s history.
- [sortBy](sortby.md): The sort descriptor to use to sort the returned history data.
