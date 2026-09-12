> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/fetchdescriptor/fetchlimit](https://developer.apple.com/documentation/swiftdata/fetchdescriptor/fetchlimit)

# fetchLimit

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

The maximum number of models the fetch can return.

## Declaration

```swift
var fetchLimit: Int?
```

<a id="discussion"></a>

## Discussion

> **Important**

> Use `nil` to tell the fetch to return all models of the associated type, not `0`.

The default value is `nil`.

## See Also

### Constraining the fetch

- [predicate](predicate.md): The logical condition that determines whether the fetch includes a specific model in its results.
- [sortBy](sortby.md): The sort descriptors that tell the fetch how to order its results.
- [fetchOffset](fetchoffset.md): The offset of the first matching model to fetch.
- [includePendingChanges](includependingchanges.md): A Boolean value that indicates whether, when the fetch runs, it matches against currently unsaved changes in the model context.
