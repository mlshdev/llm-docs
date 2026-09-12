> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/fetchdescriptor/predicate](https://developer.apple.com/documentation/swiftdata/fetchdescriptor/predicate)

# predicate

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

The logical condition that determines whether the fetch includes a specific model in its results.

## Declaration

```swift
var predicate: Predicate<T>?
```

<a id="discussion"></a>

## Discussion

Use this property to replace or remove the fetch descriptor’s predicate. If the value is `nil`, any fetch using the descriptor will return all models of the associated type.

The default value is the predicate you specify when calling [init(predicate:sortBy:)](init%28predicate_sortby_%29.md).

## See Also

### Constraining the fetch

- [sortBy](sortby.md): The sort descriptors that tell the fetch how to order its results.
- [fetchLimit](fetchlimit.md): The maximum number of models the fetch can return.
- [fetchOffset](fetchoffset.md): The offset of the first matching model to fetch.
- [includePendingChanges](includependingchanges.md): A Boolean value that indicates whether, when the fetch runs, it matches against currently unsaved changes in the model context.
