> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/resultsobserver/modelcontext](https://developer.apple.com/documentation/swiftdata/resultsobserver/modelcontext)

# modelContext

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The model context from which models are fetched.

## Declaration

```swift
final let modelContext: ModelContext
```

<a id="discussion"></a>

## Discussion

This context is set at initialization and determines the data store and change-tracking scope for the observer.

## See Also

### Accessing observer properties

- [fetchDescriptor](fetchdescriptor.md): The fetch descriptor used to query the model context.
- [filterBy](filterby.md): The predicate used to filter which models are included in the results.
- [sortBy](sortby.md): The sort descriptors used to order the results.
- [sectionBy](sectionby.md): The key path on the element used to determine section grouping.
- [sections](sections.md): The sections computed from the current results, grouped by [sectionBy](sectionby.md).
