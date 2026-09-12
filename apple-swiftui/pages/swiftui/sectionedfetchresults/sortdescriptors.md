> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sectionedfetchresults/sortdescriptors](https://developer.apple.com/documentation/swiftui/sectionedfetchresults/sortdescriptors)

# sortDescriptors

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The request’s sort descriptors, accessed as value types.

## Declaration

```swift
@MainActor @preconcurrency var sortDescriptors: [SortDescriptor<Result>] { get nonmutating set }
```

<a id="discussion"></a>

## Discussion

Set this value to cause the associated [SectionedFetchRequest](../sectionedfetchrequest.md) to execute a fetch with a new collection of [SortDescriptor](https://developer.apple.com/documentation/foundation/sortdescriptor) instances. The order of entities stored in the results collection may change as a result. Use care to coordinate section and sort updates, as described in [SectionedFetchRequest.Configuration](../sectionedfetchrequest/configuration.md).

If you want to use [NSSortDescriptor](https://developer.apple.com/documentation/foundation/nssortdescriptor) instances, set [nsSortDescriptors](nssortdescriptors.md) instead.

## See Also

### Configuring the associated sectioned fetch request

- [nsPredicate](nspredicate.md): The request’s predicate.
- [nsSortDescriptors](nssortdescriptors.md): The request’s sort descriptors, accessed as reference types.
- [sectionIdentifier](sectionidentifier.md): The key path that the system uses to group fetched results into sections.
- [SectionedFetchResults.Section](section.md): A collection of fetched results that share a specified identifier.
