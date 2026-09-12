> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/resultsobserver/sectionby](https://developer.apple.com/documentation/swiftdata/resultsobserver/sectionby)

# sectionBy

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The key path on the element used to determine section grouping.

## Declaration

```swift
final var sectionBy: PartialKeyPath<Element>? { get }
```

<a id="discussion"></a>

## Discussion

Returns `nil` if no section grouping was configured at initialization.

## See Also

### Accessing observer properties

- [fetchDescriptor](fetchdescriptor.md): The fetch descriptor used to query the model context.
- [filterBy](filterby.md): The predicate used to filter which models are included in the results.
- [modelContext](modelcontext.md): The model context from which models are fetched.
- [sortBy](sortby.md): The sort descriptors used to order the results.
- [sections](sections.md): The sections computed from the current results, grouped by [sectionBy](sectionby.md).
