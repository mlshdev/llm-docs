> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sectionedfetchresults/sectionidentifier](https://developer.apple.com/documentation/swiftui/sectionedfetchresults/sectionidentifier)

# sectionIdentifier

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The key path that the system uses to group fetched results into sections.

## Declaration

```swift
@MainActor @preconcurrency var sectionIdentifier: KeyPath<Result, SectionIdentifier> { get nonmutating set }
```

<a id="discussion"></a>

## Discussion

Set this value to cause the associated [SectionedFetchRequest](../sectionedfetchrequest.md) to execute a fetch with a new section identifier, producing an updated collection of results. Changing this value produces a new set of sections. Use care to coordinate section and sort updates, as described in [SectionedFetchRequest.Configuration](../sectionedfetchrequest/configuration.md).

## See Also

### Configuring the associated sectioned fetch request

- [nsPredicate](nspredicate.md): The request’s predicate.
- [sortDescriptors](sortdescriptors.md): Conforms when `SectionIdentifier` conforms to `Hashable` and `Result` inherits `NSManagedObject`. The request’s sort descriptors, accessed as value types.
- [nsSortDescriptors](nssortdescriptors.md): The request’s sort descriptors, accessed as reference types.
- [SectionedFetchResults.Section](section.md): A collection of fetched results that share a specified identifier.
