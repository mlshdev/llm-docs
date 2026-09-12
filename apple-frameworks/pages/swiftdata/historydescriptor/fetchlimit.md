> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historydescriptor/fetchlimit](https://developer.apple.com/documentation/swiftdata/historydescriptor/fetchlimit)

# fetchLimit

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

The maximum number of transactions to retrieve from the model store’s history.

## Declaration

```swift
var fetchLimit: UInt64
```

<a id="discussion"></a>

## Discussion

> **Important**

> Use `nil` to tell the fetch to return all transactions of the associated type, not `0`.

The default value is `nil`.

## See Also

### Getting the descriptor configuration

- [predicate](predicate.md): The predicate used to initialize the history descriptor.
- [sortBy](sortby.md): The sort descriptor to use to sort the returned history data.
