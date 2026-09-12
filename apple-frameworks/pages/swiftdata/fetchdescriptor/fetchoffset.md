> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/fetchdescriptor/fetchoffset](https://developer.apple.com/documentation/swiftdata/fetchdescriptor/fetchoffset)

# fetchOffset

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

The offset of the first matching model to fetch.

## Declaration

```swift
var fetchOffset: Int?
```

<a id="discussion"></a>

## Discussion

Use this property to skip a number of models that the fetch would otherwise return. For example, given a fetch that typically returns A, B, C, and D, specifying a fetch offset of 1 will return B, C, D, and a fetch offset of 4 will return an empty set of results. In combination with [fetchLimit](fetchlimit.md), you can create a subrange of an arbitrary result set.

The default value is `0`.

## See Also

### Constraining the fetch

- [predicate](predicate.md): The logical condition that determines whether the fetch includes a specific model in its results.
- [sortBy](sortby.md): The sort descriptors that tell the fetch how to order its results.
- [fetchLimit](fetchlimit.md): The maximum number of models the fetch can return.
- [includePendingChanges](includependingchanges.md): A Boolean value that indicates whether, when the fetch runs, it matches against currently unsaved changes in the model context.
