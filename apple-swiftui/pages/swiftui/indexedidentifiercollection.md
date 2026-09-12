> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/indexedidentifiercollection](https://developer.apple.com/documentation/swiftui/indexedidentifiercollection)

# IndexedIdentifierCollection

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A collection wrapper that iterates over the indices and identifiers of a collection together.

## Declaration

```swift
struct IndexedIdentifierCollection<Base, ID> where Base : Collection, ID : Hashable
```

<a id="overview"></a>

## Overview

You don’t use this type directly. Instead SwiftUI creates this type on your behalf.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Editing a list

- [moveDisabled(\_:)](view/movedisabled%28__%29.md): Adds a condition for whether the view’s view hierarchy is movable.
- [deleteDisabled(\_:)](view/deletedisabled%28__%29.md): Adds a condition for whether the view’s view hierarchy is deletable.
- [editMode](environmentvalues/editmode.md): An indication of whether the user can edit the contents of a view associated with this environment.
- [EditMode](editmode.md): A mode that indicates whether the user can edit a view’s content.
- [EditActions](editactions.md): A set of edit actions on a collection of data that a view can offer to a user.
- [EditableCollectionContent](editablecollectioncontent.md): An opaque wrapper view that adds editing capabilities to a row in a list.
