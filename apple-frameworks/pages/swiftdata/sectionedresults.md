> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/sectionedresults](https://developer.apple.com/documentation/swiftdata/sectionedresults)

# SectionedResults

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A `RandomAccessCollection` of [ResultsSection](resultssection.md) instances representing sectioned query results.

## Declaration

```swift
struct SectionedResults<Element, SectionTitle> where Element : PersistentModel, SectionTitle : Hashable
```

<a id="overview"></a>

## Overview

`SectionedResults` is the result type for sectioned `@Query` properties. Iterating it yields sections; each section is itself a `RandomAccessCollection` of model elements. Use [subscript(sectionTitle:)](sectionedresults/subscript%28sectiontitle_%29.md) for O(1) lookup by section title.

```swift
@Query(sort: \.name, sectionBy: \.category)
var items: SectionedResults<Item, String>

ForEach(items) { section in              // section: ResultsSection<Item, String>
    Section(section.title) {             // "Work", "Personal", …
        ForEach(section) { item in … }   // item: Item
    }
}

// O(1) named lookup
let workCount = items[sectionTitle: "Work"]?.count ?? 0
```

## Topics

### Instance Properties

- [sectionTitles](sectionedresults/sectiontitles.md): The section titles in order.

### Instance Methods

- [contains(sectionTitle:)](sectionedresults/contains%28sectiontitle_%29.md): Returns whether a section with the given title exists in the collection.
- [index(ofSectionTitled:)](sectionedresults/index%28ofsectiontitled_%29.md): Returns the ordered index of the section with the given title, or `nil` if not found.

### Subscripts

- [subscript(sectionTitle:)](sectionedresults/subscript%28sectiontitle_%29.md): Returns the section with the given title, or `nil` if no such section exists.

### Default Implementations

- [Equatable Implementations](sectionedresults/equatable-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
