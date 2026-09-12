> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/fetchdescriptor/includependingchanges](https://developer.apple.com/documentation/swiftdata/fetchdescriptor/includependingchanges)

# includePendingChanges

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

A Boolean value that indicates whether, when the fetch runs, it matches against currently unsaved changes in the model context.

## Declaration

```swift
var includePendingChanges: Bool
```

<a id="discussion"></a>

## Discussion

Set this property’s value to `false` to ignore any unsaved changes in the model context and match against a model’s persisted state instead.

The default value is `true`.

## See Also

### Constraining the fetch

- [predicate](predicate.md): The logical condition that determines whether the fetch includes a specific model in its results.
- [sortBy](sortby.md): The sort descriptors that tell the fetch how to order its results.
- [fetchLimit](fetchlimit.md): The maximum number of models the fetch can return.
- [fetchOffset](fetchoffset.md): The offset of the first matching model to fetch.
