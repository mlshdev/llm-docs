> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/resultssection](https://developer.apple.com/documentation/swiftdata/resultssection)

# ResultsSection

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A section of fetched results grouped by a common section key path value.

## Declaration

```swift
struct ResultsSection<Element, SectionTitle> where Element : PersistentModel, SectionTitle : Hashable
```

<a id="overview"></a>

## Overview

Each section represents a group of elements that share the same value for the `sectionBy` key path used at creation.

You access sections by iterating a [SectionedResults](sectionedresults.md) value returned by a sectioned `@Query`. Each section conforms to `RandomAccessCollection` — iterate it directly to access its elements, and use [title](resultssection/title.md) (or [id](resultssection/id.md)) to access the section grouping value.

```swift
@Query(sort: \.name, sectionBy: \.category)
var items: SectionedResults<Item, String>

ForEach(items) { section in
    Section(section.title) {          // "Work", "Personal", …
        ForEach(section) { item in … } // Item elements
    }
}
```

## Topics

### Accessing section properties

- [id](resultssection/id.md): The unique identifier for the section, which is its [title](resultssection/title.md).

### Instance Properties

- [title](resultssection/title.md): The identifier of the section.

### Default Implementations

- [Equatable Implementations](resultssection/equatable-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
