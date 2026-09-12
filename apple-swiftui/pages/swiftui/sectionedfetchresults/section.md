> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sectionedfetchresults/section](https://developer.apple.com/documentation/swiftui/sectionedfetchresults/section)

# SectionedFetchResults.Section

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A collection of fetched results that share a specified identifier.

## Declaration

```swift
@MainActor @preconcurrency struct Section
```

<a id="overview"></a>

## Overview

Examine a `Section` instance to find the entities that satisfy a [SectionedFetchRequest](../sectionedfetchrequest.md) predicate, and that have a particular property with the value stored in the section’s [id](section/id.md) parameter. You specify which property by setting the fetch request’s `sectionIdentifier` parameter during initialization, or by modifying the corresponding [SectionedFetchResults](../sectionedfetchresults.md) instance’s [sectionIdentifier](sectionidentifier.md) property.

Obtain specific sections by treating the fetch results as a collection. For example, consider the following property declaration that fetches `Quake` managed objects that the [Loading and displaying a large data feed](../loading-and-displaying-a-large-data-feed.md) sample code project defines to store earthquake data:

```swift
@SectionedFetchRequest<String, Quake>(
    sectionIdentifier: \.day,
    sortDescriptors: [SortDescriptor(\.time, order: .reverse)]
)
private var quakes: SectionedFetchResults<String, Quake>
```

Get the first section using a subscript:

```swift
let firstSection = quakes[0]
```

Alternatively, you can loop over the sections to create a list of sections.

```swift
ForEach(quakes) { section in
    Text("Section \(section.id) has \(section.count) elements")
}
```

The sections also act as collections, which means you can use elements like the [count](https://developer.apple.com/documentation/swift/collection/count) property in the example above.

## Topics

### Identifying the section

- [id](section/id.md): The value that all entities in the section share for a specified key path.

### Getting indices

- [startIndex](section/startindex.md): The index of the first entity in the section.
- [endIndex](section/endindex.md): The index that’s one greater than that of the last entity in the section.

### Getting results

- [subscript(\_:)](section/subscript%28__%29.md): Gets the entity at the specified index within the section.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Configuring the associated sectioned fetch request

- [nsPredicate](nspredicate.md): The request’s predicate.
- [sortDescriptors](sortdescriptors.md): Conforms when `SectionIdentifier` conforms to `Hashable` and `Result` inherits `NSManagedObject`. The request’s sort descriptors, accessed as value types.
- [nsSortDescriptors](nssortdescriptors.md): The request’s sort descriptors, accessed as reference types.
- [sectionIdentifier](sectionidentifier.md): The key path that the system uses to group fetched results into sections.
