> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/resultsobserver/fetchdescriptor](https://developer.apple.com/documentation/swiftdata/resultsobserver/fetchdescriptor)

# fetchDescriptor

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The fetch descriptor used to query the model context.

## Declaration

```swift
final var fetchDescriptor: FetchDescriptor<Element> { get }
```

<a id="discussion"></a>

## Discussion

This descriptor defines the complete fetch criteria including predicate, sort descriptors, and other fetch options. It is configured at initialization and can be indirectly modified through the [filterBy](filterby.md) and [sortBy](sortby.md) computed properties.

## See Also

### Accessing observer properties

- [filterBy](filterby.md): The predicate used to filter which models are included in the results.
- [modelContext](modelcontext.md): The model context from which models are fetched.
- [sortBy](sortby.md): The sort descriptors used to order the results.
- [sectionBy](sectionby.md): The key path on the element used to determine section grouping.
- [sections](sections.md): The sections computed from the current results, grouped by [sectionBy](sectionby.md).
