> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/resultsobserver/sections](https://developer.apple.com/documentation/swiftdata/resultsobserver/sections)

# sections

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The sections computed from the current results, grouped by [sectionBy](sectionby.md).

## Declaration

```swift
final var sections: SectionedResults<Element, SectionTitle>? { get set }
```

<a id="discussion"></a>

## Discussion

Returns `nil` if this observer was created without a `sectionBy` key path (i.e. `SectionTitle == Never`). When sectioning is enabled, returns a [SectionedResults](../sectionedresults.md) of sections ordered by their first appearance in the sorted results.

The `sectionBy` key path is automatically prepended as the first sort descriptor at initialization, and re-prepended if [sortBy](sortby.md) is mutated, ensuring results are always contiguous within each section.

## See Also

### Accessing observer properties

- [fetchDescriptor](fetchdescriptor.md): The fetch descriptor used to query the model context.
- [filterBy](filterby.md): The predicate used to filter which models are included in the results.
- [modelContext](modelcontext.md): The model context from which models are fetched.
- [sortBy](sortby.md): The sort descriptors used to order the results.
- [sectionBy](sectionby.md): The key path on the element used to determine section grouping.
