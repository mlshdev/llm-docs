> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/resultsobserver/filterby](https://developer.apple.com/documentation/swiftdata/resultsobserver/filterby)

# filterBy

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The predicate used to filter which models are included in the results.

## Declaration

```swift
final var filterBy: Predicate<Element>? { get set }
```

<a id="discussion"></a>

## Discussion

Setting this property updates the underlying [fetchDescriptor](fetchdescriptor.md)’s predicate and immediately refetches on the calling actor — results are synchronously up to date before the setter returns. Set to `nil` to remove filtering and include all models of this type.

## See Also

### Accessing observer properties

- [fetchDescriptor](fetchdescriptor.md): The fetch descriptor used to query the model context.
- [modelContext](modelcontext.md): The model context from which models are fetched.
- [sortBy](sortby.md): The sort descriptors used to order the results.
- [sectionBy](sectionby.md): The key path on the element used to determine section grouping.
- [sections](sections.md): The sections computed from the current results, grouped by [sectionBy](sectionby.md).
